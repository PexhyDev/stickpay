# QA Checklist

1. Headline principal exibe “Pagamentos Pix com estrutura de operação.”
2. CTAs “Solicitar acesso” e “Ver funcionamento” estão visíveis.
3. Layout usa grid responsivo em desktop e mobile.
4. Paleta aplica `#4F46E5`, `#06B6D4`, `#0B1120`, `#0F172A` e `#64748B`.
5. Fonte Poppins carrega via `@fontsource/poppins`.
6. Logo oficial da StickPay aparece no header e footer.
7. Hero possui microinterações sem quebrar `prefers-reduced-motion`.
8. Seção Produto em uso mostra ações reais da plataforma.
9. Seção Fluxo transacional mostra cobrança, Pix, pagamento, webhook e registro.
10. Seção API mostra exemplo conceitual sem expor processador externo.
11. Seção Segurança fala de controle operacional sem inventar certificações.
12. Seção Para quem lista públicos-alvo do produto.
13. Tabela de planos mostra Start, Scale e Operação.
14. Formulário valida email, CPF e valor.
15. Formulário dispara `/api/pix/charges`.
16. `/api/pix/charges` retorna `processor: "internal"`.
17. `/api/pix/webhook` aceita webhook de pagamento.
18. Meta title e description falam apenas de StickPay/Pix.
19. Navegação por teclado mostra foco visível.
20. Não existe menção pública a fornecedor externo de processamento.
21. `npm run lint`, `npm test`, `npm run test:e2e`, `npm run build` e `npm audit` passam.
22. `/dashboard` redireciona para `/login` sem sessão.
23. Login mock cria sessão de demonstração e libera o dashboard.
24. Rotas de dashboard existem para transações, cobranças, clientes, API, webhooks, configurações e suporte.
