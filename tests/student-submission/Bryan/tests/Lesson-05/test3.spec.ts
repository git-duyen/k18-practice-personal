import { test } from '@playwright/test';
test('baitap3', async ({ page }) => {
test.setTimeout(60000);
  await test.step('step3', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('text=Bài học 3: Todo page') .click();
    const inputTask = page.locator('//input[@id="new-task"]');
    const buttonAdd = page.locator('//button[@id="add-task"]');

// add 100 todo items
for (let i = 1; i <= 100; i++) {
    await inputTask.fill(`Todo item ${i}`);
    await buttonAdd.click();
    await page.waitForTimeout(10);
}
//delete Todo list lẻ
page.on('dialog', async dialog => {
      await dialog.accept();
    });
    const todoRows = page.locator('#task-list > li');
    const totalItems = await todoRows.count();
    for (let i = totalItems - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        await todoRows.nth(i).locator('button:has-text("Delete")').click();
        await page.waitForTimeout(15);
      }
    }
  });
});

