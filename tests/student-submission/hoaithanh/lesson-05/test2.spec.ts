// 1. Truy cập trang https://material.playwrightvn.com/ 
// 2. Click vào Bài 2
// 3. Thêm sản phẩm vào giỏ hàng
// SP 1: 3 - SP 2: 2 - SP 3: 1

import { test } from '@playwright/test';

test ('test2', async ({page}) => {
    // Truy cập trang web https://material.playwrightvn.com/
    await test.step('Navigate', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    // Click Bài học 2
    await test.step('Select Bai Hoc 2', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });

    // Thêm giỏ hàng sp 1: 3 sp
    await test.step('Add product 1 to card', async () => {
        await page.locator('//button[@data-product-id="1"]').click({clickCount: 3});
    });

    // Thêm giỏ hàng sp 2: 2 sp
        await test.step('Add product 2 to card', async () => {
            await page.locator('//button[@data-product-id="2"]').dblclick();
        });

    // Thêm giỏ hàng sp 3: 1 sp
        await test.step('Add product 3 to card', async () => {
            await page.locator('//button[@data-product-id="3"]').click();
        });

});