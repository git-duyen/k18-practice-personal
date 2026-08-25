import { Page, expect } from "@playwright/test";
import { MateriaBasePage } from './01-materiapage-pom';

export class ProductPage extends MateriaBasePage {
    xpathProductId1: string;
    xpathProductId2: string;
    xpathProductId3: string;
    xpathCartItem: string;
    xpathCartTotal: string;

    constructor(page: Page) {
        super(page);
        this.xpathProductId1 = "//button[@data-product-id='1']";
        this.xpathProductId2 = "//button[@data-product-id='2']";
        this.xpathProductId3 = "//button[@data-product-id='3']";
        this.xpathCartItem = "//tbody[@id='cart-items']/tr";
        this.xpathCartTotal = "//td[@class='total-price']"
    }

    async clickProduct1() {
        await this.page.locator(this.xpathProductId1).dblclick();
    }

    async clickProduct2() {
        await this.page.locator(this.xpathProductId2).click({
            clickCount: 3
        });
    }

    async clickProduct3() {
        await this.page.locator(this.xpathProductId3).click();
    }

    // locator by product name
    private getCartRow(productName: string) {
        return this.page.locator(this.xpathCartItem).filter({ hasText: productName });
    }

    // b. Check quantity of product on cart
    async verifyProductQuantity(productName: string, expectedQuantity: number) {
        const row = this.getCartRow(productName);
        const quantityText = await row.locator('td').nth(2).innerText();
        expect(Number(quantityText)).toBe(expectedQuantity);
    }

    // C. Check total 
    async verifyCartTotal(expectedTotal: string) {
        await expect(this.page.locator(this.xpathCartTotal)).toHaveText(expectedTotal);
    }
}