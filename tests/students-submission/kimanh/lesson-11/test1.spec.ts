import { test, expect } from '@playwright/test';

test.describe('Login successful and get token', () => {
    const baseURL = 'https://material.playwrightvn.com/api/user-management/v1/';

    test('Login with admin account', async ({ request }) => {
        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": "admin@example.com",
                "password": "password"
            }
        });
        expect(loginResponse.status()).toBe(200);
    });

    test('Login with user account', async ({ request }) => {
        const loginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": "john@example.com",
                "password": "password"
            }
        });
        // Check stt code là 200
        expect(loginResponse.status()).toBe(200);

        // Đọc body response và verify access token trả về
        const body = await loginResponse.json();
        expect(body.success).toBe(true);
        expect(body.data).toHaveProperty("token");
        expect(body.data.token).toBeTruthy();
    });
});