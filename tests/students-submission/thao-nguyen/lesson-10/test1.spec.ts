import { test, expect } from '@playwright/test';
import { RegisterPage } from './01-pom';

test('truy cập trang', async ({ page }) => {
    // 1. Khởi tạo RegisterPage. 
    // Lúc này Constructor của RegisterPage và MaterialBasePage sẽ chạy để gán 'page' vào class.
    const registerPage = new RegisterPage(page);

    // 2. Truy cập trang chủ bằng hàm của BasePage
    await registerPage.openMaterialPage();

    // 3. Click vào link để tới trang Register (sử dụng locator có sẵn trong class)
    await page.locator(registerPage.xpathRegisterPage).click();
    await registerPage.fillUsername('Thaotest');
    await registerPage.fillEmail('thaotest@gmail.com');
    await registerPage.checkGender('male');
    await page.locator(registerPage.xpathReading).check();
    await page.locator('//input[@id="traveling"]').check(); 
    await page.locator('//input[@id="cooking"]').check();
    await page.locator('//select[@id="interests"]').selectOption('technology');
    await page.locator(registerPage.xpathCountry).selectOption('uk');
    await page.locator(registerPage.xpathDateOfBirth).fill('2026-02-03');
    //await page.locator(registerPage.xpathProfilePicture).setInputFiles('thao-nguyen/lesson-05/thaotest.jpg');
    await page.locator(registerPage.xpathBiography).fill('thaotest bio');
    await page.locator(registerPage.xpathRating).fill('4');
    await page.locator(registerPage.xpathFavoriteColor).fill('#ff0000');

    const tooltipText = page.locator('.tooltiptext').nth(1);
    await expect(tooltipText).toBeHidden();   
    await page.locator('.tooltip').hover();
    await expect(tooltipText).toBeVisible();  
    await expect(tooltipText).toHaveText('Subscribe to our newsletter for updates');

    // Toggle và Submit
    await page.locator(registerPage.xpathEnableFeature).click();
    await page.locator(registerPage.xpathSubmitButton).click();
});