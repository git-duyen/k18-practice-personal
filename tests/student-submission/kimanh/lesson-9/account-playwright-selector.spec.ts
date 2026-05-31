import { test, expect } from "@playwright/test";
let userToCleanup;
const admin = {
    userName: "betterbytes.academy.admin",
    passWord: "StrongPass@BetterBytesAcademy",
};

const user = {
    userName: "Kim Anh30",
    email: "kimanh30@gmail.com",
    passWord: "12345678",
    firstName: "E101",
    lastName: "Kim Anh",
    role: "Editor",
};
const userSubscriber = {
    userName: "Kim Anh40",
    email: "kimanh40@gmail.com",
    passWord: "12345678",
    firstName: "E101",
    lastName: "Kim Anh",
    role: "Subscriber",
};
async function logout(page) {
    //Logic logout
    await page.locator("//img[@class='avatar avatar-26 photo']").hover();
    await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
    await page.locator("//a[contains(text(), 'Log Out')]").click();
}
async function loginAdmin(page) {
    //Logic login
    await page.getByRole("textbox", { name: "Username" }).fill(admin.userName);
    await page.getByRole("textbox", { name: "Password" }).fill(admin.passWord);
    await page.getByRole('button', { name: 'Log in' }).click();
}
async function findToUser(page, username) {
    //Logic find user
    await page.getByRole("link", { name: "Users", exact: true }).click();
    await page.getByLabel("Search Users").fill(username);
    await page.getByRole("button", { name: "Search Users" }).click();
}
async function deleteUser(page, username) {
    //Logic deleted
    await page.getByRole("link", { name: username }).hover();
    // await page.locator("//td[@data-colname='Username']").hover();
    await expect(page.getByRole("link", { name: "Delete" })).toBeVisible();
    await page.getByRole("link", { name: "Delete" }).click();
    const deleteAllContentRadio = page.getByText("Delete all content.");
    if (await deleteAllContentRadio.isVisible()) {
        await deleteAllContentRadio.check();
    }
    await page.getByRole("button", { name: "Confirm Deletion" }).click();
}
async function searchUser(page, username) {
    //Confirm không hiển thị acc trong list account
    await page.getByRole("searchbox").fill(username);
    await page.getByRole("button", { name: "Search Users" }).click();
    const message2 = page.getByText("No users found.")
    await expect(message2).toContainText("No users found.");
}
test.describe("ACCOUNT-Account", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });

    test.afterEach(async ({ page }) => {
        if (userToCleanup) {
            await logout(page);
            await loginAdmin(page);
            await findToUser(page, userToCleanup.userName);
            await deleteUser(page, userToCleanup.userName);
            await searchUser(page, userToCleanup.userName);
        }
    });
    test("Create acc with editor permission", async ({ page }) => {
        userToCleanup = user;
        await test.step("Login", async () => {
            await page.getByRole("textbox", { name: "Username" }).fill(admin.userName);
            await page.getByRole("textbox", { name: "Password" }).fill(admin.passWord);
        });
        await test.step("Click button Login & Go to manager User Page", async () => {
            await page.getByRole('button', { name: 'Log in' }).click();
            await expect(page.getByRole("link", { name: "Users", exact: true })).toBeVisible();
        });

        await test.step("Click menu Users", async () => {
            await page.getByRole("link", { name: "Users", exact: true }).click();
            await expect(page.locator("//a[@href='user-new.php']")).toBeVisible()
        });

        await test.step("Add user", async () => {
            await page.locator("//a[@class='page-title-action']").click();
            await page.getByRole("textbox", { name: "Username" }).fill(userToCleanup.userName);
            await page.getByRole("textbox", { name: "Email" }).fill(userToCleanup.email);
            await page.getByRole("textbox", { name: "First Name" }).fill(userToCleanup.firstName);
            await page.getByRole("textbox", { name: "Last Name" }).fill(userToCleanup.lastName);
            await page.getByRole("textbox", { name: "Password" }).fill(userToCleanup.passWord);
            await page.getByRole("checkbox", { name: "Confirm use of weak password" }).check();
            await page.getByLabel("Role").selectOption({ label: userToCleanup.role });
            await page.locator("//input[@id='createusersub']").click();
            const message = page.getByText("New user created.")
            await expect(message).toContainText("New user created. ");
        });

        await test.step("Logout and Login again with new acc", async () => {
            //Logout
            await logout(page);
            // await page.locator("//img[@class='avatar avatar-26 photo']").hover();
            // await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            // //Login
            // await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.getByRole("textbox", { name: "Username" }).fill(user.userName);
            await page.getByRole("textbox", { name: "Password" }).fill(user.passWord);
            await page.getByRole('button', { name: 'Log in' }).click();
            //Check hiển thị menu
            await expect(page.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Appearance' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Users' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Plugins' })).toBeHidden();
            await expect(page.getByRole('link', { name: 'Posts', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Media', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Pages', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Comments', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Tools', exact: true })).toBeVisible();
        });
    });
    test("Create acc with subscriber permission", async ({ page }) => {
        userToCleanup = userSubscriber;
        await test.step("Login", async () => {
            await page.getByRole("textbox", { name: "Username" }).fill(admin.userName);
            await page.getByRole("textbox", { name: "Password" }).fill(admin.passWord);
        });
        await test.step("Click button Login & Go to manager User Page", async () => {
            await page.getByRole('button', { name: 'Log in' }).click();
            await expect(page.getByRole("link", { name: "Users", exact: true })).toBeVisible();
        });

        await test.step("Click menu Users", async () => {
            await page.getByRole("link", { name: "Users", exact: true }).click();
            await expect(page.locator("//a[@href='user-new.php']")).toBeVisible()
        });

        await test.step("Add user", async () => {
            await page.locator("//a[@class='page-title-action']").click();
            await page.getByRole("textbox", { name: "Username" }).fill(userToCleanup.userName);
            await page.getByRole("textbox", { name: "Email" }).fill(userToCleanup.email);
            await page.getByRole("textbox", { name: "First Name" }).fill(userToCleanup.firstName);
            await page.getByRole("textbox", { name: "Last Name" }).fill(userToCleanup.lastName);
            await page.getByRole("textbox", { name: "Password" }).fill(userToCleanup.passWord);
            await page.getByRole("checkbox", { name: "Confirm use of weak password" }).check();
            await page.getByLabel("Role").selectOption({ label: userToCleanup.role });
            await page.locator("//input[@id='createusersub']").click();
            const message = page.getByText("New user created.")
            await expect(message).toContainText("New user created. ");

        });

        await test.step("Logout and Login again with new acc", async () => {
            //Logout
            await logout(page);
            // await page.locator("//img[@class='avatar avatar-26 photo']").hover();
            // await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            // //Login
            // await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.getByRole("textbox", { name: "Username" }).fill(userToCleanup.userName);
            await page.getByRole("textbox", { name: "Password" }).fill(userToCleanup.passWord);
            await page.getByRole('button', { name: 'Log in' }).click();
            //Check hiển thị menu
            await expect(page.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Profile', exact: true })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Appearance' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Users' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Plugins' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Posts' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Media' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Pages' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Comments' })).toBeHidden();
            await expect(page.getByRole('heading', { name: 'Tools' })).toBeHidden();
        });
    });
});