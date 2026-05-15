import { test, expect, Page } from '@playwright/test';

// ===== Helper functions =====
async function login(page: Page, username: string, password: string) {
  await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');

  const userInput = page.getByRole('textbox', { name: 'Username' });
  const passInput = page.getByRole('textbox', { name: 'Password' });

  await userInput.fill(username);
  await expect(userInput).toHaveValue(username);

  await passInput.fill(password);
  await expect(passInput).toHaveValue(password);

  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForURL(/wp-admin/);
}

async function logout(page: Page) {
  const avatar = page.getByRole('menuitem', { name: /howdy/i })
  const btnLogOut = page.locator('#wp-admin-bar-logout').getByText('Log Out');
  
  await avatar.hover();
  await btnLogOut.waitFor({ state: 'visible' });
  await btnLogOut.click();
}

async function deleteUser(page: Page, username: string) {
  await page.locator('#adminmenu').getByRole('link', { name: 'Users', exact: true }).click();

  await page.getByLabel('Search Users').pressSequentially(username, { delay: 20 });
  await page.getByRole('button', { name: 'Search Users' }).click();

  const row = page.getByRole('row', { name: username });
  await row.hover();
  await row.getByRole('link', { name: 'Delete' }).click();

  const deleteAllRadio = page.getByText('Delete all content');
  if (await deleteAllRadio.isVisible()) {
    await deleteAllRadio.check();
  }

  await page.getByRole('button', { name: 'Confirm Deletion' }).click();

  await expect(page.getByRole('row', { name: username })).not.toBeVisible();
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
    const addUserBtn = page.locator('.wrap').getByRole('link', { name: 'Add User' });

    const newUsername = 'e101-thanhtu';
    const newPassword = 'StrongPass@E101ThanhTu';
    const newMail = 'e101ThanhTu@example.com';

    await test.step('Click User tab', async () => {
      await page.locator('#adminmenu').getByRole('link', { name: 'Users', exact: true }).click();
    });

    await test.step('Verify User heading is visible', async () => {
      await expect(page.getByRole('heading', { name: 'User', level: 1 })).toBeVisible();
    });

    await test.step('Verify Add User button is enabled', async () => {
      await expect(addUserBtn).toBeEnabled();
    });

    await test.step('Add new user with role editor', async () => {
      await addUserBtn.click();
      await page.getByRole('textbox', { name: 'Username' }).fill(newUsername);
      await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue(newUsername);
      await page.getByRole('textbox', { name: 'Email' }).fill(newMail);
      await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue(newMail);
      await page.getByRole('textbox', { name: 'First Name' }).fill('E101');
      await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('E101');
      await page.getByRole('textbox', { name: 'Last Name' }).fill('ThanhTu');
      await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue('ThanhTu');
      await page.getByRole('textbox', { name: 'Password' }).fill('');
      await page.getByRole('textbox', { name: 'Password' }).pressSequentially(newPassword, { delay: 50 });
      await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue(newPassword);
      await page.getByRole('combobox', { name: 'Role' }).selectOption('Editor');
      await page.getByRole('button', { name: 'Add User' }).click();
      await expect(page.getByText(/New user created/)).toContainText('New user created.');
      createdUsername = newUsername;
    });

    await test.step('Log Out admin account', async () => {
      await logout(page);
    });

    await test.step('Login with created account', async () => {
      await login(page, newUsername, newPassword);
    });

    await test.step('Verify editor visible menus', async () => {
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Posts', exact: true })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Media', exact: true })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Pages', exact: true })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Comments' })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Tools', exact: true })).toBeVisible();
    });

    await test.step('Verify editor hidden menus', async () => {
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Appearance', exact: true })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Plugins', exact: true })).not.toBeVisible();
    });
  });

  test('@ACC_002: Create account with subscriber permission', async ({ page }) => {
    const addUserBtn = page.locator('.wrap').getByRole('link', { name: 'Add User' });

    const newUsername = 'e101-thanhtu-sub';
    const newPassword = 'StrongPass@E101ThanhTu';
    const newMail = 'e101ThanhTu_sub@example.com';

    await test.step('Click User tab', async () => {
      await page.locator('#adminmenu').getByRole('link', { name: 'Users', exact: true }).click();
    });

    await test.step('Verify User heading is visible', async () => {
      await expect(page.getByRole('heading', { name: 'User', level: 1 })).toBeVisible();
    });

    await test.step('Verify Add User button is enabled', async () => {
      await expect(addUserBtn).toBeEnabled();
    });

    await test.step('Add new user with role subscriber', async () => {
      await addUserBtn.click();
      await page.getByRole('textbox', { name: 'Username' }).fill(newUsername);
      await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue(newUsername);
      await page.getByRole('textbox', { name: 'Email' }).fill(newMail);
      await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue(newMail);
      await page.getByRole('textbox', { name: 'First Name' }).fill('E101');
      await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('E101');
      await page.getByRole('textbox', { name: 'Last Name' }).fill('ThanhTu');
      await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue('ThanhTu');
      await page.getByRole('textbox', { name: 'Password' }).fill('');
      await page.getByRole('textbox', { name: 'Password' }).pressSequentially(newPassword, { delay: 50 });
      await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue(newPassword);
      await page.getByRole('combobox', { name: 'Role' }).selectOption('Subscriber');
      await page.getByRole('button', { name: 'Add User' }).click();
      await expect(page.getByText(/New user created/)).toContainText('New user created.');
      createdUsername = newUsername;
    });

    await test.step('Log Out admin account', async () => {
      await logout(page);
    });

    await test.step('Login with created account', async () => {
      await login(page, newUsername, newPassword);
    });

    await test.step('Verify subscriber visible menus', async () => {
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
    });

    await test.step('Verify subscriber hidden menus', async () => {
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Appearance', exact: true })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Plugins', exact: true })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Posts', exact: true })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Media', exact: true })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Pages', exact: true })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Comments' })).not.toBeVisible();
      await expect(page.locator('#adminmenu').getByRole('link', { name: 'Tools', exact: true })).not.toBeVisible();
    });
  });
});


