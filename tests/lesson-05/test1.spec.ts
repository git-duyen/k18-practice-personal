import { test } from '@playwright/test'

test('test1', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('click Bài hoc 1, Register', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

    await test.step('Nhập username', async () => {
        await page.locator('//input[@id="username"]').fill('Duyen Nguyen');
    });

    await test.step('Nhập Email', async () => {
        await page.locator('//input[@id="email"]').pressSequentially('ntcduyen@gmail.com');
    });

    await test.step('Select Gender', async () => {
        // let isCheckedGender = page.locator('//input[@id="female"]').isChecked();
        await page.locator('//input[@id="female"]').check();
    });

    await test.step('Select Hobbies', async () => {
        await page.locator('//input[@id="cooking"]').check();
    });

    await test.step('Select Interests', async () => {
        await page.locator('//select[@id="interests"]').selectOption(['Science', 'Music']);
    });

    await test.step('Select Country', async () => {
        await page.locator('//select[@id="country"]').selectOption('Canada');
    });

    await test.step('Nhập Ngày Sinh', async () => {
        await page.locator('//input[@id="dob"]').fill('1990-05-10');
    });

    await test.step('Upload profile picture', async () => {
        await page.locator('//input[@id="profile"]').setInputFiles('tests/lesson-05/data-test/flower1.jpg');
    });

    await test.step('Fill Biography', async () => {
        await page.locator('//textarea[@id="bio"]').fill('Tên đầy đủ là Nguyễn Thị Cẩm Duyên');
    });

    await test.step('Click button register', async () => {
        await page.locator('//button[text()="Register"]').click();
    });

});