import { test } from '@playwright/test'

test('test2', async ({ page }) => {
    await test.step('Navigate to Material website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Click Bài 2', async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });
    await test.step('Add 2 product 1', async () => {
        await page.locator('//button[@data-product-id="1"]').dblclick();
    });
    await test.step('Add 2 product 2', async () => {
        await page.locator('//button[@data-product-id="2"]').click();
    });
    await test.step('Add 2 product 3', async () => {
        await page.locator('//button[@data-product-id="3"]').click({ clickCount: 3 });
    });
});