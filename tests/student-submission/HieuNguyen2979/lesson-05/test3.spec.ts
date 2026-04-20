import { test } from "@playwright/test";
test("test 02", async ({ page }) => {
  await test.step("Click link", async () => {
    await page.goto("https://material.playwrightvn.com");
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });
  await test.step("Create to do list", async () => {
    for (let i = 1; i < 101; i++) {
      await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });
  await test.step("Delete odd test", async () => {
    page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i < 101; i += 2) {
      await page.locator(`//button[@id='to-do-${i}-delete']`).click();
      page.off("dialog", (dialog) => dialog.accept());
    }
  });
});
