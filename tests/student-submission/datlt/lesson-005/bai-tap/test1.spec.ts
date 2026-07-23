import { test, expect } from '@playwright/test';

test('Register page test', async ({ page }) => {
  await test.step('Navigate to register page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step('Click on register link', async () => {
    await page.click("//a[@href='01-xpath-register-page.html']");
  });

  await test.step('Fill all fields', async () => {
    // Fill username
    await page.locator("//input[@id='username']").fill("Ly Thanh Dat");
    
    // Fill email
    await page.locator("//input[@id='email']").fill("Datlt@gmail.com");

    // Select gender
    let isCheckGender = await page.locator("//input[@id='male']").isChecked();
    if (!isCheckGender) {
      await page.locator("//input[@id='male']").check();
    }
    
    // Fill hobby
    // Check reading
    let isReadingCheck = await page.locator("//input[@id='reading']").isChecked();
    if (!isReadingCheck) {
      await page.locator("//input[@id='reading']").check();
    }

    // Uncheck traveling
    if ((await page.locator("//input[@id='traveling']").isChecked())) {
      await page.locator("//input[@id='traveling']").check();
    }
    // Uncheck cooking
    if ((await page.locator("//input[@id='cooking']").isChecked())) {
      await page.locator("//input[@id='cooking']").check();
    }

    // Fill interest
    await page.locator("//select[@id='interests']").selectOption("technology");

    // Fill country
    await page.locator("//select[@id='country']").selectOption("canada");

    // Fill date of birth
    await page.locator("//input[@id='dob']").fill('2004-07-28');

    // Fill profile picture
    await page.locator("//input[@id='profile']").setInputFiles('Images/AnhTest1.jpg');

    // Fill biography
    await page.locator("//textarea[@id='bio']").fill('Toi da o day roi nha');

    // Fill rating
    await page.locator("//input[@id='rating']").fill('7');

    // Fill favorite color
    await page.locator("//input[@id='favcolor']").fill('#d5e5ee');

    // Fill newsletter by hover
    await page.locator("//input[@id='newsletter']").check();

    // Fill enable feature
    await page.locator("//label[@for='toggleOption']").click();

    // Fill star rating
    // ko điền được ngôi sao
    //await page.locator("//div[@id='starRating']/*").last().click();

    // Fill custome date
    // ko điền được custome date
    //await page.locator("//input[@id='customDate']").fill('2026-07-21');
  });

  await test.step('Submit form', async () => {
    await page.locator("//button[contains(., 'Register')]").click();
  });
});