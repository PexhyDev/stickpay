import { AuthShell } from "@/src/components/auth/AuthShell";
import { LoginForm } from "@/src/components/auth/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <AuthShell title="Entrar na StickPay" description="Acesse a área de operação para acompanhar cobranças, transações e eventos Pix.">
      <Suspense fallback={<div className="text-sm font-semibold text-slate-600">Carregando formulário...</div>}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
