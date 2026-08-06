// Bài tập 3 cách khác
import { test } from '@playwright/test';

test('test3', async ({ page }) => {
    await test.step('Navigate to page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Select Bài học 3: Todo page
    await test.step('Click Bai hoc 3', async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

    // Vòng lặp 100 lần
    await test.step('add Todo', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    // xoá số lẻ
    // Xác định quy luật của id
    await test.step('xoa so le', async () => {
        // Xử lý sự kiên ( câu lệnh nằm ngoài for)
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 99; i += 2) {
            await page.locator(`//button[@id="todo${i}-delete"]`).click();
        }
    });

});