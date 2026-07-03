import { PaymentStatus } from "./PaymentStatus";

type TransactionRowProps = {
  id: string;
  customer: string;
  amount: string;
  status: "paid" | "pending" | "failed" | "expired";
  time: string;
};

export function TransactionRow({ id, customer, amount, status, time }: TransactionRowProps) {
  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-4 py-4 text-sm font-bold text-primary">{id}</td>
      <td className="px-4 py-4 text-sm text-slate-700">{customer}</td>
      <td className="px-4 py-4 text-sm font-bold text-primary">{amount}</td>
      <td className="px-4 py-4">
        <PaymentStatus status={status} />
      </td>
      <td className="px-4 py-4 text-sm text-slate-500">{time}</td>
    </tr>
  );
}
