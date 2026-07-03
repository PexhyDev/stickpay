import { Check } from "lucide-react";

const plans = [
  {
    name: "Pix Start",
    price: "R$ 0",
    description: "Para validar cobranças Pix e webhooks.",
    features: ["Sandbox MisticPay", "QR Code Pix", "Webhook de depósito"],
    cta: "Teste grátis",
  },
  {
    name: "Pix Scale",
    price: "R$ 499",
    description: "Para operação com volume, suporte e conciliação.",
    features: ["Conciliação em tempo real", "Repasse operacional", "SLA de integração"],
    cta: "Comece agora",
    highlighted: true,
  },
  {
    name: "Subadquirente",
    price: "Contato",
    description: "Para regras comerciais, risco e governança sob medida.",
    features: ["Contrato dedicado", "Gestão MED", "Arquitetura consultiva"],
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
              Comece com Pix e evolua para operação de subadquirência
            </h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-panel ${
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
                href={plan.name === "Subadquirente" ? "mailto:vendas@stickpay.example.com" : "#cadastro"}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                  plan.highlighted ? "bg-cta text-white hover:shadow-lg hover:brightness-110" : "bg-primary text-white hover:bg-slate-800"
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
