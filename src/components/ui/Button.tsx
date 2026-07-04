import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-cta text-white shadow-sm hover:brightness-110 hover:shadow-[0_14px_28px_rgba(79,70,229,0.2)]",
  secondary:
    "border border-slate-300 bg-white text-primary hover:border-primary hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-cyan-400/70 dark:hover:bg-slate-800/80",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800/85 dark:hover:text-white",
  danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg",
};

export function Button({ children, className = "", variant = "primary", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
