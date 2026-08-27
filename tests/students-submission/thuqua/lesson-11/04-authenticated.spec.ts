import { test } from '@playwright/test';

test('Request method - POST', async ({ request }) => {
    const baseURL = await request.post('https://material.playwrightvn.com/api/user-management/v1');

    // Login --> token
    const loginResponse = await request.post(`${baseURL}/login.php`, {
        data: {
            "email": "admin@example.com",
            "password": "password"
        }
    });

    const loginResponseJSON = await loginResponse.json();
    const token = loginResponseJSON.data.token;

    //Call API with token
    const userResponse = await request.get(`${baseURL}/user.php`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const userResponseJSON = await userResponse.json();
    console.log(userResponseJSON);
});
