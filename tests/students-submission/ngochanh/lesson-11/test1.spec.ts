import { expect, test } from '@playwright/test'

test('Login success', async ({ request }) => {
    await test.step('Login Admin', async () => {
        const email = 'admin@example.com';
        const password = 'password';

        const response = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
            data: {
                email: email,
                password: password
            }
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        expect(responseJson.data.token).toBeTruthy();
    })

    await test.step('Login User', async() => {
        const email = 'john@example.com';
        const pw = 'password';
    
        const response = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
            data: {
                email: email,
                password: pw
            }
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        expect(responseJson.data.token).toBeTruthy();
    })
})