import { test } from '@playwright/test';

test('Todo page', async ({ page }) => {
    await test.step("Step 1: Them 100 Todo", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
        
        // Add 100 Todo item
        for (let i = 1; i <= 100; i++) {
            // Fill ô input
            await page.locator("//input[@id = 'new-task']").fill(`Todo ${i}`);
        
            // Click button Add
            await page.locator("//button[@id = 'add-task']").click();
    }});

    await test.step("Step 2: Xoa Todo co so le", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }
    });
});