import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 0",
    description: "Para validar checkout e primeiros pagamentos.",
    features: ["Sandbox completo", "Tokenizacao mock", "Suporte por email"],
    cta: "Teste grátis",
  },
  {
    name: "Business",
    price: "R$ 499",
    description: "Para operacoes com alto volume e times financeiros.",
    features: ["Webhooks", "Relatorios em tempo real", "SLA operacional"],
    cta: "Comece agora",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contato",
    description: "Para requisitos customizados, risco e governanca.",
    features: ["Contrato dedicado", "Suporte prioritario", "Arquitetura consultiva"],
    cta: "Falar com vendas",
  },
];

export function PricingTable() {
  return (
    <section id="precos" className="bg-slate-50 py-20" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Planos</p>
            <h2 id="pricing-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Escolha o plano certo para o seu volume
            </h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-6 ${
                plan.highlighted ? "border-accent bg-white shadow-panel" : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-extrabold text-primary">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{plan.description}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-black text-primary">{plan.price}</span>
                {plan.price !== "Contato" && <span className="pb-1 text-sm text-slate-600">/mes</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check aria-hidden="true" className="text-accent" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.name === "Enterprise" ? "mailto:vendas@stickpay.example.com" : "#cadastro"}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-extrabold ${
                  plan.highlighted ? "bg-cta text-primary" : "bg-primary text-white"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
