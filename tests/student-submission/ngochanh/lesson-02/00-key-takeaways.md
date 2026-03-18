# Các version control system:
+ Local: lưu máy cá nhân
+ Centralize: lưu 1 máy chủ tập trung
+ Distributed: lưu nhiều máy khác nhau

## Git là Distributed VCS


# Git có 3 state:
+ Working directory: lưu file MỚI / CÓ THAY ĐỔI  ~ nháp
+ Staging: vùng chuẩn bị commit
+ Repository: commit
    
# TH: mỗi repo 1 tên/email khác nhau:
## Set lại username, pw riêng trong từng repo (tại terminal repo đó):
        ○ Git config user.name " hanh"
        ○ Git config user.email "test@m.co"
        
## Set up mặc định cho toàn bộ repo trên máy:
        ○ Git config --global user.name "hanh"
        ○ Git config --global user.email "test@ex.co"
        
# Xem trạng thái file: git status:
+ file màu đỏ: working directory (nháp)
+ file màu xanh: staging (chuẩn bị)
    
# Xem danh sách commit: git log

# Git commit convention: <type> <short description>
+ chore: sửa nhỏ, lẻ xóa file không dùng.. --> chore: remove unused file
+ feat: thêm tính năng mới --> feat: add code for ex2
+ fix: sửa lỗi test đã tồn tại --> fix: fix code case 1
    
---------------------------------------
# Syntax: node <đường dẫn/tên file>

// cmt 1 dong
/*
    cmt
    nhieu dong */

# khai báo biến: dataType variableName = value;
- Var: ít sử dụng, cũ, không an toàn VÌ cho phép khai báo lại và phạm vi global
- Let: dùng nhiều, mới, an toàn
- Const: không thay đổi giá trị -> không có nhu cầu thay đổi (số pi) hoặc chỉ dùng 1 lần

==> MẶC ĐỊNH DÙNG CONST - CHỈ DÙNG LET KHI CHẮC CHẮN CÓ ĐỔI GIÁ TRỊ - KHÔNG DÙNG VAR
Để xem biến thuộc kiểu dữ liệu gì (number, string, boolean): 

# == (loose)
So sánh giá trị sau khi chuyển đổi kiểu
5 == “5” → true (chuyển string thành number)
5 == “6” → false (như trên)
True == 1 → true (chuyển true thành 1) 

# === (strict) → NÊN DÙNG
So sánh giá trị và kiểu data - không chuyển đổi kiểu
5 === “5” → false (khác kiểu)
True === 1 → như trên
5 === 5 → true (cùng kiểu, cùng giá trị)

# Pre: tăng trước, gán sau: ++x, --x
# Post: gán trước, tăng sau: x++, x--

# MARKDOWN
- Là ngôn ngữ đánh dấu văn bản bằng cách sử dụng ký tự đơn giản, dễ đọc - học
- Nên học vì:
    + Tạo document cho auto framework
    + Phù hợp cho ghi chú
    + AI đễ đọc
    - Cú pháp:
    
## # cho tiêu dề:
# Tiêu đề cấp 1
## Tiêu đề cấp 2
### Tiêu đề cấp 3
...
    
## Nhấn mạnh
- In đậm chữ: **Chữ in đậm**
- In nghiêng chữ: *Chữ in nghiêng*
- ***Chữ vừa đậm vừa nghiêng***
- ~~Chữ gạch ngang~~
- `Code inline`
```java
code 
block
```
    
## Danh sách không thứ tự: dùng - hoặc * hoặc +
- Item 1
    - Sub-item 1.1
    - Sub-item 1.2
- Item 2

## Danh sách có thứ tự:
1. Bước 1
    1. Bước 1.1
    2. Bước 1.2
1. Bước 2
    
## Link và hình ảnh
- Link: [Text hiển thị](https://.....)
- Hình ảnh từ URL: ![Mô tả hình ảnh](https://.....)
- Hình ảnh từ folder: ![Mô tả hình ảnh](C/)
    
## Quote
- > Quote 1 dòng
- > Quote 
nhiều 
dòng 
>
- >> Nested quote
        
## Đường kẻ: --- hoặc *** hoặc ___
    
## Bảng:
| Cột 1 | Cột 2| Cột 3|
|--------|--------|--------|
|aaa | bbb | ccc |
|AAA | BBB | CCC |

