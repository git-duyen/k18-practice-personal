import { test } from '@playwright/test';

test('Thêm mới todo item và xóa item số lẻ', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 3", async () => {
        await page.locator("//a[text() ='Bài học 3: Todo page']").click();

    });

    await test.step("Them 100 todo", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click()
        }

    });

    await test.step("Xóa todo số lẻ", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 99; i += 2) {
            await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }
    });


});
