import { test, expect, Page } from '@playwright/test';

// ===== Helper functions =====
async function login(page: Page, username: string, password: string) {
  await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');

  const userInput = page.locator('#user_login');
  const passInput = page.locator('#user_pass');

  await userInput.fill(username);
  await expect(userInput).toHaveValue(username);
  await passInput.fill(password);
  await expect(passInput).toHaveValue(password);

  await page.click('#wp-submit');

  await page.waitForURL(/wp-admin/);
}

async function logout(page: Page) {
  const avatar = page.locator('#wp-admin-bar-my-account');
  const btnLogOut = page.locator('#wp-admin-bar-logout a');

  await avatar.hover();

  await expect(btnLogOut).toBeVisible();
  await btnLogOut.click();
}

async function deleteUser(page: Page, username: string) {
  await page.click('#menu-users');
  await page.locator('#user-search-input').pressSequentially(username, { delay: 20 });
  await page.click('#search-submit');

  const row = page.locator(`tr:has(a:has-text("${username}"))`);
  await row.hover();
  await row.locator('.submitdelete').click();

  const deleteAllRadio = page.locator('#delete_option0');
  if (await deleteAllRadio.isVisible()) {
    await deleteAllRadio.check();
  }

  await page.click('#submit');
  await expect(page.locator(`tr:has(a:has-text("${username}"))`)).not.toBeVisible();
}

const adminUsername = 'betterbytes.academy.admin';
const adminPassword = 'StrongPass@BetterBytesAcademy';
let createdUsername: string | null = null;

test.describe('ACCOUNT - Account', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, adminUsername, adminPassword);
  });

  test.afterEach(async ({ page }) => {
    if (createdUsername) {
      await logout(page);
      await login(page, adminUsername, adminPassword);
      await deleteUser(page, createdUsername);
      createdUsername = null;
    }
  });

  test('@ACC_001: Create account with editor permission', async ({ page }) => {
    const addUserBtn = page.locator('.page-title-action');
    const newUsername = 'e101-thanhtu';
    const newPassword = 'StrongPass@E101ThanhTu';
    const newMail = 'e101ThanhTu@example.com';

    await test.step('Click User tab', async () => {
      await page.click('#menu-users');
    });

    await test.step('Verify User heading is visible', async () => {
      await expect(page.locator('h1')).toHaveText('Users');
    });

    await test.step('Verify Add User button is enabled', async () => {
      await expect(addUserBtn).toBeEnabled();
    });

    await test.step('Add new user with role editor', async () => {
      await addUserBtn.click();
      await page.fill('#user_login', newUsername);
      await expect(page.locator('#user_login')).toHaveValue(newUsername);
      await page.fill('#email', newMail);
      await expect(page.locator('#email')).toHaveValue(newMail);
      await page.fill('#first_name', 'E101');
      await expect(page.locator('#first_name')).toHaveValue('E101');
      await page.fill('#last_name', 'ThanhTu');
      await expect(page.locator('#last_name')).toHaveValue('ThanhTu');
      await page.locator('#pass1').fill('');
      await page.locator('#pass1').pressSequentially(newPassword, { delay: 50 });
      await expect(page.locator('#pass1')).toHaveValue(newPassword);
      await page.selectOption('#role', 'editor');
      await page.click('#createusersub');
      await expect(page.locator('#message')).toContainText('New user created.');
      createdUsername = newUsername;
    });

    await test.step('Log Out admin account', async () => {
      await logout(page);
    });

    await test.step('Login with created account', async () => {
      await login(page, newUsername, newPassword);
    });

    await test.step('Verify editor visible menus', async () => {
      await expect(page.locator('#menu-dashboard')).toBeVisible();
      await expect(page.locator('#menu-posts')).toBeVisible();
      await expect(page.locator('#menu-media')).toBeVisible();
      await expect(page.locator('#menu-pages')).toBeVisible();
      await expect(page.locator('#menu-comments')).toBeVisible();
      await expect(page.locator('#menu-users .wp-menu-name')).toBeVisible();
      await expect(page.locator('#menu-tools')).toBeVisible();
    });

    await test.step('Verify editor hidden menus', async () => {
      await expect(page.locator('#menu-appearance')).not.toBeVisible();
      await expect(page.locator('#menu-plugins')).not.toBeVisible();
    });
  });

  test('@ACC_002: Create account with subscriber permission', async ({ page }) => {
    const addUserBtn = page.locator('.page-title-action');
    const newUsername = 'e101-thanhtu-sub';
    const newPassword = 'StrongPass@E101ThanhTu';
    const newMail = 'e101ThanhTu_sub@example.com';

    await test.step('Click User tab', async () => {
      await page.click('#menu-users');
    });

    await test.step('Verify User heading is visible', async () => {
      await expect(page.locator('h1')).toHaveText('Users');
    });

    await test.step('Verify Add User button is enabled', async () => {
      await expect(addUserBtn).toBeEnabled();
    });

    await test.step('Add new user with role subscriber', async () => {
      await addUserBtn.click();
      await page.fill('#user_login', newUsername);
      await expect(page.locator('#user_login')).toHaveValue(newUsername);
      await page.fill('#email', newMail);
      await expect(page.locator('#email')).toHaveValue(newMail);
      await page.fill('#first_name', 'E101');
      await expect(page.locator('#first_name')).toHaveValue('E101');
      await page.fill('#last_name', 'ThanhTu');
      await expect(page.locator('#last_name')).toHaveValue('ThanhTu');
      await page.locator('#pass1').fill('');
      await page.locator('#pass1').pressSequentially(newPassword, { delay: 50 });
      await expect(page.locator('#pass1')).toHaveValue(newPassword);
      await page.selectOption('#role', 'subscriber');
      await page.click('#createusersub');
      await expect(page.locator('#message')).toContainText('New user created.');
      createdUsername = newUsername;
    });

    await test.step('Log Out admin account', async () => {
      await logout(page);
    });

    await test.step('Login with created account', async () => {
      await login(page, newUsername, newPassword);
    });

    await test.step('Verify subscriber visible menus', async () => {
      await expect(page.locator('#menu-dashboard')).toBeVisible();
      await expect(page.locator('#menu-users .wp-menu-name')).toBeVisible();
    });

    await test.step('Verify subscriber hidden menus', async () => {
      await expect(page.locator('#menu-appearance')).not.toBeVisible();
      await expect(page.locator('#menu-plugins')).not.toBeVisible();
      await expect(page.locator('#menu-posts')).not.toBeVisible();
      await expect(page.locator('#menu-media')).not.toBeVisible();
      await expect(page.locator('#menu-pages')).not.toBeVisible();
      await expect(page.locator('#menu-comments')).not.toBeVisible();
      await expect(page.locator('#menu-tools')).not.toBeVisible();
    });
  });
});