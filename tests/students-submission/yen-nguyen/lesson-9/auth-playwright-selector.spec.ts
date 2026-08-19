import {test, expect, Page} from '@playwright/test';

const LOGIN_URL = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

const USERNAME = 'betterbytes.academy.admin';
const PASSWORD = 'StrongPass@BetterBytesAcademy';

async function gotoLoginPage(page: Page) {
    await page.goto(LOGIN_URL);
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
}

test.describe('AUTH - Authentication', () => {
    test.beforeEach(async ({ page }) => {
        await gotoLoginPage(page);
    });

    test('@AUTH_001 : Login fail', async ({ page }) => {
        await test.step('Enter invalid username and password', async () => {
            await page.getByLabel('Username or Email Address', { exact: true }).fill('invalid_user');
            await page.getByLabel('Password', { exact: true }).fill('invalid_pass');
        });

        await test.step('Click on login button', async () => {
            await page.getByRole('button', { name: 'Log In' }).click();
        });

        await test.step('Verify error message is displayed', async () => {
            const errorMessage = page.locator('#login_error');
            await expect(errorMessage).toBeVisible();
            await expect(errorMessage).toContainText('If you are unsure of your username, try your email address instead.');
        });
    });

    test('@AUTH_002 : Login success', async ({ page }) => {
        await test.step('Enter valid username and password', async () => {
            await page.getByLabel('Username or Email Address', { exact: true }).fill(USERNAME);await page.getByLabel('Username or Email Address', { exact: true }).fill(USERNAME);
            await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
        });

        await test.step('Click on login button', async () => {
            await page.getByRole('button', { name: 'Log In' }).click();
        });

        await test.step('Verify user is redirected to the dashboard', async () => {
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        });
    });
});