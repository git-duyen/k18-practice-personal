import { expect, test } from '@playwright/test';

test("Context fixture", async ({ context }) => {
    const page1 = await context.newPage();
    await page1.goto("https://material.playwrightvn.com");
    await expect(page1.getByRole("heading", { name: "Tài liệu học automation test" })).toBeVisible();
    
    const page2 = await context.newPage();
    await page2.goto("https://e-commerce-dev.betterbytesvn.com");
    await expect(page2.getByRole("heading", { name: "Shop" })).toBeVisible();
});
