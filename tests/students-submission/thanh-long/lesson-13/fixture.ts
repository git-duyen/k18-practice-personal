import { Page,test as base, expect } from '@playwright/test';

export class MaterialPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com");
    }

    async gotoPage(pageName: string) {
        await this.page.getByRole('link', { name: new RegExp(pageName, 'i') }).click();
    }
}




// Set up fixture
type MyFixtures = {
    materialPage: MaterialPage;
};
export const test = base.extend<MyFixtures>({
    materialPage: async ({ page }, use) => {
        const materialPage = new MaterialPage(page); 
        await materialPage.openMaterialPage();  
        
        const heading = page.getByRole('heading', { name: 'Tài liệu học automation test', level: 1 })
        await expect(heading).toBeVisible();
        await use(materialPage);          
        console.log("Test end");
    }
});

export { expect } from '@playwright/test';