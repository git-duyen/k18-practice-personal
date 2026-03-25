import { test } from "@playwright/test";
test("test 01", async ({ page }) => {
  await test.step("Click link", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });
  await test.step("Fill fields", async () => {
    await page.locator("//input[@id='username']").fill("Hieu Nguyen");
    await page.locator("//input[@id='email']").fill("email@gmail.com");
    await page.locator("//input[@id='male']").check();
    await page.locator("//input[@id='reading']").check();
    await page
      .locator("//select[@id='interests']")
      .selectOption({ label: "Art" });
    await page
      .locator("//select[@id='country']")
      .selectOption({ label: "Canada" });
    await page.locator("//input[@id='dob']").fill("1994-09-07");
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/source/test.txt");
    await page.locator("//textarea[@id='bio']").fill(`Hieu Nguyen dep zai`);
    await page.locator("//input[@id='rating']").fill("9");
    await page.locator("//label[@class='switch']").click();
    await page.locator("//input[@id='favcolor']").fill("#00ffd5");
    await page.locator("//input[@id='newsletter']").check();
    const box = await page.locator("//div[@id='starRating']").boundingBox();
    await page.mouse.click(box!.x + box!.width / 2, box!.y + box!.height / 2);
  });
  await test.step("Register", async () => {
    await page.locator("//button[text()='Register']").click();
  });
});
