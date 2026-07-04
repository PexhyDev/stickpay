import { BellRing } from "lucide-react";
import { Badge, Button, Card, EmptyState, Input } from "@/src/components/ui";

export default function WebhooksPage() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Webhooks</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Eventos transacionais</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Configure URLs, acompanhe tentativas de entrega e veja logs de eventos de pagamento.
        </p>
        <Card className="mt-6 p-6">
          <form className="grid gap-5" aria-label="Configurar webhook">
            <Input label="URL do endpoint" name="webhookUrl" placeholder="https://suaempresa.com/webhooks/mistic-pay" />
            <div className="flex flex-wrap gap-2">
              <Badge tone="cyan">pix.charge.created</Badge>
              <Badge tone="green">pix.charge.paid</Badge>
              <Badge tone="amber">pix.charge.pending</Badge>
              <Badge tone="red">pix.charge.failed</Badge>
            </div>
            <Button>
              <BellRing aria-hidden="true" size={16} />
              Salvar configuracao
            </Button>
          </form>
        </Card>
      </div>
      <EmptyState title="Logs de eventos" description="As tentativas de entrega e respostas HTTP aparecerao aqui quando o modulo estiver conectado." />
    </section>
  );
}
