import { test } from "@playwright/test";

test("Add Product", async ({ page }) => {
    await test.step("Go to and CLick", async () => {
        //Đi tới trang web
        await page.goto("https://material.playwrightvn.com/");

        //Click Bài học 2
        await page
            .locator("//a[contains(text(), 'Bài học 2: Product page')]")
            .click();
    });

    await test.step("Add to Cart", async () => {
        //Thêm 2 sản phẩm 1
        await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
        //Thêm 3 sản phẩm 2
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
        //Thêm 1 sản phẩm 3
        await page.locator("//button[@data-product-id='3']").click();
    });
});
