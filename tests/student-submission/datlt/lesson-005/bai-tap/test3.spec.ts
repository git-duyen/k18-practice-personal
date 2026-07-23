import { test, expect } from '@playwright/test';

test('Register page test', async ({ page }) => {
  await test.step('Navigate to register page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step('Click on register link', async () => {
    await page.click("//a[@href='03-xpath-todo-list.html']");
  });

  await test.step('Add task 1-100', async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });

  await test.step('Delete odd todo', async () => {
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });
    for (let i = 1; i <= 100; i += 2) {
      await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }
  });
});