import type { ReactNode } from "react";

type BadgeTone = "slate" | "indigo" | "cyan" | "green" | "amber" | "red";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

const tones: Record<BadgeTone, string> = {
  slate: "bg-slate-100 text-slate-700",
  indigo: "bg-indigo-50 text-indigo-700",
  cyan: "bg-cyan-50 text-cyan-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return <span className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
