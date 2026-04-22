import { test, expect, Page } from '@playwright/test';
import { RegisterPage } from './01-pom';

let gender = "Male";
let userName = 'Nguyen';
let email = "taidang@gmail.com";




//1.
test('Register Page Test', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await test.step('Go to Register Page', async () => {
    await registerPage.openMaterialBasePage();
    await registerPage.goToPage("Register Page");
  });

  await test.step('Input information and verify in table', async () => {
    await registerPage.fillUserName(page, 'Nguyen');
    await registerPage.fillEmail(page, 'taidang@gmail.com');
    await registerPage.checkGender(page, gender);
    await registerPage.clickSubmit(page);

  });
  await test.step('Verify information added', async () => {
    await registerPage.verifyTableData(page, userName, email, gender);
  });
});


