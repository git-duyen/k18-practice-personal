import { test } from '@playwright/test';

test('Basic action', async ({ page }) => {
  await test.step('Tên step', async () => {
    await page.goto('https://material.playwrightvn.com');
  });

  await test.step("Click Bài học 1", async () => {
    await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
  });

  await test.step("Input", async () => {
    await page.locator("//input[@id = 'username']").fill
      ("Mia");
    await page.locator("//input[@id = 'email']").
      pressSequentially("mia@gmail.com", {
      });
  })
  await test.step("Radio button / Checkbox", async () => {
    let isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
    console.log(isCheckedMale);

    await page.locator("//input[@id = 'male']").check();
    isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
    console.log(isCheckedMale);
  });

  await test.step("Radio button / Checkbox", async () => {
    let isCheckedHobbies = await page.locator("//input[@id = 'reading']").isChecked();
    console.log(isCheckedHobbies);

    await page.locator("//input[@id = 'reading']").check();
    isCheckedHobbies = await page.locator("//input[@id = 'reading']").isChecked();
    console.log(isCheckedHobbies);
  });
  await test.step("Select option", async () => {
    await page.locator("//select[@id='interests']").selectOption
      ("technology");
  });
  await test.step("Select option", async () => {
    await page.locator("//select[@id='country']").selectOption
      ("Canada");
  });

  await test.step("birthday", async () => {
    await page.locator("#dob").fill("2000-05-26");
  });

  await page.locator('//input[@type="file"]').setInputFiles("tests/data-test/data-test.txt");


  await test.step("rate", async () => {
    await page.locator("//input[@id='rating']").fill("6");
  });

  await test.step("color", async () => {
    await page.locator("//input[@id = 'favcolor']").fill("#2a1b41");
  });

  await test.step("newsletter", async () => {
    await page.locator("//input[@id = 'newsletter']").click();
  });

  await test.step("Enable Feature:", async () => {
    await page.locator("//label[@class='switch']").click();
  });

  await test.step("Star Rating", async () => {
    await page.locator("(//div[@id='starRating'])").click({
      position: { x: 80, y: 10 }
    });
  });

  /*await test.step("custom date", async () => {
    await page.locator("#dob").fill("2026-04-29");
  }); */

  await test.step("register", async () => {
    await page.locator("//button[contains(.,'Register')]").click();
  });

});