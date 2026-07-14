import {expect, test} from "@playwright/test";

test.describe("Authentication-AUTH", async () => {
   test.beforeEach(async({page}) => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
   });

   test("@AUTH_001: Login fail", async({page}) =>{
      let username = "vantest1";
      let password = "test1";
      await test.step("Step1: Nhập thông tin", async()=>{
         await page.locator("input#user_login").fill(`${username}`);
         await page.locator("input#user_pass").fill(`${password}`);

         await expect(page.locator("input#user_login")).toHaveValue(`${username}`);
         await expect(page.locator("input#user_pass")).toHaveValue(`${password}`);
      });
       
      await test.step("Step2: Click button login", async()=>{
         await page.locator("input#wp-submit").click();

         await expect(page.getByText(`Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`)).toBeVisible();

      }); 

   });


   test("@AUTH_002: Login success", async({page}) =>{
      let username = "betterbytes.academy.admin";
      let password = "StrongPass@BetterBytesAcademy";
      await test.step("Step1: Nhập thông tin", async()=>{
         await page.locator("input#user_login").fill(`${username}`);
         await page.locator("input#user_pass").fill(`${password}`);


         await expect(page.locator("input#user_login")).toHaveValue(`${username}`);
         await expect(page.locator("input#user_pass")).toHaveValue(`${password}`);
      });
       
      await test.step("Step2: Click button login", async()=>{
         await page.locator("input#wp-submit").click();


         await expect(page).toHaveURL("https://pw-practice-dev.playwrightvn.com/wp-admin/");
         await expect(page.locator("//h1[text()='Dashboard']")).toBeVisible();


      });


   });


});