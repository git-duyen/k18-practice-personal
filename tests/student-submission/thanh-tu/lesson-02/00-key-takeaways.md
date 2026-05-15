# Key takeaways
## Version Control System (VCS)
Hệ thống quản lý phiên bản
* Xem lịch sử thay đổi
* Quay trở về **bản thay đổi trước đó**

Các loại VCS:
* **Local:** lưu ở máy cá nhân
* **Centralize:** lưu ở một máy chủ tập trung
* **Distributed:** lưu ở nhiều máy khác nhau

So sánh tổng quan
| Tiêu chí    | Local |Centralize|Distributed|
| ------------|-------------|---------------|---------------|
| Cộng tác    |không        |Có             |Có             |
| Offline     |Có           |không          |Có             |
| Tốc độ      |Nhanh        |Phụ thuộc mạng |Nhanh          |
| Backup      |Không tự động|Có(trên server)|Có(mọi clone)  |
| Độ phức tạp |Thấp         |Trung bình     |Cao            |

## Git

### Git & GitHub
|Git|Github|
|-|-|
|Là 1 phần mềm|Là 1 dịch vụ web|
|Cài đặt trên máy|Host trên website|
|Là 1 command line tool (cmd)|là công cụ có giao diện|
|Là một công cụ quản lý phiên bản đưa file vào Git repository|Là nơi để upload Git repository lên|
|Có các tính năng của Version Control System|Có các tính năng của  VCS và một số tính năng khác|

### 3 trạng thái của Git
|Working Directory|Staging Area|Repository|
|-|-|-|
|Các file mới hoặc file có thay đổi|Các file đưa vào vùng chuẩn bị commit|Các commit|

`git init` Khởi tạo repo local (tạo trong thư mục 3 vùng Working Directory, Staging Area, Repository) và thêm các file trong thư mực vào vùng Working Directory

`git remote add origin <url>` Liên kết repo local tới một repo remote đã tồn tại trên Github

`git add <file_name>` thêm file <file_name> vào vùng Staging Area

`git add .` Thêm tất cả các file vào vùng Staging Area

`git commit -m"message"` Tạo commit có tên "message" và vào đưa các file trong vùng Staging Area vào vùng Repository

`git push origin main` push code lên github

### Git - Cấu hình
`git config --global user.name "Tên"` 

`git config --global user.email "email"`

Cài đặt **mặc định** username và email cho toàn bộ các repo trên máy tính

`git config user.name "Tên"` 

`git config user.email "email"`

Cài đặt username và email riêng cho repo (đứng tại terminal repo đó) 

### Git - một số câu lệnh
`git status` xem trạng thái file (xanh: file trong vùng staging, đỏ: file trong vùng working)

`git log` kiểm tra danh sách commit

### Git - Commit Convention

#### Type: loại commit

* **chore:** sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
* **feat:** thêm tính năng mới, test case mới
* **fix:** sửa lỗi 1 test trước đó

## JavaScript Basic

### Hello world

console.log("Hello world");
console.log('Hello world');

### comment
`//` vô hiệu hóa 1 dòng code

```
/*
console.log("Hello world");
console.log('Hello world');
*/
```
vô hiệu hóa 1 khối code

### Biến

#### var/let
* *var* 
    * ra đời trước, cú pháp cũ, ít sử dụng
    * cho phép khai báo lại
    * có phạm vi global
* *let* 
    * ra đời sau, là cú pháp hiện đại và **an toàn** hơn
    * không cho phép khai báo lại
    * có phạm vi theo block

### const
Hằng dùng để khai báo các giá trị **không có nhu cầ thay đổi** hoặc **chỉ dùng 1 lần** 

### Kiểu dữ liệu
Trong JavaScript có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
* Kiểu **nguyên thủy** (primitive types)
    * Number
    * String
    * Boolean
    * Undefined
    * Null
    * Symbol
    * BigInt
* Kiểu **tham chiếu** (reference types)
    * Object

#### Number
* số nguyên
* Số thực
* Infinity
* NaN

#### String
`const name = "John";` dùng nháy kép

`const message = 'Hello';` dùng nháy đơn

```
const age = 18;
const template = `Age: ${age}`;
```
dùng "backtick"

#### Boolean
* true
* false

#### Toán tử so sánh
* so sánh bằng
    * `==` so sánh giá trị **sau khi chuyển đổi kiểu**
    * `===` so sánh **giá trị** và **kiểu dữ liệu** - không **chuyển đổi kiểu**
* so sánh không bằng `!`
* so sánh lớn hơn, nhỏ hơn `>, <, >=, <=`

#### Toán tử 1 ngôi
* Prefix: tăng trước, trả về sau
    * `++x;`
    * `--x;`
* Postfix: trả về trước, tăng sau
    * `x++;`
    * `x--;`

```
let a = 10;
b = ++a;
//tăng a lên 11 rồi trả về => b = 11

let c = 10;
d = c++;
// trả về giá trị cho d = 10 rồi mới tăng
```

#### Câu điều kiện
Trong JavaScript có các loại câu điều kiện:
* if
* if...else
* if ...else if...else
* switch...case

#### vòng lặp for
```
for (<khởi tạo>; <kiểm tra>; <cập nhật>){
    //code
}
```