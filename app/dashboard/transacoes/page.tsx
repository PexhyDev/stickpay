import { QrCode } from "lucide-react";
import { TransactionRow } from "@/src/components/dashboard";
import { Button, EmptyState, Table } from "@/src/components/ui";
import { recentTransactions } from "@/src/lib/dashboardMock";

export default function TransactionsPage() {
  return (
    <section className="grid gap-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Transacoes</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Historico transacional</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Estrutura preparada para filtros por status, cliente, periodo, valor e identificadores Pix.
        </p>
      </div>

      {recentTransactions.length > 0 ? (
        <Table headers={["Referencia", "Pagador", "Valor", "Status", "Data", ""]}>
          {recentTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} {...transaction} />
          ))}
        </Table>
      ) : (
        <EmptyState
          title="Nenhuma transacao encontrada"
          description="Crie sua primeira cobranca Pix para iniciar o historico financeiro da conta."
          action={
            <Button>
              <QrCode aria-hidden="true" size={16} />
              Criar cobranca Pix
            </Button>
          }
        />
      )}
    </section>
  );
}
