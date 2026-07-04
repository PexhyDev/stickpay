import type { ReactNode } from "react";
import { SparkSpotlight } from "@/src/components/SparkMascot";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
  illustration?: "empty" | "loading";
};

const illustrations = {
  empty: {
    variant: "dark" as const,
    alt: "Spark preparando a área para novos registros da StickPay",
  },
  loading: {
    variant: "dark" as const,
    alt: "Spark processando informações de pagamento na StickPay",
  },
};

export function EmptyState({ title, description, action, illustration = "empty" }: EmptyStateProps) {
  const asset = illustrations[illustration];

  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center shadow-sm transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900/72 dark:hover:border-cyan-400/35 dark:hover:shadow-[0_18px_42px_rgba(6,182,212,0.08)]">
      <SparkSpotlight
        variant={asset.variant}
        alt={asset.alt}
        quality={100}
        size="sm"
        mode="minimal"
        className="mb-5"
        imageClassName="scale-[1.02]"
      />
      <h3 className="text-lg font-extrabold text-primary dark:text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
