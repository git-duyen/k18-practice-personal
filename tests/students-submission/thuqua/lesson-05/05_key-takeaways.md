# ⚡ JavaScript Advance


## 📌 1. Function Expression

- Định nghĩa function bằng cách **gán nó cho một biến**

```javascript
// Function Expression
const add = function (a, b) {
  return a + b;
};
```

## 📌 2. Lambda Function (Arrow Function)

- Xuất hiện từ **ES6 (ES2015)**
- Cú pháp ngắn gọn hơn function truyền thống
- Sử dụng dấu `=>`

```javascript
// Arrow function
const add = (a, b) => {
  return a + b;
};
```

### 🔹 Không có tham số

```javascript
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();
```

### 🔹 Một tham số
```javascript
// Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;
const square = x => x * x;

// Hoặc giữ dấu ngoặc (tùy style)
const triple = (x) => x * 3;
```

### 📌 3. Anonymous Function (Hàm ẩn danh)

- Là function **không có tên**
- Thường dùng khi:
  - Chỉ cần dùng **một lần**
  - Làm **callback**

```javascript
setTimeout(function () {
  console.log("Hello after 1s");
}, 1000);
```

---

# 🌐 DOM (Document Object Model)
![image_DOM](../images/DOM.png)

---

# 🎯 Selector trong Automation

**Automation = tương tác** với các phần tử trên trang web

**Các hành động phổ biến:**
- Input
- Fill
- Click
- ...


## 📌 Các loại selector thường dùng

- XPath
- CSS Selector
- Playwright Selector



## 1. XPath Selector

### 🧠 Khái niệm
- XPath = **XML Path**
- Dùng để xác định vị trí phần tử trong DOM


### 🔀 Có 2 loại XPath

#### 1.1 XPath tuyệt đối (Absolute XPath)

- Đi dọc theo cây DOM từ root
- Bắt đầu bằng `/`

```text
/html/body/div[1]/form/input
```

#### 1.2 XPath tương đối (Relative XPath)
- Tìm phần tử dựa vào thuộc tính
- Bắt đầu bằng //

```text
//tenthe[@thuoctinh="giatri"]
```
    
#####📌 Ví dụ:
```text
//input[@name="username"]
//button[@id="login"]
```

### 🎯 Summary

| Loại XPath | Ký hiệu | Khuyến nghị     |
|------------|--------|-----------------|
| Tuyệt đối  | `/`    | ❌ Không nên    |
| Tương đối  | `//`   | ✅ Nên dùng     |

## 2. Playwright basic syntax
**Automation = tương tác + verify**
Cách *tương tác* với các phần tử
 - Viết một test
 - Tổ chức thành các step
 - Tương tác cơ bản

    - Navigation
    - Click
    - Fill

```javascript
import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Bai hoc 1', async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step('Input', async () => {
        await page.locator("//input[@id='username']").fill("Thu Qua");
        await page.locator("//input[@id='email']").pressSequentially("vothithuqua97@gmail.com", { delay: 1_000 });
    });

    await test.step('Radio button / Checkbox', async () => {
        let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

        await page.locator("//input[@id='male']").check();
        isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

    });

     await test.step('Select option', async () => {
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.locator("//input[@id='profile']").setInputFiles("tests/data-test/data-test.txt");
    });
});
```

## 📚 Kiến thức bổ sung (Automation & XPath)


### 🖱️ Hover vào phần tử

**Để hover vào một phần tử, sử dụng hàm `hover()`:**

```javascript
await page.locator("<xpath here>").hover();
```

### 🔍 XPath: `text()`

- Hàm `text()` dùng để tìm phần tử có **giá trị text chính xác**

##### 📌 Ví dụ DOM:

```html
<div class="playwright">This is a text</div>
```
##### 👉 XPath:

```html
//div[text()='This is a text']
```

### 🔎 XPath: `contains()`

- Dùng khi:
  - Text có **khoảng trắng dư**
  - Giá trị **không cố định (dynamic)**


##### 📌 Ví dụ:

```html
<div> Tôi là Alex </div>
<div> Bây giờ là: 08:07 </div>
```

##### 👉 XPath:
```html 
//div[contains(text(), 'Tôi là Alex')]
```

#### 🎯 So sánh nhanh
| Hàm          | Mục đích sử dụng                     |
| ------------ | ------------------------------------ |
| `text()`     | Tìm text chính xác 100%              |
| `contains()` | Tìm text tương đối (có thể thay đổi) |

### Tương tác với confirmation dialog
```javascript
import { test } from '@playwright/test';

test('Ex1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='03-xpath-todo-list.html']");

    await page.locator("//input[@id='new-task']").fill('Task 1');
    await page.click("//button[@id='add-task']");
    await page.click("//button[@id='task-1-delete']");

    page.on('dialog', async dialog => dialog.accept());
    await page.click("//button[@id='task-1-delete']");

});
```