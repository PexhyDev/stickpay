import { QrCode } from "lucide-react";
import { Button, Card, EmptyState, Input, Select } from "@/src/components/ui";

export default function ChargesPage() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Cobrancas</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Criar cobranca Pix</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Base visual para informar valor, cliente e descricao antes de gerar QR Code e Pix copia e cola.
        </p>
        <Card className="mt-6 p-6">
          <form className="grid gap-5" aria-label="Criar cobranca Pix">
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Valor" name="amount" placeholder="129,90" inputMode="decimal" />
              <Select
                label="Expiracao"
                name="expiration"
                options={[
                  { label: "30 minutos", value: "30" },
                  { label: "1 hora", value: "60" },
                  { label: "24 horas", value: "1440" },
                ]}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Cliente" name="customer" placeholder="Cliente Exemplo" />
              <Input label="Documento" name="document" placeholder="00000000000" inputMode="numeric" />
            </div>
            <Input label="Descricao" name="description" placeholder="Pedido 1042" />
            <Button>
              <QrCode aria-hidden="true" size={16} />
              Preparar cobranca
            </Button>
          </form>
        </Card>
      </div>
      <EmptyState
        title="QR Code e Pix copia e cola"
        description="Na proxima etapa, esta area exibira o QR Code, o texto copia e cola, status em tempo real e registro da cobranca."
      />
    </section>
  );
}
