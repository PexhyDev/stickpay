# Release StickPay Pix

## Escopo

- Landing page reposicionada como subadquirente Pix sobre a MisticPay.
- Hero e componentes com microinterações de hover/motion.
- Adapter MisticPay em `src/lib/misticpay.ts`.
- Endpoint `POST /api/pix/charges` para cobrança Pix.
- Endpoint `POST /api/pix/webhook` para webhooks MisticPay.
- Versão minimal em `/minimal` e `minimal/index.html`.
- Testes unitários, E2E, CI e documentação.

## Checklist de lançamento

- Confirmar domínio final em `NEXT_PUBLIC_APP_URL`.
- Configurar `STICKPAY_API_KEY`.
- Configurar `MISTICPAY_MODE=live`.
- Configurar `MISTICPAY_BASE_URL=https://api.misticpay.com/api`.
- Configurar `MISTICPAY_CLIENT_ID` e `MISTICPAY_CLIENT_SECRET`.
- Definir estratégia de assinatura/validação de webhooks com a MisticPay.
- Trocar `stickpay.example.com` pelo domínio real.
- Trocar `vendas@stickpay.example.com` pelo email oficial.
- Executar `npm run lint`.
- Executar `npm test`.
- Executar `npm run test:e2e`.
- Executar `npm run build`.
- Executar `npm audit`.
- Aprovar PR `feat/landing-stickpay`.

## Rollback

Reverter o merge do PR ou promover a implantação anterior no Vercel.
