import { test } from "@playwright/test";

test ('Test 2', async ({ page }) => {
    await test.step("Step 1: Go to Homepage" , async() => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Step 2: Click Product Page", async() => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step('Step 3: Add to Cart 1', async() => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });

    await test.step("Step 4: Add to Cart 2 ", async() => {
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").dblclick();
    });

        await test.step('Step 5: Add to Cart 3', async() => {
        await page.locator("//button[@data-product-id='3']").click();
    });

})