import { test } from "@playwright/test";

test.describe("Material test", async () => {
    test("User Register", async ({ page }) => {
        console.log("Test user registration");
    });
    test("Product Page", async ({ page }) => {
        console.log("Test product page");
    });
});