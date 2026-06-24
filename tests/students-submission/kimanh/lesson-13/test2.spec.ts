import { expect } from "@playwright/test";
import { ProductPage } from "./01-pom";
import { test } from "./materialPage-fixture";


test('Buy Products', async ({ materialPage }) => {
    const productPage = new ProductPage(materialPage);
    await productPage.gotoProductPage();
    await productPage.clickAddToCart("1", 2);
    await productPage.clickAddToCart("2", 1);
    await productPage.clickAddToCart("3", 3);
    //Verify products in cart
    await productPage.verifyProductRow(0, "$10.00", "2");
    await productPage.verifyProductRow(1, "$20.00", "1");
    await productPage.verifyProductRow(2, "$30.00", "3");
    await productPage.verifyTotalPrice("$130.00");
});