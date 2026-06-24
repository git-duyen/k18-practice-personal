import { test } from '@playwright/test';

test('Register page', async ({ page }) => {
    await test.step("Step 1: Nhap thong tin", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    
        // Fill username
        await page.locator("//input[@id = 'username']").fill("Ngoc Tran");

        // Fill email
        await page.locator("//input[@id = 'email']").pressSequentially("tranbichngoc@gmail.com", { delay: 1_000 });
    
        // Check gender
        let isCheckedMale =  await page.locator("//input[@id = 'male']").isChecked();
        console.log (isCheckedMale);

        await page.locator("//input[@id = 'male']").check();
        isCheckedMale =  await page.locator("//input[@id = 'male']").isChecked();
        console.log(isCheckedMale);
     
        // Check hobbies
        let isCheckedReading =  await page.locator("//input[@id = 'reading']").isChecked();
        console.log (isCheckedReading);

        await page.locator("//input[@id = 'reading']").check();
        isCheckedReading =  await page.locator("//input[@id = 'reading']").isChecked();
        console.log(isCheckedReading);

        // Select interests
        await page.locator('//select[@id = "interests"]').selectOption("music");

        // Select country
        await page.locator('//select[@id = "country"]').selectOption("canada");

        // Fill Date of birth
        await page.locator("//input[@id = 'dob']").fill("1996-05-20");

        // Update file
        await page.locator('//input[@type="file"]').setInputFiles("demo-5/data-test.txt");

        // Fill biography
        await page.locator("//textarea[@id = 'bio']").fill("Ngoc Tran");
     });
     
    await test.step("Step 2: Click button Register", async () => {
        await page.locator("//button[@type='submit']").click();
    });
});
