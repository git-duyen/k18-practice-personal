import { expect, test } from "@playwright/test"
test("Login success", async ({ request }) => {
    const admin = {
        "email": "admin@example.com",
        "password": "password"
    }
    const user = {
        "email": "HieuNguyen@example.com",
        "password": "1234"
    }
    const baseUrl = 'https://material.playwrightvn.com/api/user-management/v1/'
    //Step 1: Dang nhap thanh cong tk admin
    await test.step('Login admin', async () => {
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
    })
    //Step 2: Dang nhap vao tk user
    await test.step('Login user', async () => {
        const response = await request.post(`${baseUrl}/login.php`, {
            data: {
                "email": user.email,
                "password": user.password
            }
        })
        const body = await response.json()
        //Kiem tra
        expect(response.status()).toBe(200)
        expect(body.data.token).toBeDefined()
    })
})