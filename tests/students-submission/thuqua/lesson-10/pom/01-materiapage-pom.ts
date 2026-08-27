import { Page, Locator } from "@playwright/test";

export class MateriaBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = "//a[@href='01-xpath-register-page.html']";
        this.xpathProductPage = "//a[@href='02-xpath-product-page.html']";
        this.cssTodoPage = "a[href='03-xpath-todo-list.html']";
        this.personalNote = page.locator("a[href='04-xpath-personal-notes.html']");
    }

    async openMaterialPage() {
        await this.page.goto('https://material.playwrightvn.com/');
    }

    async gotoPage(pageName: string | Locator) {
        if (typeof pageName === 'string') {
            await this.page.click(pageName);
        } else {
            await pageName.click();
        }
    }

}