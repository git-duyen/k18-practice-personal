# Các câu lệnh git để quay về các vùng
Staging -> Working Directory: git restore --staged<file_name>
git restore .
Repository -> Working Directory: git reset HEAD ~<số commit>
1. Tạo thư mục mới
2. Tạo commit 
3. Tạo fle đưa vào vùng staging
    - Dùng lệnh *git status* để kiểm tra trạng hái 
    - Dùng lệnh *git restore --staged<tên file>* để đưa về vùng Working Directory 
    - Dùng lệnh *git status* để kiểm tra trạng thái các file đã nằm đúng vùng mong muốn chưa_
4. Commit file mới 
    - Dùng lệnh *git restore --staged<file_name>* để đưa về dùng Working Directory
    - Dùng lệnh *git status* dể check trạng thái file
# Git branching
Dùng lệnh: git brach <tên nhánh>
Chuyển sang nhánh mới dùng lệnh: git checkout <tên nhánh>
Vừa tạo ánh vừa chuyển sang nhánh mới dùng lệnh: git checkout -b<tên nhánh>
Xóa nhánh: git branch -D <tên nhánh> 
*Note: Phả đam bảo đang đứng ở nhánh khác nhánh cần xóa*
## Lưu ý: Luôn pull code mới trước khi tạo nhánh mới
# Git ignore file
File .gitignore là file cấu hình quan trọng trong git, giúp bạn chỉ định những file và thư mục nào sẽ không được theo dõi (untracked) bởi git
Tại sao cần git ignore file?
Trong dự án có những file không cần thiết đưa vào git repository
Cú pháp: 
#comment - dòng bắt đầu bằng dấu thăng là ghi chú
#Ignore file cụ thể
#Ignore tất cả các file có extension.log
*.log
#Ignore thư mục
# Convention 
Có nhiều loại convention 
- Đặt tên fie
- Đặt tên biên 
- Đặt tên commit
Một số convention phổ biến
snake_case: tạm thời không sử dụng 
kebad-case: đăt tên file và folder 
camelCase: Đặt ten biến, hàm 
Pascalcase: Đặt tên class
UPPER_CASE
# Dùng console.log nâng cao 
- Sử dụng nháy đơn, nháy kép 
console.log('Tôi là Chi');
console.log("Tôi là Chi");
- Sử dụng kèm variable
console.log(`Tôi là ${name}`);
- Sử dụng cộng chuỗi
console.log("Tôi là" +name+"");
# Object
- Là mộ trong những kiểu dữ liệu quan trọng nhất trong JavaScript , dùng để lưu trữ dữ liệu dạng key-value
- Cú pháp: 
+ <key>: giống quy tắc đặt tên biến
Key luôn có kieur String, đặt trong ngoặc đơn hoặc kép
+ <value>: có kiểu giống biển hoặc là 1 object khác
Có thể là String, Number, Boolean hoặc là một object khác
## Truy xuất giá trị một object: 
- Sử dụng dấu chấm: nếu key không chứa dấu cách hoặc ký tự đặc biệt
- Sử dụng dấu ngoặc vuông: nếu key chứa dấu cách hoặc ký tự đặc biệt
# Array 
- Khai báo
- Sử dụng
- Truy xuất mảng 
# Funtion 
- Là một đoạn code đặt tên tái sử dụng, thực hiện một nhiệm vụ và một tính toán cụ thể 
- Khai báo: funtion <name_fution>() {
    //code
}
# Git Amend
git commit --amend: sửa đổi commit gần nhất, thêm/bớt file hoặc cả hai, thay vì tạo commit mới, viet lại commit cuối
- Sửa commit message: 
git commit --amend -m"<Message>" or chỉ chạy git commit --amend để mở editor và sửa
- Thêm file quên stage
git add <tên_file> 
git commit --amend --no-edit
- Vừa commit vừa thay đổi message
git add <tên_file>
git commit --ament -m"<Message>"
- Bỏ file khỏi commit cuối
git rese HEAD~ -- file_to_remove.py
git commit --amend --no-edit
