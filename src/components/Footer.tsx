export function Footer() {
  return (
    <footer className="bg-primary py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6">
        <div className="col-span-12 md:col-span-6">
          <div className="text-xl font-black">StickPay</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Infraestrutura de pagamentos para empresas que precisam vender com seguranca, velocidade e rastreabilidade.
          </p>
        </div>
        <div className="col-span-12 flex flex-wrap gap-5 text-sm md:col-span-6 md:justify-end">
          <a href="#beneficios" className="hover:text-accent">
            Beneficios
          </a>
          <a href="#precos" className="hover:text-accent">
            Precos
          </a>
          <a href="/minimal" className="hover:text-accent">
            Minimal
          </a>
        </div>
      </div>
    </footer>
  );
}
