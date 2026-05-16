import { test } from '@playwright/test';

test('Product page', async ({ page }) => {

    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Bai hoc 4: Personal notes', async () => {
        await page.click("//a[@href = '04-xpath-personal-notes.html']");
    });

    await test.step('Add new 10 notes', async () => {
        const notes = [
            { title: "click", content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web' },
            { title: "fill", content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web' },
            { title: "type", content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng' },
            { title: "hover", content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover' },
            { title: "check", content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked' },
            { title: "uncheck", content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked' },
            { title: "selectOption", content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown' },
            { title: "press", content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác' },
            { title: "dblclick", content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web' },
            { title: "dragAndDrop", content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web' },
        ]
        for (const note of notes) {
            await page.locator("//input[@id = 'note-title']").fill(note.title); // fill title
            await page.locator("//textarea[@id = 'note-content']").fill(note.content); // fill content
            await page.locator("//button[@id = 'add-note']").click(); // Click Add Note button
        }
    });

    await test.step('Search', async () => {
        await page.locator("//input[@id = 'search']").fill('một hoặc nhiều');
    });
});