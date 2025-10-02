# Tổng hợp kiến thức đã học từ Lesson 3

## Git

### Git Undo Things
1. **Sửa commit message gần nhất**  
```git commit --amend -m "new message"```
-> ```git commit --amend -m "new message":``` sửa commit message gần nhất; nếu muốn thêm file mới mà không đổi message, ``git add <file>`` rồi ```git commit --amend -m "new messge"```, vẫn chỉ tạo 1 commit duy nhất.
2. **Restore file từ vùng staging về working directory**  
- Restore 1 hoặc vài file bất kỳ:  
```git restore --staged <file_name_1> <file_name_2>  ```
- Restore tất cả file:  
```git restore --staged .```

### 3. Uncommit - Xóa file khỏi vùng repository (Xóa commit trong commit history)

`git reset HEAD~n`  
- `n` là số commit muốn xóa, tính từ commit gần nhất trở về xa.

**Lưu ý:** Không thể xóa commit gốc. Nếu muốn xóa hoàn toàn, chỉ có cách xóa folder rồi `git init` lại.

**Các chế độ reset:**  
- **--soft:** Xóa commit khỏi repository, đưa file trở lại **staging**. Nếu muốn commit lại, chỉ cần `git commit` mà không cần `git add`.  
- **--mixed (mặc định):** Xóa commit khỏi repository, file vẫn nằm ở **working directory**, **staging** trống (file đã được di chuyển từ staging lên repo lúc commit). Khác với `--soft` là file không trở lại staging.  
- **--hard:** Xóa commit khỏi repository, **staging** và **working directory**, xem như file chưa từng tồn tại.

---

### Pull Code
1. Pull code từ một nhánh bất kỳ:  
```git pull origin <branch_name>```

---

### Branch
> Git sử dụng **branch** để tạo ra các phiên bản code riêng, giúp code trên nhánh rồi merge lại để tránh ảnh hưởng trực tiếp đến `main`.

1. Xem danh sách branch:  
```git branch  ```
> Dấu `*` ở nhánh nào thì thể hiện mình đang đứng ở nhánh đó.

2. Tạo branch mới:  
```git branch <branch_name>```

3. Chuyển sang nhánh khác:  
```git checkout <branch_name>  ```
> Khi checkout sang nhánh khác, git sẽ snapshot từ repo của nhánh được checkout (ví dụ nhánh B) và copy ra working directory. Sau khi chuyển xong, trong working directory sẽ chỉ thấy file theo repo của nhánh B.

4. Vừa tạo nhánh mới và chuyển sang nhánh đó luôn:  
```git checkout -b <new_branch_name>```

5. Xóa branch:  
```git branch -D <branch_name>```

6. Chuyển về 1 commit bất kỳ (Revision)  

- Cú pháp:  
  ```git checkout <revision>  ```

- Công dụng:  
  Dùng để **checkout về 1 commit trong quá khứ** nhằm xem lại code tại thời điểm đó.  

- Lưu ý:  
  - Khi checkout về commit thì mình đang đứng ở commit vừa checkout. Nếu chỉnh sửa code rồi commit và push, thì commit mới sẽ **không thuộc nhánh nào**
  - Có thể checkout về commit cũ và commit lại trên nhánh mới bằng cách dùng lệnh vừa tạo, vừa chuyển nhánh:``` git checkout -b <new_branch> <revision>```


---

### .gitignore
Tạo file `.gitignore` để khai báo những file/thư mục **không muốn push lên repository**.  

Cú pháp:  
folder_name/    # Bỏ qua cả thư mục  
.file_name      # Bỏ qua file cụ thể  

---

## Javascript

### 1. Conventions

- **snake_case**: ít dùng
- **kebab-case**: thường dùng cho tên file
- **camelCase**: dùng cho tên biến, viết thường chữ đầu, in hoa chữ cái đầu các từ sau  
  Ví dụ: let studentName = "Hien Do";
- **PascalCase**: dùng cho tên class, viết hoa chữ cái đầu mỗi từ  
  Ví dụ: class StudentProfile {}

---

### 2. In giá trị (string)

Có thể in ra giá trị bằng cách dùng:
- Nháy đơn `' '`
- Nháy kép `" "`
- Backtick `` ` `` (nên dùng vì có thể chèn biến trực tiếp bằng `${}`)

Ví dụ:  
let name = "Hien";  
console.log(`Hello, ${name}`);  // Hello, Hien

---
### 3. Object  

**Cú pháp:**  
let/const <tên_object> = { <thuộc_tính>: <giá_trị>, ... }  

- `<thuộc_tính>`: tuân theo quy tắc đặt tên biến.  
- `<giá_trị>`: có thể là số, chuỗi, boolean, mảng, hoặc thậm chí là một object khác.  

**Lưu ý:**  
- Trong một object có thể chứa **object con**, mà object con này lại có các thuộc tính riêng.  

**Ví dụ:**  
``const product = {
“name”: “Laptop”,
“price”: 500,
“isWindow”: true,
“manufacturer”: {
“name”: “Acer”,
“year”: 2024
}``

- Object `product` có các thuộc tính: `name`, `price`, `isWindow`.  
- Thuộc tính `manufacturer` lại là **một object con**, bên trong có `name` và `year`.  
- Như vậy: `manufacturer` chính là object con nằm trong object cha `product`.  

**Truy cập thuộc tính:**  
- Dùng cú pháp: `<tên_object>["<thuộc_tính_1>"]["<thuộc_tính_2>"]`.  

**Cập nhật giá trị:**  
- Muốn đổi giá trị thuộc tính (ví dụ từ `A` → `A.1`), chỉ cần gán lại giá trị cho thuộc tính đó, sau đó in lại.  

---
### 4. Array  

**Cú pháp:**  
const arr = ["a1", "a2", ...]  

- **Index:** bắt đầu từ `0` đến `n-1`, với `n` là độ dài của mảng.  
- **Công dụng của index:** dùng để xác định phần tử trong mảng và lấy ra giá trị khi cần.  
- **Độ dài mảng:** sử dụng `arr.length` để xác định số phần tử trong mảng.  

---
### 5. Function  
- Lưu ý: đặt tên hàm nên mang tính **tái sử dụng**, đảm nhiệm một **nhiệm vụ tính toán cụ thể**.  

**Cú pháp:**  
function <ten_function>() {  
&nbsp;&nbsp;&nbsp;&nbsp;// code thực thi  
}  

- Để sử dụng: gọi hàm bằng `<ten_function>()`.  

---

### 6. Parameter (Tham số)  
- Có thể khai báo hàm với **tham số** để nhận giá trị khi gọi hàm.  
- Khi gọi hàm, truyền giá trị vào tương ứng với tham số.  

**Ví dụ:**  
function getMax(a, b) {  
&nbsp;&nbsp;&nbsp;&nbsp;if (a > b) return a;  
&nbsp;&nbsp;&nbsp;&nbsp;return b;  
}  

console.log(getMax(20, 12)); // Kết quả: 20  

return chỉ có ý nghĩa trong hàm để gửi giá trị ra ngoài. 

Nếu không cần gửi giá trị đi đâu, hoặc code chạy trực tiếp, không cần return.

 ---

 ### 7. Object với const

- Khi dùng hằng số hoặc object, **không thể thay object bằng 1 object mới**:  
  const student = { "name": "alex", "age": 20 }  
  student = { "name": "Nagi", "age": 18 } → Lỗi

- Nhưng nếu **thay giá trị của thuộc tính trong object** thì hợp lệ:  
  const student = { "name": "alex", "age": 20 }  
  student.name = "Nagi"; → Hợp lệ

- **Thêm thuộc tính mới vào object**: dùng dấu `.` hoặc ngoặc vuông `[]`:  
  let bike = { make: 'Yamaha', model: 'YZF-R3' }  
  bike.color = "Blue"  
  bike["price new"] = 100  
  Kết quả: { make: 'Yamaha', model: 'YZF-R3', color: 'Blue', 'price new': 100 }

- **Xóa thuộc tính của object**: dùng từ khóa `delete`:  
  let employee = { name: 'Le Van C', age: 30, department: 'HR' }  
  delete employee.age  
  Kết quả: { name: 'Le Van C', department: 'HR' }

### 8.push

**Thêm phần tử vào mảng**: sử dụng hàm `push`  

```javascript
const arr = [1, 2];
arr.push(3);

console.log(arr);
[1, 2, 3] //Kết quả sau khi thêm
