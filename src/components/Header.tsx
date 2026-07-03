import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#api", label: "API" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-6 py-4">
        <a className="col-span-6 flex items-center gap-3 md:col-span-3" href="#" aria-label="StickPay inicio">
          <img
            src="/assets/stickpay-logo.svg"
            alt="StickPay"
            className="h-11 w-auto transition duration-300 hover:-rotate-1 hover:scale-[1.02]"
          />
        </a>
        <nav className="col-span-6 hidden justify-center gap-8 md:col-span-5 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="relative text-sm font-semibold text-slate-700 transition hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full dark:text-slate-300 dark:hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="col-span-6 flex items-center justify-end gap-3 md:col-span-4">
          <ThemeToggle />
          <a
            href="#cadastro"
            className="hidden items-center gap-2 rounded-lg bg-cta px-4 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 active:translate-y-0 sm:inline-flex"
          >
            Solicitar acesso
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
