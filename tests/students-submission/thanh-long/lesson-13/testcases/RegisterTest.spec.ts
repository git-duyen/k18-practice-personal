import { test } from '../fixture.ts';
import { RegisterPage } from '../pages/RegisterPage.ts';



test('Register Page', async ({ page, materialPage }) => {
    const registerPage = new RegisterPage(page);
    await materialPage.gotoPage('Register Page');


    await registerPage.fillUsername();
    await registerPage.fillEmail();
    await registerPage.checkGender();
    await registerPage.checkHobbies();

    await registerPage.clickSubmitButton();
});