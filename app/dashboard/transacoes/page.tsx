import { QrCode } from "lucide-react";
import { TransactionRow } from "@/src/components/dashboard";
import { Button, EmptyState, Table } from "@/src/components/ui";
import { recentTransactions } from "@/src/lib/dashboardMock";

export default function TransactionsPage() {
  return (
    <section className="grid gap-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Transações</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Histórico transacional</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Estrutura preparada para filtros por status, cliente, período, valor e identificadores Pix.
        </p>
      </div>

      {recentTransactions.length > 0 ? (
        <Table headers={["Referência", "Pagador", "Valor", "Status", "Data", ""]}>
          {recentTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} {...transaction} />
          ))}
        </Table>
      ) : (
        <EmptyState
          title="Nenhuma transação encontrada"
          description="Crie sua primeira cobrança Pix para iniciar o histórico financeiro da conta."
          action={
            <Button>
              <QrCode aria-hidden="true" size={16} />
              Criar cobrança Pix
            </Button>
          }
        />
      )}
    </section>
  );
}
