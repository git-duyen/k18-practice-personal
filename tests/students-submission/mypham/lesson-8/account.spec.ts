import { test, expect } from '@playwright/test';

test.describe('ACCOUNT-Account', async () => {

    const newUserName = 'E101-My';
    const newPassword = 'MySub@%5123';

    test.beforeEach(async ({ page }) => {
        await test.step('Go to login page', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        });

        //Nhập username và password
        const userName = 'betterbytes.academy.admin';
        const password = 'StrongPass@BetterBytesAcademy';
        await test.step('Enter username and password', async () => {
            await page.locator("//input[@id='user_login']").fill(userName);
            await page.locator("//input[@id='user_pass']").fill(password);
        });

        //Click login button
        await test.step('Click login button', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        });
    });

    test.afterEach(async ({ page }) => {
        // await test.step('Go to login page', async () => {
        //     await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        // });
        await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        await page.locator("//li[@id='wp-admin-bar-logout']/a").click();
        //Nhập username và password
        const userName = 'betterbytes.academy.admin';
        const password = 'StrongPass@BetterBytesAcademy';
        await test.step('Enter username and password', async () => {
            await page.locator("//input[@id='user_login']").fill(userName);
            await page.locator("//input[@id='user_pass']").fill(password);
        });

        //Click login button
        await test.step('Click login button', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        });

        await test.step('Delete user', async () => {
            // Go to user management
            await page.locator("//li[@id='menu-users']/child::a").click();

            //Select user
            await page.locator(`//a[text()='${newUserName}']`).hover();
            await page.locator(`//tr[.//strong/a[text()='${newUserName}']]//a[@class='submitdelete']`).click();
            await expect(page.locator("//div[@class='wrap']/h1")).toHaveText("Delete Users");
            const radioBtn = await page.locator("//input[@id='delete_option0']");
            if (await radioBtn.isVisible()) {
                await radioBtn.click();
            }
            await page.locator("//input[@id='submit']").click();
            await expect(page.locator("//div[@id='message']")).toHaveText('User deleted.');
        });

    });

    test('@ACC_001:Create account with editor permission', async ({ page }) => {

        await test.step('Go to user management page', async () => {
            await page.locator("//li[@id='menu-users']/child::a").click();
            await expect(page.locator("//div[@class='wrap']/child::h1")).toHaveText('Users');
            await expect(page.locator("//div[@class='wrap']/child::a")).toBeEnabled();
        });

        await test.step('Create user', async () => {
            //Go to Add user page
            await page.locator("//div[@class='wrap']/child::a").click();

            await expect(page.locator("//div[@class='wrap']/child::h1")).toHaveText('Add User');

            //Fill user information
            await page.locator("//input[@id='user_login']").fill(newUserName);
            await page.locator("//input[@id='email']").fill('myemail3@gmail.com');
            await page.locator("//input[@id='first_name']").fill('E101');
            await page.locator("//input[@id='last_name']").fill('My');
            await page.locator("//input[@id='url']").fill('https://mywebsite.com');
            await page.locator("//input[@id='pass1']").fill(newPassword);
            await page.locator("//select[@id='role']").selectOption('editor');

            //Click Add user button
            await page.locator("//input[@id='createusersub']").click();

            //Verify add user success
            await expect(page.locator("//div[@id='message']")).toContainText('New user created.');

        });

        await test.step('Login with new user', async () => {
            //Logout admin user
            await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
            page.on('dialog', async dialog => {
                await dialog.accept();
            });
            await page.locator("//li[@id='wp-admin-bar-logout']/a").click();
            await expect(page.locator("//div[@id='login-message']")).toHaveText('You are now logged out.');

            //Login with new user
            await test.step('Enter username and password', async () => {
                await page.locator("//input[@id='user_login']").fill(newUserName);
                await page.locator("//input[@id='user_pass']").fill(newPassword);
            });

            //Click login button
            await test.step('Click login button', async () => {
                await page.locator("//input[@id='wp-submit']").click();
            });

            //Verify login success
            await expect(page.locator("//div[@class='wrap']/child::h1")).toHaveText('Dashboard');
            await expect(page.locator("//li[@id='menu-dashboard']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-posts']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-media']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-pages']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-comments']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-users']/a[@href='profile.php']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-tools']")).toBeVisible();

            await expect(page.locator("//li[@id='menu-appearance']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-users']/a[@href='users.php']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-plugins']")).toBeHidden();
        });
    });

    test('@ACC_002:Create account with subscriber permission', async ({ page }) => {
        await test.step('Go to user management page', async () => {
            await page.locator("//li[@id='menu-users']/child::a").click();
            await expect(page.locator("//div[@class='wrap']/child::h1")).toHaveText('Users');
            await expect(page.locator("//div[@class='wrap']/child::a")).toBeEnabled();
        });

        await test.step('Create user', async () => {
            //Go to Add user page
            await page.locator("//div[@class='wrap']/child::a").click();

            await expect(page.locator("//div[@class='wrap']/child::h1")).toHaveText('Add User');

            //Fill user information
            await page.locator("//input[@id='user_login']").fill(newUserName);
            await page.locator("//input[@id='email']").fill('myemail3@gmail.com');
            await page.locator("//input[@id='first_name']").fill('E101');
            await page.locator("//input[@id='last_name']").fill('My');
            await page.locator("//input[@id='url']").fill('https://mywebsite.com');
            await page.locator("//input[@id='pass1']").fill(newPassword);
            await page.locator("//select[@id='role']").selectOption('subscriber');

            //Click Add user button
            await page.locator("//input[@id='createusersub']").click();

            //Verify add user success
            await expect(page.locator("//div[@id='message']")).toContainText('New user created.');

        });

        await test.step('Login with new user', async () => {
            //Logout admin user
            await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
            page.on('dialog', async dialog => {
                await dialog.accept();
            });
            await page.locator("//li[@id='wp-admin-bar-logout']/a").click();
            await expect(page.locator("//div[@id='login-message']")).toHaveText('You are now logged out.');

            //Login with new user
            await test.step('Enter username and password', async () => {
                await page.locator("//input[@id='user_login']").fill(newUserName);
                await page.locator("//input[@id='user_pass']").fill(newPassword);
            });

            //Click login button
            await test.step('Click login button', async () => {
                await page.locator("//input[@id='wp-submit']").click();
            });

            //Verify login success
            await expect(page.locator("//li[@id='menu-dashboard']")).toBeVisible();
            await expect(page.locator("//li[@id='menu-users']/a[@href='profile.php']")).toBeVisible();


            await expect(page.locator("//li[@id='menu-appearance']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-users']/a[@href='users.php']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-plugins']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-posts']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-media']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-pages']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-comments']")).toBeHidden();
            await expect(page.locator("//li[@id='menu-tools']")).toBeHidden();
        });
    });
})