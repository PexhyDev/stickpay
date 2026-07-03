import { ArrowRight, PlayCircle, QrCode } from "lucide-react";

function DashboardMock() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 720 480"
      role="img"
      aria-label="Mock do painel StickPay com cobranças Pix"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="720" height="480" rx="28" fill="#0F1724" />
      <rect x="32" y="32" width="656" height="416" rx="22" fill="#F8FAFC" />
      <rect className="animate-scan-line" x="64" y="42" width="120" height="386" rx="22" fill="#00BFA6" />
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
      <rect x="462" y="288" width="42" height="42" rx="8" fill="#0F1724" />
      <rect x="514" y="292" width="78" height="12" rx="6" fill="#CBD5E1" />
      <rect x="514" y="316" width="58" height="12" rx="6" fill="#00BFA6" />
      <rect className="animate-flow-pulse" x="462" y="354" width="132" height="14" rx="7" fill="#FF6A3D" />
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
            <QrCode aria-hidden="true" size={16} />
            Subadquirente Pix via MisticPay
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-black leading-tight text-primary md:text-6xl">
            Aceite Pix com segurança e velocidade
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            A StickPay nasce como uma camada de checkout, conciliação e webhooks sobre a MisticPay, para sua
            operação receber Pix com contrato simples e controle de ponta a ponta.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-extrabold text-primary shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-95 active:translate-y-0"
            >
              Teste grátis
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#arquitetura"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-extrabold text-primary transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg active:translate-y-0"
            >
              <PlayCircle aria-hidden="true" size={18} />
              Ver demo
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
