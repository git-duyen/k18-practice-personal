import { Page } from "@playwright/test";

export class MaterialPage {
    page: Page;
    baseURL: string;

    constructor(page: Page) {
        this.page = page;
        this.baseURL = "https://material.playwrightvn.com";
    }

    async go() {
        await this.page.goto(this.baseURL);
    }
}