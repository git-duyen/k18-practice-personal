import { expect, test } from "@playwright/test";

test.describe("AUTH - Authentication", async () => {
  const user = {
    userName: "thuong",
    passWord: "123",
  };

  const admin = {
    userName: "betterbytes.academy.admin",
    passWord: "StrongPass@BetterBytesAcademy",
  };

  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
  });

  test(" @AUTH_001: Login fail ", async ({ page }) => {
    await test.step("Nhập vào thông tin username, password bị sai", async () => {
      await page.locator("input#user_login").fill(user.userName);
      await page.locator("input#user_pass").fill(user.passWord);
    });

    await test.step("Click button login", async () => {
      await page.locator("input#wp-submit").click();
      //Expected
      const error = page.locator("div#login_error");
      await expect(error).toHaveText(
        `Error: The username ${user.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`,
      );
    });
  });

  test("@AUTH_002: Login success: ", async ({ page }) => {
    await test.step("Nhập vào thông tin username, password đúng", async () => {
      await page.locator("input#user_login").fill(admin.userName);
      await page.locator("input#user_pass").fill(admin.passWord);
    });

    await test.step("Click button login", async () => {
      await page.locator("input#wp-submit").click();
      //Expected
      await expect(page).toHaveURL(/.*wp-admin/);
      await expect(page.locator("h1")).toHaveText("Dashboard");
    });
  });
});
