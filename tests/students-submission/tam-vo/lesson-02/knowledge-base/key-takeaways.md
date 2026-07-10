# Lesson 2 - Git & Javascrip Basic

---

## Git

### Version control system (Hệ thống quản lý phiên bản)

> Lưu history, back lại version cũ, làm việc nhóm mà không đè lên nhau, gồm:

| Loại | Cách lưu trữ | Đặc điểm |
| ------ | ------------- | ----------- |
| **Local** | Lưu trên máy cá nhân | Chỉ làm việc trên một máy, không chia sẻ dễ dàng |
| **Centralized** | Lưu trên một máy chủ trung tâm | Nhiều người cùng làm việc thông qua một server (Central server) |
| **Distributed (popular)** | Lưu trên nhiều máy khác nhau | Mỗi máy đều có bản sao đầy đủ của repository (Git) |

### Git vs GitHub

| Tiêu chí | Git | GitHub |
| ---------- | ----- | --------- |
| Bản chất | Phần mềm quản lý phiên bản | Dịch vụ lưu trữ repository trên web |
| Cài đặt | Cài trên máy tính cá nhân | Truy cập qua trình duyệt hoặc ứng dụng |
| Giao diện | Chủ yếu sử dụng command line | Có giao diện web trực quan |
| Chức năng chính | Theo dõi thay đổi và quản lý mã nguồn | Lưu trữ, chia sẻ và cộng tác trên repository Git |
| Nơi lưu repository | Trên máy local | Trên server của GitHub |
| Làm việc nhóm | Hỗ trợ thông qua Git | Hỗ trợ cộng tác, review code, pull request |
| Tính năng bổ sung | Các tính năng của Version Control System | Version Control System + GitHub Actions, GitHub Copilot, Issues, Projects, Wiki,... |

### Git - Three States

| Trạng thái | Mô tả | Lệnh thường dùng |
| ------------ | -------- | ------------------ |
| Working Directory | Nơi chứa các file đang được tạo mới hoặc chỉnh sửa | `git int` |
| Staging Area (Index) | Nơi tập hợp các thay đổi đã được chọn để chuẩn bị commit | `git add` |
| Repository (.git) | Nơi lưu các commit (phiên bản) của dự án | `git commit` |

### Git Commands

| Lệnh | Chức năng | Note |
| ------- | ----------- | -------- |
| `git init` | Khởi tạo repository mới | Chỉ chạy 1 lần |
| `git add <file>` | Thêm 1 file vào Staging Area | Chạy khi có sự thay đổi |
| `git add .` | Thêm tất cả file thay đổi vào Staging Area | |  
| `git commit -m "message"` | Tạo commit mới | Có thê tạo commit cho nhiều phiên bản cùng lúc, lastest commit sẽ nằm trên cùng |
| `git push origin main` | Push code lên github | |
| `git log` | Xem lịch sử commit | |  
| `git status` | Kiểm tra trạng thái file | Đỏ: File đang ở working director </br> Xanh : File đang ở Staging area |

### Git Config

| Lệnh | Chức năng |
| ------- | ----------- |
| `git config --global user.name "Tên"` | Cấu hình username cho toàn bộ máy |
| `git config --global user.email "Email"` | Cấu hình email cho toàn bộ máy |
| `git config user.name "Tên"` | Cấu hình username cho repo hiện tại |
| `git config user.email "Email"` | Cấu hình email cho repo hiện tại |

### Commit Convention

Format:

```js
<type>: <short_description>
```

| Type | Ý nghĩa | Ví dụ |
| -------- | ---------- | ---------- |
| `feat` | Thêm tính năng mới | `feat: add login page` |
| `fix` | Sửa lỗi | `fix: validate email format` |
| `test` | Thêm hoặc sửa test | `test: add checkout test cases` |
| `docs` | Cập nhật tài liệu | `docs: update README` |
| `refactor` | Cải thiện code, không đổi chức năng | `refactor: simplify login service` |
| `chore` | Công việc bảo trì, config | `chore: update dependencies` |
| `ci` | Thay đổi CI/CD | `ci: add github actions workflow` |

### Full Workflow

> Không dùng global config

```text
git init → git config → git add → git commit → git push
```

> Dùng global config

```text
git init → git add → git commit → git push
```

---

## JavaScript

### JavaScript Basics

| Cú pháp | Mô tả |
| ---------- | ---------- |
| `console.log("Hello")` | In nội dung ra console |
| `node <filename>` | Chạy file JavaScript bằng Node.js |
| `// comment` | Ghi chú một dòng |
| `/* comment */` | Ghi chú nhiều dòng |
| `Ctrl/Cmd + /` | Tạo hoặc bỏ comment nhanh |

### JavaScript - Variables

#### 1. Khai báo biến (Biến thiên, có thể thay đổi đươc)

```text
<từ khoá> <tên biến> = <giá trị>
```

| Từ khóa | Có thể gán lại | Có thể khai báo lại | Khuyến nghị |
| ---------- | --------------- | ------------------- | ------------- |
| `var` | ✅ | ✅ | Ít dùng |
| `let` | ✅ | ❌ | Dùng cho giá trị thay đổi |

#### 2. Khai báo hằng (Hằng số, không thay đổi đươc)

```text
<từ khoá> <tên hằng> = <giá trị>
```

| Từ khóa | Có thể gán lại | Có thể khai báo lại | Khuyến nghị |
| ---------- | --------------- | ------------------- | ------------- |
| `const` | ❌ | ❌ | Ưu tiên sử dụng |

---

### JavaScript - Data Types

#### 1. Primitive Types

> Kiểm tra kiểm dữ liệu `typeof`

```js
typeof <variable>

```

| Kiểu dữ liệu | Ví dụ |
| ------------- | -------- |
| Number (số nguyên và số thực) | 123 , 19.99, infinity, notANumber |
| String (chuỗi ký tự) | `"abc"` `'abc'` `` `abc` `` |
| Boolean | `true`, `false` |
| Undefined | `undefined` |
| Null | `null` |
| Symbol | `Symbol()` |
| BigInt | `123n` |

<!-- #### 2. Reference Types

| Kiểu dữ liệu |
| ------------- |
| Object |
| Array |
| Function | -->

### JavaScript - Operators

#### 1. Toán tử So sánh

> Use so sánh 2 toán hạng, kết quả trả về dưới dạng boolean

| Toán tử | Ý nghĩa |
| ---------- | ---------- |
| `==` | So sánh giá trị **sau khi chuyển đổi kiểu** |
| `===` | So sánh giá trị + kiểu dữ liệu - **không chuyển đổi kiểu** |
| `!=` | Khác |
| `!==` | Khác nghiêm ngặt |
| `>` `<` `>=` `<=` | So sánh lớn nhỏ |

💡 Note: luôn dùng so sánh ba bằng. Chỉ sử dụng hai bằng khi có chủ đích, muốn so sánh mà không quan tâm tới dữ liệu.

#### 2. Toán tử Logic

| Toán tử | Ý nghĩa |
| --------- | ---------- |
| `&&` (AND) | Trả về đúng nếu cả 2 vế của mệnh đề đúng |
| `\|\|` (OR) | Trả về đúng nếu một trong 2 vế của mệnh đề đúng |
| `!` (NOT) | Đảo ngược giá trị boolean |

#### 3. Toán tử một ngôi

> Là toán tử chỉ cần một toán hạng để thực hiện

| Tyle | Toán tử | Ý nghĩa |
| ---- | ----- | ---------- |
| Prefix | `++x` , `--x` | Toán tử nằm ở phía trước - tăng trước, trả về sau |
| Postfix | `x++`, `x--` | Toán tử nằm ở phía sau - trả về trước, tăng sau |

***Example***

```js
let a = 10;
b = ++a; // tăng a lên 11 rồi trả về -> Output: b = 11

let c = 10;
d = c++ // trả về trước giá trị cho d = 10, sau đó mới tăng c -> Output: c = 11, d = 10
```

#### 4. Toán tử toán học

> Tương tự như các phép tính cộng, trừ, nhân, chia đã được học : +, -, *, /

### Control Flow

#### 1. Câu điều kiện với **if**

Cú pháp:

```js
if <điều kiện > {
// code..
}
```

***Example***

```js
let hour = 8;
if (hour <= 11) {
    console.log("Good morning")
}
```

#### 2. Câu điều kiện với **if...else**

Cú pháp:

```js
if (condition) {

} else {

}
```

### Vòng lặp với **for (i)**

Cú pháp:

```js
For (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
  //code
}

// Điều kiện khởi taọ: chạy 1 lần duy nhất, khi vòng lặp bắt đầu.
// Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
// Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.
```

***Example***

```js
for (let i = 0; i < 5; i++) {
  console.log("Xin chào!")
}
```

## Format code

| Chức năng | Shortcut |
| ------------ | ---------- |
| Format code | `Option + Shift + F` |  

---
