import { APIRequestContext, expect, test } from "@playwright/test";

const infoAdmin = {
  email: "admin@example.com",
  password: "password",
};
const infoUser = {
  name: "Thuong",
  email: "thuong@gmail.com",
  password: "password",
  facebook: "https://facebook.com/newuser",
  avatar: "https://i.pravatar.cc/150?img=20",
  hobbies: "Reading, Coding",
  role: "user",
};

const BASE_URL = "https://material.playwrightvn.com/api/user-management/v1";

test.describe("TEST 02", () => {
  let idUser: number;
  let requestTokenHeader: APIRequestContext;

  test.beforeAll(async ({ request, playwright }) => {
    const loginResponseAdmin = await request.post(`${BASE_URL}/login.php`, {
      data: infoAdmin,
    });

    const body = await loginResponseAdmin.json();
    const token = body.data.token;
    requestTokenHeader = await playwright.request.newContext({
      baseURL: "",
      extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
  });

  test.afterAll(async ({ request }) => {
    const response = await requestTokenHeader.delete(`${BASE_URL}/users.php`, {
      data: { id: idUser },
    });

    const statusCode = response.status();
    expect.soft(statusCode).toBe(200);
  });
  test("Ceate user", async ({ request }) => {
    const response = await requestTokenHeader.post(`${BASE_URL}/users.php`, {
      data: infoUser,
    });
    const statusCode = response.status();
    const body = await response.json();
    expect.soft(statusCode).toBe(201);
    expect.soft(body.user.email).toBe(infoUser.email);
    idUser = body.user.id;
  });

  test("list user", async ({ request }) => {
    const response = await requestTokenHeader.get(`${BASE_URL}/users.php`);
    const statusCode = response.status();
    const body = await response.json();
    const result = body.users.find((u: any) => u.id === idUser);
    expect.soft(statusCode).toBe(200);
    expect.soft(result?.id).toBe(idUser);
  });
});
