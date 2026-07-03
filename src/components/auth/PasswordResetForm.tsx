"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button, Input } from "@/src/components/ui";

export function PasswordResetForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Recuperar senha StickPay">
      <Input label="Email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required />
      <Button type="submit">Enviar instruções</Button>
      {submitted && (
        <p className="rounded-lg bg-cyan-50 p-3 text-sm font-semibold text-cyan-700">
          Se o email estiver cadastrado, enviaremos instruções quando o provedor de autenticação estiver conectado.
        </p>
      )}
      <Link className="text-sm font-semibold text-cta hover:underline" href="/login">
        Voltar para login
      </Link>
    </form>
  );
}
