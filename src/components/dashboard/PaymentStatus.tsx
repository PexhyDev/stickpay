import { StatusBadge } from "@/src/components/ui";

type PaymentStatusProps = {
  status: "paid" | "pending" | "failed" | "expired";
};

export function PaymentStatus({ status }: PaymentStatusProps) {
  return <StatusBadge status={status} />;
}
