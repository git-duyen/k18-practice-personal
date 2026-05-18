import { expect, test } from "@playwright/test";

const infoAdmin = {
  email: "admin@example.com",
  password: "password",
};
const infoUser = {
  email: "john@example.com",
  password: "password",
};

const LOGIN_ENDPOINT =
  "https://material.playwrightvn.com/api/user-management/v1/login.php";

test.describe("TEST 01", () => {
  test("Login admin success", async ({ request }) => {
    const loginResponseAdmin = await request.post(LOGIN_ENDPOINT, {
      data: infoAdmin,
    });

    const statusCode = loginResponseAdmin.status();
    const body = await loginResponseAdmin.json();
    const token = body.data.token;

    expect.soft(statusCode).toBe(200);
    expect.soft(token.length).toBeGreaterThan(1);
  });

  test("Login user success", async ({ request }) => {
    const loginResponseUser = await request.post(LOGIN_ENDPOINT, {
      data: infoUser,
    });
    const statusCode = loginResponseUser.status();
    const body = await loginResponseUser.json();
    const token = body.data.token;

    expect.soft(statusCode).toBe(200);
    expect.soft(token.length).toBeGreaterThan(0);
  });
});
