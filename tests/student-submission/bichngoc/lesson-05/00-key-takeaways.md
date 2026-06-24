### 1. Javascript- Function advance
- Function expression
```
const hello = function(name) {
    return `Hello ${name}`;
}
console.log(hello("Ngoc"));
```

- Arrow function (Lambda function)
```
const giaTri = (price, quantity, discount) => {
    return price * quantity - discount;
}
console.log(giaTri(2, 5, 1));
```

- Anonymous function
Function không có tên
Được sử dụng khi function chỉ cần dùng 1 lần hoặc làm callback

### 2. DOM (Document Object Model)
- Các thẻ HTML thường gặp
```
<html>: Thẻ gốc của trang
<head>: Chứa metadata: tiêu đề web, hiển thị google
<body>: Nội dung của cả web
<div>: Khối/ container chung
<span>: inline container
<header>, <footer>, <nav>, <section>: thẻ ngữ nghĩa
<h1> đến <h6>: Tiêu đề
<p>: Đoạn văn
<a>: Liên kết
<img>: Hình ảnh
<ul>, <ol>, <li>: Danh sách
<form>: Biểu mẫu
<input>: Ô nhập liệu
<button>: Nút bấm
<select> và <option>: Dropdown
<textarea>: Vùng văn bản nhiều dòng
```

### 3. Selector
Có 3 loại thường gặp:
- XPath (thường dùng, đa dạng)
- CSS selector (ngắn gọn, không linh hoạt bằng XPath)
- Playwright selector (chỉ dùng riêng cho playwright, không phụ thuộc cấu trúc DOM)

### 4. Playwright basic syntax
```
import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai hoc 1", async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Input", async () => {
        await page.locator("//input[@id = 'username']").fill("Ngoc Tran");
        await page.locator("//input[@id = 'email']").pressSequentially("tranbichngoc@gmail.com", { delay: 1_000 });
    });

     await test.step("Radio button/ Checkbox", async () => {
        let isCheckedMale =  await page.locator("//input[@id = 'male']").isChecked();
        console.log (isCheckedMale);

        await page.locator("//input[@id = 'male']").check();
        isCheckedMale =  await page.locator("//input[@id = 'male']").isChecked();
        console.log(isCheckedMale);
     });

     await test.step("Select option", async () => {
        await page.locator('//select[@id = "country"]').selectOption("canada");
     });
     
     await test.step("Update file", async () => {
        await page.locator('//input[@type="file"]').setInputFiles("demo-5/data-test.txt");
     });
});
```
