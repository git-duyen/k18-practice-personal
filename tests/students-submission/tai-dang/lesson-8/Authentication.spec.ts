import { test, expect, Page } from '@playwright/test';

const VALID_USERNAME = 'betterbytes.academy.admin';
const VALID_PASSWORD = 'StrongPass@BetterBytesAcademy';
const INVALID_USERNAME = 'invalid_admin';
const INVALID_PASSWORD = 'invalid_admin123';
const WEBSITE = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

test.beforeEach(async ({ page }) => {
  await page.goto(`${WEBSITE}`);
});


test.describe('AUTH - Authentication', () => {
  test('@AUTH_001 - Login fail', async ({ page }) => {
    const userName = page.getByLabel('Username or Email Address');
    const passWord = page.locator('#user_pass');
    await userName.fill(INVALID_USERNAME);
    await passWord.fill(INVALID_PASSWORD);
    await page.getByRole('button', { name: 'Log In' }).click();

    await expect(page.locator('#login_error')).toHaveText('Error: The username ' + INVALID_USERNAME + ' is not registered on this site. If you are unsure of your username, try your email address instead.');
  });
  test('@AUTH_002 - Login pass', async ({ page }) => {
    const userName = page.getByLabel('Username or Email Address');
    const passWord = page.locator('#user_pass');
    await userName.fill(VALID_USERNAME);
    await passWord.fill(VALID_PASSWORD);
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page).toHaveURL(/.*wp-admin/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

});

