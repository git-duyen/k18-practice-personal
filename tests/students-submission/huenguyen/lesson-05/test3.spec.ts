import { test } from '@playwright/test';

test('todo page', async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');
    await page.getByText('Bài học 3: Todo page').click();

    // a. thêm 100 todo
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
        await page.locator("//button[@id='add-task']").click();
    }

    // b. xoá todo số lẻ
    for (let i = 1; i <= 100; i += 2) {
        await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

});

