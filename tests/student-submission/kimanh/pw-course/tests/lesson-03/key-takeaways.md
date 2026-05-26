# Git & JavaScript Summary - Lesson 3

# 1. Restore file trong Git

## 1.1 Restore file từ Staging Area về Working Directory

### Restore toàn bộ file

```bash
git restore --staged .
```

### Restore 1 file cụ thể

```bash
git restore --staged <file_name>
```

Ví dụ:

```bash
git restore --staged demo.js
```

---

# 1.2 Restore file từ Repository về Working Directory

## Reset commit

```bash
git reset HEAD~N
```

Trong đó:
- `N` là số commit muốn quay lại

Ví dụ:

```bash
git reset HEAD~1
```

→ Quay lại 1 commit trước đó.

---

## Note

Commit đầu tiên không thể reset.

Nếu muốn reset hoàn toàn:
- Xóa thư mục `.git`
- Chạy lại:

```bash
git init
```

---

# 2. Git Branch

## Xem danh sách branch

```bash
git branch
```

---

## Tạo branch mới

```bash
git branch <ten_branch>
```

Ví dụ:

```bash
git branch feature-login
```

---

## Chuyển branch

```bash
git checkout <ten_branch>
```

Ví dụ:

```bash
git checkout feature-login
```

---

## Vừa tạo vừa chuyển branch

```bash
git checkout -b <ten_branch>
```

Ví dụ:

```bash
git checkout -b feature-login
```

---

## Xóa branch

```bash
git branch -D <ten_branch>
```

Ví dụ:

```bash
git branch -D feature-login
```

### Note
Phải đứng ở branch khác trước khi xóa branch.

---

# 3. Git Ignore

## Tên file

```text
.gitignore
```

## Mục đích
Bỏ qua các file/folder không muốn push lên Git.

Ví dụ:

```text
node_modules
test-results
playwright-report
```

---

# 4. Naming Convention

## snake_case
Ví dụ:

```text
my_name
```

Hiện tại tạm thời không dùng.

---

## kebab-case
Dùng đặt tên file/folder.

Ví dụ:

```text
login-page.js
```

---

## camelCase
Dùng đặt tên biến/hàm.

Ví dụ:

```js
let myName = "Alex";

function getUserInfor() {

}
```

---

## PascalCase
Dùng đặt tên class.

Ví dụ:

```js
class LoginPage {

}
```

---

# 5. console.log nâng cao

## Sử dụng dấu `

Ví dụ:

```js
let name = "Kim Anh";

console.log(`Toi ten là ${name}`);
```

Kết quả:

```text
Toi ten là Kim Anh
```

---

# 6. Object

## Khái niệm

Object dùng để:
- Lưu trữ nhiều giá trị
- Gom dữ liệu vào cùng 1 biến/hằng

---

## Ví dụ

```js
const myInfor = {
    name: "Phong",
    favoriteNumber: 25,
    address: "Hà Nội",
    "my address 2": "Hà Tây",
    isLoveCoding: true,

    codingClass: {
        name: "Playwright",
        level: "Beginner to Junior",
    }
};
```

---

## Truy xuất dữ liệu

### Dùng dấu chấm

```js
console.log(myInfor.name);

console.log(myInfor.codingClass.name);
```

---

### Dùng dấu []

```js
console.log(myInfor["name"]);

console.log(myInfor["codingClass"]["name"]);
```

---

# 7. Array

## Khái niệm

Array dùng để tạo danh sách/mảng dữ liệu.

---

## Format

```js
const arr = [3,7,9,21,54];
```

---

## Truy xuất phần tử

```js
console.log(arr[3]);
```

Kết quả:

```text
21
```

---

## Lấy độ dài mảng

```js
console.log(arr.length);
```

Kết quả:

```text
5
```

---

# 8. Function

## Khái niệm

Function là:
- Đoạn code được đặt tên
- Có thể tái sử dụng
- Dùng để xử lý logic hoặc nhiệm vụ cụ thể

---

## Format

```js
function nameFunction() {

    // code

}
```

---

## Ví dụ

```js
function sayHello() {
    console.log("Hello");
}

sayHello();
```

---

# 9. Git Amend

## Sửa commit message

```bash
git commit --amend -m "new message"
```

---

## Thêm file nhưng giữ nguyên message

```bash
git add <file>
git commit --amend --no-edit
```

---

## Thêm file và sửa message

```bash
git add <file>
git commit --amend -m "new message"
```

Ví dụ:

```bash
git add demo.js
git commit --amend -m "feat: update login testcase"
```