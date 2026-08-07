import { test, expect } from '@playwright/test';

test.describe("Practice site", async() => {

    test.beforeEach(async({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });

    test("@AUTH_001: Login fail", async({ page }) => {
    await test.step("Input wronguser name and password", async() => {
        const userNameInput = page.locator("//input[@id='user_login']");
        const userPassInput = page.locator("//input[@id='user_pass']");
        const userName = "abcd";

        await userNameInput.fill(userName);
        await userPassInput.fill("123456");

        await page.locator("//input[@id='wp-submit']").click();

        const errorMessage = await page.locator("//div[@id='login_error']").textContent();
        expect(errorMessage).toContain(`The username ${userName} is not registered on this site. If you are unsure of your username, try your email address instead`);
    });

});
    test("AUTH_002:Login success", async({page}) => {
    await test.step("Input correct user name and password", async() => {
        const userNameInput = page.locator("//input[@id='user_login']");
        const userPassInput = page.locator("//input[@id='user_pass']");

        await userNameInput.fill("betterbytes.academy.admin");
        await userPassInput.fill("StrongPass@BetterBytesAcademy");
        await page.locator("//input[@id='wp-submit']").click();

        await expect(page).toHaveURL(/.*wp-admin/);
        await expect(page.locator("h1")).toContainText("Dashboard");

    });

});

});


