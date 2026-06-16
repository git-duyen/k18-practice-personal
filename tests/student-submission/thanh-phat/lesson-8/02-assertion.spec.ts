import { test, expect } from "@playwright/test";


test("Demo expect", async () => {
    expect(1 + 2).toEqual(3);

    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);

    const str = "Hello VietNam";
    expect(str).toContain("VietNam");
});

test("Material test", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    const title = await page.title();
    expect(title).toContain("Playwright");
});
