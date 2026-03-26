import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string = "//a[text()='Bài học 1: Register Page (có đủ các element)']";
    xpathProductPage: string = "//a[text() = 'Bài học 2: Product page']";
    cssTodoPage: string = "a[href='03-xpath-todo-list.html']";
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalNote = page.getByRole("link", { name: "Bài học 4: Personal notes" });
    }

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async gotoPage(pageName: string) {
        switch (pageName) {
            case "Register Page":
                await this.page.locator(this.xpathRegisterPage).click();
                break;
            case "Product page":
                await this.page.locator(this.xpathProductPage).click();
                break;
            case "Todo Page":
                await this.page.locator(this.cssTodoPage).click();
                break;
            case "Personal Notes":
                await this.personalNote.click();
                break;
            default:
                throw new Error("Page Not Found");
        }
    }
}
