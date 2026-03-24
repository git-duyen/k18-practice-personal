# Function Advance

## 1. Function expression
* Định nghĩa Function bằng cách gán nó cho 1 biến

## 2. Lamda function (Arrow fuction)
* Cách viết function ngắn gọn hơn
* Sử dụng bằng dấu =>
* Có thể rút gọn "{}" nếu phía bên trong function chỉ có 1 dòng code
* Phía trong "()" được giữ nguyên và phía trong rỗng nếu không truyền tham số
* Có thể bỏ "()" nếu chỉ có 1 tham số truyền vào

## 3. Anonymous function
* function không tên
* Được dùng nếu function chỉ dùng 1 lần hoặc làm callback
* Không thể đứng 1 mình




1. Cấu trúc DOM cơ bản: gồm thẻ đóng và thẻ mở
![alt text](image.png)

2. Cấu trúc html của 1 bảng:
<html>: thẻ gốc của trang
<head>: chứa metadata: tiêu đề website, hiển thị Google
<body>: nội dung của cả website hiển thị
<div>: container chung
<span>: inline container
<header>, <footer>, <nav>, <section>: thẻ ngữ nghĩa


3. Selector
- Xpath
- CSS selector
- Playwright selector
    Chỉ dùng riêng cho Playwright
    Cú pháp ngắn gọn, ko phụ thuộc vào cấu trúc DOM
    Hướng tới "giống người dùng đang nhìn thấy gì"
    VD: page.getByText("Add to cart");

Độ ưu tiên xài: Playwright selector > CSS > Xpath

4. Playwright cơ bản
![alt text](image-1.png)