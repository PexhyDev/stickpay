# StickPay

StickPay é uma plataforma de pagamentos Pix para operações digitais, com geração de cobranças, acompanhamento transacional, webhooks e organização de status.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS com grid responsivo
- Vitest + Testing Library
- Playwright
- GitHub Actions

## Comandos

```bash
npm install
npm run dev
npm run lint
npm test
npm run test:e2e
npm run build
```

No Windows PowerShell com policy restritiva, use `npm.cmd run dev`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

```bash
STICKPAY_API_KEY=sk_test_stickpay_mock
PAYMENT_PROVIDER_MODE=mock
PAYMENT_PROVIDER_BASE_URL=
PAYMENT_PROVIDER_CLIENT_ID=seu_client_id
PAYMENT_PROVIDER_CLIENT_SECRET=seu_client_secret
PAYMENT_PROVIDER_WEBHOOK_SECRET=whsec_provider_mock
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Use `PAYMENT_PROVIDER_MODE=mock` para desenvolvimento local. Use `PAYMENT_PROVIDER_MODE=live` somente no backend com credenciais reais configuradas em ambiente seguro.

## Endpoints StickPay mock

### POST `/api/pix/charges`

Cria uma cobrança Pix na StickPay.

Payload:

```json
{
  "amount": 49.9,
  "payerName": "Cliente StickPay",
  "payerDocument": "12345678909",
  "externalId": "checkout-1042",
  "description": "Pedido 1042"
}
```

Resposta:

```json
{
  "id": "sp_pix_31484480",
  "processor": "internal",
  "processorTransactionId": "31484480",
  "status": "pending",
  "processorState": "PENDENTE",
  "amount": 49.9,
  "fee": 0.75,
  "currency": "BRL",
  "payer": {
    "name": "Cliente StickPay",
    "document": "12345678909"
  },
  "pix": {
    "copyPaste": "000201010212...",
    "qrCodeBase64": null,
    "qrcodeUrl": null
  }
}
```

### POST `/api/pix/webhook`

Recebe notificações de pagamento e normaliza o evento para o contrato StickPay.

```json
{
  "transactionId": 31484480,
  "transactionType": "DEPOSITO",
  "transactionMethod": "PIX",
  "clientName": "Nome do cliente",
  "clientDocument": "12345678909",
  "status": "COMPLETO",
  "value": 49.9,
  "fee": 0.75
}
```

## Snippets

### Criar cobrança Pix

```js
async function createPixCharge() {
  const response = await fetch("/api/pix/charges", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-StickPay-Key": process.env.STICKPAY_API_KEY
    },
    body: JSON.stringify({
      amount: 49.9,
      payerName: "Cliente StickPay",
      payerDocument: "12345678909",
      externalId: "checkout-1042",
      description: "Pedido 1042"
    })
  });

  return response.json();
}
```

### SDK conceitual

```js
await stickpay.pix.createCharge({
  amount: 12990,
  customer: {
    name: "Cliente Exemplo",
    document: "00000000000"
  },
  externalId: "pedido-1042",
  description: "Checkout pedido 1042"
});
```

## Segurança

- TLS obrigatório em produção.
- Nunca expor segredos, chaves de processamento ou credenciais operacionais no frontend.
- Validar assinatura e origem dos webhooks quando o formato estiver definido.
- Aplicar rate limiting por IP e chave de API.
- Restringir CORS aos domínios da StickPay e dos lojistas permitidos.
- Registrar `externalId` para conciliação e idempotência.
- Tratar eventos MED como fluxo operacional sensível.

## SEO e acessibilidade

- Meta tags, Open Graph e JSON-LD Product/Organization em `app/layout.tsx`.
- Componentes com labels, `aria-label`, foco visível e contraste alinhado ao WCAG 2.1 AA.
- Tipografia Poppins via `@fontsource/poppins`.

## Deploy Vercel

1. Conecte o repositório no Vercel.
2. Configure as variáveis `STICKPAY_API_KEY`, `PAYMENT_PROVIDER_*` e `NEXT_PUBLIC_APP_URL`.
3. Use `npm run build` como build command.
4. Publique a branch `main` após aprovação do PR.
