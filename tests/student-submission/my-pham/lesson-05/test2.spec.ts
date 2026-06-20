import { test } from '@playwright/test';
test('add product', async ({ page }) => {
    await test.step('Add san pham 1', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[@href='02-xpath-product-page.html']");
        
        // Add 2 product 1
        const addToCartProduct = page.locator("//button[@data-product-id=1]");
        await addToCartProduct.click({
            clickCount:2
        });
    });

    // add 3 product 2
    await test.step('Add san pham 2', async () => {
        const addToCartProduct = page.locator("//button[@data-product-id=2]");
        await addToCartProduct.click({
            clickCount:3
        });
    })

    // add 1 product 3
    await test.step('Add san pham 3', async () => {
        const addToCartProduct = page.locator("//button[@data-product-id=3]");
        await addToCartProduct.click();
    })

})