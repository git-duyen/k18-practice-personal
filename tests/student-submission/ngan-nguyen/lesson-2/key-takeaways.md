# VCS (Version Control System): Hệ thống quản lý các phiên bản
1. **Local**: lưu ở máy cá nhân
2. **Centralize**: lưu ở 1 máy chủ tập trung
3. **Distributed**: lưu ở nhiều máy khác nhau

# Git
Mục đích: được dùng để quản lý phiên bản và làm việc giữa nhiều người với nhau.
## Ưu điểm: 
1. **Tính năng**: dễ dùng, nhiều tính năng vượt trội
2. **Chi phí**: free
3. **Phổ biến**: nhiều công ty sử dụng

## So sánh/Phân biệt Git và GitHub
![HÌnh ảnh](https://i.pinimg.com/736x/4a/e1/5f/4ae15fa2ed326d01f349f803f8a59100.jpg)

## Git status
1. **Working Directory**: các file mới hoặc file có sự thay đổi
2. **Staging Area**: các file đưa vào vùng chuẩn bị commit
3. **Repository**: các commit

## Câu lệnh thường dùng
1. `git init` : Khởi tạo thư mục
2. `git config --global user.name`: cấu hình default name cho tất cả reposity
3. `git config --global user.email`: cấu hình default email cho tất cả reposity
4. `git config user.name`: cấu hình default name cho từng reposity
5. `git config user.email`: cấu hình default email cho từng reposity
6. `git config --list`: kiểm tra toàn bộ cấu hình
7. `git add <file_name>`: thêm 1 file
8. `git add .`: thêm tất cả các files
9. `git status`:  kiểm tra trạng thái của các files (xanh: Staging Area - đỏ: Working Directory)
10. `git commit -m "message"`: commit file
11. `git log`: kiểm tra lịch sử commit
12. `git push origin main`: push file lên Github

## Git -commit convention
Message:`< type >: <short_description>`

**type**:
- *chore*: sửa nhỏ lẻ, chính tả, xóa file
- *feat*: thêm mới
- *fix*: sửa lỗi 1 test trước đó

**short_description**: mô tả ngắn gọn (50 kí tự)

# JavaScript
Mục đích: giúp cho browser hoạt động
- Bình thường JavaScript chạy được do browser engine support
- Khi chạy trên máy tính, không có browser engine, dùng NodeJS
## JavaScript - Hello world!
1. Cú pháp in nội dung ra màn hình: 
- `console.log("nội dung");`  
- `console.log('nội dung');`

2. Cú pháp chạy lệnh trên VSC
- `node <tên file>`
- `node <đường dẫn tới file>`

## JavaScript - Basic
### Comment
Mục đích: vô hiệu hóa tạm thời 1 đoạn code, code trong comment sẽ không dược chạy
- Comment 1 dòng: thêm // vào trước đoạn code
- Comment nhiều dòng: thêm /* vào dòng đầu tiên và */ vào dòng cuối cùng

### Biến (let/var)
**Biến** là khái niệm cơ bản nhất, biến trong "biến thiên", có thể thay đổi
1. Cú pháo khai báo biến: *let/var* `<tên biến> = <giá trị>`
- **let** ra đời sau, hiện đại và an toàn hơn
- **var** ra đời trước, cũ và ít sử dụng
- **var** cho phép khai báo lại, **let** thì không
- **var** có phạm vi global, còn **let** thì phạm vi theo block
2. Quy tắc đặt biến
- Bắt đầu bằng ký tự chữ, hoặc _, hoặc $: name, _name, $name
- Không chứa dấu cách
- Không là các từ khóa có sẵn trong JavaScript: var, let, for...

### Hằng (const)
**Hằng** là giá trị không thay đổi được, hằng trong "hằng số"
Cú pháo khai báo hằng: *const* `<tên hằng> = <giá trị>`

### Khi nào dùng hằng, khi nào dùng biến?
- Mặc định dùng **const**, khi cần gán lại giá trị dùng **let**
- Không dùng **var**

### Data Type
Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
1. Kiểu nguyên thuỷ (primitive types)
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt
2. Kiểu tham chiếu (reference types)
- Object
#### Number: Số nguyên và số thực
- const age = 5; // Số nguyên
- const price = 19.1; // Số thực
- const infinity = Infinity; // Vô hạn
- const notANumber = NaN; // Không phải là số

#### String: Chuỗi kí tự
- const name = "Ngan"; // Dùng nháy kép
- const message = 'Morning'; // Dùng nháy đơn
- const age = `Age: 30`; // Dùng “backtick” (dấu huyền cạnh số 1)

#### Boolean: giá trị logic
- const isEven = true; // Giá trị đúng
- const isOdd = false; // Giá trị sai

#### Xác định kiểu dữ liệu
- Đọc code
- Sử dụng hàm **typeof**

### Toán tử so sánh
Mục đích: so sánh 2 toán hạng
- So sánh hai bằng **==** (Loose Equality): chỉ dùng khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu.
- So sánh ba bằng **===** (Strict Equality): luôn dùng
- So sánh không bằng **!=**, **!==**
- So sánh lớn hơn nhỏ hơn **>**, **<**, **>=**, **<=**

### Toán tử logic
Mục đích: kết hợp nhiều điều kiện và trả về boolean
- **&& (AND)**: trả về đúng nếu cả 2 vế của mệnh đề đúng
- **|| (OR)**: trả về đúng nếu một trong 2 vế của mệnh đề đúng

![Bảng logic](https://o2.edu.vn/wp-content/uploads/2020/07/toan-tu-bool-trong-Python.png)

### Toán tử một ngôi
Toán tử chỉ cần 1 toán hạng để thực hiện.
1. **Prefix**: toán tử nằm ở phía trước - tăng trước, trả về sau
- ++x;
- --x;
let a = 2;
b = ++a; // tăng a lên 3 rồi trả về => b có giá trị là 3
2. **Postfix**: toán tử nằm ở phía sau - trả về trước, tăng sau
- x++;
- x--;
let a = 2;
b = a++; // trả về giá trị 2 cho b rồi mới tăng => b = 2

### Toán tử toán học
- Toán tử tương tự phép cộng trừ nhân chia __=__, __-__, __*__, __/__
- Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực)

### Toán tử chia dư (%)
% sẽ trả về phần dư của phép tính
Ví dụ
- 2%2 = 0 (vì 2 chia hết cho 2 dư 0)
- 5%2 = 1 (vì 5 không chia hết cho 2, dư 1)
- a%2 === 1 => số lẻ
- a%2 === 0 => số chẵn

### In kết hợp giá trị chuỗi và biến
- In chuỗi: console.log("The number of Apple: ");
- In biến:  console.log(number);
- Kết hợp: console.log("The number of Apple: ", number);

### In nối chuỗi toán tử
- const str1 = "Good";
- const str2 = "Morning";
- Kết hợp: console.log(str1 + str2); // Good Morning

### Câu điều kiện
Mục đích: dùng để kiểm tra một đoạn logic trước khi chạy. Nếu điều kiện đúng thì mới chạy
Cú pháp: **if**
```javascript
if (<điều kiện>) {
// code...
}
```
### Vòng lặp
Mục đích: dùng để lặp lại 1 đoạn logic. Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng
Cú pháp vòng lặp **for (i)**
```javascript
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}
```

Trong đó:
- Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu.
- Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
- Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.

# VSCode
Format code
- *Mac*: Option + Shift + F
- *Window*: Alt + Shift + F















