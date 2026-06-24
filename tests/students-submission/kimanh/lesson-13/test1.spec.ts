import { expect } from "@playwright/test";
import { RegisterPage } from "./01-pom";
import { test } from "./materialPage-fixture";

test("Register information", async ({ materialPage }) => {
    const registerPage = new RegisterPage(materialPage);
    await registerPage.gotoRegisterPage();

    await registerPage.fillUsername("KimAnh");

    await registerPage.fillEmail("kimanh@gmail.com");

    await registerPage.checkGender("male");

    await registerPage.clickRegisterButton();
    //Verify information
    await test.step('Check information', async () => {
        const tableRow = registerPage.page.locator(registerPage.getXpathTableRow('KimAnh'));
        await expect(tableRow).toContainText('KimAnh');
        await expect(tableRow).toContainText('kimanh@gmail.com');
        await expect(tableRow).toContainText('male');
    });
});