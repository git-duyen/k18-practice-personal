// 1. Truy cập trang https://material.playwrightvn.com/ 
// 2. Click vào Bài 1
// 3. Nhập đầy đủ các thông tin
// 4. Click button register

import { test } from '@playwright/test';

test('test1', async ({ page }) => {

    // Truy cập trang web https://material.playwrightvn.com/
    await test.step('Navigate to web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Click Bài 1
    await test.step('Click to Bài học 1: Register Page (có đủ các element)', async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click()
    });

    // Nhập đầy đủ các thông tin
    // Nhập user name
    await test.step('Fill user name', async () => {
        await page.locator("//input[@id='username']").fill('thanhphan');
    });

    // Nhập email
    await test.step('Fill email', async () => {
        await page.locator("//input[@id='email']").pressSequentially('thanhphan@gmail.com', { delay: 75 });
    });

    // Chọn giới tính
    await test.step('Select gender', async () => {
        await page.locator("//input[@id='female']").click();
    });

    // Chọn hobies
    await test.step('Select hobies', async () => {
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
    });

    // Chọn interests
    await test.step('Select interests', async () => {
        await page.locator("//select[@id='interests']").selectOption({ value: 'art' });
    });

    // Chọn country
    await test.step('Select country', async () => {
        await page.locator("//select[@id='country']").selectOption({ value: 'uk' });
    });

    // Nhập DOB
    await test.step('Fill Date of birth', async () => {
        await page.locator("//input[@id='dob']").fill('1997-12-09');
    });

    // Choose file
    await test.step('Choose file', async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/01-dom.txt");
    });

    // Nhập Biography
    await test.step('Fill Biography', async () => {
        await page.locator("//textarea[@id='bio']").fill("I am a manual tester. I learning Automation test for my job");
    });

    // Fill Range Slider
    await test.step('Fill Rating', async () => {
        await page.locator("//input[@id='rating']").fill("10");
    });

    // Fill color
    await test.step('Fill Favorite Color', async () => {
        await page.locator("//input[@id='favcolor']").fill("#000080");
    });

    // Hover over me
    await test.step('Hover over me', async () => {
        await page.locator("//div[@class='tooltip']").hover() ;
    });

    // Check Newsletter
    await test.step('Check Subscipe', async () => {
        await page.locator("//input[@id='newsletter']").check();
    });

    // Toggle: Enable
    await test.step('Enable Feature', async () => {
        await page.locator("//span[@class='slider round']").click();
    });

    // Custom Rating Component 
    await test.step('Star rating', async () => {
        // Xác định tạo độ
        const rating = await page.locator("//div[@id='starRating']").boundingBox();
        // Điều kiện nếu k lấy được 
        if (!rating) {
            return; // Không dùng console.log vì câu nó chỉ in câu lệnh chứ không ngưng chương trình nếu trả kết quả null
        };
        // Thao tác
        await page.locator("//div[@id='starRating']").click({
            position: {
                x: rating.width * 0.8,
                y: rating.height / 2
            }
        });
    });

    // Custom Date: Không thao tác được

    // Select register
    await test.step('Select Register', async () => {
        await page.locator("//button[@type='submit']").click();
    });
});