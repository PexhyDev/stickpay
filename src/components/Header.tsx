"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#api", label: "API" },
  { href: "#seguranca", label: "Seguranca" },
  { href: "#precos", label: "Taxa fixa" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex py-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-primary dark:text-slate-300 dark:hover:text-white"
    >
      {label}
      <span
        className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          : "border-transparent bg-white/80 dark:bg-slate-950/80"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-6 py-3.5">
        <a className="col-span-6 flex items-center gap-3 md:col-span-3" href="#" aria-label="StickPay inicio">
          <img
            src="/assets/stickpay-logo.svg"
            alt="StickPay"
            className="h-11 w-auto transition duration-300 hover:-rotate-1 hover:scale-[1.02]"
          />
        </a>

        <nav className="col-span-6 hidden justify-center gap-8 md:col-span-5 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="col-span-6 flex items-center justify-end gap-2 md:col-span-4">
          <ThemeToggle />
          <a
            href="#cadastro"
            className="hidden items-center gap-2 rounded-lg bg-cta px-4 py-2.5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(79,70,229,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_44px_rgba(79,70,229,0.32)] hover:brightness-110 active:scale-[0.98] sm:inline-flex"
          >
            Solicitar acesso
            <ArrowRight aria-hidden="true" size={16} />
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-primary transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-slate-200 bg-white/95 px-6 transition-[grid-template-rows] duration-300 dark:border-slate-800 dark:bg-slate-950/95 md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 py-4" aria-label="Navegacao mobile">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} onClick={() => setMenuOpen(false)} />
            ))}
            <a
              href="#cadastro"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
            >
              Solicitar acesso
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
