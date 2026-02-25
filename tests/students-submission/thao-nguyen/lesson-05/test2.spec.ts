import { test,expect } from '@playwright/test';
test('products page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[text()="Bài học 2: Product page"]').click();
    await page.locator('//button[@data-product-id="1"]').dblclick();
    await page.locator('//button[@data-product-id="2"]').click();
    const product3 =page.locator('//button[@data-product-id="3"]');
    for (let i = 0; i < 3; i++) {
    await page.locator('//button[@data-product-id="3"]').click(); 
    };
});