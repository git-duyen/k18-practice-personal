import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    await test.step("Navigate to msterial website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 1", async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Input", async () => {
        // await page.locator("//input[@id = 'username']").fill("Uyen Pham");
        // await page.locator("//input[@id = 'email']").pressSequentially("uyenbetterbytes@gmail.com", { delay: 1_000 });

    });

    await test.step("Radio button / Checkbox", async () => {
        let isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
        console.log(isCheckedMale);

        await page.locator("//input[@id = 'male']").check();
        isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
        console.log(isCheckedMale);
    });

    await test.step("Select option", async () => {
        await page.locator('//select[@id="country"]').selectOption("canada");

        await page.locator('//input[@type="file"]').setInputFiles("data-test/data-test.txt");
    });
});