import { test as base, expect } from '@playwright/test';
import { MaterialBasePage } from '../pom/material.page';

const test = base.extend<{ materialPage: MaterialBasePage }>({
    materialPage: async ({ page }, use) => {
        const materialPage = new MaterialBasePage(page);
        await materialPage.openMaterialPage();
        await expect(materialPage.page.getByRole("heading", { name: "Tài liệu học automation test" })).toBeVisible();

        await use(materialPage);

        console.log("Test end!!");
    }
})

export { test };
