import {test, expect, APIRequestContext} from '@playwright/test';

interface LoginCredentials {
    email: string;
    password: string;
}
let adminCredentials: LoginCredentials = {
            email: 'admin@example.com',
            password: 'password'
      };

      let userCredentials: LoginCredentials = {
            email:'john@example.com',
            password: 'password'
      };
test.describe('API Tests', () => {
    test('Login admin success', async ({request}) => {
      
        // Verify admin dang nhap thanh cong, token duoc tra ve
        await loginToApp(request, adminCredentials);
    });
    test('Login user success', async ({request}) => {
      
        // Verify user dang nhap thanh cong, token duoc tra ve
        await loginToApp(request, userCredentials);
    });


    async function loginToApp(request: APIRequestContext, credentials: LoginCredentials) {
        // Step 1: Login to get token
        const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

        // Login --> token
        const loginResponse = await request.post(`${baseURL}/login.php`, {
             data: credentials
        });
        const loginResponseBody = await loginResponse.json();
        const token = loginResponseBody.data.token;

        // Verify dang nhap thanh cong, token duoc tra ve
        expect(loginResponse.status()).toBe(200);
        expect(token).toBeDefined();
    }
});