import { ArrowRight } from "lucide-react";

const navItems = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#arquitetura", label: "Arquitetura" },
  { href: "#precos", label: "Precos" },
  { href: "#cadastro", label: "Cadastro" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-6 py-4">
        <a className="col-span-6 flex items-center gap-3 md:col-span-3" href="#" aria-label="StickPay inicio">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cta font-black text-primary transition duration-300 hover:-rotate-3 hover:scale-105">
            S
          </span>
          <span className="text-xl font-extrabold text-primary">StickPay</span>
        </a>
        <nav className="col-span-6 hidden justify-center gap-8 md:col-span-6 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="relative text-sm font-semibold text-slate-700 transition hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="col-span-6 flex justify-end md:col-span-3">
          <a
            href="#cadastro"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg active:translate-y-0"
          >
            Comece agora
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
