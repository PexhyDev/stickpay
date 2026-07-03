import type { ReactNode } from "react";
import Image from "next/image";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
  illustration?: "empty" | "loading";
};

const illustrations = {
  empty: {
    src: "/mascot/spark-empty-state.png",
    alt: "Spark preparando a area para novos registros da StickPay",
  },
  loading: {
    src: "/mascot/spark-loading.png",
    alt: "Spark processando informacoes de pagamento na StickPay",
  },
};

export function EmptyState({ title, description, action, illustration = "empty" }: EmptyStateProps) {
  const asset = illustrations[illustration];

  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900">
      <Image src={asset.src} alt={asset.alt} width={320} height={320} className="mx-auto mb-5 h-auto w-full max-w-52" />
      <h3 className="text-lg font-extrabold text-primary dark:text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
