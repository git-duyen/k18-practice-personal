import {test} from "@playwright/test";

test('Login success', async ({ page }) => {
    await test.step('Go to login page', async () => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    await test.step('Fill username', async () => {
        await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
    });

    await test.step('Fill password', async () => {
        await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
    });

    await test.step('Click login button', async () => {
        await page.locator("//input[@id='wp-submit']").click(); 
    });
});

    test('Login failed', async ({ page }) => {
    await test.step('Go to login page', async () => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    await test.step('Fill username', async () => {
        await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
    });

    await test.step('Fill password', async () => {
        await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy123");
    });

    await test.step('Click login button', async () => {
        await page.locator("//input[@id='wp-submit']").click(); 
    });
});