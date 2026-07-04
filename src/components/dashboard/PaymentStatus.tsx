import { StatusBadge } from "@/src/components/ui";
import type { DashboardTransactionStatus } from "@/src/lib/dashboardMock";

type LegacyStatus = "paid" | "pending" | "failed" | "expired";

type PaymentStatusProps = {
  status: LegacyStatus | DashboardTransactionStatus;
};

export function PaymentStatus({ status }: PaymentStatusProps) {
  return <StatusBadge status={status} />;
}
