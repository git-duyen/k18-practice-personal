# Git & Javascript (advance)

## Git

### remote
`git remote add personal git@github.com:...........`
Trong đó
* tên ngắn gọn: personal
* url: git@github.com:...........

### Clone
Là 1 hành động lấy code từ 1 repo có sẵn về mảy tính cá nhân
Lệnh clone

`git clone <link_repo>`

Đặt lại tên thư mục clone

`git clone <link_repo> <tên mới>`

**Nên clone băng ssh**, vì khi clone bằng HTTPS, mỗi lần pull/push code phải nhập lại mật khẩu

### push
Push = đưa code từ **vùng repository** lên server

lệnh push

`git push <remote_name> <branch_name>`

VD: `git push origin main`

### pull

`git pull <remote_name> <branch_name>`

### Stashing
stash là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) và 1 vùng nhớ tạm

`git stash`

Lưu stash và đặt tên

`git stash save "ten stash"`

Lưu lại các file (bao gồm đã chỉnh sửa và file mới tạo)

`git stash -u`

Xem những bản lưu của stash `git stash list`

Để lấy lại công việc, dùng lệnh:

`git stash pop`

## Javascript: Class
Class 
* Dùng để khai báo kiểu dữ liệu
* Là 1 khuôn mẫu định nghĩa các **thuộc tính** và **phương thức** mà các đối tượng thuộc class đó sẽ có

VD:

```
//Class Student - PascalCase
Class Student {
    // Thuộc tính / Property
    name;
    role;

    // Hàm khởi tạo / Constructor
    construcotr(name, role) {
        this.name = name;
        this.role = role;
    }

    // Phương thức / Method

};
```