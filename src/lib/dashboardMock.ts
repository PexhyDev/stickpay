export type DashboardMetricIcon =
  | "wallet"
  | "lock"
  | "activity"
  | "receipt"
  | "target"
  | "percent"
  | "banknote"
  | "sparkles";

export type DashboardMetric = {
  id: string;
  label: string;
  value: string;
  helper: string;
  change?: string;
  icon: DashboardMetricIcon;
  tone: "cyan" | "indigo" | "green" | "amber" | "slate";
};

export type DashboardTransactionStatus = "approved" | "pending" | "blocked" | "refunded" | "review" | "canceled";

export type DashboardTransaction = {
  id: string;
  type: "Pix recebido" | "Saque" | "Transferência" | "Estorno" | "MED";
  customer: string;
  amount: string;
  status: DashboardTransactionStatus;
  date: string;
};

export type DashboardAction = {
  title: string;
  description: string;
  href: string;
  icon: "qr" | "send" | "withdraw" | "statement" | "docs" | "webhook" | "checkout" | "customers";
};

export const accountOverview = {
  userName: "Pedro",
  platformName: "StickPay",
  status: "Conta ativa",
  statusDescription: "Sua conta está liberada para receber pagamentos Pix.",
  currentLimit: "R$ 50 mil/dia",
  nextLevel: "Envie documentos adicionais para ampliar seus limites de saque.",
};

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "available-balance",
    label: "Saldo disponível",
    value: "R$ 0,00",
    helper: "Disponível para saque",
    change: "Sem movimentação no período",
    icon: "wallet",
    tone: "cyan",
  },
  {
    id: "blocked-balance",
    label: "Saldo bloqueado",
    value: "R$ 0,00",
    helper: "Reservas, MED e análises",
    change: "Nenhum bloqueio ativo",
    icon: "lock",
    tone: "slate",
  },
  {
    id: "volume",
    label: "Volume transacionado",
    value: "R$ 0,00",
    helper: "Recebimentos aprovados",
    change: "+0% vs período anterior",
    icon: "activity",
    tone: "indigo",
  },
  {
    id: "transactions",
    label: "Total de transações",
    value: "0",
    helper: "Pix, saques e transferências",
    change: "Aguardando primeira venda",
    icon: "receipt",
    tone: "green",
  },
  {
    id: "average-ticket",
    label: "Ticket médio",
    value: "R$ 0,00",
    helper: "Média por Pix aprovado",
    change: "Será calculado automaticamente",
    icon: "target",
    tone: "cyan",
  },
  {
    id: "conversion",
    label: "Conversão Pix",
    value: "0,0%",
    helper: "Pagamentos aprovados no período",
    change: "Sem dados suficientes",
    icon: "percent",
    tone: "amber",
  },
  {
    id: "withdrawn",
    label: "Total retirado",
    value: "R$ 0,00",
    helper: "Saques liquidados",
    change: "Nenhum saque solicitado",
    icon: "banknote",
    tone: "green",
  },
  {
    id: "fee-savings",
    label: "Economia em taxas",
    value: "R$ 0,00",
    helper: "Benefícios aplicados",
    change: "Benefícios aparecem aqui",
    icon: "sparkles",
    tone: "indigo",
  },
];

export const quickActions: DashboardAction[] = [
  {
    title: "Receber via Pix",
    description: "Crie uma cobrança Pix em poucos segundos.",
    href: "/dashboard/cobrancas",
    icon: "qr",
  },
  {
    title: "Transferir via Pix",
    description: "Envie valores para uma chave Pix cadastrada.",
    href: "/dashboard/transacoes",
    icon: "send",
  },
  {
    title: "Solicitar saque",
    description: "Movimente saldo disponível para sua conta bancária.",
    href: "/dashboard/transacoes",
    icon: "withdraw",
  },
  {
    title: "Ver extrato",
    description: "Audite entradas, saídas e bloqueios em um único lugar.",
    href: "/dashboard/transacoes",
    icon: "statement",
  },
  {
    title: "Documentação da API",
    description: "Consulte endpoints, eventos e exemplos de integração.",
    href: "/dashboard/api",
    icon: "docs",
  },
  {
    title: "Configurar webhook",
    description: "Receba atualizações de pagamento em tempo real.",
    href: "/dashboard/webhooks",
    icon: "webhook",
  },
  {
    title: "Gerenciar checkout",
    description: "Acompanhe produtos, cupons e links de pagamento.",
    href: "/dashboard/cobrancas",
    icon: "checkout",
  },
  {
    title: "Gerenciar clientes",
    description: "Acompanhe clientes, pagadores e histórico de relacionamento.",
    href: "/dashboard/clientes",
    icon: "customers",
  },
];

export const performanceSeries = [
  { label: "Seg", value: 0 },
  { label: "Ter", value: 0 },
  { label: "Qua", value: 0 },
  { label: "Qui", value: 0 },
  { label: "Sex", value: 0 },
  { label: "Sab", value: 0 },
  { label: "Dom", value: 0 },
];

export const recentTransactions: DashboardTransaction[] = [];

export const systemNotices = [
  {
    title: "Ambiente pronto para operar",
    description: "Crie sua primeira cobrança Pix para iniciar o histórico financeiro da conta.",
    tone: "cyan" as const,
  },
  {
    title: "Webhook recomendado",
    description: "Configure uma URL de webhook antes de escalar o volume de pagamentos.",
    tone: "indigo" as const,
  },
  {
    title: "MED sob monitoramento",
    description: "Alertas de contestação aparecerão aqui sem bloquear sua operação normal.",
    tone: "amber" as const,
  },
];
