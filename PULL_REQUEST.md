# feat/landing-stickpay

## Resumo

- Cria landing page profissional da StickPay com Next.js, TypeScript e Tailwind CSS.
- Adiciona endpoints mock para tokenização, transações e webhook.
- Inclui testes unitários, E2E com Playwright, CI e documentação de lançamento.

## Validação

- `npm.cmd run lint`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`

## Observações

- Substituir `stickpay.example.com` e `vendas@stickpay.example.com` pelos dados oficiais antes de produção.
- Configurar `API_KEY`, `SECRET` e `NEXT_PUBLIC_APP_URL` no Vercel.
