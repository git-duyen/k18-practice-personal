import { test } from '@playwright/test';

test('Test 2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 2: Product Page' }).click();
    await page.locator(`//button[@data-product-id='1']`).click({ clickCount: 2 });
    await page.locator(`//button[@data-product-id='2']`).click({ clickCount: 3 });
    await page.locator(`//button[@data-product-id='3']`).click({ clickCount: 1 });
}); 