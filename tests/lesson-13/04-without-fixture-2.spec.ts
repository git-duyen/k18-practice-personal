import { expect, test } from '@playwright/test';
import { MaterialPage } from './00-pom';

test.describe("Material page - with POM2", async () => {
    let materialPage: MaterialPage;

    test.beforeEach(async ({ page }) => {
        materialPage = new MaterialPage(page);
        await materialPage.go();
        await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();
    });

    test("Test 3: todo page", async () => {
        await materialPage.page.getByText("Bài học 3: Todo page").click();
        await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
    });
});