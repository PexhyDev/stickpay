import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

function DashboardMock() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 720 480"
      role="img"
      aria-label="Mock do painel StickPay com cobranças Pix"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="720" height="480" rx="28" fill="#0B1120" />
      <rect x="32" y="32" width="656" height="416" rx="22" fill="#F8FAFC" />
      <rect className="animate-scan-line" x="64" y="42" width="120" height="386" rx="22" fill="#06B6D4" />
      <rect x="64" y="70" width="150" height="20" rx="10" fill="#0B1120" />
      <rect x="552" y="64" width="92" height="32" rx="10" fill="#4F46E5" />
      <rect x="64" y="126" width="172" height="96" rx="16" fill="#E2E8F0" />
      <rect x="274" y="126" width="172" height="96" rx="16" fill="#E0F2FE" />
      <rect x="484" y="126" width="140" height="96" rx="16" fill="#EEF2FF" />
      <rect x="86" y="158" width="78" height="16" rx="8" fill="#64748B" />
      <rect x="86" y="184" width="110" height="20" rx="10" fill="#0B1120" />
      <rect x="296" y="158" width="86" height="16" rx="8" fill="#0F766E" />
      <rect x="296" y="184" width="116" height="20" rx="10" fill="#06B6D4" />
      <rect x="506" y="158" width="68" height="16" rx="8" fill="#3730A3" />
      <rect x="506" y="184" width="80" height="20" rx="10" fill="#4F46E5" />
      <rect x="64" y="258" width="330" height="150" rx="18" fill="#FFFFFF" stroke="#CBD5E1" />
      <path d="M94 366L150 312L205 344L264 285L360 330" stroke="#06B6D4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="430" y="258" width="194" height="150" rx="18" fill="#FFFFFF" stroke="#CBD5E1" />
      <rect x="462" y="288" width="42" height="42" rx="8" fill="#0B1120" />
      <rect x="514" y="292" width="78" height="12" rx="6" fill="#CBD5E1" />
      <rect x="514" y="316" width="58" height="12" rx="6" fill="#06B6D4" />
      <rect className="animate-flow-pulse" x="462" y="354" width="132" height="14" rx="7" fill="#4F46E5" />
      <path d="M472 298H494V320H472V298ZM478 304V314H488V304H478Z" fill="#F8FAFC" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 animate-pop-in lg:col-span-8">
          <p className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold uppercase tracking-[0.14em] text-accent shadow-sm">
            <ShieldCheck aria-hidden="true" size={16} />
            Plataforma de pagamentos Pix
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-black leading-tight text-primary md:text-6xl">
            Pagamentos Pix com estrutura de operação.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Gere cobranças, acompanhe status e mantenha sua operação financeira sincronizada em uma plataforma
            feita para negócios digitais que precisam de controle.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-extrabold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110 active:translate-y-0"
            >
              Solicitar acesso
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-extrabold text-primary transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg active:translate-y-0"
            >
              <PlayCircle aria-hidden="true" size={18} />
              Ver funcionamento
            </a>
          </div>
        </div>
        <div id="demo" className="col-span-12">
          <div className="animate-float-panel rounded-lg bg-white p-3 shadow-panel transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
