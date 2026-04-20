import { test } from "@playwright/test";

test("Bai 1", async ({ page }) => {
  await test.step("Truy cap trang Playwrightvn", async () => {
    await page.goto(`https://material.playwrightvn.com/`);
  });

  await test.step("Click Bai 1", async () => {
    await page
      .locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]')
      .click();
  });

  await test.step("Nhap Username", async () => {
    await page.locator('//input[@id="username"]').fill("Lam Tan");
  });

  await test.step("Nhap Email", async () => {
    await page
      .locator('//input[@id="email"]')
      .pressSequentially("lamtan1411@gmail.com", { delay: 100 });
  });

  await test.step("Chon Gender", async () => {
    await page.locator('//input[@value="male"]').check();
  });

  await test.step("Chon Hobbies", async () => {
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
  });

  await test.step("Chon Interests", async () => {
    await page
      .locator('//select[@id="interests"]')
      .selectOption({ label: "Technology" });
  });

  await test.step("Chon Country", async () => {
    await page
      .locator('//select[@id="country"]')
      .selectOption({ label: "Canada" });
  });

  await test.step("Nhap Date of Birth", async () => {
    const dobInput = page.locator('//input[@id="dob"]');
    await dobInput.click();
    await dobInput.fill("2003-11-14");
  });

  await test.step("Chon Profile Picture", async () => {
    await page
      .locator('//input[@id="profile"]')
      .setInputFiles("tests/data-test/data-test.txt");
  });

  await test.step("Nhap Biography", async () => {
    await page
      .locator('//textarea[@id="bio"]')
      .pressSequentially("Xin chao toi la Lam Tan", { delay: 100 });
  });

  await test.step("Chon Rate Us", async () => {
    await page.locator('//input[@id="rating"]').fill("9");
  });

  await test.step("Chon Favorite Color", async () => {
    await page.locator('//input[@id="favcolor"]').fill("#5cc9ff");
  });

  await test.step("Hover Newsletter", async () => {
    await page.locator('//div[contains(text(),"Hover over me")]').hover();
    await page.locator('//input[@id="newsletter"]').check();
  });

  await test.step("Chon Enable Feature", async () => {
    await page.locator('//input[@id="toggleOption"]').isChecked();
  });

  await test.step("Rating 4.5 Star", async () => {
    const rating = await page.locator('//div[@id="starRating"]');
    const star = 4.5;

    const { width, height } = await rating.evaluate((el) => ({
      width: el.clientWidth,
      height: el.clientHeight,
    }));

    await rating.click({
      position: {
        x: width * (star / 5),
        y: height / 2,
      },
    });
  });

  await test.step("Custom date khi bam dang ky", async () => {
    const date = new Date().toISOString().split("T")[0];

    await page.evaluate(() => {
      document.querySelector("#customDate")?.removeAttribute("readonly");
    });

    await page.locator('//input[@id="customDate"]').fill(date);
  });

  await test.step("Bam Register", async () => {
    await page.locator('//button[text()="Register"]').click();
  });
});
