# StickPay

Landing page e sandbox inicial da StickPay, uma camada de subadquirência Pix sobre a MisticPay.

A ideia do produto é simples: a loja integra com a StickPay; a StickPay protege as credenciais, normaliza payloads e chama a MisticPay por trás para criar cobranças Pix, receber webhooks e entregar um contrato mais amigável para o lojista.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS com grid de 12 colunas
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
MISTICPAY_MODE=mock
MISTICPAY_BASE_URL=https://api.misticpay.com/api
MISTICPAY_CLIENT_ID=seu_client_id
MISTICPAY_CLIENT_SECRET=seu_client_secret
MISTICPAY_WEBHOOK_SECRET=whsec_misticpay_mock
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Use `MISTICPAY_MODE=mock` para desenvolvimento local. Use `MISTICPAY_MODE=live` somente no backend com `MISTICPAY_CLIENT_ID` e `MISTICPAY_CLIENT_SECRET` reais.

## MisticPay

Segundo a documentação fornecida:

- URL base: `https://api.misticpay.com/api`
- Autenticação: headers `ci` e `cs`
- Criar cobrança Pix: `POST /api/transactions/create`
- Consultar transação: `POST /api/transactions/check`
- Listar transações: `GET /api/users/transactions/list/:page`
- Saldo: `GET /api/users/balance`
- Saque Pix: `POST /api/transactions/withdraw`
- Webhooks: depósito Pix, saque Pix e eventos MED

## Endpoints StickPay mock

### POST `/api/pix/charges`

Cria uma cobrança Pix na StickPay. Em `mock`, simula a resposta da MisticPay. Em `live`, chama `POST https://api.misticpay.com/api/transactions/create`.

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
  "provider": "misticpay",
  "providerTransactionId": "31484480",
  "status": "pending",
  "providerState": "PENDENTE",
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
    "qrcodeUrl": "https://api.qrserver.com/..."
  }
}
```

### POST `/api/pix/webhook`

Recebe webhook da MisticPay e normaliza o evento para o contrato StickPay.

Webhook de depósito:

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

Webhook MED:

```json
{
  "event": "INFRACTION",
  "infraction": {
    "id": 42,
    "externalId": "INF-2026-001",
    "type": "FRAUD",
    "status": "WAITING_PSP",
    "amount": 150,
    "currency": "BRL"
  },
  "transaction": {
    "transactionId": "TXN-12345",
    "status": "COMPLETO"
  }
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

### Adapter MisticPay real

```js
async function createMisticPayTransaction(payload) {
  const response = await fetch("https://api.misticpay.com/api/transactions/create", {
    method: "POST",
    headers: {
      ci: process.env.MISTICPAY_CLIENT_ID,
      cs: process.env.MISTICPAY_CLIENT_SECRET,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error("MisticPay request failed");
  return response.json();
}
```

### Webhook handler

```js
export async function handleMisticPayWebhook(request) {
  const event = await request.json();
  console.log("MisticPay event", event);
  return Response.json({ received: true });
}
```

## Segurança

- TLS obrigatório em produção.
- Nunca expor `MISTICPAY_CLIENT_SECRET` no frontend.
- Validar assinatura/origem dos webhooks quando a MisticPay disponibilizar o segredo/formato.
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
2. Configure as variáveis `STICKPAY_API_KEY`, `MISTICPAY_*` e `NEXT_PUBLIC_APP_URL`.
3. Use `npm run build` como build command.
4. Publique a branch `main` após aprovação do PR.
