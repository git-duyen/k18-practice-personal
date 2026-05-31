import { test, expect } from "@playwright/test";

test.describe("AUTH-Authentication", () => {
    const user = {
        userName: "kimanh",
        passWord: "123",
    };

    const admin = {
        userName: "betterbytes.academy.admin",
        passWord: "StrongPass@BetterBytesAcademy",
    };

    test.beforeEach(async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });

    test("@AUTH_001-Login fail", async ({ page }) => {
        await test.step("Input wrong email, password", async () => {
            await page.getByRole("textbox", { name: "Username" }).fill(user.userName);
            await page.getByRole("textbox", { name: "Password" }).fill(user.passWord);
        });
        //Check message when click login button
        await test.step("Click button Login", async () => {
            await page.getByRole('button', { name: 'Log in' }).click();
            const message = page.getByText(`The username ${user.userName} is not registered on this site.`, { exact: false }
            );
            await expect(message).toContainText(`Error: The username ${user.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`);
        });
    });

    test("@AUTH_002-Login success", async ({ page }) => {
        await test.step("Input correct info", async () => {
            await page.getByRole("textbox", { name: "Username" }).fill(admin.userName);
            await page.getByRole("textbox", { name: "Password" }).fill(admin.passWord);
        });

        //Check redirect page
        await test.step("Click button Login", async () => {
            await page.getByRole('button', { name: 'Log in' }).click();
            await expect(page).toHaveURL(/.*wp-admin/)
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
            await expect(page.getByRole('heading', { name: 'At a Glance' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Activity' })).toBeVisible();
        });
    });
});