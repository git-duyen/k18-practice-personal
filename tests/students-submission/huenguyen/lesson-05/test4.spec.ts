import { test } from '@playwright/test';

test('personal notes', async ({ page }) => {

  await page.goto('https://material.playwrightvn.com/');
  await page.getByText('Bài học 4: Personal notes').click();

  // thêm 10 note
  for (let i = 1; i <= 10; i++) {

    await page.locator("//input[@id='note-title']").fill(`Tên action ${i}`);

    await page.locator("//textarea[@id='note-content']").fill(`Mô tả ${i}`);

    await page.locator("//button[@id='add-note']").click();
  }

  // search
  await page.locator("//input[@id='search']").fill("một hoặc nhiều");

});