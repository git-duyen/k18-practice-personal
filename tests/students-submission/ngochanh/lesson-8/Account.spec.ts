import { test, expect } from '@playwright/test';

test.describe("ACCOUNT-Account", async () => {
    const className = 'E101';
    let currentName;
    let currentEmail;
    test.beforeEach(async ({ page }) => {
        await test.step("Open page https://pw-practice-dev.playwrightvn.com/wp-admin and login", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.locator("//input[@id='user_login']").fill('betterbytes.academy.admin')
            await page.locator("//input[@id='user_pass']").fill('StrongPass@BetterBytesAcademy');
            await page.locator("//input[@id='wp-submit']").click();
        })
    });

    test.afterEach(async ({ page}) => {
        await test.step("Teardown", async () => {
            await page.locator("//a[contains(text(), 'Howdy, ')]").hover();
            await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.locator("//input[@id='user_login']").fill('betterbytes.academy.admin')
            await page.locator("//input[@id='user_pass']").fill('StrongPass@BetterBytesAcademy');
            await page.locator("//input[@id='wp-submit']").click();
            await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
            await page.locator("//input[@id='user-search-input']").fill(`${className}_${currentName}`);
            await page.locator("//input[@id='search-submit']").click();
            await page.locator(`//a[contains(text(), '${className}_${currentName}')]`).hover();
            await expect(page.locator(`//a[contains(text(), '${className}_${currentName}')]//following::span[@class='delete']`)).toBeVisible();
            await page.locator(`//a[contains(text(), '${className}_${currentName}')]//following::span[@class='delete']`).click();
            const checkVisible = await page.locator("//label[text()='Delete all content.']").isVisible();
            if(checkVisible === true){
                await page.locator("//label[text()='Delete all content.']").click();
            }
            await page.locator("//input[@value='Confirm Deletion']").click();
            await page.locator("//input[@id='user-search-input']").fill(`${className}_${currentName}`);
            await page.locator("//input[@id='search-submit']").click();
            //await expect(page.locator(`//a[contains(text(), '${className}_${myName}')]`)).toBeHidden();
            await expect(page.locator("//tbody[@id='the-list']//child::td[text()='No users found.']")).toBeVisible();
        })
    })

    test("@ACC_001: Create account with editor permission", async ({ page }) => {
        currentName = "Ngoc Hanh 1";
        currentEmail = "ngochanh1@gm.co";
        await test.step("Đi tới màn quản lý user", async () => {
            await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
            await expect(page.locator("//h1[contains(text(),'Users')]")).toBeVisible();
            await expect(page.locator("//a[@class='page-title-action' and contains(text(),'Add User')]")).toBeEnabled();
            await page.locator("//a[@class='page-title-action' and contains(text(),'Add User')]").click();
        });

        await test.step("Thực hiện thêm mới user", async () => {
            await page.locator("//input[@id='email']").fill(currentEmail);
            await page.locator("//input[@id='user_login']").fill(`${className}_${currentName}`);
            await page.locator("//input[@id='pass1']").fill('Aa1!bc12345');
            await page.locator("//input[@id='first_name']").fill(className);
            await page.locator("//input[@id='last_name']").fill(currentName);
            await page.locator("//select[@name='role']").selectOption({label: 'Editor'});
            await page.locator("//input[@type='submit']").click();
            await expect(page.locator("//div[@id='message']//child::p")).toContainText('New user created. ');
        })

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
            await page.locator("//a[contains(text(), 'Howdy, ')]").hover();
            await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.locator("//input[@id='user_login']").fill(`${className}_${currentName}`);
            await page.locator("//input[@id='user_pass']").fill('Aa1!bc12345');
            await page.locator("//input[@id='wp-submit']").click();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Dashboard']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Profile']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Appearance']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Users']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Plugins']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Posts']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Media']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Pages']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Comments ']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Tools']")).toBeVisible();
        })
    });
    
    test("@ACC_002: Create account with subscriber permission", async ({ page }) => {
        currentName = "Ngoc Hanh 2";
        currentEmail = 'ngochanh2@gm.co'
        await test.step("Đi tới màn quản lý user", async () => {
            await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
            await expect(page.locator("//h1[contains(text(),'Users')]")).toBeVisible();
            await expect(page.locator("//a[@class='page-title-action' and contains(text(),'Add User')]")).toBeEnabled();
            await page.locator("//a[@class='page-title-action' and contains(text(),'Add User')]").click();
        });

        await test.step("Thực hiện thêm mới user", async () => {
            await page.locator("//input[@id='email']").fill(currentEmail);
            await page.locator("//input[@id='user_login']").fill(`${className}_${currentName}`);
            await page.locator("//input[@id='pass1']").fill('Aa1!bc12345');
            await page.locator("//input[@id='first_name']").fill(className);
            await page.locator("//input[@id='last_name']").fill(currentName);
            await page.locator("//select[@name='role']").selectOption({label: 'Subscriber'});
            await page.locator("//input[@type='submit']").click();
            await expect(page.locator("//div[@id='message']//child::p")).toContainText('New user created. ');
        })

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
            await page.locator("//a[contains(text(), 'Howdy, ')]").hover();
            await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.locator("//input[@id='user_login']").fill(`${className}_${currentName}`);
            await page.locator("//input[@id='user_pass']").fill('Aa1!bc12345');
            await page.locator("//input[@id='wp-submit']").click();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Dashboard']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Profile']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Appearance']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Users']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Plugins']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Posts']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Media']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Pages']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Comments ']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Tools']")).toBeHidden();
        })
    });

});