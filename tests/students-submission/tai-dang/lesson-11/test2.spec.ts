import { test, expect, APIRequestContext } from '@playwright/test';
let adminToken: string;

interface LoginCredentials {
    email: string;
    password: string;
}

interface User {
    name: string,
    email: string,
    password: string,
    facebook: string,
    avatar: string,
    hobbies: string,
    role: string
}

const newUserData: User = {
    name: `Tai Dang${Math.random().toString(36).substring(2, 10)}`,
    email: `taidang${Math.random().toString(36).substring(2, 10)}@example.com`,
    password: "password123",
    facebook: "https://facebook.com/taidang",
    avatar: "https://i.pravatar.cc/150?img=20",
    hobbies: "workout, traveling",
    role: "user"

};

test.describe('API Tests', () => {
    let createdUserId: number;
    let createdUserEmail: string;

    test.beforeAll('Login success', async ({ request }) => {
        let adminCredentials: LoginCredentials = {
            email: 'admin@example.com',
            password: 'password'
        };
        // Verify admin dang nhap thanh cong, token duoc tra ve
        adminToken = await loginToApp(request, adminCredentials);
    });

    test('Create user', async ({ request }) => {
        // Step 1: Login to get token
        const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

        // Login --> token
        const userResponse = await request.post(`${baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${adminToken}`,
            },
            data: newUserData
        });
        const userResponseBody = await userResponse.json();
        console.log('Create User Response:', JSON.stringify(userResponseBody, null, 2));

        test.step('Verify create user successfully', async () => {
            expect(userResponse.status()).toBe(201);
            expect(userResponseBody.user).toBeDefined();
            
            // Store created user info for later verification
            createdUserId = userResponseBody.user.id;
            createdUserEmail = userResponseBody.user.email;
            console.log('Created user ID:', createdUserId, 'Email:', createdUserEmail);
        });

    });

    test('Get user', async ({ request }) => {
        // Step 1: Login to get token
        const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

        // Login --> token
        const userResponse = await request.get(`${baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${adminToken}`,
            },
        });
        const userResponseBody = await userResponse.json();

        test.step('Verify get user successfully', async () => {
            expect(userResponse.status()).toBe(200);
            expect(Array.isArray(userResponseBody.users)).toBeTruthy();
            expect(userResponseBody.users.length).toBeGreaterThan(0);
           
        });

        test.step('Verify created user exists in user list', async () => {
            // Check if the created user exists in the user list
            const foundUser = userResponseBody.users.find((user: any) => 
                user.email === createdUserEmail || user.id === createdUserId
            );
            
            expect(foundUser).toBeDefined();
            console.log('Found created user in list:', JSON.stringify(foundUser, null, 2));
            
            // Verify the user details match
            expect(foundUser.email).toBe(createdUserEmail);
            expect(foundUser.name).toBe(newUserData.name);
            expect(foundUser.facebook).toBe(newUserData.facebook);
        });
    });

    test.afterAll('Delete created user', async ({ request }) => {
        if (createdUserId) {
            const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';
            
            const deleteResponse = await request.delete(`${baseURL}/users.php`, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`,
                },
                data: {
                    id: createdUserId
                }
            });
            const deleteResponseBody = await deleteResponse.json();

            console.log('Delete user response status:', deleteResponse.status());
            expect(deleteResponse.status()).toBe(200);
            console.log('User deleted successfully:', createdUserEmail);
        }
    });

    async function loginToApp(request: APIRequestContext, credentials: LoginCredentials): Promise<string> {
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
        return token;
    }
});