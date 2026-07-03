"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button, Input } from "@/src/components/ui";

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Criar conta StickPay">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Nome" name="name" placeholder="Seu nome" autoComplete="name" required />
        <Input label="Empresa" name="company" placeholder="Nome da empresa" autoComplete="organization" required />
      </div>
      <Input label="Email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required />
      <Input label="Senha" name="password" type="password" placeholder="Mínimo 8 caracteres" autoComplete="new-password" required />
      <Button type="submit">Solicitar criação da conta</Button>
      {submitted && (
        <p className="rounded-lg bg-cyan-50 p-3 text-sm font-semibold text-cyan-700">
          Solicitação registrada. A etapa de onboarding será conectada ao fluxo real de autenticação.
        </p>
      )}
      <Link className="text-sm font-semibold text-cta hover:underline" href="/login">
        Já tenho conta
      </Link>
    </form>
  );
}
