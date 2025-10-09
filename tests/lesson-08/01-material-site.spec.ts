import { test } from "@playwright/test";

test.describe("Material site", async () => {
    test.beforeAll(async ({ page }) => {
        await page.goto("https://playwrightvn.com");
    });

    test.beforeEach(async ({ page }) => {
        await test.step("Go to material page", async () => {
            await page.goto("https://material.playwrightvn.com/index.html");
        });
    });

    test.afterEach(async ({ page }) => {
        await page.goto("https://google.com");
    });

    test.afterAll(async ({ page }) => {
        console.log("Tat ca da xong");
    });

    test("User registration page", async ({ page }) => {
        // await test.step("Go to material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/index.html");
        // });

        await test.step("Click to User registration page", async () => {
            await page.locator("//a[@href='01-xpath-register-page.html']").click();
        });
    });

    test("Product page", async ({ page }) => {
        // await test.step("Go to material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/index.html");
        // });

        await test.step("Click to Product page", async () => {
            await page.locator("//a[@href='02-xpath-product-page.html']").click();
        });
    });



});
