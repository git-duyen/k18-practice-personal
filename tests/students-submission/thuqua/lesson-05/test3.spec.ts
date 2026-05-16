import { test } from '@playwright/test';

test('Product page', async ({ page }) => {
    test.setTimeout(120000);
    
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Bai hoc 3: Todo page', async () => {
        await page.click("//a[@href = '03-xpath-todo-list.html']");
    });

    await test.step('Add new 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id = 'new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id = 'add-task']").click();
        }
    });

    await test.step('Delete todo item le', async () => {
        for (let i = 99; i >= 1; i -= 2) {
            page.once('dialog', async dialog => await dialog.accept());
            await page.locator(`(//button[contains(text(),"Delete")])[${i}]`).click();
        }
    });
});