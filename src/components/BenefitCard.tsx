import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-white">
        <Icon aria-hidden="true" size={22} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
    </article>
  );
}
