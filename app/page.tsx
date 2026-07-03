import { ApiIntegration } from "@/src/components/ApiIntegration";
import { AudienceGrid } from "@/src/components/AudienceGrid";
import { BenefitCard } from "@/src/components/BenefitCard";
import { FinalCta } from "@/src/components/FinalCta";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { PricingTable } from "@/src/components/PricingTable";
import { ProductShowcase } from "@/src/components/ProductShowcase";
import { SecurityControl } from "@/src/components/SecurityControl";
import { SignupForm } from "@/src/components/SignupForm";
import { Testimonial } from "@/src/components/Testimonial";
import { TransactionFlow } from "@/src/components/TransactionFlow";
import { BellRing, QrCode, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: QrCode,
    title: "Cobranças Pix estruturadas",
    description: "Crie QR Code, copia e cola e identificadores próprios para acompanhar cada recebimento.",
  },
  {
    icon: ShieldCheck,
    title: "Operação protegida",
    description: "Credenciais e processamento ficam no backend, com respostas padronizadas para seus sistemas.",
  },
  {
    icon: BellRing,
    title: "Eventos em tempo real",
    description: "Receba confirmações, mudanças de status e registros operacionais por webhook.",
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
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Base operacional</p>
            <h2 id="benefits-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Pagamentos Pix com controle para equipes que operam volume.
            </h2>
          </div>
          <div className="col-span-12 grid gap-5 md:col-span-7 md:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <ProductShowcase />
      <TransactionFlow />
      <ApiIntegration />
      <SecurityControl />
      <AudienceGrid />
      <PricingTable />

      <section id="cadastro" className="bg-white py-20" aria-label="Depoimentos e cadastro">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6">
          <div className="col-span-12 lg:col-span-5">
            <Testimonial
              quote="A StickPay organizou nosso fluxo Pix com status claros, eventos previsíveis e menos ruído para o time financeiro."
              author="Marina Duarte"
              role="COO, Atlas Commerce"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <SignupForm />
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
