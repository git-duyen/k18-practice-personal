import { test, expect } from '@playwright/test';
test.use({ video: 'on' });
test.beforeEach('Login successfully', async ({ page }) => {
  await page.goto('https://pw-practice-dev.playwrightvn.com/wp-login.php');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('betterbytes.academy.admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('StrongPass@BetterBytesAcademy');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
})
test('should match dashboard screenshot after login', async ({ page }) => {
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [
      page.locator("#dashboard_right_now"),
      page.locator("#dashboard_activity")
    ],
    maskColor: '#7134eb'
  })
});
test('mask tag', async ({ page }) => {
  await page.getByRole('link', { name: 'Posts', exact: true }).click();
  await page.getByRole('link', { name: 'Tags' }).click();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [
      page.locator('#the-list'),
    ],
    maskColor: '#7134eb'
  })
});