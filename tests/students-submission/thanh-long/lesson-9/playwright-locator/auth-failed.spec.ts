import { test , expect} from '@playwright/test';
test.describe('AUTH - authentication', () => {
    test.beforeEach(async ({ page }) => {  
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
    });

    test('@AUTH_001: Login failure', async ({ page }) => {
        const username = 'wrong_username';
        await page.getByRole('textbox', { name: 'Username or Email Address' }).fill(username);
        
        await page.getByRole('textbox', { name: 'Password' }).fill('wrong_password');
        
        await page.getByRole('button', { name: 'Log In' }).click();
        
        await expect(page.getByText(`Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`)).toBeVisible();    
    });
});