# Tổng hợp kiến thức dã học

## Buổi 5

### 1. Function expresstion

Function Expresstion: Định nghĩa function bằng cách gán nó cho 1 biến

```markdown
//Function Declaration (khai báo hàm)
function add(a, b){
return a + b;
}

//Function Expression (biểu thức hàm)
const add = function(a, b){
return a + b;
}

//So sánh cách gọi
console.log(add(a, b)); // 5 - cả hai đêu giống nhau
```

### 2. Lambda Function (Arrow Function)

Đây là cách viết ngắn gọn hơn cho function. Sử dụng dấu =>

```markdown
//Function truyền thống
function add(a, b){
return a + b,
};

//Function Expression
const add = function(a, b){
return a + b;
};

//Arrow Function (Lambda)
const add = (a, b) => {
return a + b;
};

//Cú pháp ngắn gọn nhất (implicit return)
const add = (a, b) => a + b;
```

### 3. Anonymous Function (hàm ẩn danh)

Function không có tên, được sử dụng khi function chỉ cần dùng 1 lần hoặc làm callback.

```markdown
//Anonymous Fuction (không tên)
function () { //Không thể dùng một mình
console.log("I'm anonymous!")
}

//Anonymous Fuction phải được sử dụng ngay
//1. Gán cho biến
const anonymousFunc = function() {
console.log("I'm anonymous but stored in a variable!")
}

//2. Dùng làm callback
setTimeOut(function() {
console.log("Anonymous callback!");
}, 1000);
```

### 4. DOM

Khi vào một website, ta nhìn thấy các website dưới dạng: các khối test, các hình ảnh, các liên kết, các ô input.

Máy tính sẽ nhìn dưới dạng cây có cấu trúc (Element). Cấu trúc này gọi là DOM (Document Object Model).

Cấu trúc của 1 thẻ DOM:

| Thẻ/tag mở | Thuộc tính | Giá trị của thuộc tính | đóng thẻ mở | Text          | Thẻ đóng   |
| ---------- | ---------- | ---------------------- | ----------- | ------------- | ---------- |
| <option    | value =    | "usa"                  | >           | United States | </option\> |

Thẻ tự đóng

```markdown
<img src="img.jpg" alt="Image description"/>
<br/>
<hr/>
```

Trên thực tế có rất nhiều loại thẻ khác nhau:

- Thẻ tiêu chuẩn: thẻ do tổ chức mozila định nghĩa.
  - Thẻ cấu trúc cơ bản:

  ```markdown
  - <html>: Thẻ gốc của trang
  - <head>: Chứa metadata, tiêu đề website, hiển thị Google
  - <body>: Nội dung của website hiển thị
  - <div>: Khối/container chung
  - <span>: Inline container
  - <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
  ```

  - Thẻ nội dung:

  ```markdown
  - <h1> -> <h6>: Tiêu đề
  - <p>: Đoạn văn
  - <a>: Liên kết
  - <img>: Hình ảnh
  - <ul>, <o;>, <li>: Danh sách
  ```

  - Thẻ Form (Quan trọng cho Testing):

  ```markdown
  - <form>: Biểu mẫu
  - <input>: Ô nhập liệu (text, password, checkbox, radio, etc)
  - <button>: Nút bấm
  - <select> và <option> : Dropdown
  - <textarea>: Vùng văn bản nhiều dòng
  ```

- Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa.

### 5. Selector

Có 3 loại selector thường dùng:

- XPath:
  - Dùng được trong hầu hết các trường hợp (99.99%)
  - Đa dạng, có khả năng tìm phần tử khó
  - Hơi dài
  - VD: //button[normalize-space() = 'Add to cart']

- CSS selector:
  - Ngắn gọn, performation cao
  - Dùng được cho các trường hợp dễ tìm
  - Không linh hoạt bằng XPath
  - VD: .add-to-cart

- Playwright selector:
  - Chỉ dùng riêng cho Playwright
  - Cú pháp ngắn gọn, không phụ thuộc vào cấu truc DOM
  - Hướng tới "giống với người dùng đang nhìn thấy gì"
  - VD: page.getByText("Add to cart");

Khi nào thì cần dùng gì?

- Playwright selector > CSS selector > XPath
- Vẫn cần hiểu 3 loại để làm được mọi dự án.
- Có những dự án thích dùng CSS selector, thích dùng XPath, ta buộc phải tuân theo.

### 6. XPath Selector

XPath = XML Path

Có 2 lọai:

- Tuyệt đối: đi dọc theo cây DOM
  - bắt đầu bởi 1 /
- Tương đối: tìm dựa theo đặt tính
  - bắt đầu bởi 2 //
  - //tenthe[@thuoctinh="giatri"]
  - VD: //input[@type="email"]
- Nên dùng XPath tương đối

### 7. Playwright basic syntax - Các cú pháp cơ bản

Automation = tương tác + verify(kiểm tra)

- test: Là đơn vị cơ bản nhất để khai báo một test

  ```markdown
  import { test } from `@playwright/test`;

  test( `<tên test>`, async ({ page }) => {
  // Code của test
  });
  ```

- step: Đơn vị nhỏ hơn test, để khai báo từng step con của test case
  - Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

  ```markdown
  await test.step(`Tên step`, async () => {
  //Code của test
  });

  //test + step
  test(`Tên test`, async ({ page }) => {
  await test.step(`tên step`, async () => {
  // code test
  });
  });
  ```

- navigate:

  ```markdown
  await page.goto(`https://material.playwrightvn.com/`);
  ```

- locate: Sử dụng page.locator("`<selector>`") để chọn phần tử trên trang

  > ví dụ: page.locator("//input[@id=`email`]")

- click:
  - single click:
    > await page.locator("//button").click();
  - double click:
    > await page.locator("//button").dbclick();
  - click chuột phải:
    > await page.locator("//button").click({
    > button: 'right',
    > });
  - click chuột kèm bấn phím khác:
    > page.locator("").click({
    > modifiers: ['Shift'];
    > });

- input:
  - fill: giống việc bạn paste content vào 1 ô input
    > page.locator("//input").fill('Playwright Viet Nam');
  - pressSequentially: giống việc bạn gõ từng chữ cái vào ô input
    > page.locator("//input").pressSequentially('Playwright Viet Nam', {
    > delay: 100,
    > });

- radio/checkbox:
  - Lấy giá trị hiện tại đang là check hay không:
    > const isChecked = page.localtor("//input").isChecked();
  - Check/uncheck
    > page.locator("//input").check();
    > page.locator("//input").setChecked(false);

- select:

  > await locator('//select[@id="contry"]').selecOption({ label: 'USA' });

- upload file:
  > await page.locator("//input[@id='profile']").setInputFiles("<'file-path'>");

### 8. Tương tác với confirmation dialog

```markdown
test("Ex3", async ({ page }) => {
await page.goto("https://material.playwrightvn.com");
await page.click("//a[@href='03-xpath-todo-list.html']");

await page.locator("//input[@id='new-task']").fill("Task 1);
await page.click("//button[@id='add-task']");
await page.click("//button[text()='Delete]");

page.on("dialog", async (dialog) => dialog.accept());
await page.click("//button[text()='Delete']");
});
```
