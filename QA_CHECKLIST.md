# QA Checklist

1. Headline principal exibe “Aceite Pix com segurança e velocidade”.
2. CTAs “Teste grátis”, “Ver demo” e “Comece agora” estão visíveis.
3. Layout usa grid responsivo em desktop e mobile.
4. Paleta aplica `#FF6A3D`, `#0F1724` e `#00BFA6`.
5. Fonte Inter carrega via `@fontsource/inter`.
6. Mock SVG do painel aparece no hero.
7. Hero possui microinterações sem quebrar `prefers-reduced-motion`.
8. Os 3 cards de benefícios aparecem com ícones.
9. Cards têm hover com borda/elevação.
10. Seção Arquitetura mostra Loja, StickPay, MisticPay e Pix.
11. Tabela de preços mostra Pix Start, Pix Scale e Subadquirente.
12. Formulário valida email, CPF e valor.
13. Formulário dispara `/api/pix/charges`.
14. `/api/pix/charges` retorna `provider: "misticpay"`.
15. `/api/pix/charges` retorna Pix copia e cola.
16. `/api/pix/webhook` aceita webhook de depósito MisticPay.
17. `/api/pix/webhook` aceita evento MED.
18. Meta title e description falam de Pix/MisticPay.
19. Navegação por teclado mostra foco visível.
20. `npm run lint`, `npm test`, `npm run test:e2e`, `npm run build` e `npm audit` passam.
