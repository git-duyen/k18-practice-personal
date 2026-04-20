import { test } from "@playwright/test";

test("Bai 3", async ({ page }) => {
  await test.step("Truy cap trang Playwrightvn", async () => {
    await page.goto(`https://material.playwrightvn.com/`);
  });

  await test.step("Click Bai 3", async () => {
    await page.locator('//a[text()="Bài học 3: Todo page"]').click();
  });

  await test.step("Them moi 100 todo item", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`Todo ${i} `);
      await page.locator('//button[@id="add-task"]').click();
    }
  });

  await test.step("Xoa cac todo co so le", async () => {
    const count = await page.locator("//li").count();
    page.on("dialog", async (dialog) => await dialog.accept());

    for (let i = count; i >= 1; i--) {
      if (i % 2 !== 0) {
        await page.locator(`//button[@id="todo-${i}-delete"]`).waitFor();
        await page.locator(`//button[@id="todo-${i}-delete"]`).click();
      }
    }
  });
});
