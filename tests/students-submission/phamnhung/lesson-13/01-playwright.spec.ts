import { test } from '@playwright/test';

test.describe('Test fixture homework', () => {


    test("1. fixture context", async ({ context }) => {
        const page = await context.newPage();
        await page.goto("https://material.playwrightvn.com/");

        const page2 = await context.newPage();
        await page2.goto("https://e-commerce-dev.betterbytesvn.com/");
    });
    test("2. fixture browser", async ({ browser }) => {
        const page = await browser.newPage();
        await page.goto("https://material.playwrightvn.com/");

        const page2 = await browser.newPage();
        await page2.goto("https://e-commerce-dev.betterbytesvn.com/");
    });
});
