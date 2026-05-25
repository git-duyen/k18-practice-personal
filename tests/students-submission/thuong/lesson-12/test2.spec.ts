import { APIRequestContext, expect, test } from "@playwright/test";
import { CreateUser } from "./test2.api.page";
import { InfoUser } from "./user.type";

const infoAdmin: InfoUser = {
  email: "admin@example.com",
  password: "password",
};
const infoUser: InfoUser = {
  name: "Thuong",
  email: "thuong@gmail.com",
  password: "password",
  facebook: "https://facebook.com/newuser",
  avatar: "https://i.pravatar.cc/150?img=20",
  hobbies: "Reading, Coding",
  role: "user",
};

test.describe("TEST 02", () => {
  let idUser: number;
  let api: CreateUser;

  test.beforeAll(async ({ request, playwright }) => {
    const createUser = new CreateUser(request);
    const body = await createUser.login(infoAdmin);
    const token = body.data.token;
    const authenticatedContext = await playwright.request.newContext({
      extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
    // Assign the API instance to use the authenticated context for all tests
    api = new CreateUser(authenticatedContext);
  });

  test.afterAll(async () => {
    const statusCode = await api.delete(idUser);
    expect.soft(statusCode).toBe(200);
  });

  test("Ceate user", async () => {
    const body = await api.create(infoUser);
    expect.soft(body.user.email).toBe(infoUser.email);
    idUser = body.user.id;
  });

  test("list user", async () => {
    const body = await api.list();
    const result = body.users.find((u: any) => u.id === idUser);
    expect.soft(result?.id).toBe(idUser);
  });
});
