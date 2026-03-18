import { test } from '@playwright/test';

test('product page', async ({ page }) => {
    await test.step('Open https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Click on Bài học 3: Todo page', async () => {
        await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
    })

    for (let i = 1; i < 101; i++) {
        await test.step('Input new task', async () => {
            await page.locator("//input[@id='new-task']").fill('Todo ' + i);

        })

        await test.step('Click on Add Task button', async () => {
            await page.locator("//button[@id='add-task']").click();
        })
    }

    await test.step('Delete todo', async () => {
        page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i < 101; i += 2) {
                await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }
    })
})