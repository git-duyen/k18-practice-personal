import test, { expect } from "@playwright/test";
import { RegisterPage } from "./01-pom";

const dataRegister = {
  userName: "Thuong",
  email: "Playwright@gmail.com",
  gender: "female",
};

test("TEST 1", async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await test.step("Open Material Page", async () => {
    await registerPage.openMaterialPage();
  });

  await test.step("Go to Register Page", async () => {
    await registerPage.gotoPage("Register Page");
  });

  await test.step("Fill data register", async () => {
    await registerPage.fillUsername(dataRegister.userName);
    await registerPage.fillEmail(dataRegister.email);
    await registerPage.checkGender(dataRegister.gender);
  });

  await test.step("Click register button", async () => {
    await registerPage.clickBtnRegister();
  });

  await test.step("Verify Register successfully", async () => {
    await expect(
      registerPage.page
        .locator("#userTable")
        .getByRole("cell", { name: `${dataRegister.userName}`, exact: false }),
    ).toBeVisible();
    await expect(
      registerPage.page
        .locator("#userTable")
        .getByRole("cell", { name: `${dataRegister.email}`, exact: false }),
    ).toBeVisible();
    await expect(
      registerPage.page
        .locator("#userTable")
        .getByRole("cell", { name: `${dataRegister.gender}`, exact: false }),
    ).toBeVisible();
  });
});
