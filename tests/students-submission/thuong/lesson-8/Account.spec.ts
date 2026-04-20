import { expect, Page, test } from "@playwright/test";

test.describe("ACCOUNT - Account", async () => {
  type User = {
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    passWord: string;
    role: string;
  };
  let currentUser: User;

  const admin = {
    userName: "betterbytes.academy.admin",
    passWord: "StrongPass@BetterBytesAcademy",
  } as User;

  const login = async (page: Page, user: User) => {
    await page.locator("//input[@id='user_login']").fill(user.userName);
    await page.locator("//input[@id='user_pass']").fill(user.passWord);
    await page.locator("//input[@id='wp-submit']").click();
  };

  const goToUserManagement = async (page: Page) => {
    await page.locator("//li[@id='menu-users']").click();

    //Expected
    await expect(page.locator("h1")).toContainText("Users");
    await expect(
      page.locator(
        "//a[@class='page-title-action' and contains(text(),'Add User')]",
      ),
    ).toBeEnabled();
  };

  const addUser = async (page: Page, user: User) => {
    await page
      .locator(
        "//a[@class='page-title-action' and contains(text(),'Add User')]",
      )
      .click();

    await page.locator("//input[@id='user_login']").fill(user.userName);
    await page.locator("//input[@id='email']").fill(user.email);
    await page.locator("//input[@id='first_name']").fill(user.firstName);
    await page.locator("//input[@id='last_name']").fill(user.lastName);
    await page.locator("//input[@id='pass1']").fill(user.passWord);
    await page
      .locator("//select[@id='role']")
      .selectOption({ label: user.role });
    await page.locator("//input[@id='createusersub']").click();

    //Expected
    const sucess = page.locator("//div[@id='message']");
    await expect(sucess).toContainText("New user created.");
  };

  const deleteUser = async (page: Page, user: User) => {
    // Đi tới trang quản lý user
    await page.locator("//li[@id='menu-users']").click();

    // Tìm và xóa
    await page.locator("//input[@id='user-search-input']").fill(user.userName);
    await page.locator("//input[@id='user-search-input']").press("Enter");
    await page.locator(`a:has-text("${user.userName}")`).hover();
    await page.locator("//a[contains(text(), 'Delete')]").click();

    // Xác nhận xóa
    const confirmDelete = page.locator("//label[text()='Delete all content.']");
    if (await confirmDelete.isVisible()) {
      await confirmDelete.click();
    }
    await page.locator("//input[@id='submit']").click();

    // Verify kết quả xóa
    await expect(page.locator("//div[@id='message']")).toContainText(
      "User deleted.",
    );
    await page.locator("//input[@id='user-search-input']").fill(user.userName);
    await page.locator("//input[@id='user-search-input']").press("Enter");
    await expect(
      page.locator(`//a[contains(text(), '${user.userName}')]`),
    ).not.toBeVisible();
  };

  const logout = async (page: Page) => {
    await page.locator("//a[contains(text(), 'Howdy, ')]").hover();
    await page.locator("//a[contains(text(), 'Log Out')]").click();
  };

  test.beforeEach(async ({ page }) => {
    await test.step("Open page Playwright", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page.locator("//input[@id='user_login']").fill(admin.userName);
      await page.locator("//input[@id='user_pass']").fill(admin.passWord);
      await page.locator("//input[@id='wp-submit']").click();
    });
  });

  test.afterEach(async ({ page }) => {
    if (!currentUser) return;
    await test.step("Teardown: đăng nhập vào account admin và xoá account mới được tạo ra", async () => {
      await logout(page);
      await login(page, admin);
      await deleteUser(page, currentUser);
    });
  });

  test("@ACC_001: Create account with editor permission", async ({ page }) => {
    const newUserEditor: User = {
      userName: "k18-thuong-editor",
      email: "thuongEditor@gmail.com",
      firstName: "k18",
      lastName: "thuong",
      passWord: "StrongPass@BetterBytesAcademy",
      role: "Editor",
    };
    currentUser = newUserEditor;
    await test.step("Đi tới màn quản lý user", async () => {
      await goToUserManagement(page);
    });

    await test.step("Thực hiện thêm mới user", async () => {
      await addUser(page, newUserEditor);
    });

    await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
      await logout(page);
      await login(page, newUserEditor);

      //Expected
      const visibleMenus = [
        "Dashboard",
        "Posts",
        "Media",
        "Pages",
        "Comments",
        "Profile",
        "Tools",
      ];
      for (const menu of visibleMenus) {
        await expect(
          page.locator(".wp-menu-name").filter({ hasText: menu }),
        ).toBeVisible();
      }
      const hiddenMenus = ["Appearance", "Users", "Plugins"];
      for (const menu of hiddenMenus) {
        await expect(
          page.locator(".wp-menu-name").filter({ hasText: menu }),
        ).toBeHidden();
      }
    });
  });

  test("@ACC_002: Create account with subscriber permission", async ({
    page,
  }) => {
    const newUserSubscriber: User = {
      userName: "k18-thuong-subscriber",
      email: "thuongSubscriber@gmail.com",
      firstName: "k18",
      lastName: "thuong",
      passWord: "StrongPass@BetterBytesAcademy",
      role: "Subscriber",
    };
    currentUser = newUserSubscriber;
    await test.step("Đi tới màn quản lý user", async () => {
      await goToUserManagement(page);
    });

    await test.step("Thực hiện thêm mới user", async () => {
      await addUser(page, newUserSubscriber);
    });

    await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
      await logout(page);
      await login(page, newUserSubscriber);
      // Expected
      const visibleMenus = ["Dashboard", "Profile"];
      for (const menu of visibleMenus) {
        await expect(
          page.locator(".wp-menu-name").filter({ hasText: menu }),
        ).toBeVisible();
      }
      const hiddenMenus = [
        "Appearance",
        "Users",
        "Plugins",
        "Posts",
        "Media",
        "Comments",
        "Tools",
      ];
      for (const menu of hiddenMenus) {
        await expect(
          page.locator(".wp-menu-name").filter({ hasText: menu }),
        ).toBeHidden();
      }
    });
  });
});
