import crypto from "node:crypto";

export type MisticPayState = "PENDENTE" | "COMPLETO" | "EXPIRADO" | "CANCELADO" | "QUEUED";

export type CreatePixChargeInput = {
  amount: number;
  payerName: string;
  payerDocument: string;
  transactionId?: string;
  description?: string;
};

type MisticPayCreateTransactionResponse = {
  message: string;
  data: {
    transactionId: string | number;
    payer: {
      name: string;
      document: string;
    };
    transactionFee?: number;
    transactionType: string;
    transactionMethod: string;
    transactionAmount: number;
    transactionState: MisticPayState;
    qrCodeBase64?: string | null;
    qrcodeUrl?: string | null;
    copyPaste?: string;
  };
};

export type StickPayPixCharge = {
  id: string;
  provider: "misticpay";
  providerTransactionId: string;
  status: "pending" | "paid" | "expired" | "canceled" | "queued";
  providerState: MisticPayState;
  amount: number;
  fee: number;
  currency: "BRL";
  payer: {
    name: string;
    document: string;
  };
  pix: {
    copyPaste: string;
    qrCodeBase64: string | null;
    qrcodeUrl: string | null;
  };
  createdAt: string;
  expiresAt: string;
};

export type MisticPayWebhookPayload = {
  event?: string;
  transactionId?: string | number;
  transactionType?: "DEPOSITO" | "RETIRADA";
  transactionMethod?: "PIX";
  clientName?: string;
  clientDocument?: string;
  status?: MisticPayState;
  value?: number;
  fee?: number;
  infraction?: {
    id: number;
    externalId: string;
    type: string;
    status: string;
    amount: number;
    currency: string;
  };
  transaction?: {
    transactionId: string;
    endToEndId?: string;
    value?: number;
    status?: string;
  };
};

const MISTIC_PAY_BASE_URL = process.env.MISTICPAY_BASE_URL ?? "https://api.misticpay.com/api";

function cleanDocument(document: string) {
  return document.replace(/\D/g, "");
}

function shouldUseLiveProvider() {
  return process.env.MISTICPAY_MODE === "live" && Boolean(process.env.MISTICPAY_CLIENT_ID && process.env.MISTICPAY_CLIENT_SECRET);
}

function mapState(state: MisticPayState): StickPayPixCharge["status"] {
  const states: Record<MisticPayState, StickPayPixCharge["status"]> = {
    PENDENTE: "pending",
    COMPLETO: "paid",
    EXPIRADO: "expired",
    CANCELADO: "canceled",
    QUEUED: "queued",
  };

  return states[state];
}

function normalizeCreateTransactionResponse(response: MisticPayCreateTransactionResponse): StickPayPixCharge {
  const providerTransactionId = String(response.data.transactionId);
  const createdAt = new Date().toISOString();

  return {
    id: `sp_pix_${providerTransactionId}`,
    provider: "misticpay",
    providerTransactionId,
    status: mapState(response.data.transactionState),
    providerState: response.data.transactionState,
    amount: response.data.transactionAmount,
    fee: response.data.transactionFee ?? 0,
    currency: "BRL",
    payer: response.data.payer,
    pix: {
      copyPaste: response.data.copyPaste ?? "",
      qrCodeBase64: response.data.qrCodeBase64 ?? null,
      qrcodeUrl: response.data.qrcodeUrl ?? null,
    },
    createdAt,
    expiresAt: new Date(Date.now() + 1000 * 60 * 30).toISOString(),
  };
}

function mockCreateTransaction(input: CreatePixChargeInput): MisticPayCreateTransactionResponse {
  const providerTransactionId = crypto.randomInt(10_000_000, 99_999_999).toString();
  const transactionId = input.transactionId ?? `checkout-${providerTransactionId}`;
  const copyPaste = [
    "000201010212",
    "26580014br.gov.bcb.pix",
    `520400005303986540${input.amount.toFixed(2)}`,
    "5802BR5910STICKPAY",
    `62180514${transactionId.slice(0, 14)}`,
    "6304MOCK",
  ].join("");

  return {
    message: "Transação criada com sucesso",
    data: {
      transactionId: providerTransactionId,
      payer: {
        name: input.payerName,
        document: cleanDocument(input.payerDocument),
      },
      transactionFee: Number((input.amount * 0.015).toFixed(2)),
      transactionType: "DEPOSITO",
      transactionMethod: "PIX",
      transactionAmount: input.amount,
      transactionState: "PENDENTE",
      qrCodeBase64: null,
      qrcodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(copyPaste)}`,
      copyPaste,
    },
  };
}

export async function createPixChargeWithMisticPay(input: CreatePixChargeInput) {
  const payload = {
    amount: input.amount,
    payerName: input.payerName,
    payerDocument: cleanDocument(input.payerDocument),
    transactionId: input.transactionId,
    description: input.description,
  };

  if (!shouldUseLiveProvider()) {
    return normalizeCreateTransactionResponse(mockCreateTransaction(input));
  }

  const response = await fetch(`${MISTIC_PAY_BASE_URL}/transactions/create`, {
    method: "POST",
    headers: {
      ci: String(process.env.MISTICPAY_CLIENT_ID),
      cs: String(process.env.MISTICPAY_CLIENT_SECRET),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`MisticPay create transaction failed with status ${response.status}`);
  }

  return normalizeCreateTransactionResponse((await response.json()) as MisticPayCreateTransactionResponse);
}

export function normalizeMisticPayWebhook(payload: MisticPayWebhookPayload) {
  if (payload.event === "INFRACTION" && payload.infraction) {
    return {
      event: "pix.med.updated",
      provider: "misticpay",
      infractionId: payload.infraction.id,
      providerTransactionId: payload.transaction?.transactionId ?? null,
      status: payload.infraction.status,
      amount: payload.infraction.amount,
      raw: payload,
    };
  }

  return {
    event: payload.transactionType === "RETIRADA" ? "pix.withdrawal.updated" : "pix.charge.updated",
    provider: "misticpay",
    providerTransactionId: payload.transactionId ? String(payload.transactionId) : null,
    status: payload.status ? mapState(payload.status) : "pending",
    providerState: payload.status ?? "PENDENTE",
    amount: payload.value ?? 0,
    fee: payload.fee ?? 0,
    payer: {
      name: payload.clientName ?? null,
      document: payload.clientDocument ?? null,
    },
    raw: payload,
  };
}
