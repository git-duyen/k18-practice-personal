import { test, expect, type Page } from '@playwright/test';

const BASE_URL = 'https://pw-practice-dev.playwrightvn.com';

const ADMIN_USERNAME = 'betterbytes.academy.admin';
const ADMIN_PASSWORD = 'StrongPass@BetterBytesAcademy';

type UserRole = 'editor' | 'subscriber';

type TestUser = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
};

test.describe('ACCOUNT - Account with CSS selector', () => {
  test.describe.configure({ mode: 'serial' });

  let createdUser: TestUser | null = null;

  test.beforeEach(async ({ page }) => {
    createdUser = null;

    await test.step('Precondition: Login to admin page with admin account', async () => {
      await login(page, ADMIN_USERNAME, ADMIN_PASSWORD);

      await page.goto(`${BASE_URL}/wp-admin`);
      await expect(page.locator('#adminmenu')).toBeVisible();
    });
  });

  test.afterEach(async ({ page }) => {
    const userToDelete = createdUser;

    if (userToDelete !== null) {
      await test.step('Teardown: Login by admin account and delete created account', async () => {
        await deleteUserIfExists(page, userToDelete.username);
      });
    }
  });

  test('@ACC_001: Create account with editor permission', async ({ page }) => {
    const randomText = Date.now();

    const newUser: TestUser = {
      username: `k18-editor-${randomText}`,
      email: `k18-editor-${randomText}@example.com`,
      password: 'StrongPass@BetterBytesAcademy',
      firstName: 'Test',
      lastName: 'User',
      role: 'editor',
    };

    createdUser = newUser;

    await test.step('Step 1: Go to user management page', async () => {
      await page.goto(`${BASE_URL}/wp-admin/users.php`);

      await expect(page.locator('h1.wp-heading-inline')).toBeVisible();
      await expect(page.locator('h1.wp-heading-inline')).toHaveText('Users');

      const addUserButton = page.locator('.page-title-action');

      await expect(addUserButton).toBeVisible();
      await expect(addUserButton).toContainText(/Add New|Add User/);
      await expect(addUserButton).toHaveAttribute('href', /user-new\.php/);
    });

    await test.step('Step 2: Create new user with Editor role', async () => {
      await page.locator('.page-title-action').click();

      await expect(page).toHaveURL(/.*user-new\.php.*/);
      await expect(page.locator('h1').first()).toContainText(/Add New User|Add User/);

      await page.fill('#user_login', newUser.username);
      await page.fill('#email', newUser.email);
      await page.fill('#first_name', newUser.firstName);
      await page.fill('#last_name', newUser.lastName);

      await fillPassword(page, newUser.password);

      const notificationCheckbox = page.locator('#send_user_notification');

      if (await notificationCheckbox.isVisible().catch(() => false)) {
        await notificationCheckbox.uncheck();
      }

      await page.selectOption('#role', newUser.role);
      await page.click('#createusersub');

      await expect(page.locator('#message')).toBeVisible();
      await expect(page.locator('#message')).toContainText('New user created.');
    });

    await test.step('Step 3: Logout admin and login again with created editor user', async () => {
      await logout(page);
      await login(page, newUser.username, newUser.password);

      await page.goto(`${BASE_URL}/wp-admin`);
      await expect(page.locator('#adminmenu')).toBeVisible();
    });

    await test.step('Step 4: Verify menu permission of Editor account', async () => {
      await expectMenuVisible(page, 'Dashboard');
      await expectMenuVisible(page, 'Posts');
      await expectMenuVisible(page, 'Media');
      await expectMenuVisible(page, 'Pages');
      await expectMenuVisible(page, 'Comments');
      await expectMenuVisible(page, 'Profile');
      await expectMenuVisible(page, 'Tools');

      await expectMenuHidden(page, 'Appearance');
      await expectMenuHidden(page, 'Users');
      await expectMenuHidden(page, 'Plugins');
    });
  });

  test('@ACC_002: Create account with subscriber permission', async ({ page }) => {
    const randomText = Date.now();

    const newUser: TestUser = {
      username: `k18-subscriber-${randomText}`,
      email: `k18-subscriber-${randomText}@example.com`,
      password: 'StrongPass@BetterBytesAcademy',
      firstName: 'Subscriber',
      lastName: 'User',
      role: 'subscriber',
    };

    createdUser = newUser;

    await test.step('Step 1: Go to user management page', async () => {
      await page.goto(`${BASE_URL}/wp-admin/users.php`);

      await expect(page.locator('h1.wp-heading-inline')).toBeVisible();
      await expect(page.locator('h1.wp-heading-inline')).toHaveText('Users');

      const addUserButton = page.locator('.page-title-action');

      await expect(addUserButton).toBeVisible();
      await expect(addUserButton).toContainText(/Add New|Add User/);
      await expect(addUserButton).toHaveAttribute('href', /user-new\.php/);
    });

    await test.step('Step 2: Create new user with Subscriber role', async () => {
      await page.locator('.page-title-action').click();

      await expect(page).toHaveURL(/.*user-new\.php.*/);
      await expect(page.locator('h1').first()).toContainText(/Add New User|Add User/);

      await page.fill('#user_login', newUser.username);
      await page.fill('#email', newUser.email);
      await page.fill('#first_name', newUser.firstName);
      await page.fill('#last_name', newUser.lastName);

      await fillPassword(page, newUser.password);

      const notificationCheckbox = page.locator('#send_user_notification');

      if (await notificationCheckbox.isVisible().catch(() => false)) {
        await notificationCheckbox.uncheck();
      }

      await page.selectOption('#role', newUser.role);
      await page.click('#createusersub');

      await expect(page.locator('#message')).toBeVisible();
      await expect(page.locator('#message')).toContainText('New user created.');
    });

    await test.step('Step 3: Logout admin and login again with created subscriber user', async () => {
      await logout(page);
      await login(page, newUser.username, newUser.password);

      await page.goto(`${BASE_URL}/wp-admin`);
      await expect(page.locator('#adminmenu')).toBeVisible({ timeout: 10000 });
    });

    await test.step('Step 4: Verify menu permission of Subscriber account', async () => {
      await expectMenuVisible(page, 'Dashboard');
      await expectMenuVisible(page, 'Profile');

      await expectMenuHidden(page, 'Appearance');
      await expectMenuHidden(page, 'Users');
      await expectMenuHidden(page, 'Plugins');
      await expectMenuHidden(page, 'Posts');
      await expectMenuHidden(page, 'Media');
      await expectMenuHidden(page, 'Pages');
      await expectMenuHidden(page, 'Comments');
      await expectMenuHidden(page, 'Tools');
    });
  });
});

async function login(page: Page, username: string, password: string): Promise<void> {
  await page.goto(`${BASE_URL}/wp-admin`);

  await expect(page.locator('#loginform')).toBeVisible();

  await page.fill('#user_login', username);
  await page.fill('#user_pass', password);
  await page.click('#wp-submit');

  await page.waitForLoadState('domcontentloaded');

  const loginError = page.locator('#login_error');

  if (await loginError.isVisible().catch(() => false)) {
    throw new Error(`Login failed for user ${username}: ${await loginError.innerText()}`);
  }

  if (page.url().includes('wp-login.php')) {
    throw new Error(`Login failed or still on login page for user ${username}. Current URL: ${page.url()}`);
  }
}

async function logout(page: Page): Promise<void> {
  await page.goto(`${BASE_URL}/wp-login.php?action=logout`);

  const logoutLink = page.locator('a[href*="action=logout"]');
  if (await logoutLink.isVisible().catch(() => false)) {
    await logoutLink.click();
  }

  await expect(page.locator('#loginform')).toBeVisible();
}

async function fillPassword(page: Page, password: string): Promise<void> {
  const passwordInput = page.locator('#pass1');

  if (!(await passwordInput.isVisible().catch(() => false))) {
    const generatePasswordButton = page.locator('.wp-generate-pw');

    if (await generatePasswordButton.isVisible().catch(() => false)) {
      await generatePasswordButton.click();
    }
  }

  await page.fill('#pass1', password);
}

async function deleteUserIfExists(page: Page, username: string): Promise<void> {
  await logout(page);
  await login(page, ADMIN_USERNAME, ADMIN_PASSWORD);

  await page.goto(`${BASE_URL}/wp-admin/users.php?s=${username}`);

  const userRow = page.locator('tbody#the-list tr').filter({ hasText: username }).first();

  if (!(await userRow.isVisible().catch(() => false))) {
    return;
  }

  await userRow.hover();
  await userRow.locator('a.submitdelete').click();

  const deleteContentOption = page.locator('input[name="delete_option"][value="delete"]');

  if (await deleteContentOption.isVisible().catch(() => false)) {
    await deleteContentOption.check();
  }

  await page.locator('#submit').click();

  await page.goto(`${BASE_URL}/wp-admin/users.php?s=${username}`);
  await expect(page.locator('tbody#the-list tr').filter({ hasText: username })).toHaveCount(0);
}

async function expectMenuVisible(page: Page, menuName: string): Promise<void> {
  await expect(getAdminMenu(page, menuName)).toBeVisible();
}

async function expectMenuHidden(page: Page, menuName: string): Promise<void> {
  await expect(getAdminMenu(page, menuName)).toHaveCount(0);
}

function getAdminMenu(page: Page, menuName: string) {
  switch (menuName) {
    case 'Dashboard':
      return page.locator('#menu-dashboard');

    case 'Posts':
      return page.locator('#menu-posts');

    case 'Media':
      return page.locator('#menu-media');

    case 'Pages':
      return page.locator('#menu-pages');

    case 'Comments':
      return page.locator('#menu-comments');

    case 'Profile':
      return page.locator('#adminmenu a[href="profile.php"]');

    case 'Tools':
      return page.locator('#menu-tools');

    case 'Appearance':
      return page.locator('#menu-appearance');

    case 'Users':
      return page.locator('#adminmenu a[href="users.php"]');

    case 'Plugins':
      return page.locator('#menu-plugins');

    default:
      return page.locator('#adminmenu a').filter({ hasText: menuName });
  }
}