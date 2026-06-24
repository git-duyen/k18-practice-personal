import {Page, Locator} from '@playwright/test';
import { MaterialBasePage } from './material-base-page';

type Product = {
    productName: string;
    quantity: number;
}

export class ProductPage extends MaterialBasePage {
    
    private addToCartBtn(id: number) {
        return this.page.locator(`//button[@data-product-id='${id}']`);
    };

    // In shopping cart
    private productName(productNumber: number) {
        return this.page.locator(`//tbody[@id='cart-items']//td[text() = 'Product ${productNumber}']`);
    }

    private cartPriceOfProduct(productNumber: number) {
        return this.page.locator(`//tbody[@id='cart-items']//td[text() = 'Product ${productNumber}']/following-sibling::td[1]`);
    }

    private cartQuantityByProduct(productNumber: number) {
        return this.page.locator(`//tbody[@id='cart-items']//td[text() = 'Product ${productNumber}']/following-sibling::td[2]`);
    }

    private cartTotalPriceByProd(productNumber: number) {
        return this.page.locator(`//tbody[@id='cart-items']//td[text() = 'Product ${productNumber}']/following-sibling::td[3]`);
    }

    xpathTotalPrice = '//td[@class="total-price"]';

    constructor(page: Page){
        super(page);
    }

    priceOfProduct = async (productNumber: number) => {
        let priceByProduct = await this.page.locator(`//div[text()='Product ${productNumber}']/following-sibling::div[@class='product-price']`).textContent();
        return Number(priceByProduct!.replace('$', ''));
    };

    totalPrice = async () => {
        let total = await this.page.locator(this.xpathTotalPrice).textContent();
        return Number(total!.replace('$', ''));
    }

    addProduct = async (productNumber: number, quantity: number) => {
        for(let count = 1; count <= quantity; count++){
            await this.addToCartBtn(productNumber).click();
        }
    }

    getQuantityAndPrice = async (productNumber: number) => {
        let productName = await this.productName(productNumber).textContent();

        // Get price by each product
        let priceByProduct = await this.cartPriceOfProduct(productNumber).textContent();

        let price = Number(priceByProduct!.replace('$', ''));

        // Get quantity of each product
        let quantityOfEachProd = Number(await this.cartQuantityByProduct(productNumber).textContent());

        // Get total price of each product 
        let totalPrice = await this.cartTotalPriceByProd(productNumber).textContent();
        let totalPriceOfEachProd = Number(totalPrice!.replace('$', ''));
    
        return {productName, price, quantityOfEachProd, totalPriceOfEachProd}
    }
}