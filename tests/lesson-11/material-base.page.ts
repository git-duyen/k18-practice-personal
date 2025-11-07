import { Locator, Page } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = this.page.locator("//a[@href='user-registration.html']");
    }
}