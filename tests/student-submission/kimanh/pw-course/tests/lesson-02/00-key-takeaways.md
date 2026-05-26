# Git & JavaScript Basic Summary

# 1. Version Control System (VCS)

Version Control System là hệ thống giúp:
- Quản lý source code
- Theo dõi lịch sử thay đổi
- Làm việc nhóm dễ dàng
- Có thể rollback code về version cũ

Ví dụ:
- Git
- SVN

---

# 2. Phân biệt Git và GitHub

## Git
- Công cụ quản lý source code chạy local
- Theo dõi thay đổi source code
- Làm việc với commit, branch,...

## GitHub
- Nơi lưu trữ source code online
- Dùng để push/pull code
- Hỗ trợ teamwork

---

# 3. Các vùng trong Git

## Working Directory
- Vùng code đang làm việc

## Staging Area
- Vùng chứa file chuẩn bị commit

## Repository
- Vùng lưu commit chính thức

---

# 4. Các lệnh Git cơ bản

## Khởi tạo Git

```bash
git init
```

## Add toàn bộ code

```bash
git add .
```

## Commit code

```bash
git commit -m "add file"
```

## Push code lên GitHub

```bash
git push
```

## Check trạng thái file

```bash
git status
```

### Màu sắc:
- Màu đỏ: chưa add
- Màu xanh: đã add vào staging area

## Xem lịch sử commit

```bash
git log
```

---

# 5. Config username và email theo từng repo

## Config username

```bash
git config user.name "your_name"
```

## Config email

```bash
git config user.email "your_email@gmail.com"
```

## Check config

```bash
git config --list
```

---

# 6. Rule khi commit

## chore
Sửa format, rename, cleanup,...

Ví dụ:

```bash
git commit -m "chore: format code"
```

## feat
Thêm feature hoặc testcase

Ví dụ:

```bash
git commit -m "feat: add login testcase"
```

## fix
Fix bug hoặc sửa testcase

Ví dụ:

```bash
git commit -m "fix: update locator login button"
```

---

# 7. JavaScript Basic

# 7.1 Tạo file JavaScript

Ví dụ:

```text
demo.js
```

---

# 7.2 In nội dung ra console

```js
console.log("Hello world");
```

---

# 7.3 Chạy file JavaScript

## File cùng thư mục

```bash
node demo.js
```

## File nằm trong folder

```bash
node tests/lesson-02/demo.js
```

---

# 7.4 Comment trong JavaScript

## Comment 1 dòng

```js
// Đây là comment
```

## Comment nhiều dòng

```js
/*
Đây là comment
nhiều dòng
*/
```

---

# 7.5 Khai báo biến

## const

```js
const name = "Alex";
```

## let

```js
let age = 20;
```

## var

```js
var city = "HCM";
```

---

# 7.6 Kiểu dữ liệu

## Number

```js
const age = 20;
```

## String

```js
const name = "Alex";
```

## Boolean

```js
const isActive = true;
```

---

# 7.7 Phân biệt var và let

## var
- Cho phép khai báo lại
- Dễ gây lỗi

```js
var name = "A";
var name = "B";
```

## let
- Không cho khai báo lại
- An toàn hơn

```js
let name = "A";
```

---

# 7.8 Khi nào dùng let và const

## let
Dùng khi cần thay đổi giá trị

```js
let age = 20;
age = 21;
```

## const
Dùng khi không thay đổi giá trị

```js
const PI = 3.14;
```

---

# 7.9 Check kiểu dữ liệu

```js
typeof variable;
```

Ví dụ:

```js
const age = 20;

console.log(typeof age);
```

Kết quả:

```text
number
```

---

# 7.10 Toán tử so sánh

```js
>
<
>=
<=
==
===
!=
```

---

# 7.11 Phân biệt == và ===

## ==
So sánh giá trị

```js
5 == "5"
```

Kết quả:

```text
true
```

## ===
So sánh giá trị và kiểu dữ liệu

```js
5 === "5"
```

Kết quả:

```text
false
```

---

# 7.12 Toán tử logic

## AND (&&)

```js
age > 18 && age < 30
```

## OR (||)

```js
age < 18 || age > 60
```

---

# 7.13 Toán tử 1 ngôi

## x++

Tăng sau

```js
let x = 5;

x++;
```

## ++x

Tăng trước

```js
let x = 5;

++x;
```

---

# 7.14 Toán tử toán học

```js
+
-
*
/
%
```

Ví dụ:

```js
const result = 10 + 5;
```

---

# 7.15 Câu điều kiện if

```js
const number = 5;

if (number > 0) {
    console.log("Số dương");
}
```

---

# 7.16 Kết hợp if với AND

```js
const age = 20;

if (age > 18 && age < 30) {
    console.log("Hợp lệ");
}
```

---

# 7.17 Vòng lặp for

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Kết quả:

```text
1
2
3
4
5
```