# QA Checklist

1. Headline principal exibe “Aceite pagamentos com segurança e velocidade”.
2. CTAs “Teste grátis”, “Ver demo” e “Comece agora” estão visíveis.
3. Layout usa grid responsivo em desktop e mobile.
4. Paleta aplica `#FF6A3D`, `#0F1724` e `#00BFA6`.
5. Fonte Inter carrega corretamente.
6. Mock SVG do painel aparece no hero.
7. Os 3 cards de benefícios aparecem com ícones.
8. Tabela de preços mostra Starter, Business e Enterprise.
9. CTA Enterprise aponta para contato de vendas.
10. Formulário valida email inválido.
11. Formulário dispara `/api/tokenize`.
12. Formulário dispara `/api/transactions`.
13. `/api/tokenize` retorna token mock sem armazenar PAN.
14. `/api/transactions` retorna status mock.
15. `/api/webhook` responde `{ "received": true }`.
16. Meta title e description aparecem no HTML.
17. Open Graph aponta para asset em `/public/assets`.
18. JSON-LD Product/Organization está presente.
19. Navegação por teclado mostra foco visível.
20. `npm run lint`, `npm test`, `npm run test:e2e` e `npm run build` passam no CI.
