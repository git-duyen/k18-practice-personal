import { test } from "@playwright/test";

test('Add TO-DO List', async ({ page }) => {
    await test.step('Navigate to website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Navigate to TODO Page', async () => {
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    })

    await test.step('Add 100 items to list', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator(`//input[@id ='new-task']`).fill(`To-do ${i}`);
            await page.locator(`//button[@id ='add-task']`).click();
        }
    })

    await test.step('Delete odd items', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        })
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 1) {
                await page.locator(`//button[@id= 'to-do-${i}-delete']`).click();
            }
        }
    })
});