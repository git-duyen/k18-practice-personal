# Automation — Lesson 5
DOM terminology · Selector · Playwright basic

---

## 1. Function nâng cao trong JavaScript

### 1.1. Phân loại Function

**Function Declaration (Khai báo hàm)** — `function tenHam() {}`
- Có tên, khai báo trực tiếp bằng từ khóa `function`.
- Dùng khi: hàm được gọi lại nhiều lần trong chương trình.

**Function Expression (Biểu thức hàm)** — `const tenHam = function() {}`
- Function được gán vào biến; function bên trong không có tên.
- Dùng khi: muốn lưu function vào biến.

**Arrow Function** — `(a, b) => {}`
- Viết ngắn gọn hơn Function Expression, dùng ký hiệu `=>`.
- Dùng khi: JavaScript hiện đại — React, NodeJS, Playwright.

**Anonymous Function (Hàm ẩn danh)** — `function() {}`
- Không có tên, không thể đứng một mình (SyntaxError).
- Phải gán cho biến hoặc truyền vào hàm khác làm callback.
- Thường chỉ dùng một lần.
- Dùng khi: callback, event, `setTimeout()`, `filter()`, `map()`, `forEach()`.


### 1.2. Rút gọn Arrow Function

Quy tắc rút gọn:
- Chỉ có **1 câu lệnh / 1 biểu thức** → bỏ `{}` và `return`.
- Chỉ có **1 tham số** → được bỏ `()` (giữ lại cũng đúng, tùy style).
- Có **từ 2 tham số** trở lên → bắt buộc giữ `()`.
- Có **nhiều câu lệnh** → không rút gọn được, phải giữ `{}` và `return`.

```js
() => { console.log("Hello!"); }        →  () => console.log("Hello!")
(x) => { return x * 2; }                →  x => x * 2
(a, b) => { return a + b; }             →  (a, b) => a + b
(a, b) => { let r = a * b; return r; }  →  không rút gọn được
```

---

## 2. DOM (Document Object Model)

### 2.1. Khái niệm
- Người dùng nhìn thấy: text, hình ảnh, liên kết, ô input.
- Máy tính "nhìn" thấy: một **cây có cấu trúc** → đó là DOM.
- Mở DOM: `F12` (hoặc chuột phải → *Inspect*) → tab **Element**.
- Các mũi tên ▸ trong tab Element chính là các nhánh của cây (cấu trúc cha – con).

### 2.2. Cấu trúc một element
- **Thẻ mở** — bắt đầu element.
- **Thuộc tính (attribute)** — nằm trong thẻ mở.
- **Giá trị thuộc tính** — đứng sau dấu `=`, đặt trong ngoặc kép.
- **Text** — phần nằm giữa thẻ mở và thẻ đóng.
- **Thẻ đóng** — giống thẻ mở nhưng có dấu `/` trước tên thẻ.

**Thẻ tự đóng (self-closing tag):** `<img />`, `<br />`, `<hr />`, `<input />`
- Chỉ có 1 thẻ, không có `</tag>`.
- Không bao bọc text hay element khác.
- Dùng để chèn/hiển thị một thành phần (ảnh, xuống dòng, ô nhập liệu).

### 2.3. Các thẻ HTML thường gặp

**Thẻ cấu trúc cơ bản**
- `<html>` — thẻ gốc, mọi element đều nằm bên trong.
- `<head>` — chứa metadata (title, CSS, JS), không hiển thị trên giao diện.
- `<body>` — toàn bộ nội dung hiển thị; hầu hết element cần thao tác nằm ở đây.
- `<div>` — container dạng khối, nhóm element, chia layout.
- `<span>` — container inline, thường chứa text hoặc thông báo lỗi.
- `<header>` / `<footer>` / `<nav>` / `<section>` — Semantic HTML: đầu trang, cuối trang, menu điều hướng, khu vực nội dung.

**Thẻ nội dung**
- `<h1>`–`<h6>` — tiêu đề, h1 lớn nhất → h6 nhỏ nhất; thường verify tiêu đề.
- `<p>` — đoạn văn bản; thường verify nội dung hiển thị.
- `<a>` — liên kết; thường `click()` hoặc kiểm tra `href`.
- `<img>` *(self-closing)* — hình ảnh; kiểm tra `src`, `alt`.
- `<ul>` / `<ol>` — danh sách không thứ tự / có thứ tự, chứa nhiều `<li>`.
- `<li>` — một item, phải nằm trong `<ul>` hoặc `<ol>`.

**Thẻ Form (quan trọng cho testing)**
- `<form>` — biểu mẫu; gặp ở Login, Register, Search.
- `<input>` *(self-closing)* — ô nhập liệu; thao tác nhiều nhất: `fill()`, `check()`, `uncheck()`.
- `<button>` — nút bấm; thường `click()`.
- `<select>` — dropdown, chứa nhiều `<option>`.
- `<option>` — một lựa chọn, chỉ nằm trong `<select>`.
- `<textarea>` — ô nhập văn bản nhiều dòng.


---

## 3. Selector — công cụ giúp TÌM phần tử

### 3.1. Ba loại selector

**XPath**
- Dùng được hầu hết trường hợp (~99.99%), tìm được cả phần tử khó.
- Nhược: hơi dài.

**CSS Selector**
- Ngắn gọn, performance cao, dùng cho trường hợp dễ tìm.
- Nhược: không linh hoạt bằng XPath.
- Ký hiệu: `.` = class · `#` = id · không dấu = tên thẻ · `[ ]` = thuộc tính bất kỳ.

**Playwright Selector**
- Chỉ dùng riêng cho Playwright, cú pháp ngắn gọn.
- Không phụ thuộc cấu trúc DOM, hướng tới "người dùng đang nhìn thấy gì".

### 3.2. XPath = XML Path — 2 loại

**XPath tuyệt đối (Absolute)** — bắt đầu bằng `/`
- Đi dọc theo cây DOM, theo toàn bộ đường dẫn từ gốc đến node.
- Cú pháp: `/html/body/div/...`

**XPath tương đối (Relative)** — bắt đầu bằng `//` ← **nên dùng**
- Tìm dựa vào đặc tính của phần tử, đi trực tiếp đến node cần tìm.
- Cú pháp: `//tenthe[@thuoctinh="gia tri"]`


---

## 4. Playwright basic syntax



### 4.1. `test` — khai báo một test (file `.spec.ts`)

```ts
import { test } from '@playwright/test';

test('<Tên test>', async ({ page }) => {
  // Code test
});
```

- `import { test }` — nạp hàm `test` từ Playwright.
- `test()` — khai báo một test case; tên test hiển thị trong report.
- `async` — hàm bất đồng bộ, bên trong mới dùng được `await`.
- `{ page }` — fixture Playwright tự cung cấp, đại diện một tab trình duyệt.
- `=>` — Arrow Function.

### 4.2. `test.step` — chia test thành từng bước

```ts
await test.step('Tên step', async () => {
  // Code của step
});
```

- `test.step()` — khai báo một bước, tên step hiển thị trong report.
- `await` — chờ step hoàn thành rồi mới chạy lệnh tiếp theo.
- Một test case có thể chia thành nhiều `test.step`.


### 4.3. Các thao tác cơ bản

**Navigate — mở trang**
```ts
await page.goto('<url>');
```
`page` = tab trình duyệt · `.goto()` = mở/điều hướng đến URL.

**Locate — tìm / chỉ tay vào element**
```ts
page.locator("<selector>").<action>();
```
`.locator()` = tìm/chọn element. Tư duy: **locate element → thực hiện action**.

**Click**
- `.click()` — click
- `.dblclick()` — double click
- `.click({ button: 'right' })` — chuột phải
- `.click({ modifiers: ['Shift'] })` — click kèm phím

**Input — nhập dữ liệu**
```ts
await page.locator("<selector>").fill('<text>');
await page.locator("<selector>").pressSequentially('<text>', { delay: 100 });
```
- `fill()` — điền cả chuỗi một lần (như paste).
- `pressSequentially()` — gõ từng ký tự; `{ delay: 100 }` = chờ 100ms giữa mỗi ký tự.

**Radio / Checkbox**
```ts
const isChecked = await page.locator("<selector>").isChecked();
await page.locator("<selector>").check();
await page.locator("<selector>").setChecked(false);
```
- `.isChecked()` — kiểm tra trạng thái, trả về `true`/`false`.
- `.check()` — chọn · `.setChecked(false)` — bỏ chọn.

**Select — dropdown**
```ts
await page.locator("<selector>").selectOption({ label: '<text>' });
```
`.selectOption()` — chọn option theo `label` (text hiển thị) / `value` / `index`.

**Upload file**
```ts
await page.locator("<selector>").setInputFiles("<file-path>");
```