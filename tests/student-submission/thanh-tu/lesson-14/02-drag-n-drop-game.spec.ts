import { expect, test } from '@playwright/test';

test('Drag n Drop Game', async ({ page }) => {
  await test.step('Go to material page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });
  await test.step('Click lesson 5', async () => {
    await page.getByRole('link', { name: 'Bài học 5: Puzzle drag and drop game' }).click();
  });
  await test.step('Drag n Drop', async () => {
    for (let i = 1; i <= 4; i++) {
      await page.locator(`#piece-${i}`).dragTo(page.locator(`//div[@data-piece="${i}"]`));
    }
  });
});
