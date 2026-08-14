import { test, expect, Locator } from '@playwright/test';

test.describe('AUTH - Authentication', () => {

    let userName: Locator;
    let userPass: Locator;
    let submitButton: Locator;

    test.beforeEach(async ({ page }) => {

        userName = page.locator("//input[@id='user_login']");
        userPass = page.locator("//input[@id='user_pass']");
        submitButton = page.locator("//input[@id='wp-submit']");

        await test.step('Go to the login page', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        });
    });

    test('AUTH_001: Login Fail', async ({ page }) => {
        const invalidUserName = "thuqua";

        await test.step('1. Fill invalid username and password ', async () => {
            await userName.fill(invalidUserName);
            await userPass.fill("123456");
        });

        await test.step('2. Click on submit button', async () => {
            await submitButton.click();
        });

        await test.step('3. Verify error message', async () => {
            await expect(page.locator("//div[@id='login_error']")).toContainText(`The username ${invalidUserName} is not registered on this site. If you are unsure of your username, try your email address instead.`);
        });
    });

    test('AUTH_002: Login Success', async ({ page }) => {
        await test.step('1. Fill valid username and password', async () => {
            await userName.fill("betterbytes.academy.admin");
            await userPass.fill("StrongPass@BetterBytesAcademy");
        });

        await test.step('2. Click on submit button', async () => {
            await submitButton.click();
        });

        await test.step('3. Verify successful login', async () => {
            await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            await expect(page.locator("//h1[text()='Dashboard']")).toContainText("Dashboard");
        });
    });
}); 
