// tests/test2.spec.ts

import { test } from './03-fixture';

test('Add Product', async ({ productPage }) => {
  await test.step('Add to Cart', async () => {
    await productPage.addProduct(1, 2);
    await productPage.addProduct(2, 3);
    await productPage.addProduct(3, 1);
  });

  await test.step('Verify product quantity', async () => {
    await productPage.verifyProductQuantity('Product 1', 2);
    await productPage.verifyProductQuantity('Product 2', 3);
    await productPage.verifyProductQuantity('Product 3', 1);
  });

  await test.step('Verify Total Price', async () => {
    await productPage.verifyTotalPrice(110);
  });
});