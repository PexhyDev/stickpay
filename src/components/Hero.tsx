import Image from "next/image";
import { ArrowRight, CheckCircle2, PlayCircle, ShieldCheck, Zap } from "lucide-react";

const badges = ["Pix gerado", "Pagamento confirmado", "Webhook enviado", "Transacao conciliada"];

export function Hero() {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 dark:bg-slate-950 md:py-20" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 animate-pop-in lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold uppercase tracking-[0.14em] text-accent shadow-sm dark:bg-slate-900">
            <ShieldCheck aria-hidden="true" size={16} />
            Plataforma de pagamentos Pix
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-black leading-tight text-primary dark:text-white md:text-6xl">
            Pagamentos Pix com estrutura de operacao.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Gere cobrancas, acompanhe status e mantenha sua operacao financeira sincronizada em uma plataforma
            feita para negocios digitais que precisam de controle.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="animate-soft-glow inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-extrabold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110 active:translate-y-0"
            >
              Solicitar acesso
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-extrabold text-primary transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg active:translate-y-0 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-accent"
            >
              <PlayCircle aria-hidden="true" size={18} />
              Ver funcionamento
            </a>
          </div>
        </div>

        <div id="demo" className="col-span-12 lg:col-span-5">
          <div className="relative mx-auto max-w-2xl animate-float-panel">
            <div className="absolute inset-x-8 bottom-4 top-14 rounded-full bg-accent/20 blur-3xl dark:bg-accent/10" aria-hidden="true" />
            <svg
              className="pointer-events-none absolute inset-x-0 top-16 z-0 hidden h-72 w-full text-accent/50 sm:block"
              viewBox="0 0 700 300"
              aria-hidden="true"
            >
              <path
                className="animate-flow-dash"
                d="M55 160 C170 64 280 250 386 145 S560 76 648 155"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="12 14"
                strokeLinecap="round"
              />
            </svg>
            <div className="relative z-10 overflow-hidden rounded-lg border border-white/70 bg-white/80 p-3 shadow-panel transition duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/80">
              <Image
                src="/mascot/spark-hero.png"
                alt="Spark, mascote da StickPay representando velocidade e seguranca nos pagamentos Pix"
                width={1440}
                height={1080}
                priority
                className="h-auto w-full"
              />
              <div className="absolute left-5 top-5 rounded-lg border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-950/90">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Taxa fixa</p>
                <p className="mt-1 text-2xl font-black text-primary dark:text-white">R$ 0,40</p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">por transacao</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-2 sm:grid-cols-2">
                {badges.map((badge, index) => (
                  <span
                    key={badge}
                    className="animate-badge-breathe inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-extrabold text-primary shadow-lg backdrop-blur dark:bg-slate-950/90 dark:text-white"
                    style={{ animationDelay: `${index * 220}ms` }}
                  >
                    {index === 0 ? (
                      <Zap aria-hidden="true" size={14} className="text-accent" />
                    ) : (
                      <CheckCircle2 aria-hidden="true" size={14} className="text-green-500" />
                    )}
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
