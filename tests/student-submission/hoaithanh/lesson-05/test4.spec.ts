// Click vào bài 4
// thêm mới 10 note
// search với keywork

import { test } from '@playwright/test';

test('test4', async ({ page }) => {
    // Navigate to link
    await test.step('Navigate to link', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // click to Bai 4
    await test.step('Click Bai 4', async () => {
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    // Cách 1: Add note step by step 
    // await test.step('add note', async () => {
    //     await page.locator('//input[@id="note-title"]').pressSequentially('Click', { delay: 100 });
    //     await page.locator('//textarea[@id="note-content"]').pressSequentially('Hàm click dùng để thực hiện click vào các phần tử trên trang web', { delay: 100 });
    //     await page.locator('//button[@id="add-note"]').click();
    // })

    // 2. Add 10 note
    await test.step('Add 10 notes', async () => {
        // step 1: Khai báo nối dung
        const notes = [
            {
                title: 'Click',
                content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'
            },

            {
                title: 'Fill',
                content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'
            },

            {
                title: 'Type',
                content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'
            },

            {
                title: 'Hover',
                content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'
            },

            {
                title: 'Check',
                content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'
            },

            {
                title: 'Uncheck',
                content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'
            },

            {
                title: 'Select',
                content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'
            },

            {
                title: 'Press',
                content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'
            },

            {
                title: 'dblclick',
                content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web'
            },

            {
                title: 'Drag and drop',
                content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'
            },
        ];

        // Step2: sử dụng hàm for (of) (Đây là vòng lặp lấy luôn giá trị, không quan tâm index.)
        
        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();  
        }
        

        // methood 2:
        /*
        for (let a = 1; a < notes.length; a++) {
            const item = notes[a];
            await page.locator('//input[@id="note-title"]').fill(item.title);
            await page.locator('//textarea[@id="note-content"]').fill(item.content);
            await page.locator('//button[@id="add-note"]').click();
        }
        */
    });

    // 3. Search with keyword

    //methood 1: declare the locator 2 time 
    await test.step('Search key work', async () => {
        await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
    });
});