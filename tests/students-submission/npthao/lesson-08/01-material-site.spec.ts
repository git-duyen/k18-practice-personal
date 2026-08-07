import { test , expect } from "@playwright/test" ;

test.describe("Authentication" , async() => {

    test.beforeEach(async({ page }) => {
        await test.step("Go to material page" , async() => {
            await page.goto("https://material.playwrightvn.com/");
        });
    });

    test.afterEach(async({page}) => {
        await page.goto("https://google.com/");
    });

    test.afterAll(async({ page }) => {
        console.log("All Done");
    });

    test("User registration page", async( {page}) => {
        // await test.step("Go to material page" , async() => {
        //     await page.goto("https://material.playwrightvn.com/");
        // });
    

        await test.step ("Click to User registration page" , async() => {
            await page.locator("//a[@href='01-xpath-register-page.html']").click();
        });
    });

    test("Product page", async({ page }) => {
        // await test.step("Go to material Page" , async() => {
        //     await page.goto("https://material.playwrightvn.com/");
        // });

        await test.step("Click to product page" , async() => {
            await page.locator("//a[@href='02-xpath-product-page.html']").click();
        });
    });

});

