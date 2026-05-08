import { expect } from "@playwright/test";
import { ProductPage } from './01-pom';
import { test } from './00-fixture';

test('Product page', async ({ materialPage }) => {
    const productPage = new ProductPage(materialPage.page);

    await test.step('Go to Product page', async () => {
        await productPage.gotoPage('Product page');
    });
    await test.step('Add product', async () => {
        await productPage.addtoCart('Product 1', 2);
        await productPage.addtoCart('Product 2', 3);
        await productPage.addtoCart('Product 3', 1);
    });
    await test.step('Check quantity', async () => {
        await expect(productPage.getCartQuantity('Product 1')).toHaveText('2');
        await expect(productPage.getCartQuantity('Product 2')).toHaveText('3');
        await expect(productPage.getCartQuantity('Product 3')).toHaveText('1');
    });
    await test.step('Check total price', async () => {
        await expect(productPage.cssTotalPrice).toHaveText('$110.00');

        //Cách 2: trả về số để so sánh
        // const price1 = 10, qty1 = 2;
        // const price2 = 20, qty2 = 3;
        // const price3 = 30, qty3 = 1;
        // const expectedTotal = (price1 * qty1) + (price2 * qty2) + (price3 * qty3);

        // expect(await productPage.getTotalPrice()).toBe(expectedTotal);
    });
});