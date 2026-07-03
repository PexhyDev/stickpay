import { expect, test } from "@playwright/test";

test("signup triggers mock checkout flow", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Nome").fill("Time StickPay");
  await page.getByLabel("Email").fill("ops@stickpay.example.com");
  await page.getByRole("button", { name: "Comece agora" }).click();

  await expect(page.getByText("Cadastro recebido. Sandbox acionado.")).toBeVisible();
});

test("mock checkout APIs return token and transaction", async ({ request }) => {
  const tokenResponse = await request.post("/api/tokenize", {
    data: {
      number: "4111111111111111",
      expMonth: "12",
      expYear: "2030",
      cvv: "123",
      holderName: "Cliente Teste",
    },
  });
  expect(tokenResponse.ok()).toBeTruthy();
  const tokenized = await tokenResponse.json();

  const transactionResponse = await request.post("/api/transactions", {
    data: {
      amount: 12990,
      currency: "BRL",
      paymentToken: tokenized.token,
      customer: { email: "cliente@example.com" },
    },
  });

  expect(transactionResponse.status()).toBe(201);
});
