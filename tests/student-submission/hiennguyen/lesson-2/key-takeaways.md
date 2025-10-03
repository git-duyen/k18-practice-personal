# Version Control System (VCS)
Khái niệm: VCS là hệ thống quản lý các phiên bản
Ví dụ: Git
## Git
**Simple workflow:** init -> config (nếu không global) -> add -> commit -> push

|| Khởi tạo | Cấu hình | Working Directory | Staging Area | Repository |
|-------|-------------------|--------------|---------------------|----------------------|--------------------|
| **Nội dung** | Tạo repo Git trong thư mục hiện tại | Cấu hình git cho username cụ thể |File add/edit/delete | File được chọn để commit | Nơi chứa lịch sử commit |
| **Câu lệnh** | git init | **1 repo (đứng tại repo đó)**: <br>git config user.name "name" <br>git config user.email "email"<br><br>**Cho toàn bộ máy tính (default)**:<br>git config --global user.name "name"<br>git config --global user.email "email" | - | **Add file cụ thể**: git add abc.js <br><br>**Add toàn bộ:** git add . | **Lưu commit trong máy Local:** git commit -m"comment" <br><br>**Lưu commit trên server (GitHub) :** git push origin main   |

**Các câu lệnh khác:**
1. Xem trạng thái file: git status
* File màu xanh lá: vùng staging
* File màu đỏ: vùng working directory

2. Kiểm tra lịch sử commit: git log


**Commit convention**
`<type>:<short_description>`
* Type:
chore: thay đổi nhỏ (chính tả, xóa file...)
feat: thêm tính năng
fix: sửa lỗi

* Short_description: mô tả ngắn gọn (<=50 ký tự), EN or VI không dấu

# JavaScript basic:
* **Chạy lệnh:** 
```js
node file.js
```
* **Log nội dung:**  
```js
console.log("nội dung");
console.log('nội dung'); 
console.log(<variable_name>);
console.log('Chiều cao: ' + <height>);
console.log("Chiều cao: ", <height>);
console.log(<height> + <weight>);
```

* **Comment:** vô hiệu hóa đoạn code
```js
// comment 1 dòng
/* comment nhiều dòng */
```
<br>

## Khai báo biến, hằng:
* **Biến:** Có thể thay đổi được 
```js
<từ khóa> <tên biến> = <giá trị>
```
Từ khóa: **var/let** (var cho phép khai báo lại, let thì không) <br>
Tên biến: bắt đầu bằng ký tự chữ hoặc gạch dưới, hoặc $, không chứa dấu cách, không là các từ khóa như var, let, for, if... <br>
Ex:<br>
```js
var A = "abc";
let B = true;
```
* **Hằng:** không thay đổi được, khai báo cho giá trị chỉ sử dụng 1 lần
```js
<Từ khóa> <tên hằng> = <giá trị>
```
Từ khóa: **const**<br>
Ex:<br>
```js
const PI = 3.14;
```
**Lưu ý: mặc định dùng const, dùng let khi cần gán lại giá trị, không nên dùng var**

## Kiểu dữ liệu:
**Kiểu nguyên thủy:**
1. **Number:** số nguyên và số thực<br>
```js
const age = 25; // Số nguyên
const price = 19.99; // Số thực
const infinity = Infinity; // Vô hạn
const notANumber = NaN; // Không phải là số
```

2. **String**: chuỗi ký tự <br>
```js
const name = "John"; // Dùng nháy kép
const message = 'Hello'; // Dùng nháy đơn
const template = \`Age: 10`; // Dùng “backtick” (dấu huyền cạnh số 1)
```

3. **Boolean:** giá trị logic<br>
```js
const isActive = true; // Giá trị đúng
const isComplete = false; // Giá trị sai
```
**Tip: xác định biến có kiểu dữ liệu gì:** <br>
Sử dụng hàm 
```js
typeof <variable>
```
Output: number || string || boolean

## Các toán tử:
### Toán tử so sánh:
Mục đích: so sánh 2 toán hạng, kết quả trả về true/false<br>
Chia làm 3 nhóm:<br>
- So sánh bằng: == và `===`<br>
So sánh 2 bằng == (so sánh tương đối, 2 giá trị so sánh có thể không khớp kiểu dữ liệu)<br>
So sánh 3 bằng `===` (so sánh tuyệt đối, 2 giá trị khớp kiểu dữ liệu)<br>
- So sánh không bằng: != và !==<br>
Tương tự so sánh bằng<br>
- So sánh lớn hơn, nhỏ hơn: > < <= >=

### Toán tử logic:
Mục đích: kết hợp nhiều điều kiện và trả về true/false<br>
- `&& (AND)`: trả về đúng nếu 2 vế của mệnh đề đúng
- `|| (OR)`: trả về đúng nếu 1 trong 2 vế của mệnh đề đúng

### Toán tử một ngôi:
- Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau<br>
++x;<br>
--x;<br>
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau<br>
x++;<br>
x--;<br>
Ex:<br>
```js
let a = 10;
b = ++a; // a = 11, b = 11
let c = 10;
d = c++; // d = 10, c = 11
```
### Toán tử toán học:
+, -, *, /

## Câu điều kiện:
### if:
Cú pháp:
```js
if (<điều kiện>) {
    // code...
}
```
## Vòng lặp:
Mục đích: lặp lại 1 đoạn logic với số lần nhất định hoặc vô hạn, tùy theo điều kiện dừng
### for (i):
Cú pháp:
```js
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}
```
**Tip: format code:**<br>
Mac: Option + Shift + F<br>
Window: Alt + Shift + F