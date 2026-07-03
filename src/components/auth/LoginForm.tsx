"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Input } from "@/src/components/ui";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!response.ok) {
      setError("Informe um email válido para iniciar a sessão de demonstração.");
      return;
    }

    router.push(searchParams.get("next") ?? "/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Entrar na StickPay">
      <Input label="Email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required />
      <Input label="Senha" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required />
      {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar no painel"}
      </Button>
      <div className="flex flex-wrap justify-between gap-3 text-sm font-semibold">
        <Link className="text-cta hover:underline" href="/recuperar-senha">
          Esqueci minha senha
        </Link>
        <Link className="text-cta hover:underline" href="/cadastro">
          Criar conta
        </Link>
      </div>
    </form>
  );
}
