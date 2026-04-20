import { test, expect } from '@playwright/test'
import { CreateUser } from './test2.api.page';

test.describe('Exercise 2', () => {
    const email = `ngochanh${Date.now()}@gm.co`;
    const name = "Ngoc Hanh";
    const password = "password";
    const facebook = "https://fb.com/ngochanh";
    const avatar = "https://d7hftxdivxxvm.cloudfront.net/?height=900&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2P6t_Yt6dF0TNN76dlp-_Q%252F3417757448_4a6bdf36ce_o.jpg&width=1200";
    const hobbies = "reading, watching";
    const role = "user"


    let token: string;
    let id: number;

    test.beforeAll(async ({ request }) => {
        const emailAdmin = 'admin@example.com';
        const passwordAdmin = 'password';

        const logInRequest = new CreateUser(request);
        const responseJson = await logInRequest.logIn(emailAdmin, passwordAdmin);
        token = responseJson.data.token;
    })

    test.afterAll(async ({ request }) => {
        if(id){
            const deleteUserRequest = new CreateUser(request);
            const responseJson = await deleteUserRequest.deleteUser(token, id);
        }
    })

    test("Create user success", async ({ request }) => {
        const createUserRequest = new CreateUser(request);
        await test.step('Create user', async () => {
            const responseJson = await createUserRequest.createUser(token, name, email, password, facebook, avatar, hobbies, role);
            id = responseJson.user.id;

            expect(responseJson.user).toEqual(expect.objectContaining({
                id: expect.any(Number),
                name: name,
                email: email,
                role: role,
                is_active: expect.any(Number)
            }));
        })

        await test.step('Get user', async() => {
            const responseJson = await createUserRequest.getUser(token);
            const users = responseJson.users;
            const userEmails = users.map((user: { email: string }) => user.email);
            expect(userEmails).toContain(email);
        })
    })
})