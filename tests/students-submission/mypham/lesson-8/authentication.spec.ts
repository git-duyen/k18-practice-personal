import { test, expect } from '@playwright/test';

test.describe('AUTH-Authenticaion', async () => {
    test.beforeEach(async ({ page }) => {
        await test.step('Go to login page', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        })
    });

    test('@AUTH_001:Login fail', async ({ page }) => {
        const userName = 'mypham';

        //Nhập username và password
        await test.step('Enter username and password', async () => {
            await page.locator("//input[@id='user_login']").fill(userName);
            await page.locator("//input[@id='user_pass']").fill('123');
        });

        //Click login button
        await test.step('Click login button', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        });

        //Verify error message
        const errorMessage = page.locator("//div[@id='login_error']");
        const expectedMessage = `Error: The username ${userName} is not registered on this site. If you are unsure of your username, try your email address instead.`;
        await expect(errorMessage).toHaveText(expectedMessage);
    });

    test('@AUTH_002:Login success', async ({ page }) => {
        const userName = 'betterbytes.academy.admin';
        const password = 'StrongPass@BetterBytesAcademy';

        //Nhập username và password
        await test.step('Enter username and password', async () => {
            await page.locator("//input[@id='user_login']").fill(userName);
            await page.locator("//input[@id='user_pass']").fill(password);
        });

        //Click login button
        await test.step('Click login button', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        });

        //Verify login success
        await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
        await expect(page.locator("//div[@class='wrap']/child::h1")).toHaveText('Dashboard');
    })
});