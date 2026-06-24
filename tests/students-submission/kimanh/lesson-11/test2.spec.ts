import { test, expect } from '@playwright/test';

const baseURL = 'https://material.playwrightvn.com/api/user-management/v1/';

async function getToken(request) {
    const loginResponse = await request.post(`${baseURL}/login.php`, {
        data: {
            "email": "admin@example.com",
            "password": "password"
        }
    });

    const loginResponseJSON = await loginResponse.json();
    const token = loginResponseJSON.data.token;
    return token;
}
test('CRUD User', async ({ request }) => {
    const token = await getToken(request);
    let id: number;

    await test.step('Create user', async () => {
        const createUserResponse = await request.post(`${baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "name": "Kim Anh",
                "email": "kimanh@gmail.com",
                "password": "password",
                "facebook": "https://facebook.com/newuser",
                "avatar": "https://i.pravatar.cc/150?img=20",
                "hobbies": "Reading, Coding",
                "role": "user"
            }
        });
        expect(createUserResponse.status()).toBe(201);
        const createUserResponseJson = await createUserResponse.json();
        id = createUserResponseJson.user.id;
        console.log(createUserResponseJson);
    });

    await test.step('Get list user', async () => {
        const getUserResponse = await request.get(`${baseURL}//users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        // expect(getUserResponse.status()).toBe(200);

        // Verify xem user vừa tạo ra có nằm trong danh sách hay không
        const body = await getUserResponse.json();
        expect(body.success).toBe(true);
        const isUserInList = body.users.some((user: { id: number }) => user.id === id);
        expect(isUserInList).toBeTruthy();
    });

    await test.step('Deleted user', async () => {
        // Get list user
        const deleteUserResponse = await request.delete(`${baseURL}/users.php`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "id": id
            }
        });
        expect(deleteUserResponse.status()).toBe(200);
    });
});