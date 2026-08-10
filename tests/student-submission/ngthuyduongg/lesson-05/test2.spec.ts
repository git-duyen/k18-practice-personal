import { test } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

 await test.step("Click Bai hoc 2", async () => {
        await page.locator("//a[text() ='Bài học 2: Product page']").click();

    });

await test.step("Add 2 sản phẩm 1", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
 });

 await test.step("Add 3 sản phẩm 2", async () => {
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3})
 });

 await test.step("Add 1 sản phẩm 3", async () => {
        await page.locator("//button[@data-product-id='3']").click()
 });


});