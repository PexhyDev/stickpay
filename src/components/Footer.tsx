export function Footer() {
  return (
    <footer className="bg-primary py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6">
        <div className="col-span-12 md:col-span-6">
          <div className="text-xl font-black">StickPay</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Camada Pix para empresas que querem operar como subadquirentes usando a MisticPay como provedora por trás.
          </p>
        </div>
        <div className="col-span-12 flex flex-wrap gap-5 text-sm md:col-span-6 md:justify-end">
          <a href="#beneficios" className="transition hover:-translate-y-0.5 hover:text-accent">
            Beneficios
          </a>
          <a href="#arquitetura" className="transition hover:-translate-y-0.5 hover:text-accent">
            Arquitetura
          </a>
          <a href="#precos" className="transition hover:-translate-y-0.5 hover:text-accent">
            Precos
          </a>
          <a href="/minimal" className="transition hover:-translate-y-0.5 hover:text-accent">
            Minimal
          </a>
        </div>
      </div>
    </footer>
  );
}
