import { test } from '@playwright/test';
test('baitap2', async ({ page }) => {
  await test.step('step2', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('text=Bài học 2: Product page') .click();
const runs = [
  ['1', '2', '3'], 
  ['1', '2'],      
  ['2']            
];

for (let i = 0; i < runs.length; i++) {
  const productsToClick = runs[i]; 
  for (const productId of productsToClick) {
    await page.locator(`button[data-product-id="${productId}"]`).click();
    console.log(`Đã add sản phẩm có ID: ${productId}`);
  }
}
  });
});