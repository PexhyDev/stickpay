import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

export function Input({ label, helperText, className = "", ...props }: InputProps) {
  return (
    <label className="block text-sm font-semibold text-primary dark:text-slate-200">
      {label}
      <input
        className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-primary transition duration-300 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-cyan-400/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400/70 ${className}`}
        {...props}
      />
      {helperText && <span className="mt-2 block text-xs font-normal leading-5 text-slate-500 dark:text-slate-400">{helperText}</span>}
    </label>
  );
}
