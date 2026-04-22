import { test, expect, Page } from '@playwright/test';
import { ProductPage } from './01-pom';

let productName1 = "Product 1";
let productName2 = "Product 2";
let productName3 = "Product 3";

let quantity1 = 2;
let quantity2 = 3;
let quantity3 = 1;


//2.
test('Product Page Test', async ({ page }) => {
  const productPage = new ProductPage(page);
  await test.step('Go to Product Page', async () => {
    productPage.openMaterialBasePage();
    productPage.goToPage("Product Page");
  });

  await test.step('Add product 1,2,3 to cart', async () => {
    await productPage.addProductToCart(page, productName1, quantity1);
    await productPage.addProductToCart(page, productName2, quantity2);
    await productPage.addProductToCart(page, productName3, quantity3);
  });

  await test.step('Verify information added', async () => {
    await productPage.verifyTableData(page, productName1, quantity1.toString());
    await productPage.verifyTableData(page, productName2, quantity2.toString());
    await productPage.verifyTableData(page, productName3, quantity3.toString());

    const total1 = await productPage.verifyTotal(page, productName1, quantity1.toString());
    const total2 = await productPage.verifyTotal(page, productName2, quantity2.toString());
    const total3 = await productPage.verifyTotal(page, productName3, quantity3.toString());
    const expectedTotal = total1 + total2 + total3;
    await productPage.verifyTotalPrice(page, expectedTotal);
  });
});




