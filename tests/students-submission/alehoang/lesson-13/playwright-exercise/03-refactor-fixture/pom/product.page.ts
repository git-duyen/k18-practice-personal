import { Page, expect } from '@playwright/test';
import { MaterialBasePage } from './material.page';

interface AddProduct {
    product: number;
    price: number;
    addedQuantity: number;
}

export class ProductPage extends MaterialBasePage {
    cssTotalPrice: string = "tfoot td[class='total-price']";

    constructor(page: Page) {
        super(page);
    }

    async addProductToCart(addProduct: AddProduct[]) {
        for (const data of addProduct) {
            // Add to cart
            const xpathAddProductBtn = `//button[@data-product-id='${data.product}']`;
            await this.page.locator(xpathAddProductBtn).click({ clickCount: data.addedQuantity });

            // Check cart
            const xpathProductInCart = `//td[text()='Product ${data.product}']`;
            const xpathPrice = `//div[text()='Product ${data.product}']/following-sibling::div[1]`;
            const xpathPriceInCart = `//td[text()='Product ${data.product}']/following-sibling::td[1]`;
            const xpathQuantityInCart = `//td[text()='Product ${data.product}']/following-sibling::td[2]`;
            const productPrice = await this.page.locator(xpathPrice).textContent();
            // const priceInCart = await this.page.locator(xpathPriceInCart).textContent();
            // const quantityInCart = await this.page.locator(xpathQuantityInCart).textContent();
            await expect(this.page.locator(xpathProductInCart)).toBeVisible();
            // expect(priceInCart).toBe(productPrice);
            // expect(quantityInCart).toBe(`${data.addedQuantity}`);
            await expect(this.page.locator(xpathPriceInCart)).toHaveText(productPrice!);
            await expect(this.page.locator(xpathQuantityInCart)).toHaveText(`${data.addedQuantity}`);
        }
    }

    async checkTotalPrice(addProduct: AddProduct[]) {
        let totalPrice = 0;
        totalPrice = addProduct.reduce((total, product) => {
            const totalProduct = product.price * product.addedQuantity;
            return total + totalProduct;
        }, 0);

        const totalPriceInCart = await this.page.locator(this.cssTotalPrice).innerText();
        const totalPriceInCartFloat = parseFloat(totalPriceInCart.replace("$", ""));
        expect(totalPrice).toBe(totalPriceInCartFloat);
    }
}
