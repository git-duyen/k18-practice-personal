import { test } from '@playwright/test';

const username = 'Ngan Nguyen';
const email = 'abc@gmail.com';
const dob = '1995-04-02';
const biography = 'Testing';
const country = 'Canada';

test('Register a new account', async ({ page }) => {
    await test.step('Navigate to website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Navigate to Register Page', async () => {
        await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
    })

    await test.step('Input required information', async () => {
        await page.locator(`//input[@id ='username']`).fill(username);
        await page.locator(`//input[@id ='email']`).fill(email);
        await page.locator(`//input[@id ='female']`).check();
        await page.locator(`//input[@id = 'traveling']`).check();
        await page.getByLabel(`interests`).selectOption(['Art', 'Music']);
        await page.getByLabel(`country`).selectOption(country);
        await page.locator(`//input[@id = 'dob']`).fill(dob);
        await page.locator(`//input[@id = 'profile']`).setInputFiles('data-test/Image.png');
        await page.locator(`//textarea[@id = 'bio']`).fill(biography);
        await page.locator(`//input[@id = 'rating']`).fill('8');
        await page.locator(`//input[@id = 'favcolor']`).fill('#ff0000');
        await page.locator(`//div[@class = 'tooltip']`).hover();
        await page.locator(`//input[@id = 'newsletter']`).check();
        await page.locator(`//span[@class = 'slider round']`).check();
    })

    await test.step('Click to Register button', async () => {
        await page.locator(`//button[@type = 'submit']`).click();
    })

});