import {expect, test} from "@playwright/test";

test.describe("Account-ACCOUNT", async () => {
    let username = "betterbytes.academy.admin";
    let password = "StrongPass@BetterBytesAcademy";

    const username1 = "k18-vandt182";
    const password1= "k18-vandt18@2";
    const email = "vandttest12@yopmail.com";

    //điều kiện trước khi chạy test
   test.beforeEach(async({page}) => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin"); //đi đến trang web
      await page.getByRole("textbox",{name:"Username or Email Address"}).fill(username);
      await page.getByRole("textbox", {name: "Password"}).fill(password);
      await page.getByRole("button",{name:"Log In"}).click();
   });

    //teardown xóa tài khoản sau khi đăng ký
    test.afterEach(async({page}) =>{
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin"); //đi đến trang web
        await page.getByRole("textbox",{name:"Username or Email Address"}).fill(username);
        await page.getByRole("textbox", {name: "Password"}).fill(password);
        await page.getByRole("button",{name:"Log In"}).click();
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click(); // click menu User
        await page.locator("//input[@id ='user-search-input']").fill(username1); // nhập từ khóa username vừa tạo
        await page.getByRole("button", {name: "Search Users"}).click(); // nhấn search
        await page.locator("//td[@class ='username column-username has-row-actions column-primary']").hover();
        await page.waitForTimeout(1000);
        await page.locator("//a[@class ='submitdelete']").click(); // nhấn delete
        if(await page.getByText("What should be done with content owned by this user?").isVisible() == true){
            await page.locator("//input[@id ='delete_option0']").click(); //chọn radio button
        };
        await page.locator("//input[@value ='Confirm Deletion']").click(); // confirm xóa tài khoản
    });

   test("@ACC_001: Create account with editor permission", async({page})=>{
    await test.step("step1: Đi tới màn quản lý", async() =>{
        await page.locator("//div[@class='wp-menu-name' and text() = 'Users']").click(); //Click vào menu Users

        await expect(page.locator('h1').getByText("Users")).toBeVisible(); //Kiểm tra hiển thị heading
        await expect(page.locator('a.page-title-action')).toBeEnabled(); //Kiểm tra hiển thị button
    });

    await test.step("step2: Thực hiện thêm mới user", async() =>{
        await page.locator('a.page-title-action').click();
        await page.getByRole("textbox", {name: "Username"}).fill(username1);
        await page.getByRole("textbox",{name: "Email"}).fill(email);
        await page.getByRole("textbox",{name: "First Name"}).fill("k18");
        await page.getByRole("textbox",{name: "Last Name"}).fill("Vandt2");
        await page.getByRole("textbox", {name: "Password"}).clear();
        await page.waitForTimeout(1000);
        await page.getByRole("textbox", {name:"Password"}).fill(password1);
        await page.getByRole("combobox",{name: "Role"}).selectOption("editor");
        await page.waitForTimeout(1000);
        await page.getByRole("button", {name: "Add User"}).click();

        await expect(page.getByText("New user created.")).toBeVisible();
    });

    await test.step("step3: Thực hiện đăng xuất và đăng nhập lại với user vừa tạo", async() =>{
         await page.locator("li#wp-admin-bar-my-account").hover()
        await page.locator("//a[@class='ab-item' and text()='Log Out']").click();

        
        //đăng nhập lại với user vừa tạo
        await page.getByRole("textbox",{name: "Username or Email Address"}).fill(username1);
        await page.getByRole("textbox", {name: "Password"}).fill(password1);
        await page.getByRole("button",{name:"Log In"}).click();

        //kiểm tra hiển thị các menu
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Dashboard']")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Posts']")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Media']")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Pages']")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and contains(text(),'Comments')]")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Profile']")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Tools']")).toBeVisible();

        //Kiểm tra không hiển thị các menu
        await expect(page.getByText("Appearance")).toBeHidden();
        await expect(page.getByText("Users")).toBeHidden();
        await expect(page.getByText("Plugins")).toBeHidden();

        //logout ra khỏi hệ thống
        await page.locator("li#wp-admin-bar-my-account").hover()
        await page.locator("//a[@class='ab-item' and text()='Log Out']").click(); //logout ra khỏi hệ thống
    });
   });

   test("@ACC_002:Create account with subscriber permission", async({page}) => {

    await test.step("Step 1: Đi tới màn hình quản lý", async() =>{
        await page.locator("//div[@class='wp-menu-name' and text() = 'Users']").click(); //Click vào menu Users

        await expect(page.locator('h1').getByText("Users")).toBeVisible(); //Kiểm tra hiển thị heading
        await expect(page.locator('a.page-title-action')).toBeEnabled(); //Kiểm tra hiển thị button
    });

    await test.step("Step2: Thực hiện thêm user mới", async()=> {
        await page.locator('a.page-title-action').click(); //click button add user
        await page.getByRole("textbox", {name: "Username"}).fill(`${username1}`); //điền username
        await page.getByRole("textbox", {name: "Email"}).fill(`${email}`); //điền email
        await page.getByRole("textbox", {name: "First name"}).fill("k18"); // điền first name
        await page.getByRole("textbox", {name: "Last name"}).fill("Vandt2"); // điền last name
        await page.getByRole("textbox", {name: "Password"}).clear(); //xóa mật khẩu hiện sẵn
        await page.waitForTimeout(500);
        await page.getByRole("textbox", {name: "Password"}).fill(`${password1}`); // nhập mật khẩu
        await page.getByRole("combobox").selectOption("Subscriber"); //Chọn role editer
        await page.waitForTimeout(500);
        await page.getByRole("button", {name: "Add User"}).click();//Click button Add user
        await page.waitForTimeout(500);

        await expect(page.getByText("New user created.")).toBeVisible();
    });

    await test.step("step3: Thực hiện đăng xuất và đăng nhập lại với user vừa tạo", async() =>{
         await page.getByText('Better Bytes Academy Admin').nth(0).hover();
        await page.locator("//a[@class='ab-item' and text()='Log Out']").click(); //logout ra khỏi hệ thống
        
        //đăng nhập lại với user vừa tạo
        await page.getByRole("textbox",{name: "Username or Email Address"}).fill(`${username1}`);
        await page.getByRole("textbox", {name: "Password"}).fill(`${password1}`);
        await page.getByRole("button",{name:"Log In"}).click();

        //kiểm tra hiển thị các menu
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Dashboard']")).toBeVisible();
        await expect(page.locator("//div[@class='wp-menu-name' and text() = 'Profile']")).toBeVisible();

        //Kiểm tra không hiển thị các menu
        await expect(page.getByText("Posts")).toBeHidden();
        await expect(page.getByText("Media")).toBeHidden();
        await expect(page.getByText("Pages")).toBeHidden();
        await expect(page.getByText("Comments")).toBeHidden();
        await expect(page.getByText("Tools")).toBeHidden();
        await expect(page.getByText("Appearance")).toBeHidden();
        await expect(page.getByText("Users")).toBeHidden();
        await expect(page.getByText("Plugins")).toBeHidden();

        //logout ra khỏi hệ thống
        await page.locator("//li[@id ='wp-admin-bar-my-account']").hover();
        await page.locator("//a[@class='ab-item' and text()='Log Out']").click(); //logout ra khỏi hệ thống
    });
 });

});
