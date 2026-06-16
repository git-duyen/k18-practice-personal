import { test, expect, Locator } from "@playwright/test";

interface testUserData {
    username: string,
    password?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    role?: string
}

const testdata: testUserData[] = [
    {
        username: 'betterbytes.academy.admin',
        password: 'StrongPass@BetterBytesAcademy',
    },
    {
        username: 'k18.phat',
        email: 'phat212@gmail.com',
        firstName: 'k18',
        lastName: 'phat',
        role: 'Editor',
    },
    {
        username: 'k18.phat',
        email: 'phat212@gmail.com',
        firstName: 'k18',
        lastName: 'phat',
        role: 'Subscriber',
    }
];

const usernameField: string = 'input#user_login';
const passwordField: string = 'input#user_pass';
const loginBtn: string = 'input#wp-submit';
const dashboardHeading: string = 'div#wpbody h1';
const userMenu: string = '.wp-menu-name';
const allUserLink: string = "//*[text()='Users']/following::a[text()='All Users']";
const addUserBtn: string = "//h1[@class='wp-heading-inline']/following-sibling::a";
const usernameFormField: string = "input#user_login";
const emailFormField: string = "input#email";
const firstNameFormField: string = "input#first_name";
const lastNameFormField: string = "input#last_name";
const passwordFormField: string = "input#pass1";
const roleDropdown: string = "select#role";
const addUserFormBtn: string = "input#createusersub";
const userCreationMessage: string = '#message>p';
const accountBar: string = '#wp-admin-bar-my-account';
const logoutBtn: string = '#wp-admin-bar-logout>a';
const userSearchField: string = 'input#user-search-input';
const userSearchBtn: string = 'input#search-submit';
const userName: string = `//a[text()='${testdata[1].username}']`;
const deleteButton: string = `//a[text()='${testdata[1].username}']/parent::strong/following-sibling::div//span/a[text()='Delete']`;
const menuNames: string = '#adminmenuwrap div.wp-menu-name';
const confirmDeletionBtn: string = 'input#submit';
const deleteAllContentRadio: string = "//label[text()='Delete all content.']/preceding-sibling::*";



test.describe("ACCOUNT - Account", () => {

    test.beforeEach("Go to login url", async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
        await test.step("Input username", async () => {
            await expect(page.locator(usernameField)).toBeVisible();
            await page.locator(usernameField).fill(testdata[0].username);
        });
        await test.step("Input password", async () => {
            await page.locator(passwordField).fill(testdata[0].password ?? '');
        });
        await test.step("Click on login button", async () => {
            expect(page.locator(loginBtn)).toBeVisible();
            await page.locator(loginBtn).click();
        });
        await test.step("Verify URL and heading", async () => {
            expect(page).toHaveURL(/\/wp-admin\//);
            await expect(page.locator(dashboardHeading)).toHaveText('Dashboard');
        });

        await test.step("Go to User Management", async () => {
            await page.locator(userMenu, { hasText: 'Users' }).click();
            await page.locator(allUserLink).click();
            await expect(page.getByRole('heading', { level: 1, name: ' Users ' })).toBeVisible();
            await expect(page.locator(addUserBtn)).toBeEnabled();
            await (page.locator(addUserBtn)).click();
        });
    });

    test("ACC_001 - Create account with editor permission", async ({ page }) => {
        await page.locator(usernameFormField).fill(testdata[1].username);
        await page.locator(emailFormField).fill(testdata[1].email ?? '');
        await page.locator(firstNameFormField).fill(testdata[1].firstName ?? '');
        await page.locator(lastNameFormField).fill(testdata[1].lastName ?? '');
        await page.getByText('Generate password').click();
        await expect(page.locator(passwordFormField)).toHaveAttribute('data-pw', /.+/);
        const generatedPassword: string | null = await page.locator(passwordFormField).getAttribute('data-pw');
        console.log(generatedPassword);
        await page.locator(roleDropdown).selectOption(testdata[1].role ?? '');
        await page.locator(addUserFormBtn).click();
        await expect(page.locator(userCreationMessage)).toBeVisible();
        await expect(page.locator(userCreationMessage)).toContainText('New user created.');
        await page.locator(accountBar).hover();
        await page.locator(accountBar).focus();
        await expect(page.locator(logoutBtn)).toBeVisible();
        await page.locator(logoutBtn).click();
        await page.locator(usernameField).fill(testdata[1].username);
        await page.locator(passwordField).fill(generatedPassword ?? '');
        await page.locator(loginBtn).click();
        await expect(page.locator(menuNames)).toContainText(['Dashboard', 'Posts', 'Media', 'Pages', 'Comments', 'Profile', 'Tools']);

        const expectedMenus = [
            { name: 'Dashboard', visible: true },
            { name: 'Posts', visible: true },
            { name: 'Media', visible: true },
            { name: 'Pages', visible: true },
            { name: 'Comments', visible: true },
            { name: 'Profile', visible: true },
            { name: 'Tools', visible: true },
            { name: 'Appearance', visible: false },
            { name: 'Users', visible: false },
            { name: 'Plugins', visible: false },
        ];

        for (const { name, visible } of expectedMenus) {
            const item = page.locator(menuNames).filter({ hasText: name });
            if (visible) {
                await expect(item).toBeVisible();
            } else {
                await expect(item).toBeHidden();
            }
        }
    });

    test("ACC_002 - Create account with subscriber permission", async ({ page }) => {
        await page.locator(usernameFormField).fill(testdata[2].username);
        await page.locator(emailFormField).fill(testdata[2].email ?? '');
        await page.locator(firstNameFormField).fill(testdata[2].firstName ?? '');
        await page.locator(lastNameFormField).fill(testdata[2].lastName ?? '');
        await page.getByText('Generate password').click();
        await expect(page.locator(passwordFormField)).toHaveAttribute('data-pw', /.+/);
        const generatedPassword: string | null = await page.locator(passwordFormField).getAttribute('data-pw');
        console.log(generatedPassword);
        await page.locator(roleDropdown).selectOption(testdata[2].role ?? '');
        await page.locator(addUserFormBtn).click();
        await expect(page.locator(userCreationMessage)).toBeVisible();
        await expect(page.locator(userCreationMessage)).toContainText('New user created.');
        await page.locator(accountBar).hover();
        await page.locator(accountBar).focus();
        await expect(page.locator(logoutBtn)).toBeVisible();
        await page.locator(logoutBtn).click();
        await page.locator(usernameField).fill(testdata[2].username);
        await page.locator(passwordField).fill(generatedPassword ?? '');
        await page.locator(loginBtn).click();
        await expect(page.locator(menuNames)).toContainText(['Dashboard', 'Profile']);

        const expectedMenus = [
            { name: 'Dashboard', visible: true },
            { name: 'Posts', visible: false },
            { name: 'Media', visible: false },
            { name: 'Pages', visible: false },
            { name: 'Comments', visible: false },
            { name: 'Profile', visible: true },
            { name: 'Tools', visible: false },
            { name: 'Appearance', visible: false },
            { name: 'Users', visible: false },
            { name: 'Plugins', visible: false },
        ];

        for (const { name, visible } of expectedMenus) {
            const item = page.locator(menuNames).filter({ hasText: name });
            if (visible) {
                await expect(item).toBeVisible();
            } else {
                await expect(item).toBeHidden();
            }
        }
    });

    test.afterEach("Delete user after done", async ({ page }) => {

        await test.step('Login with admin account', async () => {
            await page.locator(accountBar).hover();
            await page.locator(accountBar).focus();
            await expect(page.locator(logoutBtn)).toBeVisible();
            await page.locator(logoutBtn).click();
            await expect(page.locator(usernameField)).toBeVisible();
            await page.locator(usernameField).fill(testdata[0].username);
            await page.locator(passwordField).fill(testdata[0].password ?? '');
            await page.locator(loginBtn).click();
        });

        await test.step('Input username to search field', async () => {
            await page.locator(userMenu, { hasText: 'Users' }).click();
            await page.locator(allUserLink).click();
            await page.locator(userSearchField).fill(testdata[1].username);
            await page.locator(userSearchBtn).click();
        });

        await test.step('Delete user', async () => {
            await page.locator(userName).hover();
            await page.locator(userName).focus();
            await expect(page.locator(deleteButton)).toBeVisible();
            await page.locator(deleteButton).click();
            await expect(page.locator(confirmDeletionBtn)).toBeVisible();
            const deleteAllContentRadioLoc: Locator = page.locator(deleteAllContentRadio);
            const confirmDeletionBtnLoc: Locator = page.locator(confirmDeletionBtn);
            const isConfirmDeletionBtnEnabled = await confirmDeletionBtnLoc.isVisible() && await confirmDeletionBtnLoc.isEnabled();
            const isDeleteAllContentRadioChecked = await deleteAllContentRadioLoc.isVisible() && await deleteAllContentRadioLoc.isChecked();

            if (!isConfirmDeletionBtnEnabled) {
                if (!isDeleteAllContentRadioChecked) {
                    await page.locator(deleteAllContentRadio).check();
                    await page.locator(confirmDeletionBtn).click();
                }
            } else {
                await page.locator(confirmDeletionBtn).click();
            }
            await expect(page.locator(userCreationMessage)).toContainText('User deleted.');
        })
    });

});