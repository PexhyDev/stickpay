import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  PlayCircle,
  QrCode,
  ShieldCheck,
  Webhook,
  Zap,
} from "lucide-react";
import { SparkMascot } from "./SparkMascot";

const statusCards = [
  { label: "Pix gerado", detail: "QR pronto", icon: QrCode },
  {
    label: "Pagamento confirmado",
    detail: "Status atualizado",
    icon: CheckCircle2,
  },
  { label: "Webhook enviado", detail: "Evento entregue", icon: Webhook },
  {
    label: "Transacao conciliada",
    detail: "Registro pronto",
    icon: ShieldCheck,
  },
];

const trustItems = ["Pix com status", "Webhook incluso", "Custo previsivel"];

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-slate-50 py-14 dark:bg-slate-950 md:py-16"
      aria-labelledby="hero-title"
    >
      <div className="hero-mesh absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-70 dark:opacity-35" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="animate-rise-in">
            <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-100 bg-white/85 px-3 py-2 text-sm font-bold uppercase tracking-[0.14em] text-accent shadow-sm backdrop-blur dark:border-cyan-900/60 dark:bg-slate-900/80">
              <ShieldCheck aria-hidden="true" size={16} />
              Plataforma de pagamentos Pix
            </p>
            <h1 id="hero-title" className="mt-4 text-4xl font-black leading-[1.03] text-primary dark:text-white md:text-6xl">
              Pagamentos Pix com estrutura de operacao.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              A StickPay ajuda negocios digitais a gerar cobrancas Pix, acompanhar status, automatizar eventos e
              organizar a operacao com mais clareza.
            </p>
          </div>

          <div className="mt-8 flex animate-rise-in flex-col gap-3 sm:flex-row" style={{ animationDelay: "120ms" }}>
            <a
              href="#cadastro"
              className="animate-soft-glow inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-extrabold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:brightness-110 active:scale-[0.98]"
            >
              Solicitar acesso
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/85 px-6 py-3 text-base font-extrabold text-primary shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-cta hover:bg-indigo-50 hover:text-cta active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900/85 dark:text-white dark:hover:border-accent dark:hover:bg-cyan-950/30"
            >
              <PlayCircle aria-hidden="true" size={18} />
              Ver funcionamento
            </a>
          </div>

          <div
            className="mt-7 grid max-w-2xl animate-rise-in gap-3 sm:grid-cols-[1.2fr_1fr]"
            style={{ animationDelay: "220ms" }}
          >
            <div className="rounded-lg border border-slate-200 bg-white/90 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-accent dark:bg-slate-950">
                  <CircleDollarSign aria-hidden="true" size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Taxa fixa</p>
                  <p className="text-2xl font-black text-primary dark:text-white">R$ 0,40 por transacao</p>
                </div>
              </div>
            </div>
            <div className="grid content-center gap-2 rounded-lg border border-slate-200 bg-white/70 p-4 text-sm font-bold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden="true" size={16} className="text-green-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div id="demo" className="col-span-12 lg:col-span-6">
          <div className="animate-hero-spark hero-showcase group relative mx-auto max-w-[720px]">
            <div className="absolute inset-x-8 bottom-8 top-16 rounded-[42px] bg-gradient-to-br from-cyan-200/30 via-indigo-200/20 to-transparent blur-2xl dark:from-cyan-500/10 dark:via-indigo-500/10" aria-hidden="true" />
            <svg
              className="pointer-events-none absolute inset-x-0 top-12 z-0 h-[420px] w-full text-accent/40 transition duration-700 group-hover:text-accent/70 dark:text-accent/30 dark:group-hover:text-accent/60"
              viewBox="0 0 680 420"
              aria-hidden="true"
            >
              <path
                className="animate-flow-dash"
                d="M70 178 C165 70 245 296 338 188 S512 72 610 184"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="10 13"
                strokeLinecap="round"
              />
              <circle cx="70" cy="178" r="5" fill="currentColor" />
              <circle cx="338" cy="188" r="5" fill="currentColor" />
              <circle cx="610" cy="184" r="5" fill="currentColor" />
            </svg>

            <div className="relative z-10 grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
              <div className="hero-showcase-shell relative overflow-hidden rounded-lg border border-white/75 bg-white/82 p-4 shadow-panel backdrop-blur transition-all duration-700 group-hover:-translate-y-2 dark:border-slate-700 dark:bg-slate-900/82">
                <div className="hero-showcase-sheen absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-x-10 bottom-9 h-20 rounded-full bg-primary/10 blur-2xl transition duration-700 group-hover:bg-accent/20 dark:bg-black/40" aria-hidden="true" />
                <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-accent/20 transition duration-700 group-hover:scale-125 group-hover:border-accent/50" aria-hidden="true" />

                <div className="relative z-10 mx-auto w-[82%] transition-all duration-700 group-hover:scale-[1.035] group-hover:-rotate-1 md:w-[84%]">
                  <SparkMascot
                    variant="light"
                    priority
                    sizes="(min-width: 1024px) 470px, 90vw"
                    className="block h-auto w-full select-none drop-shadow-[0_28px_45px_rgba(15,23,42,0.16)] dark:hidden"
                  />
                  <SparkMascot
                    variant="dark"
                    priority
                    sizes="(min-width: 1024px) 470px, 90vw"
                    className="hidden h-auto w-full select-none drop-shadow-[0_0_38px_rgba(6,182,212,0.18)] dark:block"
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <div className="hero-side-card rounded-lg border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur transition-all duration-700 group-hover:-translate-y-1 group-hover:border-accent/60 group-hover:shadow-[0_22px_60px_rgba(6,182,212,0.18)] dark:border-slate-700 dark:bg-slate-950/90">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Taxa fixa</p>
                  <div className="mt-2">
                    <p className="text-2xl font-black text-primary dark:text-white">R$ 0,40</p>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">por transacao Pix</p>
                  </div>
                </div>

                {statusCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.label}
                      className="hero-side-card animate-status-card rounded-lg border border-slate-200 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur transition-all duration-700 group-hover:border-accent/60 group-hover:bg-white group-hover:shadow-[0_22px_60px_rgba(6,182,212,0.16)] dark:border-slate-700 dark:bg-slate-950/90 dark:group-hover:bg-slate-950"
                      style={{ animationDelay: `${350 + index * 160}ms` }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-50 text-accent dark:bg-cyan-950/40">
                          <Icon aria-hidden="true" size={16} />
                        </span>
                        <div>
                          <p className="text-xs font-extrabold text-primary dark:text-white">{card.label}</p>
                          <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{card.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-accent p-3 text-primary shadow-[0_20px_50px_rgba(6,182,212,0.35)] lg:grid" aria-hidden="true">
              <Zap size={22} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
