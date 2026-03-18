import { test } from '@playwright/test';

test('product page', async({ page }) => {
    await test.step('Open https://material.playwrightvn.com/', async() => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Click on Bài học 2: Product page', async() => {
        await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
    })

    await test.step('Add Sản phẩm 1', async() => {
        await page.locator("//button[@data-product-id='1']").click({
            clickCount: 2
        })
    })

    await test.step('Add Sản phẩm 2', async() => {
        await page.locator("//button[@data-product-id='2']").click({
            clickCount: 3
        })
    })

    await test.step('Add Sản phẩm 3', async() => {
        await page.locator("//button[@data-product-id='3']").click();
    })
});
