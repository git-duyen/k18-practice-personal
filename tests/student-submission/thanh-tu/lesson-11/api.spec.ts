import { test, expect, request } from '@playwright/test';

const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

test.describe('Login success', () => {
  test('Login Admin', async ({ request }) => {
    const loginAdminResponse = await request.post(`${baseURL}/login.php`, {
      data: {
        email: 'admin@example.com',
        password: 'password',
      },
    });

    const loginAdminResponseJSON = await loginAdminResponse.json();

    expect(loginAdminResponse.status()).toBe(200);
    expect(loginAdminResponseJSON.data.token).toBeTruthy();
  });

  test('Login User', async ({ request }) => {
    const loginUserResponse = await request.post(`${baseURL}/login.php`, {
      data: {
        email: 'john@example.com',
        password: 'password',
      },
    });

    const loginUserResponseJSON = await loginUserResponse.json();

    expect(loginUserResponse.status()).toBe(200);
    expect(loginUserResponseJSON.data.token).toBeTruthy();
  });
});

test.describe('Create user success', () => {
  let userID: string;
  let token: string;

  test.beforeAll(async ({ request }) => {
    const loginResponse = await request.post(`${baseURL}/login.php`, {
      data: {
        email: 'admin@example.com',
        password: 'password',
      },
    });
    const loginResponseJSON = await loginResponse.json();
    token = loginResponseJSON.data.token;
  });

  test.afterAll(async ({ request }) => {
    const deleteResponse = await request.delete(`${baseURL}/users.php`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id: userID,
      },
    });
  });

  test('Create user', async ({ request }) => {
    const newUser = {
      name: 'ThanhTu',
      email: 'thanhtudemo@example.com',
      password: 'password',
      facebook: 'https://facebook.com/newuser',
      avatar: 'https://i.pravatar.cc/150?img=20',
      hobbies: 'Reading, Coding',
      role: 'user',
    };

    const response = await request.post(`${baseURL}/users.php`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: newUser,
    });
    const responseJson = await response.json();
    userID = responseJson.user.id;

    expect(response.status()).toBe(201);
    expect(responseJson).toHaveProperty('user');

    expect(responseJson.user.name).toBe(newUser.name);
    expect(responseJson.user.email).toBe(newUser.email);
  });

  test('Get User List', async ({ request }) => {
    const response = await request.get(`${baseURL}/users.php`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();

    expect(response.status()).toBe(200);

    const userList = responseJson.users;
    const createdUser = userList.find((user: any) => user.id === userID);
    expect(createdUser).toBeTruthy();
    expect(createdUser.email).toBe('thanhtudemo@example.com');
  });
});
