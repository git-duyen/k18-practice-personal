import { test, expect } from "@playwright/test";
import { MaterialBasePage, RegisterPage, ProductPage } from './01-pom';

test('Test 2', async ({ page }) => {
    const productPage = new ProductPage(page);

    await test.step("Step 1: Go to Homepage", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Step 2: Click Product Page", async () => {
        await productPage.productPageLink.click();
    });

    await test.step('Step 3: Add to Cart 1', async () => {
        await productPage.addToCartButton('1').dblclick();
    });

    await test.step("Step 4: Add to Cart 2", async () => {
        await productPage.addToCartButton('2').click();
        await productPage.addToCartButton('2').dblclick();
    });

    await test.step('Step 5: Add to Cart 3', async () => {
        await productPage.addToCartButton('3').click();
    });

    await test.step('Step 6: Verify number of items in cart', async () => {
        await productPage.verifyCartItemsCount(3);
    });

    await test.step('Step 7: Verify quantity per product', async () => {
        await expect(productPage.quantityByProductName('Product 1')).toHaveText('2');
        await expect(productPage.quantityByProductName('Product 2')).toHaveText('3');
        await expect(productPage.quantityByProductName('Product 3')).toHaveText('1');
    });

    await test.step('Step 8: Verify total quantity in cart', async () => {
        await productPage.verifyTotalQuantity(6); 
    });
});