import { BellRing, ListChecks, QrCode, Search, WalletCards, Webhook } from "lucide-react";

const items = [
  { icon: QrCode, title: "Criar cobrança Pix", detail: "Valor, cliente, descrição e ID externo em um único payload." },
  { icon: ListChecks, title: "Acompanhar status", detail: "PENDENTE, COMPLETO, EXPIRADO, CANCELADO e eventos relacionados." },
  { icon: BellRing, title: "Receber confirmação", detail: "Atualizações transacionais prontas para o financeiro operar." },
  { icon: Webhook, title: "Enviar webhook", detail: "Eventos padronizados para checkout, ERP, CRM ou painel próprio." },
  { icon: Search, title: "Consultar transações", detail: "Busca por ID, status e histórico de alterações." },
  { icon: WalletCards, title: "Organizar operação", detail: "Dados de pagamento estruturados para conciliação e suporte." },
];

export function ProductShowcase() {
  return (
    <section id="plataforma" className="bg-white py-20" aria-labelledby="product-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Produto em uso</p>
            <h2 id="product-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Uma interface para operar pagamentos, não apenas gerar códigos.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A StickPay conecta checkout, status, eventos e registros em uma experiência consistente para times
              de produto, suporte e financeiro.
            </p>
          </div>
          <div className="col-span-12 grid gap-4 md:col-span-7 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-panel"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-white transition group-hover:bg-accent group-hover:text-primary">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <div>
                      <h3 className="font-bold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
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
