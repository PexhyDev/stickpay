import { CheckCircle2, MinusCircle, ReceiptText, ShieldCheck, WalletCards, Webhook } from "lucide-react";

const included = [
  "Pix com taxa fixa",
  "Sem percentual adicional",
  "Webhook incluso",
  "Painel para acompanhar transações",
  "Estrutura para operação digital",
  "Mais previsibilidade financeira",
];

const comparison = [
  { market: "% + taxa fixa", stickpay: "R$ 0,40 fixo" },
  { market: "Custo variável", stickpay: "Custo previsível" },
  { market: "Cobrança difícil de entender", stickpay: "Cobrança transparente" },
];

export function FixedRateSection() {
  return (
    <section id="precos" className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-950" aria-labelledby="rate-title">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Taxa fixa</p>
          <h2 id="rate-title" className="mt-3 text-3xl font-black leading-tight text-primary dark:text-white md:text-4xl">
            Taxa simples e transparente
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Receba pagamentos Pix com custo fixo por transação, sem porcentagem variável e sem surpresas no fechamento.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <Webhook aria-hidden="true" className="text-accent" size={22} />
              <p className="mt-3 text-sm font-bold text-primary dark:text-white">Eventos incluídos</p>
              <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">Webhooks de status para manter sistemas sincronizados.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <ShieldCheck aria-hidden="true" className="text-cta" size={22} />
              <p className="mt-3 text-sm font-bold text-primary dark:text-white">Operação clara</p>
              <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">Regras simples para conciliar e acompanhar pagamentos.</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-lg bg-primary p-6 text-white dark:bg-slate-950">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary shadow-[0_16px_40px_rgba(6,182,212,0.24)]">
                  <ReceiptText aria-hidden="true" size={24} />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-accent">Por transação Pix</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-[-0.03em]">R$ 0,40</span>
                  <span className="pb-2 text-sm text-slate-300">fixo</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Cobrança clara para sua operação, sem porcentagem escondida e sem tarifa variável.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2 sm:grid-cols-2">
                  {included.map((point) => (
                    <div
                      key={point}
                      className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900"
                    >
                      <CheckCircle2 aria-hidden="true" className="shrink-0 text-green-500" size={18} />
                      <span className="text-sm font-bold text-primary dark:text-white">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="grid grid-cols-2 bg-slate-100 text-xs font-black uppercase tracking-[0.12em] text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                    <div className="border-r border-slate-200 p-3 dark:border-slate-800">Modelo comum</div>
                    <div className="p-3 text-accent">StickPay</div>
                  </div>
                  {comparison.map((row) => (
                    <div key={row.market} className="grid grid-cols-2 border-t border-slate-200 text-sm dark:border-slate-800">
                      <div className="flex items-center gap-2 border-r border-slate-200 p-3 text-slate-600 dark:border-slate-800 dark:text-slate-400">
                        <MinusCircle aria-hidden="true" size={15} />
                        {row.market}
                      </div>
                      <div className="flex items-center gap-2 p-3 font-bold text-primary dark:text-white">
                        <CheckCircle2 aria-hidden="true" className="text-green-500" size={15} />
                        {row.stickpay}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#cadastro"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:brightness-110 active:scale-[0.98]"
                >
                  <WalletCards aria-hidden="true" size={16} />
                  Solicitar acesso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
