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

            await page.getByRole('textbox', {name: 'Username or Email Address'}).fill(usn);
            await page.getByRole('textbox', {name: 'Password'}).fill(pw);
        });

        await test.step("Click button login", async ({ }) => {
            await page.getByRole('button', {name: 'Log In'}).click();
            await expect(page.getByText(`Error: The username ${usn} is not registered on this site. If you are unsure of your username, try your email address instead.`, {exact: false})).toHaveText(`Error: The username ${usn} is not registered on this site. If you are unsure of your username, try your email address instead.`)
        });
    });

    test("@AUTH_002: Login success", async ({ page }) => {
        await test.step("Nhập vào thông tin username, password đúng", async ({ }) => {
            const usn = 'betterbytes.academy.admin';
            const pw = 'StrongPass@BetterBytesAcademy';

            await page.getByRole('textbox', {name: 'Username or Email Address'}).fill(usn);
            await page.getByRole('textbox', {name: 'Password'}).fill(pw);
        });

        await test.step("Click button login", async ({ }) => {
            await page.getByRole('button', {name: 'Log In'}).click();
            await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            await expect(page.getByRole('heading', {name: 'Dashboard', level: 1})).toHaveText('Dashboard');
        });
    });
});