import { request, test, expect } from '@playwright/test';

let accessToken: string;
let userAccessToken: string;
let userId: number;

test.describe('Test API', () => {
    test("Test1: Login success", async ({ request }) => {

        //Login as admin

        const adminRes = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
            data: {
                "email": "admin@example.com",
                "password": "password"
            }
        });
        const adminJson = await adminRes.json();
        //console.log(adminJson);

        expect(adminRes.status()).toBe(200);
        expect(adminJson.data.token).toBeDefined();
        accessToken = adminJson.data.token;
        console.log(accessToken);

        //Login as user

        const userRes = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
            data: {
                "email": "john@example.com",
                "password": "password"
            }
        });
        const userJson = await userRes.json();
        //console.log(userJson);

        expect(userRes.status()).toBe(200);
        expect(userJson.data.token).toBeDefined();
        userAccessToken = userJson.data.token;

    });

    test("test2: Create user success ", async ({ request }) => {
        //Precondition: Login admin account
        const adminRes = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
            data: {
                "email": "admin@example.com",
                "password": "password"
            }
        });
        const adminJson = await adminRes.json();
        //console.log(adminJson);
        expect(adminRes.status()).toBe(200);
        accessToken = adminJson.data.token;
        console.log(accessToken);

        //Step 1: Crete user
        const createRes = await request.post('https://material.playwrightvn.com/api/user-management/v1/users.php', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            data: {
                "name": "Test User",
                "email": `test_user_${Date.now()}@example.com`,
                "password": "Password123!"
            }
        });
        const createJson = await createRes.json();
        console.log(createJson);

        expect(createRes.status()).toBe(201);
        const newUserId = createJson.user.id;
        console.log(newUserId);

        //Step 2: Get user list
        const listRes = await request.get('https://material.playwrightvn.com/api/user-management/v1/users.php', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const listJson = await listRes.json();
        expect(listRes.status()).toBe(200);

        //Step 3: Delete the created user
        const deleteRes = await request.delete('https://material.playwrightvn.com/api/user-management/v1/users.php', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            data: {
                id: newUserId
            }
        });
        const deleteJson = await deleteRes.json();
        console.log(deleteJson);
    })




});