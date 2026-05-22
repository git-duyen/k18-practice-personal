import { test } from '@playwright/test';

test('Test 4', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 4: Personal Notes' }).click();

    const action = ['click', 'fill', 'type', 'hover', 'check', 'uncheck', 'selectOption', 'press', 'dbclick', 'dragAndDrop'];
    const discription = [
        'Hàm click dùng để thực hiện click vào các phần tử trên trang web', 
        'hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web', 
        'Hàm type dùng để nhập kí tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng', 
        'Hàm hover dùng để di chuyển con trỏ chuột lên trên một phần tử, kích hoạt sự kiện hover', 
        'Hàm check dùng để đánh dấu checbox hoặc radio button, đảm bảo phần tử ở trạng thái checked', 
        'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked', 
        'Hàm selectOption dùng để chọn một tùy chọn từ danh sách dropdown', 
        'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như enter,tab, escape, delete, ...', 
        'Hàm dbclick dùng để thực hiện double click vào một phần tử trên trang web', 
        'Hàm dragAndDrop dùng để kéo 1 phần tử từ vị trí nguồn và thả vào vị trí đích trên web'
    ];
    
    
    
    
    for (let i = 0; i < action.length; i++) {

        await page.locator('#note-title').fill(`Action ${action[i]}`);
    
        await page.locator('#note-content').fill(discription[i]);
    
        await page.locator('#add-note').click();

    }

    await page.locator('#search').fill("một hoặc nhiều")

});