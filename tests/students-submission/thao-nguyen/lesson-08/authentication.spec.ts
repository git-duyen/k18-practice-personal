import { test , expect} from '@playwright/test';
test.describe("AUTH - authentication", () => {
    test.beforeEach(async ({page}) => 
    {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });
    test("Login failed", async ({page}) => {
        await page.locator("//input[@id='user_login']").fill("admin");
        await page.locator("//input[@id='user_pass']").fill("123456");
        await page.locator("//input[@id='wp-submit']").click();
        await expect(page.getByText('Error: The username admin is not registered on this site. If you are unsure of your username, try your email address instead.')).toBeVisible();
    });
    test("Login successfully", async ({page}) => {
        await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
        await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
        await page.locator("//input[@id='wp-submit']").click();
        const header = page.locator("//h1[text()='Dashboard']");
        await expect(header).toBeVisible();
    });
})
