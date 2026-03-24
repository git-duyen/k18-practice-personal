import { test, expect, Page } from '@playwright/test';

let productName1 = "Product 1";
let productName2 = "Product 2";
let productName3 = "Product 3";


//2.
test('Product Page Test', async ({ page }) => {
  await test.step('Go to Product Page', async () => {
    await goToProductPage(page);
  });

  await test.step('Add product 1,2,3 to cart', async () => {
    await addProductForm(page);
  });

  await test.step('Verify information added', async () => {
    await verifyTableData(page);
  });
  await page.close();
});

async function goToProductPage(page: Page) {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 2: Product Page' }).click();

  // Expects page to have a heading with the name of Simple E-commerce.
  await expect(page.getByRole('heading', { name: 'Simple E-commerce' })).toBeVisible({ timeout: 10000 });
}

async function addProductForm(page: Page) {
  await addProductToCart(page, productName1, 2);
  await addProductToCart(page, productName2, 3);
  await addProductToCart(page, productName3, 1);
}
async function addProductToCart(page: Page, productName: string, times: number) {
  const productLocator = page.locator('//div[text()="' + productName + '"]/following-sibling::button[text()="Add to Cart"]');
  for (let i = 0; i < times; i++) {
    await productLocator.click();
  }
}

async function verifyTableData(page: Page) {
  await expect(page.locator('table')).toBeVisible();

  const expectedProducts = [
    { name: productName1, quantity: '2' },
    { name: productName2, quantity: '3' },
    { name: productName3, quantity: '1' },
  ];

  for (const product of expectedProducts) {
    const row = page.locator('table tbody tr', { hasText: product.name });
    await expect(row).toBeVisible();
    await expect(row.locator('td').nth(0)).toHaveText(product.name);
    await expect(row.locator('td').nth(2)).toHaveText(product.quantity);
  }
}
