import { test } from '@playwright/test';

// Driver driver = new Driver();
// driver.goto("https://google.com");

test("My simple UI test", async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://material.playwrightvn.com");

    const page2 = await context.newPage();
    await page2.goto("https://google.com");
});

test("My simple UI test - page only", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
});

test("My simple API test", async ({ request }) => {

});

test("My simple test with browser", async ({ browser }) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://material.playwrightvn.com");

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://google.com");

    console.log("stop here");
});

test("My simple test with browserName", async ({ browserName }) => {
    test.skip(browserName === 'chromium' || browserName === 'firefox');
    console.log(browserName);
});