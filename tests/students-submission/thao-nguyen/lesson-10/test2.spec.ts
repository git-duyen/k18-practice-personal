import { test,expect } from '@playwright/test';
import {ProductPage} from './01-pom';
test('products page', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.openMaterialPage();
    await page.locator(productPage.XpathProductPage).click();
   await productPage.addProductToCart(1, 2);
    await productPage.addProductToCart(2, 1);
    await productPage.addProductToCart(3, 3);
    await productPage.verifyTotalPrice('130');
});