import { ShieldCheck } from "lucide-react";
import { Button, Card, Input, Select } from "@/src/components/ui";

export default function SettingsPage() {
  return (
    <section className="grid gap-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Configuracoes</p>
        <h2 className="mt-2 text-3xl font-black text-primary dark:text-white">Conta, seguranca e operacao</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Base para permissoes, logs de atividade, preferencias de notificacao e 2FA no futuro.
        </p>
      </div>
      <Card className="p-6">
        <form className="grid gap-5" aria-label="Configuracoes da conta">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Nome da empresa" name="company" placeholder="StickPay Demo" />
            <Select
              label="Perfil de operacao"
              name="profile"
              options={[
                { label: "Financeiro", value: "finance" },
                { label: "Desenvolvedor", value: "developer" },
              ]}
            />
          </div>
          <Button>
            <ShieldCheck aria-hidden="true" size={16} />
            Salvar preferencias
          </Button>
        </form>
      </Card>
    </section>
  );
}
