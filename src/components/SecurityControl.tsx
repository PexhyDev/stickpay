import { Activity, Archive, LockKeyhole, ShieldAlert } from "lucide-react";

const controls = [
  { icon: Activity, title: "Rastreabilidade", text: "Cada cobrança mantém IDs, horários, status e histórico de eventos." },
  { icon: LockKeyhole, title: "Controle de acesso", text: "Credenciais operacionais ficam fora do checkout e longe do navegador." },
  { icon: Archive, title: "Histórico organizado", text: "Registros transacionais ajudam suporte, financeiro e conciliação." },
  { icon: ShieldAlert, title: "Apoio a disputas", text: "Eventos e evidências operacionais podem apoiar análises e MED." },
];

export function SecurityControl() {
  return (
    <section id="seguranca" className="bg-white py-20" aria-labelledby="security-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Segurança e controle</p>
            <h2 id="security-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Operação financeira com menos pontos cegos.
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-7 text-slate-600 md:col-span-5 md:col-start-8">
            A StickPay prioriza clareza operacional: status visíveis, eventos registrados e dados consistentes para
            reduzir inconsistências na rotina financeira.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {controls.map((control) => {
            const Icon = control.icon;

            return (
              <article key={control.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-white">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <h3 className="mt-5 font-bold text-primary">{control.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{control.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
