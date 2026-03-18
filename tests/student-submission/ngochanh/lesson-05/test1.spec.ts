import { test } from '@playwright/test';

test('register page', async ({ page }) => {
    await test.step('Open https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Click on Bài học 1: Register Page', async () => {
        await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();
    })

    await test.step('Input to Username', async () => {
        await page.locator("//input[@id='username']").fill('Ngoc Hanh');
    })

    await test.step('Input to Email', async () => {
        await page.locator("//input[@id='email']").fill('ngochanh@gmail.com');
    })

    await test.step('Select Gender', async () => {
        await page.locator("//input[@id='female']").check();
    })

    await test.step('Select Hobbies', async () => {
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
    })

    await test.step('Select Interests', async () => {
        await page.locator("//select[@id='interests']").selectOption({ label: 'Music' });
    })

    await test.step('Select Country', async () => {
        await page.locator("//select[@id='country']").click();
        await page.locator("//select[@id='country']").selectOption({ label: 'Canada' });
    })

    await test.step('Select DOB', async () => {
        await page.locator("//input[@id='dob']").click();
        await page.locator("//input[@id='dob']").pressSequentially('06232000', { delay: 100 });
    })

    await test.step('Select Profile picture', async () => {
        await page.locator("//input[@id='profile']").setInputFiles('img/1.webp');
    })

    await test.step('Input to Biography', async () => {
        await page.locator("//textarea[@id='bio']").fill('Student');
    })

    await test.step('Select Rate', async () => {
        await page.locator("//input[@id='rating']").fill('3');
    })

    await test.step('Select Fav color', async () => {
        await page.locator("//input[@id='favcolor']").fill('#883535');
    })

    await test.step('Select Newsletter', async () => {
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
    })

    await test.step('Enable feature', async () => {
        await page.locator("//span[@class='slider round']").click();
    })

    await test.step('Select Star rate', async () => {
        await page.locator("//div[@id='starRating']").click({
            position: {
                x: 50,
                y: 10
            }
        })
    })

    await test.step('Click on Register button', async () => {
        await page.locator("//button[@type='submit']").click();
    })
});
