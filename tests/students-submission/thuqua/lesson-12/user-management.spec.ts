import { expect, test } from "@playwright/test";
import { LoginApiPage } from "./login.api.page";
import { UserApiPage } from "./user.api.page";

test.describe("User Management API", () => {
  let loginApiPage: LoginApiPage;
  let usersApiPage: UserApiPage;
  let adminAccessToken: string;
  let createdUserId: number | undefined;

  test.beforeEach(async ({ request }) => {
    loginApiPage = new LoginApiPage(request);
    usersApiPage = new UserApiPage(request);

    // Pre-condition: login admin
    const admin = await loginApiPage.loginAsAdmin();

    expect(admin.status).toBe(200);
    expect(admin.token, "Admin token should exist").toBeTruthy();

    adminAccessToken = admin.token as string;
  });

  test.afterEach(async () => {
    if (createdUserId) {
      await usersApiPage.deleteUser(adminAccessToken, createdUserId);
      createdUserId = undefined;
    }
  });

  // =============================================================
  // Test 1: Login success
  // Step 1: Login admin -> verify status 200 + token
  // Step 2: Login user -> verify status 200 + token
  // =============================================================

  test("Test 1: Login success", async ({ request }) => {
    // Step 1: Login admin
    const admin = await loginApiPage.loginAsAdmin();
    expect(admin.status).toBe(200);
    expect(admin.token, "Admin token should exist").toBeTruthy();

    // Step 2: Login user
    const user = await loginApiPage.loginAsUser();
    expect(user.status).toBe(200);
    expect(user.token, "User token should exist").toBeTruthy();
  });

  // =============================================================
  // Test 2: Create user success
  // Pre-condition: Login admin (handle at beforeEach)
  // Step 1: Create user -> verify 201 + user info
  // Step 2: Get user list -> verify user created in list
  // Post-condition: delete user created (handle at afterEach)
  // =============================================================

  test("Test 2: Create user success", async () => {
    // Step 1: Tạo user
    const createUserJSON = await usersApiPage.createUser(adminAccessToken);

    expect(createUserJSON.status).toBe(201);
    expect(
      createUserJSON.user,
      "Created user info should be returned",
    ).toBeTruthy();

    const userId = createUserJSON.user.id;
    expect(userId, "Created user id should exist").toBeTruthy();

    createdUserId = userId;

    expect(createUserJSON.user.name).toBe("New User");

    const list = await usersApiPage.getUsers(adminAccessToken);
    expect(list.status).toBe(200);

    const foundUser = list.users.find(
      (user: { id: number }) => user.id === userId,
    );
    expect(foundUser, "Created user should appear in user list").toBeTruthy();
    expect(foundUser.id).toBe(userId);
  });
});
