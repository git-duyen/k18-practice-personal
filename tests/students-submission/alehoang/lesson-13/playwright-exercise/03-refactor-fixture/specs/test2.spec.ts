import { test } from "../fixture/material-page.fixture";
import { ProductPage } from '../pom/product.page';

test('Product Page', async ({ materialPage }) => {
    const productPage = new ProductPage(materialPage.page);

    const addProduct = [
        { product: 1, price: 10.00, addedQuantity: 2 },
        { product: 2, price: 20.00, addedQuantity: 3 },
        { product: 3, price: 30.00, addedQuantity: 1 },
    ];

    await test.step("Click Bài học 2", async () => {
        await productPage.gotoPage("Product page");
    });

    await test.step("Add Product to cart", async () => {
        await productPage.addProductToCart(addProduct);
    });

    await test.step("Check total price", async () => {
        await productPage.checkTotalPrice(addProduct);
    });
});
