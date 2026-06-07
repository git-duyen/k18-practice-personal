import { test, expect } from '@playwright/test';


const VALID_USERNAME = 'betterbytes.academy.admin';
const VALID_PASSWORD = 'StrongPass@BetterBytesAcademy';

test.use({ video: 'on' });
test.describe('Many Concepts suite', async () => {
  test('Drag and Drop Test', async ({ page }) => {
    await test.step('Navigate to the website and click to ex 05', async () => {
      await page.goto('https://material.playwrightvn.com/');
      await page.getByText('Bài học 5: Puzzle drag and drop game').click();
    });
    await test.step('Drag and drop the pieces to the correct positions', async () => {


      for (let i = 1; i <= 4; i++) {
        const fromLoc = page.locator(`#piece-${i}`);
        const toLoc = page.locator(`//*[@data-piece='${i}']`);
        await fromLoc.dragTo(toLoc);
      }
    });
    await expect(page).toHaveScreenshot('drag-and-drop-result.png', {});
  });

  test('Video recording and screenshot comparison test', async ({ page }) => {
    await test.step('Navigate to the website and click to ex 06', async () => {
      await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
      const userName = page.getByLabel('Username or Email Address');
      const passWord = page.locator('#user_pass');
      await test.step('Nhập username và password hợp lệ', async () => {
        await userName.fill(VALID_USERNAME);
        await passWord.fill(VALID_PASSWORD);
      });
      await test.step('Click nút Login', async () => {
        await page.getByRole('button', { name: 'Log In' }).click();
      });
      await test.step('Kiểm tra đăng nhập thành công', async () => {
        await expect(page).toHaveURL(/.*wp-admin/);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
      });
      await test.step('Take a screenshot of the dashboard and compare with the baseline image', async () => {
        await expect(page).toHaveScreenshot({
          mask: [
            page.locator("#wpadminbar"),
            page.locator("#adminmenuwrap"),
          ],
          maskColor: '#7134eb'
        });
      });
      await test.step('Navigate to the Tags page and take a screenshot, compare with baseline', async () => {
        await page.locator("//*[@class='wp-menu-name'and text()='Posts']").hover();
        await page.locator("//a[text()='Tags']").click();
        await expect(page).toHaveScreenshot({
          fullPage: true,
          mask: [
            page.locator("//table[contains(@class,'list tags')]"),
          ],
          maskColor: '#7134eb'
        });
      });
    });
  });
});