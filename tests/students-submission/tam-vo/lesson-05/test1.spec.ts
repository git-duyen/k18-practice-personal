import { test } from '@playwright/test';

test('Test 1: Register page', async ({ page }) => {
    await test.step('a. Nhập thông tin', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(text(),"Bài học 1: Register Page")]').click();

        //=========== Input username ============
        await page.locator('//input[@id="username"]').pressSequentially('Thanh Tam', { delay: 100 });

        //=========== Input email ============
        await page.locator('//input[@id="email"]').pressSequentially('tamvo@qa.team', { delay: 100 });

        //=========== Input Gender ===========
        await page.locator('//input[@id="female"]').check();

        //=========== Input Hobbies ============
        await page.locator('//input[@id="traveling"]').check();

        //========= Input Interests ============
        await page.locator('//select[@id="interests"]').selectOption('technology');

        //========= Select Country ============
        await page.locator('//select[@id="country"]').selectOption('uk');

        //========= Input Date of birth ============
        await page.locator('//input[@id="dob"]').fill('1995-06-08');

        //========= Input Profile picture ============
        await page.locator('//input[@id="profile"]').setInputFiles('tests/test-data/image.png');

        //========= Input Bio ============
        await page.locator('//textarea[@id="bio"]').fill('I am a software engineer.');

        //======== Set Slider Rating ========
        const slider = page.locator('//input[@id="rating"]');
        const boxSlide = await slider.boundingBox();
        if (!boxSlide)
            throw new Error('Star rating element not found');
        const targetValue = 8;
        const minvalue = Number(await slider.getAttribute('min')) || 0;
        const maxvalue = Number(await slider.getAttribute('max')) || 10;
        const slidepercent = (targetValue - minvalue) / (maxvalue - minvalue);
        const sliderX = boxSlide.x + slidepercent * boxSlide.width;
        const slideY = boxSlide.y + boxSlide.height / 2;
        await page.mouse.click(sliderX, slideY);

        //========== Set Color Picker ========
        await page.locator('//input[@id="favcolor"]').fill('#ff5900');

        //========== Checkbox and Toggle ========
        await page.locator('//input[@id="newsletter"]').check();

        //=========== Toggle Switch ========
        await page.locator('//label[@class="switch"]').check();

        // ======== Set Star Rating ========
        const starRating = page.locator('//div[@id="starRating"]');
        const boxRating = await starRating.boundingBox();
        if (!boxRating)
            throw new Error('Star rating element not found');
        //console.log(box);
        const targetRating = 4.5;
        const starX = boxRating.x + (targetRating / 5) * boxRating.width;
        const starY = boxRating.y + boxRating.height / 2;
        //return { x, y };
        await page.mouse.click(starX, starY);
    });

    // =========== CLick Submit button ========
    await test.step('b. Click button Register', async () => {
        await page.locator('//button[@type="submit"]').click();
    });

});