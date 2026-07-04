import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-cyan-300/60 dark:border-slate-800 dark:bg-slate-900/72 dark:shadow-[0_14px_34px_rgba(2,6,23,0.14)] dark:hover:border-cyan-400/35 ${className}`}
    >
      {children}
    </section>
  );
}
