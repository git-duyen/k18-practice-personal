import { test } from '@playwright/test';

test('Demo playwright selector', async ({ page }) => {
    page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    const title = await page.locator("//h1[@id='self']").textContent();
    const title2 = await page.getByRole("heading", { name: "User Registration" }).textContent();
    
    // W3C
    page.getByRole("checkbox", { name: "Traveling" }).check();
    await page.getByRole("checkbox", { name: "Cooking" }).check();
    await page.getByRole("radio", { name: "FeMale" }).click();

    console.log(title);
    console.log(title2);

    await page.getByLabel("Username").fill("hihi@gmail.com");
});

test('Demo playwright selector - 2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/12-dom-nested.html");
    const text = await page.getByRole("listitem").filter({ hasText: "H"}).count();
    console.log(text);
});