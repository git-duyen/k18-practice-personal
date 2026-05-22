import { test, expect } from '@playwright/test';

test.describe('ACCOUNT - editor permission', () => {
        test.beforeEach(async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
        await page.getByRole('textbox', { name: 'Username or Email Address' }).fill("betterbytes.academy.admin");
        await page.getByRole('textbox', { name: 'Password' }).fill("StrongPass@BetterBytesAcademy");
        await page.getByRole('button', { name: 'Log In' }).click();
    });

    const password = "Playwright_Automation_Test";
   
    test('@ACCOUNT_001: Create account with editor permission', async ({ page }) => {
        
        
        await test.step('Create new account successfully', async () => {
            await page.locator(`//div[normalize-space()='Users']`).click();
            await expect(page.locator(`//h1[normalize-space()='Users']`)).toBeVisible();
            await expect(page.locator(`//a[@class='page-title-action']`)).toBeEnabled();
            await page.locator(`//a[@class='page-title-action']`).click();

            await page.getByRole('textbox', { name: 'Username (required)' }).fill('E101-ThanhLong');
            await page.getByRole('textbox', { name: 'Email (required)' }).fill('thanhlong@gmail.com');
            await page.getByRole('textbox', { name: 'First Name' }).fill('E101');
            await page.getByRole('textbox', { name: 'Last Name' }).fill('ThanhLong');
            
            await page.locator('#pass1').fill(password); 
            
            await page.getByRole('combobox', { name: 'Role' }).selectOption('editor');
            await page.locator(`//input[@id='createusersub']`).click();
            await expect(page.locator(`//div[@id='message']`)).toContainText('New user created.');
        });

        
        await test.step('Login out admin account and login with new account', async () => {
            await page.getByRole('menuitem', { name: 'Howdy,', exact: false }).hover();
            await page.getByRole('menuitem', { name: 'Log Out' }).click();

            
            
            await page.getByRole('textbox', { name: 'Username or Email Address' }).fill("thanhlong@gmail.com");
            await page.getByRole('textbox', { name: 'Password' }).fill(password);
            await page.getByRole('button', { name: 'Log In' }).click();

            
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
            await page.getByRole('menuitem', { name: 'Howdy,', exact: false }).hover();
            await page.getByRole('menuitem', { name: 'Log Out' }).click();

            await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
            await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
            await page.locator("//input[@id='wp-submit']").click();

            await page.locator(`//div[normalize-space()='Users']`).click();
            await page.getByLabel('Search Users:').fill("E101-ThanhLong");
            await page.getByRole('button', { name: 'Search Users' }).click();
            await page.getByRole('link', { name: 'E101-ThanhLong' }).hover();
            await page.getByRole('link', { name: 'Delete' }).click();
            await page.getByRole('radio', { name: 'Delete all content.', checked: false }).check();
            await page.getByRole('button', { name: 'Confirm Deletion' }).click();

            await page.getByLabel('Search Users:').fill("E101-ThanhLong");
            await page.getByRole('button', { name: 'Search Users' }).click();
            await expect(page.getByText('No users found.')).toBeVisible();
        });

    }); 

}); 