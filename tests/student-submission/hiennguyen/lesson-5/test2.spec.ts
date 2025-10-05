import { test } from '@playwright/test';

test ('Product Page', async ({ page }) => {
    await test.step('Step 1: Navigate', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Step 2: Click', async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step('Step 3: Add product 1', async () => {
        await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
    });

    await test.step('Step 4: Add product 2', async () => {
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
    });

    await test.step('Step 5: Add product 3', async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});