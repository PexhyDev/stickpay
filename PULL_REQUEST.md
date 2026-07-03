# feat/landing-stickpay

## Resumo

- Reposiciona a StickPay como subadquirente Pix usando a MisticPay por trás.
- Adiciona microinterações de hover/motion na landing.
- Adiciona endpoints mock para cobrança Pix e webhooks MisticPay.
- Inclui testes unitários, E2E com Playwright, CI e documentação de lançamento.

## Validação

- `npm.cmd run lint`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- `npm.cmd audit`

## Observações

- Substituir `stickpay.example.com` e `vendas@stickpay.example.com` pelos dados oficiais antes de produção.
- Configurar `STICKPAY_API_KEY`, `MISTICPAY_*` e `NEXT_PUBLIC_APP_URL` no Vercel.
