# Tổng hợp kiến thức đã học từ lesson 05
## 1. JavaScript — Functions advance

### 1.1 Function Expression

**Định nghĩa**: định nghĩa hàm bằng cách gán một function (ẩn danh hoặc có tên) cho 1 biến.

**Ví dụ:**

```js
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3));      // OK vì declaration được hoist
console.log(addExpr(2, 3));  // Lỗi nếu gọi trước khi gán
```

**Hoisting:**

* Với *function declaration*: toàn bộ khai báo hàm được hoist → có thể gọi trước khi định nghĩa.
* Với *function expression*: chỉ tên biến được hoist (với `var` là `undefined`, với `let/const` là "temporal dead zone"). Giá trị gán (hàm) chưa được hoist.

**Khi dùng:** expression hữu ích khi gán cho biến, truyền callback, hoặc cần kiểm soát rõ phạm vi khai báo.

---

### 1.2 Lambda Function (Arrow Function)

**Định nghĩa**: cú pháp ngắn gọn cho function, sử dụng `=>`.

**Ví dụ:**

```js
const sum = (a, b) => a + b;      // implicit return
const inc = x => x + 1;           // 1 tham số, bỏ ngoặc được
const noParam = () => 'ok';       // không tham số
const multi = (a, b) => {         // block body
  const r = a * b;
  return r;
};
```

---

### 1.3 Anonymous Function

**Định nghĩa**: function không có tên, thường dùng 1 lần hoặc làm callback.

**Ví dụ:**

```js
// Gán cho biến
const fn = function() { console.log('anonymous'); };

// Callback
setTimeout(function(){ console.log('run'); }, 1000);

// IIFE
(function(){ console.log('chạy ngay'); })();
```

---

## 2. DOM (Document Object Model)

### 2.1 DOM là gì ?

* DOM là **cấu trúc cây** mô tả HTML; mỗi phần tử là node.
* Mở DevTools (F12) → tab Elements để xem.

### 2.2 Element & thành phần

```html
<option value="usa">United States</option>
```

* Thẻ mở: `<option>`
* Thuộc tính: `value="usa"`
* Text node: `United States`
* Thẻ đóng: `</option>`

### 2.3 Các thẻ tiêu chuẩn thường gặp

**Thẻ Cấu Trúc Cơ Bản:**

* `<html>`: Thẻ gốc của trang
* `<head>`: Chứa metadata: tiêu đề website, hiển thị Google
* `<body>`: Nội dung của cả website hiển thị
* `<div>`: Khối/container chung
* `<span>`: Inline container
* `<header>`, `<footer>`, `<nav>`, `<section>`: Thẻ ngữ nghĩa

**Thẻ Nội Dung:**

* `<h1>` đến `<h6>`: Tiêu đề
* `<p>`: Đoạn văn
* `<a>`: Liên kết
* `<img>`: Hình ảnh
* `<ul>`, `<ol>`, `<li>`: Danh sách

**Thẻ Form:**

* `<form>`: Biểu mẫu
* `<input>`: Ô nhập liệu (text, password, checkbox, radio, etc.)
* `<button>`: Nút bấm
* `<select>` và `<option>`: Dropdown
* `<textarea>`: Vùng văn bản nhiều dòng

---

## 3. Selector

### 3.1 Playwright selector (ưu tiên dùng)

```js
await page.getByLabel('Email').fill('a@b.com');
await page.getByRole('button', { name: 'Submit' }).click();
```

* `getByLabel` → tìm input theo label.
* `getByRole` → dựa trên accessibility role.
* `getByText` → dựa vào text hiển thị.

### 3.2 CSS selector

* Ngắn gọn, performance tốt.

```js
page.locator('.add-to-cart').click();
```

### 3.3 XPath

- Có 2 loại:

  - Tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi /

  - Tương đối: tìm dựa vào đặc tính, bắt đầu bởi //

    - Ví dụ: //tenthe[@thuoctinh="giatri"]

Khuyến nghị: nên dùng XPath tương đối (dễ bảo trì, ít bị vỡ khi DOM thay đổi).

Ví dụ:

```xpath
//button[normalize-space() = 'Add to cart']
```

---

## 4. Playwright basic syntax

### 4.1 Cấu trúc test & step

```js
import { test } from '@playwright/test';

test('Example test', async ({ page }) => {
  await test.step('Open page', async () => {
    await page.goto('https://pw-practice.playwrightvn.com/');
  });

  await test.step('Fill form', async () => {
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByRole('button', { name: 'Submit' }).click();
  });
});
```

* `test` khai báo test case.
* `test.step` chia test thành các bước rõ ràng (log/trace hiển thị step).

### 4.2 Navigation

```js
await page.goto('https://pw-practice.playwrightvn.com/');
```

* Điều hướng tới URL, có thể chờ load state.

### 4.3 Locator

```js
const email = page.locator("//input[@id='email']");
await email.fill('a@b.com');
```

* Locator là object với auto-waiting.

### 4.4 Click

```js
await page.locator("//a[text()= 'Bài học 1: Register Page (có đủ các element)']").click();
await page.locator('//button').dblclick();
await page.locator('//button').click({ button: 'right' });
```

### 4.5 Fill / Type

```js
await page.locator("//input[@id='username']").fill("hiendo");
await page.locator("//input[@id='email']").pressSequentially("dothanhhien2409@gmail.com");
```

* `.fill()` xoá nội dung trước và paste.
* `.type()` gõ từng ký tự (có thể đặt delay).

### 4.6 Checkbox / Radio

```js
await page.locator("//input[@id='cooking']").check();
```

### 4.7 Select (Dropdown)

```js
await page.locator("//select[@id='interests']").selectOption('music');
```

### 4.8 Upload file

```js
await page.locator("//input[@type='file']").setInputFiles('path/to/file.png');
```

### 4.9 Hover

Để hover vào phần tử, dùng hàm `.hover()`:

```js
await page.locator("<xpath here>").hover();
```

### 4.10 Sử dụng `text()` trong XPath

Hàm `text()` dùng để tìm phần tử có giá trị text chính xác.

**Ví dụ:**

```html
<div class="playwright">This is a text</div>
```

XPath:

```xpath
//div[text()='This is a text']
```

### 4.11 Sử dụng `contains()` trong XPath

Dùng khi text có khoảng trắng thừa hoặc giá trị động.

**Ví dụ:**

```html
<div> Tôi là Alex </div> <!-- có space ở đầu và cuối -->
<div> Bây giờ là: 08:07 </div> <!-- thời gian thay đổi -->
```

XPath:

```xpath
//div[contains(text(), 'Tôi là Alex')]
//div[contains(text(), 'Bây giờ là:')]
```

### 4.12 Tương tác với confirmation dialog

Playwright hỗ trợ handle hộp thoại xác nhận (alert/confirm/prompt).

**Ví dụ:**

```js
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept(); // hoặc dialog.dismiss();
});

await page.locator('button#delete').click();
```

* `dialog.accept()`: chấp nhận.
* `dialog.dismiss()`: từ chối.
* Có thể truyền text cho prompt: `dialog.accept('input text');`

---
