import { test, expect } from '@playwright/test';

test('Register page test', async ({ page }) => {
  await test.step('Navigate to register page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step('Click on register link', async () => {
    await page.click("//a[@href='04-xpath-personal-notes.html']");
  });

  await test.step('Add note 1-10', async () => {
    for (let i = 1; i <= 10; i++) {
      await page.locator("//input[@id='note-title']").fill(`title ${i}`);
      await page.locator("//textarea[@id='note-content']").fill(`content ${i}`);
      await page.locator("//button[@id='add-note']").click();
    }
  });

  await test.step('Search note', async () => {
    await page.locator("//input[@id='search']").fill('title 5');
    await page.waitForTimeout(1_000);
    await expect(
      page.locator("//ul[@id='notes-list']/li")
    ).toContainText("title 5");
  });
});