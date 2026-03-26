import { test } from "@playwright/test";

test("Bai 2", async ({ page }) => {
  await test.step("Truy cap trang Playwrightvn", async () => {
    await page.goto(`https://material.playwrightvn.com/`);
  });

  await test.step("Click Bai 2", async () => {
    await page.locator('//a[text()="Bài học 2: Product page"]').click();
  });

  await test.step("Them 2 San pham 1", async () => {
    await page.locator('//button[@data-product-id="1"]').dblclick();
  });

  await test.step("Them 3 San pham 2", async () => {
    await page.locator('//button[@data-product-id="2"]').click({
      clickCount: 3,
    });
  });

  await test.step("Them 1 San pham 3", async () => {
    await page.locator('//button[@data-product-id="3"]').click();
  });
});
