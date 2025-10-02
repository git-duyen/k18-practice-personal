import { test } from '@playwright/test';
import { count } from 'console';

test('Add 100 items and delete odd items', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Todo page', async () => {
        await page.locator("//a[text()= 'Bài học 3: Todo page']").click();
    });

    await test.step('Add 100 todo items', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill("Todo " + `${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step('Delete odd todo items', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
});
