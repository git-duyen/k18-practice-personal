import { RegisterPage } from './03-pom';
import { test } from './03-custom-fixture';

let gender = "Male";
let userName = 'Nguyen';
let email = "taidang@gmail.com";




//1.
test('Register Page Test', async ({ materialPage }) => {
  const registerPage = new RegisterPage(materialPage.page);
  await test.step('Go to Register Page', async () => {
    await registerPage.openMaterialBasePage();
    await registerPage.goToPage("Register Page");
  });

  await test.step('Input information and verify in table', async () => {
    await registerPage.fillUserName('Nguyen');
    await registerPage.fillEmail('taidang@gmail.com');
    await registerPage.checkGender(gender);
    await registerPage.clickSubmit();

  });
  await test.step('Verify information added', async () => {
    await registerPage.verifyTableData(userName, email, gender);
  });
});


