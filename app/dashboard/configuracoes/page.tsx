import { ShieldCheck } from "lucide-react";
import { Button, Card, Input, Select } from "@/src/components/ui";

export default function SettingsPage() {
  return (
    <section className="grid gap-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Configurações</p>
        <h2 className="mt-2 text-3xl font-black text-primary">Conta, segurança e operação</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Base para permissões, logs de atividade, preferências de notificação e 2FA no futuro.
        </p>
      </div>
      <Card className="p-6">
        <form className="grid gap-5" aria-label="Configurações da conta">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Nome da empresa" name="company" placeholder="StickPay Demo" />
            <Select
              label="Perfil de operação"
              name="profile"
              options={[
                { label: "Financeiro", value: "finance" },
                { label: "Desenvolvedor", value: "developer" },
                { label: "Administrador", value: "admin" },
              ]}
            />
          </div>
          <Button>
            <ShieldCheck aria-hidden="true" size={16} />
            Salvar preferências
          </Button>
        </form>
      </Card>
    </section>
  );
}
