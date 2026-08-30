import {test, expect, Page} from '@playwright/test';

test.describe("ACCOUNT - Account", async () => {
    
        const admin = "betterbytes.academy.admin";
        const adminPass = "StrongPass@BetterBytesAcademy";

        const EDITOR_USER = {
            username: "k18-hoaithanh-editor",
            password: "phanthihoai",
            email: "hoaithanhphan@gmail.com",
        };

        const SUBSCRIBER_USER = {
            username: "k18-hoaithanh-sub",
            password: "phanthihoai",
            email: "amily.phan@gmail.com",
        };

        let username: string;
        username = "k18-hoaithanh";

    async function login(page: Page, username: string, password:string) {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
        await page.getByLabel('Username or Email Address').fill(username);
        await page.getByRole('textbox', {name: 'Password'}).fill(password);
        await page.getByRole('button', {name: 'Log In'}).click();
        await expect(page.locator('//li[@id="wp-admin-bar-my-account"]')).toBeVisible();
    }

    async function logout(page: Page) {
        const logOutURL = await page.locator("//li[@id='wp-admin-bar-logout']//a").getAttribute('href');
        await page.goto(logOutURL!);
        await page.waitForURL(/wp-login\.php/); // Chờ cho URL hiển thị giá trị mong đợi rồi mới chạy câu lệnh tiếp theo
    }    

    test.beforeEach(async ({page})=> {
        await login(page, admin, adminPass);      
    });

    test.afterEach(async({page}) => {
        const response = await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        if (!response) return;

        if (await page.locator('//li[@id="wp-admin-bar-my-account"]').isVisible()) {
            await logout(page);
        }

        // Log in admin
        await login(page, admin, adminPass);    
        // Search user
        await page.locator('//li[@id="menu-users"]/descendant::div[2]').click();
        await page.locator('//input[@id="user-search-input"]').fill(username);
        await page.locator('//input[@id="search-submit"]').click();
        // Verify user
        const search = page.locator('//span[@class="subtitle"]');
        await expect(search).toContainText(`Search results for: ${username}`);
        // Delete user

        const findUser = page.locator(`//td[@class="username column-username has-row-actions column-primary"]/descendant::a[contains(normalize-space(.), "${username}")]`);
        await findUser.hover();
        const deleteUser = page.locator('//td[@class="username column-username has-row-actions column-primary"]/descendant::span[@class="delete"]/a');
        await deleteUser.click();

        const submitDelete = page.locator('//input[@id="submit"]');
        const optionDelete = page.locator('//input[@id="delete_option0"]');
        if (await optionDelete.isVisible()){
            await optionDelete.click();
        };
        await submitDelete.click();

        const messageDelete = page.locator('//div[@id="message"]');
        await expect(messageDelete).toContainText("User deleted.")
    });

    test("ACC-001: Create account with editor permission", async ({page}) => {
        
        await test.step("Move to User Screen", async () => {
            await page.locator('//li[@id="menu-users"]/descendant::div[2]').click();
            const headingUser = page.locator('//h1[@class="wp-heading-inline"]');
            const buttonAddUser = page.locator('//div[@class="wrap"]/a');
            await expect(headingUser).toHaveText("Users");
            await expect(buttonAddUser).toBeEnabled();
        });

        await test.step("Add new user", async() => {
            await page.locator('//div[@class="wrap"]/a').click();
            await page.locator('//input[@id="user_login"]').fill(EDITOR_USER.username);
            await page.locator('//input[@id="email"]').fill(EDITOR_USER.email);
            await page.locator('//input[@id="first_name"]').fill("k18");
            await page.locator('//input[@id="last_name"]').fill("thanh");         
            await page.fill('//input[@id="pass1"]', EDITOR_USER.password);
            const weakPasswordCheckbox = page.locator('//input[@id="pw_weak"]');
                if (await weakPasswordCheckbox.isVisible()) {
                    await weakPasswordCheckbox.check();
                }
            await page.locator('//select[@id="role"]').selectOption({value: 'editor'});
            await page.locator('//input[@id="createusersub"]').click();

            const messageSuccess = page.locator('//div[@id="message"]');
            await expect(messageSuccess).toContainText("New user created.")
        });
        
        await logout(page); // Logout addmin account
        
        await test.step("Login New Account", async() => {
            await login(page, EDITOR_USER.username, EDITOR_USER.password);

            const dashboard = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-dashboard"]/following-sibling::div');
            await expect(dashboard).toBeVisible();
            const posts = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-post"]/following-sibling::div');
            await expect(posts).toBeVisible();
            const media = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-media"]/following-sibling::div');
            await expect(media).toBeVisible();
            const pages = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-page"]/following-sibling::div');
            await expect(pages).toBeVisible();
            const comments = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-comments"]/following-sibling::div');
            await expect(comments).toBeVisible()
            const profile = page.locator('//a[@href="profile.php"]');
            await expect(profile).toBeVisible();
            const tools = page.locator('//a[@href="tools.php"]');
            await expect(tools).toBeVisible()
            
            const appearance = page.locator('//a[@href="themes.php"]');
            await expect(appearance).toBeHidden();
            const uses = page.locator('//a[@href="users.php"]');
            await expect(uses).toBeHidden();
            const plugins = page.locator('//a[@href="plugins.php"]');
            await expect(plugins).toBeHidden();
        });

    });

    test("ACC-002: Create account with subscriber permission", async ({page}) => {

        await test.step("Move to User Screen", async () => {
            await page.locator('//li[@id="menu-users"]/descendant::div[2]').click();
            const headingUser = page.locator('//h1[@class="wp-heading-inline"]');
            const buttonAddUser = page.locator('//div[@class="wrap"]/a');
            await expect(headingUser).toHaveText("Users");
            await expect(buttonAddUser).toBeEnabled();
        });

        await test.step("Add new user", async() => {
            await page.locator('//div[@class="wrap"]/a').click();
            await page.locator('//input[@id="user_login"]').fill(SUBSCRIBER_USER.username);
            await page.locator('//input[@id="email"]').fill(SUBSCRIBER_USER.email);
            await page.locator('//input[@id="first_name"]').fill("k18");
            await page.locator('//input[@id="last_name"]').fill("thanh");
            await page.fill('//input[@id="pass1"]', SUBSCRIBER_USER.password);
            await page.locator('//select[@id="role"]').selectOption({value: 'subscriber'});
            await page.locator('//input[@id="createusersub"]').click();

            const messageSuccess = page.locator('//div[@id="message"]');
            await expect(messageSuccess).toContainText("New user created.")
        });

        await logout(page); // logout admin account
        
        await test.step("Login New Account", async() => {
            await login(page, SUBSCRIBER_USER.username, SUBSCRIBER_USER.password);

            const dashboard = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-dashboard"]/following-sibling::div');
            await expect(dashboard).toBeVisible();
            const profile = page.locator('//a[@href="profile.php"]');
            await expect(profile).toBeVisible();
            
            const appearance = page.locator('//a[@href="themes.php"]');
            await expect(appearance).toBeHidden();
            const uses = page.locator('//a[@href="users.php"]');
            await expect(uses).toBeHidden();
            const plugins = page.locator('//a[@href="plugins.php"]');
            await expect(plugins).toBeHidden();
            const posts = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-post"]/following-sibling::div');
            await expect(posts).toBeHidden();
            const media = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-media"]/following-sibling::div');
            await expect(media).toBeHidden();
            const pages = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-page"]/following-sibling::div');
            await expect(pages).toBeHidden();
            const comments = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-comments"]/following-sibling::div');
            await expect(comments).toBeHidden()
            const tools = page.locator('//div[@class="wp-menu-image dashicons-before dashicons-admin-tools"]/following-sibling::div');
            await expect(tools).toBeHidden()
        });
        
    });
});
