export function Footer() {
  return (
    <footer className="bg-primary py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6">
        <div className="col-span-12 md:col-span-6">
          <img src="/assets/stickpay-logo-dark.svg" alt="StickPay" className="h-12 w-auto" />
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Plataforma de pagamentos Pix para empresas que precisam de controle, rastreabilidade e operação financeira organizada.
          </p>
        </div>
        <div className="col-span-12 flex flex-wrap gap-5 text-sm md:col-span-6 md:justify-end">
          <a href="#plataforma" className="transition hover:-translate-y-0.5 hover:text-accent">
            Plataforma
          </a>
          <a href="#api" className="transition hover:-translate-y-0.5 hover:text-accent">
            API
          </a>
          <a href="#seguranca" className="transition hover:-translate-y-0.5 hover:text-accent">
            Segurança
          </a>
          <a href="/minimal" className="transition hover:-translate-y-0.5 hover:text-accent">
            Minimal
          </a>
        </div>
      </div>
    </footer>
  );
}
