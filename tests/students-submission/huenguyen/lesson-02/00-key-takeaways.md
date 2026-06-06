# 1. Version Control System
   Version Control System = Hệ thống quản lý phiên bản 

   Local: Lưu trữ máy cá nhân 

   Centralize: Lưu ở một máy chủ tập trung

   Distributed: Lưu ở nhiều máu khác nhau 

# 2. Git
## 2.1. History 
- Cha đẻ của Git là Linux Tovalds
- Xung đột với BitKeeper
- Viết trong vài tuần 
- DVCS phổ biến nhất trên thế giới

## 2.2 Compare Git & Gỉthub
  ### 2.2.1 Git
  - Là một phần mềm
  - Cài trên máy
  - Là một command line tools
  - Là một công cụ quản lý phiên bản, đưa file vào Git Repository
  - Có các tính năng của VCS

  ### 2.2.2 Github
  - Là một dịch vụ web
  - Host trên website 
  - Là công cụ có giao diện 
  - Là nơi để upload 
  - Có các tính năng của VCS và một số tính năng khác (GitHub action, Git hub Co-pilot)

  ## 2.3. Three Stage

   - Working Directory: Các file mới hoặc file có thay đổi
   - Staging Area: Các file đưa vào vùng cbi commnit (git add .)
   - Repository: Các commit (git commit -m "<message>")

# 3. Javascript Basic 
## 3.1. Javascript là gì
- Là một ngôn ngữ lập trình 
- Giúp cho browser hoạt động được 

## 3.2 Hello world
Cú pháp
- Console.log("Nội dung");
-Console.log ('Nội dung');

## 3.3 Comment 
- Là cách vô hiệu hóa tạm thời 1 đoạn code
- Thêm // vào trước đoạn code muốn comment 
- Thêm */ vào trước dòng đầu tiên và sau dòng cuối cùng để comment nhiều dòng 

## 3.4 Biến, Hằng 
### 3.4.1 Biến 
- Biến là biến thiên, có thể thay đổi được 
 Khai báo biến 
 <từ khóa><tên biến> = <giá trị>;
 
   Từ khóa Var/Let

### 3.4.2 Hằng 
- Hằng là giá trị ko thay đổi được. Hằng là hằng số 
<từ khóa><tên hằng> = <giá trị>;

Kêt luận: 
Mặc định dùng const, chỉ dùng let khi cần gán lại giá trị, ko dùng var

## 3.5 Kiểu dữ liệu 
- Number: Kiểu số nguyên và số thực: 
   25, 19.99,...
- String: Chuỗi kí tự: name= "John" 
- Boolean: Giá trị logic: true/false

## 3.6 Toán tử so sánh 
- Toán tử so sánh sẽ dùng để so sánh 2 toán hạng. Kết quả trả về sẽ ở dạng Boolean
- Chia làm 3 nhóm: 
1. So sánh bằng: == và === (luôn dùng so sánh ===, chỉ sử dụng so sánh == khi muốn so sánh mà không quan tâm kiểu dữ liệu)
2. So sánh không bằng !
3. So sánh lớn hơn, nhỏ hơn: >, <, <=, >=

## 3.7 Toán tử logic 
- && (AND): trả về đúng nếu 2 vế của mệnh đề đúng 
- || (OR): Trả về đúng nếu 1 trong 2 vế của mệnh đề đúng 

## 3.8 Toán tử một ngôi 
- Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện 
 1. Prefix: Toán tử nằm ở phía trước - tăng trước, trả về sau (++a)
 2. Postfix: Toán tử nằm ở phía sau - trả về trước, tăng sau (c++)

 ## 3.9 Toán tử toán học 
    + , - , *, /


## 3.9 Câu điều kiện
  - Câu điều kiện dùng để kiểm tra 1 đoạn logic trước khi chạy. Nếu điều kiện đúng thì mới chạy 
- Cú pháp:

        If (<điều kiện>) {
         // code
        }

## 3.10 Vòng lặp 
- Vòng lặp dùng để lặp lại 1 đoạn logic. Có thể lặp lại 1 số lần nhất định, hoặc vô hạn, tùy theo điều kiện dừng.
- Cú pháp: 

      for(<khởi tạo>;<kiểm tra>; <cập nhật>) {
         //code
      }