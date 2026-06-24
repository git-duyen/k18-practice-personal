import test from "@playwright/test";

test("Test with context", async ({ context }) => {
    const page1 = await context.newPage();
    await page1.goto("https://material.playwrightvn.com");

    const page2 = await context.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
});

test("Test with browser", async ({ browser }) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://material.playwrightvn.com");
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
    await context1.close();
    await context2.close();
});