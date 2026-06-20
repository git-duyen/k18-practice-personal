import { test } from '@playwright/test';

test('Test 1: Register page', async ({ page }) => {
    await test.step('Step 1: Nhap thong tin', async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[@href='01-xpath-register-page.html']");
        await page.locator("//input[@id='username']").fill('Phạm Thị Hà My');
        await page.locator("//input[@id='email']").fill('phamhamy.hvtc@gmail.com');
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='interests']").selectOption({ value: 'music' });
        await page.locator("//select[@id='country']").selectOption({ value: 'australia' });
        await page.locator("//input[@id='dob']").pressSequentially('09101992');
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/profile-picture.jpg");
        await page.locator("//textarea[@id='bio']").fill('bio test');
        await page.locator("//input[@id='rating']").fill('4');
        await page.locator("//input[@id='favcolor']").fill('#ff00c8');
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//span[@class='slider round']").click();
        await page.locator("//div[@id='starRating']").click();
    });
    
    await test.step('Step 2: Register', async() => {
        await page.locator("//button[text()='Register']").click();
    });
})