"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function SignupForm() {
  const [state, setState] = useState<FormState>("idle");
  const [copyPaste, setCopyPaste] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState("loading");
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const amount = Number(String(form.get("amount") ?? "0").replace(",", "."));
    const payerDocument = String(form.get("document") ?? "");

    if (!email.includes("@") || !name || amount <= 0 || payerDocument.replace(/\D/g, "").length < 11) {
      setState("error");
      return;
    }

    try {
      const chargeResponse = await fetch("/api/pix/charges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          payerName: name,
          payerDocument,
          externalId: `lead-${Date.now()}`,
          description: `Sandbox Pix para ${email}`,
        }),
      });
      const charge = await chargeResponse.json();

      setCopyPaste(charge.pix.copyPaste);
      setState("success");
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
        Gere uma cobrança Pix mock no padrão MisticPay e veja o contrato que sua loja receberia.
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
        <label className="text-sm font-semibold text-primary">
          CPF do pagador
          <input
            name="document"
            required
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-base transition focus:border-accent"
            placeholder="12345678909"
            inputMode="numeric"
          />
        </label>
        <label className="text-sm font-semibold text-primary">
          Valor Pix
          <input
            name="amount"
            required
            type="number"
            min="1"
            step="0.01"
            defaultValue="49.90"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-base transition focus:border-accent"
            placeholder="49.90"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cta px-5 py-3 font-extrabold text-primary transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {state === "loading" ? "Gerando Pix..." : "Gerar Pix de teste"}
      </button>
      <div className="mt-4 min-h-6 text-sm" aria-live="polite">
        {state === "success" && <p className="font-semibold text-accent">Cobrança Pix mock gerada via MisticPay.</p>}
        {state === "error" && <p className="font-semibold text-red-700">Revise os dados e tente novamente.</p>}
      </div>
      {copyPaste && (
        <label className="mt-4 block text-sm font-semibold text-primary">
          Pix copia e cola
          <textarea
            readOnly
            value={copyPaste}
            className="mt-2 h-24 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs text-slate-700"
          />
        </label>
      )}
    </form>
  );
}
