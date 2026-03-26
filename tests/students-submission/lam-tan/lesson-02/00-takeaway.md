# Tổng hợp kiến thức dã học

## Buổi 2

### 1. Version control system (hệ thống quản lý phiên bản)

Quản lý phiên bản giúp dễ dàng :

- Xem lịch sử thay đổi (thời gian thay đổi, thay đổi nào, ai thay đổi)
- Quay trở về bản thay đổi trước đó

Có 3 loại hệ thống quản lý phiên bản :

1. Local: lưu ở máy cá nhân
2. Centralize: lưu ở máy chủ tập trung
3. Distributed: lưu ở nhiều máy khác nhau (\*)

### 2. Git & GitHub

|                            Git                            |          GitHub          |
| :-------------------------------------------------------: | :----------------------: |
|               Là phần mềm command line tool               |      Là dịch vụ web      |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi upload repository |

**Git - Three states**

|Working Directory|Staging Area|Repository|
|---|---|---|
|File mới hoặc file có thay đổi|File đưa vào chuẩn bị commit|Các commit (phiên bản)|

**Git Status**

1. Tạo Working Directory

   > git init

2. Working Directory -> Staging Area

   > git add [tên file] | git add . (thêm tất cả các file)

3. Staging Area -> Repository
   > git commit -m "[commit]"

**Git Cấu hình**

1. username và email cho toàn bộ repo trên máy tính

> git config --global user.name "name"

> git config --global user.email "email"

1. username và email cho từng repo (đứng tại terminal của repo đó)

> git config user.name "name"

> git config user.email "email"

**Git commit convention**

```markdown
<Type>: <Short_decription>

trong đó:

Type: loại commit

- chore: sửa nhỏ lẻ, chính tả, xoá file không dùng tới,...
- feat: thêm tính năng mới, thêm testcase mới.
- fix: sửa 1 lỗi test trước đó.

Short_decription: mô tả ngắn gọn (50 ký tự), tiếng anh hoặc tiếng việt không dấu
```

**Một vài lệnh Git cơ bản**

Kiểm tra trạng thái file

> git status

- màu xanh: vùng stagging
- màu đỏ: vùng working directory

Xem lịch sử commit

> git log

Kết nối với github repository

> git remote add origin [link_repository]

Đẩy code lên github

> git push origin main

Cập nhật code từ github

> git pull origin main

Lấy repository về máy

> git clone [link_repository]

### 3. Javascript Basic

**Cú pháp chạy file JS: node [đường dẫn file]**

1. Hello world

```markdown
console.log("Hello World");
```

2. Comment

```markdown
// đoạn code
/*
đoạn code
*/
```

3. Biến & Hằng

- Biến:

```markdown
<từ khoá> <tên biến> = <giá trị>

từ khoá: var/let
var: ra đời trước, cú pháp cũ, ít dùng
let: ra đời sau, hiện đại an toàn hơn

var cho phép khai báo lại, let thì không
var có phạm vi global, let thì theo block
```

- Hằng:

```markdown
giá trị không thay đổi được
<từ khoá> <tên hằng> = <giá trị>

từ khoá: const
mặc định dùng cost, giúp code an toàn dễ đọc hơn
```

4. Data Type

Primitive Type:

- Number: 1, 2.5 , infi, NaN
- String: 'Text'
- Boolean: True / False
- Undifined
- Null
- Symbol
- BigInt

Reference Type:

- Object

```markdown
Kiểm tra kiểu dữ liệu:
typeof <variable>

output: number || string || boolean
```

5. Toán tử so sánh

So sánh 2 toán hạng trả về dạng boolean

Chia làm 3 nhóm:

- So sánh bằng

> == (so sánh sau khi đổi kiểu)

> === (so sánh giá trị và kiểu dữ liệu - không đổi kiểu) (*)

- So sánh không bằng

> !

- So sánh lớn hơn, nhỏ hơn

> a > b

> a < b

> a <= b

> a >= b

6. Toán tử Logic

> && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng

> || (OR): trả về đúng nếu 1 trong 2 vế của mệnh đề đúng

7. Toán tử một ngôi

Là toán từ chỉ cần một toán hạng để thực hiện

- Prelix: toán tử nằm ở phía trước -tăng trước, trả về sau
``` markdown
++x;
--x;  
a = 10
b = ++a => b = 11
tăng a lên 11 rổi trả về b
```

- Postfix: toán từ nằm ở phía sau -trả về trước, tăng sau
```markdown
x++;
x--;
a = 10
b = a++ => b = 10
trả về giá trị 10 cho b rồi mới tăng
```
8. Toán từ học

Các phép tính: +, -, *, / 

Lấy phần dư của phép tính: %  (vd: 3%2 === 1)

9. Câu điều kiện

Kiểm tra một đoạn logic trước khi chạy, nếu điều kiện đúng thì chạy

```markdown
if
if...else
if...else if...else
switch...case
```
10. Vòng lặp

Dùng để lặp lại 1 đoạn logic, có thể lặp một số lần nhất định, hoặc vô hạn lần tuỳ theo điều kiện dừng

>for(i)
```
   for(<khởi tạo>; <kiểm tra>; <cập nhật>){
      //code
   }
```
>for(of)

>for(each)

>for(in)

>while

>do...while


