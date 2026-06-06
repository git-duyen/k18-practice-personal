import { test } from '@playwright/test';

test('Basic action', async ({ page }) => {
    await test.step('go to website', async () => {
        await page.goto('https://material.playwrightvn.com');
    });

    await test.step("Click Bài học 2", async () => {
        await page.locator("//a[text() = 'Bài học 2: Product page']").click();
    });
    await test.step("add product 1", async () => {
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='1']").click();

    });
    await test.step("add product 2", async () => {
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();

    });
    await test.step("add product 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});
