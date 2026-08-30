// tên group ${module-code} - {module-name}
// tên test ${case-code}: ${case name}

import { test, expect } from "@playwright/test";


test.describe("AUTH - Authentication", async () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Go to Login page", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin")
        });
    });

    test("@AUTH_001: Login fail", async ({page}) => {
        const userName = "thanh123";
        // Add incorect info 
       await test.step("Add incorect Username", async() => {
            await page.locator('#user_login').fill(userName);
       });

       await test.step("Add incorect Password", async() => {
            await page.locator('#user_pass').fill(userName);
       });

       await test.step("Click Login", async() => {
            await page.locator('#wp-submit').click();
       });

       const errorLog = page.locator('#login_error p')
       await expect (errorLog).toBeVisible();
       await expect (errorLog).toHaveText(`Error: The username ${userName} is not registered on this site. If you are unsure of your username, try your email address instead.`);
    });

    test("@AUTH_002: Login success", async ({page}) => {
        const userName1 = "betterbytes.academy.admin";
        const passWord1 = "StrongPass@BetterBytesAcademy";
        // Add info 
       await test.step("Add incorect Username", async() => {
            await page.locator('#user_login').fill(userName1);
       });

       await test.step("Add incorect Password", async() => {
            await page.locator('#user_pass').fill(passWord1);
       });

       await test.step("Click Login", async() => {
            await page.locator('#wp-submit').click();
       });

       await expect (page).toHaveURL(/\/wp-admin/);
       const heading1 = page.locator('.wrap > h1');
       const heading2 = page.locator('.hndle.ui-sortable-handle');
       await expect (heading1).toHaveText("Dashboard");
       await expect (heading2.filter({hasText: "At a Glance"})).toBeVisible();
       await expect (heading2.filter({hasText: "Activity"})).toBeVisible();       

    });
});