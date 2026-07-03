import { KeyRound, ScrollText, TestTube2 } from "lucide-react";
import { Badge, Card, CopyButton, Table } from "@/src/components/ui";

export default function ApiPage() {
  return (
    <section className="grid gap-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">API do cliente</p>
        <h2 className="mt-2 text-3xl font-black text-primary">Chaves, documentação e testes</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Base preparada para gerar chaves API, revogar acessos, testar integração e visualizar logs de eventos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <KeyRound aria-hidden="true" className="text-accent" size={24} />
          <h3 className="mt-4 font-black text-primary">Chave de teste</h3>
          <p className="mt-2 text-sm text-slate-600">Identificador mascarado para não expor segredo em tela.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Badge tone="green">Ativa</Badge>
            <CopyButton value="sp_test_••••_demo" label="Copiar ID" />
          </div>
        </Card>
        <Card className="p-5">
          <ScrollText aria-hidden="true" className="text-accent" size={24} />
          <h3 className="mt-4 font-black text-primary">Documentação</h3>
          <p className="mt-2 text-sm text-slate-600">Área reservada para guias de cobrança, webhooks e consulta de status.</p>
        </Card>
        <Card className="p-5">
          <TestTube2 aria-hidden="true" className="text-accent" size={24} />
          <h3 className="mt-4 font-black text-primary">Teste de integração</h3>
          <p className="mt-2 text-sm text-slate-600">Console futuro para disparar chamadas seguras em ambiente sandbox.</p>
        </Card>
      </div>

      <Table headers={["Chave", "Ambiente", "Status", "Último uso"]}>
        <tr>
          <td className="px-4 py-4 text-sm font-bold text-primary">sp_test_••••_demo</td>
          <td className="px-4 py-4 text-sm text-slate-600">Sandbox</td>
          <td className="px-4 py-4">
            <Badge tone="green">Ativa</Badge>
          </td>
          <td className="px-4 py-4 text-sm text-slate-500">Ainda não utilizada</td>
        </tr>
      </Table>
    </section>
  );
}
