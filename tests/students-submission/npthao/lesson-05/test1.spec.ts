import { test } from '@playwright/test';

test ('Test 1', async({ page }) => {
    await test.step("Step 1: Access Main Page" , async() => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step ("Step 2: Click Register Page", async() => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step ("Step 3: Fill Username/Email", async() =>{
        await page.locator("//input[@id='username']").fill("Thanh");
        await page.locator("//input[@id='email']").fill("thao@email.com");

        
    });

    await test.step ("Step 4: Check Gender Radio", async() =>{
        let isCheckedFemale = await page.locator ("//input[@id='female']").isChecked();
        await page.locator("//input[@id='female']").check();
        isCheckedFemale = await page.locator("//input[@id='female']").isChecked();
        
    });

    await test.step ("Step 5: Select Hobbies Checkbox", async() =>{
        let isCheckedHobbies = await page.locator ("//input[@id='traveling']").isChecked();
        await page.locator("//input[@id='traveling']").check();

    });

    await test.step ("Step 6: Select Interests Option", async() =>{
        const intersetSelect = page.locator("//select[@id='interests']")

        await intersetSelect.selectOption(['Technology'])

    });

    await test.step ("Step 7: Select Country " , async() => {
        await page.locator("//select[@id='country']").selectOption("Australia")
    });

    await test.step ("Step 8: Select DOB", async() => {
        await page.locator("//input[@id='dob']").fill("2001-09-15");
        
    });

    await test.step("Step 9: Upload Profile pic" , async() => {
        await page.locator("//input[@type='file']").setInputFiles("tests/lession-05/data-test/data-test.txt")
    });

    await test.step("Step 10: Input Biography", async ()=> {
        await page.locator("//textarea[@id='bio']").fill("abcd");
    });

    await test.step("Step 11: Click Register", async() => {
        await page.locator("//button[@type='submit']").click()
    });

})