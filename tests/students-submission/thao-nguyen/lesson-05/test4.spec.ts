import { test, expect} from '@playwright/test';
test('Bài học 4 : Personal notes',async ({page})=>{
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[text()="Bài học 4: Personal notes"]').click();
    const note = [
        { title :'click', content : 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'},
        { title :'fill', content : 'Hàm fill dùng điền văn bản vào các trường input or text area trên trang web'},
        { title :'type', content : 'Hàm type dùng để nhập từng ký tự một vào một phần tử, mô phỏng hành vi gõ phím của người dùng '},
        { title :'hover', content : 'Hàm hover dùng để di chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'},
        { title :'check', content : 'Hàm check dùng để đánh dấu checkboxx or radio button, đảm bảo phần tử ở trạng thái checked'},
        { title :'uncheck', content : 'Hàm uncheck dùng để bỏ chọn một checkbox trên trang web, đảm bảo phần tử ở trạng thái unchecked'},
        { title :'selectOption', content : 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'},
        {title: 'press', content :'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter,tab,Escape or các phím khác'},
        {title: 'dbclick',content : 'Hàm db click dùng để thực hiện double click vào một phần tử trên trang web'},
        {title : 'dragAndDrop', content : 'Hàm drag and drop dùng để kéo và thả một phần tử từ vị trí nguồn sang vị trí khác trên trang web'},
    ]
     for (let i = 0; i < note.length; i++) {
        await page.locator('//input[@id="note-title"]').fill(note[i].title);
        await page.locator('//textarea[@id="note-content"]').fill(note[i].content);
        await page.locator('//button[@id="add-note"]').click();
     }
     //Search 
        await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
    });


