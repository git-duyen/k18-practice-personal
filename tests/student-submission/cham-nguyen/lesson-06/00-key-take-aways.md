# 1. Git (continue)
# 1.1 Remote
Remote (hay remote repository) là danh sách các repository được lưu trữ ở máy chủ từ xa (remote server), cho phép bạn cộng tác với người khác
- Mỗi remote được định danh bằng 1 tên ngắn gọn và liên kết đến một url
```
git remote add origin git@github.com:bba/practice.git

//tên ngắn gọn: origin
//url: git@github.com:bba/practice.git
```
# 1.2 Git clone
Clone là hành động lấy code từ 1 repo có sẵn về máy tính cá nhân

```git clone <link_repo>```

Có thể đặt tên lại cho thư mục clone:

```git clone <link_repo> <tên mới>```

**Note**: có thể clone bằng https nhưng mỗi lần push/pull phải nhập mật khẩu rất bất tiện

# 1.3 Git push
Push là hành động đưa code từ vùng repository ở local của một nhánh cụ thể lên trên remote

```
git push <remote_name> <branch_name>

example: git push origin main
```

# 1.4 Git pull
Pull là hành động lấy code từ 1 nhánh cụ thể về nhánh local

```
git pull <remote_name> <branch_name>

example: git pull origin main
```
# 1.5 Git stashing
stash là hành động lưu trữ các thay đổi chưa được commit (cả ở working directory và staging) vào một vùng nhớ tạm. 

```
git stash save
```

Để lấy lại công việc:
```
git stash pop
```

# 1.6 Pull request
Pull request là gộp code từ 1 nhánh sang nhánh còn lại

# 2. Javascript - Class
**Class** là 1 bản thiết kế (blueprint) để tạo ra object có cùng đặc điểm và hành vi

```javascript
//khai báo class
class TenClass {
    //code
}

//ví dụ
class Student {
    constructor(name, grade) {
        this.name = name; //thuộc tính của class
        this.grade = grade; //thuộc tính của class
    }

    sayHello() {
        console.log("Xin chao, toi ten la " + this.name); //phương thức của class
    }
}
//tạo object mới - constructor tự chạy
let student = new Student("cham", 10);
```

