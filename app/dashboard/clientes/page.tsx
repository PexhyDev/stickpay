import { EmptyState } from "@/src/components/ui";

export default function CustomersPage() {
  return (
    <section className="grid gap-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Clientes</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Base de clientes</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Estrutura preparada para listar pagadores, documentos, cobranças vinculadas e histórico de pagamentos.
        </p>
      </div>
      <EmptyState title="Nenhum cliente listado" description="A listagem será conectada ao cadastro de cobranças e transações Pix." />
    </section>
  );
}
