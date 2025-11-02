import { expect } from '@playwright/test';
import { test } from './00-fixture';

test.describe("Material page - with POM2", async () => {
    test("Test 3: todo page", async ({ materialPage }) => {
        await materialPage.page.getByText("Bài học 3: Todo page").click();
        await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
    });
});