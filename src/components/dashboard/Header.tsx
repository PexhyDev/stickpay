import { Bell, LogOut, Menu, Moon, Plus, WalletCards } from "lucide-react";
import { Button } from "@/src/components/ui";

type HeaderProps = {
  onOpenSidebar?: () => void;
};

export function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-slate-950/[0.72] px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-[10px] backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-slate-950/[0.72] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1640px] items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-800 text-slate-300 transition duration-300 hover:border-cyan-400/60 hover:bg-slate-900 hover:text-white lg:hidden"
            aria-label="Abrir menu"
            onClick={onOpenSidebar}
          >
            <Menu aria-hidden="true" size={19} />
          </button>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">Área do cliente</p>
            <h1 className="mt-1 truncate text-xl font-black text-white sm:text-2xl">Operação StickPay</h1>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="hidden items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-xs font-bold text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:flex">
            <WalletCards aria-hidden="true" size={15} className="text-cyan-300" />
            R$ 0,00 / R$ 1K
          </div>
          <div className="hidden items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-xs font-bold text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:flex">
            <Moon aria-hidden="true" size={15} className="text-cyan-300" />
            Escuro
          </div>
          <Button variant="ghost" className="h-10 w-10 px-0" aria-label="Alertas">
            <Bell aria-hidden="true" size={17} />
          </Button>
          <Button className="hidden h-10 shadow-[0_14px_28px_rgba(79,70,229,0.22)] sm:inline-flex">
            <Plus aria-hidden="true" size={16} />
            Receber Pix
          </Button>
          <form action="/api/auth/logout" method="post">
            <Button variant="ghost" type="submit" className="h-10 w-10 px-0 sm:w-auto sm:px-4" aria-label="Sair">
              <LogOut aria-hidden="true" size={16} />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
