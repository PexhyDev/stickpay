import type { ReactNode } from "react";

type BadgeTone = "slate" | "indigo" | "cyan" | "green" | "amber" | "red";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

const tones: Record<BadgeTone, string> = {
  slate: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  indigo: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200",
  green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
  red: "bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-200",
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return <span className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
