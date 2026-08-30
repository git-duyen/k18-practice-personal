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
        await page.locator('#user_login').fill(username);
        await page.locator('#user_pass').fill(password);
        await page.locator('#wp-submit').click();
        await expect(page.locator('#wp-admin-bar-my-account')).toBeVisible();
    }

    async function logout(page: Page) {
        const logOutURL = await page.locator("#wp-admin-bar-logout a").getAttribute('href');
        await page.goto(logOutURL!);
        await page.waitForURL(/wp-login\.php/); // Chờ cho URL hiển thị giá trị mong đợi rồi mới chạy câu lệnh tiếp theo
    }    

    test.beforeEach(async ({page})=> {
        await login(page, admin, adminPass);      
    });

    test.afterEach(async({page}) => {
        const response = await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        if (!response) return;

        if (await page.locator('#wp-admin-bar-my-account').isVisible()) {
            await logout(page);
        }

        // Log in admin
        await login(page, admin, adminPass);    
        // Search user
        await page.locator('#menu-users  .wp-menu-name').click();
        await page.locator('#user-search-input').fill(username);
        await page.locator('#search-submit').click();
        // Verify user
        const search = page.locator('.subtitle');
        await expect(search).toContainText(`Search results for: ${username}`);
        // Delete user

        const findUser = page.locator(`//td[@class="username column-username has-row-actions column-primary"]/descendant::a[contains(normalize-space(.), "${username}")]`);
        await findUser.hover();
        const deleteUser = page.locator('td.username.column-username.has-row-actions.column-primary .row-actions .delete > a'); 
        await deleteUser.click();

        const submitDelete = page.locator('#submit');
        const optionDelete = page.locator('#delete_option0');
        if (await optionDelete.isVisible()){
            await optionDelete.click();
        };
        await submitDelete.click();

        const messageDelete = page.locator('#message');
        await expect(messageDelete).toContainText("User deleted.")
    });

    test("ACC-001: Create account with editor permission", async ({page}) => {
        
        await test.step("Move to User Screen", async () => {
            await page.locator('#menu-users .wp-menu-name').click();
            const headingUser = page.locator('.wp-heading-inline');
            const buttonAddUser = page.locator('.page-title-action');
            await expect(headingUser).toHaveText("Users");
            await expect(buttonAddUser).toBeEnabled();
        });

        await test.step("Add new user", async() => {
            await page.locator('.page-title-action').click();
            await page.locator('#user_login').fill(EDITOR_USER.username);
            await page.locator('#email').fill(EDITOR_USER.email);
            await page.locator('#first_name').fill("k18");
            await page.locator('#last_name').fill("thanh");         
            await page.fill('#pass1', EDITOR_USER.password);
            const weakPasswordCheckbox = page.locator('#pw_weak');
                if (await weakPasswordCheckbox.isVisible()) {
                    await weakPasswordCheckbox.check();
                }
            await page.locator('#role').selectOption({value: 'editor'});
            await page.locator('#createusersub').click();

            const messageSuccess = page.locator('#message');
            await expect(messageSuccess).toContainText("New user created.")
        });
        
        await logout(page); // Logout addmin account
        
        await test.step("Login New Account", async() => {
            await login(page, EDITOR_USER.username, EDITOR_USER.password);

            const dashboard = page.locator('.wp-menu-image.dashicons-before.dashicons-dashboard + .wp-menu-name');
            await expect(dashboard).toBeVisible();
            const posts = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-post + .wp-menu-name');
            await expect(posts).toBeVisible();
            const media = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-media + .wp-menu-name');
            await expect(media).toBeVisible();
            const pages = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-page + .wp-menu-name');
            await expect(pages).toBeVisible();
            const comments = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-comments + .wp-menu-name');
            await expect(comments).toBeVisible()
            const profile = page.locator('a[href="profile.php"]');
            await expect(profile).toBeVisible();
            const tools = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-tools + .wp-menu-name');
            await expect(tools).toBeVisible()
            
            const appearance = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-appearance + .wp-menu-name');
            await expect(appearance).toBeHidden();
            const uses = page.locator('a[href="users.php"]');
            await expect(uses).toBeHidden();
            const plugins = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-plugins + .wp-menu-name');
            await expect(plugins).toBeHidden();
        });

    });

    test("ACC-002: Create account with subscriber permission", async ({page}) => {

        await test.step("Move to User Screen", async () => {
            await page.locator('#menu-users .wp-menu-name').click();
            const headingUser = page.locator('.wp-heading-inline');
            const buttonAddUser = page.locator('.page-title-action');
            await expect(headingUser).toHaveText("Users");
            await expect(buttonAddUser).toBeEnabled();
        });

        await test.step("Add new user", async() => {
            await page.locator('.page-title-action').click();
            await page.locator('#user_login').fill(SUBSCRIBER_USER.username);
            await page.locator('#email').fill(SUBSCRIBER_USER.email);
            await page.locator('#first_name').fill("k18");
            await page.locator('#last_name').fill("thanh");
            await page.fill('#pass1', SUBSCRIBER_USER.password);
            await page.locator('#role').selectOption({value: 'subscriber'});
            await page.locator('#createusersub').click();

            const messageSuccess = page.locator('#message');
            await expect(messageSuccess).toContainText("New user created.")
        });

        await logout(page); // logout admin account
        
        await test.step("Login New Account", async() => {
            await login(page, SUBSCRIBER_USER.username, SUBSCRIBER_USER.password);

            const dashboard = page.locator('.wp-menu-image.dashicons-before.dashicons-dashboard + .wp-menu-name');
            await expect(dashboard).toBeVisible();
            const profile = page.locator('a[href="profile.php"]');
            await expect(profile).toBeVisible();
            
            const appearance = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-appearance + .wp-menu-name');
            await expect(appearance).toBeHidden();
            const uses = page.locator('a[href="users.php"]');
            await expect(uses).toBeHidden();
            const plugins = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-plugins + .wp-menu-name');
            await expect(plugins).toBeHidden();
            const posts = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-post + .wp-menu-name');
            await expect(posts).toBeHidden();
            const media = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-media + .wp-menu-name');
            await expect(media).toBeHidden();
            const pages = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-page + .wp-menu-name');
            await expect(pages).toBeHidden();
            const comments = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-comments + .wp-menu-name');
            await expect(comments).toBeHidden()
            const tools = page.locator('.wp-menu-image.dashicons-before.dashicons-admin-tools + .wp-menu-name');
            await expect(tools).toBeHidden()
        });
        
    });
});
