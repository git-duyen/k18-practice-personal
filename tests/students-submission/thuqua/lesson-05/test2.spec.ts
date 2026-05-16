import { test } from '@playwright/test';

test('Product page', async ({ page }) => {

    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Bai hoc 2: Product page', async () => {
        await page.click("//a[@href = '02-xpath-product-page.html']");
    });

    await test.step('Add 2 product 1', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });

    await test.step('Add 3 product 2', async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    });

    await test.step('Add 3 product 2', async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});