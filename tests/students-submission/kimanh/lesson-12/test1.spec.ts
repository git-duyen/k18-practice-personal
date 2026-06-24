import { test, expect } from "@playwright/test";
import { UserApiPage } from "./00-pom-api";

test.describe("Login successful and get token", () => {

    test("Login with admin account", async ({ request }) => {
        const userApiPage = new UserApiPage(request);

        const response = await userApiPage.login(
            "admin@example.com",
            "password"
        );

        expect(response.success).toBe(true);
    });

    test("Login with user account", async ({ request }) => {
        const userApiPage = new UserApiPage(request);

        const response = await userApiPage.login(
            "john@example.com",
            "password"
        );

        expect(response.success).toBe(true);
        expect(response.data).toHaveProperty("token");
        expect(response.data.token).toBeTruthy();
    });

});
