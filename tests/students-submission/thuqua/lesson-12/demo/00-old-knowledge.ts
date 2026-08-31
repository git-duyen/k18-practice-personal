import {Locator, Page} from '@playwright/test';

export class MaterialPage {
    page: Page;
    baiLoc: Locator;

    constructor(page: Page) {
            this.page = page;

            this.baiLoc = this.page.locator("//a[contains(text(), 'Register')]");
    }

    async clickLesson(name: string) {
        if(name === "bai_1") {
            await this.baiLoc.click();
        }
    }
}