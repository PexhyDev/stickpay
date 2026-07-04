import { BellRing, ListChecks, QrCode, Search, WalletCards, Webhook } from "lucide-react";

const items = [
  { icon: QrCode, title: "Criar cobrança Pix", detail: "Valor, cliente, descrição e ID externo em um payload direto." },
  { icon: ListChecks, title: "Acompanhar status", detail: "Estados claros para pendente, pago, expirado, cancelado e recusado." },
  { icon: BellRing, title: "Receber confirmação", detail: "Atualizações transacionais prontas para o financeiro operar." },
  { icon: Webhook, title: "Enviar webhook", detail: "Eventos padronizados para checkout, ERP, CRM ou painel próprio." },
  { icon: Search, title: "Consultar transações", detail: "Busca por ID, status e histórico de alterações da operação." },
  { icon: WalletCards, title: "Organizar operação", detail: "Dados estruturados para conciliação, suporte e acompanhamento." },
];

export function ProductShowcase() {
  return (
    <section id="plataforma" className="bg-white py-20 dark:bg-slate-900" aria-labelledby="product-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Produto em uso</p>
            <h2 id="product-title" className="mt-3 text-3xl font-black leading-tight text-primary dark:text-white md:text-4xl">
              Uma interface para operar pagamentos, não apenas gerar códigos.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              A StickPay conecta checkout, status, eventos e registros em uma experiência consistente para times
              de produto, suporte e financeiro.
            </p>
          </div>

          <div className="col-span-12 grid gap-4 sm:grid-cols-2 md:col-span-7">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-panel dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" aria-hidden="true" />
                  <div className="relative flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-primary dark:bg-slate-900">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-primary dark:text-white">{item.title}</h3>
                        <span className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-black text-slate-400 shadow-sm dark:bg-slate-900">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
