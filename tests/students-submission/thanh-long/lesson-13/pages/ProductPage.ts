import { expect, Locator, Page } from "@playwright/test";
import { MaterialPage } from "../fixture.ts";

export class ProductPage extends MaterialPage {
    readonly addToCartButtonProduct1 = this.page.locator("//div[@class='product-name' and text()='Product 1']/following-sibling::button");
    readonly addToCartButtonProduct2 = this.page.locator("//div[@class='product-name' and text()='Product 2']/following-sibling::button");
    readonly addToCartButtonProduct3 = this.page.locator("//div[@class='product-name' and text()='Product 3']/following-sibling::button");
    readonly priceProduct1 = this.page.locator(`//div[normalize-space()='$10.00']`)
    readonly priceProduct2 = this.page.locator(`//div[normalize-space()='$20.00']`)
    readonly priceProduct3 = this.page.locator(`//div[normalize-space()='$30.00']`)
    readonly totalPrice = this.page.getByText('$110.00', { exact: true })

    private p1Count = 0;
    private p2Count = 0;
    private p3Count = 0;

    constructor(page: Page) {
        super(page);
    }

    async addToCartProduct1(clickCount: number) {
        this.p1Count = clickCount;
        await this.addToCartButtonProduct1.click({ clickCount });
    }

    async addToCartProduct2(clickCount: number) {
        this.p2Count = clickCount;
        await this.addToCartButtonProduct2.click({ clickCount });
    }

    async addToCartProduct3(clickCount: number) {
        this.p3Count = clickCount;
        await this.addToCartButtonProduct3.click({ clickCount });
    }

    async verifyProductQuantity() {
        const expectedTotalQuantity = this.p1Count + this.p2Count + this.p3Count;

        if (this.p1Count > 0) {
            await expect(this.page.locator(`//tbody[@id='cart-items']//tr[td[text()='Product 1']]/td[3]`)).toHaveText(this.p1Count.toString());
        }
        if (this.p2Count > 0) {
            await expect(this.page.locator(`//tbody[@id='cart-items']//tr[td[text()='Product 2']]/td[3]`)).toHaveText(this.p2Count.toString());
        }
        if (this.p3Count > 0) {
            await expect(this.page.locator(`//tbody[@id='cart-items']//tr[td[text()='Product 3']]/td[3]`)).toHaveText(this.p3Count.toString());
        }

        console.log(`Đã verify xong từng sản phẩm. Tổng số lượng click tích lũy: ${expectedTotalQuantity}`);
    }

    
    async getPriceAsNumber(locator: Locator): Promise<number> {
        const rawText = await locator.textContent();
        if (!rawText) return 0;
        return parseFloat(rawText.replace(/[^0-9.-]+/g, ""));
    }

    async verifyTotalPrice() {
        const price1 = await this.getPriceAsNumber(this.priceProduct1);
        const price2 = await this.getPriceAsNumber(this.priceProduct2);
        const price3 = await this.getPriceAsNumber(this.priceProduct3);
        const expectedTotalPrice = (this.p1Count * price1) + (this.p2Count * price2) + (this.p3Count * price3);
        const actualTotalPriceNumber = await this.getPriceAsNumber(this.totalPrice);
        expect(actualTotalPriceNumber).toBe(expectedTotalPrice);
        console.log(`Tổng giá trị kỳ vọng: ${expectedTotalPrice} | Thực tế trên UI: ${actualTotalPriceNumber}`);
    }
}