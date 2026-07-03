# Release StickPay Landing

## Escopo

- Landing page principal com Header, Hero, Benefits, Pricing, Testimonial, SignupForm e Footer.
- Versão minimal em `/minimal` e `minimal/index.html`.
- Endpoints mock para tokenização, transações e webhook.
- SEO, Open Graph e schema.org.
- Testes unitários e E2E.
- Workflow GitHub Actions para lint, testes e build.

## Checklist de lançamento

- Confirmar variáveis `API_KEY`, `SECRET` e `NEXT_PUBLIC_APP_URL` no Vercel.
- Revisar domínio permitido em CORS.
- Validar política de TLS no domínio final.
- Trocar email `vendas@stickpay.example.com` pelo email oficial.
- Substituir `stickpay.example.com` pelo domínio real.
- Executar `npm run build`.
- Executar QA completo em desktop e mobile.
- Aprovar PR `feat/landing-stickpay`.

## Rollback

Reverter o merge do PR ou promover a implantação anterior no Vercel.
