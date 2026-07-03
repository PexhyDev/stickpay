export const dashboardStats = [
  { label: "Saldo disponível", value: "R$ 18.420,50", trend: "+8,4% no mês" },
  { label: "Total recebido", value: "R$ 126.890,20", trend: "últimos 30 dias" },
  { label: "Cobranças criadas", value: "1.284", trend: "342 pendentes" },
  { label: "Transações pagas", value: "942", trend: "73,3% de conclusão" },
  { label: "Transações pendentes", value: "316", trend: "aguardando pagamento" },
  { label: "Transações recusadas", value: "26", trend: "verificar divergências" },
];

export const recentTransactions = [
  { id: "sp_pix_1042", customer: "Atlas Commerce", amount: "R$ 249,90", status: "paid" as const, time: "há 4 min" },
  { id: "sp_pix_1041", customer: "Norte Digital", amount: "R$ 89,00", status: "pending" as const, time: "há 11 min" },
  { id: "sp_pix_1040", customer: "Studio Prime", amount: "R$ 1.290,00", status: "paid" as const, time: "há 22 min" },
  { id: "sp_pix_1039", customer: "Beta SaaS", amount: "R$ 59,90", status: "expired" as const, time: "há 37 min" },
];

export const operationalAlerts = [
  "Webhook de produção pendente de configuração.",
  "2 cobranças aguardam confirmação há mais de 30 minutos.",
  "Revise permissões antes de liberar novas chaves API.",
];
