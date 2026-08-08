# Function 
## Function Expression 
- Định nghĩa Function bằng cách gán nó vào một biến
- Function Declaration (khai báo hàm)
    function add(a,b) {
        return a+b;
    }
- Function Expression (biểu thức hàm) 
    const add = function (a,b) {
        return a +b; 
    }
## Lambda function
- Còn gọi là Arrow Function 
+ Xuất hiện lần đầu trong ES6
+ Đây là cách viết ngắn gọn hơn trong function 
+ Sử dụng dấu => 
- Arrow function (Lambda) 
    const add = (a, b) => {
        return a + b;
    };
- Nếu chỉ có 1 dòng code => có thể rút gọn cặp ngoặc nhọn
+ Cú pháp ngắn gọn nhất (implicit return) 
    const add = (a, b) => a +b;
+ Không có tham số: Phải có dấu ngoặc tròn rỗng 
VD: 
    const greet = () => console.log ("Hello!");
+ Một tham số: Có thể bỏ dấu ngoặc tròn
    const double = x => x * 2; 
Hoặc giữ dấu ngoặc 
    const triple = (x) => x * 3; 
## Anonymous function (hàm ẩn danh): 
- Function không có tên 
- Được sử dụng khi function chỉ cần dùng một lần hoặc làm callback
+ Named functin (có tên) 
    function namedFunction () {
        console.log ("I have a name!");
    }
+ Anonymous function (không tên)
    function() {  // SyntaxError! Không thể đứng một mình
        console.log("I'm anonymous!");
    }
+ Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
  console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback
setTimeout(function() {
  console.log("Anonymous callback!");
}, 1000);

# DOM 
- Khi vào 1 website ta sẽ nhìn thấy web dưới dạng: 
+ Các hình ảnh 
+ Các liên kết
+ Các input 
- Máy tính sẽ "nhìn" ở dưới dạng "cây có cấu trúc"
+ Mở cây này bằng cách nhất F12 hoặc chuột phải inspect -> Tab "Element"
+ Cấu trúc này gọi là DOM (document object model)
- Node
- Selector: có 3 loại thường sử dụng: 
+ Xpath
+ CSS selector: ngắn gọn 
## Các thẻ HTML thường gặp
- Thẻ tiêu chuẩn: 
- Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa
- Các thẻ tiêu chuẩn thường gặp: 
Thẻ câu trúc cơ bản
+ <html>: Thẻ gốc của trang

+ <head>: Chứa metadata, tiêu đề website, hiển thị trên Google

+ <body>: Nội dung của cả website hiển thị

+ <div>: Khối/container chung

+ <span>: Inline container

+ <header>, <footer>, <nav>, <section>: Các thẻ ngữ nghĩa
Thẻ nội dụng: 
+ <h1> đến <h6>: Tiêu đề

+ <p>: Đoạn văn

+ <a>: Liên kết

+ <img>: Hình ảnh

+ <ul>, <ol>, <li>: Danh sách
Thẻ Form: 
<form>: Biểu mẫu

<input>: Ô nhập liệu (text, password, checkbox, radio, etc.)

<button>: Nút bấm

<select> và <option>: Dropdown

<textarea>: Vùng văn bản nhiều dòng

# Selector 
Có 3 loại selector thường dùng
- Xpath
+ Dùng được trong hầu hết các trường hợp 
+ Đa dạng, có khả năng tìm cac phần tử khó
+ Hơi dài 
VD: //button[normalize-space () = 'Add to cart']
- CSS selector
+ Ngắn gọn, performance cao
+ Dùng cho các trường hợp dễ tìm
+ Không linh hoạt bằng Xpath
VD: .add-to-cart 
- Playwright selector
+ Chỉ dùng riêng cho playwright 
+ Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM 
+ Hướng tơi giống người dùng đang nhìn thấy nhất
VD: page.getByText("Add to cart")
Khi nào thì dùng gì: Playwright -> CSS Selector -> XPath
## XPath selector
- Xpath = XML path 
- Có 2 loại: 
+ Tuyệt đối: đi dọc theo cây DOM bắt đầu bởi 1 / 
+ Tương đối: tìm dựa vào đặc tính bắt đầu bởi 2 //
    //tenthe[@thuoctinh = "gia tri"]
## Playwirght basic syntax
- Viết 1 test
+ test: đơn vị cơ bản để khai bao một test
+ step: đơn vị nhỏ hơn test, để khai báo từng step của testcase
*Lưu ý: Step được map 1-1 với TC để dễ dàng quản lý*

- Tương tác cơ bản: 
+ Navigate
+ Click 
+ Fill
+ Radio/ checkbox
+ Select
+ Upload file

