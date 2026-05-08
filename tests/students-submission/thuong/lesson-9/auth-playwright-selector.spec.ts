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
      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(user.userName);
      await page.getByRole("textbox", { name: "Password" }).fill(user.passWord);
    });

    await test.step("Click button login", async () => {
      await page.getByRole("button", { name: "Log In" }).click();
      //Expected
      // Sử dụng Playwright Selector tìm trực tiếp qua nội dung văn bản
      await expect(
        page.getByText(
          `Error: The username ${user.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`,
        ),
      ).toBeVisible();
    });
  });

  test("@AUTH_002: Login success: ", async ({ page }) => {
    await test.step("Nhập vào thông tin username, password đúng", async () => {
      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(admin.userName);
      await page
        .getByRole("textbox", { name: "Password" })
        .fill(admin.passWord);
    });

    await test.step("Click button login", async () => {
      await page.getByRole("button", { name: "Log In" }).click();

      //Expected
      await expect(page).toHaveURL(/.*wp-admin/);
      await expect(
        page.getByRole("heading", { name: "Dashboard", level: 1 }),
      ).toHaveText("Dashboard");
    });
  });
});
