# Bài 2
## Phần 1: Git
- Version control system: quản lý các phiên bản 
- Có 3 loại mô hình quản lý các phiên bản: local, center, distributed (git)
### 1. Phân biệt git và github
- Git: phần mềm trên máy, dạng command line tool quản lý các version code
- Github: 1 dịch vụ web cho upload các repo từ máy tính lên
### 2. Git - có 3 states
- Working directory: các file mới hoặc file có thay đổi
- Staging area: file đưa vào cùng chuẩn bị commit
- Respository: các commit (phiên bản)

*Lưu ý*: 
- *Lệnh chưa --global sẽ áp dụng cho toàn bộ các repo trên máy. Trường hợp sử dụng repo cụ thể thì bỏ --global*
- *Các commit sau hiển thị lên trên cùng*
### 3. Các lệnh trong git
- git init: khởi tạo repo local
- git remote add origin (url): tạo repo github và liên kết với repo local
- git add .: thêm tất cả các file vào cùng staging area
- git commit -m"message": commit file lên respository
- git push origin main: push code

#### Ngoài ra:
- git status: trạng thái của file
   - Màu xanh: vùng staging
   - Màu đỏ: vùng working directory
- git log: kiểm tra danh sách commit
### 4. Git commit convention
type: short_description
- type: loại commit
   - chore: sửa nhỏ lẻ, chính tả, xoá file không dùng,...
   - feat: thêm tính năng mới, testcase mới
   - fix: sửa lỗi 1 test trước đó
- short_description: mô tả ngắn gọn 50 ký tự.

## Phần 2: Javascript
### 1. Biến và hằng
- Biến: thay đổi được
   - Khai báo biến: <từ khoá> <tên biến> = <giá trị> (Ví dụ: let a = 5;)
   - Sử dụng let an toàn hơn var
- Hằng số: không thay đổi được
   - Khai báo hằng số: <từ khoá> <tên hằng số> = <giá trị> (Ví dụ: const a = 5)
### 2. Kiểu dữ liệu
Kiểu nguyên thuỷ:
- Number: Số nguyên và số thực (không phân biệt int/float)
- String: Chuỗi ký tự
- Boolean: Giá trị logic

Kiểu tham chiếu
- Object
### 3. Toán tử so sánh
- So sánh bằng: == và ===
- So sánh không bằng: != và !==
- So sánh lớn hơn, nhỏ hơn: >, >=, <, <=

### 4. Toán tử logic
- && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
- || (OR): trả về đúng nếu 1 trong 2 vế của mệnh đề đúng

### 5. Toán tử một ngôi
- Là toán tử chỉ cần 1 toán hạng để thực hiện
VD: 
```
Let a = 4;
a++;
++a;
a--;
--a;
```

- Có 2 loại:
   - Prefix: toán tử nằm ở phía trước: tăng trước, trả về sau
   ```
   let a = 10;
   b = ++a; // tăng a lên 11 rồi trả về => b = 11
   ```
   - Postfix: toán tử nằm ở phía sau: trả về trước, tăng sau
   ```
   let c = 7;
   d = c ++; // trả về giá trị 10 cho d rồi mới tăng
   ```
 ### 6. Toán tử toán học
 +, - , *, /
 
 Lưu ý: khi chia cho 0, kết quả là infinity (vô cực)
 ### 7. Câu điều kiện
  - If
  - If...else
  - If...else if...else
  - Switch...case 

  Cú pháp
  ```
  if (điều kiện){
   // code...
  }
  ```
 ### 8. Vòng lặp
 - for (i)
 - for (of)
 - for (each)
 - for (in) 
 - while
 - do...while

 Cú pháp
 ```
 for (điều kiện khởi tạo; điều kiện lặp, cập nhật){
   //code...
 }
 ```
 Trong đó:
 - Điều kiện khởi tạo: chạy 1 lần duy nhất, khi vòng lặp bắt đầu.
 - Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
 - Cập nhật: Chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.

 **Format code**: 
 Window: Alt + shift + F