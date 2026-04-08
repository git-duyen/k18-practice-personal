import { test } from "@playwright/test";

test("Context fixture", async({ context}) => {
    const tab1 = await context.newPage();
    await tab1.goto("https://material.playwrightvn.com");

    const tab2 = await context.newPage();
    await tab2.goto("https://e-commerce-dev.betterbytesvn.com");
})

test("Browser fixture", async({ browser }) => {
    const createdContext1 = await browser.newContext();
    const tab1 = await createdContext1.newPage();
    await tab1.goto("https://material.playwrightvn.com");

    const createdContext2 = await browser.newContext();
    const tab2 = await createdContext2.newPage();
    await tab2.goto("https://e-commerce-dev.betterbytesvn.com");
})