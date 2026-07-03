import { BenefitCard } from "@/src/components/BenefitCard";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { PricingTable } from "@/src/components/PricingTable";
import { SignupForm } from "@/src/components/SignupForm";
import { Testimonial } from "@/src/components/Testimonial";
import { BarChart3, Code2, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Integração rápida",
    description: "SDKs, payloads previsíveis e endpoints mock para validar checkout antes de ir a produção.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança PCI-DSS",
    description: "Tokenização por padrão, TLS obrigatório e boas práticas para reduzir exposição de dados sensíveis.",
  },
  {
    icon: BarChart3,
    title: "Relatórios em tempo real",
    description: "Acompanhe aprovações, chargebacks e liquidações em uma visão operacional simples.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section id="beneficios" className="bg-white py-20" aria-labelledby="benefits-title">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Beneficios</p>
            <h2 id="benefits-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Pagamentos com menos atrito técnico e mais controle operacional
            </h2>
          </div>
          <div className="col-span-12 grid gap-5 md:col-span-7 md:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <PricingTable />

      <section className="bg-white py-20" aria-label="Depoimentos e cadastro">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6">
          <div className="col-span-12 lg:col-span-5">
            <Testimonial
              quote="A StickPay reduziu o tempo de homologacao do nosso checkout e deu visibilidade para o time financeiro no mesmo dia."
              author="Marina Duarte"
              role="COO, Atlas Commerce"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <SignupForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
