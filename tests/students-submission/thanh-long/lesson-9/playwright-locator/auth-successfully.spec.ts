import { test , expect} from '@playwright/test';

test.describe('AUTH - authentication', () => {
        test.beforeEach(async ({ page }) => {  
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
    });

    test('@AUTH_002: Login success', async ({ page }) => {
        
        await test.step('Điền thông tin và click Login', async () => {
            await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('betterbytes.academy.admin');
            await expect(page.getByRole('textbox', { name: 'Username or Email Address' })).toHaveValue('betterbytes.academy.admin');
            
            await page.getByRole('textbox', { name: 'Password' }).fill('StrongPass@BetterBytesAcademy');
            await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('StrongPass@BetterBytesAcademy');
            
            await page.getByRole('button', { name: 'Log In' }).click();
        });

        await test.step('Kiểm tra giao diện Dashboard sau khi vào thành công', async () => {
            await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            await expect(page.getByRole('heading', { name: 'Dashboard', level: 1 })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'At a Glance', level: 2 })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Activity', level: 2 })).toBeVisible();
        });
        
    });

});