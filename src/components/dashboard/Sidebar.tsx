"use client";

import {
  BellRing,
  Code2,
  CreditCard,
  Headphones,
  Home,
  KeyRound,
  ReceiptText,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Visão geral", icon: Home },
  { href: "/dashboard/transacoes", label: "Transações", icon: ReceiptText },
  { href: "/dashboard/cobrancas", label: "Cobranças", icon: CreditCard },
  { href: "/dashboard/clientes", label: "Clientes", icon: Users },
  { href: "/dashboard/api", label: "API", icon: Code2 },
  { href: "/dashboard/webhooks", label: "Webhooks", icon: BellRing },
  { href: "/dashboard/configuracoes", label: "Configurações", icon: Settings },
  { href: "/dashboard/suporte", label: "Suporte", icon: Headphones },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-slate-200 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col px-5 py-5">
        <Link href="/" className="inline-flex items-center" aria-label="Voltar para landing StickPay">
          <img src="/assets/stickpay-logo.svg" alt="StickPay" className="h-12 w-auto" />
        </Link>
        <nav className="mt-6 grid gap-1" aria-label="Navegação do painel">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition ${
                  isActive ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                <Icon aria-hidden="true" size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto hidden rounded-lg bg-slate-50 p-4 lg:block">
          <div className="flex items-center gap-3 text-sm font-bold text-primary">
            <KeyRound aria-hidden="true" size={18} />
            Ambiente de teste
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">Sessão mock para preparar autenticação, permissões e rotas privadas.</p>
        </div>
      </div>
    </aside>
  );
}
