import { test, expect } from '@playwright/test';

test.describe('AUTH - Authentication', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
  });

  test('@AUTH_001: Login fail', async ({ page }) => {
    const username = 'huệ';
    const password = '123';

    await page.locator('//input[@id="user_login"]').fill(username);
    await page.locator('//input[@id="user_pass"]').fill(password);

    await expect(page.locator('//input[@id="user_login"]')).toHaveValue(username);
    await expect(page.locator('//input[@id="user_pass"]')).toHaveValue(password);

    await page.locator('//input[@id="wp-submit"]').click();

    await expect(page.locator('//div[@id="login_error"]')).toContainText(
      `Error: The username ${username} is not registered on this site.If you are unsure of your username, try your email address instead.`
    );
  });

  test('@AUTH_002: Login success', async ({ page }) => {
    // Test data
    const username = 'admin';
    const password = 'password';

    // Step 1: Nhập username và password
    await page.locator('//input[@id="user_login"]').fill(username);
    await page.locator('//input[@id="user_pass"]').fill(password);

    // Verify dữ liệu nhập
    await expect(page.locator('//input[@id="user_login"]')).toHaveValue(username);
    await expect(page.locator('//input[@id="user_pass"]')).toHaveValue(password);

    // Step 2: Click Login
    await page.locator('//input[@id="wp-submit"]').click();

    // Expected
    await expect(page).toHaveURL(/.*wp-admin/);

    await expect(
      page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    