import { expect, test } from "@playwright/test";
import { LoginPage } from "./test1.api.page";
import { InfoUser } from "./user.type";

const infoAdmin: InfoUser = {
  email: "admin@example.com",
  password: "password",
};
const infoUser: InfoUser = {
  email: "john@example.com",
  password: "password",
};

test.describe("TEST 01", () => {
  test("Login admin success", async ({ request }) => {
    const loginPage = new LoginPage(request);
    const body = await loginPage.login(infoAdmin);
    const token = body.data.token;
    expect.soft(token.length).toBeGreaterThan(1);
  });

  test("Login user success", async ({ request }) => {
    const loginPage = new LoginPage(request);
    const body = await loginPage.login(infoUser);
    expect.soft(body.data.token.length).toBeGreaterThan(0);
  });
});
