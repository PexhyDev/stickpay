"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const options: Array<{ mode: ThemeMode; label: string; icon: typeof Sun }> = [
  { mode: "light", label: "Claro", icon: Sun },
  { mode: "dark", label: "Escuro", icon: Moon },
  { mode: "system", label: "Sistema", icon: Laptop },
];

function applyTheme(mode: ThemeMode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", mode === "dark" || (mode === "system" && prefersDark));
  document.documentElement.dataset.theme = mode;
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("stickpay-theme") as ThemeMode | null) ?? "system";
    setMode(saved);
    applyTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if ((localStorage.getItem("stickpay-theme") ?? "system") === "system") {
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
      className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900"
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
            className={`grid h-9 w-9 place-items-center rounded-md transition duration-300 hover:-translate-y-0.5 ${
              active
                ? "bg-primary text-white dark:bg-accent dark:text-primary"
                : "text-slate-600 hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            <Icon aria-hidden="true" size={16} />
          </button>
        );
      })}
    </div>
  );
}
