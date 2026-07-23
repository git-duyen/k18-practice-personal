import { test, expect } from '@playwright/test';

test('Register page test', async ({ page }) => {
  await test.step('Navigate to register page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step('Click on register link', async () => {
    await page.click("//a[@href='02-xpath-product-page.html']");
  });

  await test.step('Add to card', async () => {
    await page.locator("//button[@data-product-id='1']").click();
    await page.locator("//button[@data-product-id='1']").click();
    await page.locator("//button[@data-product-id='2']").click();
    await page.locator("//button[@data-product-id='2']").click();
    await page.locator("//button[@data-product-id='2']").click();
    await page.locator("//button[@data-product-id='3']").click();
  });
});