import { test , expect} from '@playwright/test';

test.describe('AUTH - authentication', () => {
    test.beforeEach(async ({ page }) => {  
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
    });

    test('@AUTH_002: Login success', async ({ page }) => {
        
        await test.step('Điền thông tin và click Login', async () => {
            const usernameInput = page.locator('input#user_login');
            const passwordInput = page.locator('input#user_pass');
            const loginButton = page.locator('input#wp-submit');

            
            await usernameInput.fill('betterbytes.academy.admin');
            await expect(usernameInput).toHaveValue('betterbytes.academy.admin');
            
            await passwordInput.fill('StrongPass@BetterBytesAcademy');
            await expect(passwordInput).toHaveValue('StrongPass@BetterBytesAcademy');
            
            await loginButton.click();
        });

        await test.step('Kiểm tra giao diện Dashboard sau khi vào thành công', async () => {
            await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            
            await expect(page.locator('h1')).toHaveText('Dashboard');
            
            await expect(page.locator('div#dashboard_right_now h2')).toHaveText('At a Glance');
            
            await expect(page.locator('div#dashboard_activity h2')).toHaveText('Activity');
        });
        
    });

});