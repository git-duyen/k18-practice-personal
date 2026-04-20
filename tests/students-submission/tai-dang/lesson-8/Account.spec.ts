import { test, expect, Page } from '@playwright/test';

const VALID_USERNAME = 'betterbytes.academy.admin';
const VALID_PASSWORD = 'StrongPass@BetterBytesAcademy';

const EMAIL = `ductai${generateRandomString(3)}@gmail.com`;
const COURSE = 'k18';
const NAME = 'tai';
const USERNAME = `${COURSE}-${NAME}${generateRandomString(3)}`;
const WEBSITE = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

let createdUsername: string | null = null;

test.beforeEach(async ({ page }) => {
    await page.goto(`${WEBSITE}`);
    createdUsername = null;
});
test.afterEach(async ({ page }) => {
    if (createdUsername) {
        await logout(page);
        await loginAdmin(page);
        await deleteUser(page, createdUsername);
    }
});



test.describe('ACCOUNT - Account', () => {
    test('@ACC_001 - Create account with editor permission', async ({ page }) => {

        await test.step('Go to user page', async () => {
            logIn(page, VALID_USERNAME, VALID_PASSWORD);
            await expect(page).toHaveURL(/.*wp-admin/);
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
            await page.locator(`//li[@id='menu-users']//div[text()='Users']//parent::a`).click();
            // Màn hình user hiển thị: Heading "Users" visible, button "Add User" được enable
            await expect(page.locator("//*[@class='wp-heading-inline']")).toBeVisible();
            const addUserButton = page.getByRole('link', { name: 'Add User' }).nth(1);
            await expect(addUserButton).toBeEnabled();
            await addUserButton.click();
        });

        //get password
        let passwordField = await page.locator('#pass1').getAttribute('data-pw') ?? '';
        await test.step('Add user', async () => {
            const userName = page.getByLabel('Username');
            const email = page.locator('#email');
            const firstName = page.getByLabel('First Name');
            const lastName = page.getByLabel('Last Name');
            const webSite = page.getByLabel('Website');

            await userName.fill(USERNAME);
            await email.fill(EMAIL);
            await firstName.fill(COURSE);
            await lastName.fill(NAME);
            await webSite.fill(WEBSITE);
            await page.locator(`//select[@name='role']`).selectOption({ label: "Editor" });
            await page.locator('#createusersub').click();
        });
        await test.step('Verify user created successfully', async () => {
            const successMessage = page.locator('#message');
            await expect(successMessage).toHaveText('New user created. Edit user');
            createdUsername = USERNAME;
        });
        await test.step('Login with new account', async () => {
            // đăng xuất và đăng nhập lại với user vừa tạo
            const menuButton = page.locator(`//li[@id='wp-admin-bar-my-account']/a[@role='menuitem']`);
            const logOutButton = page.locator(`//li[@id='wp-admin-bar-logout']/a`);
            await expect(menuButton).toBeVisible();
            await menuButton.hover();
            await expect(logOutButton).toBeVisible();
            await logOutButton.click();
            logIn(page, USERNAME, passwordField);
            await expect(page).toHaveURL(/.*wp-admin/);
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

            //Expect menu visible: Dashboard, Posts, Media, Pages, Comments, Profile, Tools
            const expectedMenuItems = ['Dashboard', 'Posts', 'Media', 'Pages', 'Comments', 'Profile', 'Tools'];
            for (const menuItem of expectedMenuItems) {
                await expect(page.locator(`//div[@class='wp-menu-name' and contains(text(), '${menuItem}')]`)).toBeVisible();
            }
            const unexpectedMenuItems = ['Appearance', 'Plugins', 'Users'];
            for (const menuItem of unexpectedMenuItems) {
                await expect(page.locator(`//div[@class='wp-menu-name' and contains(text(), '${menuItem}')]`)).toBeHidden();
            }
        });
    });

    test('@ACC_002 - Create account with subscriber permission', async ({ page }) => {
         await test.step('Go to user page', async () => {
            logIn(page, VALID_USERNAME, VALID_PASSWORD);
            await expect(page).toHaveURL(/.*wp-admin/);
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
            await page.locator(`//li[@id='menu-users']//div[text()='Users']//parent::a`).click();
            // Màn hình user hiển thị: Heading "Users" visible, button "Add User" được enable
            await expect(page.locator("//*[@class='wp-heading-inline']")).toBeVisible();
            const addUserButton = page.getByRole('link', { name: 'Add User' }).nth(1);
            await expect(addUserButton).toBeEnabled();
            await addUserButton.click();
        });

        //get password
        let passwordField = await page.locator('#pass1').getAttribute('data-pw') ?? '';
        await test.step('Add user', async () => {
            const userName = page.getByLabel('Username');
            const email = page.locator('#email');
            const firstName = page.getByLabel('First Name');
            const lastName = page.getByLabel('Last Name');
            const webSite = page.getByLabel('Website');

            await userName.fill(USERNAME);
            await email.fill(EMAIL);
            await firstName.fill(COURSE);
            await lastName.fill(NAME);
            await webSite.fill(WEBSITE);
            await page.locator(`//select[@name='role']`).selectOption({ label: "Subscriber" });
            await page.locator('#createusersub').click();
        });
        await test.step('Verify user created successfully', async () => {
            const successMessage = page.locator('#message');
            await expect(successMessage).toHaveText('New user created. Edit user');
            createdUsername = USERNAME;
        });
        await test.step('Login with new account', async () => {
            // đăng xuất và đăng nhập lại với user vừa tạo
            const menuButton = page.locator(`//li[@id='wp-admin-bar-my-account']/a[@role='menuitem']`);
            const logOutButton = page.locator(`//li[@id='wp-admin-bar-logout']/a`);
            await expect(menuButton).toBeVisible();
            await menuButton.hover();
            await expect(logOutButton).toBeVisible();
            await logOutButton.click();
            logIn(page, USERNAME, passwordField);
            await expect(page).toHaveURL(/.*wp-admin/);

            //Expect menu visible: Dashboard, Profile
            const expectedMenuItems = ['Dashboard', 'Profile'];
            for (const menuItem of expectedMenuItems) {
                await expect(page.locator(`//div[@class='wp-menu-name' and contains(text(), '${menuItem}')]`)).toBeVisible();
            }
            const unexpectedMenuItems = ['Appearance', 'Users', 'Plugins', 'Posts', 'Media', 'Pages', 'Comments', 'Tools'];
            for (const menuItem of unexpectedMenuItems) {
                await expect(page.locator(`//div[@class='wp-menu-name' and contains(text(), '${menuItem}')]`)).toBeHidden();
            }
        });
    });

});

async function logout(page: Page) {
    const menuButton = page.locator(`//li[@id='wp-admin-bar-my-account']/a[@role='menuitem']`);
    const logOutButton = page.locator(`//li[@id='wp-admin-bar-logout']/a`);
    await menuButton.hover();
    await expect(logOutButton).toBeVisible();
    await logOutButton.click();
}

async function loginAdmin(page: Page) {
    await logIn(page, VALID_USERNAME, VALID_PASSWORD);
}

async function deleteUser(page: Page, username: string) {
    // Điều hướng đến trang Users
    await page.locator(`//li[@id='menu-users']//div[text()='Users']//parent::a`).click();
    // Màn hình user hiển thị: Heading "Users" visible
    await expect(page.locator("//*[@class='wp-heading-inline']")).toBeVisible();
    
    // Tìm kiếm user
    await page.locator(`#user-search-input`).fill(username);
    await page.locator(`#search-submit`).click();
    
    // Xóa user
    await page.locator(`//a[contains(text(), '${username}')]`).hover();
    await page.locator(`//a[@class='submitdelete']`).click();
    
    // Nếu là editor, chọn option xóa content
    if (test.info().title.includes('editor')) {
        await page.locator(`//input[@id='delete_option0']`).click();
    }
    
    // Confirm deletion
    await page.locator(`//input[@value='Confirm Deletion']`).click();
    await expect(page.locator('#message p')).toHaveText('User deleted.');
}

async function logIn(page: Page, username: string, password: string) {
    const userName = page.getByLabel('Username or Email Address');
    const passWord = page.locator('#user_pass');
    await expect(passWord).toBeEditable();
    await userName.fill(username);
    await passWord.fill(password);
    await page.getByRole('button', { name: 'Log In' }).click();
}

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
