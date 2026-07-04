import {
  Activity,
  Banknote,
  LockKeyhole,
  Percent,
  ReceiptText,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";
import type { DashboardMetric } from "@/src/lib/dashboardMock";

const icons = {
  wallet: Wallet,
  lock: LockKeyhole,
  activity: Activity,
  receipt: ReceiptText,
  target: Target,
  percent: Percent,
  banknote: Banknote,
  sparkles: Sparkles,
};

const tones: Record<DashboardMetric["tone"], string> = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300 group-hover:border-cyan-300/45",
  indigo: "border-indigo-400/25 bg-indigo-400/10 text-indigo-300 group-hover:border-indigo-300/45",
  green: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 group-hover:border-emerald-300/45",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-300 group-hover:border-amber-300/45",
  slate: "border-slate-500/30 bg-slate-700/35 text-slate-300 group-hover:border-slate-400/45",
};

type StatCardProps = DashboardMetric;

export function StatCard({ label, value, helper, change, icon, tone }: StatCardProps) {
  const Icon = icons[icon];

  return (
    <article className="group relative min-h-[138px] overflow-hidden rounded-lg border border-slate-800 bg-slate-900/76 p-4 shadow-[0_14px_34px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-slate-900 hover:shadow-[0_18px_44px_rgba(6,182,212,0.08)]">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/32 to-transparent opacity-60 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/5 blur-2xl transition duration-300 group-hover:bg-cyan-300/9" aria-hidden="true" />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-slate-400">{label}</p>
          <div className="mt-2 text-[22px] font-black leading-tight text-white">{value}</div>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ${tones[tone]}`}>
          <Icon aria-hidden="true" size={18} />
        </span>
      </div>
      <p className="mt-3 text-xs font-semibold leading-5 text-slate-400">{helper}</p>
      {change && <p className="mt-1 text-[11px] font-bold leading-4 text-cyan-300/90">{change}</p>}
    </article>
  );
}
