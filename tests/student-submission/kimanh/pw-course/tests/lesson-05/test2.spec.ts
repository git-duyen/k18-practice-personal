import { test } from '@playwright/test';

test('Basic Action', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Click on Product page", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step("Buy Product 1", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });
    await test.step("Buy Product 2", async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    });
    await test.step("Buy Product 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
})