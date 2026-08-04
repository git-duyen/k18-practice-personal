import { test } from '@playwright/test';
import { MyLoginPage } from '../../pom/05-pom';


test('Login success', async ({ page }) => {
    const heading = page.locator("//h1");


    const loginPage = new MyLoginPage(page);

    await test.step('Goto login page', async () => {
        await loginPage.page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");

        // 100s
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

test('Login fail', async ({ page }) => {
    const loginPage = new MyLoginPage(page);

    await test.step('Goto login page', async () => {
        await loginPage.page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });

    await test.step('Fill username', async () => {
        await loginPage.fillUsername("betterbytes.academy.admin");
    });

    await test.step('Fill password', async () => {
        await loginPage.fillPassword("StrongPass@BetterBytesAcademy1234");
    });

    await test.step('Click login button', async () => {
        await loginPage.clickLogin();
    });
});