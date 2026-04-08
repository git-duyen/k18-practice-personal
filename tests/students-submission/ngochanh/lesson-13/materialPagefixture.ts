import { test as base, expect } from "@playwright/test";
import { MaterialBasePage } from "./pom";

const test = base.extend<{ materialPage: MaterialBasePage }>({
    materialPage: async ({ page }, use) => {
        const materialPage = new MaterialBasePage(page);
        await materialPage.openMaterialPage();
        await expect(materialPage.page.getByText('Tài liệu học automation test')).toBeVisible();
    
        await use(materialPage);

        console.log("End of test");
    }
})

export {test};