import { test, expect } from "@playwright/test";
test.describe("aut_module", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
  });
  test("Login_fail", async ({ page }) => {
    //Tạo biến
    const falseName = "Hi123";
    const falsePass = "12234";
    const errorMsg = `Error: The username ${falseName} is not registered on this site. If you are unsure of your username, try your email address instead.`;
    //Thao tác
    await test.step("fill_username", async () => {
      await page.locator("//input[@id='user_login']").fill(falseName);
    });
    await test.step("fill_password", async () => {
      await page.locator("//input[@id='user_pass']").fill(falsePass);
    });
    await test.step("login", async () => {
      await page.locator("//input[@id='wp-submit']").click();
    });
    // Check
    await expect(page.getByText(`${errorMsg}`)).toBeVisible();
  });
  test("Login_success", async ({ page }) => {
    await test.step("fill_username", async () => {
      await page
        .locator("//input[@id='user_login']")
        .fill("betterbytes.academy.admin");
    });
    await test.step("fill_password", async () => {
      await page
        .locator("//input[@id='user_pass']")
        .fill("StrongPass@BetterBytesAcademy");
    });
    await test.step("login", async () => {
      await page.locator("//input[@id='wp-submit']").click();
    });
    await expect(page).toHaveURL(/.*wp-admin.*/);
    await expect(page.locator("//h1")).toContainText("Dashboard");

    await expect(
      page.getByRole("heading", { name: "Activity", level: 2 }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "At a Glance", level: 2 }),
    ).toBeVisible();

    //logout
    await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
    await page.locator("//li[@id='wp-admin-bar-logout']").click();
  });
});
