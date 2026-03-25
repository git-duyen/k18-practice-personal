import { test } from "@playwright/test";
test("test 02", async ({ page }) => {
  await test.step("Click link", async () => {
    await page.goto("https://material.playwrightvn.com");
    await page.locator("//a[text()='Bài học 2: Product page']").click();
  });
  await test.step("Pick product", async () => {
    await page
      .locator("//button[@data-product-id='1']")
      .click({ clickCount: 2 });
    await page
      .locator("//button[@data-product-id='2']")
      .click({ clickCount: 3 });
    await page
      .locator("//button[@data-product-id='3']")
      .click({ clickCount: 1 });
  });
});
