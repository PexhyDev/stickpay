type StatCardProps = {
  label: string;
  value: string;
  trend: string;
};

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-panel">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <div className="mt-3 text-2xl font-black text-primary">{value}</div>
      <p className="mt-2 text-xs font-semibold text-accent">{trend}</p>
    </article>
  );
}
