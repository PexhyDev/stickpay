import { TransactionRow } from "@/src/components/dashboard";
import { Table } from "@/src/components/ui";
import { recentTransactions } from "@/src/lib/dashboardMock";

export default function TransactionsPage() {
  return (
    <section className="grid gap-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Transações</p>
        <h2 className="mt-2 text-3xl font-black text-primary">Histórico transacional</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Estrutura preparada para filtros por status, cliente, período, valor e identificadores Pix.
        </p>
      </div>
      <Table headers={["ID", "Cliente", "Valor", "Status", "Atualização"]}>
        {recentTransactions.map((transaction) => (
          <TransactionRow key={transaction.id} {...transaction} />
        ))}
      </Table>
    </section>
  );
}
