import { Code2, KeyRound, Webhook } from "lucide-react";

const code = `await stickpay.pix.createCharge({
  amount: 12990,
  customer: {
    name: "Cliente Exemplo",
    document: "00000000000"
  },
  externalId: "pedido-1042",
  description: "Checkout pedido 1042"
})`;

export function ApiIntegration() {
  return (
    <section id="api" className="bg-slate-50 py-20" aria-labelledby="api-title">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6">
        <div className="col-span-12 lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">API e integração</p>
          <h2 id="api-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Integre cobranças Pix sem perder visibilidade operacional.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Crie cobranças, consulte transações e receba webhooks de status com respostas padronizadas para os
            sistemas que já fazem parte da sua operação.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              { icon: Code2, text: "API para criação e consulta de cobranças Pix." },
              { icon: Webhook, text: "Webhooks de status para automação de recebimentos." },
              { icon: KeyRound, text: "Chaves protegidas no backend e integração orientada a servidor." },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.text} className="flex items-center gap-3 text-sm font-semibold text-primary">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-accent shadow-sm">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="rounded-lg bg-primary p-4 shadow-panel">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-accent" />
            </div>
            <pre className="overflow-x-auto rounded-lg bg-[#080D19] p-5 text-sm leading-7 text-slate-100">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
