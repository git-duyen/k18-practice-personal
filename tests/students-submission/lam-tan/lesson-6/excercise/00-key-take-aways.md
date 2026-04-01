# Tổng hợp kiến thức dã học

## Buổi 6

### 1. Git Remote

Remote (hay remote repository) là danh sách các repository được lưu trữ ở máy chủ từ xa (remote server), cho phép bạn cộng tác với người khác

- Mỗi remote được định danh bằng một tên ngắn gọn và liên kết đến URL

VD:

```markdown
git remote add origin git@github.com:bba/k18-practice.git
```

### 2. Git clone, pull, push

1. Git clone

   Clone là hành động lấy 1 code từ repo đã có sẵn về máy tính cá nhân.

   _Nên clone bằng SSH: git@github.com/.._

   Lệnh clone:

   ```markdown
   git clone <link repo>
   ```

   Có thể đặt lại tên mới cho thư mục clone:

   ```markdown
   git clone <link repo> <tên mới>
   ```

2. Git push

   Push là hành động đưa code từ vùng repository ở local của một nhánh cụ thể lên remote

   Lệnh push:

   ```markdown
   git push <remote_item> <branch_name>
   vidu: git push origin main
   ```

3. Git pull

   Pull là hành động lấy code từ một nhánh cụ thể về nhánh local

   Lệnh pull:

   ```markdown
   git pull <remote_item> <branch_name>
   vidu: git pull origin main
   ```

   Ta có thể pull từ một nhánh hiện tại về nhánh local. Lúc này hiện tượng merge xảy ra

### 3. Git Stashing

Stash là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm

```markdown
git stash save
git stash save "<stash_name>"
```

Stash giúp ta có thể chuyển đổi qua một nhánh khách dễ dàng hơn.

Để lấy công việc lại, dùng lệnh:

```markdown
git stash pop
```

Để lưu lại những file mới tinh, dùng lệnh:

```markdown
git stash -u
```

Để lấy danh sách stash đã lưu và chuyển stash, dùng lệnh:

```markdown
git stash list
git stash pop stash@{<stt>}
```

### 4. Git Merge & Reviewer

1. Git Merge

   Merge reques = gộp code từ 1 nhánh sang nhánh còn lại

   Chú ý:
   - Tên request
   - Mô tả(viết định dạng markdown, nên liệt kê những thay đổi)

2. Git Reviewer

   Reviewer = người review code

   Một lần review = một lần học từ người khác

   Đẩy code lên sớm thì sẽ được review kĩ

3. Git Convention

   ```markdown
   <type>:<short_description>

   type:

   - feat: tính năng mới
   - fix: sửa lổi
   - conf: thay đổi cấu hình (config)
   - chore: các thay đổi lặt vặt: xoá file không dùng, đổi tên file,...

   short_description: Mục đích của commit
   ```

### 5. Javascript Class

Class là một "bản thiết kế" (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.

Lợi ích:

- Code ngắn gọn, không lặp lại

- Dễ bảo trì và mở rộng

- Tổ chức code dễ dàng hơn

Khai báo class:

```markdown
class tenClass{
//Noi dung class
}
vidu:
class TestCase{
//Class để quản lý test case
}
```

Hàm tạo(Constructor) trong class:

```markdown
class student{
//Constructor: hàm khởi tạo
constructor(name, grade){
this.name = name; //thuộc tính name
this.grade = grade; // thuộc tính grade
}
}

//Tạo object mới - constructor tự chạy
let student = new Student("Hung",8.5);
console.log(student.name); //"Hung"
console.log(student.grade); //8.5
```

Class: Thuộc tính(Properties) trong class:

Thuộc tính là các biến lưu trữ dữ liệu của object.

```markdown
class Testcase{
constructor(id, title, priority){
//thuộc tính instance (mỗi object có giá trị riêng)
this.id = id;
this.title = title;
this.priority = priority;
this.status = "Not Run"; // giá trị mặc định
}
}

let tc1 = new TesCase1(1, "Login Test", "High");
let tc1 = new TesCase2(2, "Logout Test", "Medium");

console.log(tc1.title); // "Login Test"
console.log(tc2.title); // "Logout Test"
console.log(tc1.ttatus); // "Not Run"
```

Class: Phương thức(Methods) trong Class

Phương thức là hàm định nghĩa hành vi của object.

```markdown
class Testcase{
constructor(id, title){
this.id = id;
this.title = title;
this.status = "Not Run";
}
}
//Phương thức instance
excute(){
this.status = "Runing";
console.log(`Đang chạy test: ${this.title} `);
}

pass(){
this.status = "Passed";
console.log(`${this.title} = 'Passed'`)
}

getInfo(){
return `Test #${this.id} : ${this.title} [${this.status}] `;
}

//Sử dụng
let test1 = new TestCase(1, "Kiểm tra đăng nhập");
test1.excute() // "Đang chạy test: Kiểm tra đăng nhập"
test1.pass() // "Kiểm tra đăng nhập = 'Passed'"
console.log(test1.getInfo()); // "Test #1: Kiểm tra đăng nhập [Passed]"
```

### 6. Quy trình review code

1. Tạo branch

   Khi tạo mới branch, bạn lưu ý:
   - Luôn luôn chuyển về nhánh main và thực hiện pull code
   - Tên branch cần theo naming convention của lớp

2. Tạo PR, thêm reviewer, gửi review request

   Khi tạo PR, lưu ý:
   - Title: ngắn gọn về PR
   - Description: mô tả chi tiết hơn pull request làm những gì, có thể mô tả suy nghĩ, lập luận của bạn.
   - Vidu: tôi muốn tạo trước 1 PR cho 2 test case đầu. Sau đó, tôi sẽ bổ sung 1 PR khác
   - Thêm reviewer: chọn mentor
   - Assigness(người thực hiện): chính chúng ta

   Gửi request review:
   - Sau khi tạo pull request, hãy comment trên post review code hoặc nhắn tin riêng cho mentor

3. Thực hiện review code cho người khác

   Thực hiện review code:
   - Khi bạn nhận được review code tử người khác, hãy sắp xếp thời gian review code cho bạn học.
   - Trường hợp code có vấn đề:
     - Nếu bạn muốn comment vào 1 dòng cụ thể, hover vào dòng đó, sẽ hiển thị popup comment.
     - Nếu bạn muốn comment cho cả file, click vào biểu tượng comment ở góc phải của mỗi file, sẽ hiển thị popup comment
   - Trường hợp code không có vấn đề gì:
     - Bạn reply vào thread review code: "@[người request] Looks good to me"

4. Thực hiện fix comment khi có comment từ người khác

   Thực hiện fix code:
   - Khi có comment hãy thực hiện fix:
     - Nếu comment hợp lý, hãy fix, commit và push lên lại Github, sau đó viết PR và resolve comment
     - Nếu comment không hợp lý, hãy comment lại
