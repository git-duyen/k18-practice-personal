import { test, expect } from '@playwright/test';

test('drag and drop', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 5: Puzzle drag and' }).click();
  for (let i = 1; i <= 4; i++) {
    await page.locator(`#piece-${i}`).dragTo(page.locator(`//div[@data-piece='${i}']`));
  }
  //assertion
  for (let i = 1; i <= 4; i++) {
    await expect(page.locator(`[data-piece='${i}'] #piece-${i}`)).toBeVisible();
  }
});
