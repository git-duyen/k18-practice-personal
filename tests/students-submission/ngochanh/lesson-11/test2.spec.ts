import { test, expect } from '@playwright/test'
test.describe('Exercise 2', () => {
    const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';
    let token: string;
    const email = `ngochanh${Date.now()}@gm.co`;
    let id: number;

    test.beforeAll(async ({ request }) => {
        const emailAdmin = 'admin@example.com';
        const pwAdmin = 'password';

        const responseLogin = await request.post(`${baseURL}/login.php`, {
            data: {
                email: emailAdmin,
                password: pwAdmin
            }
        });
        const responseLoginJson = await responseLogin.json();
        token = responseLoginJson.data.token;
    })

    test.afterAll(async ({ request }) => {
        const responseDelete = await request.delete(`${baseURL}/users.php`, {
            data: {
                id: id
            }
        })
    })

    test("Create user success", async ({ request }) => {
        await test.step('Create user', async () => {
            const responseCreate = await request.post(`${baseURL}/users.php`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                data: {
                    name: "Ngoc Hanh",
                    email: email,
                    password: "password",
                    facebook: "https://fb.com/ngochanh",
                    avatar: "https://d7hftxdivxxvm.cloudfront.net/?height=900&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2P6t_Yt6dF0TNN76dlp-_Q%252F3417757448_4a6bdf36ce_o.jpg&width=1200",
                    hobbies: "reading, watching",
                    role: "user"
                }
            })
            const responseCreateJson = await responseCreate.json();
            id = responseCreateJson.user.id;
            // expect(responseCreate.status()).toBe(201);
            // expect(responseCreateJson.user).toHaveProperty('id');
            // expect(responseCreateJson.user).toHaveProperty('name');
            // expect(responseCreateJson.user).toHaveProperty('email');
            // expect(responseCreateJson.user).toHaveProperty('facebook');
            // expect(responseCreateJson.user).toHaveProperty('avatar');
            // expect(responseCreateJson.user).toHaveProperty('hobbies');
            // expect(responseCreateJson.user).toHaveProperty('role');
            // expect(responseCreateJson.user).toHaveProperty('is_active');
            // expect(responseCreateJson.user).toHaveProperty('created_at');
            // expect(responseCreateJson.user).toHaveProperty('updated_at');

            expect(responseCreateJson.user).toEqual(expect.objectContaining({
                id: expect.any(Number),
                name: "Ngoc Hanh",
                email: email,
                role: "user",
                is_active: expect.any(Number)
            }));
        })

        await test.step('Get user', async() => {
            const responseGetUser = await request.get(`${baseURL}/users.php`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const responseGetUserJson = await responseGetUser.json();
            const users = responseGetUserJson.users;
            const userEmails = users.map(user => user.email);
            expect(userEmails).toContain(email);
        })
    })
})