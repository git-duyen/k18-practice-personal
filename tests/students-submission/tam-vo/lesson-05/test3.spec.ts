import { test } from '@playwright/test';

test('Test 3: Todo page', async ({ page }) => {

    //=========== a. Add new 100 todo with content "Todo<i>" ============
    await test.step('a. Add new 100 todo', async () => {
        await page.goto('https://material.playwrightvn.com/'); // Open website
        await page.locator('//a[contains(text(),"Bài học 3: Todo page")]').click(); // Redirect Todo page
        for (let i = 1; i < 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(` Todo ${i}`); // Fill content vào input field
            await page.locator('//button[@id="add-task"]').click();  // Click add button
        }
    });

    // ====== b. Delete todo có số lẻ ==========
    await test.step('b. Delete todo co so le', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 99; i += 2) {
            await page.locator(`//button[@id="todo-${i}-delete"]`).click();
        }
    });

});