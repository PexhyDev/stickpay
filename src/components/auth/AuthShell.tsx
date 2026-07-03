import type { ReactNode } from "react";
import Link from "next/link";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-12 gap-8 px-6 py-8">
        <section className="col-span-12 flex flex-col justify-between rounded-lg bg-primary p-8 text-white lg:col-span-5">
          <Link href="/" aria-label="Voltar para StickPay">
            <img src="/assets/stickpay-logo-dark.svg" alt="StickPay" className="h-14 w-auto" />
          </Link>
          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Operação Pix</p>
            <h1 className="mt-4 text-4xl font-black leading-tight">Painel financeiro com status, eventos e controle.</h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A próxima fase da StickPay centraliza cobranças, transações, clientes, chaves API e webhooks em uma área logada.
            </p>
          </div>
          <p className="mt-10 text-xs text-slate-400">Sessão de demonstração para preparar a arquitetura funcional.</p>
        </section>

        <section className="col-span-12 flex items-center lg:col-span-7">
          <div className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-panel md:p-8">
            <h2 className="text-3xl font-black text-primary">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            <div className="mt-8">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
