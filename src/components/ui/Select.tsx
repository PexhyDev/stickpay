import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{ label: string; value: string }>;
};

export function Select({ label, options, className = "", ...props }: SelectProps) {
  return (
    <label className="block text-sm font-semibold text-primary dark:text-slate-200">
      {label}
      <select
        className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-primary transition duration-300 focus:border-accent focus:ring-2 focus:ring-cyan-400/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400/70 ${className}`}
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
