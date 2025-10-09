import { test, expect } from '@playwright/test';

test("Demo expect", async () => {
    expect(1 + 2).toEqual(3);

    // Expect array length
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);

    // Expect string contains
    const str = "Hello Viet Nam";
    expect(str).toContain("Nam");
});

test("Material page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");

    const title = await page.title();
    expect(title).toContain("Playwright Việt Nam");
});

test("Material page - non web-first", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/019-enable-form.html");
    await page.waitForTimeout(10_000);

    const isVisible = await page.locator("//button[@id='submitButton']").isEnabled();
    expect(isVisible).toEqual(true);
});

test("Material page - web-first", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/019-enable-form.html");

    const submitButton = page.locator("//button[@id='submitButton']");
    await expect(submitButton).toBeEnabled({ timeout: 7_000 });
});

test("Material page - demo to have class", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await expect(page).toHaveURL("https://material.playwrightvn.com/01-xpath-register-page.html");

    const containerLocator = page.locator("//div[@id='ancestor']");
    await expect(containerLocator).toHaveClass("container", { timeout: 2_000 });
});