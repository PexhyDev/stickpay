import { AuthShell } from "@/src/components/auth/AuthShell";
import { RegisterForm } from "@/src/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthShell title="Criar conta" description="Prepare o acesso da sua empresa ao painel StickPay. Este fluxo está pronto para conectar autenticação real.">
      <RegisterForm />
    </AuthShell>
  );
}
