# Version control system
Local: lưu ở máy cá nhân
Centralize: lưu ở máy chủ tập trung
Distributed: lưu ở nhiều máy khác nhau

# Git: 3 states
Working Directory: file mới / file có update (chưa được git kiểm soát)
Staging Area: file đưa vào vùng chuẩn bị tạo commit 
Repository: Commit

git init: khởi tạo repo local
git remote add origin <url> :  tạo repo Github và liên kết tới repo local
git add . : thêm tất cả file vào staging
git commit -m "msg" : commit file
git push origin main: push code

git status: xem trạng thái file
git log: check danh sách commit

Git work flow: 
init > config > add > commit > push (không dùng global config)
init > add > commit > push (dùng global config)

# Convention
<type> : <short_description>
type: chore(sửa lỗi nhỏ) /feat (thêm tính năng mới) /fix (sửa lỗi có trước đó)
short_description: mô tả ngắn gọn

# Javascript
console.log ("abc")
console.log ('abc')

Chạy lệnh:
node <tên file>
node <đường dẫn tới file>

Comment
// : comment 1 dòng
/* */ : comment nhiều dòng

# Biến: có thể thay đổi
<từ khóa> <tên biến> = <giá trị>
từ khóa = var/let

#Hằng: khai báo các giá trị không có như cầu thay đổi hoặc giá trị chỉ dùng 1 lần
<từ khóa> <tên hằng> = <giá trị>
từ khóa = const

# Kiểu dữ liệu
## Kiểu nguyên thủy: number, string, boolean, undefined, null, symbol, BigInt
Number: số nguyên và số thực
String: chuỗi ký tự
Boolean: Giá trị true/false

## Kiểu tham chiếu: Object

# Toán tử
## Toán tử so sánh: so sánh 2 toán hạng, kêt quả trả về dạng boolean

### So sánh bằng
So sánh hai bằng (==): so sánh giá trị sau khi chuyển đổi kiểu
So sánh ba bằng (===): so sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu


### So sánh không bằng: != và !==

### So sánh lớn hơn, nhỏ hơn

* Note: Khi nào nên so sánh 2 bằng (===) và ba bằng (===) *
Luôn dùng so sánh 3 bằng
Chỉ dùng so sánh 2 bằng khi muốn so sánh mà không quan tâm kiểu dữ liệu


## Toán tử logic: kết hợp nhiều điều kiện và trả về boolean
AND ( && ) : trả về đúng nếu cả 2 về mệnh đề đúng
OR ( || ) : trả về đúng nếu 1 trong 2 vế mệnh đề đúng

## Toán tử một ngôi: chỉ cần 1 toán hạng để thực hiện

let x = 10
x++ : trả về trước, tăng sau
++x : tăng trước, trả về sau
x-- : trả về trước, giảm sau
--x : giảm trước, trả về sau

## Toán tử toán học: phép tính + - * /

# Câu điều kiện
if
if else
if else if
switch case

# Vòng lặp:lặp lại 1 đoạn logic
for (i)
for (of)
for (each)
for (in)
while
do.. while 