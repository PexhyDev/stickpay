import { AlertTriangle, Plus, RadioTower } from "lucide-react";
import { Button, Card, Table } from "@/src/components/ui";
import { StatCard, TransactionRow } from "@/src/components/dashboard";
import { dashboardStats, operationalAlerts, recentTransactions } from "@/src/lib/dashboardMock";

const volumeBars = [42, 58, 36, 74, 66, 88, 71, 94, 63, 78, 91, 82];

export default function DashboardPage() {
  return (
    <div className="grid gap-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-primary">Volume Pix</h2>
              <p className="mt-1 text-sm text-slate-600">Leitura visual para o gráfico de recebimentos.</p>
            </div>
            <Button>
              <Plus aria-hidden="true" size={16} />
              Criar cobrança
            </Button>
          </div>
          <div className="mt-8 flex h-56 items-end gap-3 rounded-lg bg-slate-50 p-4">
            {volumeBars.map((bar, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-cta to-accent transition hover:brightness-110"
                  style={{ height: `${bar}%` }}
                />
                <span className="text-[10px] font-bold text-slate-400">{index + 1}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-50 text-accent">
              <RadioTower aria-hidden="true" size={20} />
            </span>
            <div>
              <h2 className="text-xl font-black text-primary">Status operacional</h2>
              <p className="text-sm font-semibold text-emerald-600">Processamento ativo</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {operationalAlerts.map((alert) => (
              <div key={alert} className="flex gap-3 rounded-lg bg-amber-50 p-3 text-sm font-semibold text-amber-800">
                <AlertTriangle aria-hidden="true" className="mt-0.5 shrink-0" size={16} />
                {alert}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-primary">Últimas movimentações</h2>
            <p className="mt-1 text-sm text-slate-600">Transações recentes para a futura timeline operacional.</p>
          </div>
        </div>
        <Table headers={["ID", "Cliente", "Valor", "Status", "Atualização"]}>
          {recentTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} {...transaction} />
          ))}
        </Table>
      </section>
    </div>
  );
}
