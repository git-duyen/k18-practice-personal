import { test } from '@playwright/test';

test('Basic Action', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Click on Product page", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    //Add task
    await test.step("Thêm mới 100 todo item", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        };

        //Delete task có số lẻ
        await test.step("Delete task có số lẻ", async () => {
            page.on("dialog", async dialog => {
                await dialog.accept();
            });

            for (let i = 1; i <= 100; i++) {
                if (i % 2 !== 0) {
                    await page.locator("//button[@id='todo-" + i + "-delete']").click();
                }
            }
        });
    });
});