import { ArrowRight } from "lucide-react";

const navItems = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#precos", label: "Precos" },
  { href: "#cadastro", label: "Cadastro" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-6 py-4">
        <a className="col-span-6 flex items-center gap-3 md:col-span-3" href="#" aria-label="StickPay inicio">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cta font-black text-primary">S</span>
          <span className="text-xl font-extrabold text-primary">StickPay</span>
        </a>
        <nav className="col-span-6 hidden justify-center gap-8 md:col-span-6 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a key={item.href} className="text-sm font-semibold text-slate-700 hover:text-primary" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="col-span-6 flex justify-end md:col-span-3">
          <a
            href="#cadastro"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Comece agora
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
