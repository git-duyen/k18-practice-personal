import { test } from '@playwright/test';

test('Context fixture', async({ context}) => {
    const page1 = await context.newPage();
    await page1.goto("https://material.playwrightvn.com");
    const page2 = await context.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
})


test('Browser fixture', async({ browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://material.playwrightvn.com");
    const page2 = await context.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
})

