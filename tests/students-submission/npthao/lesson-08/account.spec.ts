import {test,expect} from "@playwright/test";

test.describe("Account page" , async() => {

    test.beforeEach(async({ page }) => {
        await test.step("Go to user page", async() => {

            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
            await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
            await page.locator("//input[@id='wp-submit']").click();

            await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();

            const headingUserIsVisible = await page.locator("//h1[@class='wp-heading-inline' and contains(text(), 'Users')]").isVisible();
            expect(headingUserIsVisible).toEqual(true);

            const buttonAddUserIsVisible = await page.locator("//a[@class='page-title-action' and text() = 'Add User']").isEnabled();
            expect(buttonAddUserIsVisible).toEqual(true);

            await page.locator("//a[@class='page-title-action' and text() = 'Add User']").click();
        });
    });

    test("@ACC_001: Create account with editor permission", async({page}) => {
        await test.step("Fill user info", async() => {

            const courseName = "K18";
            const userName = "Thao";
            const password = "Password@12345678";
            
            const userNameInput = "//input[@name='user_login']";
            const emailInput = "//input[@id='email']";
            const passwordInput = "//input[@id='pass1']";

            await page.locator(userNameInput).fill(`${courseName}-${userName}`);
            await page.locator(emailInput).fill("k18-thao@example.com");
            await page.locator(passwordInput).fill(password);
            await page.locator("//input[@id='first_name']").fill(`${courseName}`); 
            await page.locator("//input[@id='last_name']").fill(`${userName}`);
            await page.locator("//select[@id='role']").selectOption("editor");

            await page.locator("//input[@id='createusersub']").click();
            expect(page.locator("//div[@id='message' and contains(text(),'New user created')]")).toBeVisible();

        });

        await test.step("Log out", async() => {
            await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
            await page.locator("//a[@role='menuitem' and text()= 'Log Out']").click();

        });

        await test.step("Log in with new account", async() => {
            const newusername = "K18-Thao";
            const newpassword = "Password@12345678";

            await page.locator("//input[@id='user_login']").fill(newusername);
            await page.locator("//input[@id='user_pass']").fill(newpassword);
            await page.locator("//input[@id='wp-submit']").click();

            const dashboardIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Dashboard']").isVisible();
            expect(dashboardIsVisible).toEqual(true);

            const postsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Posts']").isVisible();
            expect(postsIsVisible).toEqual(true);

            const mediaIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Media']").isVisible();
            expect(mediaIsVisible).toEqual(true);

            const pagesIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Pages']").isVisible();
            expect(pagesIsVisible).toEqual(true);

            const commentsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Comments ']").isVisible();
            expect(commentsIsVisible).toEqual(true);

            const profileIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Profile']").isVisible();
            expect(profileIsVisible).toEqual(true);

            const toolsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Tools']").isVisible();
            expect(toolsIsVisible).toEqual(true);

            const appearanceIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Appearance']").isVisible();
            expect(appearanceIsVisible).toEqual(false);

            const pluginsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Plugins']").isVisible();
            expect(pluginsIsVisible).toEqual(false);

            const usersIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Users']").isVisible();
            expect(usersIsVisible).toEqual(false);
        });

        await test.step("Log out", async() => {
            await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
            await page.locator("//a[@role='menuitem' and text()= 'Log Out']").click();
        });

        await test.step("Log in with admin account", async() => {
            await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
            await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
            await page.locator("//input[@id='wp-submit']").click();
        });

        await test.step("Delete new account", async() => {
            await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
            await page.locator("//a[text()='K18-Thao']").hover();
            await page.locator("//a[text()='K18-Thao']/ancestor::td[contains(@class,'username')]//a[@class='submitdelete']").click();

            const deletePageIsVisible = await page.locator("//div[@class='wrap']//h1[text()='Delete Users']").isVisible();
            expect(deletePageIsVisible).toEqual(true);

            await page.locator("//input[@id='submit']").click();

            const messageIsVisible = await page.locator("//div[@id='message']//p[text() = 'User deleted.']").isVisible();
            expect(messageIsVisible).toEqual(true);

            const userIsVisible = await page.locator("//a[text()='K18-Thao']").isVisible();
            expect(userIsVisible).toEqual(false);
        });

            
    });

    test("@ACC_002: Create account with subscriber permission", async({page}) => {
        await test.step("Fill user info", async() => {

            const courseName = "K18";
            const userName = "Thao";
            const password = "Password@12345678";
            
            const userNameInput = "//input[@name='user_login']";
            const emailInput = "//input[@id='email']";
            const passwordInput = "//input[@id='pass1']";

            await page.locator(userNameInput).fill(`${courseName}-${userName}`);
            await page.locator(emailInput).fill("k18-thao@example.com");
            await page.locator(passwordInput).fill(password);
            await page.locator("//input[@id='first_name']").fill(`${courseName}`); 
            await page.locator("//input[@id='last_name']").fill(`${userName}`);
            await page.locator("//select[@id='role']").selectOption("subscriber");

            await page.locator("//input[@id='createusersub']").click();
            expect(page.locator("//div[@id='message' and contains(text(),'New user created')]")).toBeVisible();

        });

        await test.step("Log out", async() => {
            await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
            await page.locator("//a[@role='menuitem' and text()= 'Log Out']").click();

        });

        await test.step("Log in with new account", async() => {
            const newusername = "K18-Thao";
            const newpassword = "Password@12345678";

            await page.locator("//input[@id='user_login']").fill(newusername);
            await page.locator("//input[@id='user_pass']").fill(newpassword);
            await page.locator("//input[@id='wp-submit']").click();

            const dashboardIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Dashboard']").isVisible();
            expect(dashboardIsVisible).toEqual(true);

            const profileIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Profile']").isVisible();
            expect(profileIsVisible).toEqual(true);

            const postsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Posts']").isVisible();
            expect(postsIsVisible).toEqual(false);

            const mediaIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Media']").isVisible();
            expect(mediaIsVisible).toEqual(false);

            const pagesIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Pages']").isVisible();
            expect(pagesIsVisible).toEqual(false);

            const commentsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Comments ']").isVisible();
            expect(commentsIsVisible).toEqual(false);

            const toolsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Tools']").isVisible();
            expect(toolsIsVisible).toEqual(false);

            const appearanceIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Appearance']").isVisible();
            expect(appearanceIsVisible).toEqual(false);

            const pluginsIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Plugins']").isVisible();
            expect(pluginsIsVisible).toEqual(false);

            const usersIsVisible = await page.locator("//div[@class= 'wp-menu-name' and text() ='Users']").isVisible();
            expect(usersIsVisible).toEqual(false);
        });

        await test.step("Log out", async() => {
            await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
            await page.locator("//a[@role='menuitem' and text()= 'Log Out']").click();
        });

        await test.step("Log in with admin account", async() => {
            await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
            await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
            await page.locator("//input[@id='wp-submit']").click();
        });

        await test.step("Delete new account", async() => {
            await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
            await page.locator("//a[text()='K18-Thao']").hover();
            await page.locator("//a[text()='K18-Thao']/ancestor::td[contains(@class,'username')]//a[@class='submitdelete']").click();

            const deletePageIsVisible = await page.locator("//div[@class='wrap']//h1[text()='Delete Users']").isVisible();
            expect(deletePageIsVisible).toEqual(true);

            await page.locator("//input[@id='submit']").click();

            const messageIsVisible = await page.locator("//div[@id='message']//p[text() = 'User deleted.']").isVisible();
            expect(messageIsVisible).toEqual(true);

            const userIsVisible = await page.locator("//a[text()='K18-Thao']").isVisible();
            expect(userIsVisible).toEqual(false);
        });
         
    });
});

        
