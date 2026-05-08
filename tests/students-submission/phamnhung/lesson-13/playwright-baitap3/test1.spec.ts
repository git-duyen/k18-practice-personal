import { expect, test } from "./00-fixture";
import { RegisterPage } from './01-pom';

test('Submit register page', async ({ materialPage }) => {
    const registerPage = new RegisterPage(materialPage.page);

    await test.step('Go to Register Page', async () => {
        await materialPage.gotoPage('Register page');
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