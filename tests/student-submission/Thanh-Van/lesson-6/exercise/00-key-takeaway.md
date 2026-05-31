# LESSON 6: Git, Javascript advance
## 1. Git
### Git: remote
- **remote (hay repository)** là danh sách các repository được lưu trữ ở máy chủ từ xa (remote server), cho phép bạn cộng tác với người khác
- Mỗi remote được định dạng bằng một tên gắn gọn và liên kết đến một URL: `git remote add <tên ngắn gọn> <URL>`
### Git: clone
- **clone** là hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân.
- Câu lệnh clone: `git clone <link repo>`
- Có thể đặt lại tên cho thư mục clone: `git clone <link repo> <tên mới>`
- Clone bằng https thì mỗi lần push/pull code lại phải nhập lại mật khẩu nên clone bằng ssh tiện hơn
### Git: push
- **push** = đưa code từ vùng repository lên server: `git push <remote_name> <branch_name>`
### Git: pull
- **pull** là hành động lấy code từ một nhánh cụ thể về nhánh local: `git pull <remote_name> <branch_name>`
### Git: stashing
- **stash** là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm `git stash` hoặc `git stash save`
- **stash** giúp ta có thể chuyển đổi qua một nhánh khác dễ dàng hơn
- Để lấy code lại ta dùng lệnh: `git stash pop`
- Để lưu file mới tinhL `git stash -u`
- Để lấy code theo từng stash ta dùng lệnh: `git stash pop <tên stash>`
- Để xem list stash: `git stash list`
_ Để đặt tên stash: `git stash save <tên stash>`
### Git: merge request
- Merge request = gộp code từ 1 nhánh sang nhánh còn lại
### Git: convention
- Tạo nhánh:
    - Thêm test case cho payment
    - Thêm dòng trống
- Convention = bộ quy tắc
- Convention giúp:
    - Gọn gàng, đồng bộ
    - Dễ đoán được ý đồ PR/commit
- Convention:
    - Đặt tên branch
        - feat/checkout
        - fix/fill-info
        - feat/lesson-6-long
    - Viết commit message
- `<type>/<short-description>-<name>`
- type:
    - feat: tính năng mới
    - fix: sửa lỗi
    - conf: thay đổi cấu hình (config)
    - chore: các thay đổi "lặt vặt": xóa file không dùng, đổi tên file,...
- short-description: mục đích của branch được tạo ra
## 2. Javascript
### Javascript: Class
-  **Class** dùng để khai báo kiểu dữ liệu. Là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng thuộc class đó sẽ có
```javaScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

```
- Tại sao cần class: Tái sử dụng code, tăng tính linh hoạt
- Phương thức (method):
    - Là các hàm được gắn với class
    - Thường để **thực hiện các hành động** liên quan đến đối tượng (class) đó