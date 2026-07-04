"use client";

import {
  BadgePercent,
  BellRing,
  BookOpen,
  Boxes,
  Code2,
  CreditCard,
  FileWarning,
  Gift,
  Home,
  KeyRound,
  Layers3,
  ReceiptText,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const navGroups = [
  {
    label: "Gerenciamento",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: Home },
      { href: "/dashboard/cobrancas", label: "Receber via Pix", icon: CreditCard },
      { href: "/dashboard/transacoes", label: "Transferencias", icon: Send },
      { href: "/dashboard/transacoes", label: "Saques", icon: WalletCards },
      { href: "/dashboard/transacoes", label: "Extrato", icon: ReceiptText },
      { href: "/dashboard/clientes", label: "Clientes", icon: Users },
    ],
  },
  {
    label: "Checkout",
    items: [
      { href: "/dashboard/cobrancas", label: "Checkout", icon: ShoppingCart },
      { href: "/dashboard/cobrancas", label: "Produtos", icon: Boxes },
      { href: "/dashboard/cobrancas", label: "Cupons", icon: Gift },
      { href: "/dashboard/configuracoes", label: "Taxas", icon: BadgePercent },
    ],
  },
  {
    label: "Desenvolvedores",
    items: [
      { href: "/dashboard/webhooks", label: "Webhooks", icon: BellRing },
      { href: "/dashboard/api", label: "API", icon: Code2 },
      { href: "/dashboard/api", label: "Credenciais", icon: KeyRound },
      { href: "/dashboard/api", label: "Documentacao", icon: BookOpen },
    ],
  },
  {
    label: "Conta",
    items: [
      { href: "/dashboard/suporte", label: "Infracoes / MED", icon: FileWarning },
      { href: "/dashboard/configuracoes", label: "Configuracoes", icon: Settings },
    ],
  },
];

const activeLabelsByPath: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/cobrancas": "Receber via Pix",
  "/dashboard/transacoes": "Transferencias",
  "/dashboard/clientes": "Clientes",
  "/dashboard/webhooks": "Webhooks",
  "/dashboard/api": "API",
  "/dashboard/suporte": "Infracoes / MED",
  "/dashboard/configuracoes": "Configuracoes",
};

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm transition lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[min(86vw,18rem)] border-r border-slate-800 bg-slate-950/98 shadow-[18px_0_56px_rgba(2,6,23,0.38)] transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full min-h-0 flex-col px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Voltar para landing StickPay" onClick={onClose}>
              <img src="/assets/stickpay-icon.svg" alt="" className="h-10 w-10" />
              <span>
                <span className="block text-lg font-black leading-5 text-white">StickPay</span>
                <span className="block text-xs font-semibold text-slate-400">Area do cliente</span>
              </span>
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-800 text-slate-300 transition duration-300 hover:border-cyan-400/60 hover:bg-slate-900 hover:text-white lg:hidden"
              aria-label="Fechar menu"
              onClick={onClose}
            >
              <X aria-hidden="true" size={18} />
            </button>
          </div>

          <nav
            className="mt-6 grid min-h-0 flex-1 gap-5 overflow-y-auto pr-1 [scrollbar-color:#334155_transparent] [scrollbar-width:thin]"
            aria-label="Navegacao do painel"
          >
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="px-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">{group.label}</p>
                <div className="mt-2 grid gap-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeLabelsByPath[pathname] === item.label;

                    return (
                      <Link
                        key={`${group.label}-${item.label}`}
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-500/20 to-cyan-400/10 text-white ring-1 ring-cyan-400/25"
                            : "text-slate-400 hover:bg-slate-900/90 hover:text-white"
                        }`}
                      >
                        <Icon aria-hidden="true" size={18} className={`shrink-0 ${isActive ? "text-cyan-300" : ""}`} />
                        <span className="min-w-0 truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-5 rounded-lg border border-cyan-400/15 bg-cyan-400/10 p-4 shadow-[0_14px_32px_rgba(6,182,212,0.06)]">
            <div className="flex items-center gap-3 text-sm font-extrabold text-white">
              <Layers3 aria-hidden="true" size={18} className="text-cyan-300" />
              Ambiente cliente
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Operacao Pix, checkout, API e movimentacoes em uma area focada no uso da gateway.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-300">
              <ShieldCheck aria-hidden="true" size={14} />
              Jornada segura para clientes
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
