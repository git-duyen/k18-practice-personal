import { test, expect } from '@playwright/test';

test.describe("AUTH-Authentication", async () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Open page https://pw-practice-dev.playwrightvn.com/wp-admin", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        })
    });

    test("@AUTH_001: Login fail", async ({ page }) => {
        const usn = 'ngochanh';
        await test.step("Nhập vào thông tin username, password bị sai", async ({ }) => {
            const pw = '123456';

            await page.locator("input#user_login").fill(usn);
            await page.locator("input#user_pass").fill(pw);
        });

        await test.step("Click button login", async ({ }) => {
            await page.locator("input#wp-submit").click();
            await expect(page.locator("div#login_error")).toHaveText(`Error: The username ${usn} is not registered on this site. If you are unsure of your username, try your email address instead.`)
        });
    });

    test("@AUTH_002: Login success", async ({ page }) => {
        await test.step("Nhập vào thông tin username, password đúng", async ({ }) => {
            const usn = 'betterbytes.academy.admin';
            const pw = 'StrongPass@BetterBytesAcademy';

            await page.locator("input#user_login").fill(usn);
            await expect(page.locator("input#user_login")).toHaveValue(usn);

            await page.locator("input#user_pass").fill(pw);
            await expect(page.locator("input#user_pass")).toHaveValue(pw);
        });

        await test.step("Click button login", async ({ }) => {
            await page.locator("input#wp-submit").click();
            await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            await expect(page.locator("h1")).toHaveText('Dashboard');
        });
    });
});