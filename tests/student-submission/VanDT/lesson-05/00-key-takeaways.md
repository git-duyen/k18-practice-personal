## Bài 5: DOM terminology, playwright basic

### Phần 1: Kiến thức bổ sung: Javascript function advance
#### 1. function expression
Định nghĩa function bằng cách gán nó cho 1 biến
```
const add = function(a,b){
    return a+b;
}
```
#### 2. lambda function (còn gọi là arrow function)
thực hành 1:
```
const a = (name) => {
    return (`Hello ${name}`);
}
```
rút gọn: consts a = (a,b) => a + b;

thực hành 2:
```
const giasp = (price, quantity, discount) => {
    return price * quantity - discount;
};
```
#### 3. anonymous function: hàm ẩn danh
Là hàm không có tên, được sử dụng khi func chỉ dùng 1 lần hoặc làm callback.

## Phần 2: DOM: document object model
```
- 1 element : <option> United State </option>
- 1 thẻ mở: <option> 
            <option value = “usa”> 
(value là thuộc tính, usa là giá trị của thuộc tính)
- 1 thẻ đóng </option>
- 1 thẻ tự đóng <img …./>
		<br/>, <hr/>
```
**Các thẻ tiêu chuẩn thường gặp**
```
<html> : thẻ gốc của trang
<head> : chứa metadata : tiêu đề website, hiển thị google
<body> : nội dung của các website
<div> : khối/container
<header> <footer> <nav> <section> : thẻ ngữ nghĩa
```
```
Thẻ nội dung

<h1> đến <h6> : tiêu đề
<p> : đoạn văn
<a> : liên kết
<img> : hình ảnh
<ul> <ol> <li> : danh sách
```
```
Thẻ form

<form> : biểu mẫu
<input> : ô nhập liệu (text, password, checkbox, radio, etc..)
<button> : nút bấm
<select> và <option> : dropdown
<textarea> : vùng văn bản nhiều dòng
```
**Selector** =>  công cụ giúp ta tìm ra các phần tử trên trang web. Có 3 loại:
- **Xpath**
    - dùng được trong hầu hết các trường hợp
    - da dạng, có khả năng tìm các phần tử khó
    - hơi dài
- **CSS selector**
    - ngắn gọn, performance cao
    - dùng cho các trường hợp dễ tìm
    - không linh hoạt bằng xpath
- **Playwright selector**
    - chỉ dùng riêng cho playwright
    - cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
    - hướng tới giống người dùng đang nhìn thấy gì

## Phần 3: Playwright basic
- test: đơn vị cơ bản để khai báo 1 test
- step: đơn vị nhỏ hơn test, khai báo từng step trong 1 testcase (lưu ý: nên map 1-1 với testcase để dễ dàng maintain.)
- navigate: điều hướng
- locate: sử dụng page.locator("selector") để chọn phần tử trên trang.
- click();
- Input();
- Radio/ checkbox
- select
- upload file
```
import { test } from '@playwright/test';


test ('Basic action', async ({ page}) => {
    await test.step("Step 1: Navigate", async() => {
        await page.goto("https://material.playwrightvn.com/");
    });


    await test.step("Step 2: Click bài học 1", async() => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });


    await test.step("Step 3: input du lieu", async() => {
        await page.locator("//input[@id='username']").fill("Do Van");
        await page.locator("//input[@id='email']").pressSequentially("vandt185@gmail.com", {delay: 1_0});
    });


    await test.step("Step 4: radio button/ checkbox", async() => {
       let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
       console.log(isCheckedMale);
       
       await page.locator("//input[@id='male']").check();
       isCheckedMale = await page.locator("//input[@id='male']").isChecked();
       console.log(isCheckedMale);
    });


    await test.step("Step 5: select country", async() => {
       await page.locator('//select[@id = "country"]').selectOption("canada");


       await page.locator('//input[@type ="file"]').setInputFiles("tests/data-test/data-test.txt");
    });
});
```
## Phần 4: Kiến thức bổ sung
### 1. Tương tác với dialog confirm
```
test('confirmation', async({page}) => {
  await page.goto('https://material.playwrightvn.com');
  await page.click("//a[@href='03-xpath-todo-list.html']");


  await page.locator("//input[@id='new-task']").fill("dovan");
  await page.click("//button[@id='add-task']");
 
  page.on('dialog', async dialog => dialog.accept());
  await page.click("//button[text()='Delete']");
}
```
### 2. Hover
Để hover vào phần tử ta dùng hàm hover sau:
```
await page.locator("<xpath here>").hover();
```
### 3. Text()
Hàm text() dùng để tìm ra những phần tử có giá trị tương ứng
ví dụ với DOM sau:
```
<div @class="playwright">This is a text</div>
```
Để chọn phần tử trên, ta dùng cú pháp như sau
```
//div[text()='This is a text']
```
### 4. Contains()
Đôi khi trong html, phần tử có thể thừa khoảng trắng hoặc giá trị không ổn định. Để chọn các phần tử này ta dùng hàm contains
```
contains(<giá trị>,<giá trị contains>)
VD: xpath: //div[contains(text(),'tôi là a')]
```

