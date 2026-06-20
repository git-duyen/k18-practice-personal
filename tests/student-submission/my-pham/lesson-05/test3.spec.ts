import { test } from '@playwright/test';
test('add todo item', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='03-xpath-todo-list.html']");
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
        await page.locator("//button[@id='add-task']").click();
    }
    page.on('dialog', dialog => dialog.accept());
    for (let i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
            let deleteBtn = `to-do-${i}-delete`;
            await page.locator(`//button[@id='${deleteBtn}']`).click();
        }

    }
})