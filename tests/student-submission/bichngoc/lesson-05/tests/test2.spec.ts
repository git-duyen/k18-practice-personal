import { test } from '@playwright/test';

test('Product page', async ({ page }) => {
    await test.step("Go to Product page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();

        // Add 2 product 1
        const addToCartProduct = page.locator('//button[@data-product-id="1"]');
        await addToCartProduct.dblclick();

        // Add 3 product 2
        const addToCartProduct2 = page.locator('//button[@data-product-id="2"]');
        await addToCartProduct2.click({
            clickCount: 3
        });

        // Add 1 product 3
        await page.locator('//button[@data-product-id="3"]').click();
    });
});