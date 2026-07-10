# A. JavaScript - Function advance

## 1. Function expression

> Định nghĩa function bằng cách ***gán nó cho một biến**

    a. Function Declaration (Khai báo hàm)

    ```js
    function add(a,b) {
        return a + b;
    }
    console.log(add(2,3)); // 5
    ```

    b. Function Expression (Biểu thức hàm)

    ```js
    const add = function(a, b) {
        return a + b
    }
    console.log(add(2,3)); // 5

    ```

## 2. Lambda function (Arrow function)

> Sử dụng với dấu ***=>*** , đây là cách viết ngắn gọn hơn cho function.

        const add = (a, b) => {
        return a + b
        }

***Arrow Function Syntax Rules***

> Arrow Function (`=>`) có nhiều cách viết rút gọn tùy theo số lượng tham số và số dòng xử lý.

| Case | Rule | Example |
| --- | --- | --- |
| One-line function | Có thể bỏ `{}` và `return` | `const add = (a, b) => a + b;` |
| Không có tham số | Bắt buộc dùng `()` rỗng | `const greet = () => console.log("Hello!");` |
| Một tham số | Có thể bỏ dấu `()` | `const double = x => x * 2;` |
| Một tham số (giữ ngoặc) | Vẫn có thể giữ `()` nếu muốn | `const triple = (x) => x * 3;` |
| Nhiều tham số | Bắt buộc dùng `()` | `const add = (a, b) => a + b;` |

## 3. Anonumous function (Hàm ẩn danh)

> Function trong JavaScript có thể có tên (**Named Function**) hoặc không có tên (**Anonymous Function**).
> Function không tên, được sử dụng khi function **chỉ cần dùng 1 lần** hoặc **làm callback**

| Type | Description | Syntax / Example | Note |
| --- | --- | --- | --- |
| Named Function | Function có tên cụ thể | `function namedFunction() {}` | Có thể gọi lại bằng tên function |
| Anonymous Function | Function không có tên | `function() {}` | Không thể đứng một mình, sẽ gây `SyntaxError` |
| Anonymous Function Expression | Gán anonymous function cho biến | `const anonymousFunc = function() {}` | Sử dụng thông qua tên biến |
| Callback Function | Truyền function vào function khác | `setTimeout(function(){},1000)` | Thường dùng cho callback/event |

### Examples

#### Named Function

    ```js
    function namedFunction() {
    console.log("I have a name!");
    }
    ```

---

#### Anonymous Function Expression

    ```javascript
    const anonymousFunc = function() {
        console.log("I'm anonymous but stored in a variable!");
    }
    ```

---

#### Anonymous Callback Function

    ```javascript
    setTimeout(function() {
        console.log("Anonymous callback!");
    }, 1000);
    ```

---
# B. DOM (Document Object Model)

## DOM Overview

### 1. Định nghĩa về DOM

> DOM là cách trình duyệt **biểu diễn trang HTML thành một cây các đối tượng** mà JavaScript có thể đọc và thay đổi được.

#### DOM Tree

    document
    └── html                          (Root element)
        ├── head
        │    └── title
        │         └── "My title"     (Text)
        └── body
            ├── h1
            │    └── "A heading"    (Text)
            └── a
                    ├── href           (Attribute)
                    └── "Link text"    (Text)

#### Cách truy cập vào DOM từ website

> Sử dụng phím F12 hoặc chuột phải vào vùng trống, chọn "Inspect" -> chọn tab "Element"

### 2. DOM Structure

> DOM được xây dựng dưới dạng cây (tree structure).  
> Mỗi thành phần trong cây được gọi là một **Node**.

#### DOM representation

    Document
    |
    └── Element Node
            |
            ├── Attribute Node
            |
            ├── Text Node
            |
            └── Child Element Node

| DOM Component | Description | Example |
| --- | --- | --- |
| Document Node | Node gốc đại diện cho toàn bộ HTML document | `document` |
| Element Node | Đại diện cho HTML element/tag | `<div>`, `<button>`, `<option>` |
| Attribute Node | Thuộc tính của element | `id`, `class`, `data-testid` |
| Text Node | Nội dung text bên trong element | `"Login"` |
| Comment Node | Comment trong HTML | `<!-- comment -->` |
| Child Node | Element con nằm bên trong element khác | `<li>` trong `<ul>` |

### 3. DOM Element Structure

| Part | Description | Example |
| --- | --- | --- |
| Opening tag | Bắt đầu một element | `<button>` |
| Closing tag | Kết thúc một element | `</button>` |
| Attribute | Thông tin bổ sung của element | `id`, `class` |
| Content | Nội dung bên trong element | `Login` |
| Self-closing / Empty Element | Element không chứa content và không cần closing tag | `<img />`, `<br />`, `<hr />` |

### 4. Common HTML Elements

#### Document Structure Elements

| Element | Purpose |
| --- | --- |
| `<html>` | Root element of HTML document |
| `<head>` | Contains metadata and resources |
| `<body>` | Contains visible page content |
| `<header>` | Header section |
| `<footer>` | Footer section |
| `<nav>` | Navigation section |
| `<section>` | Group related content |
| `<div>` | Generic container |
| `<span>` | Inline container |

---

#### Content Elements

| Element | Purpose |
| --- | --- |
| `<h1>` - `<h6>` | Headings |
| `<p>` | Paragraph text |
| `<a>` | Link |
| `<img>` | Image |
| `<ul>` / `<ol>` | List container |
| `<li>` | List item |

---

#### Form Elements (Important for Testing)

| Element | Purpose | Common Test Actions |
| --- | --- | --- |
| `<form>` | User input form | submit |
| `<input>` | Input field | fill, validate value |
| `<button>` | Button | click |
| `<select>` | Dropdown list | select option |
| `<option>` | Dropdown item | verify option |
| `<textarea>` | Multi-line input | fill text | 

---

## SELECTOR

### 1. Overview Selector

> Selector là cú pháp dùng để tìm kiếm và chọn element trong DOM.

### 2. Selector types

| Type | Purpose |
| -------- | --------- |
| XPath | - Select element using XML-like path </br> - Dùng được trong hầu hết các trường hợp </br> - Đa dạng, có khả năng tìm phần tử khó |
| CSS Selector | - Select element using CSS syntax </br> - Ngắn gọn, performance cao </br> - Dùng cho các trường hợp dễ tìm, nhưng không linh hoạt bằng XPath |
| Playwright Selector | - Select element using only Playwright built-in locators </br> - Cú pháp ngắn gọn, không phụ thuộc vào DOM |

### 3. Xpath Selector

> XPath (XML Path) là cú pháp dùng để tìm và chọn element trong DOM.

#### Types of XPath

| Type | Prefix | Syntax | Recommendation |
| -------- | ---------- | ------- | ---------------- |
| Absolute XPath | - Đi dọc theo cây DOM </br> - Bắt đầu bằng `/` | `/html/body/div/...` | ❌ Không khuyến khích |
| Relative XPath | - Tìm dựa vào đặt tính </br> - Bắt đầu bằng `//` | `//button[@id='login']` | ✅ Nên dùng |

Example:

    ```xpath
    //input[@id='email']
    ```

#### Common XPath Functions

| Function | Purpose | When to Use | Example |
| ----------- | ----------- | ----------- | ----------- |
| text() | Tìm ra phần tử có giá trị tương ứng | Text cố định, cần khớp chính xác | `//button[text()='Login']` |
| contains() | Tìm ra phần tử có giá trị khớp 1 phần nội dung | Text động hoặc chỉ cần khớp một phần | `//button[contains(text(),'Login')]` |

---

## Playwright basic syntax

> Automation = Interaction + Verification
> Một test Playwright thường tuân theo flow:
>
> `Test → Step → Navigate → Locate → Interact → Assert`

| Component | Purpose | Common Methods | Example |
| --- | --- | --- | --- |
| `test()` | Khai báo test case | `test()` | `test('<tên test>', async ({ page }) => {})` |
| `test.step()` | Chia test thành các bước nhỏ | `test.step()` | `await test.step('Tên step', async () => {})` |
| Navigate | Điều hướng tới trang web | `page.goto()` | `await page.goto('URL')` |
| Locate | Tìm element trên trang | `page.locator()` | `page.locator('<selector>')` |
| Interact | Tương tác với element | `click()`, `fill()`, `check()`, `selectOption()` | `await locator.fill('test@gmail.com')` |
| Assert | Kiểm tra kết quả mong đợi | `expect()` | `await expect(page).toHaveURL('/home')` |

---

### Example

    ```js
    import { test } from '@playwright/test';

    test('Login successfully', async ({ page }) => {

        await test.step('Open Login Page', async () => {
            await page.goto('/login');
        });

        await test.step('Login', async () => {
            await page.locator('#email')
                .fill('test@gmail.com');

            await page.locator('#password')
                .fill('123456');

            await page.locator('#login-btn')
                .click();
        });

        await test.step('Verify Login Success', async () => {
            await expect(page)
                .toHaveURL('/dashboard');
        });

    });
    ```

---

### Interact Actions

| Category | Method | Purpose | Example |
| --- | --- | --- | --- |
| Click | `click()` | Click element | `await locator.click();` |
| Click | `dblclick()` | Double click | `await locator.dblclick();` |
| Click | `click({ button: 'right' })` | Right click | `await locator.click({ button: 'right' });` |
| Hover | `hover()` | Hover on element | `await page.locator('"<xpath here>"').hover();` |
| Input | `fill()` | Nhập dữ liệu trực tiếp | `await locator.fill('Playwright');` |
| Input | `pressSequentially()` | Gõ từng ký tự | `await locator.pressSequentially('Playwright');` |
| Radio/Checkbox | `isChecked()` | Kiểm tra trạng thái | `await locator.isChecked();` |
| Radio/Checkbox | `check()` | Tick checkbox/radio | `await locator.check();` |
| Radio/Checkbox | `uncheck()` | Bỏ tick checkbox | `await locator.uncheck();` |
| Radio/Checkbox | `setChecked()` | Set trạng thái check | `await locator.setChecked(true);` |
| Select | `selectOption()` | Chọn dropdown | `await locator.selectOption('VN');` |
| Upload File | `setInputFiles("<file-path>")` | Upload file | `await locator.setInputFiles('file.pdf');` |

--- Con

## Browser Dialog - Confirm Dialog

### Overview

- Confirm Dialog là hộp thoại xác nhận do trình duyệt hiển thị.
- Thường xuất hiện trước các hành động quan trọng như:
  - Delete
  - Logout
  - Submit
  - Reset Data

### Common Dialog Types

| Type | Description | Action | Example |
| -------- | -------- | -------- | ------- |
| `alert()` | Notification message | `accept()` | `page.on('dialog', async dialog => dialog.accept());` </br> `await page.getByRole('button').click();` |
| `confirm()` | Confirmation dialog | `accept()` / `dismiss()` | `page.on('dialog', async dialog => await dialog.dismiss());` |
| `prompt()` | Input dialog | `accept(value)` / `dismiss()` | `expect(dialog.message()).toBe('Are you sure?');` |
