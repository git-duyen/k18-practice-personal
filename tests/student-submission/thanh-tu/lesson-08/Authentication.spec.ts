import { test, expect } from '@playwright/test';

test.describe('AUTH - Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
  });

  const invalidUsername = 'invalid_user';
  const invalidPassword = 'invalid_pass';
  const validUsername = 'betterbytes.academy.admin';
  const validPassword = 'StrongPass@BetterBytesAcademy';

  test('@AUTH_001: Login fail', async ({ page }) => {
    const usernameInput = page.locator("//input[@id='user_login']");
    const passwordInput = page.locator("//input[@id='user_pass']");
    const loginButton = page.locator("//input[@id='wp-submit']");

    await test.step('Enter invalid username and password', async () => {
      await usernameInput.fill(invalidUsername);
      await expect(usernameInput).toHaveValue(invalidUsername);
      await passwordInput.fill(invalidPassword);
      await expect(passwordInput).toHaveValue(invalidPassword);
    });

    await test.step('Click login button', async () => {
      await loginButton.click();
    });

    await test.step('Expect error message is displayed', async () => {
      const errorMessage = page.locator("//div[@id='login_error']");
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toContainText(
        `Error: The username ${invalidUsername} is not registered on this site. If you are unsure of your username, try your email address instead.`,
      );
    });
  });

  test('@AUTH_002: Login success', async ({ page }) => {
    const usernameInput = page.locator("//input[@id='user_login']");
    const passwordInput = page.locator("//input[@id='user_pass']");
    const loginButton = page.locator("//input[@id='wp-submit']");

    await test.step('Enter valid username and password', async () => {
      await usernameInput.fill(validUsername);
      await expect(usernameInput).toHaveValue(validUsername);
      await passwordInput.fill(validPassword);
      await expect(passwordInput).toHaveValue(validPassword);
    });

    await test.step('Click login button', async () => {
      await loginButton.click();
    });

    await test.step('Verify user is redirected to /wp-admin after login', async () => {
      await expect(page).toHaveURL(/wp-admin/);
    });

    await test.step('Expect dashboard heading is visible', async () => {
      const dashboardHeading = page.locator('h1');
      await expect(dashboardHeading).toHaveText('Dashboard');
    });
    
    await test.step('Expect h2 headings "At a Glance" and "Activity" are visible', async () => {
      const h2Headings = page.locator('h2');
      await expect(h2Headings).toContainText(['At a Glance', 'Activity']);
    });
  });
});
