import { Page } from '@playwright/test';

export class ProductPage {
    page: Page;

    // Override property

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.locator("//div[text=product_1....").click();
    }

    async getCartTotal(): Promise<number> {
        let total;
        // Lay ra so luong san pham
        let numberOfProduct = 10;

        // Lay ra gia tien san pham
        let each = 100;

        // Tinh tong
        total = numberOfProduct * each;

        // tra ve
        return total;
    }

}