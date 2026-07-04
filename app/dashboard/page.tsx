import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Eye,
  FileText,
  QrCode,
  RefreshCw,
  Send,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Webhook,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { Button, Table } from "@/src/components/ui";
import { StatCard, TransactionRow } from "@/src/components/dashboard";
import { SparkMascot } from "@/src/components/SparkMascot";
import {
  accountOverview,
  dashboardMetrics,
  performanceSeries,
  quickActions,
  recentTransactions,
  systemNotices,
  type DashboardAction,
} from "@/src/lib/dashboardMock";

const periodOptions = ["Hoje", "7 dias", "30 dias", "Mes atual"];
const chartTabs = ["Dia", "Semana", "Mes", "Ano"];

const actionIcons: Record<DashboardAction["icon"], typeof QrCode> = {
  qr: QrCode,
  send: Send,
  withdraw: WalletCards,
  statement: FileText,
  docs: BookOpen,
  webhook: Webhook,
  checkout: ShoppingCart,
};

const noticeTones = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  indigo: "border-indigo-400/20 bg-indigo-400/10 text-indigo-200",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
};

export default function DashboardPage() {
  const hasPerformanceData = performanceSeries.some((item) => item.value > 0);
  const hasTransactions = recentTransactions.length > 0;

  return (
    <div className="grid gap-6">
      <section className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/78 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur md:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(79,70,229,0.16),transparent_34%),linear-gradient(245deg,rgba(6,182,212,0.12),transparent_38%)]" aria-hidden="true" />
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-extrabold text-emerald-200">
                <CheckCircle2 aria-hidden="true" size={15} />
                {accountOverview.status}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-extrabold text-cyan-200">
                <CalendarDays aria-hidden="true" size={15} />
                Visao em tempo real
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
              Boa noite, {accountOverview.userName}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
              Acompanhe seus recebimentos, saldo, saques e performance Pix dentro da {accountOverview.platformName}.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button>
                <QrCode aria-hidden="true" size={17} />
                Receber via Pix
              </Button>
              <Button variant="secondary">
                <Banknote aria-hidden="true" size={17} />
                Sacar
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-[210px]">
              <div className="absolute inset-x-6 bottom-4 h-16 rounded-full bg-cyan-400/15 blur-2xl" aria-hidden="true" />
              <SparkMascot
                variant="dark"
                alt="Spark acompanhando o painel financeiro da Mistic Pay"
                sizes="210px"
                className="relative z-10 drop-shadow-[0_24px_45px_rgba(6,182,212,0.14)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-slate-800 bg-slate-900/58 p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {periodOptions.map((period, index) => (
            <button
              key={period}
              type="button"
              className={`rounded-lg px-3 py-2 text-sm font-extrabold transition ${
                index === 0
                  ? "bg-cyan-400 text-slate-950"
                  : "border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
        <Button variant="ghost" className="justify-start sm:justify-center">
          <RefreshCw aria-hidden="true" size={16} />
          Atualizar painel
        </Button>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.85fr)]">
        <div className="grid gap-6">
          <section className="rounded-lg border border-slate-800 bg-slate-900/72 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.2)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Atalhos</p>
                <h3 className="mt-2 text-2xl font-black text-white">Acoes principais</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">Tudo que o cliente usa com mais frequencia no dia a dia da gateway.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {quickActions.map((action) => {
                const Icon = actionIcons[action.icon];

                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group rounded-lg border border-slate-800 bg-slate-950/45 p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/45 hover:bg-slate-950/70"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon aria-hidden="true" size={19} />
                    </span>
                    <h4 className="mt-4 text-base font-black text-white">{action.title}</h4>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{action.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-300 transition group-hover:gap-3">
                      Abrir
                      <ArrowRight aria-hidden="true" size={15} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/72 shadow-[0_20px_60px_rgba(2,6,23,0.2)]">
            <div className="flex flex-col gap-4 border-b border-slate-800 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Analise de vendas</p>
                <h3 className="mt-2 text-2xl font-black text-white">Volume recebido</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">Performance de Pix aprovado por periodo selecionado.</p>
              </div>
              <div className="flex rounded-lg border border-slate-800 bg-slate-950/60 p-1">
                {chartTabs.map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    className={`rounded-md px-3 py-2 text-sm font-extrabold transition ${
                      index === 1 ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] p-5">
              <div className="absolute inset-x-5 top-5 bottom-14 grid grid-rows-5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="border-t border-slate-800" />
                ))}
              </div>

              {hasPerformanceData ? (
                <div className="relative z-10 flex h-64 items-end gap-3">
                  {performanceSeries.map((item) => (
                    <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-indigo-500 to-cyan-300"
                        style={{ height: `${Math.max(item.value, 4)}%` }}
                      />
                      <span className="text-xs font-bold text-slate-500">{item.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative z-10 grid min-h-[260px] place-items-center rounded-lg border border-dashed border-slate-700 bg-slate-950/34 px-5 text-center">
                  <div className="mx-auto max-w-md">
                    <SparkMascot
                      variant="empty-state"
                      alt="Spark preparando os graficos da dashboard"
                      sizes="150px"
                      className="mx-auto mb-1 max-w-[150px]"
                    />
                    <h4 className="text-lg font-black text-white">Ainda sem dados no grafico</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Assim que suas primeiras transacoes forem aprovadas, seus dados de volume aparecerao aqui.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Movimentacoes</p>
                <h3 className="mt-2 text-2xl font-black text-white">Ultimas transacoes</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">Pix, saques, transferencias, estornos e MED em um historico unico.</p>
              </div>
              <Button variant="secondary">
                <Eye aria-hidden="true" size={16} />
                Ver extrato
              </Button>
            </div>

            {hasTransactions ? (
              <Table headers={["Referencia", "Pagador", "Valor", "Status", "Data", ""]}>
                {recentTransactions.map((transaction) => (
                  <TransactionRow key={transaction.id} {...transaction} />
                ))}
              </Table>
            ) : (
              <div className="rounded-lg border border-dashed border-slate-700 bg-slate-900/66 px-6 py-10 text-center">
                <SparkMascot
                  variant="empty-state"
                  alt="Spark aguardando a primeira transacao"
                  sizes="160px"
                  className="mx-auto mb-2 max-w-[160px]"
                />
                <h4 className="text-lg font-black text-white">Nenhuma transacao encontrada ainda</h4>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Crie sua primeira cobranca Pix para comecar a acompanhar aprovacao, pagador, status e valor.
                </p>
                <div className="mt-5">
                  <Button>
                    <QrCode aria-hidden="true" size={16} />
                    Criar cobranca Pix
                  </Button>
                </div>
              </div>
            )}
          </section>
        </div>

        <aside className="grid content-start gap-6">
          <section className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
                <ShieldCheck aria-hidden="true" size={21} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-200">Status da conta</p>
                <h3 className="mt-2 text-xl font-black text-white">{accountOverview.status}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-50/80">{accountOverview.statusDescription}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-emerald-400/15 bg-slate-950/30 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200/80">Limite atual</p>
                <p className="mt-1 text-lg font-black text-white">{accountOverview.currentLimit}</p>
              </div>
              <div className="rounded-lg border border-emerald-400/15 bg-slate-950/30 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200/80">Proximo nivel</p>
                <p className="mt-1 text-sm leading-6 text-emerald-50/80">{accountOverview.nextLevel}</p>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-slate-800 bg-slate-900/72 p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <AlertTriangle aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Avisos</p>
                <h3 className="text-xl font-black text-white">Operacao</h3>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {systemNotices.map((notice) => (
                <article key={notice.title} className={`rounded-lg border p-4 ${noticeTones[notice.tone]}`}>
                  <h4 className="text-sm font-black text-white">{notice.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{notice.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-800 bg-slate-900/72 p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-200">
                <TrendingUp aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-200">Conversao</p>
                <h3 className="text-xl font-black text-white">Proxima leitura</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Quando houver trafego no checkout, este espaco exibira gargalos de expiracao, pendencias e aprovacao Pix.
            </p>
          </section>
        </aside>
      </section>
    </div>
  );
}
