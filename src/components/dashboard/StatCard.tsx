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
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  indigo: "border-indigo-400/25 bg-indigo-400/10 text-indigo-300",
  green: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  slate: "border-slate-500/30 bg-slate-700/35 text-slate-300",
};

type StatCardProps = DashboardMetric;

export function StatCard({ label, value, helper, change, icon, tone }: StatCardProps) {
  const Icon = icons[icon];

  return (
    <article className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/78 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_24px_70px_rgba(6,182,212,0.12)]">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-60"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-300">{label}</p>
          <div className="mt-3 text-2xl font-black text-white">{value}</div>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${tones[tone]}`}>
          <Icon aria-hidden="true" size={19} />
        </span>
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-400">{helper}</p>
      {change && <p className="mt-2 text-xs font-bold text-cyan-300/90">{change}</p>}
    </article>
  );
}
