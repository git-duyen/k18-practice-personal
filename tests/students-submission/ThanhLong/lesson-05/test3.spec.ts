import { test } from '@playwright/test';

test('Test 3', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 3: Todo Page' }).click();
    for (let i = 1; i <= 100; i++) {
        await page.locator('#new-task').fill(`Task ${i}`);
        await page.locator('#add-task').click();
    }


    page.on('dialog', async (dialog) => {
        await dialog.accept();

    });


    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            const task = page.getByText(`Task ${i}`, { exact: true });

            await task.locator('..').getByRole('button', { name: 'Delete' }).click();


        }
    }
});