import type { ReactNode } from "react";

type ToastProps = {
  title: string;
  children: ReactNode;
};

export function Toast({ title, children }: ToastProps) {
  return (
    <div role="status" className="rounded-lg border border-slate-200 bg-white p-4 shadow-panel">
      <div className="text-sm font-extrabold text-primary">{title}</div>
      <div className="mt-1 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}
