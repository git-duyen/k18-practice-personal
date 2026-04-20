import { test, expect } from '@playwright/test';

test.describe("ACCOUNT-Account", async () => {
    const className = '101';
    let myName: string;
    let email: string;
    test.beforeEach(async ({ page }) => {
        await test.step("Open page https://pw-practice-dev.playwrightvn.com/wp-admin and login", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('betterbytes.academy.admin')
            await page.getByRole('textbox', { name: 'Password' }).fill('StrongPass@BetterBytesAcademy');
            await page.getByRole('button', { name: 'Log In' }).click();
        })
    });

    test.afterEach(async ({ page }) => {
        await test.step("Teardown", async () => {
            await page.getByText('Howdy, ', { exact: false }).hover();
            await page.getByText('Log Out', { exact: true }).click();
            await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('betterbytes.academy.admin')
            await page.getByRole('textbox', { name: 'Password' }).fill('StrongPass@BetterBytesAcademy');
            await page.getByRole('button', { name: 'Log In' }).click();
            await page.getByRole('link', { name: 'Users', exact: true }).click();
            await page.getByRole('searchbox', { name: 'Search Users' }).fill(`${className}_${myName}`);
            await page.getByText('Search Users', {exact: true}).click();
            await page.getByRole('link', { name: `${className}_${myName}`}).hover();
            await expect(page.getByRole('link', { name: 'Delete' })).toBeVisible();
            await page.getByRole('link', { name: 'Delete' }).click();
            const checkVisible = await page.getByText('Delete all content.').isVisible();
            if (checkVisible === true) {
                await page.getByLabel('Delete all content.').click();
            }
            await page.getByRole('button', { name: 'Confirm Deletion' }).click();
            await page.getByRole('searchbox', { name: 'Search Users' }).fill(`${className}_${myName}`);
            await page.getByRole('button', { name: 'Search Users' }).click();
            await expect(page.getByText('No users found.')).toBeVisible();
        })
    })

    test("@ACC_001: Create account with editor permission", async ({ page }) => {
        myName = 'Hanh editor';
        email= 'hanheditor@gm.co';
        await test.step("Đi tới màn quản lý user", async ({ }) => {
            await page.getByRole('link', { name: 'Users', exact: true }).click();
            await expect(page.getByRole('heading', { name: 'Users', level: 1 })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Add User' }).nth(1)).toBeEnabled();
            await page.getByRole('link', { name: 'Add User' }).nth(1).click();
        });

        await test.step("Thực hiện thêm mới user", async ({ }) => {
            await page.getByRole('textbox', { name: 'Email (required)' }).fill(email);
            await page.getByRole('textbox', { name: 'Username (required)' }).fill(`${className}_${myName}`);
            await page.getByRole('textbox', { name: 'Password' }).fill('Aa1!bc12345');
            await page.getByRole('textbox', { name: 'First Name' }).fill(className);
            await page.getByRole('textbox', { name: 'Last Name' }).fill(myName);
            await page.getByLabel('Role').selectOption({ label: 'Editor' });
            await page.getByRole('button', { name: 'Add User' }).click();
            await expect(page.getByText('New user created. ', { exact: false })).toBeVisible();
        })

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async ({ }) => {
            await page.getByText('Howdy, ', { exact: false }).hover();
            await page.getByText('Log Out').click();
            await page.getByRole('textbox', { name: 'Username or Email Address' }).fill(`${className}_${myName}`);
            await page.getByRole('textbox', { name: 'Password' }).fill('Aa1!bc12345');
            await page.getByRole('button', { name: 'Log In' }).click();
            await expect(page.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Appearance', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Users', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Plugins', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Posts', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Media', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Pages', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Comments ', exact: false }).nth(0)).toBeVisible();
            await expect(page.getByRole('link', { name: 'Tools', exact: true })).toBeVisible();
        })
    });

    test("@ACC_002: Create account with subscriber permission", async ({ page }) => {
        myName = 'Hanh subcriber';
        email= 'hanhsubcriber@gm.co';
        await test.step("Đi tới màn quản lý user", async ({ }) => {
            await page.getByRole('link', { name: 'Users', exact: true }).click();
            await expect(page.getByRole('heading', { name: 'Users', level: 1 })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Add User' }).nth(1)).toBeEnabled();
            await page.getByRole('link', { name: 'Add User' }).nth(1).click();
        });

        await test.step("Thực hiện thêm mới user", async ({ }) => {
            await page.getByRole('textbox', { name: 'Email (required)' }).fill(email);
            await page.getByRole('textbox', { name: 'Username (required)' }).fill(`${className}_${myName}`);
            await page.getByRole('textbox', { name: 'Password' }).fill('Aa1!bc12345');
            await page.getByRole('textbox', { name: 'First Name' }).fill(className);
            await page.getByRole('textbox', { name: 'Last Name' }).fill(myName);
            await page.getByLabel('Role').selectOption({ label: 'Subscriber' });
            await page.getByRole('button', { name: 'Add User' }).click();
            await expect(page.getByText('New user created. ', { exact: false })).toBeVisible();
        })

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async ({ }) => {
            await page.getByText('Howdy, ', { exact: false }).hover();
            await page.getByText('Log Out').click();
            await page.getByRole('textbox', { name: 'Username or Email Address' }).fill(`${className}_${myName}`);
            await page.getByRole('textbox', { name: 'Password' }).fill('Aa1!bc12345');
            await page.getByRole('button', { name: 'Log In' }).click();
            await expect(page.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Appearance', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Users', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Plugins', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Posts', exact: true})).toBeHidden();
            await expect(page.getByRole('link', { name: 'Media', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Pages', exact: true })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Comments ', exact: false }).nth(0)).toBeHidden();
            await expect(page.getByRole('link', { name: 'Tools', exact: true })).toBeHidden();
        })
    })
})