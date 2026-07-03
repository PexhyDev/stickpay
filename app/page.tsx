import { BenefitCard } from "@/src/components/BenefitCard";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { MisticPayFlow } from "@/src/components/MisticPayFlow";
import { PricingTable } from "@/src/components/PricingTable";
import { SignupForm } from "@/src/components/SignupForm";
import { Testimonial } from "@/src/components/Testimonial";
import { BellRing, QrCode, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: QrCode,
    title: "Pix imediato",
    description: "Crie cobranças com QR Code, copia e cola e ID próprio para conciliação.",
  },
  {
    icon: ShieldCheck,
    title: "Credenciais protegidas",
    description: "Client ID e Client Secret da MisticPay ficam no backend, nunca no checkout.",
  },
  {
    icon: BellRing,
    title: "Webhooks em tempo real",
    description: "Receba confirmação de depósito Pix, saques e eventos MED com normalização StickPay.",
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
              Pix com menos atrito técnico e mais controle operacional
            </h2>
          </div>
          <div className="col-span-12 grid gap-5 md:col-span-7 md:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <MisticPayFlow />

      <PricingTable />

      <section className="bg-white py-20" aria-label="Depoimentos e cadastro">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6">
          <div className="col-span-12 lg:col-span-5">
            <Testimonial
              quote="A StickPay virou nossa camada de Pix sem expor as credenciais da adquirente e ainda deixou o financeiro com eventos padronizados."
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
