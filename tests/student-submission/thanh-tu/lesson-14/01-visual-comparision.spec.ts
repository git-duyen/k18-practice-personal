import { test, expect } from '@playwright/test';

test.use({
  video: 'on',
});

test.describe('Bài tập 1: Visual Testing với Playwright', () => {
  const adminUsername = 'betterbytes.academy.admin';
  const adminPassword = 'StrongPass@BetterBytesAcademy';

  test('Thực hiện login, mask dashboard và kiểm tra trang Tag', async ({ page }) => {
    await test.step('Login wp-admin', async () => {
      await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
      await page.locator('#user_login').fill(adminUsername);
      await page.locator('#user_pass').fill(adminPassword);
      await page.locator('#wp-submit').click();

      // await expect(page).toHaveURL(/.*wp-admin\/$/);
      await expect(page).toHaveURL(/wp-admin/);
    });

    await test.step('Screenshot Dashboard with Mask Block', async () => {
      const activityBlock = page.locator('#dashboard_activity');
      const atGlanceBlock = page.locator('#dashboard_right_now');

      await expect(page).toHaveScreenshot('dashboard-masked.png', {
        mask: [activityBlock, atGlanceBlock],
        maskColor: '#7134eb',
      });
    });

    await test.step('Screenshot Tag Page', async () => {
      await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/edit-tags.php?taxonomy=post_tag');

      const tagListTable = page.locator('.wp-list-table');

      await expect(page).toHaveScreenshot('tags-page-fullpage.png', {
        fullPage: true,
        mask: [tagListTable],
      });
    });
  });
});
