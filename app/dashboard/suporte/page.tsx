import { MessageCircle } from "lucide-react";
import { Button, Card, EmptyState, Input, Select } from "@/src/components/ui";

export default function SupportPage() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Suporte</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Atendimento operacional</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Estrutura para abrir chamados sobre cobranças, webhooks, chaves API e divergências de status.
        </p>
        <Card className="mt-6 p-6">
          <form className="grid gap-5" aria-label="Abrir chamado">
            <Select
              label="Categoria"
              name="category"
              options={[
                { label: "Cobrança Pix", value: "charge" },
                { label: "Webhook", value: "webhook" },
                { label: "API", value: "api" },
                { label: "Conta", value: "account" },
              ]}
            />
            <Input label="Assunto" name="subject" placeholder="Descreva o tema do chamado" />
            <Button>
              <MessageCircle aria-hidden="true" size={16} />
              Preparar chamado
            </Button>
          </form>
        </Card>
      </div>
      <EmptyState title="Histórico de chamados" description="Os tickets e respostas do suporte aparecerão aqui na próxima etapa." />
    </section>
  );
}
