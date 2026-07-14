import {expect, test} from '@playwright/test';
import { MaterialBasePage } from './01-pom';
import { RegisterPage } from './01-pom';

test ('Bai 1', async ({page}) => {
   const gotoPage1 = new MaterialBasePage(page);
   const registerPage = new RegisterPage(page);

   await test.step('Go to page', async()=> {
      await gotoPage1.openMaterialPage();
   });

   await test.step('Click vào bài học 1', async() => {
      await gotoPage1.gotoPage("Bài học 1: Register Page (có đủ các element)");
   });

   await test.step('Nhập username', async() => {
      await registerPage.fillUsername("vandt");
   });

   await test.step('Nhập email', async() => {
      await registerPage.fillEmail("vandt1@yopmail.com");
   });

   await test.step('Click chọn gender', async() => {
      await registerPage.checkGender("Female");
   });

   await test.step('Click button Register', async() => {
      await page.getByRole("button", {name: "Register"}).click();
   });

   await expect(page.getByText("vandt", {exact: true})).toBeVisible();
   await expect(page.getByText("vandt1@yopmail.com", {exact: true})).toBeVisible();
   await expect(page.getByText("Gender: female")).toBeVisible();

});