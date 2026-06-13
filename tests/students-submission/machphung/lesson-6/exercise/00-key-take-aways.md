# **Git: remote**

- **Remote repository** là danh sách các repository được lưu trữ từ máy chủ (remote server), cho phép bạn cộng tác với người khác
  - Mỗi remote được định danh bằng một tên ngắn gọn và liên kết đến một URL
  - VD: git remote add origin git@github.com:bba/k18-practice.git
    - Tên ngắn gọn: origin
    - URL: git@github.com:bba/k18-practice.git

# **Git**

## Clone

- Hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân
- Câu lệnh: git clone <link_repo>
- Có thể đặt lại tên cho thư mục clone: git clone <link_repo> <new_name>
- VD: git clone git@github.com:better-bytes-academy/k18-practice.git k18-practice-2

## Push

- Hành động đưa code từ vùng **repository** ở local của 1 nhánh cụ thể lên trên remote
- Câu lệnh push: **git push <remote_name> <branch_name>**
- VD: git push origin main

## Pull

- Hành động lấy code từ 1 nhánh cụ thể về nhánh local
- **git pull <remote_name> <branch_name>**
- VD: git pull origin main

## Stashing

- Hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào 1 vùng nhớ tạm
- **git stash save**
- Stash giúp có thể chuyển đổi qua một nhánh khác dễ dàng hơn
- Để lấy lại công việc, dùng lệnh: **git stash pop**

## Merge request

- Gộp code từ 1 nhánh sang nhánh còn lại

# **Javascript**

## Class

- Bản thiết kế để tạo ra các Object có cùng đặc điểm và hành vi
- class TenClass {

  // Nội dung class ở đây

}

- VD:
  class TestCase {

  // Class để quản lý test case

}

class Product {

// Class để quản lý sản phẩm

}

- Class giúp:
  - Tạo nhiều object cùng kiểu dễ dàng
  - Tổ chức code gọn gàng, rõ ràng
  - Tái sử dụng code hiệu quả
- Các thành phần chính:
  - Constructor: khởi tạo object
  - Thuộc tính (property): lưu trữ dữ liệu (this.property)
  - Phương thức (method): định nghĩa hành vi (functions)
