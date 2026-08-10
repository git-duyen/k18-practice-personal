# Git & Javascript Basic

## Version Control System = Hệ thống quản lý phiên bản

- Git là một Distributed Version Control System (DVCS)

---

## Git

- Git có 3 trạng thái: 

**Working Directory** - Tạo/sửa/xóa file

**Staging Area** - Đưa file cụ thể/toàn bộ file từ Working Directory vào Staging Area
- `git add <file>` → add 1 file cụ thể
- `git add folder/<file>` → add 1 file nằm trong folder (dùng `cd folder` để đi vào, `cd ..` để đi ra)
- `git add <folder>/` → add toàn bộ file trong 1 folder (bao gồm folder con)
- `git add .` → add tất cả thay đổi trong thư mục hiện tại và các thư mục con

**Repository** - Lưu các file đang ở Staging Area thành một phiên bản mới (commit) vào repository
- `git commit -m "message"`
- `git status` → xem trạng thái file
- `git log` → xem danh sách commit

**Git - Cấu hình:** set thông tin cá nhân riêng cho từng repo (đứng tại terminal của repo đó)
- `git config user.name "<name>"`
- `git config user.email "<email>"`

**Git - Commit convention** = quy tắc đặt tên commit

Cú pháp: `<type>: <short_description>`

- **type** = loại commit:
  - `chore` - sửa nhỏ lẻ, chính tả
  - `feat` - thêm feature mới, test case mới
  - `fix` - sửa lỗi 1 test trước đó
- **short_description**: mô tả ngắn gọn (khoảng 50 ký tự)

---

## JavaScript Basic

### console.log()

Dùng để in thông tin ra cửa sổ Console (màn hình log) để xem chương trình đang làm gì.

Cú pháp: `console.log(nội_dung);`

- Chạy lệnh `node <tên_file.js>` để quan sát kết quả
- Luôn format code bằng `Alt + Shift + F`

### Biến, hằng

- **Biến** (`var`/`let`) = nơi lưu dữ liệu có thể thay đổi
- **Hằng** (`const`) = nơi lưu dữ liệu không được thay đổi

### Data Type (8 kiểu)

Dùng hàm `typeof` để biết một biến có kiểu dữ liệu gì.

Cú pháp: `typeof <variable>` → trả về: number / string / boolean...

**1. Number** - số nguyên & số thực (bao gồm cả `Infinity` khi chia cho 0, và `NaN` khi không phải là số)

**2. String** - chuỗi ký tự
- Nháy kép `"..."` - chuỗi đơn giản, hoặc khi chuỗi có dấu `'`
- Nháy đơn `'...'` - chuỗi đơn giản
- Backtick `` `...` `` - chuỗi có chèn biến hoặc nhiều dòng, dùng `${tên_biến}` để chèn biến vào chuỗi

**3. Boolean** - giá trị logic: `true` / `false`

**4. Toán tử so sánh** - dùng để so sánh 2 toán hạng, kết quả trả về dạng boolean. Gồm 3 loại:
- So sánh không bằng: `!=`, `!==` (không ép kiểu)
- So sánh lớn hơn, nhỏ hơn: `<`, `>`, `<=`, `>=`
- So sánh bằng: `==` (có ép kiểu) và `===` (nên dùng, không ép kiểu)
- Ép kiểu nghĩa là: chuyển dữ liệu 1 bên cho giống bên còn lại rồi mới so sánh

**5. Toán tử logic** - dùng để kết hợp nhiều điều kiện, trả về boolean
- `&&` (AND): trả về đúng nếu cả 2 vế đều đúng
- `||` (OR): trả về đúng nếu 1 trong 2 vế đúng

**6. Toán tử một ngôi** - chỉ tác động lên 1 giá trị (1 biến). Có 2 loại, khác nhau khi cần lấy giá trị của biến ngay tại thời điểm tăng:
- **Prefix** (`++x`, `--x`): tăng lên 1 trước, rồi mới dùng giá trị
- **Postfix** (`x++`, `x--`): dùng giá trị hiện tại trước, rồi mới tăng lên 1

Phân biệt dễ hiểu:
- Prefix = "Làm trước → Nói sau"
- Postfix = "Nói trước → Làm sau"

**7. Toán tử toán học**: `+`, `-`, `*`, `/`
- Lưu ý: khi chia cho 0, kết quả sẽ ra `Infinity`

**8. Câu điều kiện (if)** - dùng để kiểm tra một đoạn logic trước khi chạy, nếu điều kiện đúng thì mới chạy

Cú pháp:
```javascript
if (<điều_kiện>) {
  // code ...
}
```

- Câu điều kiện đơn: chỉ kiểm tra một điều kiện duy nhất
- Câu nhiều điều kiện: kết hợp bằng `&&` để kiểm tra tất cả điều kiện cùng lúc
- Nested condition (if lồng nhau): điều kiện thứ hai chỉ có ý nghĩa khi điều kiện đầu tiên đúng

Phân biệt `&&` và if lồng nhau:
- `&&` (AND): kiểm tra tất cả điều kiện cùng lúc, đọc là "A và B đều đúng", dùng khi các điều kiện độc lập và chỉ cần biết kết quả cuối, không xử lý được gì giữa các bước
- if lồng nhau (nested): kiểm tra từng bước, đọc là "nếu A đúng thì mới kiểm tra B", dùng khi điều kiện phụ thuộc nhau hoặc cần xử lý sau mỗi bước, có thể xử lý giữa các bước

**9. Vòng lặp** - dùng để lặp lại một đoạn logic một số lần nhất định hoặc lặp vô hạn tùy theo điều kiện dừng

Cú pháp vòng lặp `for`:
```javascript
for (<điều_kiện_khởi_tạo>; <điều_kiện_lặp>; <cập_nhật>) {
  // code chạy lặp
}
```

Cách vòng lặp hoạt động:
- Khởi tạo giá trị ban đầu
- Kiểm tra điều kiện lặp, nếu đúng thì chạy đoạn code bên trong
- Sau mỗi lần chạy, thực hiện phần cập nhật
- Lặp lại cho đến khi điều kiện lặp sai thì dừng