import { test } from './03-custom-fixture';
import { ProductPage } from './03-pom';

let productName1 = "Product 1";
let productName2 = "Product 2";
let productName3 = "Product 3";

let quantity1 = 2;
let quantity2 = 3;
let quantity3 = 1;


//2.
test('Product Page Test', async ({ materialPage }) => {
  const productPage = new ProductPage(materialPage.page);
  await test.step('Go to Product Page', async () => {
    await productPage.openMaterialBasePage();
    await productPage.goToPage("Product Page");
  });

  await test.step('Add product 1,2,3 to cart', async () => {
    await productPage.addProductToCart( productName1, quantity1);
    await productPage.addProductToCart(productName2, quantity2);
    await productPage.addProductToCart(productName3, quantity3);
  });

  await test.step('Verify information added', async () => {
    await productPage.verifyTableData(productName1, quantity1.toString());
    await productPage.verifyTableData(productName2, quantity2.toString());
    await productPage.verifyTableData(productName3, quantity3.toString());

    const total1 = await productPage.verifyTotal(productName1, quantity1.toString());
    const total2 = await productPage.verifyTotal(productName2, quantity2.toString());
    const total3 = await productPage.verifyTotal(productName3, quantity3.toString());
    const expectedTotal = total1 + total2 + total3;
    await productPage.verifyTotalPrice(expectedTotal);
  });
});




