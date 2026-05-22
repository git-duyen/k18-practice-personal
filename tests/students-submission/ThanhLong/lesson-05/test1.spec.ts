import { test } from '@playwright/test';

test('Test 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

    await page.locator('#username').fill('Long');
    await page.locator('#email').fill('long@gmail.com');
    await page.locator('#male').check();
    await page.locator('#traveling').check();
    await page.locator('#interests').selectOption('Sports');
    await page.locator('#country').selectOption('Canada');
    await page.locator('#profile').setInputFiles('data-test/file.txt');
    await page.locator(`button[type="submit"]`).click();
});