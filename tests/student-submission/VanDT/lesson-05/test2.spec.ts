import { test } from '@playwright/test';

test('bai2', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');
    await page.locator("//a[text()='Bài học 2: Product page']").click();
    await page.locator("//button[@data-product-id ='1']").click();
    await page.locator("//button[@data-product-id ='1']").click();
    await page.locator("//button[@data-product-id ='2']").click();
    await page.locator("//button[@data-product-id ='2']").click();
    await page.locator("//button[@data-product-id ='2']").click();
    await page.locator("//button[@data-product-id ='3']").click();
});