import { test } from '@playwright/test';


//1. Context
test("Fixture - Context", async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://material.playwrightvn.com");

    const page2 = await context.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
    await context.close();

});


//2. Browser
test("Fixture - Browser", async ({ browser }) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://material.playwrightvn.com");

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");

    console.log("stop here");
});


