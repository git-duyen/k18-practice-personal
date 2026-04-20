import { test, expect } from '@playwright/test';

test.describe("ACCOUNT-Account", async () => {
    const className = '101';
    let myName:  string;
    let email: string;
    const password = 'Aa1!bc12345';
    test.beforeEach(async ({ page }) => {
        await test.step("Open page https://pw-practice-dev.playwrightvn.com/wp-admin and login", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.locator("input#user_login").fill('betterbytes.academy.admin')
            await page.locator("input#user_pass").fill('StrongPass@BetterBytesAcademy');
            await page.locator("input#wp-submit").click();
        })
    });

    test.afterEach(async ({ page}) => {
        await test.step("Teardown", async () => {
            await page.locator("a:has-text('Howdy, ')").hover();
            await expect(page.locator("a:has-text('Log Out')")).toBeVisible();
            await page.locator("a:has-text('Log Out')").click();
            await page.locator("input#user_login").fill('betterbytes.academy.admin')
            await page.locator("input#user_pass").fill('StrongPass@BetterBytesAcademy');
            await page.locator("input#wp-submit").click();
            await page.locator("div.wp-menu-name:has-text('Users')").click();
            await page.locator("input#user-search-input").fill(`${className}_${myName}`);
            await page.locator("input#search-submit").click();
            await page.locator(`a:has-text('${className}_${myName}')`).hover();
            // await expect(page.locator(`//a[contains(text(), '${className}_${myName}')]//following::span[@class='delete']`)).toBeVisible();
            // await page.locator(`//a[contains(text(), '${className}_${myName}')]//following::span[@class='delete']`).click();
            expect(page.locator(`span.delete`)).toBeVisible();
            await page.locator(`span.delete`).click();
            const checkVisible = await page.locator("label:has-text('Delete all content.')").isVisible();
            if(checkVisible === true){
                await page.locator("label:has-text('Delete all content.')").click();
            }
            await page.locator("input[value='Confirm Deletion']").click();
            await page.locator("input#user-search-input").fill(`${className}_${myName}`);
            await page.locator("input#search-submit").click();
            await expect(page.locator(`a:has-text('${className}_${myName}')`)).toBeHidden();
            await expect(page.locator("tbody#the-list td:has-text('No users found.')")).toBeVisible();
        })
    })

    test("@ACC_001: Create account with editor permission", async ({ page }) => {
        myName = 'Hanh editor';
        email= 'hanheditor@gm.co';
        await test.step("Đi tới màn quản lý user", async () => {
            await page.locator("div.wp-menu-name:has-text('Users')").click();
            await expect(page.locator("h1:has-text('Users')")).toBeVisible();
            await expect(page.locator("a.page-title-action:has-text('Add User')")).toBeEnabled();
            await page.locator("a.page-title-action:has-text('Add User')").click();
        });

        await test.step("Thực hiện thêm mới user", async () => {
            await page.locator("input#email").fill(email);
            await page.locator("input#user_login").fill(`${className}_${myName}`);
            await page.locator("input#pass1").fill('');
            await page.locator("input#pass1").fill(password);
            await page.locator("input#first_name").fill(className);
            await page.locator("input#last_name").fill(myName);
            await page.locator("select[name='role']").selectOption({label: 'Editor'});
            await page.locator("input[type='submit']").click();
            await expect(page.locator("div#message>p")).toContainText('New user created. ');
        })

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
            await page.locator("a:has-text('Howdy, ')").hover();
            await page.locator("a:has-text('Log Out')").waitFor({ state: 'visible' });
            await page.locator("a:has-text('Log Out')").click();
            await page.locator("input#user_login").fill(`${className}_${myName}`);
            await page.locator("input#user_pass").fill(password);
            await page.locator("input#wp-submit").click();
            await expect(page.locator("div.wp-menu-name:has-text('Dashboard')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Profile')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Appearance')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Users')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Plugins')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Posts')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Media')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Pages')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Comments ')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Tools')")).toBeVisible();
        })
    });
    
    test("@ACC_002: Create account with subscriber permission", async ({ page }) => {
        myName = 'Hanh subcriber';
        email= 'hanhsubcriber@gm.co';
        await test.step("Đi tới màn quản lý user", async () => {
            await page.locator("div.wp-menu-name:has-text('Users')").click();
            await expect(page.locator("h1:has-text('Users')")).toBeVisible();
            await expect(page.locator("a.page-title-action:has-text('Add User')")).toBeEnabled();
            await page.locator("a.page-title-action:has-text('Add User')").click();
        });

        await test.step("Thực hiện thêm mới user", async () => {
            await page.locator("input#email").fill(email);
            await page.locator("input#user_login").fill(`${className}_${myName}`);
            await page.locator("input#pass1").fill('');
            await page.locator("input#pass1").fill(password);
            await page.locator("input#first_name").fill(className);
            await page.locator("input#last_name").fill(myName);
            await page.locator("select[name='role']").selectOption({label: 'Subscriber'});
            await page.locator("input[type='submit']").click();
            await expect(page.locator("div#message>p")).toContainText('New user created. ');
        })

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
            await page.locator("a:has-text('Howdy, ')").hover();
            await page.locator("a:has-text('Log Out')").waitFor({ state: 'visible' });
            await page.locator("a:has-text('Log Out')").click();
            await page.locator("input#user_login").fill(`${className}_${myName}`);
            await page.locator("input#user_pass").fill(password);
            await page.locator("input#wp-submit").click();
            await expect(page.locator("div.wp-menu-name:has-text('Dashboard')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Profile')")).toBeVisible();
            await expect(page.locator("div.wp-menu-name:has-text('Appearance')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Users')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Plugins')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Posts')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Media')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Pages')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Comments ')")).toBeHidden();
            await expect(page.locator("div.wp-menu-name:has-text('Tools')")).toBeHidden();
        })
    });

});