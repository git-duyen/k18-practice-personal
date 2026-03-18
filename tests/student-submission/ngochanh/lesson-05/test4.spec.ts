import { test } from '@playwright/test';

test('personal notes', async ({ page }) => {
    await test.step('Open https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Click on Bài học 4: Personal notes', async () => {
        await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('click');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm click dùng để thực hiện click vào các phần tử trên trang web');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('fill');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('type');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('hover');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('check');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('uncheck');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm unchecked dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('selectOption');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('press');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm press dùng để mô phỏng việc nhấn phím trên bàn phím như Enter, Tab, Escape hoặc các phím khác');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('dblclick');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử và thả vào vị trị dích trên trang web');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step('Input title', async () => {
        await page.locator("//input[@id='note-title']").fill('dragAndDrop');

    })
    await test.step('Input content', async () => {
        await page.locator("//textarea[@id='note-content']").fill('Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');

    })
    await test.step('Click on Add Note button', async () => {
        await page.locator("//button[@id='add-note']").click();
    })

    
    await test.step('Tim kiem', async () => {
        await page.locator("//input[@id='search']").fill('một hoặc nhiều');

    })
});
