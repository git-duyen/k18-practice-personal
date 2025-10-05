import { test } from "@playwright/test";

test("Task Page", async ({ page }) => {
  await test.step("Step 1: Navigate", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Step 2: Click", async () => {
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });

  await test.step("Step 3: Add 100 tasks", async () => {
    const inputField = page.locator("#new-task");
    for (let i = 1; i <= 100; i++) {
      await inputField.fill(`To do ${i}`);
      await page.locator("#add-task").click();
    }
  });

  await test.step("Step 4: Delete odd tasks", async () => {
    await page.on("dialog", async (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i += 2) {
      await page.locator(`#to-do-${i}-delete`).click();
    }
  });
});
