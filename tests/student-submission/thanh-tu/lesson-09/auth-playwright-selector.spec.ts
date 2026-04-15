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
    const usernameInput = page.getByLabel('Username or Email Address');
    const passwordInput = page.getByLabel('Password',{exact: true});
    const loginButton = page.getByRole('button', { name: 'Log In' });

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
      const errorMessage = page.locator('#login_error'); // trường hợp này chưa có role rõ ràng
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toContainText(
        `Error: The username ${invalidUsername} is not registered on this site. If you are unsure of your username, try your email address instead.`,
      );
    });
  });

  test('@AUTH_002: Login success', async ({ page }) => {
    const usernameInput = page.getByLabel('Username or Email Address');
    const passwordInput = page.getByLabel('Password',{exact: true});
    const loginButton = page.getByRole('button', { name: 'Log In' });

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
      const dashboardHeading = page.getByRole('heading', { name: 'Dashboard', level: 1 });
      await expect(dashboardHeading).toBeVisible();
    });

    await test.step('Expect h2 headings "At a Glance" and "Activity" are visible', async () => {
      await expect(page.getByRole('heading', { name: 'At a Glance', level: 2 })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Activity', level: 2 })).toBeVisible();
    });
  });
});
