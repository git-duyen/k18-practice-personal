import { test } from '@playwright/test';

test('Nhập đầy đủ thông tin và click Register', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 1", async () => {
        await page.locator("//a[text() ='Bài học 1: Register Page (có đủ các element)']").click();

    });

    await test.step("Input", async () => {
        await page.locator("//input[@id='username']").fill("Duong Test");
        await page.locator("//input[@id='email']").fill("Duongthuynguyen00@gmail.com");
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator('//select[@id="interests"]').selectOption({ label: 'Music' });
        await page.locator('//select[@id="country"]').selectOption({ label: 'Canada' });
        await page.locator("//input[@id='dob']").fill("2000-10-11");
        await page.locator('//input[@id="profile"]').setInputFiles('tests\\data-test\\data-test.txt');
        await page.locator("//textarea[@id='bio']").fill("This is a test biography file for automation testing purposes.Created by Duong Test");
        await page.locator("//input[@id='rating']").fill("9");
        await page.locator("//input[@id='favcolor']").fill("#8000ff");
        await page.locator("//input[@id='newsletter']").check();
        //await page.locator("//input[@id='toggleOption']").click(); => đoạn này lỗi nên em cmt
        //await page.locator("//input[@id='starRating']") => cái này cũng vậy ạ
        //await page.locator("//input[@id='customDate']").fill("2000-10-11"); => cái này lỗi nên em cmt. chắc e viết sai 
    });

    await test.step("Input", async () => {
        await page.locator("//button[@type='submit']").click();

    });


});