# Lesson 6: Git, Javascript Advance

## 1. Git Remote

Remote (hay remote repository) là danh sách các repository được lưu trữ ở máy chủ từ xa (remote server), cho phép bạn cộng tác với người khác.

- Mỗi remote được định danh bằng một tên ngắn gọn và liên kết đến URL.

Ví dụ:

```bash
git remote add origin git@github.com:bba/k18-practice.git
```

---

## 2. Git Clone, Pull, Push

### 2.1 Git Clone

Clone là hành động lấy code từ repository đã có sẵn về máy tính cá nhân.

> Nên clone bằng SSH: `git@github.com/...`

Lệnh clone:

```bash
git clone <link_repo>
```

Ví dụ:

```bash
git clone git@github.com:bba/k18-practice.git
```

Có thể đặt tên mới cho thư mục clone:

```bash
git clone <link_repo> <ten_moi>
```

Ví dụ:

```bash
git clone git@github.com:bba/k18-practice.git my-project
```

---

### 2.2 Git Push

Push là hành động đưa code từ local repository lên remote repository.

Cú pháp:

```bash
git push <remote_name> <branch_name>
```

Ví dụ:

```bash
git push origin main
```

---

### 2.3 Git Pull

Pull là hành động lấy code từ remote repository về local branch.

Cú pháp:

```bash
git pull <remote_name> <branch_name>
```

Ví dụ:

```bash
git pull origin main
```

---

## 3. Git Stashing

Stash là hành động lưu trữ tạm thời các thay đổi hiện tại để có thể chuyển branch mà không bị mất code đang làm.

Lưu stash:

```bash
git stash save
```

Đặt tên cho stash:

```bash
git stash save "fix login bug"
```

Lấy lại stash gần nhất:

```bash
git stash pop
```

Lưu cả file mới chưa track:

```bash
git stash -u
```

Xem danh sách stash:

```bash
git stash list
```

Lấy stash theo thứ tự:

```bash
git stash pop stash@{0}
```

---

## 4. Git Merge & Reviewer

### 4.1 Git Merge

Merge request là hành động gộp code từ branch này sang branch khác.

Lưu ý khi tạo merge request:

- Tên request ngắn gọn, rõ ràng
- Mô tả chi tiết thay đổi
- Nên viết description bằng markdown

Ví dụ:

```markdown
- Add login testcase
- Update playwright config
- Fix xpath selector
```

---

### 4.2 Git Reviewer

Reviewer là người review code của chúng ta.

Ý nghĩa của review:

- Học cách viết code tốt hơn
- Học tư duy từ người khác
- Được góp ý để cải thiện code

> Đẩy code sớm sẽ được review kỹ hơn.

---

### 4.3 Git Convention

Format commit:

```text
<type>: <short_description>
```

Ví dụ:

```text
feat: add login testcase
fix: fix selector issue
chore: remove unused files
```

#### Các type thường dùng

- `feat`: thêm tính năng mới
- `fix`: sửa lỗi
- `conf`: thay đổi config
- `chore`: thay đổi nhỏ, dọn dẹp code, đổi tên file,...

---

## 5. Javascript Class

Class là một "bản thiết kế" (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.

### Lợi ích của class

- Code ngắn gọn, tránh lặp lại
- Dễ bảo trì
- Dễ mở rộng
- Tổ chức code tốt hơn

---

### 5.1 Khai báo class

```javascript
class TestCase {
    // Nội dung class
}
```

Ví dụ:

```javascript
class TestCase {
    // Class để quản lý test case
}
```

---

### 5.2 Constructor trong class

Constructor là hàm khởi tạo object.

```javascript
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

// Tạo object
const student = new Student("Hung", 8.5);

console.log(student.name);   // Hung
console.log(student.grade);  // 8.5
```

---

### 5.3 Thuộc tính (Properties)

Thuộc tính là các biến lưu dữ liệu của object.

```javascript
class TestCase {
    constructor(id, title, priority) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.status = "Not Run";
    }
}

let tc1 = new TestCase(1, "Login Test", "High");
let tc2 = new TestCase(2, "Logout Test", "Medium");

console.log(tc1.title);
console.log(tc2.title);
console.log(tc1.status);
```

---

### 5.4 Phương thức (Methods)

Method là các hàm định nghĩa hành vi của object.

```javascript
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

const student = new Student("Linh", 9);

student.study();
```

---

## 6. Quy trình Review Code

### 6.1 Tạo Branch

Khi tạo branch mới:

- Luôn checkout về `main`
- Pull code mới nhất trước khi tạo branch
- Đặt tên branch theo naming convention của lớp

Ví dụ:

```bash
git checkout main
git pull origin main
git checkout -b feat/login-testcase
```

---

### 6.2 Tạo Pull Request (PR)

Khi tạo PR cần chú ý:

#### Title

- Ngắn gọn
- Mô tả đúng mục đích PR

Ví dụ:

```text
feat: add login testcase
```

#### Description

Mô tả chi tiết PR đã làm gì.

Ví dụ:

```markdown
- Add login testcase
- Add forgot password testcase
- Update playwright config
```

#### Reviewer

- Chọn mentor review code

#### Assignees

- Chính là người thực hiện task

---

### 6.3 Gửi Request Review

Sau khi tạo PR:

- Comment trên post review
- Hoặc nhắn mentor để request review

---

### 6.4 Review Code Cho Người Khác

Khi review:

- Đọc logic code
- Kiểm tra naming
- Kiểm tra clean code
- Kiểm tra syntax và best practice

#### Nếu có vấn đề

- Hover vào dòng code để comment
- Hoặc comment cả file

#### Nếu code ổn

Có thể comment:

```text
Looks good to me
```

---

### 6.5 Fix Comment

Khi có comment từ reviewer:

#### Nếu comment hợp lý

- Fix code
- Commit lại
- Push lại GitHub
- Resolve comment

#### Nếu chưa đồng ý

- Reply lại comment
- Giải thích reasoning của mình