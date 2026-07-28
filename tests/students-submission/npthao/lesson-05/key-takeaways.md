# DOM

//Thẻ/tag mở - Thuộc tính - Giá trị của thuộc tính - Text - Thẻ đóng

<option value="usa">United States</option>

## Thẻ tiêu chuẩn: do tổ chức uy tín định nghĩa
- <html>: thẻ gốc của trang
- <head>: chứa metadata: tiêu đề web, hiển thị google
- <body>: nội dung của cả website hiển thị
- <div> : khối/container chung
- <span>: inline container
- <header>, <footer>, <nav>, <section> : thẻ ngữ nghĩa

 ### Thẻ nội dung
 - <h1> đến <h6> : Tiêu đề 
 - <p> : đoạn văn
 - <a> : liên kết
 - <img> : hình ảnh
 - <ul>, <ol>, <li> : Danh sách

 ### Thẻ Form (quan trọng cho Testing)
 - <form>: Biểu mẫu
 - <input>: ô nhập liệu
 - <button>: nút bấm
 - <select> và <option>: dropdown
 - <textarea> : vùng văn bản nhiều dòng

## Thẻ tự định nghĩa: do dev/website tự định nghĩa

# Selector

## XPath
- Ngắn gọn, dùng hầu hết các trường hợp, dài, có thể tìm được các phần tử khó
## CSS selector
- Ngắn gọn, performance cao, dùng cho các trường hợp dễ tìm, không linh hoạt bằng XPath
## Playwright selector
- Chỉ dùng riêng cho Playwright, cú pháp ngắn gọn, không phụ thuộc DOM

1. XPath Selector
- XPath = XML Path

Có 2 loại
- Tuyệt đối: đi dọc theo cây DOM: Bắt đầu bởi 1 /
- Tương đối: tìm dựa vào đặc tính: Bắt đầu bởi 2 //
ex: //Tênthẻ[@thuộctính="giá trị"]

# Playwright basic syntax

## test: đơn vị cơ bản để khai báo một test

test('Basic actions' , async ({ page }) => {
    
    //step: đơn vị nhỏ hơn test, để khai báo từng step của testcase
    
    await test.step("Step 1", async() => {
        //code test
    });
});

// Locate

test ('locate', async ({page}) => {
    page.locator("//input[@id='email']")
});

// Click

// Single click

test ('singleClick', async ({page}) => {
    await page.locator("//button").click();
});

// Double click

test ('doubleClick', async ({page}) => {
    await page.locator("//button").dblclick();
});

// Click chuột phải

test ('clickRight', async ({page}) => {
    page.locator("//button").click({
        button: 'right'
    })
});

// Click chuột kèm bấm phím khác

test ('clickShift', async ({page}) => {
    page.locator("").click({
        modifiers: ['Shift'],
    })
});

// Input
//Fill: tương tự việc paste content vào ô input

test ('input', async ({page}) => {
    page.locator("//input").fill('Playwright Viet Nam');

});


//pressSequentially: tương tự việc gõ từng chữ vào ô input
test ('<tên test>', async ({page}) => {
    page.locator("//input").pressSequentially('Playwright Viet Nam', {
        delay: 100,
    });
    
});

// Radio, Checkbox

//Lấy giá trị hiện tại là check hay không
test ('<tên test>', async ({page}) => {
    const isChecked = page.locator("//input").isChecked();
});

//Check/unchecked 
test ('<tên test>', async ({page}) => {
    page.locator("//input").check();
    page.locator("//input").setChecked(false);
});

//Select
test ('<tên test>', async ({page}) => {
   await page.locator('//select[@id="country"]').selectOption({ label: 'USA'}); 
});

// Upload file
test ('<tên test>', async ({page}) => {
    await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
}); 

