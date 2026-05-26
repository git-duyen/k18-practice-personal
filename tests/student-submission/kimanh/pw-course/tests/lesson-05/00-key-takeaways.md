# Lesson 05 - Function Advanced, DOM & Playwright Basic Syntax

## 1. Function Advanced

### Function Expression

- Định nghĩa function bằng cách gán cho 1 biến.

```js
const add = function(a, b) {
    return a + b;
};
```

---

### Lambda Function (Arrow Function)

- Cách viết ngắn gọn hơn cho function.
- Sử dụng dấu `=>`

```js
const add = (a, b) => a + b;
```

### Note

Với hàm có 1 biến:

```js
const double = x => x * 2;
```

---

### Function truyền thống

```js
function add(a, b) {
    return a + b;
}
```

---

### Anonymous Function (Hàm ẩn danh)

- Function không có tên.
- Thường dùng khi function chỉ sử dụng 1 lần hoặc làm callback.

```js
setTimeout(function() {
    console.log("Anonymous function callback!");
}, 1000);
```

---

### Function có tên

```js
function nameFunction() {
    console.log("I have a name");
}
```

---

# 2. DOM (Document Object Model)

## Node

Ví dụ:

```html
<option>United States</option>
```

Trong đó:

- `<option>` : thẻ mở
- `</option>` : thẻ đóng

---

## Thẻ tự đóng

```html
<img src="image.jpg" alt="Image description"/>
```

---

# Các thẻ HTML thường gặp

## Thẻ cấu trúc cơ bản

```html
<html>
<head>
<body>
<div>
<span>
<header>
<footer>
<nav>
<section>
```

### Thẻ ngữ nghĩa

- `<header>`
- `<footer>`
- `<nav>`
- `<section>`

---

## Thẻ nội dung

```html
<h1> đến <h6>
<p>
<a>
<img>
<ul>
<ol>
<li>
```

| Thẻ | Ý nghĩa |
|---|---|
| h1 → h6 | Tiêu đề |
| p | Đoạn văn |
| a | Liên kết |
| img | Hình ảnh |
| ul/ol/li | Danh sách |

---

## Thẻ Form

```html
<form>
<input>
<button>
<select>
<option>
<textarea>
```

| Thẻ | Ý nghĩa |
|---|---|
| form | Biểu mẫu |
| input | Ô nhập liệu |
| button | Nút bấm |
| select/option | Dropdown |
| textarea | Vùng nhập nhiều dòng |

---

# 3. Selector

Có 3 loại selector thường dùng:

| Loại | Ưu điểm | Nhược điểm |
|---|---|---|
| XPath | Tìm được phần tử khó | Dài |
| CSS Selector | Ngắn gọn, performance cao | Kém linh hoạt hơn XPath |
| Playwright Selector | Ngắn gọn, không phụ thuộc DOM | Chỉ dùng cho Playwright |

---

## Thứ tự ưu tiên

```text
Playwright selector
→ CSS selector
→ XPath
```

---

# XPath

## XPath tuyệt đối

- Đi dọc theo cây DOM.
- Bắt đầu bằng `/`

Ví dụ:

```xpath
/html/body/div/input
```

---

## XPath tương đối

- Dựa vào thuộc tính.
- Bắt đầu bằng `//`

Ví dụ:

```xpath
//input[@id="username"]
```

✅ Nên dùng XPath tương đối.

---

# 4. Playwright Basic Syntax

## Test

- Đơn vị cơ bản để khai báo test.

```js
import { test } from '@playwright/test';

test('Login successfully', async ({ page }) => {

});
```

---

## Step

- Đơn vị nhỏ hơn của testcase.
- Nên map 1-1 với testcase để dễ maintain.

```js
await test.step("Login", async () => {

});
```

---

## Navigate

```js
await page.goto('https://example.com');
```

---

## Locate

```js
await page.locator("//input[@id='username']").fill("KimAnh");
```

---

# Click

## Single Click

```js
await page.locator("//button").click();
```

---

## Double Click

```js
await page.locator("//button").dblclick();
```

---

## Click chuột phải

```js
await page.locator("//button").click({
    button: 'right'
});
```

---

## Click kết hợp phím Shift

```js
await page.locator("//button").click({
    modifiers: ['Shift']
});
```

---

# Input

## Paste vào ô input

```js
await page.locator("//input[@id='username']").fill("KimAnh");
```

---

## Gõ từng ký tự

```js
await page
    .locator("//input[@id='email']")
    .pressSequentially("kimanh@gmail.com", {
        delay: 100
    });
```

---

# Radio / Checkbox

## Kiểm tra trạng thái checked

```js
const isChecked =
    await page.locator("//input").isChecked();
```

---

## Check / Uncheck

```js
await page.locator("//input").check();

await page.locator("//input").setChecked(false);
```

---

# Select Option

```js
await test.step("Select option", async () => {
    await page
        .locator("//select[@id='country']")
        .selectOption("canada");
});
```

---

# Upload File

```js
await page
    .locator("//input[@type='file']")
    .setInputFiles("tests/data-test/data-test.txt");
```