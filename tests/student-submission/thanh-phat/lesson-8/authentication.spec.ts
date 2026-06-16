import { test, expect } from "@playwright/test";

interface testUserData {
    username: string,
    password: string
}

const usernameField: string = 'input#user_login';
const passwordField: string = 'input#user_pass';
const loginBtn: string = 'input#wp-submit';
const errorToast: string = 'div#login_error>p';
const dashboardHeading: string = 'div#wpbody h1';

test.describe("AUTH - Authentication", () => {

    const testdata: testUserData[] = [
        {
            username: 'thanhphattest',
            password: 'thanhphattest',
        },
        {
            username: 'betterbytes.academy.admin',
            password: 'StrongPass@BetterBytesAcademy',
        }
    ]

    test.beforeEach("Go to url", async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });

    test("AUTH_001 - Login fail", async ({ page }) => {
        await test.step("Input wrong username", async () => {
            await page.locator(usernameField).fill(testdata[0].username);
        });
        await test.step("Input wrong password", async () => {
            await page.locator(passwordField).fill(testdata[0].password);
        });
        await test.step("Click on login button", async () => {
            expect(page.locator(loginBtn)).toBeVisible();
            await page.locator(loginBtn).click();
        });
        await test.step("Verify error toast is displayed", async () => {
            await expect(page.locator(errorToast)).toBeVisible();
            await expect(page.locator(errorToast)).toContainText(`Error: The username ${testdata[0].username} is not registered on this site.`);
        });
    });

    test("AUTH_002 - Login success", async ({ page }) => {
        await test.step("Input correct username", async () => {
            await page.locator(usernameField).fill(testdata[1].username);
        });
        await test.step("Input correct password", async () => {
            await page.locator(passwordField).fill(testdata[1].password);
        });
        await test.step("Click on login button", async () => {
            expect(page.locator(loginBtn)).toBeVisible();
            await page.locator(loginBtn).click();
        });
        await test.step("Verify URL and heading", async () => {
            expect(page).toHaveURL(/\/wp-admin\//);
            await expect(page.locator(dashboardHeading)).toHaveText('Dashboard');
        });
    });
});