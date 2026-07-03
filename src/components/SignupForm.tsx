"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function SignupForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState("loading");
    const form = new FormData(formElement);
    const email = String(form.get("email") ?? "");

    if (!email.includes("@")) {
      setState("error");
      return;
    }

    try {
      const tokenizeResponse = await fetch("/api/tokenize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: "4111111111111111",
          expMonth: "12",
          expYear: "2030",
          cvv: "123",
          holderName: String(form.get("name") ?? "Cliente StickPay"),
        }),
      });
      const tokenized = await tokenizeResponse.json();

      await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 12990,
          currency: "BRL",
          paymentToken: tokenized.token,
          customer: { email },
        }),
      });

      setState("success");
      formElement.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form
      id="cadastro"
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-slate-50 p-6"
      aria-label="Formulario de cadastro StickPay"
    >
      <h2 className="text-2xl font-black text-primary">Comece agora</h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        Receba acesso ao sandbox e teste um fluxo mock de tokenizacao e transacao.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-primary">
          Nome
          <input
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-base"
            placeholder="Seu nome"
            autoComplete="name"
          />
        </label>
        <label className="text-sm font-semibold text-primary">
          Email
          <input
            name="email"
            required
            type="email"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-base"
            placeholder="voce@empresa.com"
            autoComplete="email"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cta px-5 py-3 font-extrabold text-primary transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {state === "loading" ? "Enviando..." : "Comece agora"}
      </button>
      <div className="mt-4 min-h-6 text-sm" aria-live="polite">
        {state === "success" && <p className="font-semibold text-accent">Cadastro recebido. Sandbox acionado.</p>}
        {state === "error" && <p className="font-semibold text-red-700">Revise os dados e tente novamente.</p>}
      </div>
    </form>
  );
}
