# Git: Clone, pull, push
- Clone là một hoạt động lấy code về trên máy tính cá nhân 
*git clone <url>* 
Có thể đặt tên cho thư mục clone: 
*git clone <url> <tên mới>* 
URl ở đây có thể là HTTP (repo ở trạng thái public) hoặc SSH (repo ở trạng thái private)
- Push là hành động đưa code từ vùng repository ở local của một nhánh cụ thể lên remote
*git push <remote_name> <branch_name>*
- Pull là hành động lấy code từ một nhash cụ thể về local 
# Git stashing
- stash là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm
*git stash save*
Để lấy công việc lại, dùng lệnh:
*git stash pop*
# Git merge request, reviewer
- Merge request: gộp code từ nhánh 1 sang nhánh còn lại
- Reviewer: người review code 
# Git convention
- Convention: bộ quy tắc
- Convention giúp gọn gàng, đồng bộ, dễ đoán được ý đồ của PR/commit
*<type>/<short-description><name>*
- Các loại: 
+ feat: tính năng mới
+ fix: sửa lỗi
+ conf: tha đổi cấu hình
+ chore: các thay đổi lặt vặt
short-description: mục đích của branch được tạo ra
*<type>: <short-description>*
# Javascript: class
- Class là một bản thiết kế để tạo ra các object có cùng đặc điểm và hành vi
- Lợi ích: 
+ Code ngắn gọn, không lặp lại
+ Dễ bảo trì và mở rộng
+ Tổ chức code rõ ràng hơn
Cấu trúc: 
class TenClass {
    //Nội dung class
}
- Class giúp 
+ Tạo nhiều object cùng kiểu dễ dàng
+ Tổ chức code gọn gàng, rõ ràng
+ Tái sử dụng code hiệu quả
- Các thành phần chính: 
+ Constructor: khởi tạo object
+ Thuộc tính: lưu trữ dữ liệu (this.property)
+ Phương thức: định nghĩa hành vi (functions)
