import { BellRing, CheckCircle2, ClipboardList, QrCode, ReceiptText } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Cobrança criada",
    description: "A operação registra valor, pagador, descrição e identificador próprio.",
  },
  {
    icon: QrCode,
    title: "Pix gerado",
    description: "A StickPay retorna QR Code, copia e cola e dados para o checkout.",
  },
  {
    icon: CheckCircle2,
    title: "Pagamento confirmado",
    description: "O status muda quando a transação é liquidada no fluxo Pix.",
  },
  {
    icon: BellRing,
    title: "Webhook enviado",
    description: "Eventos mantêm sistemas internos e painéis sincronizados.",
  },
  {
    icon: ReceiptText,
    title: "Transação conciliada",
    description: "Histórico, taxas, IDs e eventos ficam prontos para conferência.",
  },
];

export function TransactionFlow() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-primary py-20 text-white" aria-labelledby="flow-title">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" aria-hidden="true" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Fluxo transacional</p>
            <h2 id="flow-title" className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              Cobrança criada, Pix gerado, pagamento confirmado.
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-7 text-slate-300 md:col-span-6 md:col-start-7">
            Da criação da cobrança ao registro final, a StickPay organiza os estados do Pix para reduzir ruído
            operacional e facilitar a conciliação.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block lg:left-0 lg:top-20 lg:h-px lg:w-full" aria-hidden="true">
            <span className="animate-flow-fill block h-1/2 w-px bg-gradient-to-b from-accent to-transparent lg:h-px lg:w-2/3 lg:bg-gradient-to-r" />
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group relative rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-white/[0.09]"
                >
                  <span
                    className="absolute -left-0.5 top-6 hidden h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(6,182,212,0.12)] md:block lg:left-5 lg:top-[-25px]"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary transition-all duration-300 group-hover:scale-105">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <span className="rounded-lg border border-white/10 px-2 py-1 text-xs font-semibold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
