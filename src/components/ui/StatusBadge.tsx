import { Badge } from "./Badge";

type Status = "paid" | "pending" | "failed" | "expired" | "active" | "inactive";

const statusConfig: Record<Status, { label: string; tone: "green" | "amber" | "red" | "cyan" | "slate" }> = {
  paid: { label: "Pago", tone: "green" },
  pending: { label: "Pendente", tone: "amber" },
  failed: { label: "Recusado", tone: "red" },
  expired: { label: "Expirado", tone: "slate" },
  active: { label: "Ativo", tone: "green" },
  inactive: { label: "Inativo", tone: "slate" },
};

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return <Badge tone={config.tone}>{config.label}</Badge>;
}
