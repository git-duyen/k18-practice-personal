import { test } from '@playwright/test';

const notes = [
    {
        name: "click",
        description: "Thực hiện click vào các phần tử trên trang web."
    },
    {
        name: "fill",
        description: "Điền văn bản vào các trường input hoặc textarea trên trang web."
    },
    {
        name: "type",
        description: "Nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng."
    },
    {
        name: "hover",
        description: "Di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover."
    },
    {
        name: "check",
        description: "Đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked."
    },
    {
        name: "uncheck",
        description: "Bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked."
    },
    {
        name: "selectOption",
        description: "Chọn một hoặc nhiều option trong thẻ <select> (dropdown)."
    },
    {
        name: "press",
        description: "Mô phỏng việc nhấn các phím trên bàn phím như Enter, Tab, Escape hoặc các phím khác."
    },
    {
        name: "dblclick",
        description: "Thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web."
    },
    {
        name: "dragAndDrop",
        description: "Kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web."
    }
];

test('personal notes', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 4", async () => {
        await page.locator("//a[text() ='Bài học 4: Personal notes']").click();

    });

    await test.step("Input", async () => {
        for (let i = 0; i < notes.length; i++) {
            await page.locator("//input[@id='note-title']").fill(notes[i].name);
            await page.locator("//textarea[@id='note-content']").fill(notes[i].description);
            await page.locator("//button[@id='add-note']").click();
        }

    });

    await test.step("search theo keyword", async () => {
        await page.locator("//input[@id='search']").fill("một hoặc nhiều");
    });

});