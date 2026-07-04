import { Eye } from "lucide-react";
import { PaymentStatus } from "./PaymentStatus";
import type { DashboardTransaction, DashboardTransactionStatus } from "@/src/lib/dashboardMock";

type LegacyTransactionRowProps = {
  id: string;
  customer: string;
  amount: string;
  status: "paid" | "pending" | "failed" | "expired";
  time: string;
  type?: never;
  date?: never;
};

type TransactionRowProps = DashboardTransaction | LegacyTransactionRowProps;

const statusCopy: Record<DashboardTransactionStatus | LegacyTransactionRowProps["status"], string> = {
  approved: "Confirmado",
  pending: "Aguardando",
  blocked: "Retido",
  refunded: "Devolvido",
  review: "Análise",
  canceled: "Cancelado",
  paid: "Confirmado",
  failed: "Recusado",
  expired: "Expirado",
};

export function TransactionRow(props: TransactionRowProps) {
  const isDashboardTransaction = "date" in props;
  const type = isDashboardTransaction ? props.type : "Pix recebido";
  const date = isDashboardTransaction ? props.date : props.time;

  return (
    <tr className="transition hover:bg-slate-50 dark:hover:bg-slate-800/45">
      <td className="px-4 py-4">
        <div className="text-sm font-extrabold text-primary dark:text-white">{props.id}</div>
        <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{type}</div>
      </td>
      <td className="px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{props.customer}</td>
      <td className="px-4 py-4 text-sm font-extrabold text-primary dark:text-white">{props.amount}</td>
      <td className="px-4 py-4">
        <PaymentStatus status={props.status} />
      </td>
      <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">{date}</td>
      <td className="px-4 py-4 text-right">
        <button
          type="button"
          className="inline-grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-cyan-300 hover:text-accent dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400"
          aria-label={`Ver detalhes de ${props.id}: ${statusCopy[props.status]}`}
        >
          <Eye aria-hidden="true" size={16} />
        </button>
      </td>
    </tr>
  );
}
