import { test, expect } from "@playwright/test";
let userToCleanup;
const admin = {
    userName: "betterbytes.academy.admin",
    passWord: "StrongPass@BetterBytesAcademy",
};

const user = {
    userName: "Kim Anh1",
    email: "kimanh1@gmail.com",
    passWord: "12345678",
    firstName: "E101",
    lastName: "Kim Anh",
    role: "Editor",
};
const userSubscriber = {
    userName: "Kim Anh20",
    email: "kimanh20@gmail.com",
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
    await page.locator("//input[@id='user_login']").fill(admin.userName);
    await page.locator("//input[@id='user_pass']").fill(admin.passWord);
    await page.locator("//input[@id='wp-submit']").click();
}
async function findToUser(page, username) {
   //Logic find user
    await page.locator("//div[@class='wp-menu-name']/ancestor::a[@href='users.php']").click();
    await page.locator("//input[@id='user-search-input']").fill(username);
    await page.locator("//input[@id='search-submit']").click();
}
async function deleteUser(page, username) {
   //Logic deleted
    await page.locator("//td[@data-colname='Username']").hover();
    await expect(page.locator("//a[contains(text(), 'Delete')]")).toBeVisible();
    await page.locator("//a[contains(text(), 'Delete')]").click();
    const deleteAllContentRadio = page.locator("//label[contains(text(), 'Delete all content.')]");
    if (await deleteAllContentRadio.isVisible()) {
        await deleteAllContentRadio.check();
    }
    await page.locator("//input[@id='submit']").click();
}
async function searchUser(page, username) {
    //Confirm không hiển thị acc trong list account
    await page.locator("//input[@id='user-search-input']").fill(username);
    await page.locator("//input[@id='search-submit']").click();
    const message2 = page.locator("//td[contains(text(), 'No users found.')]");
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
            await page.locator("//input[@id='user_login']").fill(admin.userName);
            await page.locator("//input[@id='user_pass']").fill(admin.passWord);
        });
        await test.step("Click button Login & Go to manager User Page", async () => {
            await page.locator("//input[@id='wp-submit']").click();
            await expect(page.locator("//div[@class='wp-menu-name']/ancestor::a[@href='users.php']")).toBeVisible();
        });

        await test.step("Click menu Users", async () => {
            await page.locator("//div[@class='wp-menu-name']/ancestor::a[@href='users.php']").click();
            await expect(page.locator("//a[@href='user-new.php']")).toBeVisible()
        });

        await test.step("Add user", async () => {
            await page.locator("//a[@class='page-title-action']").click();
            await page.locator("//input[@id='user_login']").fill(userToCleanup.userName);
            await page.locator("//input[@id='email']").fill(userToCleanup.email);
            await page.locator("//input[@id='first_name']").fill(userToCleanup.firstName);
            await page.locator("//input[@id='last_name']").fill(userToCleanup.lastName);
            await page.locator("//input[@id='pass1']").fill(userToCleanup.passWord);
            await page.locator("//input[@name='pw_weak']").check();
            await page.locator("//select[@id='role']").selectOption({ label: userToCleanup.role });
            await page.locator("//input[@id='createusersub']").click();
            const message = page.locator("//div[@class='notice is-dismissible updated']");
            await expect(message).toContainText("New user created. ");

        });

        await test.step("Logout and Login again with new acc", async () => {
            //Logout
            await page.locator("//img[@class='avatar avatar-26 photo']").hover();
            await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            //Login
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.locator("//input[@id='user_login']").fill(user.userName);
            await page.locator("//input[@id='user_pass']").fill(user.passWord);
            await page.locator("//input[@id='wp-submit']").click();
            //Check hiển thị menu
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Dashboard']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Profile']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Appearance']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Users']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Plugins']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Posts']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Media']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Pages']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Comments ']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Tools']")).toBeVisible();
        });
    });
    test("Create acc with subscriber permission", async ({ page }) => {
        userToCleanup = userSubscriber;
        await test.step("Login", async () => {
            await page.locator("//input[@id='user_login']").fill(admin.userName);
            await page.locator("//input[@id='user_pass']").fill(admin.passWord);
        });
        await test.step("Click button Login & Go to manager User Page", async () => {
            await page.locator("//input[@id='wp-submit']").click();
            await expect(page.locator("//div[@class='wp-menu-name']/ancestor::a[@href='users.php']")).toBeVisible();
        });

        await test.step("Click menu Users", async () => {
            await page.locator("//div[@class='wp-menu-name']/ancestor::a[@href='users.php']").click();
            await expect(page.locator("//a[@href='user-new.php']")).toBeVisible()
        });

        await test.step("Add user", async () => {
            await page.locator("//a[@class='page-title-action']").click();
            await page.locator("//input[@id='user_login']").fill(userToCleanup.userName);
            await page.locator("//input[@id='email']").fill(userToCleanup.email);
            await page.locator("//input[@id='first_name']").fill(userToCleanup.firstName);
            await page.locator("//input[@id='last_name']").fill(userToCleanup.lastName);
            await page.locator("//input[@id='pass1']").fill(userToCleanup.passWord);
            await page.locator("//input[@name='pw_weak']").check();
            await page.locator("//select[@id='role']").selectOption({ label: userToCleanup.role });
            await page.locator("//input[@id='createusersub']").click();
            const message = page.locator("//div[@class='notice is-dismissible updated']");
            await expect(message).toContainText("New user created. ");

        });

        await test.step("Logout and Login again with new acc", async () => {
            //Logout
            await page.locator("//img[@class='avatar avatar-26 photo']").hover();
            await expect(page.locator("//a[contains(text(), 'Log Out')]")).toBeVisible();
            //Login
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.locator("//input[@id='user_login']").fill(userToCleanup.userName);
            await page.locator("//input[@id='user_pass']").fill(userToCleanup.passWord);
            await page.locator("//input[@id='wp-submit']").click();
            //Check hiển thị menu
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Dashboard']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Profile']")).toBeVisible();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Appearance']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Users']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Plugins']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Posts']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Media']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Pages']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Comments ']")).toBeHidden();
            await expect(page.locator("//div[@class='wp-menu-name' and text()='Tools']")).toBeHidden();
        });
    });
});