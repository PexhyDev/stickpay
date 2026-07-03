# Release StickPay Pix

## Escopo

- Landing page premium para a StickPay como plataforma de pagamentos Pix.
- Identidade visual oficial com logo, Poppins e paleta da marca.
- Seções de produto, fluxo transacional, API, segurança, público-alvo, planos e CTA final.
- Endpoint `POST /api/pix/charges` para cobrança Pix.
- Endpoint `POST /api/pix/webhook` para eventos de pagamento.
- Adapter interno genérico em `src/lib/paymentProvider.ts`.
- Versão minimal em `/minimal` e `minimal/index.html`.
- Testes unitários, E2E, CI e documentação.

## Checklist de lançamento

- Confirmar domínio final em `NEXT_PUBLIC_APP_URL`.
- Configurar `STICKPAY_API_KEY`.
- Configurar `PAYMENT_PROVIDER_MODE=live`.
- Configurar `PAYMENT_PROVIDER_BASE_URL`.
- Configurar `PAYMENT_PROVIDER_CLIENT_ID` e `PAYMENT_PROVIDER_CLIENT_SECRET`.
- Definir estratégia de assinatura/validação de webhooks.
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
