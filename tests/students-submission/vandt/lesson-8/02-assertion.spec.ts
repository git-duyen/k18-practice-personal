import { test, expect } from '@playwright/test';
test("demo expect", async() => {
    expect(1+2).toEqual(3);

    //expect arr length
    const arr = [1,3,5];
    expect(arr).toHaveLength(3);

    //expect string contains
    const str = "Hello Viet Nam";
    expect(str).toContain("Nam");
});

test("Material page", async({page}) => {
    await page.goto("https://material.playwrightvn.com/");

    const title = await page.title();
    expect(title).toContain("Playwright Việt Nam");
})