import { expect, test } from "@playwright/test";

test("signup creates a mock Pix charge", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Nome").fill("Time StickPay");
  await page.getByLabel("Email").fill("ops@stickpay.example.com");
  await page.getByLabel("CPF do pagador").fill("12345678909");
  await page.getByLabel("Valor Pix").fill("49.90");
  await page.getByRole("button", { name: "Gerar Pix de teste" }).click();

  await expect(page.getByText("Cobrança Pix de teste gerada pela StickPay.")).toBeVisible();
  await expect(page.getByLabel("Pix copia e cola")).toHaveValue(/000201010212/);
});

test("mock Pix APIs return charge and accept payment webhook", async ({ request }) => {
  const chargeResponse = await request.post("/api/pix/charges", {
    data: {
      amount: 49.9,
      payerName: "Cliente Teste",
      payerDocument: "12345678909",
      externalId: "checkout-1042",
      description: "Checkout 1042",
    },
  });
  expect(chargeResponse.status()).toBe(201);
  const charge = await chargeResponse.json();

  expect(charge.processor).toBe("internal");
  expect(charge.pix.copyPaste).toContain("000201010212");

  const webhookResponse = await request.post("/api/pix/webhook", {
    data: {
      transactionId: charge.processorTransactionId,
      transactionType: "DEPOSITO",
      transactionMethod: "PIX",
      clientName: "Cliente Teste",
      clientDocument: "12345678909",
      status: "COMPLETO",
      value: 49.9,
      fee: 0.75,
    },
  });

  expect(webhookResponse.ok()).toBeTruthy();
});

test("dashboard is protected and mock login opens private area", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page).toHaveURL(/\/login\?next=%2Fdashboard/);

  await page.getByLabel("Email").fill("ops@stickpay.example.com");
  await page.getByLabel("Senha").fill("senha-demo");
  await page.getByRole("button", { name: "Entrar no painel" }).click();

  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByRole("heading", { name: "Operação StickPay" })).toBeVisible();
  await expect(page.getByText("Saldo disponível")).toBeVisible();
});
