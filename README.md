# StickPay

StickPay é uma plataforma de pagamentos Pix para operações digitais, com geração de cobranças, acompanhamento transacional, webhooks e organização de status.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS com grid responsivo
- Vitest + Testing Library
- Playwright
- GitHub Actions
- Backend separado em `PexhyDev/stickpay2`

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

Use o app sempre em `http://127.0.0.1:3000`. Para fluxos que chamam `/api`, rode tambem o backend `stickpay2` em `http://127.0.0.1:3001`; o navegador continua usando apenas o frontend em `3000`, e o Next faz proxy de `/api/:path*` para `API_BASE_URL`.

As portas de desenvolvimento sao fixas. Se `3000` ja estiver ocupada, feche o processo existente em vez de deixar o Next subir em outra porta.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
API_BASE_URL=http://127.0.0.1:3001
```

As credenciais operacionais e variaveis `PAYMENT_PROVIDER_*` ficam somente no backend.

## Backend StickPay

As rotas de API foram extraidas para o repositorio `PexhyDev/stickpay2`. No frontend, `/api/...` continua disponivel por rewrite para manter formularios, logout e testes apontando para o mesmo dominio.

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

## Próxima fase funcional

O projeto já inclui uma base organizada para evoluir a StickPay para plataforma logada:

- `/login`, `/cadastro` e `/recuperar-senha`
- sessão mock com cookie HTTP-only para desenvolvimento
- `middleware.ts` protegendo `/dashboard`
- logout em `POST /api/auth/logout`
- área logada em `/dashboard`
- páginas iniciais para transações, cobranças, clientes, API, webhooks, configurações e suporte
- design system em `src/components/ui`
- componentes de dashboard em `src/components/dashboard`

Esta base ainda não representa autenticação de produção. A próxima etapa deve conectar um provedor real de identidade, validação de sessão, permissões, logs de atividade e 2FA.

## Design system interno

Componentes preparados para o produto logado:

- `Button`
- `Input`
- `Select`
- `Modal`
- `Card`
- `Badge`
- `StatusBadge`
- `Table`
- `EmptyState`
- `Toast`
- `Sidebar`
- `Header`
- `StatCard`
- `TransactionRow`
- `PaymentStatus`
- `CopyButton`

## SEO e acessibilidade

- Meta tags, Open Graph e JSON-LD Product/Organization em `app/layout.tsx`.
- Componentes com labels, `aria-label`, foco visível e contraste alinhado ao WCAG 2.1 AA.
- Tipografia Poppins via `@fontsource/poppins`.

## Deploy Vercel

1. Conecte o repositório no Vercel.
2. Configure as variáveis `NEXT_PUBLIC_APP_URL` e `API_BASE_URL`.
3. Use `npm run build` como build command.
4. Publique a branch `main` após aprovação do PR.
