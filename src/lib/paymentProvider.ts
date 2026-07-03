import crypto from "node:crypto";

export type ProviderTransactionState = "PENDENTE" | "COMPLETO" | "EXPIRADO" | "CANCELADO" | "QUEUED";

export type CreatePixChargeInput = {
  amount: number;
  payerName: string;
  payerDocument: string;
  transactionId?: string;
  description?: string;
};

type ProviderCreateTransactionResponse = {
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
    transactionState: ProviderTransactionState;
    qrCodeBase64?: string | null;
    qrcodeUrl?: string | null;
    copyPaste?: string;
  };
};

export type StickPayPixCharge = {
  id: string;
  processor: "internal";
  processorTransactionId: string;
  status: "pending" | "paid" | "expired" | "canceled" | "queued";
  processorState: ProviderTransactionState;
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

export type PaymentWebhookPayload = {
  event?: string;
  transactionId?: string | number;
  transactionType?: "DEPOSITO" | "RETIRADA";
  transactionMethod?: "PIX";
  clientName?: string;
  clientDocument?: string;
  status?: ProviderTransactionState;
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

const PAYMENT_PROVIDER_BASE_URL = process.env.PAYMENT_PROVIDER_BASE_URL;

function cleanDocument(document: string) {
  return document.replace(/\D/g, "");
}

function shouldUseLiveProcessor() {
  return (
    process.env.PAYMENT_PROVIDER_MODE === "live" &&
    Boolean(process.env.PAYMENT_PROVIDER_CLIENT_ID && process.env.PAYMENT_PROVIDER_CLIENT_SECRET && PAYMENT_PROVIDER_BASE_URL)
  );
}

function mapState(state: ProviderTransactionState): StickPayPixCharge["status"] {
  const states: Record<ProviderTransactionState, StickPayPixCharge["status"]> = {
    PENDENTE: "pending",
    COMPLETO: "paid",
    EXPIRADO: "expired",
    CANCELADO: "canceled",
    QUEUED: "queued",
  };

  return states[state];
}

function normalizeCreateTransactionResponse(response: ProviderCreateTransactionResponse): StickPayPixCharge {
  const processorTransactionId = String(response.data.transactionId);
  const createdAt = new Date().toISOString();

  return {
    id: `sp_pix_${processorTransactionId}`,
    processor: "internal",
    processorTransactionId,
    status: mapState(response.data.transactionState),
    processorState: response.data.transactionState,
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

function mockCreateTransaction(input: CreatePixChargeInput): ProviderCreateTransactionResponse {
  const processorTransactionId = crypto.randomInt(10_000_000, 99_999_999).toString();
  const transactionId = input.transactionId ?? `checkout-${processorTransactionId}`;
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
      transactionId: processorTransactionId,
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
      qrcodeUrl: null,
      copyPaste,
    },
  };
}

export async function createPixCharge(input: CreatePixChargeInput) {
  const payload = {
    amount: input.amount,
    payerName: input.payerName,
    payerDocument: cleanDocument(input.payerDocument),
    transactionId: input.transactionId,
    description: input.description,
  };

  if (!shouldUseLiveProcessor()) {
    return normalizeCreateTransactionResponse(mockCreateTransaction(input));
  }

  const response = await fetch(`${PAYMENT_PROVIDER_BASE_URL}/transactions/create`, {
    method: "POST",
    headers: {
      ci: String(process.env.PAYMENT_PROVIDER_CLIENT_ID),
      cs: String(process.env.PAYMENT_PROVIDER_CLIENT_SECRET),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Payment processor create transaction failed with status ${response.status}`);
  }

  return normalizeCreateTransactionResponse((await response.json()) as ProviderCreateTransactionResponse);
}

export function normalizePaymentWebhook(payload: PaymentWebhookPayload) {
  if (payload.event === "INFRACTION" && payload.infraction) {
    return {
      event: "pix.med.updated",
      processor: "internal",
      infractionId: payload.infraction.id,
      processorTransactionId: payload.transaction?.transactionId ?? null,
      status: payload.infraction.status,
      amount: payload.infraction.amount,
      raw: payload,
    };
  }

  return {
    event: payload.transactionType === "RETIRADA" ? "pix.withdrawal.updated" : "pix.charge.updated",
    processor: "internal",
    processorTransactionId: payload.transactionId ? String(payload.transactionId) : null,
    status: payload.status ? mapState(payload.status) : "pending",
    processorState: payload.status ?? "PENDENTE",
    amount: payload.value ?? 0,
    fee: payload.fee ?? 0,
    payer: {
      name: payload.clientName ?? null,
      document: payload.clientDocument ?? null,
    },
    raw: payload,
  };
}
