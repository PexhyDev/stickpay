"use client";

import { Laptop, Moon, Sun, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const options: Array<{ mode: ThemeMode; label: string; icon: LucideIcon }> = [
  { mode: "light", label: "Claro", icon: Sun },
  { mode: "dark", label: "Escuro", icon: Moon },
  { mode: "system", label: "Sistema", icon: Laptop },
];

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

function applyTheme(mode: ThemeMode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = mode === "dark" || (mode === "system" && prefersDark);

  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.dataset.theme = mode;
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const saved = localStorage.getItem("stickpay-theme");
    const initialMode = isThemeMode(saved) ? saved : "system";

    setMode(initialMode);
    applyTheme(initialMode);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = localStorage.getItem("stickpay-theme");

      if (!isThemeMode(current) || current === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function selectTheme(nextMode: ThemeMode) {
    localStorage.setItem("stickpay-theme", nextMode);
    setMode(nextMode);
    applyTheme(nextMode);
  }

  return (
    <div
      className="inline-flex h-10 items-center rounded-full border border-slate-200 bg-white/75 p-1 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70"
      role="group"
      aria-label="Selecionar tema"
    >
      {options.map((option) => {
        const Icon = option.icon;
        const active = mode === option.mode;

        return (
          <button
            key={option.mode}
            type="button"
            aria-label={`Tema ${option.label}`}
            aria-pressed={active}
            title={`Tema ${option.label}`}
            onClick={() => selectTheme(option.mode)}
            className={`grid h-8 w-8 place-items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.96] ${
              active
                ? "bg-primary text-white shadow-sm dark:bg-accent dark:text-primary"
                : "text-slate-500 hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            <Icon aria-hidden="true" size={15} />
            <span className="sr-only">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
