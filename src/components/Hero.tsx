import { ArrowRight, PlayCircle } from "lucide-react";

function DashboardMock() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 720 480"
      role="img"
      aria-label="Mock do painel StickPay com metricas de pagamentos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="720" height="480" rx="28" fill="#0F1724" />
      <rect x="32" y="32" width="656" height="416" rx="22" fill="#F8FAFC" />
      <rect x="64" y="70" width="150" height="20" rx="10" fill="#0F1724" />
      <rect x="552" y="64" width="92" height="32" rx="10" fill="#FF6A3D" />
      <rect x="64" y="126" width="172" height="96" rx="16" fill="#E2E8F0" />
      <rect x="274" y="126" width="172" height="96" rx="16" fill="#D1FAE5" />
      <rect x="484" y="126" width="140" height="96" rx="16" fill="#FFE4D6" />
      <rect x="86" y="158" width="78" height="16" rx="8" fill="#64748B" />
      <rect x="86" y="184" width="110" height="20" rx="10" fill="#0F1724" />
      <rect x="296" y="158" width="86" height="16" rx="8" fill="#0F766E" />
      <rect x="296" y="184" width="116" height="20" rx="10" fill="#00BFA6" />
      <rect x="506" y="158" width="68" height="16" rx="8" fill="#9A3412" />
      <rect x="506" y="184" width="80" height="20" rx="10" fill="#FF6A3D" />
      <rect x="64" y="258" width="330" height="150" rx="18" fill="#FFFFFF" stroke="#CBD5E1" />
      <path d="M94 366L150 312L205 344L264 285L360 330" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="430" y="258" width="194" height="150" rx="18" fill="#FFFFFF" stroke="#CBD5E1" />
      <rect x="460" y="292" width="124" height="14" rx="7" fill="#CBD5E1" />
      <rect x="460" y="326" width="92" height="14" rx="7" fill="#CBD5E1" />
      <rect x="460" y="360" width="138" height="14" rx="7" fill="#CBD5E1" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-slate-50 py-20 md:py-24" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 md:col-span-6">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Gateway B2B/B2C</p>
          <h1 id="hero-title" className="mt-4 text-4xl font-black leading-tight text-primary md:text-6xl">
            Aceite pagamentos com segurança e velocidade
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            A StickPay ajuda empresas a tokenizar cartoes, aprovar transacoes e acompanhar receitas com uma
            integracao clara para times de produto, tecnologia e operacoes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-extrabold text-primary transition hover:brightness-95"
            >
              Teste grátis
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-extrabold text-primary transition hover:border-primary"
            >
              <PlayCircle aria-hidden="true" size={18} />
              Ver demo
            </a>
          </div>
        </div>
        <div id="demo" className="col-span-12 md:col-span-6">
          <div className="rounded-[28px] bg-white p-3 shadow-panel">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
