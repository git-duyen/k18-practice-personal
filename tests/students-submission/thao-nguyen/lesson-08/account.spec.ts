import { test, expect} from '@playwright/test';

test.describe("Account - account ", () => {
    const username = {
        username :"k18-thaonguyenle",
        email :"thaotest@gmail.com",
        password :"StrongPass@BetterBytesAcademy"
    };

    test.beforeEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
        await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
        await page.locator("//input[@id='wp-submit']").click();
        const header = page.locator("//h1[text()='Dashboard']");
        await expect(header).toBeVisible();
    });

    //delete account after test
    test.afterEach(async ({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
        await page.locator("//input[@id='user_login']").fill("betterbytes.academy.admin");
        await page.locator("//input[@id='user_pass']").fill("StrongPass@BetterBytesAcademy");
        await page.locator("//input[@id='wp-submit']").click();

        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await expect(page).toHaveURL("https://pw-practice-dev.playwrightvn.com/wp-admin/users.php");

        await page.locator("//input[@id='user-search-input']").fill(username.username);
        await page.locator("//input[@id='search-submit']").click();
        const row = page.getByRole('row', { name: /k18-thaonguyenle/ });
        await row.hover();
        await row.getByText('Delete').click();
        // confirm delete
        await expect(page).toHaveURL("https://pw-practice-dev.playwrightvn.com/wp-admin/users.php?action=delete&user=2793&_wpnonce=032f7a27bc");
        await page.locator("//input[@id='delete_option0']").click();
        await page.locator("//input[@id='submit']").click();
    });

    test("ACC-001 - Create account with editor permission", async ({page}) => {
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await expect(page).toHaveURL("https://pw-practice-dev.playwrightvn.com/wp-admin/users.php");

        await page.locator("//a[@class='page-title-action']").click();
        await page.fill("//input[@id='user_login']", username.username);
        await page.fill("//input[@id='email']", username.email);
        await page.fill("//input[@id='first_name']", "Thao");
        await page.fill("//input[@id='last_name']", "Nguyen");
        await page.locator("//input[@id='pass1']").fill(username.password);
        await page.locator("//select[@id='role']").selectOption('editor');
        await page.locator("//input[@id='createusersub']").click();

        // log out
        await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
        await page.locator("//a[contains(text(),'Log Out')]").click();

        // log in again with new account
        await page.locator("//input[@id='user_login']").fill(username.username);
        await page.locator("//input[@id='user_pass']").fill(username.password);
        await page.locator("//input[@id='wp-submit']").click();

        const header = page.locator("//h1[text()='Dashboard']");
        await expect(header).toBeVisible();

        const menu = page.locator('#adminmenu');

        // no show
        await expect(menu.getByText('Appearance')).toHaveCount(0);
        await expect(menu.getByText('Users')).toHaveCount(0);
        await expect(menu.getByText('Plugins')).toHaveCount(0);
        
        // show
        await expect(menu.getByText('Dashboard')).toBeVisible();
        await expect(menu.getByText('Profile')).toBeVisible();
        await expect(menu.getByText('Posts')).toBeVisible();
        await expect(menu.getByText('Media')).toBeVisible();
        await expect(menu.getByText('Pages')).toBeVisible();
        await expect(menu.getByText('Comments')).toBeVisible();
        await expect(menu.getByText('Tools')).toBeVisible();
    });
    test("ACC-002 - Create account with subscriber permission", async ({page}) => {
        await page.locator("//div[@class='wp-menu-name' and text()='Users']").click();
        await expect(page).toHaveURL("https://pw-practice-dev.playwrightvn.com/wp-admin/users.php");

        await page.locator("//a[@class='page-title-action']").click();
        await page.fill("//input[@id='user_login']", username.username);
        await page.fill("//input[@id='email']", username.email);
        await page.fill("//input[@id='first_name']", "Thao");
        await page.fill("//input[@id='last_name']", "Nguyen");
        await page.locator("//input[@id='pass1']").fill(username.password);
        await page.locator("//select[@id='role']").selectOption('subscriber');
        await page.locator("//input[@id='createusersub']").click();

        // log out
        await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
        await page.locator("//a[contains(text(),'Log Out')]").click();

        // log in again with new account
        await page.locator("//input[@id='user_login']").fill(username.username);
        await page.locator("//input[@id='user_pass']").fill(username.password);
        await page.locator("//input[@id='wp-submit']").click();

        const header = page.locator("//h1[text()='Dashboard']");
        await expect(header).toBeVisible();

        const menu = page.locator('#adminmenu');

        // no show
        await expect(menu.getByText('Appearance')).toHaveCount(0);
        await expect(menu.getByText('Users')).toHaveCount(0);
        await expect(menu.getByText('Plugins')).toHaveCount(0);
        await expect(menu.getByText('Tools')).toHaveCount(0);
        await expect(menu.getByText('Posts')).toHaveCount(0);
        await expect(menu.getByText('Media')).toHaveCount(0);
        await expect(menu.getByText('Pages')).toHaveCount(0);
        await expect(menu.getByText('Comments')).toHaveCount(0);

        // show
        await expect(menu.getByText('Dashboard')).toBeVisible();
        await expect(menu.getByText('Profile')).toBeVisible();
    });

});