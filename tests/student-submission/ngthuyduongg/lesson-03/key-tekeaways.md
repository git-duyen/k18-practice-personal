# Git & Javascript Basic (Continue)

## Git Undo - Về vùng Working Directory

**Staging Area** - Bỏ file khỏi Staging (Unstage), file chỉ còn ở trạng thái Working Directory
- `git restore --staged <file_name>`
- `git restore --staged .`

**Repository** - Hủy commit gần nhất, bỏ Staging (Unstage), file trở về trạng thái Working Directory
- `git reset HEAD~<so_commit>`
- *Lưu ý: số commit gần nhất*

> Các lệnh này chỉ thay đổi trạng thái (state) của file trong Git, không thay đổi nội dung file.

---

## Git Amend

`git commit --amend` là lệnh cho phép sửa đổi commit gần nhất.

**Chỉ sửa commit message** - Đã commit nhưng muốn sửa lại commit message
- `git commit --amend -m "Message mới"`
- hoặc `git commit --amend` (sửa trong VIM: `i` để insert, `esc` để hoàn tất, `:wq` + Enter để lưu)
- Kết quả: giữ nguyên file, chỉ đổi message

**Thêm file bị quên** - Đã commit nhưng quên add một file
- `git add <file_name>`
- `git commit --amend --no-edit`
- Kết quả: thêm file vào commit, giữ nguyên message cũ

**Thêm file + sửa message** - Đã commit, quên file và muốn đổi message
- `git add <file_name>`
- `git commit --amend -m "Message mới"`
- Kết quả: thêm file và đổi message

**Bỏ file khỏi commit cuối** - Đã commit nhầm một file
- `git reset HEAD~ -- <file_name>`
- `git commit --amend --no-edit`
- Kết quả: bỏ file khỏi commit, giữ nguyên message cũ

---

## Git - Branching

- Sử dụng nhánh (branch) để tạo ra các "phiên bản" riêng của code, tránh ảnh hưởng tới "bản gốc".
- Khi khởi tạo repo (`git init`), nhánh mặc định sẽ được tạo ra.

**Cú pháp:**
- `git branch <ten_nhanh>` → tạo nhánh mới, copy giống hệt nhánh hiện tại
- `git checkout -b <ten_nhanh>` → vừa tạo vừa chuyển sang nhánh mới
- `git branch` → xem danh sách nhánh (dấu `*` biểu thị nhánh đang đứng). *Lưu ý: cần ít nhất 1 commit mới hiển thị danh sách.*
- `git checkout <ten_nhanh>` → chuyển sang nhánh khác
- `git branch -D <ten_nhanh>` → xóa branch. *Lưu ý: cần đứng ở nhánh khác trước khi xóa.*

> Luôn pull code về trước khi tạo nhánh mới.

---

## Git Ignore

File `.gitignore` giúp chỉ định những file & thư mục không cần thiết sẽ không được Git theo dõi (untracked).

- Ghi tên file/thư mục muốn bỏ qua vào file `.gitignore`.
- Khi Git thấy file `.gitignore`, nó sẽ bỏ qua toàn bộ những gì được liệt kê trong đó.
- Dùng `#` để viết comment.

---

## Code Convention

- **camelCase** - dùng cho biến (variable), hàm (function). Ví dụ: `userName`, `loginUser()`
- **PascalCase** - dùng cho class, page object. Ví dụ: `LoginPage`
- **kebab-case** - dùng cho tên file, folder. Ví dụ: `login-page.ts`
- **UPPER_SNAKE_CASE** - dùng cho hằng số (const). Ví dụ: `BASE_URL`
- **type: message** - dùng cho commit message. Ví dụ: `feat: add login`, `fix: booking bug`

**Console.log nâng cao:** dùng kèm biến (template string) để tự động in ra giá trị biến thay vì nối chuỗi thủ công.

---

## Javascript - Data Type

### 1. Object

Dùng để lưu trữ dữ liệu dạng key-value.

**Cú pháp:**
```javascript
const/let <variable_name> = {
  key1: value1,
  key2: value2,
  ...
};
```

- `<key>`: đặt theo quy tắc đặt tên biến, không nên chứa ký tự đặc biệt.
- `<value>`: có thể là string, number, boolean hoặc một object khác.
- Truy xuất giá trị thuộc tính bằng dấu chấm (`obj.key`) hoặc bằng ngoặc vuông (`obj["key"]`).

### 2. Array

Là danh sách nhiều phần tử được sắp xếp theo thứ tự, mỗi phần tử có một index (bắt đầu từ 0).

- `arr[index]` → lấy phần tử theo index
- `arr.length` → lấy số lượng phần tử
- Dùng vòng lặp `for` kết hợp `arr.length` để duyệt qua từng phần tử của mảng.

### 3. Function

Là đoạn code được đặt tên, có thể tái sử dụng để thực hiện một nhiệm vụ hoặc phép tính cụ thể.

**Hàm có parameter:**
```javascript
function tenHam(tham_so_1, tham_so_2) {
  // xử lý logic
  return ket_qua; // hoặc dùng console.log để in trực tiếp
}
```
- Parameter là biến tạm để hàm nhận dữ liệu từ bên ngoài khi được gọi.
- Gọi hàm và truyền tham số theo đúng thứ tự đã khai báo.

**Hàm không có parameter:**
```javascript
function tenHam() {
  // xử lý logic, không cần nhận tham số
}
```

> **return:** trả kết quả ra ngoài function để phần code khác có thể tiếp tục sử dụng.
> **console.log:** hiển thị giá trị ra Console để người lập trình nhìn thấy..