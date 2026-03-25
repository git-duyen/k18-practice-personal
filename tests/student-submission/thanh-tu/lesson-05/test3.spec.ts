import { test } from "@playwright/test";

test("Add and Delete in Todo List", async ({ page }) => {
    await test.step("Go to and CLick", async () => {
        //Đi tới trang web
        await page.goto("https://material.playwrightvn.com/");

        //Click Bài học 3
        await page
            .locator("//a[contains(text(), 'Bài học 3: Todo page')]")
            .click();
    });

    await test.step("Todo List", async () => {
        //Thêm mới 100 item
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.click("//button[@id='add-task']");
        }

        //Xóa các todo có số lẻ
        page.on("dialog", async (dialog) => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page
                    .locator(`//li[.//span[text()="Todo ${i}"]]`)
                    .locator("//button[text()='Delete']")
                    .click();
            }
        }
    });
});
