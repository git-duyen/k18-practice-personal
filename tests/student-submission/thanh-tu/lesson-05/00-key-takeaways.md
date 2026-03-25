# DOM terminology, Playwright basic

## Function advance

### Function expression (biểu thức hàm)
Định nghĩa function bằng cách **gán nó cho một biến**
```
VD1:
const add = function(a,b){
    return a + b;
}

console.log(add(2, 3));
//5
```
```
VD2:
const printName = function(name){
	return `Hello ${name}`;
}

console.log(printName("ThanhTu"));
```
### Lamda function
Hay còn gọi là Arrow Function
* cách viết ngắn gọn hơn cho function
* sử dụng dấu `=>`

```
const add = (a,b) =>{
    return a + b;
}
```

* Nếu chỉ có 1 dòng code => có thể *rút gọn* cặp ngoặc nhọn
`const add = (a, b) => a+ b;`

* Không tham số, `const greet = () => console.log("Hello");`

* Một tham số, `const double = x => x * 2;`

### anonymous function(hàm ẩn danh)
* function không có tên
* được sủ dụng khi chỉ cần dùng 1 lần hoặc làm callback

```
/// 1. Gán cho biến
const anonymousFunc = function(){
    console.log("I'm anonymous but stored in a variable");
}

// 2. Dùng làm callback
setTimeout(function(){
    console.log("Anonymous callback");
}, 1000);
```

## DOM
DOM = Document Object Model

### Thẻ cấu trúc cơ bản

`<> - thẻ mở, </> - thẻ đóng`

`<html>`, thẻ gốc của trang

`<head>`, chứa tiêu đề website, hiển thị google, không hiển thị trực tiếp

`<body>`, chứa nội dung của website, hiển thị trực tiếp

`<div>`, khối/container chung

`<span>`, inline container

`<header>, <footer>, <nav>, <section>`, thẻ ngữ nghĩa

### Thẻ nội dung

`<h1> đến <h6>`, thẻ heading từ cấp 1 đến cấp 6

`<p>`, dùng để định nghĩa 1 đoạn văn bản

`<a>`, chứa liên kết đến các trang khác hoặc các vị trí trong trang

`<img>`, chèn hình ảnh vào trang web

`<ul>` tạo danh sách không thứ tự, `<ol>` tạo danh sách có thứ tự, `<li>` định nghĩa mục trong danh sách

`<table>` tạo bảng dữ liệu, `<thead>` chứa header của bảng, `<tbody>` chứa nội dung chính,`<tfood>` chưa phần chân bảng, `<tr>` tọa hàng, `<th>` tạo ô tiêu đề, `<td>` tạo dữ liệu, `thuộc tính colspan` dùng để gộp cột

### Thẻ Form
`<form>`, tạo biểu mẫu để thu thập dữ liệu người dùng

`<input>`, các loại input (dạng text, password, email, ...)

`<button>`, tạo nút bấm có thể tương tác

`<select>` tạo danh sách thẻ xuống và `<option>` tạo định nghĩa các lựa chọn

`<textarea>`, tạo vùng nhập văn bản nhiều dòng

## Selector

**Có 3 loại selector thườn dùng:**
* XPath
    * Dùng được trong hầu hết các trường hợp
    * Đa dạng, có khả năng tìm những phần tử khó
    * Hơi dài
* CSS Selector
    * Ngắn gọn, performance cao
    * Dùng cho các trường hợp dễ tìm
    * Không linh hoạt bằng XPath
* Playwright selector
    * Chỉ dùng cho Playwright
    * Cú pháp ngắn gọn, không phụ thuộc cấu trúc DOM
    * Hướng tới "giống người dùng đang nhìn thấy gì"
Playwright > CSS Selector > XPath

### XPath
* XPath = XML Path
* Có 2 loại:
    * Tuyệt đối: đi dọc theo cây DOM
        * bắt đầu bởi 1 /
    * Tương đối: tìm dựa vào đặc tính
        * bắt đầu với 2 //
        * `//tenthe[@thuoctinh="gia tri"]`
    * Nên dùng XPath tương đối

## Playwright basic syntax

**Automation = tương tác + verify**

**test:** Đơn vị cơ bản để khai báo một test

**step:** Đon bị nhỏ hơn test, để khai báo từng step của test case

### Basic Action

* Navigate, đi tới trang web
`await page.goto('<website>');`

* Locate, sử dụng `page.locator("<selector>")` để chọn phần tử trên trang

* Input
    * Fill, paste content vào một ô input
`page.locator("//input").fill('Playwright Viet Nam');`
    * pressSequentially, Gõ từng chữ cái vào ô in put
```
page.locator("//input").pressSequentially('Playwright Viet Nam', {
    delay: 100,
});
```

* Radio/Checkbox
    * Lấy giá trị hiện tại đang check hay không:
```
const isChecked = ;
page.locator("//input").isChecked();
```
    * Check/uncheck
```
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

* Select
```
await page.locator("//select[@id='country']").selectOption({label: 'USA'});
```

* Upload file

```
await page.locator("//input[@id='profile']").setInputFiles("<file_path>");
```
