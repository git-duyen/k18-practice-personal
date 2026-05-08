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
    await page
      .getByRole("textbox", { name: "Username or Email Address" })
      .fill(user.userName);
    await page.getByRole("textbox", { name: "Password" }).fill(user.passWord);
    await page.getByRole("button", { name: "Log In" }).click();
  };

  const goToUserManagement = async (page: Page) => {
    await page.getByRole("link", { name: "Users", exact: true }).click();

    //Expected
    await expect(
      page.getByRole("heading", { name: "Users", level: 1 }),
    ).toContainText("Users");
    await expect(
      page.getByRole("link", { name: "Add User" }).nth(1),
    ).toBeEnabled();
  };

  const addUser = async (page: Page, user: User) => {
    await page.getByRole("link", { name: "Add User" }).nth(1).click();

    await page
      .getByRole("textbox", { name: "Username (required)" })
      .fill(user.userName);
    await page
      .getByRole("textbox", { name: "Email (required)" })
      .fill(user.email);
    await page
      .getByRole("textbox", { name: "First Name" })
      .fill(user.firstName);
    await page.getByRole("textbox", { name: "Last Name" }).fill(user.lastName);
    await page.getByRole("textbox", { name: "Password" }).fill(user.passWord);
    await page.getByLabel("Role").selectOption({ label: user.role });
    await page.getByRole("button", { name: "Add User" }).click();

    //Expected
    await expect(
      page.getByText("New user created.", { exact: false }),
    ).toBeVisible();
  };

  const deleteUser = async (page: Page, user: User) => {
    // Đi tới trang quản lý user
    await page.getByRole("link", { name: "Users", exact: true }).click();

    // Tìm và xóa
    await page
      .getByRole("searchbox", { name: "Search Users" })
      .fill(user.userName);
    await page.getByRole("searchbox", { name: "Search Users" }).press("Enter");
    await page.getByRole("link", { name: `${user.userName}` }).hover();
    await page.getByRole("link", { name: "Delete" }).click();

    // Xác nhận xóa
    const confirmDelete = page.getByText("Delete all content.");
    if (await confirmDelete.isVisible()) {
      await confirmDelete.click();
    }
    await page.getByRole("button", { name: "Confirm Deletion" }).click();

    // Verify kết quả xóa
    await expect(
      page.getByText("User deleted.", { exact: false }),
    ).toBeVisible();
    await page
      .getByRole("searchbox", { name: "Search Users" })
      .fill(user.userName);
    await page.getByRole("searchbox", { name: "Search Users" }).press("Enter");
    await expect(page.getByText("No users found.")).toBeVisible();
  };

  const logout = async (page: Page) => {
    await page.getByText("Howdy, ", { exact: false }).hover();
    await page.getByText("Log Out", { exact: true }).click();
  };

  test.beforeEach(async ({ page }) => {
    await test.step("Open page Playwright", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(admin.userName);
      await page
        .getByRole("textbox", { name: "Password" })
        .fill(admin.passWord);
      await page.getByRole("button", { name: "Log In" }).click();
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
        "Profile",
        "Tools",
      ];
      
      for (const menu of visibleMenus) {
        await expect(
          page.getByRole("link", { name: menu, exact: true }),
        ).toBeVisible();
      }
      await expect(
        page.getByRole("link", { name: "Comments", exact: false }).nth(0),
      ).toBeVisible();

      const hiddenMenus = ["Appearance", "Users", "Plugins"];

      for (const menu of hiddenMenus) {
        await expect(
          page.getByRole("link", { name: menu, exact: true }),
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
          page.getByRole("link", { name: menu, exact: true }),
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
          page.getByRole("link", { name: menu, exact: true }),
        ).toBeHidden();
      }
    });
  });
});
