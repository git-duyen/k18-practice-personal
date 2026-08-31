# Function nâng cao, DOM, Selector & Playwright cơ bản



## 1. Function nâng cao

### 1.1. Function Expression

Định nghĩa function bằng cách **gán nó cho một biến**, thay vì khai báo hàm truyền thống.

```js
// Function Declaration (khai báo hàm)
function add(a, b) {
    return a + b;
}

// Function Expression (biểu thức hàm)
const add = function (a, b) {
    return a + b;
};

// Cả hai gọi giống nhau
console.log(add(2, 3)); // 5
```

### 1.2. Lambda function (Arrow function)

- Xuất hiện lần đầu ở ES6 (ES2015).
- Là cách viết **ngắn gọn hơn** cho function, dùng dấu `=>`.

```js
// Function truyền thống
function add(a, b) {
    return a + b;
}

// Function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function (Lambda)
const add = (a, b) => {
    return a + b;
};
```

**Các cách viết rút gọn:**

| Trường hợp | Cú pháp | Ví dụ |
|---|---|---|
| Chỉ có 1 dòng code | Bỏ `{}` và `return` (implicit return) | `const add = (a, b) => a + b;` |
| Không có tham số | Bắt buộc giữ `()` rỗng | `const greet = () => console.log("Hello!");` |
| Chỉ có 1 tham số | Có thể bỏ `()` (tùy style) | `const double = x => x * 2;` hoặc `const triple = (x) => x * 3;` |

### 1.3. Anonymous function (hàm ẩn danh)

- Function **không có tên**.
- Dùng khi function **chỉ cần dùng một lần** hoặc làm **callback**.
- Một anonymous function không thể đứng một mình (sẽ bị `SyntaxError`) — phải:
  1. Gán cho một biến, hoặc
  2. Dùng làm callback truyền vào chỗ khác (VD: `setTimeout`).

```js
// Named function (có tên)
function namedFunction() {
    console.log("I have a name!");
}

// Anonymous function — KHÔNG thể đứng một mình
function () {          // SyntaxError!
    console.log("I'm anonymous!");
}

// 1. Gán cho biến → hợp lệ
const anonymousFunc = function () {
    console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback → hợp lệ
setTimeout(function () {
    console.log("Anonymous callback!");
}, 1000);
```

> Lưu ý: Arrow function cũng thường được dùng ở dạng anonymous khi làm callback, ví dụ `setTimeout(() => console.log("..."), 1000)`.

### 1.4. Bài tập demo

1. Hàm nhận `name`, in ra chuỗi `hello <name>`.
2. Hàm nhận `price`, `quantity`, `discount`, trả về `price * quantity - discount`.

```js
// ===== Cách 1: Function expression =====
const helloString = function (name) {
    console.log(`hello ${name}`);
};
helloString(`Duyen`);   // hello Duyen
helloString(`World`);   // hello World

const totalPrice = function (price, quantity, discount) {
    return price * quantity - discount;
};
console.log(totalPrice(100000, 2, 5000)); // 195000


// ===== Cách 2: Lambda (arrow) function =====
const hello = (name) => {
    console.log(`hello ${name}`); // chỉ 1 câu nên có thể bỏ {}
};
hello(`Duyen`);   // hello Duyen
hello(`World`);   // hello World

const totalPrices = (price, quantity, discount) => {
    return price * quantity - discount;
};
console.log(totalPrices(100000, 2, 5000)); // 195000
```
---

## 2. DOM (Document Object Model)

Khi mở một website, người dùng thấy: **khối text, hình ảnh, liên kết, ô input**...
Máy tính (trình duyệt) nhìn trang web dưới dạng **cây có cấu trúc** — gọi là **DOM**.

- Mở cây DOM bằng phím **F12** (hoặc chuột phải → **Inspect**), chọn tab **Elements**.

```
document
 └─ <html>              (Root element)
     ├─ <head>
     │   └─ <title>  →  "My title" (Text)
     └─ <body>
         ├─ <h1>     →  "A heading" (Text)
         └─ <a href="...">  →  "Link text" (Text)
```
    

### 2.1. Cấu trúc một thẻ (tag)

```html
<option value="usa" school="HN">United States</option>
 ↑         ↑     ↑      ↑            ↑              ↑
tag mở  thuộc  giá trị  thuộc       text          tag đóng
        tính   của      tính 2
               thuộc
               tính
```

- **Thẻ tự đóng** (không có nội dung bên trong, không cần tag đóng riêng):
  ```html
  <img src="image.jpg" alt="Image description"/>
  <br/>
  <hr/>
  ```

### 2.2. Các thẻ tiêu chuẩn thường gặp

**Thẻ cấu trúc cơ bản**

| Thẻ | Ý nghĩa |
|---|---|
| `<html>` | Thẻ gốc của trang |
| `<head>` | Chứa metadata: tiêu đề website, hiển thị Google |
| `<body>` | Nội dung của cả website hiển thị |
| `<div>` | Khối/container chung |
| `<span>` | Inline container |
| `<header>`, `<footer>`, `<nav>`, `<section>` | Thẻ ngữ nghĩa |

**Thẻ nội dung**

| Thẻ | Ý nghĩa |
|---|---|
| `<h1>` → `<h6>` | Tiêu đề |
| `<p>` | Đoạn văn |
| `<a>` | Liên kết |
| `<img>` | Hình ảnh |
| `<ul>`, `<ol>`, `<li>` | Danh sách |

**Thẻ Form (quan trọng cho Testing)**

| Thẻ | Ý nghĩa |
|---|---|
| `<form>` | Biểu mẫu |
| `<input>` | Ô nhập liệu (text, password, checkbox, radio, ...) |
| `<button>` | Nút bấm |
| `<select>` / `<option>` | Dropdown |
| `<textarea>` | Vùng văn bản nhiều dòng |

---

## 3. Selector

**Automation = tương tác** với các phần tử trên trang web (input, fill, click, ...).
Để tương tác được, ta cần **tìm** được phần tử đó trước — **Selector** là công cụ giúp ta tìm.

### 3.1. Ba loại selector thường dùng

| Loại | Đặc điểm | Ví dụ |
|---|---|---|
| **XPath** | Dùng được hầu hết mọi trường hợp (99.99%); đa dạng, tìm được cả phần tử khó; cú pháp hơi dài | `//button[normalize-space() = 'Add to cart']` |
| **CSS selector** | Ngắn gọn, performance cao; dùng cho trường hợp dễ tìm; không linh hoạt bằng XPath | `.add-to-cart` |
| **Playwright selector** | Chỉ dùng riêng cho Playwright; cú pháp ngắn gọn, không phụ thuộc cấu trúc DOM; hướng tới "giống người dùng đang nhìn thấy gì" | `page.getByText("Add to cart")` |

**Thứ tự ưu tiên khi chọn:** `Playwright selector > CSS Selector > XPath`
Tuy nhiên vẫn cần học hiểu cả ba loại để tùy biến theo từng dự án — có dự án bắt buộc dùng CSS hoặc XPath theo convention riêng.

### 3.2. XPath selector

- XPath = **XML Path**.
- Có 2 loại:
  - **Tuyệt đối**: đi dọc theo cây DOM, bắt đầu bởi **1 dấu `/`**.
  - **Tương đối**: tìm dựa vào đặc tính phần tử, bắt đầu bởi **2 dấu `//`**.
    - Cú pháp: `//tenthe[@thuoctinh="giatri"]`
- **Nên dùng XPath tương đối** (bền hơn khi cấu trúc trang thay đổi).

---

## 4. Playwright basic syntax

### 4.1. `test` và `test.step`

- **`test`**: đơn vị cơ bản để khai báo một test.
- **`step`**: đơn vị nhỏ hơn test, dùng để khai báo từng bước của test case.
  - Lưu ý: step nên được **map 1-1 với test case** để dễ maintain.

```js
test('<tên test>', async ({ page }) => {
  await test.step('Tên step', async () => {
    // Code here
  });
});
```

### 4.2. Navigate — mở trang

```js
await page.goto('https://pw-practice.playwrightvn.com/');
```

### 4.3. Locate — tìm phần tử

Dùng `page.locator("<selector>")` để chọn phần tử trên trang.

```js
page.locator("//input[@id='email']")
```

### 4.4. Click

```js
// Click đơn
await page.locator("//button").click();

// Double click
await page.locator("//button").dblclick();

// Click chuột phải
page.locator("//button").click({ button: 'right' });

// Click kèm bấm phím khác (VD: Shift + click)
page.locator("").click({ modifiers: ['Shift'] });
```

### 4.5. Input

```js
// Fill: giống "paste" nội dung vào ô input (nhanh, không mô phỏng gõ phím)
page.locator("//input").fill('Playwright Viet Nam');

// pressSequentially: giống gõ từng chữ cái vào ô input (mô phỏng người dùng thật)
page.locator("//input").pressSequentially('Playwright Viet Nam', {
  delay: 100,
});
```

### 4.6. Radio / Checkbox

```js
// Lấy giá trị hiện tại đang check hay không
const isChecked = page.locator("//input").isChecked();

// Check / uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

### 4.7. Select (dropdown)

```js
await page.locator('//select[@id="country"]')
          .selectOption({ label: 'USA' });
```

### 4.8. Upload file

```js
await page.locator("//input[@id='profile']")
          .setInputFiles("<file-path>");
```

