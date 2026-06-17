import { test } from '@playwright/test';
test('baitap1', async ({ page }) => {
  await test.step('step1', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('text=Bài học 1: Register Page (có đủ các element)') .click();
    await page.locator('//input[@id="username"]').fill("Bryan");
    await page.locator('//input[@id="email"]').fill("trilm17fs@gmail.com");
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="cooking"]').check();
    await page.locator('//select[@id="interests"]').selectOption("Art");
    await page.locator('//select[@id="country"]').selectOption("Canada");
    await page.locator('//input[@id="dob"]').fill("1995-12-26");
    await page.locator('//input[@id="profile"]').setInputFiles('./tests/Lesson-05/testimage.jpg');
    await page.locator('//textarea[@id="bio"]').fill( "Hello, I'm Bryan");
    await page.locator('#rating').fill("9");
    await page.locator('//input[@id="favcolor"]').fill("#000000");
    await page.locator('//input[@id="newsletter"]').check();
    await page.locator('.slider.round').click();
    await page.locator('#starRating').click(); 
    await page.locator('//button[@type="submit"]').click();})
});