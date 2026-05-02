import { expect, test } from "@playwright/test";
import { RegisterPage } from './01-pom';

test('Submit register page', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await test.step('Go to Register Page', async () => {
        await registerPage.openMaterialPage();
        await registerPage.gotoPage('Register page');
    });
    await test.step('Submit form', async () => {
        await registerPage.fillUsername("Nhung");
        await registerPage.fillEmail('nhungppp@gmail.com');
        await registerPage.checkGender('female');
        await registerPage.clickSubmitButton();
    });
    await test.step('Check information', async () => {
        await expect(registerPage.xpathTableRow).toContainText('Nhung');
        await expect(registerPage.xpathTableRow).toContainText('nhungppp@gmail.com');
        await expect(registerPage.xpathTableRow).toContainText('female');
    });
});