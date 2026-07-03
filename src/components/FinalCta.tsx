import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contato" className="bg-primary py-20 text-white" aria-labelledby="final-cta-title">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6">
        <div className="col-span-12 md:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Próximo passo</p>
          <h2 id="final-cta-title" className="mt-3 text-3xl font-bold md:text-5xl">
            Comece a estruturar sua operação Pix com mais clareza.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Solicite acesso ao ambiente de teste e veja como a StickPay pode organizar cobranças, status e eventos
            transacionais no seu fluxo.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <a
            href="#cadastro"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 font-extrabold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Solicitar acesso
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
