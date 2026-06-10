import { test } from "@playwright/test";

test.describe("Material site", async () => {
    test("User registration page", async ({ page }) => {
        console.log("Test");
    });

    test("Product page", async ({ page }) => {
        console.log("Test product");
    });
});