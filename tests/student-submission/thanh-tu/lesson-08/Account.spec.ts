import { test, expect, Page } from '@playwright/test';

// ===== Helper functions =====
async function login(page: Page, username: string, password: string) {
  await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');

  const userInput = page.locator("//input[@id='user_login']");
  const passInput = page.locator("//input[@id='user_pass']");

  // Fill username and password and expect input has value username, password
  await userInput.fill(username);
  await expect(userInput).toHaveValue(username);
  await passInput.fill(password);
  await expect(passInput).toHaveValue(password);

  await page.click("//input[@id='wp-submit']");
  await page.waitForURL(/wp-admin/);
}

async function logout(page: Page) {
  const avatar = page.locator('//li[@id="wp-admin-bar-my-account"]');
  const btnLogOut = page.locator('//a[text()="Log Out"]');

  //Hover avatar to appear button Log Out
  await avatar.hover();

  // Expect Log Out button is visible and Click Log Out button
  await expect(btnLogOut).toBeVisible();
  await btnLogOut.click();
}

async function deleteUser(page: Page, username: string) {
  await page.click('//div[text()="Users"]');
  await page.locator("//input[@id='user-search-input']").pressSequentially(username, { delay: 20 });
  await page.click("//input[@id='search-submit']");

  //Find User row and click Delete
  const row = page.locator(`//tr[.//a[text()='${username}']]`);
  await row.hover();
  await page.locator(`//tr[.//a[text()='${username}']]//a[text()="Delete"]`).click();

  // Handle delete confirmation (radio button may appear)
  const deleteAllRadio = page.locator("//input[@id='delete_option0']");
  if (await deleteAllRadio.isVisible()) {
    await deleteAllRadio.check();
  }

  //Click Confirm Deletion
  await page.click('//input[@value="Confirm Deletion"]');
  await expect(page.locator(`//tr[.//a[text()='${username}']]`)).toHaveCount(0);
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
    const addUserBtn = page.locator('//a[@class="page-title-action" and text()="Add User"]');
    const newUsername = 'e101-thanhtu';
    const newPassword = 'StrongPass@E101ThanhTu';
    const newMail = 'e101ThanhTu@example.com';

    await test.step('Click User tab', async () => {
      await page.click('//div[text()="Users"]');
    });

    await test.step('Verify User heading is visible', async () => {
      await expect(page.locator('//h1')).toHaveText('Users');
    });

    await test.step('Verify Add User button is enabled', async () => {
      await expect(addUserBtn).toBeEnabled();
    });

    await test.step('Add new user with role editor', async () => {
      await addUserBtn.click();
      await page.fill('//input[@id="user_login"]', newUsername);
      await expect(page.locator('//input[@id="user_login"]')).toHaveValue(newUsername);
      await page.fill('//input[@id="email"]', newMail);
      await expect(page.locator('//input[@id="email"]')).toHaveValue(newMail);
      await page.fill('//input[@id="first_name"]', 'E101');
      await expect(page.locator('//input[@id="first_name"]')).toHaveValue('E101');
      await page.fill('//input[@id="last_name"]', 'ThanhTu');
      await expect(page.locator('//input[@id="last_name"]')).toHaveValue('ThanhTu');
      await page.locator('//input[@id="pass1"]').fill('');
      await page.locator('//input[@id="pass1"]').pressSequentially(newPassword, { delay: 50 });
      await expect(page.locator("//input[@id='pass1']")).toHaveValue(newPassword);
      await page.selectOption('//select[@id="role"]', 'editor');
      await page.click('//input[@id="createusersub"]');
      await expect(page.locator('//div[@id="message"]')).toContainText('New user created.');
      createdUsername = newUsername;
    });

    await test.step('Log Out admin account', async () => {
      await logout(page);
    });

    await test.step('Login with created account', async () => {
      await login(page, newUsername, newPassword);
    });

    await test.step('Verify editor visible menus', async () => {
      await expect(page.locator('//div[text()="Dashboard"]')).toBeVisible();
      await expect(page.locator('//div[text()="Posts"]')).toBeVisible();
      await expect(page.locator('//div[text()="Media"]')).toBeVisible();
      await expect(page.locator('//div[text()="Pages"]')).toBeVisible();
      await expect(page.locator('//div[text()="Comments "]')).toBeVisible();
      await expect(page.locator('//div[text()="Profile"]')).toBeVisible();
      await expect(page.locator('//div[text()="Tools"]')).toBeVisible();
    });

    await test.step('Verify editor hidden menus', async () => {
      await expect(page.locator('//div[text()="Appearance"]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Plugins"]')).toHaveCount(0);
    });
  });

  test('@ACC_002: Create account with subscriber permission', async ({ page }) => {
    const addUserBtn = page.locator('//a[@class="page-title-action" and text()="Add User"]');
    const newUsername = 'e101-thanhtu-sub';
    const newPassword = 'StrongPass@E101ThanhTu';
    const newMail = 'e101ThanhTu_sub@example.com';

    await test.step('Click User tab', async () => {
      await page.click('//div[text()="Users"]');
    });

    await test.step('Verify User heading is visible', async () => {
      await expect(page.locator('//h1')).toHaveText('Users');
    });

    await test.step('Verify Add User button is enabled', async () => {
      await expect(addUserBtn).toBeEnabled();
    });

    await test.step('Add new user with role subscriber', async () => {
      await addUserBtn.click();
      await page.fill('//input[@id="user_login"]', newUsername);
      await expect(page.locator('//input[@id="user_login"]')).toHaveValue(newUsername);
      await page.fill('//input[@id="email"]', newMail);
      await expect(page.locator('//input[@id="email"]')).toHaveValue(newMail);
      await page.fill('//input[@id="first_name"]', 'E101');
      await expect(page.locator('//input[@id="first_name"]')).toHaveValue('E101');
      await page.fill('//input[@id="last_name"]', 'ThanhTu');
      await expect(page.locator('//input[@id="last_name"]')).toHaveValue('ThanhTu');
      await page.locator('//input[@id="pass1"]').fill('');
      await page.locator('//input[@id="pass1"]').pressSequentially(newPassword, { delay: 50 });
      await expect(page.locator('//input[@id="pass1"]')).toHaveValue(newPassword);
      await page.selectOption('//select[@id="role"]', 'subscriber');
      await page.click('//input[@id="createusersub"]');
      await expect(page.locator('//div[@id="message"]')).toContainText('New user created.');
      createdUsername = newUsername;
    });

    await test.step('Log Out admin account', async () => {
      await logout(page);
    });

    await test.step('Login with created account', async () => {
      await login(page, newUsername, newPassword);
    });

    await test.step('Verify subscriber visible menus', async () => {
      await expect(page.locator('//div[text()="Dashboard"]')).toBeVisible();
      await expect(page.locator('//div[text()="Profile"]')).toBeVisible();
    });

    await test.step('Verify subscriber hidden menus', async () => {
      await expect(page.locator('//div[text()="Appearance"]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Plugins"]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Posts"]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Media"]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Pages"]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Comments "]')).toHaveCount(0);
      await expect(page.locator('//div[text()="Tools"]')).toHaveCount(0);
    });
  });
});
