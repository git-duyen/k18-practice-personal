import { test , expect} from '@playwright/test';

test.describe('AUTH - authentication', () => {
    test.beforeEach(async ({ page }) => {  
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin/');
    });

    test('@AUTH_001: Login failure', async ({ page }) => {
        const username = 'wrong_username';
        
        // 1. Ô nhập Username (Dùng thuộc tính id hoặc name của ô input)
        await page.locator('input#user_login').fill(username);
        
        // 2. Ô nhập Password (Dùng thuộc tính id hoặc name của ô input)
        await page.locator('input#user_pass').fill('wrong_password');
        
        // 3. Nút Log In (Dùng thuộc tính id hoặc class của nút submit)
        await page.locator('input#wp-submit').click();
        
        // 4. Đoạn văn bản báo lỗi (Dùng class của hộp thoại thông báo lỗi chứa đoạn text)
        const errorMessage = page.locator('div#login_error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText(`Error: The username ${username} is not registered on this site.`);    
    });
});