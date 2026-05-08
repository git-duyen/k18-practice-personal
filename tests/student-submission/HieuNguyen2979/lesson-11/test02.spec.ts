import { test, expect } from "@playwright/test";
test.describe('test02', () => {
    let authToken: string
    let idNewUser: number
    const newUser = {
        "name": "HieuNguyenprodeptrai5",
        "email": "HieuNguyenprodeptrai5@example.com",
    }
    const baseUrl = 'https://material.playwrightvn.com/api/user-management/v1/'
    test.beforeAll('Login admin', async ({ request }) => {
        const admin = {
            "email": "admin@example.com",
            "password": "password"
        }
        //Log in tk
        const response = await request.post(`${baseUrl}/login.php`, {
            data: {
                "email": admin.email,
                "password": admin.password
            }
        })
        const body = await response.json()
        //Kiem tra
        expect(response.status()).toBe(200)
        expect(body.data.token).toBeDefined()
        //Lay token
        authToken = body.data.token
        // expect(authToken).toBe(1)
    })
    test.afterAll('Delete new account', async ({ request }) => {
        const response = await request.delete(`${baseUrl}/users.php`, {
            data: { "id": `${idNewUser}` },
            headers: { "Authorization": `Bearer ${authToken}` }
        })
    })
    test('Create user', async ({ request }) => {
        await test.step('Create', async () => {
            const response = await request.post(`${baseUrl}/users.php`, {
                data: {
                    "name": newUser.name,
                    "email": newUser.email,
                    "password": "1234",
                    "facebook": "https://facebook.com/newuser",
                    "avatar": "https://i.pravatar.cc/150?img=20",
                    "hobbies": "Reading, Coding",
                    "role": "user"
                },
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            })
            const body = await response.json()
            idNewUser=body.user.id
            //Kiem tra
            expect(response.status()).toBe(201)
            expect(body.user).toBeDefined()
        })
        await test.step('Check user', async () => {
            const response = await request.get(`${baseUrl}/users.php`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            })
            //Kiem tra
            const body = await response.json()
            const list: [] = body.users
            const foundUser = list.some((user: { email: string }) => user.email === newUser.email)
            expect(foundUser).toBeTruthy();
        })

    })
})