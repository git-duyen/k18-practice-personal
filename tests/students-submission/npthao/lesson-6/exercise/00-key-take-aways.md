# Git
- Remote (Remote repository): danh sách các repo được lưu trữ ở máy chủ từ xa(remote server)
 Mỗi remote được định danh bằng 1 tên ngắn gọn và liên kết đến 1 url

 ## Git: Clone
 - Lấy code từ 1 repo có sẵn về máy cá nhân

 git clone <link repo>

 git clone <link repo> <tên mới> : đặt lại tên cho thư mục clone

## Git: Push
- Đưa code từ vùng repository ở local của một nhánh cụ thể lên trên remote

git push <remote_name> <branch_name>

## Git: Pull
- Lấy code từ một nhánh cụ thể về nhánh local

git pull <remote_name> <branch_name>

Merge: Pull từ một nhánh khác nhánh hiện tại về nhánh local

## Git: Stashing
- Lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm
- Stash giúp chuyển đổi qua một nhánh khác dễ dàng hơn

git stash save

- Để lấy công việc lại, dùng lệnh:

git stash pop

## Git: Merge Request
- Gộp code từ một nhánh sang nhánh còn lại

## Git: Reviewer
- Reviewer: người review code

# Git - Convention

<type>/<short-description>-<name>

type:
- feat: tính năng mới
- fix: sửa lỗi
- conf: thay đổi cấu hình (config)
- chore: thay đổi nhỏ

short description: mục đích của branch được tạo ra

# Javascript - Class

class TenClass {
    //Nội dung class
}

- Hàm tạo (Constructor) trong Class

class Student {
    // Constructor - hàm khởi tạo
    constructor(name, grade){
        this.name = name; //Thuộc tính name
        this.grade = grade; //Thuộc tính grade
    }
}

// Tạo object mới - constructor tự chạy
let student1 = new Student("Thành", 8);
console.log(student1.name); //Thành
console.log(student1.grade); //8

- Thuộc tính (Properties) trong Class : biến lưu trữ dữ liệu của object

class TestCase {
    constructor(id, title, priority){
        //Thuộc tính instance (mỗi object có giá trị riêng)
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.status = "Not Run"; // Giá trị mặc định
    }
}

let tc1 = new TestCase(1, "Login test" , "High");
let tc2 = new TestCase(2, "Logout test" , "Medium");

console.log(tc1.title); //Login test
console.log(tc2.title); //Logout test
console.log(tc1.status); //Not Run

- Phương thức (methods) trong class

class TestCase {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.status = "Not Run";
  }

  // Phương thức instance
  execute() {
    this.status = "Running";
    console.log(`Đang chạy test: ${this.title}`);
  }

  pass() {
    this.status = "Passed";
    console.log(`✓ ${this.title} - PASSED`);
  }

  fail(reason) {
    this.status = "Failed";
    console.log(`✗ ${this.title} - FAILED: ${reason}`);
  }

  getInfo() {
    return `Test #${this.id}: ${this.title} [${this.status}]`;
  }
}

// Sử dụng
let test1 = new TestCase(1, "Kiểm tra đăng nhập");

test1.execute();          // Đang chạy test: Kiểm tra đăng nhập
test1.pass();              // ✓ Kiểm tra đăng nhập - PASSED
console.log(test1.getInfo()); // Test #1: Kiểm tra đăng nhập [Passed]