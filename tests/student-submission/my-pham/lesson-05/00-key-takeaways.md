**1. Function advance**
- function expression: định nghĩa function bằng cách gán cho nó 1 biến
    ```typescript
    const add = function(a,b){
        return a+b;
    }
    ```
- lamda function (còn gọi là Arrow function)
    - Đây là cách viết ngắn gọn hơn cho function
    - Sử dụng dấu =>
    - Cú pháp: 
    ```typescript 
        const add = (a,b) => {
            return a + b
        }
    ```
    - Một số cách viết khác
        - nếu chỉ có 1 dòng code
            ```typescript
                const add = (a , b) => return a + b;
            ```
        - Nếu không có tham số: phải có cặp ngoặc tròn rỗng
            ```typescript
                const greet = () => console.log("Hello!");
                const getRandom = () => Math.random();
            ```
        - Một tham số: 
            - có thể bỏ dấu ngoặc tròn
                ```typescript
                    const double = x => x * 2;
                    const square = x => x * x;
                ```
            - hoặc giữ dấu ngoặc
                ```typescript
                    const trible = (x) => x * 3;
                ```
            
- Anonymous function (hàm ẩn danh): 
    - function không có tên
    - được sử dụng khi function chỉ cần dùng một lần hoặc làm callback
    - anonymous function không thể đứng một mình
    - anonymous function phải được sử dụng ngay
        - Gán cho biến
            ```typescript
                const anonymousFunc = function (){
                    console.log("I'm anonymous but stored in a variable");
                }
            ```
        - dùng làm callback
            ```typescript
                setTimeout(function(){
                    console.log("Anonymous callback!");
                },1000);
            
**2. DOM: Document object model**
- Một element: 
    - Thẻ mở
    - Thẻ đóng
    - Text
- Các thẻ tiêu chuẩn thường gặp
    - Thẻ cấu trúc cơ bản:
        ```
        - <html>: thẻ gốc của trang
        - <head> chứa metadata: tiêu đề website, hiển thị google
        - <body>: nội dung của cả website
        - <div>: khối/container chung
        - <span>: Inline container
        - <header>, <footer>, <nav>, <section>: thẻ ngữ nghĩa
        ```
    - Thẻ nội dung
        ```
        - <h1> đến <h6>: tiêu đề cấp 1 đến cấp 6
        - <p>: đoạn văn bản
        - <a>: chức các liên kết đến trang khác, file, email hoặc vị trí trong trang
        - <img>: chèn ảnh vào web
        - <ul>,<ol>,<li>: <ul>tạo danh sách không thức tự, <ol> tạo danh sách có thứ tự, <li>định nghĩa mục trong danh sách 
        -<table>, <thead>,<tfoot>, <tbody>, <tr>, <th>, <td>
        ```
    - THẻ form:
        ```
        - <form>
        - <input>
        - <textarea>

**3. Selector**
- 3 loại selector thường dùng:
    - XPath
        - dùng được trong hầu hết các trường hợp
        - Đa dạng, có khả năng tìm các phần tử khó
        - Hơi dài
    - CSS selector
        - ngắn gọn, performance cao
        - dùng cho các trường hợp dễ tìm
        - không linh hoạt bằng xpath
    - Playwright selector
        - Chỉ dùng riêng cho playwright
        - cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - hướng tới giống người dùng đang nhìn thấy gì

- Khi nào thì dùng gì
    - Playwright selector > CSS selector> XPath

- Xpath selector: có 2 loại
    - tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi 1 dấu '/'
        - nhược điểm: dài, nếu thay đổi vị trí thẻ thì xpath thay đổi, tính ổn định không cao
    - tương đối: tìm dựa vào đặc tính, bắt đầu bởi 2 dấu '//'
        - //tenthe[@thuoctinh="gia tri"]
    - Nên dùng xpath tương đối

**4. Playwright basic syntax**
- test: đơn vị cơ bản để khai báo một test
    ```typescript
    import {test} from '@playwright/test';
    test('Tên test', async({page}) => {

    })
    ```
- step: đơn vị nhỏ hơn test, để khai báo từng step của test case
    ```typescript
        await test.step('Tên step', async() => {

        });
    ```
- Navigate
    ```typescript
        await page.goto('https://pw-practice.playwrightvn.com/');
    ```
- Locate: ```sử dụng page.locator("<selector>") để chọn phần tử trên trang```
    ```typescript
        page.locator("//input[@id='email']")
    ```
- Click
    - single click: await page.locator("//button").click();
    - double click: await page.locator("//button").dbclick();
    - click chuột phải: page.locator("//button").click({
        button: 'right'
    })
    - click chuột kèm bấm phím khác: page.locator("").click({
        modifiers: ['Shift']
    })
- Input: 
    - fill: giống việc paste content vào một ô input
    ```typescript
        page.locator("//input").fill('Playwrigth Viet Nam');
    ```
    - pressSequentially: giống việc gõ từng chữ vào ô input
    ```typescript
        page.locator("//input").pressSequentially('Playwright Viet Nam', {
            delay: 100,
        });
    ```
- Radio/CHeckbox
    - lấy giá trị hiện tại đang là check hay không check
    ```typescript
        const isChecked = page.locator("//input").isChecked();
    ```
    - Check/uncheck
    ```typescript
        page.locator("//input").check();
        page.locator("//input").setChecked(false);
- Select
    ```typescript
        await page.locator('//select[@id="country"]').selectOption({label: 'USD'})

- Upload file
    ```typescript
        await page.locator("//input[@id='profile']").setInputFiles("<file-path>");