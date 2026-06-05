# 1. Function advance 
## 1.1. Functionn Express 
- Định nghĩa function bằng cách gán nó cho một biến

``` // Function Declaration (khai báo hàm)
function add(a, b) {
  return a + b;
}
// Function Expression (biểu thức hàm)
const add = function(a, b) {
  return a + b;
};
// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả hai đều giống nhau 
```

## 1.2. Lamda function 
Lambda function (còn gọi là Arrow Function)
- Xuất hiện lần đầu trong ES6 (ES2015).
- Đây là cách viết ngắn gọn hơn cho function
- Sử dụng dấu =>

```
// Function truyền thống
function add(a, b) {
  return a + b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function (Lambda)
const add = (a, b) => {
  return a + b;
};
```


Note: Lambda function: một số cách viết khác
```
Không có tham số
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();
```

``` 
Một tham số
// Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;
const square = x => x * x;

// Hoặc giữ dấu ngoặc (tùy style)
const triple = (x) => x * 3;
```

## 1.3. Anonymous function
Anonymous function (hàm ẩn danh):
- function không có tên.
- được sử dụng khi function chỉ cần dùng một lần hoặc làm callback.

``` 
// Named function (có tên)
function namedFunction() {
  console.log("I have a name!");
}

// Anonymous function (không tên)
function() { // SyntaxError! Không thể dùng một mình
  console.log("I'm anonymous!");
}

// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
  console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback
setTimeout(function() {
  console.log("Anonymous callback!");
}, 1000);
```

# 2. DOM
Khi vào một website, ta nhìn thấy website dưới dạng:
- Các khối text
- Các hình ảnh
- Các liên kết
- Các ô input

Máy tính sẽ "nhìn" ở dưới dạng "cây có cấu trúc"
- Mở cây này bằng cách bấm phím F12 (hoặc chuột phải vào vùng trống, chọn "Inspect"); sau đó chọn tab "Element"
- Cấu trúc này gọi là DOM (Document Object Model)

![alt text](image-1.png)

Trên thực tế, có rất nhiều loại thẻ khác nhau:
- Thẻ tiêu chuẩn: thẻ do tổ chức uy tín mozilla định nghĩa
- Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa

Các thẻ tiêu chuẩn thường gặp
- Thẻ Cấu Trúc Cơ Bản
```
<html>: Thẻ gốc của trang
<head>: Chứa metadata: tiêu đề website, hiển thị Google
<body>: Nội dung của cả website hiển thị
<div>: Khối/container chung
<span>: Inline container
<header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
```
- Thẻ Nội Dung:
```
<h1> đến <h6>: Tiêu đề
<p>: Đoạn văn
<a>: Liên kết
<img>: Hình ảnh
<ul>, <ol>, <li>: Danh sách
```

- Thẻ Form (Quan trọng cho Testing):
```
<form>: Biểu mẫu
<input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
<button>: Nút bấm
<select> và <option>: Dropdown
<textarea>: Vùng văn bản nhiều dòng
```

# 3. Selector
Automation = tương tác với các phần tử trên trang web
- Input
- Fill
- Click
...
- Để tương tác được, ta cần tìm được phần tử này
Selector là công cụ giúp ta tìm

Có 3 loại selector thường dùng:
1. XPath
- Dùng được trong hầu hết các trường hợp (99.99%)
- Đa dạng, có khả năng tìm các phần tử khó
- Hơi dài
- VD: //button[normalize-space() = 'Add to cart']
2.  CSS selector
- Ngắn gọn, performance cao
- Dùng cho các trường hợp dễ tìm.
- Không linh hoạt bằng XPath
- VD: .add-to-cart
3. Playwright selector
- Chỉ dùng riêng cho Playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
- Hướng tới "giống người dùng đang nhìn thấy gì"
- VD: page.getByText("Add to cart");

Khi nào thì dùng gì?
- Playwright selector > CSS Selector > XPath
- Vẫn cần học hiểu cả ba loại để có thể "cân" được mọi loại dự án.
- Có những dự án "thích" dùng CSS, "thích" dùng XPath, ta buộc phải tuân theo.

## 3.1  Xpath Selector
XPath = XML Path

Có 2 loại:
- Tuyệt đối: đi dọc theo cây DOM
bắt đầu bởi 1 /
- Tương đối: tìm dựa vào đặc tính
bắt đầu bởi 2 //
//tenthe[@thuoctinh="gia tri"]
- Nên dùng XPath tương đối


# 4. Playwright basic syntax
Automation = tương tác + verify

Trong bài này, ta học cách tương tác với các phần tử
- Viết một test
- Tổ chức thành các step
- Tương tác cơ bản
  + Navigation
  + Click
  + Fill

## 4.1 Viết một test
- test: Đơn vị cơ bản để khai báo một test
```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
  // Code của test
});
```

## 4.2 Tổ chức thành các steps 
- step: Đơn vị nhỏ hơn test, để khai báo từng step của test case.
- Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

``` 
test('<tên test>', async ({ page }) => {
  await test.step('Tên step', async () => {
    // Code here
  });
});
```
## 4.3 Các tương tác cơ bản
### 4.3.1 Navigate

    await page.goto('https://playwrightvn.com');

### 4.3.2 Locate
 Sử dụng page.locator("<selector>") để chọn phần tử trên trang
    
    page.locator("//input[@id='email']")

### 4.3.3 Click
- Single click
       
      await page.locator("//button").click();
- Double click

      await page.locator("//button").dblclick();
- Click chuột phải

      page.locator("//button").click({
      button: 'right'
      })
- Click chuột kèm bấm phím khác

      page.locator("").click({
      modifiers: ['Shift'],
      })

### 4.3.4 Input
- Fill: Giống việc bạn paste content vào một ô input

      page.locator("//input").fill('Playwright Viet Nam');
- press Sequentially: Giống việc bạn gõ từng chữ cái vào ô input

      page.locator("//input").pressSequentially('Playwright Viet Nam', {
      delay: 100,
      });

### 4.3.5 Radio/checkbox
- Lấy giá trị hiện tại đang là check hay không:


      const isChecked = await page.locator("//input").isChecked();
- Check/ uncheck

      await page.locator("//input").check();
      await page.locator("//input").setChecked(false);

### 4.3.5 Select

    await page.locator('//select[@id="country"]')
    .selectOption({ label: 'USA' });

### 4.3.6 Upload file
    await page.locator("//input[@id='profile']")
    .setInputFiles("<file-path>");