import { test, expect } from "@playwright/test";
import { AuthAPI } from "../api/auth.api";
import { UserAPI } from "../api/user.api";

test.describe("User API", () => {

    let authAPI: AuthAPI;
    let userAPI: UserAPI;

    let token: string;

    test.beforeEach(async ({ request }) => {

        authAPI = new AuthAPI(request);

        token = await authAPI.login(
            "admin@example.com",
            "password"
        );

        userAPI = new UserAPI(request, token);
    });

test.afterEach(async () => {
    if (userId) {
        await userAPI.deleteUser(userId);
    }
});

    let userId: number;
    test("Create user successfully", async () => {

        const email = `trangnm_${Date.now()}@gmail.com`;

        const response = await userAPI.createUser(
            "User1",
            email,
            "password",
            "link_fb_1",
            "link_avt_1",
            "hobby_1",
            "admin"
        );

        console.log(response);

        expect(response.user.email).toBe(email);
        userId = response.user.id;
    });


    test("Get users successfully", async () => {

        const response = await userAPI.getUsers();

        console.log(response);

        expect(response.success).toBe(true);
        expect(response.users.length).toBeGreaterThan(0);
    });

});