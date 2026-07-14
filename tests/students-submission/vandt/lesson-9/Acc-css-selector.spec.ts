import {expect, test} from "@playwright/test";

test.describe("Account-ACCOUNT", async () => {
    let username = "betterbytes.academy.admin";
    let password = "StrongPass@BetterBytesAcademy";

    const username1 = "k18-vandt188";
    const password1= "k18-vandt18@8";
    const email = "vandttest18@yopmail.com";

   test.beforeEach(async({page}) => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin"); //đi đến trang web
      await page.locator("input#user_login").fill(`${username}`); // nhập thông tin username
      await page.locator("input#user_pass").fill(`${password}`); // nhập thông tin password
      await page.locator("input#wp-submit").click(); // click button loginExpand commentComment on lines R13 to R15Resolved
   });

    //teardown xóa tài khoản sau khi đăng ký
    test.afterEach(async({page}) =>{
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin"); //đi đến trang web
        await page.locator("input#user_login").fill(`${username}`); // nhập thông tin username
        await page.locator("input#user_pass").fill(`${password}`); // nhập thông tin password
        await page.locator("input#wp-submit").click(); // click nút loginExpand commentComment on lines R20 to R23Resolved
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click(); // click menu User
        await page.locator("input#user-search-input").fill(`${username1}`); // nhập từ khóa username vừa tạo
        await page.locator("input#search-submit").click(); // nhấn search
        await page.locator("a.submitdelete").click(); // nhấn delete
        if(await page.getByText("What should be done with content owned by this user?").isVisible() == true){
            await page.locator("input#delete_option0").click(); //chọn radio button
        };
        await page.locator("input[value ='Confirm Deletion']").click(); // confirm xóa tài khoản
    });

   test("@ACC_001: Create account with editor permission", async({page})=>{
    await test.step("step1: Đi tới màn quản lý", async() =>{
        await page.locator("//div[@class='wp-menu-name' and text() = 'Users']").click();

        await expect(page.locator("h1.wp-heading-inline")).toBeVisible();
        await expect(page.locator("a.page-title-action")).toBeEnabled();
    });

    await test.step("step2: Thực hiện thêm mới user", async() =>{
        await page.locator("a.page-title-action").click(); //click button add user
        await page.locator("input#user_login").fill(`${username1}`); //điền usernameCollapse commentComment on line R44minhvu278 commented on Jun 10, 2026 minhvu278on Jun 10, 2026More actions@vandt185-web Có thể truyền thẳng biến vào hàm fill nha Vân ơi chứ khum cần phải sử dụng dấu backtick đâu: fill(username1). Tiện update cả mấy phần dưới giúp a nhaReactWrite a replyResolve comment
        await page.locator("input[type='email']").fill(`${email}`); //điền email
        await page.locator("input#first_name").fill("k18"); // điền first name
        await page.locator("input#last_name").fill("Vandt2"); // điền last name
        await page.locator("input[name ='pass1']").clear(); //xóa mật khẩu hiện sẵn
        await page.waitForTimeout(1000);
        await page.locator("input[name ='pass1']").fill(`${password1}`); // nhập mật khẩuExpand commentComment on lines R48 to R50Resolved
        await page.locator("select#role").selectOption("editor"); //Chọn role editer
        await page.waitForTimeout(1000);
        await page.locator("input#createusersub").click();

        await expect(page.getByText("New user created.")).toBeVisible();
    });

    await test.step("step3: Thực hiện đăng xuất và đăng nhập lại với user vừa tạo", async() =>{
        await page.locator("li#wp-admin-bar-my-account").hover();
        await page.locator("//a[@class='ab-item' and text()='Log Out']").click(); //logout ra khỏi hệ thống
        
        //đăng nhập lại với user vừa tạo
        await page.locator("input#user_login").fill(`${username1}`);
        await page.locator("input#user_pass").fill(`${password1}`);
        await page.locator("input#wp-submit").click();

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
        await page.locator("li#wp-admin-bar-my-account").hover();
        await page.locator("//a[@class='ab-item' and text()='Log Out']").click(); //logout ra khỏi hệ thống
    });
   });
});
