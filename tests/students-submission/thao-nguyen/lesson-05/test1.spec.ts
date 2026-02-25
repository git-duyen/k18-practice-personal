import { test, expect } from '@playwright/test';

test('truy cập trang', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click();
    await page.locator('//input[@id="username"]').fill('Thaotest');
    await page.locator('//input[@id="email"]').fill('thaotest@gmail.com');
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="female"]').uncheck();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//input[@id="cooking"]').check();
    await page.locator('//select[@id="interests"]').selectOption('technology');
    await page.locator('//select[@id="country"]').selectOption('uk');
    const dateOfBirth = page.locator('//input[@id="dob"]');
    await dateOfBirth.fill('2026-02-03');
    await page.locator('//input[@id="profile"]').setInputFiles('tests/lesson-05/thaotest.jpg');
    await page.locator('//textarea[@id="bio"]').fill('thaotest bio');
    await page.locator('//input[@id="rating"]').fill('4');
    await page.locator('//input[@id="favcolor"]').fill('#ff0000');
    const tooltipText = page.locator('.tooltiptext');

    await expect(tooltipText).toBeHidden();   
    await page.locator('.tooltip').hover();
    await expect(tooltipText).toBeVisible();  
    await expect(tooltipText).toHaveText('Subscribe to our newsletter for updates');

   await page.locator('label[for="toggleOption"]').click();

    //const customDate = page.locator('//input[@id="customDate"]');
    //await customDate.fill('2026-02-03');
    await page.locator('//button[@type="submit"]').click();
});