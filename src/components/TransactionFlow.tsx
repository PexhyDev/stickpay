import { BellRing, CheckCircle2, ClipboardList, QrCode, RadioTower, ReceiptText } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Cobrança criada",
    description: "A operação registra valor, pagador, descrição e identificador próprio.",
    status: "created",
  },
  {
    icon: QrCode,
    title: "Pix gerado",
    description: "A StickPay retorna QR Code, copia e cola e dados para o checkout.",
    status: "pending",
  },
  {
    icon: CheckCircle2,
    title: "Pagamento confirmado",
    description: "O status muda quando a transação é liquidada no fluxo Pix.",
    status: "paid",
  },
  {
    icon: BellRing,
    title: "Evento enviado",
    description: "Webhooks mantêm sistemas internos e painéis sincronizados.",
    status: "webhook",
  },
  {
    icon: ReceiptText,
    title: "Registro conciliado",
    description: "Histórico, taxas, IDs e eventos ficam prontos para conferência.",
    status: "logged",
  },
];

export function TransactionFlow() {
  return (
    <section id="como-funciona" className="bg-primary py-20 text-white" aria-labelledby="flow-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Fluxo transacional</p>
            <h2 id="flow-title" className="mt-3 text-3xl font-bold md:text-4xl">
              Cada pagamento segue um caminho claro.
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-7 text-slate-300 md:col-span-6 md:col-start-7">
            Da criação da cobrança ao registro final, a StickPay organiza os estados do Pix para reduzir ruído
            operacional e facilitar a conciliação.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="grid gap-px bg-white/10 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.status} className="group relative bg-primary p-5 transition hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary transition group-hover:scale-105">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <span className="rounded-lg border border-white/10 px-2 py-1 text-xs font-semibold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                  {index < steps.length - 1 && (
                    <span aria-hidden="true" className="absolute right-4 top-10 hidden text-accent md:block">
                      <RadioTower size={18} />
                    </span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
