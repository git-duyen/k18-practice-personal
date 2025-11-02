import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});

test('test - bai hoc 2', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.waitForTimeout(2_000);
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

  await page.waitForTimeout(2_000);
  await expect(page.locator('body')).toContainText('Product 2');
  await page.getByRole('link', { name: 'Trở về trang chủ' }).click();
  await page.waitForTimeout(2_000);
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('minhphong');
  await page.waitForTimeout(2_000);
  await expect(page.getByRole('textbox', { name: 'Username:' })).toHaveValue('minhphong');
  await expect(page.getByRole('textbox', { name: 'Username:' })).toHaveValue('minhphong');


});

