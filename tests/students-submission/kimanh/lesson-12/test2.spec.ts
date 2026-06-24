import { test, expect } from "@playwright/test";
import { UserApiPage } from "./00-pom-api";

test("CRUD User", async ({ request }) => {
    const userApiPage = new UserApiPage(request);
    let userId: number;

    const userData = {
        name: "Kim Anh1",
        email: "kimanh1@gmail.com",
        password: "password",
        facebook: "https://facebook.com/newuser",
        avatar: "https://i.pravatar.cc/150?img=20",
        hobbies: "Reading, Coding",
        role: "user",
    };
    await userApiPage.login(
        "admin@example.com",
        "password"
    );
    await test.step("Create User", async () => {
        const responseBody = await userApiPage.createUser(userData);

        userId = responseBody.user.id;

        userId = responseBody.user.id;
        // Verify thông tin user mới tạo ra được trả về đúng như dữ liệu gửi đi
        expect(responseBody.user.name).toBe(userData.name);
        expect(responseBody.user.email).toBe(userData.email);
        expect(responseBody.user.role).toBe(userData.role);
    });
    await test.step("Verify User In List", async () => {
        const response = await userApiPage.getUsers();

        const isUserInList = response.users.some(
            (user: { id: number }) => user.id === userId
        );

        expect(isUserInList).toBeTruthy();
    });

    await test.step("Delete User", async () => {
        await userApiPage.deleteUser(userId);
    });
});
