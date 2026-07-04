import { KeyRound, ScrollText, TestTube2 } from "lucide-react";
import { Badge, Card, CopyButton, Table } from "@/src/components/ui";

export default function ApiPage() {
  return (
    <section className="grid gap-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">API do cliente</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Chaves, documentacao e testes</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Base preparada para gerar chaves API, revogar acessos, testar integracao e visualizar logs de eventos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <KeyRound aria-hidden="true" className="text-accent" size={24} />
          <h3 className="mt-4 font-black text-primary dark:text-white">Chave de teste</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Identificador mascarado para nao expor segredo em tela.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Badge tone="green">Ativa</Badge>
            <CopyButton value="sp_test_demo" label="Copiar ID" />
          </div>
        </Card>
        <Card className="p-5">
          <ScrollText aria-hidden="true" className="text-accent" size={24} />
          <h3 className="mt-4 font-black text-primary dark:text-white">Documentacao</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Area reservada para guias de cobranca, webhooks e consulta de status.</p>
        </Card>
        <Card className="p-5">
          <TestTube2 aria-hidden="true" className="text-accent" size={24} />
          <h3 className="mt-4 font-black text-primary dark:text-white">Teste de integracao</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Console futuro para disparar chamadas seguras em ambiente sandbox.</p>
        </Card>
      </div>

      <Table headers={["Chave", "Ambiente", "Status", "Ultimo uso"]}>
        <tr>
          <td className="px-4 py-4 text-sm font-bold text-primary dark:text-white">sp_test_demo</td>
          <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">Sandbox</td>
          <td className="px-4 py-4">
            <Badge tone="green">Ativa</Badge>
          </td>
          <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">Ainda nao utilizada</td>
        </tr>
      </Table>
    </section>
  );
}
