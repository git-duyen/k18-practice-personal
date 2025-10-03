# Functions advance (function nâng cao):
## 1. Function expression (biểu thức hàm): 
- Khái niệm: Định nghĩa function bằng cách **gán nó cho một biến**
```js
const add = function(a, b) {
return a + b;
};

console.log(add(2, 3));
```

## 2. Lambda function (Arrow Function):
- Khái niệm: là cách viết **ngắn gọn hơn** cho function, sử dụng dấu `=>`
```js
const add = (a, b) => {
    ;
};

// Nếu chỉ có 1 dòng code => có thể “rút gọn” cặp ngoặc nhọn:
const add = (a, b) => a + b;

// Không có tham số cũng phải có () rỗng:
const greet = () => console.log("Hello!");

// Chỉ có 1 tham số => có thể bỏ () hoặc giữ tùy ý
const double = x => x * 2; // bỏ ()
const double = (x) => x * 2; // giữ ()
```

## 3. Anonymous function (hàm ẩn danh):
- Khái niệm: function không có tên, sử dụng khi function chỉ cần **dùng một lần** hoặc **làm callback**
- Phải được sử dụng ngay
- không thể đứng 1 mình, cần gán cho 1 biến hoặc truyền làm callback
```js
// 0. Đứng 1 mình sẽ báo lỗi: SyntaxError!
function() { 
  console.log("I'm anonymous!");
};

// 1. Gán cho biến (cũng thuộc Function expression)
const anonymousFunc = function() {
console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback
setTimeout(function() {
console.log("Anonymous callback!");
}, 1000);
```

# DOM (Document Object Model)
## 1. Cấu trúc 1 element: <> </>
```js
<option value ="usa">United States</option>

// <option>: thẻ mở
// value: thuộc tính
// "usa": giá trị của thuộc tính
// United States: nội dung thẻ
// </option>: thẻ đóng
```
- Một số thẻ tự đóng: **<  />**
```js
<img src="image.jpg" alt="Image description"/>
<br/>
<hr/>
```
- [Các thẻ HTML thường gặp](https://material.playwrightvn.com/035-DOM-elements.html)
## 2. Phân loại:
- **Thẻ tiêu chuẩn**: thẻ đã được tổ chức uy tín mozilla định nghĩa, trình duyệt nào cũng hiểu
    ```html
    Thẻ Nội Dung:
        <html>: Thẻ gốc của trang
        <head>: Chứa metadata: tiêu đề website, hiển thị Google
        <body>: Nội dung của cả website hiển thị
        <div>: Khối/container chung
        <span>: Inline container
        <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
        
    Thẻ Form:
        <form>: Biểu mẫu
        <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
        <button>: Nút bấm
        <select> và <option>: Dropdown
        <textarea>: Vùng văn bản nhiều dòng
    ```
- **Thẻ tự định nghĩa**: do lập trình viên/ website tự định nghĩa. Tên thẻ bắt buộc phải có dấu gạch ngang (-) để tránh trùng với thẻ tiêu chuẩn
    ```html
    Ví dụ:
    <my-button></my-button>
    ```

# Selector (bộ chọn):
- Khái niệm: là công cụ giúp ta tìm phần tử cần tương tác (input, fill, click...) trên trang web
- Phân loại: Có 3 loại selector thường dùng:
    - XPath
    - CSS selector
    - Playwright selector
## 1. XPath:
- XXPath hoạt động dựa trên cấu trúc cây DOM và có thể duyệt qua các quan hệ cha/con/anh/em
- Linh hoạt, có thể tìm các phần tử khó
- Cú pháp dài
- Có 2 loại:
    - **Tuyệt đối**: đi dọc theo cây DOM bắt đầu bởi /
    - **Tương đối**: tìm dựa vào đặc tính bắt đầu bởi // **=> nên sử dụng**
```js
//tenthe[@thuoctinh=”giatri”]
// Ví dụ:
//button[normalize-space() = ‘Add to cart’]
```
## 2. CSS selector:
- CCS selector hoạt động bằng cách nhận selector, rồi trình duyệt quét toàn bộ DOM để tìm phần tử khớp với mẫu selector.
- Dùng cho các trường hợp dễ tìm, ít trùng lặp
- Cú pháp ngắn gọn
```
# → chọn theo id
#toggleOption = phần tử có id="toggleOption"

. → chọn theo class
.slider = phần tử có class slider

tag → chọn theo tên thẻ
input = tất cả thẻ <input>

Kết hợp được:
input#toggleOption = <input> có id="toggleOption"
span.slider.round = <span> có class slider và round
```
```html
Ví dụ:
<input type="checkbox" id="toggleOption">
<span class="slider round"></span>

#toggleOption → ra cái <input>
.slider → ra cái <span>
#toggleOption + .slider → ra cái <span> ngay sau <input>
```
## 3.Playwright selector:
- Playwright selector dùng riêng cho playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
```js
page.getByText(“Add to cart”);
```

# Playwright 
## 1.Playwright basic syntax (các cú pháp đơn giản):
- **test**: Đơn vị cơ bản để khai báo một test
- **step**: Đơn vị nhỏ hơn test, để khai báo từng step của test case
```js
import { test, expect } from '@playwright/test';

test('Basic actions', async ({ page }) => {
  // 1. Navigate
  await test.step('Navigate', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  // 2. Click (Locate + Click)
  await test.step('Click', async () => {
    await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    await expect(page).toHaveURL(/.*register/); // check điều hướng
  });

  // 3. Input text
  await test.step('Input', async () => {
    const nameInput = page.locator('#username');
    await nameInput.fill('Hien Nguyen');
    await expect(nameInput).toHaveValue('Hien Nguyen');
  });

  // 4. Radio button + Checkbox
  await test.step('Radio & Checkbox', async () => {
    // Chọn giới tính
    await page.locator('input[type="radio"][value="male"]').check();
    await expect(page.locator('input[type="radio"][value="male"]')).toBeChecked();

    // Tick đồng ý điều khoản
    await page.locator('input[type="checkbox"][id="agree"]').check();
    await expect(page.locator('#agree')).toBeChecked();
  });

  // 5. Select dropdown
  await test.step('Select', async () => {
    await page.locator('#country').selectOption('Vietnam');
    await expect(page.locator('#country')).toHaveValue('Vietnam');
  });

  // 6. Upload file
  await test.step('Upload file', async () => {
    await page.setInputFiles('input[type="file"]', 'tests/fixtures/sample.png');
  });
  // Xử lý dialog
  await test.step("Dialog", async () => {
    await page.on("dialog", async (dialog) => dialog.accept());
  });
});
```

## 2.Hover:
- Để hover vào phần tử, ta dùng hàm **hover**:
```js
await page.locator("<xpath here>").hover();
```
- Hàm **text()** dùng để tìm ra phần tử có giá trị tương ứng. 
```html
Ví dụ với DOM sau:
<div @class=”playwright”>This is a text</div>

Thì để chọn phần tử này, ta dùng cú pháp như sau:
//div[text()=’This is a text’]
```
- Hàm **contains()** dùng để lấy các phần tử có khoảng trắng trước/sau hoặc có các giá trị không cố định trong text
```html
<div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
<div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web

Để chọn các phần tử này, ta dùng hàm contains(<giá trị>, <giá trị contains>)
//div[contains(text(), ‘Tôi là Alex’)]
//div[contains(text(), ‘Bây giờ là:’)]
```





