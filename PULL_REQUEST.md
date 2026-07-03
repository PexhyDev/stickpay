# feat/landing-stickpay

## Resumo

- Refatora a landing para posicionar a StickPay como plataforma própria de pagamentos Pix.
- Adiciona seções de produto, fluxo transacional, API, segurança, público-alvo e CTA final.
- Remove menções públicas a processadores externos e mantém a integração abstraída no backend.
- Adiciona microinterações de hover/motion usando a identidade visual oficial.
- Inclui testes unitários, E2E com Playwright, CI e documentação de lançamento.

## Validação

- `npm.cmd run lint`
- `npm.cmd test`
- `npm.cmd run build`
- `npm.cmd run test:e2e`
- `npm.cmd audit`

## Observações

- Substituir `stickpay.example.com` e `vendas@stickpay.example.com` pelos dados oficiais antes de produção.
- Configurar `STICKPAY_API_KEY`, `PAYMENT_PROVIDER_*` e `NEXT_PUBLIC_APP_URL` no Vercel.
