import { test } from '@playwright/test';
import { MyLoginPage } from './03-pom';

test('Login success', async ({ page }) => {
    const loginPage = new MyLoginPage(page);

    await test.step('Go to login page', async () => {
        await loginPage.page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    await test.step('Fill username', async () => {
        await loginPage.fillUsername("betterbytes.academy.admin");
    });

    await test.step('Fill password', async () => {
        await loginPage.fillPassword("StrongPass@BetterBytesAcademy");
    });

    await test.step('Click login button', async () => {
        await loginPage.clickLogin();
    });
});

test('Login failed', async ({ page }) => {
    const loginPage = new MyLoginPage(page);

    await test.step('Go to login page', async () => {
        await loginPage.page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    await test.step('Fill username', async () => {
        await loginPage.fillUsername("betterbytes.academy.admin");
    });

    await test.step('Fill password', async () => {
        await loginPage.fillPassword("StrongPass@BetterBytesAcademy123");
    });

    await test.step('Click login button', async () => {
        // await page.locator("//input[@id='wp-submit']").click(); 
        await loginPage.clickLogin();
    });
});