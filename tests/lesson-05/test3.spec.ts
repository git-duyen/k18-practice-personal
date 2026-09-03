import { test } from '@playwright/test'

test('test3', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click Bài 3', async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

    await test.step('Add new task Todo 1 đến 100', async () => {
        for (let i = 1; i <= 10; i++) {
            await page.locator('//input[@id="new-task"]').fill('Todo' + String(i));
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    await test.step('delete task lẻ', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let y = 1; y <= 10; y++) {
            if (y % 2 !== 0) {
                const xpath = `//button[@id='todo${y}-delete']`;
                await page.locator(`${xpath}`).click();
            }
        }
    });

});