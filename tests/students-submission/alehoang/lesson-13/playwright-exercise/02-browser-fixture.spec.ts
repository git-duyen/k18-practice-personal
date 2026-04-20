import { expect, test } from '@playwright/test';

test("Browser fixture", async ({ browser }) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://material.playwrightvn.com");
    await expect(page1.getByRole("heading", { name: "Tài liệu học automation test" })).toBeVisible();
    
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
    await expect(page2.getByRole("heading", { name: "Shop" })).toBeVisible();
});
