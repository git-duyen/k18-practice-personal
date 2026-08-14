import { test, expect, Page } from '@playwright/test';
 
// ============================================================
// 1. Function to generate a random string of specified length
// ============================================================
function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomNumber(min: number = 100000, max: number = 999999): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//============================================================
// 2. Locator and Data for Account Management
//============================================================
const URLS = {
    wpAdmin: 'https://pw-practice-dev.playwrightvn.com/wp-admin',
    usersPage: 'https://pw-practice-dev.playwrightvn.com/wp-admin/users.php',
};

const LOGIN_FORM = {
    userName: "//input[@id='user_login']",
    password: "//input[@id='user_pass']",
    submitButton: "//input[@id='wp-submit']",
}; 

const USER_MENU = {
    myAccount: "//li[@id='wp-admin-bar-my-account']/a[@role='menuitem']",
    logout: "//li[@id='wp-admin-bar-logout']"
};

const ADD_USER_FORM = {
    addNewUserButton: "//a[@class='page-title-action']",
    userName: "//input[@id='user_login']",
    email: "//input[@id='email']",
    firstName: "//input[@id='first_name']",
    lastName: "//input[@id='last_name']",
    password: "//input[@id='pass1']",
    role: "//select[@id='role']",
    createUserButton: "//input[@id='createusersub']",
    message: "//div[@id='message']",
};

const DELETE_USER_FORM = {
    deleteOption: "//input[@id='delete_option0']",
    confirmDeleteButton: "//input[@id='submit']",
    message: "//div[@id='message']",
};

function menuItem(name: string) {
    return `//div[@class='wp-menu-name' and contains(text(),'${name}')]`;
}

const ADMIN_CREDENTIALS = {
    username: 'betterbytes.academy.admin',
    password: 'StrongPass@BetterBytesAcademy',
};

// ============================================================
// 3. Actions for Account Management
// ============================================================
async function login(page: Page, username: string, password: string) {
    await page.locator(LOGIN_FORM.userName).fill(username);
    await page.locator(LOGIN_FORM.password).fill(password);
    await page.locator(LOGIN_FORM.submitButton).click();
}

async function logout(page: Page) {
    await page.locator(USER_MENU.myAccount).hover();
    await page.locator(USER_MENU.logout).click();
}

async function createUser(page: Page, userName: string, email: string, firstName: string, lastName: string, password: string, role: string) {
    await page.locator(ADD_USER_FORM.addNewUserButton).click();
    await page.locator(ADD_USER_FORM.userName).fill(userName);
    await page.locator(ADD_USER_FORM.email).fill(email);
    await page.locator(ADD_USER_FORM.firstName).fill(firstName);
    await page.locator(ADD_USER_FORM.lastName).fill(lastName);
    await page.locator(ADD_USER_FORM.password).fill(password);
    await page.locator(ADD_USER_FORM.role).selectOption(role);
    await page.locator(ADD_USER_FORM.createUserButton).click();
}


// ============================================================
// 4. Test suite for account management
// ============================================================ 
test.describe('Account', () => {

    test.beforeEach(async ({ page }) => {
        await test.step('Go to the login page', async () => {
            await page.goto(URLS.wpAdmin);
        });

        await test.step('Login with valid credentials', async () => {
            await login(page, ADMIN_CREDENTIALS.username, ADMIN_CREDENTIALS.password);
        });
    });

    // 2.1 Test case: Create a new account with Editor permission
    test('ACC_001: Create Account With Editor Permission', async ({ page }) => {

        const newUserName = `E101-Qua-${generateRandomString(3)}`;
        const newUserEmail = `thuqua+${randomNumber()}@gmail.com`;
        const newPassword = 'Abcd123456789@';

        await test.step('1.1 Navigate to the user management page', async () => {
            await page.goto(URLS.usersPage);
        });

        await test.step('1.2 Verify user display', async () => {
            await expect(page.locator(menuItem('Users'))).toBeVisible();
            await expect(page.locator(ADD_USER_FORM.addNewUserButton)).toBeEnabled();
        });

        await test.step('2.1 Add new user', async () => {
            await createUser(page, newUserName, newUserEmail, 'E101', 'Thu Qua', newPassword, 'Editor');
        });

        await test.step('2.2. Verify new user creation', async () => {
            await expect(page.locator(ADD_USER_FORM.message)).toContainText('New user created.');
        });

        await test.step('3.1. Log out account', async () => {
            await logout(page);
        });

        await test.step('3.2. Log in with new created user', async () => {
            await login(page, newUserName, newPassword);
        });

        await test.step('3.3. Verify visible Menus for Editor role after login', async () => {
            const visibleMenus = ['Dashboard', 'Posts', 'Media', 'Pages', 'Comments', 'Profile', 'Tools'];
            for (const menu of visibleMenus) {
                await expect(page.locator(menuItem(menu))).toBeVisible();
            }
        });

        await test.step('3.4. Verify hidden Menus for Editor role after login', async () => {
            const hiddenMenus = ['Appearance', 'Plugins', 'Users'];
            for (const menu of hiddenMenus) {
                await expect(page.locator(menuItem(menu))).toHaveCount(0);
            }
        });

        await test.step('4. Teardown - Login with admin account and delete the created user', async () => {
            // Log out the current user
            await logout(page);

            // Log in with admin account
            await login(page, ADMIN_CREDENTIALS.username, ADMIN_CREDENTIALS.password);

            // Navigate to the user management page
            await page.goto(URLS.usersPage);

            // Search for the created user
            await page.goto(`${URLS.usersPage}?s=${newUserName}`);

            const userRow = page.locator("//table[contains(@class,'wp-list-table')]//tbody/tr").filter({ hasText: newUserName });
            
            await expect(userRow).toBeVisible(); // Verify that the user row is visible   
            await userRow.hover();

            // Click on the "Delete" link for the created user
            const deleteLink = userRow.locator("xpath=.//a[@class='submitdelete']");
            await expect(deleteLink).toHaveCount(1);
            await deleteLink.click();

            await page.locator(DELETE_USER_FORM.deleteOption).check(); // Select the option to delete all content
            await page.locator(DELETE_USER_FORM.confirmDeleteButton).click(); // Confirm deletion

            // Verify that the user has been deleted
            await expect(page.locator(DELETE_USER_FORM.message)).toContainText('User deleted.');

        });
    });

    // 2.2 Test case: Create a new account with Subscriber permission
    test('ACC_002: Create Account With Subscriber Permission', async ({ page }) => {

        const newUserName = `E101-Qua-${generateRandomString(3)}`;
        const newUserEmail = `thuqua+${randomNumber()}@gmail.com`;
        const newPassword = 'Abcd123456789@';

        await test.step('1.1 Navigate to the user management page', async () => {
            await page.goto(URLS.usersPage);
        });

        await test.step('1.2 Verify user display', async () => {
            await expect(page.locator(menuItem('Users'))).toBeVisible();
            await expect(page.locator(ADD_USER_FORM.addNewUserButton)).toBeEnabled();
        });

        await test.step('2.1 Add new user', async () => {
            await createUser(page, newUserName, newUserEmail, 'E101', 'Thu Qua', newPassword, 'Subscriber');
        });

        await test.step('2.2. Verify new user creation', async () => {
            await expect(page.locator(ADD_USER_FORM.message)).toContainText('New user created.');
        });

        await test.step('3.1. Log out account', async () => {
            await logout(page);
        });

        await test.step('3.2. Log in with new created user', async () => {
            await login(page, newUserName, newPassword);
        });

        await test.step('3.3. Verify visible Menus for Subscriber role after login', async () => {
            const visibleMenus = ['Dashboard', 'Profile'];
            for (const menu of visibleMenus) {
                await expect(page.locator(menuItem(menu))).toBeVisible();
            }
        });

        await test.step('3.4. Verify hidden Menus for Editor role after login', async () => {
            const hiddenMenus = ['Appearance', 'Users', 'Plugins', 'Posts', 'Media', 'Pages', 'Comments', 'Tools'];
            for (const menu of hiddenMenus) {
                await expect(page.locator(menuItem(menu))).toHaveCount(0);
            }
        });

        await test.step('4. Teardown - Login with admin account and delete the created user', async () => {
            // Log out the current user
            await logout(page);

            // Log in with admin account
            await login(page, ADMIN_CREDENTIALS.username, ADMIN_CREDENTIALS.password);

            // Navigate to the user management page
            await page.goto(URLS.usersPage);

            // Search for the created user
            await page.goto(`${URLS.usersPage}?s=${newUserName}`);

            const userRow = page.locator("//table[contains(@class,'wp-list-table')]//tbody/tr").filter({ hasText: newUserName });
            
            await expect(userRow).toBeVisible(); // Verify that the user row is visible   
            await userRow.hover();

            // Click on the "Delete" link for the created user
            const deleteLink = userRow.locator("xpath=.//a[@class='submitdelete']");
            await expect(deleteLink).toHaveCount(1);
            await deleteLink.click();

            await page.locator(DELETE_USER_FORM.confirmDeleteButton).click(); // Confirm deletion

            // Verify that the user has been deleted
            await expect(page.locator(DELETE_USER_FORM.message)).toContainText('User deleted.');
        });
    });
});