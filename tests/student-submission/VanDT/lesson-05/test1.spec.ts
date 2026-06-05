import { test } from '@playwright/test';

test('bai1', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com');
  await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
  await page.locator("//input[@id='username']").fill("dovan");
  await page.locator("//input[@id='email']").fill("vandt185@gmail.com");
  await page.locator("//input[@id='female']").check();
  await page.locator("//input[@id='reading']").check();
  await page.locator("//input[@id='traveling']").check();
  await page.locator("//input[@id='cooking']").check();
  await page.locator("//select[@id='interests']").selectOption("science");
  await page.locator("//select[@id='country']").selectOption("usa");
  await page.locator("//input[@id='dob']").fill("1994-05-18");
  await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/data/data_test");
  await page.locator("//textarea[@id='bio']").fill("không có gì để giới thiệu :)");
  await page.locator("//input[@id='rating']").fill("8");
  await page.locator("//input[@id='favcolor']").fill("#30e834");
  await page.locator("//span[@class='slider round']").setChecked(true);
  //await page.locator("//div[@class='rating-star']").click();
  //await page.locator("//input[@id='customDate']").fill("2026-05-28");
  await page.locator("//button[@type ='submit']").click();
});