import { Building2, QrCode, ServerCog, Store } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Loja",
    description: "Seu cliente inicia uma cobrança Pix no checkout.",
  },
  {
    icon: ServerCog,
    title: "StickPay",
    description: "Normaliza payloads, cria IDs próprios e centraliza webhooks.",
  },
  {
    icon: Building2,
    title: "MisticPay",
    description: "Gera a transação Pix via API com headers ci/cs.",
  },
  {
    icon: QrCode,
    title: "Pix",
    description: "Retorna QR Code, copia e cola e status em tempo real.",
  },
];

export function MisticPayFlow() {
  return (
    <section id="arquitetura" className="bg-primary py-20 text-white" aria-labelledby="flow-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Arquitetura</p>
            <h2 id="flow-title" className="mt-3 text-3xl font-bold md:text-4xl">
              StickPay como camada Pix sobre a MisticPay
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-7 text-slate-300 md:col-span-6 md:col-start-7">
            A API da StickPay fica na frente do lojista. Por trás, o adapter chama a MisticPay para cash-in Pix,
            recebe webhooks e devolve um contrato mais simples para o seu produto.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group relative rounded-lg border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary transition duration-300 group-hover:scale-105">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-10 hidden h-1 w-6 rounded-full bg-cta md:block animate-flow-pulse"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
