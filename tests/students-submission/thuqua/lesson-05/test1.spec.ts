import { expect, test } from '@playwright/test';

test('Register page', async ({ page }) => {

    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Bai hoc 1: Register page', async () => {
        await page.click("//a[text() ='Bài học 1: Register Page (có đủ các element)']");
    });

    await test.step('Input UserName', async () => {
        await page.locator("//input[@id = 'username']").fill('Thu Qua');
    });

    await test.step('Input Email', async () => {
        await page.locator("//input[@id = 'email']").fill('test@gmail.com');
    });

    await test.step('Select Gender', async () => {
        const isCheckedFemale = await page.locator("//input[@id = 'female']").isChecked();
        if (!isCheckedFemale) {
            await page.locator("//input[@id = 'female']").check();
        }
    });

    await test.step('Select Hobbies 1', async () => {
        const isCheckedReading = await page.locator("//input[@id = 'reading']").isChecked();
        if (!isCheckedReading) {
            await page.locator("//input[@id = 'reading']").check();
        }
    });

    await test.step('Select Hobbies 2', async () => {
        const isCheckedCooking = await page.locator("//input[@id = 'cooking']").isChecked();
        if (!isCheckedCooking) {
            await page.locator("//input[@id = 'cooking']").check();
        }
    });

    await test.step('Select Interests', async () => {
        await page.locator("//select[@id = 'interests']").selectOption('Music');
    });

    await test.step('Select Country', async () => {
        await page.locator("//select[@id = 'country']").selectOption('Canada');
    });

    await test.step('Select DoB', async () => {
        await page.locator("//input[@id = 'dob']").fill('2000-11-11');
    });

    await test.step('Upload Profile Picture', async () => {
        await page.locator("//input[@id = 'profile']").setInputFiles("tests/students-submission/thuqua/data-test/images.jpeg");
    });

    await test.step('Input Bio', async () => {
        await page.locator("//textarea[@id = 'bio']").fill('QA Engineer with a passion for building reliable, user-focused digital experiences.');
    });

    await test.step('Select Rating', async () => {
        await page.locator("//input[@id = 'rating']").fill('8');
    });

    await test.step('Select Favorite Color', async () => {
        await page.locator("//input[@id = 'favcolor']").fill('#2bff00');
    });

    await test.step('Select Newsletter', async () => {
        const isCheckedNewsletter = await page.locator("//input[@id = 'newsletter']").isChecked();
        if (!isCheckedNewsletter) {
            await page.locator("//input[@id = 'newsletter']").click();
        }
    });

    await test.step('Turn on Enable Feature', async () => {
        const isCheckedToggle = await page.locator("//input[@id = 'toggleOption']").isChecked();
        if (!isCheckedToggle) {
            await page.locator("//label[@class = 'switch']").click();
        }
    });

    await test.step('Select Star Rating', async () => {

        const starWidget = page.locator("//div[@id = 'starRating']");
        await expect(starWidget).toBeVisible();

        const box = await starWidget.boundingBox();
        await page.mouse.click(
            box!.x + box!.width * 0.90,
            box!.y + box!.height / 2
        );
    });

    await test.step('Click button Register', async () => {
        await page.click("//button[text() = 'Register']");
    });
});