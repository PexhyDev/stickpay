import { AuthShell } from "@/src/components/auth/AuthShell";
import { PasswordResetForm } from "@/src/components/auth/PasswordResetForm";

export default function PasswordResetPage() {
  return (
    <AuthShell title="Recuperar senha" description="Informe o email da conta para preparar o fluxo de recuperação seguro.">
      <PasswordResetForm />
    </AuthShell>
  );
}
