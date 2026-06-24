import { test as base, expect } from "@playwright/test";
import { MaterialBasePage } from "./01-pom";

// Fixture định nghĩa kiểu dữ liệu trả về là Page thuần của Playwright
const test = base.extend<{ materialPage: Page }>({
  materialPage: async ({ page }, use) => {
    await page.goto("https://material.playwrightvn.com/"); // Mở trang
    await expect(page.getByText("Tài liệu học automation test")).toBeVisible(); // Assert đầu test

    await use(page); // Trả về đối tượng page đã được đi tới trang đích

    console.log("End of test");
  },
});
export { test };
