import { CheckCircle2, ReceiptText, ShieldCheck, WalletCards } from "lucide-react";

const points = ["Sem porcentagem escondida", "Sem tarifa variavel", "Cobranca simples e previsivel"];

export function FixedRateSection() {
  return (
    <section id="precos" className="bg-slate-50 py-20 dark:bg-slate-950" aria-labelledby="rate-title">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Taxa fixa</p>
          <h2 id="rate-title" className="mt-3 text-3xl font-bold text-primary dark:text-white md:text-4xl">
            Taxa fixa para operar Pix com mais previsibilidade.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Uma regra clara para sua operacao financeira planejar custos, conciliar recebimentos e escalar sem surpresas.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-primary p-6 text-white dark:bg-slate-950">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <ReceiptText aria-hidden="true" size={24} />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-accent">Por transacao Pix</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-black">R$ 0,40</span>
                  <span className="pb-2 text-sm text-slate-300">fixo</span>
                </div>
              </div>
              <div className="grid content-center gap-4">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                    <CheckCircle2 aria-hidden="true" className="shrink-0 text-green-500" size={20} />
                    <span className="font-bold text-primary dark:text-white">{point}</span>
                  </div>
                ))}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-cyan-50 p-4 text-sm font-semibold text-primary dark:bg-cyan-950/30 dark:text-cyan-100">
                    <WalletCards aria-hidden="true" className="mb-2 text-accent" size={20} />
                    Controle de custo por recebimento.
                  </div>
                  <div className="rounded-lg bg-indigo-50 p-4 text-sm font-semibold text-primary dark:bg-indigo-950/40 dark:text-indigo-100">
                    <ShieldCheck aria-hidden="true" className="mb-2 text-cta" size={20} />
                    Base simples para conciliar.
                  </div>
                </div>
                <a
                  href="#cadastro"
                  className="inline-flex items-center justify-center rounded-lg bg-cta px-5 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
                >
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
