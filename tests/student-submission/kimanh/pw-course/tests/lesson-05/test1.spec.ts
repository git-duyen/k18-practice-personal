import { test } from '@playwright/test';

test('Basic Action', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Click on Register Page link", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });
    await test.step("Input email,username", async () => {
        await page.locator("//input[@id ='username']").fill("KimAnh");
        await page.locator("//input[@id ='email']").pressSequentially("kimanh@gmail.com", { delay: 100 });
    });
    await test.step("Radio button Gender", async () => {
        let isCheckedMale = await page.locator("//input[@id ='male']").isChecked();
        console.log(isCheckedMale);

        await page.locator("//input[@id ='male']").check();
        isCheckedMale = await page.locator("//input[@id ='male']").isChecked();
        console.log(isCheckedMale);
    });
    await test.step("Checkbox Hobbies", async () => {
        let isCheckedHobbies = await page.locator("//input[@id='cooking']").isChecked();
        console.log(isCheckedHobbies);

        await page.locator("//input[@id='cooking']").check();
        isCheckedHobbies = await page.locator("//input[@id='cooking']").isChecked();
        console.log(isCheckedHobbies);
    });
    await test.step("Select interests", async () => {
        await page.locator("//select[@id='interests']").selectOption("science");
    });
    await test.step("Select option Country", async () => {
        await page.locator("//select[@id ='country']").selectOption("canada");
    });

    await page.locator("//input[@id='dob']").fill("1995-08-12");

    await page.locator("//input[@type ='file']").setInputFiles("tests/data-test/data-test.txt");

    await page.locator("//textarea[@id ='bio']").fill("Kim Anh automation test");

    await page.locator("//input[@id ='rating']").fill("8");

    await test.step("Checkbox", async () => {
        let isCheckedNewsletter = await page.locator("//input[@id ='newsletter']").isChecked();
        console.log(isCheckedNewsletter);

        await page.locator("//input[@id ='newsletter']").check();
        isCheckedNewsletter = await page.locator("//input[@id ='newsletter']").isChecked();
        console.log(isCheckedNewsletter);
    });

    // await page.locator("//input[@id='customDate']").fill("2026-05-20");
    await test.step("Click button Register", async () => {
        await page.locator("//button[@type='submit']").click();
    });

})