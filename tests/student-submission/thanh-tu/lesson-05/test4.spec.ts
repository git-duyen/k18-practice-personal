import { test } from "@playwright/test";

test("Add and Search Note", async ({ page }) => {
    await test.step("Go to and CLick", async () => {
        //Đi tới trang web
        await page.goto("https://material.playwrightvn.com/");

        //Click Bài học 4
        await page
            .locator("//a[contains(text(), 'Bài học 4: Personal notes')]")
            .click();
    });

    const arrNote = [
            {
                action: "click",
                description:
                    "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
            },
            {
                action: "fill",
                description:
                    "Hàm fill dùng để điền văn bản vào cách trường input hoặc textarea trên trang web",
            },
            {
                action: "type",
                description:
                    "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thục tế của người dùng",
            },
            {
                action: "hover",
                description:
                    "Hàm hover dùng để di chuyển con trỏ đến vị trí của phần tử kích hoạt hiệu ứng hover",
            },
            {
                action: "check",
                description:
                    "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
            },
            {
                action: "uncheck",
                description:
                    "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
            },
            {
                action: "selectOption",
                description:
                    "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
            },
            {
                action: "press",
                description:
                    "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
            },
            {
                action: "dbclick",
                description:
                    "Hàm dbclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
            },
            {
                action: "dragAndDrop",
                description:
                    "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
            },
        ];

    await test.step("Thêm Note", async () => {
        const titleInput = page.locator("//input[@id='note-title']");
        const contentInput = page.locator("//textarea[@id='note-content']");
        const addButton = page.locator("//button[@id='add-note']");

        for (let i = 0; i < 10; i++) {
            await titleInput.fill(arrNote[i].action);
            await contentInput.fill(arrNote[i].description);
            await addButton.click();
        }
    });

    await test.step("Search", async () => {
        await page
            .locator("//input[@id='search']")
            .pressSequentially("một hoặc nhiều", { delay: 200 });
    });
});
