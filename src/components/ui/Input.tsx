import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

export function Input({ label, helperText, className = "", ...props }: InputProps) {
  return (
    <label className="block text-sm font-semibold text-primary">
      {label}
      <input
        className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-primary transition placeholder:text-slate-400 focus:border-accent ${className}`}
        {...props}
      />
      {helperText && <span className="mt-2 block text-xs font-normal leading-5 text-slate-500">{helperText}</span>}
    </label>
  );
}
