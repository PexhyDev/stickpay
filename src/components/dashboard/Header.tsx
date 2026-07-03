import { Bell, LogOut, Plus } from "lucide-react";
import { Button } from "@/src/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-50/95 px-6 py-4 backdrop-blur lg:ml-72">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Área logada</p>
          <h1 className="mt-1 text-2xl font-black text-primary">Operação StickPay</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary">
            <Bell aria-hidden="true" size={16} />
            Alertas
          </Button>
          <Button>
            <Plus aria-hidden="true" size={16} />
            Criar cobrança Pix
          </Button>
          <form action="/api/auth/logout" method="post">
            <Button variant="ghost" type="submit">
              <LogOut aria-hidden="true" size={16} />
              Sair
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
