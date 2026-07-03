# StickPay

Landing page profissional para a StickPay, um gateway de pagamentos B2B/B2C criado com Next.js, TypeScript e Tailwind CSS.

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
API_KEY=sk_test_stickpay_mock
SECRET=whsec_stickpay_mock
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Segurança esperada para produção:

- TLS obrigatório em todos os endpoints.
- Nunca armazenar PAN, CVV ou dados completos de cartão.
- Usar tokenização antes de criar transações.
- Validar assinatura de webhook com `SECRET`.
- Aplicar rate limiting por IP/chave de API.
- Restringir CORS a domínios confiáveis.
- Guardar `API_KEY` e `SECRET` somente no servidor.

## Endpoints mock

### POST `/api/tokenize`

Recebe dados de cartão e retorna um token mock. O exemplo usa PAN apenas para sandbox.

```json
{
  "number": "4111111111111111",
  "expMonth": "12",
  "expYear": "2030",
  "cvv": "123",
  "holderName": "Cliente StickPay"
}
```

Resposta:

```json
{
  "token": "tok_mock",
  "brand": "visa",
  "last4": "1111",
  "holderName": "Cliente StickPay",
  "expiresAt": "2030-01-01T00:00:00.000Z"
}
```

### POST `/api/transactions`

Cria transação mock a partir de um token.

```json
{
  "amount": 12990,
  "currency": "BRL",
  "paymentToken": "tok_mock",
  "customer": {
    "email": "cliente@example.com"
  }
}
```

Resposta:

```json
{
  "id": "txn_mock",
  "amount": 12990,
  "currency": "BRL",
  "status": "approved",
  "authorizationCode": "123456",
  "customer": {
    "email": "cliente@example.com"
  },
  "createdAt": "2030-01-01T00:00:00.000Z"
}
```

### POST `/api/webhook`

Recebe notificações e registra no console.

```json
{
  "event": "transaction.updated",
  "transactionId": "txn_mock",
  "status": "approved",
  "occurredAt": "2030-01-01T00:00:00.000Z"
}
```

## Snippets de integração

### Cadastro com validação

```js
function validateSignup({ name, email }) {
  if (!name || name.length < 2) return "Informe seu nome.";
  if (!email || !email.includes("@")) return "Informe um email válido.";
  return null;
}
```

### Tokenização e transação

```js
async function checkout() {
  const tokenResponse = await fetch("/api/tokenize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      number: "4111111111111111",
      expMonth: "12",
      expYear: "2030",
      cvv: "123",
      holderName: "Cliente StickPay"
    })
  });
  const { token } = await tokenResponse.json();

  const transactionResponse = await fetch("/api/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: 12990,
      currency: "BRL",
      paymentToken: token,
      customer: { email: "cliente@example.com" }
    })
  });

  return transactionResponse.json();
}
```

### Webhook handler

```js
export async function handleWebhook(request) {
  const signature = request.headers.get("x-stickpay-signature");
  if (!signature) return new Response("Missing signature", { status: 401 });

  const event = await request.json();
  console.log("StickPay event", event);
  return Response.json({ received: true });
}
```

## SEO e acessibilidade

- Meta tags, Open Graph e JSON-LD Product/Organization configurados em `app/layout.tsx`.
- Componentes com labels, `aria-label`, foco visível e contraste alinhado ao WCAG 2.1 AA.
- Tipografia Inter via `next/font/google`.

## Deploy Vercel

1. Conecte o repositório no Vercel.
2. Configure `API_KEY`, `SECRET` e `NEXT_PUBLIC_APP_URL`.
3. Use `npm run build` como build command.
4. Publique a branch `main` após aprovação do PR.
