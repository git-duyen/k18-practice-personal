# Lesson 2: Git & JavaScript basic
## I. Version control system
Hệ thống quản lý phiên bản <br>
Xem lịch sử thay đổi, thay đổi gì, ai thay đổi <br>
Quay trở lại bản thay đổi trước đó <br>
#### Type
- Local: Lưu ở máy cá nhân
- Central lize: Lưu ở một máy chủ tập trung
- Distributed: Lưu ở nhiều máy khác nhau
## II. Git
#### Phân biệt Git & Git Hub

| Git | Git Hub |
|-----|---------|
| Là một phần mềm | Là một dịch vụ web |
| Cài trên máy cá nhân | Host trên website |
| Là một command line tool | Là công cụ có giao diện |
| Là công cụ quản lý phiên bản đưa file vào Git Repository | Là nơi để upload Git Repository lên |
| Có các tính năng của Version control System | Có các tính năng của Version Control ( GitHub Actions, GitHub Co-pilot) |

#### Git: Rất rộng, nhiều tính năng, ở khoá này sẽ tập trung
- Hiểu bản chất
- Hiểu cách undo
- Hiểu cách làm việc trên nhiều máy
- Hiểu cách làm việc với nhiều ngươi và nhiều máy khác nhau
- Hiểu các xử lý lỗi, làm đẹp commit

### 1. Three States
| Working Directory | Staging Area | Repository |
|-------------------|-------------|------------|
| Các file mới hoặc file có thay đổi | Các file được đưa vào vùng chuẩn bị commit (tạo ra các phiên bản) | Các Commit (Các phiên bản)|

#### Tổng kết
| Làm một lần duy nhất | Làm mỗi khi thay đổi |
|----------------------|----------------------|
| Khởi tạo repo local <br>`git init`| Thêm file vào stagin <br> `git add` |
| Tạo repo GitHub và liên kết với repo local <br> `git remote add origin <url>`| Commit file <br> `git commit -m"<message>"`|
|                      | Push code <br> `git push origin main`|

### 2. Cấu hình
Để commit được, ta cần 'nói cho git biết mình là ai'<br>
#### Lệnh để mặc định cho toàn bộ repo trên máy
`git config --global user.name"tên"` <br>
`git config --global user.email"email"` <br>
#### Lệnh để cài cho từng repo (từng loại terminal của repo đó)
`git config user.name"tên"` <br>
`git config user.email"email"` <br>
**Lưu ý:** khởi tạo git trước khi config

### 3. Một số câu lệnh
#### a. Xem trạng thái file: `git status`
- File màu xanh: Vùng staging
- File màu đỏ: Vùng working directory
#### b. Danh sách commit: `git log`
Nhấn **q** để dừng câu lệnh

### 4. Commit conventrion
- Giúp cả team làm việc với nhau theo một quy tắc
- Code gọn gàn sách đẹp hơn
- Chuyên nghiệp hơn

```
 <type>:<short_description>  

type:
- chore: sủa nhỏ lẻ, chính tả, xoá file không dùng tới
- feat: thêm tính năng mới, testcase mới
- fix: sữa lỗi một test trước đó

short_description: Mô tả ngắn dọn (50 ký tự)
```

### 5. Simple workflow
**Không dùng global config**
```
init > config > add > commit > push
```
**Dùng global config**
```
init >        > add > commit > push
```

## II. JavaScript Basic
- Là một ngôn ngữ lập trình (1995)
- Giúp cho browser hoạt động được
- JavaScript chạy được do Browser engine support
    + `console.log("Hello, World")`
    + `console.log('Hello, World')`
### 1. Comment
Comment là cách _'vô hiệu hoá'_ tạm thời một đoạn code <br>
Dòng code được comment sẽ bị bỏ qua, không được thự hiện

**Cách 1:** Thêm `//` vào trước đoạn code, sau đoạn code hoặc giữa đoạn code

**Cách 2:** Bắt đầu bằng `/*` và kết thúc bằng `*/`

### 2. Biến
Biến là khái niệm cơ bản nhất trong lập trình <br>
Từ biến trong _'biến thiên'_ -> thay đổi được

**Khai báo biến**
```
<từ khoá><tên biến> = <giá trị>

Từ khoá: var hoặc let
- var centerName = 'Better Bytes Academy'
- let isLovePlaywrigh = true
```

**Sự khác nhau giữa var và let**

|Các điểm khác|var|let|
|-------------|---|---|
|Phạm vi hoạt động <br> (Scope)|Có phạm vi toàn cục (global scope) hoặc phạm vi hàm (function scope). Nó không bị giới hạn bởi các cặp ngoặc nhọn {} (như if, for).|Có phạm vi khối (block scope). Nó chỉ tồn tại trong cặp ngoặc nhọn {} nơi nó được khai báo.|
|Khai báo lại <br> (Re-declaration)|Cho phép khai báo lại cùng một tên biến nhiều lần trong cùng một phạm vi mà không gây ra lỗi.|Không cho phép khai báo lại cùng một biến trong cùng một phạm vi. Trình biên dịch sẽ báo lỗi|
|Gán lại giá trị| Được phép | Được phép|
|Nâng biến <br> (Hoisting)| Được "kéo" lên đầu phạm vi và tự động khởi tạo giá trị là undefined trước khi thực thi mã.|  Cũng được kéo lên đầu phạm vi nhưng không được khởi tạo giá trị. Nếu cố tình truy cập trước khi khai báo, bạn sẽ gặp lỗi ReferenceError (vùng này gọi là _Temporal Dead Zone_ - Vùng chết tạm thời)

### 3. Hằng
Hằng là giá trị không thay đổi được _'Hằng số'_ <br>
Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng một lần <br>

```
<từ khoá><tên biến> = <giá trị>

Từ khoá: const
const slogan = " Học kỹ - Hiểu bản chất "
```
**Lưu ý: Khi nào dùng biến khi nào dùng hằn**

Mặc định dùng `const` giups code an toàn hơn, dễ đọc hơn <br>
Chỉ dùng `let` khi chắc chắn cần gán giá trị <br>
Không dùng `var` <br>

### 4. Kiểu dữ liệu

Mỗi biến / hằng liên có kiểu dữ liệu <br>
Kiểu dữ liệu là loại dữ liệu mà biến nó đang mang <br>
Có 8 kiểu phân thành 2 nhóm chính <br>

**Kiểu nguyên thuỷ**
- Number
- String
- Boolean
- Underfiled
- Null
- Symbol
- BigInt

**Kiểu tham chiếu (Reference types)**
- Object

**Lưu ý:** Sử dụng hàm `typeof <variable>` để xem khai báo biến

### 5. Toán tử so sánh
- So sánh bằng `==` `===`
- So sánh không bằng `!==`
- So sánh lớn hơn, nhỏ hơn `>`; `<`; `>=`; `<=`

**So sánh hai bằng (loose equality)** `==` <br>
So sánh giá trị sau khi chuyển đổi kiểu (type coercion) <br>
**So sánh ba bằng (Stric equality)** `===` <br>
So sánh giá trị và kiểu dữ liệu không được chuyển đổi

### 6. Toán tử Logic
Toán tử logic dùng để kết hợp nhiều điều kiện và trả về [boolean]
- `&&` **AND:** Trả về nếu 2 vế của mệnh đề đúng
- `||` **OR:** Trả về nếu 1 trong 2 vế của mệnh đề đúng

### 7. Toán tử một ngôi
Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện <br>
`let x = 5;` <br>
`x++;` `++x;` `x--;` `--x`
#### Các loại toán tử một ngôi
**Prefix:** Toán tử nằm ở phía trước; tăng trước, trả về sau <br>
`++x` <br>
`--x` <br>
**Postfix:** Toán tử nằm ở phía sau; trả về trước, tăng sau <br>
`x++` <br>
`x--` <br>

### 8. Toán tử toán học
` + - * /` 
```
const a = 5;
const b = 10;
const c = a + b;
=> c = 15
```
**Lưu ý** Khi chia cho 0, kết quả là infinity

### 9. Toán tử điều kiện
Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy <br>
Nếu điều kiện đúng thì mới chạy <br>
#### Các Loại
- if
- if...else
- if...else if... else
- switch...case

**Cú pháp**
```
if(<điều kiện>){//code}
```
### 10. Vòng lặp
Vòng lặp dùng để lặp lại một đonaj logic <br>
Có thể lặp lại một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dùng
#### Các loại vòng lặp
- for (i)
- for (of)
- for (each)
- for (in)
- while
- do...while

**Cú pháp**
```
for(<điều kiện khởi tạo>;<điều kiện lặp>;<cập nhật>){//code}
Trong đó
điều kiện khởi tạo: Chạy một lần duy nhất khi vòng lặp bắt đầu
điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng
cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm
```
**Ví dụ**
```
for(let i = 0; i < 5; i++){
        console.log("xin chào")
}
```
Vòng 1 <br>
- Khởi tạo i = 0
- kiểm tra i < 5 => đúng => chạy
- Chạy logic
- Cập nhật i++ => i = 1

Vòng 2 (i = 1)
- kiểm tra i < 5 => đúng => chạy
- Chạy logic
- Cập nhật i++ => i = 2

### 11. Toán tử chia dư `%`
`%` sẽ trả về phần dư của phép tính <br>
**Ví dụ**
- 3 % 3 = 0 ( 3 chia hết cho 3 dư 0 )
- 3 % 2 = 1 ( 3 không chia hết cho 2 dư 1 )
- 3 % 1 = 0 ( 3 chia hết cho 1 dư 0 )
- 1 % 2 = 1 ( 1 không chia hết cho 2 dư 1 )
- 100 % 80 = 20 ( 100 không chia hết cho 80, dư 20 )

**Ứng dụng tìm số chẵn lẻ**

Nếu là số lẻ, chia dư cho 2 = 1: `x % 2 === 1` <br>
Nếu là số chẳn, chia dư cho 2 =: `x % 2 === 0` 

### 12. In kết hợp giá trị chuỗi và biến
Để in kết hợp ta có 2 cách như sau
- `console.log("Dùng dấu cộng như sau:" + name)`
- `console.log("Dùng dấu phẩy như sau:" , name)`

Để nối chuỗi từ 2 biến ta dùng `+`
```
const str1 = "Hello";
const str2 = "Playwrigh Viet Nam"

console.log(str1 + str2); 
// HelloPlaywrigh Viet Nam
```

