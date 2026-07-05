export type PixChargeStatus = "pending" | "paid" | "expired" | "canceled" | "review";

export type PixChargeFormValues = {
  amount: string;
  expiration: string;
  customerName: string;
  document: string;
  email: string;
  phone: string;
  description: string;
  reference: string;
};

export type PixCharge = {
  id: string;
  amount: number;
  amountFormatted: string;
  expirationLabel: string;
  expiresAt: string;
  customerName: string;
  document: string;
  email?: string;
  phone?: string;
  description: string;
  reference: string;
  copyPasteCode: string;
  createdAt: string;
  status: PixChargeStatus;
};

export type PixChargeFormErrors = Partial<Record<keyof PixChargeFormValues, string>>;

export const expirationOptions = [
  { label: "15 minutos", value: "15" },
  { label: "30 minutos", value: "30" },
  { label: "1 hora", value: "60" },
  { label: "6 horas", value: "360" },
  { label: "12 horas", value: "720" },
  { label: "24 horas", value: "1440" },
  { label: "7 dias", value: "10080" },
];

export const initialPixChargeForm: PixChargeFormValues = {
  amount: "",
  expiration: "60",
  customerName: "",
  document: "",
  email: "",
  phone: "",
  description: "",
  reference: "",
};

export const recentPixCharges: PixCharge[] = [
  {
    id: "SPK-PX-78291",
    amount: 349.9,
    amountFormatted: "R$ 349,90",
    expirationLabel: "24 horas",
    expiresAt: "Hoje, 23:59",
    customerName: "Marina Lopes",
    document: "123.456.789-09",
    email: "marina@exemplo.com",
    phone: "(11) 90000-0000",
    description: "Pedido #1048",
    reference: "PED-1048",
    copyPasteCode: "00020101021226860014BR.GOV.BCB.PIX2564stickpay.com/pix/SPK-PX-782915204000053039865405349905802BR5925STICKPAY PAGAMENTOS LTDA6009SAO PAULO62070503***6304A9F3",
    createdAt: "Hoje, 10:42",
    status: "paid",
  },
  {
    id: "SPK-PX-78264",
    amount: 129.9,
    amountFormatted: "R$ 129,90",
    expirationLabel: "1 hora",
    expiresAt: "Hoje, 12:18",
    customerName: "Rafael Costa",
    document: "987.654.321-00",
    description: "Assinatura mensal",
    reference: "SUB-2201",
    copyPasteCode: "00020101021226860014BR.GOV.BCB.PIX2564stickpay.com/pix/SPK-PX-782645204000053039865405129905802BR5925STICKPAY PAGAMENTOS LTDA6009SAO PAULO62070503***6304B8E1",
    createdAt: "Hoje, 09:12",
    status: "pending",
  },
  {
    id: "SPK-PX-78110",
    amount: 89.5,
    amountFormatted: "R$ 89,50",
    expirationLabel: "30 minutos",
    expiresAt: "Ontem, 17:33",
    customerName: "Bianca Martins",
    document: "41.221.987/0001-40",
    description: "Reposicao de saldo",
    reference: "ORD-5092",
    copyPasteCode: "00020101021226860014BR.GOV.BCB.PIX2564stickpay.com/pix/SPK-PX-78110520400005303986540489505802BR5925STICKPAY PAGAMENTOS LTDA6009SAO PAULO62070503***6304C7D2",
    createdAt: "Ontem, 17:03",
    status: "expired",
  },
];

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatCurrencyInput(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) {
    return "";
  }

  return moneyFormatter.format(Number(digits) / 100);
}

export function parseCurrency(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) {
    return 0;
  }

  return Number(digits) / 100;
}

export function formatDocument(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14);

  if (digits.length <= 11) {
    return digits
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }

  return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

export function validatePixChargeForm(values: PixChargeFormValues) {
  const errors: PixChargeFormErrors = {};
  const amount = parseCurrency(values.amount);
  const documentDigits = values.document.replace(/\D/g, "");

  if (amount <= 0) {
    errors.amount = "Informe um valor valido.";
  }

  if (!values.customerName.trim()) {
    errors.customerName = "Preencha o nome do cliente.";
  }

  if (values.document && documentDigits.length !== 11 && documentDigits.length !== 14) {
    errors.document = "CPF/CNPJ invalido.";
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Informe um e-mail valido.";
  }

  if (values.description.length > 120) {
    errors.description = "Use ate 120 caracteres.";
  }

  return errors;
}

export async function createPixCharge(values: PixChargeFormValues): Promise<PixCharge> {
  await new Promise((resolve) => window.setTimeout(resolve, 650));

  const amount = parseCurrency(values.amount);
  const expiration = expirationOptions.find((option) => option.value === values.expiration) ?? expirationOptions[2];
  const id = `SPK-PX-${Math.floor(10000 + Math.random() * 89999)}`;
  const reference = values.reference.trim() || `REF-${id.slice(-5)}`;
  const description = values.description.trim() || "Cobranca Pix StickPay";

  return {
    id,
    amount,
    amountFormatted: moneyFormatter.format(amount),
    expirationLabel: expiration.label,
    expiresAt: buildExpirationLabel(Number(expiration.value)),
    customerName: values.customerName.trim(),
    document: values.document.trim() || "Nao informado",
    email: values.email.trim() || undefined,
    phone: values.phone.trim() || undefined,
    description,
    reference,
    copyPasteCode: buildPixCopyPasteCode({ amount, id, reference, description }),
    createdAt: new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date()),
    status: "pending",
  };
}

function buildExpirationLabel(minutes: number) {
  const expiresAt = new Date(Date.now() + minutes * 60 * 1000);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(expiresAt);
}

function buildPixCopyPasteCode({
  amount,
  id,
  reference,
  description,
}: {
  amount: number;
  id: string;
  reference: string;
  description: string;
}) {
  const cleanDescription = description
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .slice(0, 40)
    .toUpperCase();

  return `00020101021226860014BR.GOV.BCB.PIX2564stickpay.com/pix/${id}520400005303986540${amount.toFixed(2)}5802BR5925STICKPAY PAGAMENTOS LTDA6009SAO PAULO62190515${reference.slice(0, 15)}6304${cleanDescription.slice(0, 4) || "SPAY"}`;
}
