# 1. Git: remote, push, pull, stashing
## 1.1 Remote 
- Remote (hay remote repository) là danh sách các repository được lưu trữ ở máy chủ từ xa (remote server), cho phép bạn cộng tác với người khác.
-  Mỗi remote được định danh bằng một tên ngắn gọn và liên kết đến một URL
- VD:
git remote add origin git@github.com:bba/k18-practice.git
- Nghĩa là:
  + Tên ngắn gọn: origin
  +  URL: git@github.com:bba/k18-practice.git

## 1.2 Git: clone, pull, push
### 1.2.1 Clone 
- Clone là hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân.
- Câu lệnh clone:
git clone <link repo>
- Có thể đặt lại tên cho thư mục clone:
git clone <link repo> <tên mới>
- Ví dụ:
git clone git@github.com:better-bytes-academy/k18-practice.git k18-practice-2

### 1.2.2 Push 
- Push là hành động đưa code từ vùng repository ở local của một nhánh cụ thể lên trên remote
- Câu lệnh push:
git push <remote_name> <branch_name>

- Ví dụ:
git push origin main

### 1.2.3 Pull
- Pull là hành động lấy code từ một nhánh cụ thể về nhánh local.

      git pull <remote_name> <branch_name>

- Ta có thể pull từ một nhánh khác nhánh hiện tại về nhánh local. Lúc này hiện tượng merge xảy ra.
- Ta sẽ học ở các bài sau.

## 1.3 Stashing 
- stash là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm.
git stash save

- Stash giúp ta có thể chuyển đổi qua một nhánh khác dễ dàng hơn.

- Để lấy công việc lại, dùng lệnh:
git stash pop

## 1.5 Git: Merge request, reviewer 
- Merge request = gộp code từ 1 nhánh sang nhánh còn lại
- Reviewer = người review code
  + Một lần review = một lần học từ người khác. 
  + Đẩy code lên sớm thì sẽ được review kĩ.

## 1.6 Git: Convention 
- Convention = bộ quy tắc
- Convention giúp:
  + Gọn gàng, đồng bộ 
  + Dễ đoán được ý đồ của PR/commit
- Convention: 
   + Đặt tên branch
   + Viết commit message
   
```
  - <type>: <short-description>
  - type:feat: tính năng mới
  - fix: sửa lỗiconf: thay đổi cấu hình (config)chore: các thay đổi "lặt vặt": Xóa file không dùng, đổi tên file,... 
  - short-description: Mục đích của commit
```

# 2. Javascript : Class
  ## 2.1 Class là gì 
  - Class là một "bản thiết kế" (blueprint) để tạo ra các object có cùng đặc điểm và hành vi. Hãy tưởng tượng:
     + Class giống như bản vẽ thiết kế một chiếc xe hơi
     + Object (đối tượng) là chiếc xe thực tế được sản xuất từ bản vẽ đó

## 2.2 Tại sao cần dùng Class
Class là một "bản thiết kế" (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.
Hãy tưởng tượng:
- Class giống như bản vẽ thiết kế một chiếc xe hơi
- Object (đối tượng) là chiếc xe thực tế được sản xuất từ bản vẽ đó

## 2.3 Lợi ích 
- Code ngắn gọn, không lặp lại
- Dễ bảo trì và mở rộng
- Tổ chức code rõ ràng hơn

## 2.4 Khai báo class

class TenClass {
    // Nội dung class ở đây
}

VD:
class TestCase {
    // Class để quản lý test case
}

class Product {
    // Class để quản lý sản phẩm
}

## 2.5  Class: Hàm tạo (Constructor) trong Class
```
class Student {
    // Constructor - hàm khởi tạo
    constructor(name, grade) {
        this.name = name;   // Thuộc tính name
        this.grade = grade; // Thuộc tính grade
    }
}

// Tạo object mới - constructor tự chạy
let student1 = new Student("Hùng", 8.5);
console.log(student1.name);  // "Hùng"
console.log(student1.grade); // 8.5
```
## 2.6 Class: Thuộc tính (Properties) trong Class
- Thuộc tính là các biến lưu trữ dữ liệu của object.
```
class TestCase {
    constructor(id, title, priority) {
        // Thuộc tính instance (mỗi object có giá trị riêng)
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.status = "Not Run"; // Giá trị mặc định
    }
}

let tc1 = new TestCase(1, "Login test", "High");
let tc2 = new TestCase(2, "Logout test", "Medium");

console.log(tc1.title);  // "Login test"
console.log(tc2.title);  // "Logout test"
console.log(tc1.status); // "Not Run"
```

## 2.7 Class: Phương thức (Methods) trong Class
-  Phương thức là các hàm định nghĩa hành vi của object.
```
class TestCase {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.status = "Chưa chạy";
    }

    // Phương thức (methods)
    execute() {
        this.status = "Running";
        console.log(`Đang chạy test: ${this.title}`);
    }

    pass() {
        this.status = "Passed";
        console.log(`✓ [${this.title}] - PASSED`);
    }

    fail(reason) {
        this.status = "Failed";
        console.log(`✗ [${this.title}] - FAILED: ${reason}`);
    }

    getInfo() {
        return `Test ID:[${this.id}] | [${this.title}] | Status:[${this.status}]`;
    }
}

// Sử dụng
let test1 = new TestCase(1, "Kiểm tra đăng nhập");

test1.execute(); // "Đang chạy test: Kiểm tra đăng nhập"
test1.pass();    // "✓ [Kiểm tra đăng nhập] - PASSED"
console.log(test1.getInfo()); // "Test ID:[1] | [Kiểm tra đăng nhập] | Status:[Passed]"
```
## 2.8 Class: Tóm Tắt
Class giúp bạn:
- Tạo nhiều object cùng kiểu dễ dàng
- Tổ chức code gọn gàng, rõ ràng
- Tái sử dụng code hiệu quả

Các thành phần chính:
- Constructor: Khởi tạo object
- Thuộc tính: Lưu trữ dữ liệu (this.property)- Phương thức: Định nghĩa hành vi (functions)