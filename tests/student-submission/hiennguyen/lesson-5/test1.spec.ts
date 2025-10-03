import { test, expect } from '@playwright/test';

test('Register Page', async ({ page }) => {
    await test.step('Step 1: Navigate', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Step 2: Click', async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step('Step 3: Input form', async () => {
        await page.locator('#username').fill('Hien Nguyen');
        await page.locator('#email').fill('hiennguyen@gmail.com');
        await page.locator('#female').check();
        await page.locator('#reading').check();
        await page.locator('#interests').selectOption('Art');
        await page.locator('#country').selectOption('United Kingdom');
        await page.locator('#dob').fill('1996-02-27');
        await page.setInputFiles('#profile', 'tests/student-submission/hiennguyen/lesson-5/example.jpg');
        await page.locator('#bio').fill('none');
        await page.locator('#rating').fill('6');
        await page.locator('#favcolor').fill('#002aff');
        await page.locator('#newsletter').check();
        await page.click('#toggleOption + .slider');
    });

    await test.step('Step 4: Tap button Register', async () => {
        await page.getByRole('button', { name: 'Register' }).click();
    });
});
