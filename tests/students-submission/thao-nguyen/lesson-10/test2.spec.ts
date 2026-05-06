import { test,expect } from '@playwright/test';
import { RegisterPage } from './01-pom';
test('products page', async ({ page }) => {
    const productPage = new RegisterPage(page);
    await productPage.openMaterialPage();
    await page.locator(productPage.XpathProductPage).click();
    await page.locator('//button[@data-product-id="1"]').dblclick();
    await page.locator('//button[@data-product-id="2"]').click();
    const product3 =page.locator('//button[@data-product-id="3"]');
    for (let i = 0; i < 3; i++) {
    await page.locator('//button[@data-product-id="3"]').click(); 
    };
});