import { BenefitCard } from "@/src/components/BenefitCard";
import { Code2, ShieldCheck, Timer } from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Integração rápida",
    description: "Comece com endpoints claros e payloads simples.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança PCI-DSS",
    description: "Tokenizacao e boas praticas para dados sensiveis.",
  },
  {
    icon: Timer,
    title: "Tempo real",
    description: "Acompanhe pagamentos e eventos conforme acontecem.",
  },
];

export default function MinimalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-20">
        <div className="col-span-12 md:col-span-7">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">StickPay minimal</p>
          <h1 className="mt-4 text-4xl font-black text-primary md:text-6xl">
            Aceite pagamentos com segurança e velocidade
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Uma versao objetiva com hero, beneficios e CTA para publicar rapidamente.
          </p>
          <a
            href="/#cadastro"
            className="mt-8 inline-flex rounded-lg bg-cta px-6 py-3 font-extrabold text-primary"
          >
            Comece agora
          </a>
        </div>
        <div className="col-span-12 grid gap-5 md:col-span-5">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>
    </main>
  );
}
