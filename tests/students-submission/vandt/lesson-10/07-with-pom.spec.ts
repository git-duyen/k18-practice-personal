import {expect, test} from '@playwright/test';
import { MyLoginPage } from './05-pom';

test ('Login success', async ({page}) => {
   const loginPage = new MyLoginPage(page);

   await test.step('Goto login page', async () => {
      await loginPage.page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
   });

   await test.step('Fill username', async ()=> {
      await loginPage.fillUsername("betterbytes.academy.admin");
   });

   await test.step('Fill password', async ()=> {
      await loginPage.fillPassword("StrongPass@BetterBytesAcademy");
   });

   await test.step('Click login button', async ()=> {
      await loginPage.ClickLogin();   
   });

   await expect(page.getByRole("heading",{ name: "Dashboard"})).toBeVisible();

});

test ('Login fail', async ({page})=> {
   const loginPage = new MyLoginPage(page);

   await test.step('Goto login page', async () => {
      await loginPage.page.goto ("https://pw-practice-dev.playwrightvn.com/wp-login.php")
   });

   await test.step('Fill username', async () => {
      await loginPage.fillUsername("test1");
   });

   await test.step('Fill password', async () => {
      await loginPage.fillPassword("test1");
   });

   await test.step('Click login button', async () => {
      await loginPage.ClickLogin();
   });
await expect(page.getByText("Error")).toBeVisible();
   
});