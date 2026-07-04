import { Badge } from "./Badge";

type Status =
  | "paid"
  | "pending"
  | "failed"
  | "expired"
  | "active"
  | "inactive"
  | "approved"
  | "blocked"
  | "refunded"
  | "review"
  | "canceled";

const statusConfig: Record<
  Status,
  { label: string; tone: "green" | "amber" | "red" | "cyan" | "slate" | "indigo" }
> = {
  paid: { label: "Pago", tone: "green" },
  pending: { label: "Pendente", tone: "amber" },
  failed: { label: "Recusado", tone: "red" },
  expired: { label: "Expirado", tone: "slate" },
  active: { label: "Ativo", tone: "green" },
  inactive: { label: "Inativo", tone: "slate" },
  approved: { label: "Aprovado", tone: "green" },
  blocked: { label: "Bloqueado", tone: "red" },
  refunded: { label: "Estornado", tone: "slate" },
  review: { label: "Em analise", tone: "cyan" },
  canceled: { label: "Cancelado", tone: "slate" },
};

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return <Badge tone={config.tone}>{config.label}</Badge>;
}
