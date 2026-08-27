import { expect, test } from '@playwright/test';

const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'password';
const USER_EMAIL = 'john@example.com';
const USER_PASSWORD = 'password';

test.describe('User Management API', () => {
    let adminAccessToken: string;
    let createdUserId: number | undefined;

    test.beforeEach(async ({ request }) => {
        // Login admin
        const response = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": ADMIN_EMAIL,
                "password": ADMIN_PASSWORD,
            }
        });

        expect(response.status()).toBe(200);

        const responseJSON = await response.json();
        adminAccessToken = responseJSON.data.token;

        expect(adminAccessToken, 'Admin token should exist').toBeTruthy();
    });

    test.afterEach(async ({ request }) => {
        // Post-condition: delete user after finish test 
        if (createdUserId) {
            await request.delete(`${baseURL}/users.php`, {
                headers: {
                    Authorization: `Bearer ${adminAccessToken}`,
                },
                data: {
                    "id": createdUserId
                }
            });
            createdUserId = undefined;
        }
    });

    // =============================================================
    // Test 1: Login success
    // Step 1: Login admin -> verify status 200 + token
    // Step 2: Login user -> verify status 200 + token
    // =============================================================

    test('Test 1: Login success', async ({ request }) => {
        // Step 1: Login admin
        const adminLoginResponse = await request.post(`${baseURL}/login.php`,
            {
                data: {
                    "email": ADMIN_EMAIL,
                    "password": ADMIN_PASSWORD,
                }
            }
        );

        expect(adminLoginResponse.status()).toBe(200);

        const adminLoginJSON = await adminLoginResponse.json();
        expect(adminLoginJSON.data.token, 'Admin token should exist').toBeTruthy();

        // Step 2: Login user
        const userLoginResponse = await request.post(`${baseURL}/login.php`, {
            data: {
                "email": USER_EMAIL,
                "password": USER_PASSWORD,
            }
        })

        expect(userLoginResponse.status()).toBe(200);

        const userLoginJSON = await userLoginResponse.json();
        expect(userLoginJSON.data.token, 'User token should exist').toBeTruthy();
    });

    // =============================================================
    // Test 2: Create user success
    // Pre-condition: Login admin (handle at beforeEach)
    // Step 1: Create user -> verify 201 + user info 
    // Step 2: Get user list -> verify user created in list
    // Post-condition: delete user created (handle at afterEach)
    // =============================================================

    test('Test 2: Create user success', async ({ request }) => {
        // Step 1: Create user
        const name = 'New User';
        const email = `newuser_${Date.now()}@example.com`;

        const createUserResponse = await request.post(`${baseURL}/users.php`, {
            headers: {
                Authorization: `Bearer ${adminAccessToken}`,
            },
            data: {
                name,
                email,
                "password": "password",
                "facebook": "https://facebook.com/newuser",
                "avatar": "https://i.pravatar.cc/150?img=20",
                "hobbies": "Reading, Coding",
                "role": "user"
            }
        })

        expect(createUserResponse.status()).toBe(201);

        const createUserJSON = await createUserResponse.json();
        expect(createUserJSON.user, 'Created user info should be returned').toBeTruthy();

        const userId = createUserJSON.user.id;
        expect(userId, 'Created user id should exist').toBeTruthy();

        createdUserId = userId

        expect(createUserJSON.user.email).toBe(email);
        expect(createUserJSON.user.name).toBe(name);

        // Step 2: Get user list
        const getUsersResponse = await request.get(`${baseURL}/users.php`, {
            headers: {
                Authorization: `Bearer ${adminAccessToken}`,
            },
        });

        expect(getUsersResponse.status()).toBe(200);

        const usersJSON = await getUsersResponse.json();

        const foundUser = usersJSON.users.find(
            (user: { id: number }) => user.id === userId
        );
        expect(foundUser).toBeTruthy();

        expect(foundUser.email).toBe(email);
    })
});