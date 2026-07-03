import { BenefitCard } from "@/src/components/BenefitCard";
import { BellRing, QrCode, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: QrCode,
    title: "Pix imediato",
    description: "Crie QR Code e copia e cola com contrato simples.",
  },
  {
    icon: ShieldCheck,
    title: "Processamento protegido",
    description: "Credenciais operacionais ficam sempre no backend.",
  },
  {
    icon: BellRing,
    title: "Webhooks Pix",
    description: "Normalize depósitos, saques e eventos MED.",
  },
];

export default function MinimalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-20">
        <div className="col-span-12 md:col-span-7">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">StickPay minimal</p>
          <h1 className="mt-4 text-4xl font-black text-primary md:text-6xl">
            Aceite Pix com segurança e velocidade
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Uma versão objetiva para validar a StickPay como plataforma de pagamentos Pix.
          </p>
          <a
            href="/#cadastro"
            className="mt-8 inline-flex rounded-lg bg-cta px-6 py-3 font-extrabold text-white"
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
