import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleDashed,
  Eye,
  FileText,
  QrCode,
  RefreshCw,
  Send,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Users,
  Webhook,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { Button, Table } from "@/src/components/ui";
import { StatCard, TransactionRow } from "@/src/components/dashboard";
import { SparkSpotlight } from "@/src/components/SparkMascot";
import {
  accountOverview,
  dashboardMetrics,
  performanceSeries,
  quickActions,
  recentTransactions,
  systemNotices,
  type DashboardAction,
} from "@/src/lib/dashboardMock";

const periodOptions = ["Hoje", "7 dias", "30 dias", "Mês atual"];
const chartTabs = ["Dia", "Semana", "Mês", "Ano"];

const actionIcons: Record<DashboardAction["icon"], typeof QrCode> = {
  qr: QrCode,
  send: Send,
  withdraw: WalletCards,
  statement: FileText,
  docs: BookOpen,
  webhook: Webhook,
  checkout: ShoppingCart,
  customers: Users,
};

const noticeTones = {
  cyan: "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-200",
  indigo: "border-indigo-400/20 bg-indigo-400/[0.07] text-indigo-200",
  amber: "border-amber-300/20 bg-amber-300/[0.07] text-amber-100",
};

const ghostTransactionRows = [
  ["SPK-0001", "Pix", "R$ 0,00", "Aprovado", "Hoje"],
  ["SPK-0002", "Pix", "R$ 0,00", "Pendente", "Hoje"],
  ["SPK-0003", "Saque", "R$ 0,00", "Agendado", "Ontem"],
];

export default function DashboardPage() {
  const hasPerformanceData = performanceSeries.some((item) => item.value > 0);
  const hasTransactions = recentTransactions.length > 0;

  return (
    <div className="grid min-w-0 gap-14 lg:gap-16">
      <section className="dashboard-hero-stage relative isolate grid min-h-[calc(100svh-104px)] w-full min-w-0 content-start overflow-hidden rounded-lg border border-slate-800/90 bg-slate-950/50 p-4 pb-12 shadow-[0_24px_70px_rgba(2,6,23,0.3)] sm:p-5 sm:pb-14 lg:min-h-[calc(100svh-92px)]">
        <div className="pointer-events-none absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-8 bottom-10 z-10 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent sm:block" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:flex" aria-hidden="true">
          <span className="h-px w-7 bg-slate-700/70" />
          <span className="relative h-6 w-3 rounded-full border border-slate-600/80">
            <span className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300/80 animate-badge-breathe" />
          </span>
          Role para explorar
          <span className="h-px w-7 bg-slate-700/70" />
        </div>

        <div className="relative grid min-w-0 gap-4">
          <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_224px] lg:items-start">
            <div className="min-w-0 rounded-lg border border-slate-800/80 bg-slate-900/68 p-5 shadow-[0_18px_44px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-extrabold text-emerald-200">
                  <CheckCircle2 aria-hidden="true" size={15} />
                  {accountOverview.status}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-extrabold text-cyan-200">
                  <CalendarDays aria-hidden="true" size={15} />
                  Visão em tempo real
                </span>
              </div>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
                Boa noite, {accountOverview.userName}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                Acompanhe recebimentos, saldo, saques e performance Pix em uma visão limpa da {accountOverview.platformName}.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button className="w-full shadow-[0_16px_34px_rgba(79,70,229,0.22)] sm:w-auto">
                  <QrCode aria-hidden="true" size={17} />
                  Receber via Pix
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto">
                  <Banknote aria-hidden="true" size={17} />
                  Sacar
                </Button>
              </div>
            </div>

            <div className="hidden rounded-lg border border-cyan-300/15 bg-slate-900/46 p-3 shadow-[0_18px_44px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] lg:grid">
              <SparkSpotlight
                variant="dark"
                alt="Spark acompanhando o painel financeiro da StickPay"
                priority
                size="sm"
                mode="hero"
                className="self-center"
                imageClassName="scale-[1.01]"
              />
              <div className="mt-3 grid gap-1.5 rounded-lg border border-cyan-400/15 bg-cyan-400/10 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-cyan-200">Spark monitor</p>
                <p className="text-xs leading-5 text-slate-300">Alertas, Pix aprovados e automações em foco.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-slate-800/80 bg-slate-950/46 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {periodOptions.map((period, index) => (
                <button
                  key={period}
                  type="button"
                  className={`rounded-lg px-3.5 py-2 text-sm font-extrabold transition duration-300 ${
                    index === 0
                      ? "bg-cyan-300 text-slate-950 shadow-[0_12px_24px_rgba(6,182,212,0.18)]"
                      : "border border-slate-800/90 text-slate-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <Button variant="ghost" className="w-full justify-start border border-slate-800/80 bg-slate-900/42 sm:w-auto sm:justify-center">
              <RefreshCw aria-hidden="true" size={16} />
              Atualizar painel
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardMetrics.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-deferred min-w-0 scroll-mt-28">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Atalhos operacionais</p>
            <h3 className="mt-2 text-2xl font-black text-white">Ações principais</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
              Tudo que o cliente usa com mais frequência no dia a dia da gateway, separado da visão geral para manter foco.
            </p>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = actionIcons[action.icon];

            return (
              <Link
                key={action.title}
                href={action.href}
                className="group flex min-h-[188px] flex-col rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-[0_14px_34px_rgba(2,6,23,0.14)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:bg-slate-900 hover:shadow-[0_20px_44px_rgba(6,182,212,0.09)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/15 group-hover:text-cyan-200">
                  <Icon aria-hidden="true" size={19} />
                </span>
                <h4 className="mt-4 text-base font-black text-white">{action.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{action.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-extrabold text-cyan-300 transition duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-200">
                  Abrir
                  <ArrowRight aria-hidden="true" size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="dashboard-deferred grid min-w-0 scroll-mt-28 gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/66 shadow-[0_18px_46px_rgba(2,6,23,0.18)]">
          <div className="flex flex-col gap-4 border-b border-slate-800 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Análise e performance</p>
              <h3 className="mt-2 text-2xl font-black text-white">Volume recebido</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">Performance de Pix aprovado por período selecionado.</p>
            </div>
            <div className="flex rounded-lg border border-slate-800 bg-slate-950/60 p-1">
              {chartTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-md px-3 py-2 text-sm font-extrabold transition duration-300 ${
                    index === 1 ? "bg-slate-800 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[330px] p-5">
            <div className="absolute inset-x-5 bottom-16 top-6 grid grid-rows-5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="border-t border-slate-800/80" />
              ))}
            </div>
            <div className="absolute bottom-16 left-5 top-6 w-px bg-slate-800/80" aria-hidden="true" />
            <div className="absolute inset-x-5 bottom-16 h-px bg-slate-800/80" aria-hidden="true" />

            {hasPerformanceData ? (
              <div className="relative z-10 flex h-64 items-end gap-3">
                {performanceSeries.map((item) => (
                  <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-indigo-500 to-cyan-300 shadow-[0_8px_24px_rgba(6,182,212,0.12)]"
                      style={{ height: `${Math.max(item.value, 4)}%` }}
                    />
                    <span className="text-xs font-bold text-slate-500">{item.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative z-10 grid min-h-[268px] content-center rounded-lg border border-dashed border-slate-700/90 bg-slate-950/30 px-5 text-center">
                <div className="pointer-events-none absolute inset-5" aria-hidden="true">
                  <div className="absolute bottom-7 left-4 right-4 h-28 overflow-hidden">
                    <div className="absolute bottom-2 left-0 h-16 w-[18%] rounded-t-lg bg-cyan-300/10" />
                    <div className="absolute bottom-2 left-[20%] h-24 w-[18%] rounded-t-lg bg-indigo-300/10" />
                    <div className="absolute bottom-2 left-[40%] h-12 w-[18%] rounded-t-lg bg-cyan-300/[0.07]" />
                    <div className="absolute bottom-2 left-[60%] h-20 w-[18%] rounded-t-lg bg-indigo-300/[0.07]" />
                    <div className="absolute bottom-2 left-[80%] h-14 w-[18%] rounded-t-lg bg-cyan-300/[0.07]" />
                    <svg className="absolute inset-x-0 bottom-1 h-28 w-full text-cyan-300/20" viewBox="0 0 420 120" fill="none" preserveAspectRatio="none">
                      <path d="M0 86 C54 70 86 88 126 62 C164 38 190 54 226 46 C278 34 306 58 344 38 C374 22 394 30 420 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="relative mx-auto max-w-md">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <BarChart3 aria-hidden="true" size={24} />
                  </span>
                  <h4 className="mt-4 text-lg font-black text-white">Ainda sem dados no período</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Assim que suas primeiras transações forem aprovadas, o volume recebido aparecerá aqui.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="grid content-start gap-4">
          <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 shadow-[0_16px_38px_rgba(2,6,23,0.14)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-200">
                <TrendingUp aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-200">Conversão</p>
                <h3 className="text-xl font-black text-white">Próxima leitura</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Quando houver tráfego no checkout, a StickPay exibirá gargalos de expiração, pendências e aprovação Pix.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/36 px-3 py-2 text-xs font-extrabold text-slate-300">
              <CircleDashed aria-hidden="true" size={14} className="text-cyan-300" />
              Sem dados suficientes
            </div>
          </section>

          <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 shadow-[0_16px_38px_rgba(2,6,23,0.14)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <AlertTriangle aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Avisos</p>
                <h3 className="text-xl font-black text-white">Operação</h3>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {systemNotices.map((notice) => (
                <article key={notice.title} className={`rounded-lg border p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${noticeTones[notice.tone]}`}>
                  <h4 className="text-sm font-black text-white">{notice.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{notice.description}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="dashboard-deferred grid min-w-0 scroll-mt-28 gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)]">
        <div>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Movimentações</p>
              <h3 className="mt-2 text-2xl font-black text-white">Últimas transações</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">Pix, saques, transferências, estornos e MED em um histórico único.</p>
            </div>
            <Button variant="secondary">
              <Eye aria-hidden="true" size={16} />
              Ver extrato
            </Button>
          </div>

          {hasTransactions ? (
            <Table headers={["Referência", "Pagador", "Valor", "Status", "Data", ""]}>
              {recentTransactions.map((transaction) => (
                <TransactionRow key={transaction.id} {...transaction} />
              ))}
            </Table>
          ) : (
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/66 shadow-[0_16px_38px_rgba(2,6,23,0.14)]">
              <div className="hidden overflow-x-auto sm:block">
                <table className="min-w-[720px] w-full divide-y divide-slate-800">
                  <thead className="bg-slate-950/55">
                    <tr>
                      {["Referência", "Tipo", "Valor", "Status", "Data", "Ação"].map((header) => (
                        <th key={header} className="px-4 py-3 text-left text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/90">
                    {ghostTransactionRows.map((row) => (
                      <tr key={row[0]} className="opacity-45">
                        {row.map((cell, index) => (
                          <td key={`${row[0]}-${cell}-${index}`} className="px-4 py-4">
                            <span className={`block h-3 rounded-full bg-slate-700/70 ${index === 0 ? "w-24" : index === 2 ? "w-16" : "w-20"}`} />
                          </td>
                        ))}
                        <td className="px-4 py-4">
                          <span className="block h-8 w-8 rounded-lg border border-slate-700 bg-slate-800/60" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid gap-3 p-4 sm:hidden">
                {ghostTransactionRows.map((row) => (
                  <article key={`mobile-${row[0]}`} className="rounded-lg border border-slate-800 bg-slate-950/30 p-4 opacity-55">
                    <div className="flex items-center justify-between gap-3">
                      <span className="h-3 w-24 rounded-full bg-slate-700/80" />
                      <span className="h-6 w-16 rounded-full bg-slate-800" />
                    </div>
                    <div className="mt-4 grid gap-2">
                      <span className="h-3 w-32 rounded-full bg-slate-700/70" />
                      <span className="h-3 w-20 rounded-full bg-slate-700/70" />
                    </div>
                  </article>
                ))}
              </div>
              <div className="border-t border-slate-800 bg-slate-950/30 px-6 py-7 text-center">
                <h4 className="text-lg font-black text-white">Nenhuma transação encontrada ainda</h4>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Crie sua primeira cobrança Pix para acompanhar aprovação, pagador, status e valor.
                </p>
                <div className="mt-5">
                  <Button>
                    <QrCode aria-hidden="true" size={16} />
                    Criar cobrança Pix
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <aside className="grid content-start gap-4">
          <section className="rounded-lg border border-slate-800 bg-slate-900/66 p-5 shadow-[0_16px_38px_rgba(2,6,23,0.14)]">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
                <ShieldCheck aria-hidden="true" size={21} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-200">Status da conta</p>
                <h3 className="mt-2 text-xl font-black text-white">Conta ativa</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{accountOverview.statusDescription}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-slate-800 bg-slate-950/30 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200/80">Limite atual</p>
                <p className="mt-1 text-lg font-black text-white">{accountOverview.currentLimit}</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/30 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200/80">Próximo nível</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{accountOverview.nextLevel}</p>
              </div>
            </div>
            <Button variant="ghost" className="mt-4 w-full justify-center border border-slate-800 bg-slate-950/30">
              Verificar dados
            </Button>
          </section>
        </aside>
      </section>
    </div>
  );
}
