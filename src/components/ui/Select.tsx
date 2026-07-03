import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{ label: string; value: string }>;
};

export function Select({ label, options, className = "", ...props }: SelectProps) {
  return (
    <label className="block text-sm font-semibold text-primary">
      {label}
      <select
        className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-primary transition focus:border-accent ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
