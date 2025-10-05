# Function advance
## Function expression
1. Định nghĩa biểu thức hàm: là tạo hàm bằng cách định nghĩa hàm đó bên trong một biểu thức và gán nó cho một biến.

2. Phân biệt Function Declaration và Function Expression
![Hình ảnh](https://files.codingninjas.in/article_images/function-expression-0-1638211013.webp)
- **Function Declaration**
```javascript
function add(a, b) {
return a + b;
}

```
- **Function Expression**
```javascript
const add = function(a, b) {
return a + b;
};

```
Chúng ta sử dụng **function declartion** khi muốn tạo ra function để sử dụng ở bất cứ đâu trong toàn bộ mã code và sử dụng **function expression** khi function bị giới hạn vùng sử dụng, giúp global scope nhẹ và sạch hơn.
## Lambda function
1. Định nghĩa: còn gọi Arrow Function, là cách viết ngắn gọn hơn cho function.
```javascript
const add = (a, b) => {
return a + b;
};

```
2. Một số cách viết khác
-  Cú pháp ngắn gọn nhất (implicit return) nếu chỉ có 1 dòng code
```javascript
const add = (a, b) => a + b;

```
- Không có tham số
```javascript
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();

```
- Một tham số
```javascript
// Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;

// Hoặc giữ dấu ngoặc (tùy style)
const double = (x) => x * 2;

```
## Anonymous function
1. Định nghĩa: hàm không có tên, được sử dụng khi hàm chỉ cần dùng một lần hoặc làm call back.
2. Callback chỉ việc một function bị gán thành tham số của một function khác, như ví dụ dưới đây
```javascript
function callbackFunction(item) {
  // do stuff to an item
}
[1, 2, 3, 4].map(callbackFunction)

```
Trong trường hợp trên **callbackFunction** có thể được gọi ở bất cứ đâu trong toàn bộ application, và điều này không thật sự cần thiết, thay vào đó chúng ta nên sử dụng **Function Expression** theo một trong hai cách sau:
```javascript
const callbackFunction = function(item) {
  // do stuff to an item
}
[1, 2, 3, 4].map(callbackFunction)

//OR
[1, 2, 3, 4].map((item) => {
  // do stuff to an item
})

```
# DOM (Document Object Model)
1. Định nghĩa: là một giao diện lập trình ứng dụng (API). DOM được dùng để truy xuất các tài liệu dạng HTML và XML, có dạng một cây cấu trúc dữ liệu, và thông thường mô hình DOM độc lập với hệ điều hành và dựa theo kỹ thuật lập trình hướng đối tượng để mô tả tài liệu.
![DOM Tree](https://media.geeksforgeeks.org/wp-content/uploads/20210908120846/DOM.png)

2. HTML element
![Hình ảnh](https://dotnettutorials.net/wp-content/uploads/2021/10/word-image-97.png)
![Hình ảnh](https://www.scientecheasy.com/wp-content/uploads/2023/03/img-html-attributes-300x198.png)

3. Các thẻ HTML thường gặp
Thực tế có rất nhiều loại thẻ:
- Thẻ tiêu chuẩn: thẻ do tổ chức uy tín [Mozilla định nghĩa](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- Thẻ tự định nghĩa: do lập trình viên/website tự định nghĩa
- Demo
[Basics of HTML](https://material.playwrightvn.com/035-DOM-elements.html)
# Selector
1. Định nghĩa: Selector là công cụ giúp ta tìm các phần tử trên trang web
2. Ba loại selector thường dùng
## Xpath
- Dùng được trong hầu hết các trường hợp (99.99%)
- Đa dạng, có khả năng tìm các phần tử khó
- Hơi dài
- Có 2 loại:
  - Tuyệt đối: đi dọc theo cây DOM và bắt đầu bởi 1 /
  - Tương đối: tìm dựa vào đặc tính và bắt đầu bởi 2 //
  - Nên dùng XPath tương đối
![Xpath](https://www.scientecheasy.com/wp-content/uploads/2019/08/xpath-syntax.png)
## CSS selector
- Ngắn gọn, performance cao
- Dùng cho các trường hợp dễ tìm.
- Không linh hoạt bằng XPath
![HCSS Ruleset](https://files.codingninjas.in/article_images/css-selectors-0-1635235444.webp)
## SO sánh Xpath và CSS selector
![Hình ảnh](https://media.geeksforgeeks.org/wp-content/uploads/20241003120350/XPath-vs-CSS-selector-.webp)
## Playwright selector
- Chỉ dùng riêng cho Playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
- Hướng tới “giống người dùng đang nhìn thấy gì”
![Hình ảnh](https://user-images.githubusercontent.com/746130/142082759-2170db38-370d-43ec-8d41-5f9941f57d83.png)
# Playwright basic syntax
## test
- Đơn vị cơ bản để khai báo 1 test
```typescript 
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```
## step
- Đơn vị nhỏ hơn test để khai báo từng step của test case
```typescript 
await test.step('Tên step', async () => {
// Code here
});
```

## Some basic syntax
See more details: [Action](https://playwright.dev/docs/input)