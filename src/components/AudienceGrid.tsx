const audiences = [
  "E-commerces",
  "Infoprodutores",
  "Comunidades pagas",
  "SaaS",
  "Agências",
  "Vendedores digitais",
  "Operações de alto volume",
  "Plataformas próprias",
];

export function AudienceGrid() {
  return (
    <section className="bg-slate-50 py-20" aria-labelledby="audience-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Para quem</p>
            <h2 id="audience-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Feita para negócios digitais que precisam acompanhar recebimentos.
            </h2>
          </div>
          <div className="col-span-12 grid gap-3 sm:grid-cols-2 md:col-span-7 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm font-bold text-primary shadow-sm">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
