import { test, expect } from '@playwright/test';

test.describe('ACCOUNT - subscriber permission', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
        await page.locator("input#user_login").fill("betterbytes.academy.admin");
        await page.locator("input#user_pass").fill("StrongPass@BetterBytesAcademy");
        await page.locator("input#wp-submit").click();
    });

    const password = "Playwright_Automation_Test";
   
    test('@ACCOUNT_001: Create account with editor permission', async ({ page }) => {
        await test.step('Create new account successfully', async () => {
            await page.locator('a.menu-icon-users div.wp-menu-name').click();
            await expect(page.locator('h1:has-text("Users")')).toBeVisible();
            await expect(page.locator('a.page-title-action')).toBeEnabled();
            await page.locator('a.page-title-action').click();

            await page.locator('input#user_login').fill('E101-ThanhLong-subscriber');
            await page.locator('input#email').fill('thanhlong@subscriber.com');
            await page.locator('input#first_name').fill('E101');
            await page.locator('input#last_name').fill('ThanhLong-subscriber');
            
            await page.locator('#pass1').fill(password); 
            
            await page.locator('select#role').selectOption('editor');
            await page.locator(`#createusersub`).click();
            await expect(page.locator('div#message')).toContainText('New user created.');
        });

        await test.step('Login out admin account and login with new account', async () => {
            await page.locator(`a:has-text("Howdy,")`).hover({timeout: 3000});
            await page.locator(`a:has-text("Log Out")`).click();

            await page.locator('input#user_login').fill("thanhlong@subscriber.com");
            await page.locator('input#user_pass').fill(password);
            await page.locator('input#wp-submit').click();

            await expect(page.locator(`//div[normalize-space()='Dashboard']`)).toBeVisible();
            await expect(page.locator(`//div[normalize-space()='Posts']`)).toBeVisible();
            await expect(page.locator(`//div[normalize-space()='Media']`)).toBeVisible();
            await expect(page.locator(`//div[normalize-space()='Pages']`)).toBeVisible();
            await expect(page.locator(':text-is("Comments")')).toBeVisible();
            await expect(page.locator(`//div[normalize-space()='Profile']`)).toBeVisible();
            await expect(page.locator(`//div[normalize-space()='Tools']`)).toBeVisible();

            
            await expect(page.locator(`//div[normalize-space()='Appearance']`)).toBeHidden();
            await expect(page.locator(`//div[normalize-space()='Users']`)).toBeHidden();
            await expect(page.locator(`//div[normalize-space()='Plugins']`)).toBeHidden();
        });

        await test.step('Delete new account', async () => {
            await page.locator(`a:has-text("Howdy,")`).hover({timeout: 2000});
            await page.locator(`a:has-text("Log Out")`).click();

            await page.locator("input#user_login").fill("betterbytes.academy.admin");
            await page.locator("input#user_pass").fill("StrongPass@BetterBytesAcademy");
            await page.locator("input#wp-submit").click();

            await page.locator('a.menu-icon-users div.wp-menu-name').click();
            await page.locator('input#user-search-input').fill("E101-ThanhLong");
            await page.locator('input#search-submit').click();
            await page.locator('td.username a').first().hover({timeout: 2000});
            await page.locator('span.delete a').click();
            await page.getByRole('radio', { name: 'Delete all content.', checked: false }).check();
            await page.locator('input#submit').click();

            await page.locator('input#user-search-input').fill("E101-ThanhLong");
            await page.locator('input#search-submit').click();
            await expect(page.locator(`td:has-text("No users found.")`)).toBeVisible();
        });

    }); 

});