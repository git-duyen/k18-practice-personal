import { test, expect } from "@playwright/test";
test.describe("Account", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
  });
  test("Create with editor permission", async ({ page }) => {
    const newUser: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    } = {
      firstName: "k-18",
      lastName: "editor_hieunguyen0000056",
      email: "editor_hieunguyen0000056@gmail.com",
      password: "1234",
    };
    await test.step("Create user", async () => {
      //Login vào tk admin
      await page
        .locator("//input[@id='user_login']")
        .fill("betterbytes.academy.admin");
      await page
        .locator("//input[@id='user_pass']")
        .fill("StrongPass@BetterBytesAcademy");
      await page.locator("//input[@id='wp-submit']").click();

      // Chờ trang dashboard load xong hoàn toàn - Đoạn này thêm để tránh mạng lực quá web chưa load kịp :v Wp nó load cũng hơi chậm
      await page.waitForLoadState("networkidle");
      //Tạo user mới

      const usersMenu = page.locator("//li[@id='menu-users']");
      const box = await usersMenu.boundingBox();
      await page.mouse.move(0, 0);
      await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, {
        steps: 20,
      });

      // Chờ WP thêm class opensub → submenu sẵn sàng
      await page
        .locator("//li[@id='menu-users' and contains(@class,'opensub')]")
        .waitFor();
      await page
        .locator("//li[@id='menu-users']//a[text()='Add User']")
        .click();

      // Kiểm tra
      await page.waitForLoadState("networkidle");
      await expect(
        page.locator("//h1[contains(text(),'Add User')]"),
      ).toBeVisible();
      await expect(page.locator("//input[@id='createusersub']")).toBeEnabled();

      await page
        .locator("//input[@id='user_login']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page.locator("//input[@id='email']").fill(newUser.email);
      await page.locator("//input[@id='first_name']").fill(newUser.firstName);
      await page.locator("//input[@id='first_name']").fill(newUser.lastName);
      await page.locator("//input[@id='url']").fill("123.com.vn");
      const passField = page.locator("//input[@id='pass1']");
      await passField.fill(""); // clear WP auto-password trước
      await passField.pressSequentially(newUser.password); // trigger keyboard events

      await expect(page.locator("#pass-strength-result")).not.toHaveText(
        "Password strength unknown",
        { timeout: 3000 },
      ); // chờ WP evaluate

      await page
        .locator("//input[@name='pw_weak']")
        .evaluate((el: HTMLInputElement) => {
          el.checked = true;
          el.dispatchEvent(new Event("change", { bubbles: true }));
        });

      await page.locator("//select[@id='role']").selectOption("editor");
      await page.locator("//input[@id='createusersub']").click();

      //Kiểm tra tạo user
      await expect(
        page.locator("//div[@id='message']//child::p"),
      ).toContainText("New user created.");
    });
    await test.step("Logout and login", async () => {
      //logout
      await page.locator("//li[@id='wp-admin-bar-my-account']").hover();

      await page.locator("//li[@id='wp-admin-bar-logout']").click();
      //login
      await page
        .locator("//input[@id='user_login']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page
        .locator("//input[@id='user_pass']")
        .fill(`${newUser.password}`);
      await page.locator("//input[@id='wp-submit']").click();
      //Kiểm tra
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Dashboard')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Posts')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Media')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Pages')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Comments')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Appearance')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Plugins')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Users')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Tools')]",
        ),
      ).toBeVisible();
      //logout
      await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
      await page.locator("//li[@id='wp-admin-bar-logout']").click();
    });
    await test.step("Delete", async () => {
      //Đăng nhập vào account admin
      await page
        .locator("//input[@id='user_login']")
        .fill("betterbytes.academy.admin");
      await page
        .locator("//input[@id='user_pass']")
        .fill("StrongPass@BetterBytesAcademy");
      await page.locator("//input[@id='wp-submit']").click();
      await page.waitForLoadState("networkidle");
      //Delete account:Step 0: Vaof manf all user
      const usersMenu = page.locator("//li[@id='menu-users']");
      const box = await usersMenu.boundingBox();
      await page.mouse.move(0, 0);
      await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, {
        steps: 20,
      });

      // Chờ WP thêm class opensub → submenu sẵn sàng
      await page
        .locator("//li[@id='menu-users' and contains(@class,'opensub')]")
        .waitFor();
      await page
        .locator("//li[@id='menu-users']//a[text()='All Users']")
        .click();
      //Delete account:Step 1: Tìm account
      await page
        .locator("//input[@id='user-search-input']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page.locator("//input[@id='search-submit']").click();
      //Delete account: Step 2: Click delete tại UI
      const userRow = page.locator(
        `//tr[contains(., "${newUser.firstName}-${newUser.lastName}")]`,
      );
      await userRow.hover();
      await userRow.locator('//a[contains(@class,"submitdelete")]').click();
      //Delete account: Step 3: Xác nhận delete
      await page.locator("//input[@id='delete_option0']").check();
      await page.locator("//input[@id='submit']").click();

      //Kiểm tra đã xoá hay chưa
      await page
        .locator("//input[@id='user-search-input']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page.locator("//input[@id='search-submit']").click();
      await expect(page.locator("//tr[@class='no-items']")).toBeVisible();
    });
  });
  test("Create with subcriber permission", async ({ page }) => {
    const newUser: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    } = {
      firstName: "k-18",
      lastName: "subcriber_hieunguyen0000053",
      email: "subcriber_hieunguyen0000053@gmail.com",
      password: "1234",
    };
    await test.step("Create user", async () => {
      //Login vào tk admin
      await page
        .locator("//input[@id='user_login']")
        .fill("betterbytes.academy.admin");
      await page
        .locator("//input[@id='user_pass']")
        .fill("StrongPass@BetterBytesAcademy");
      await page.locator("//input[@id='wp-submit']").click();

      // Chờ trang dashboard load xong hoàn toàn - Đoạn này thêm để tránh mạng lực quá web chưa load kịp :v Wp nó load cũng hơi chậm
      await page.waitForLoadState("networkidle");
      //Tạo user mới

      const usersMenu = page.locator("//li[@id='menu-users']");
      const box = await usersMenu.boundingBox();
      await page.mouse.move(0, 0);
      await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, {
        steps: 20,
      });

      // Chờ WP thêm class opensub → submenu sẵn sàng
      await page
        .locator("//li[@id='menu-users' and contains(@class,'opensub')]")
        .waitFor();
      await page
        .locator("//li[@id='menu-users']//a[text()='Add User']")
        .click();

      // Kiểm tra
      await page.waitForLoadState("networkidle");
      await expect(
        page.locator("//h1[contains(text(),'Add User')]"),
      ).toBeVisible();
      await expect(page.locator("//input[@id='createusersub']")).toBeEnabled();

      await page
        .locator("//input[@id='user_login']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page.locator("//input[@id='email']").fill(newUser.email);
      await page.locator("//input[@id='first_name']").fill(newUser.firstName);
      await page.locator("//input[@id='last_name']").fill(newUser.lastName);
      await page.locator("//input[@id='url']").fill("123.com.vn");

      const passField = page.locator("//input[@id='pass1']");
      await passField.fill(""); // clear WP auto-password trước
      await passField.pressSequentially(newUser.password); // trigger keyboard events

      await expect(page.locator("#pass-strength-result")).not.toHaveText(
        "Password strength unknown",
        { timeout: 3000 },
      ); // chờ WP evaluate

      await page
        .locator("//input[@name='pw_weak']")
        .evaluate((el: HTMLInputElement) => {
          el.checked = true;
          el.dispatchEvent(new Event("change", { bubbles: true }));
        });

      await page.locator("//input[@name='pw_weak']").check();
      await page.locator("//select[@id='role']").selectOption("subscriber");
      await page.locator("//input[@id='createusersub']").click();

      //Kiểm tra tạo user
      await expect(
        page.locator("//div[@id='message']//child::p"),
      ).toContainText("New user created.");
    });
    await test.step("Logout and login", async () => {
      //logout
      await page.locator("//li[@id='wp-admin-bar-my-account']").hover();

      await page.locator("//li[@id='wp-admin-bar-logout']").click();
      //login
      await page
        .locator("//input[@id='user_login']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page
        .locator("//input[@id='user_pass']")
        .fill(`${newUser.password}`);
      await page.locator("//input[@id='wp-submit']").click();
      //Kiểm tra
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Dashboard')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Profile')]",
        ),
      ).toBeVisible();
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Posts')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Media')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Pages')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Comments')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Appearance')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Plugins')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Users')]",
        ),
      ).toHaveCount(0);
      await expect(
        page.locator(
          "//div[@class='wp-menu-name' and contains(normalize-space(),'Tools')]",
        ),
      ).toHaveCount(0);
      //logout
      await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
      await page.locator("//li[@id='wp-admin-bar-logout']").click();
    });
    await test.step("Delete", async () => {
      //Đăng nhập vào account admin
      await page
        .locator("//input[@id='user_login']")
        .fill("betterbytes.academy.admin");
      await page
        .locator("//input[@id='user_pass']")
        .fill("StrongPass@BetterBytesAcademy");
      await page.locator("//input[@id='wp-submit']").click();
      await page.waitForLoadState("networkidle");
      //Delete account:Step 0: Vaof manf all user
      const usersMenu = page.locator("//li[@id='menu-users']");
      const box = await usersMenu.boundingBox();
      await page.mouse.move(0, 0);
      await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2, {
        steps: 20,
      });

      // Chờ WP thêm class opensub → submenu sẵn sàng
      await page
        .locator("//li[@id='menu-users' and contains(@class,'opensub')]")
        .waitFor();
      await page
        .locator("//li[@id='menu-users']//a[text()='All Users']")
        .click();
      //Delete account:Step 1: Tìm account
      await page
        .locator("//input[@id='user-search-input']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page.locator("//input[@id='search-submit']").click();
      //Delete account: Step 2: Click delete tại UI

      const userRow = page.locator(
        `//tr[contains(., "${newUser.firstName}-${newUser.lastName}")]`,
      );
      await userRow.hover();
      await userRow.locator('//a[contains(@class,"submitdelete")]').click();
      //Delete account: Step 3: Xác nhận delete

      await page.locator("//input[@id='submit']").click();

      //Kiểm tra đã xoá hay chưa
      await page
        .locator("//input[@id='user-search-input']")
        .fill(`${newUser.firstName}-${newUser.lastName}`);
      await page.locator("//input[@id='search-submit']").click();
      await expect(page.locator("//tr[@class='no-items']")).toBeVisible();
    });
  });
});
