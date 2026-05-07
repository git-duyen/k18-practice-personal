import { test, expect, request as playwrightRequest, APIRequestContext } from '@playwright/test';
import { CreateUserPayload, User, UserManagementApiPage } from './userManager.api.page';

const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

test.describe('Login success', () => {
  test('Login Admin', async ({ request }) => {
    const userMangement = new UserManagementApiPage(request);
    const adminEmail = 'admin@example.com';
    const adminPassword = 'password';

    const loginAdminResponseJSON = await userMangement.login(adminEmail, adminPassword);
    expect(loginAdminResponseJSON.data.token).toBeTruthy();
  });

  test('Login User', async ({ request }) => {
    const userMangement = new UserManagementApiPage(request);
    const userEmail = 'john@example.com';
    const userPassword = 'password';

    const loginUserResponseJSON = await userMangement.login(userEmail, userPassword);
    expect(loginUserResponseJSON.data.token).toBeTruthy();
  });
});

test.describe('Create user success', () => {
  let userID: string;
  let token: string;
  let apiContext: APIRequestContext;
  let userAPI: UserManagementApiPage;

  const newUser: CreateUserPayload = {
    name: 'ThanhTu',
    email: `demo-${Date.now()}@example.com`,
    password: 'password',
    facebook: 'https://facebook.com/newuser',
    avatar: 'https://i.pravatar.cc/150?img=20',
    hobbies: 'Reading, Coding',
    role: 'user',
  };

  test.beforeAll(async () => {
    apiContext = await playwrightRequest.newContext();
    userAPI = new UserManagementApiPage(apiContext);

    const loginRes = await userAPI.login('admin@example.com', 'password');

    token = loginRes.data.token;
  });

  test.afterAll(async () => {
    if (userID) {
      await userAPI.deleteUser(userID, token);
    }
    await apiContext.dispose();
  });

  test('Test 2: Create user and verify in list', async () => {
    await test.step('Step 1: Create user', async () => {
      const createdUser = await userAPI.createUser(newUser, token);
      userID = createdUser.id;
      
      expect(createdUser.name).toBe(newUser.name);
      expect(createdUser.email).toBe(newUser.email);
    });

    await test.step('Step 2: Get User List', async () => {
      const userList: User[] = await userAPI.getUsers(token);
      const createdUser = userList.find((user) => user.id === userID);

      expect(createdUser).toBeTruthy();
      expect(createdUser!.email).toBe(newUser.email);
    });
  });
});
