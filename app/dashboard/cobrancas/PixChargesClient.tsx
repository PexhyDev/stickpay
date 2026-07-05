"use client";

import {
  AlertCircle,
  Check,
  Clock3,
  Copy,
  Download,
  Eye,
  FileText,
  Loader2,
  Plus,
  QrCode,
  RefreshCw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SparkSpotlight } from "@/src/components/SparkMascot";
import { Badge, Button, StatusBadge } from "@/src/components/ui";
import {
  createPixCharge,
  expirationOptions,
  formatCurrencyInput,
  formatDocument,
  formatPhone,
  initialPixChargeForm,
  recentPixCharges,
  validatePixChargeForm,
  type PixCharge,
  type PixChargeFormErrors,
  type PixChargeFormValues,
  type PixChargeStatus,
} from "@/src/lib/pixCharges";

const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 placeholder:text-slate-500 hover:border-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/15";

const errorClass = "mt-2 text-xs font-semibold text-red-300";

const statusText: Record<PixChargeStatus, string> = {
  pending: "Aguardando pagamento",
  paid: "Pago",
  expired: "Expirado",
  canceled: "Cancelado",
  review: "Em analise",
};

export function PixChargesClient() {
  const [values, setValues] = useState<PixChargeFormValues>(initialPixChargeForm);
  const [errors, setErrors] = useState<PixChargeFormErrors>({});
  const [charge, setCharge] = useState<PixCharge | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const liveErrors = useMemo(() => validatePixChargeForm(values), [values]);
  const isFormReady = Object.keys(liveErrors).length === 0;
  const history = charge ? [charge, ...recentPixCharges] : recentPixCharges;

  function updateField(name: keyof PixChargeFormValues, value: string) {
    let nextValue = value;

    if (name === "amount") {
      nextValue = formatCurrencyInput(value);
    }

    if (name === "document") {
      nextValue = formatDocument(value);
    }

    if (name === "phone") {
      nextValue = formatPhone(value);
    }

    setValues((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validatePixChargeForm(values);
    setErrors(nextErrors);
    setNotice(null);

    if (Object.keys(nextErrors).length > 0) {
      setNotice("Revise os campos destacados antes de gerar a cobranca.");
      return;
    }

    setIsSubmitting(true);

    try {
      const createdCharge = await createPixCharge(values);
      setCharge(createdCharge);
      setNotice("A cobranca foi criada com sucesso.");
    } catch {
      setNotice("Nao foi possivel gerar a cobranca agora. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleNewCharge() {
    setValues(initialPixChargeForm);
    setErrors({});
    setCharge(null);
    setNotice(null);
  }

  async function copyToClipboard(value: string, message: string) {
    await navigator.clipboard.writeText(value);
    setCopyFeedback(message);
    window.setTimeout(() => setCopyFeedback(null), 1800);
  }

  function downloadQrCode() {
    if (!charge) {
      return;
    }

    const blob = new Blob([`StickPay QR Code\n${charge.id}\n${charge.copyPasteCode}`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${charge.id}-qrcode.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
    setCopyFeedback("Arquivo do QR Code preparado.");
  }

  return (
    <div className="grid min-w-0 gap-8">
      <section className="relative isolate overflow-hidden rounded-lg border border-slate-800/90 bg-slate-950/54 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(79,70,229,0.16),transparent_34%),linear-gradient(245deg,rgba(6,182,212,0.12),transparent_42%)]" aria-hidden="true" />
        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Cobrancas</p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Receber via Pix</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
              Crie uma cobranca Pix e gere QR Code, codigo copia e cola e status de pagamento em tempo real.
            </p>
          </div>
          <div className="grid gap-2 rounded-lg border border-cyan-300/15 bg-slate-900/58 p-3 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:min-w-72">
            <div className="flex items-center justify-between gap-3">
              <span className="font-bold text-slate-300">Ambiente</span>
              <Badge tone="cyan">Sandbox operacional</Badge>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldCheck aria-hidden="true" size={14} className="text-emerald-300" />
              Fluxo preparado para integracao via API StickPay.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)]">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-slate-800 bg-slate-900/70 p-5 shadow-[0_18px_46px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6"
          aria-label="Criar cobranca Pix"
        >
          <div className="flex flex-col gap-3 border-b border-slate-800/90 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-300">Dados da cobranca</p>
              <h2 className="mt-2 text-2xl font-black text-white">Gerar QR Code Pix</h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">Preencha os dados essenciais para criar uma cobranca rastreavel.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/62 px-3 py-2 text-xs font-bold text-slate-300">
              <Clock3 aria-hidden="true" size={14} className="text-cyan-300" />
              Criacao rapida
            </span>
          </div>

          <div className="mt-5 grid gap-5">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Valor" error={errors.amount}>
                <input
                  className={fieldClass}
                  name="amount"
                  inputMode="decimal"
                  placeholder="R$ 0,00"
                  value={values.amount}
                  onChange={(event) => updateField("amount", event.target.value)}
                  aria-invalid={Boolean(errors.amount)}
                />
              </Field>
              <Field label="Expiracao" error={errors.expiration}>
                <select
                  className={fieldClass}
                  name="expiration"
                  value={values.expiration}
                  onChange={(event) => updateField("expiration", event.target.value)}
                >
                  {expirationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Cliente / pagador" error={errors.customerName}>
                <input
                  className={fieldClass}
                  name="customerName"
                  placeholder="Nome do cliente"
                  value={values.customerName}
                  onChange={(event) => updateField("customerName", event.target.value)}
                  aria-invalid={Boolean(errors.customerName)}
                />
              </Field>
              <Field label="CPF/CNPJ" error={errors.document}>
                <input
                  className={fieldClass}
                  name="document"
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  value={values.document}
                  onChange={(event) => updateField("document", event.target.value)}
                  aria-invalid={Boolean(errors.document)}
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="E-mail" error={errors.email} optional>
                <input
                  className={fieldClass}
                  name="email"
                  type="email"
                  placeholder="cliente@empresa.com"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>
              <Field label="Telefone" error={errors.phone} optional>
                <input
                  className={fieldClass}
                  name="phone"
                  inputMode="tel"
                  placeholder="(11) 90000-0000"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </Field>
            </div>

            <Field label="Descricao" error={errors.description} optional hint={`${values.description.length}/120`}>
              <textarea
                className={`${fieldClass} min-h-28 resize-none`}
                name="description"
                placeholder="Ex: Pedido #1042, mensalidade ou reposicao de saldo"
                maxLength={120}
                value={values.description}
                onChange={(event) => updateField("description", event.target.value)}
              />
            </Field>

            <Field label="Referencia / pedido interno" error={errors.reference} optional>
              <input
                className={fieldClass}
                name="reference"
                placeholder="PED-1042"
                value={values.reference}
                onChange={(event) => updateField("reference", event.target.value)}
              />
            </Field>
          </div>

          {notice && (
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-cyan-300/15 bg-cyan-400/[0.07] p-4 text-sm font-semibold text-cyan-100">
              <AlertCircle aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
              {notice}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              type="submit"
              disabled={isSubmitting || !isFormReady}
              className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 shadow-[0_16px_34px_rgba(6,182,212,0.18)] hover:shadow-[0_20px_42px_rgba(79,70,229,0.24)] sm:w-auto"
            >
              {isSubmitting ? <Loader2 aria-hidden="true" size={17} className="animate-spin" /> : <QrCode aria-hidden="true" size={17} />}
              {isSubmitting ? "Gerando cobranca..." : "Gerar QR Code Pix"}
            </Button>
            <Button type="button" variant="ghost" onClick={handleNewCharge} className="w-full border border-slate-800 bg-slate-950/38 sm:w-auto">
              <RefreshCw aria-hidden="true" size={16} />
              Limpar
            </Button>
          </div>
        </form>

        <ResultPanel
          charge={charge}
          copyFeedback={copyFeedback}
          onCopy={(value, message) => copyToClipboard(value, message)}
          onDownload={downloadQrCode}
          onNewCharge={handleNewCharge}
        />
      </section>

      <section className="dashboard-deferred">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Historico recente</p>
            <h2 className="mt-2 text-2xl font-black text-white">Ultimas cobrancas Pix</h2>
            <p className="mt-1 text-sm leading-6 text-slate-400">Acompanhe criacao, status, cliente e valor das cobrancas mais recentes.</p>
          </div>
          <Button variant="secondary" className="border-slate-700 bg-slate-900/72">
            <Eye aria-hidden="true" size={16} />
            Ver extrato
          </Button>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/66 shadow-[0_16px_38px_rgba(2,6,23,0.14),inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-[880px] w-full table-fixed divide-y divide-slate-800">
              <thead className="bg-slate-950/62">
                <tr>
                  {["Referencia", "Cliente", "Valor", "Status", "Criado em", "Acao"].map((header) => (
                    <th key={header} className="px-5 py-3.5 text-left text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/90">
                {history.map((item) => (
                  <tr key={item.id} className="bg-slate-950/[0.08] transition duration-300 hover:bg-slate-900/80">
                    <td className="px-5 py-4 text-sm font-black text-white">{item.reference}</td>
                    <td className="px-5 py-4 text-sm text-slate-300">{item.customerName}</td>
                    <td className="px-5 py-4 text-sm font-black text-cyan-200">{item.amountFormatted}</td>
                    <td className="px-5 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-400">{item.createdAt}</td>
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 bg-slate-950/50 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
                        aria-label={`Abrir cobranca ${item.reference}`}
                      >
                        <Eye aria-hidden="true" size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {history.map((item) => (
              <article key={`mobile-${item.id}`} className="rounded-lg border border-slate-800 bg-slate-950/32 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-white">{item.reference}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.customerName}</p>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-lg font-black text-cyan-200">{item.amountFormatted}</span>
                  <span className="text-xs font-semibold text-slate-500">{item.createdAt}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  error,
  optional,
  hint,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-bold text-slate-200">
      <span className="flex items-center justify-between gap-3">
        <span>{label}</span>
        <span className="text-xs font-semibold text-slate-500">{hint ?? (optional ? "Opcional" : "Obrigatorio")}</span>
      </span>
      {children}
      {error && <span className={errorClass}>{error}</span>}
    </label>
  );
}

function ResultPanel({
  charge,
  copyFeedback,
  onCopy,
  onDownload,
  onNewCharge,
}: {
  charge: PixCharge | null;
  copyFeedback: string | null;
  onCopy: (value: string, message: string) => void;
  onDownload: () => void;
  onNewCharge: () => void;
}) {
  if (!charge) {
    return (
      <aside className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/66 p-5 shadow-[0_18px_46px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(6,182,212,0.16),transparent_30%),linear-gradient(145deg,rgba(79,70,229,0.09),transparent_38%)]" aria-hidden="true" />
        <div className="relative grid min-h-[610px] content-center gap-6">
          <SparkSpotlight
            variant="empty-state"
            alt="Spark preparando a cobranca Pix da StickPay"
            quality={100}
            size="lg"
            mode="hero"
            className="mx-auto"
          />
          <div className="mx-auto max-w-md text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
              <QrCode aria-hidden="true" size={24} />
            </span>
            <h2 className="mt-4 text-2xl font-black text-white">Seu QR Code aparecera aqui</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Apos gerar a cobranca, esta area exibira QR Code, Pix copia e cola, status e resumo operacional.
            </p>
          </div>
          <div className="grid gap-3 rounded-lg border border-slate-800/90 bg-slate-950/38 p-4">
            {["Validacao dos dados", "Geracao do codigo Pix", "Acompanhamento de status"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                <span className="grid h-7 w-7 place-items-center rounded-lg border border-cyan-300/15 bg-cyan-400/10 text-xs font-black text-cyan-200">
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  const summary = [
    ["Valor", charge.amountFormatted],
    ["Cliente", charge.customerName],
    ["Documento", charge.document],
    ["Descricao", charge.description],
    ["Referencia", charge.reference],
    ["Expiracao", charge.expiresAt],
    ["Criado em", charge.createdAt],
    ["ID da cobranca", charge.id],
  ];

  return (
    <aside className="grid content-start gap-4 rounded-lg border border-slate-800 bg-slate-900/70 p-5 shadow-[0_18px_46px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
      <div className="flex flex-col gap-3 border-b border-slate-800/90 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-300">Cobranca gerada</p>
          <h2 className="mt-2 text-2xl font-black text-white">{charge.amountFormatted}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">{charge.id}</p>
        </div>
        <StatusBadge status={charge.status} />
      </div>

      <div className="rounded-lg border border-cyan-300/18 bg-slate-950/48 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="mx-auto grid aspect-square w-full max-w-[292px] place-items-center rounded-lg border border-slate-700 bg-white p-4 shadow-[0_18px_38px_rgba(2,6,23,0.24)]">
          <QrMatrix seed={charge.copyPasteCode} />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Button variant="secondary" onClick={() => onCopy(charge.copyPasteCode, "Codigo copiado com sucesso.")} className="border-slate-700 bg-slate-900/80">
            <Copy aria-hidden="true" size={16} />
            Copiar Pix
          </Button>
          <Button variant="secondary" onClick={onDownload} className="border-slate-700 bg-slate-900/80">
            <Download aria-hidden="true" size={16} />
            Baixar QR Code
          </Button>
        </div>
      </div>

      <section className="rounded-lg border border-slate-800 bg-slate-950/38 p-4">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-amber-300/20 bg-amber-300/10 text-amber-100">
            <Clock3 aria-hidden="true" size={18} />
          </span>
          <div>
            <h3 className="text-sm font-black text-white">Status: {statusText[charge.status]}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Assim que o pagamento for confirmado, o status sera atualizado em tempo real.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-950/38 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-black text-white">
          <FileText aria-hidden="true" size={17} className="text-cyan-300" />
          Pix copia e cola
        </div>
        <div className="max-h-28 overflow-y-auto break-all rounded-lg border border-slate-800 bg-slate-950/74 p-3 text-xs font-semibold leading-5 text-slate-300">
          {charge.copyPasteCode}
        </div>
        <button
          type="button"
          onClick={() => onCopy(charge.copyPasteCode, "Codigo copiado com sucesso.")}
          className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-300 transition hover:text-cyan-100"
        >
          <Copy aria-hidden="true" size={15} />
          Copiar codigo
        </button>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-950/38 p-4">
        <h3 className="text-sm font-black text-white">Informacoes da cobranca</h3>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {summary.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-800 bg-slate-900/52 p-3">
              <dt className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{label}</dt>
              <dd className="mt-1 break-words text-sm font-bold text-slate-200">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {copyFeedback && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100">
          <Check aria-hidden="true" size={17} />
          {copyFeedback}
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-3">
        <Button variant="ghost" onClick={onNewCharge} className="border border-slate-800 bg-slate-950/38">
          <Plus aria-hidden="true" size={16} />
          Nova
        </Button>
        <Button variant="ghost" className="border border-slate-800 bg-slate-950/38">
          <Eye aria-hidden="true" size={16} />
          Detalhes
        </Button>
        <Button variant="ghost" className="border border-slate-800 bg-slate-950/38">
          <Send aria-hidden="true" size={16} />
          Compartilhar
        </Button>
      </div>
    </aside>
  );
}

function QrMatrix({ seed }: { seed: string }) {
  const cells = useMemo(() => buildQrCells(seed), [seed]);

  return (
    <div className="grid aspect-square w-full grid-cols-[repeat(29,minmax(0,1fr))] gap-[2px]" aria-label="QR Code Pix gerado">
      {cells.map((active, index) => (
        <span key={index} className={active ? "rounded-[1px] bg-slate-950" : "rounded-[1px] bg-white"} />
      ))}
    </div>
  );
}

function buildQrCells(seed: string) {
  const size = 29;
  const cells = Array.from({ length: size * size }, (_, index) => {
    const char = seed.charCodeAt(index % seed.length);
    return (char + index * 17 + Math.floor(index / size) * 7) % 5 < 2;
  });

  paintFinder(cells, size, 0, 0);
  paintFinder(cells, size, size - 7, 0);
  paintFinder(cells, size, 0, size - 7);

  return cells;
}

function paintFinder(cells: boolean[], size: number, startX: number, startY: number) {
  for (let y = 0; y < 7; y += 1) {
    for (let x = 0; x < 7; x += 1) {
      const isBorder = x === 0 || x === 6 || y === 0 || y === 6;
      const isCore = x >= 2 && x <= 4 && y >= 2 && y <= 4;
      cells[(startY + y) * size + startX + x] = isBorder || isCore;
    }
  }
}
