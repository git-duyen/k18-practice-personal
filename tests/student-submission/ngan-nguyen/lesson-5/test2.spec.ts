import { test } from '@playwright/test';

test('Add product to cart', async ({ page }) => {
    await test.step('Navigate to website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Navigate to Product Page', async () => {
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    })

    await test.step('Add product to cart with specific quantity for each products', async () => {
        await page.locator(`//button[@data-product-id = '1']`).dblclick();
        await page.locator(`//button[@data-product-id = '2']`).click({ clickCount: 3 });
        await page.locator(`//button[@data-product-id = '3']`).click();
    })

});