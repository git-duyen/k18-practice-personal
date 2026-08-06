# Git and JavaScrip Continuos
## I. Git
### 1. Undo action
#### Staging -> Working directory
`git reset --staged<file_name>` <br>
`git reset --staged .`
#### Repository -> working directory
`git reset HEAT~<so_commit>` <br>
Ex: `git reset HEAT~2` 
#### Git un_commit
- Commit đầu tiên không thể bị reset
- Nếu muốn reset -> xoá thư mục `.git` rồi `init` lại
### 2. Branching
#### a. Pull code
Lấy code từ sever về <br>
`git pull origin main`
#### b. Branch
Git sử dụng nhánh (branch) để tạo ra cá _'phiên bản'_ riêng của code, tránh ảnh hưởng đến bản gốc.
#### - Khởi tạo: `git init`
```
-> Nhánh mặc định được tạo ra
`git config --global init.defaulBranch main`
Cấu hình khi khởi tạo đặc nhánh mặc định là `main`
```
#### - Xem danh sách nhánh: `git branch`
```
Lưu ý: Cần có ít nhật 1 commit mới hiện trên danh sách nhánh
```
#### - Tạo danh sách mới: `git branch <ten_branch>`
```
Nhánh mới copy giống nhánh hiện tại
```
#### - Chuyển sang nhánh mới: `git checkout <ten_branch>`
#### - Vừa tạo vừa chuyển sang nhánh mới: `git checkout -b <ten_branch>`
#### - Xoá branch: `git branch -D <ten_branch>`
```
Lưu ý: Đứng ở nhánh khác để xoá
```
**Lưu ý:** Luôn Pull code về trước khi tạo nhánh mới
### 3. Ignore file
File `.gitignore` là một file cấu hình quna trọng trong git, giúp bản chỉ định những file và thư mục nào sẽ không được thẽo dõi (untracked) bởi git. <br>
**Tại sao cần ignore** <br>
Trong dự án thường có nhiều file không cần thiết để đưa vào git reoisitory như: 
- File tạm thời của hệ điều hành (DS_Store, Thumbs.db)
- Thư mục dependencies (node_modules/, vendor/)
- File build và artifacts (dist/, build/, *.exe)
- File cấu hình cá nhân (IDE, settings, environment variables)
- File nhạy cảm (API keys, passwords, cerificates)
- File log và data base local

**Cú pháp**
- Comment trong gitignore: `#` bắt đầu ở dòng ghi chú
- Ignore file cụ thể: secret.txt
- Ignore tất cả các file trong extension: `.log` `*.log`
- Ignore thư mục: `node_modules/`, `build/`
- Ignore file trong mọi thư mục con: `**/*.tmp`
- Ngoại lệ **KHÔNG** ignore file này dùng `!`: `!important.log`
- Ignore file chỉ ở thư mục gốc: `/TODO`
- Ignore tất cả các file `.txt` trong thư mục: `doc/`
### 4. Amend
### a. Giới thiệu
`git commit --amend` lệnh cho phép sửa đổi commit gần nhất (message; thêm bớt file; hoặc cả hai) thay vì tạo commit mới, nó viết lại commit cuối cùng
### b. Khi nào dùng git amend
- Viết sai commit message
- Quên một file vào commit
- Muốn bỏ bớt file khỏi commit cuối
- Cần sửa nhỏ mà không muốn tạo commit mới

**Chỉ amend commit chưa push lên remote**
### c. Các trường hợp sửa dụng
- Sửa commit message
    + `git commit --amend -m"new_message"`
    + Hoặc `git commit --amend` để mở editor và sửa
- Thêm file quên stage
    ``` 
    git add <file>
    git commit --amend --no-edit // không thay đổi message
    ```
- Thêm file và sửa message
    ```
    git add <file>
    git commit --amned -m"new_message"
    ```
- Bỏ file khỏi commit cuối
    ```
    git reset HEAT~ --file_to_remove.py
    git commit --amend --no-edit
    ```
- Cách hoạt động bên trong
    + Git lấy nội dụng commit cuối (parent, tree, author)
    + Kết hợp với stagin area hiện tại
    + Tạo một commit mới với hash khác thay thế commit cũ
    + Commit cũ vẫn tồn tại trong reflog nhưng không còn trên brach

Ex:
```
Trước amend
A--B--C
Sau amend
A--B--C'
```

## II. Javascript
### 1. Convention (Quy tắc)
- Giúp code theo format chung dễ nhìn
- Giúp người khác trong team dễ đọc code
- Có nhiều loại convetion
    + Đặt tên file
    + Đặt tên biến
    + Đặt tên commit

|Type|Example|Use when|
|----|-------|--------|
|snake_case|hoai_thanh| tạm thời không dùng|
|kebab-case|hoai-thanh| tên file & folder|
|camelCase|hoaiThanh| tên biến & hàm|
|PascalCase|HoaiThanh| tên class|
|UPER_CASE|HOAI_THANH||
### 2. Dùng `console.log` nâng cao
`console.log` là công cụ quan trọng giúp debug và theo dõi code
#### `console.log` with `' '` and `" "`
```
console.log('Toi la Nga')
console.log("Toi la Nga")
console.log(`${variable_name}`)
```
Ex:
```
let name = 'Nga';
console.log(`Toi la ${name}`)
console.log("Toi ten la" + name);
```
### 3. Object
Object là một trong những biến dữ liệu quan trọng nhất trong JavaScrip, dùng để lưu trữ dữ liệu trong **key_value** <br>
**Cú pháp**
```
const / let <variable_name> = {
    key1: value1,
    key2: value2,
    ...
}
```
#### < key >
- Giống quy tắt đặt tên biến (camelCase)
- Luôn có kiểu **String** -> sẽ nằm trong `''` hoặc `""`
    + Trong JavaScrip có thể không cần `''` & `""` đối với quy tắt đặt tên camelCase
    + Trong trường hợp có dấu cách và có ký tự đặc biệt bắt buộc đặt trong dấu `''` và `""`
#### < Value >
- Có kiểu giống biến, hoặc là 1 object khác
- Chứa giá trị: String, Number, Boolean ...

EX
```
const myInfo = {
    name: 'Phong',
    favoriteNumber: 25,
    address: "Hanoi",
    codingClass = {
        name: 'PlayWrigh',
        class: 'Begin'
    }
}
```
#### Truy suất giá trị của Object
- Sử dụng dấu chấm: `console.log(myInfo.name)`
    + Dùng trong trường hợp < key > không chứa dấu cách và kí tự đặc biệt
- Sử dụng chuỗi
    + `console.log(myInfo["name"])`
    + `console.log(myInfo["codingClass"]["name"]`
    + Dùng trong trường hợp < key > chứa dấu cách và kí tự đặc biệt

### 4. Array (mảng)
- Tạo mảng:  
`arr = [24,11,26,39];` <br>
`console.log(arr[0]); // 24` 
- Truy suất mảng:
    + Độ dài mảng: length
    `console.log(arr.length); // 4`
    + Lấy theo phần tử index: [0], [1], [2],..
- Vòng lặp kết hợp với mảng
```
arr = [24,11,26,39];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```
### 5. Function (hàm)
Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể <br>
**Cú pháp**   
```
function <nameFunction>(){
    // code
}
```
Ex:
```
function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    console.log(`Dien tich hinh chu nhat (${dai} * ${rong}) = ${dienTich}`);
}
console.log(tinhDienTich(5, 10)); // 50
```
**Parameter (không có tham số)**
```
function xinchaoBaLan (){
    console.log("xinchao");
    console.log("xinchao");
    console.log("xinchao");
}
=> 
   xin chao
   xin chao
   xin chao
```
### 6. Kiến thức bổ sung: Object và const

Dùng **Const** (hằng số) thì giá trị sẽ không thay đổi được
```
const a = 10;
a = 15 // Lỗi
```
Đối với **Object** cũng vậy
```
const student = {"name" : "alex", "age" : 20};
student = {"name" : "nagi", "age" : 18} // Lỗi
```
**Tuy nhiên nếu chỉ thay đổi thuộc tính Object thì hoàn toàn hợp lệ, Ví dụ chỉ thay giá trị của *name* trong object *student***

```
const student = {"name" : "alex", "age" : 20};
studen.name = "nagi"; // Hợp lệ
```

### 7. Thêm thuộc tính mới vào Object 
Chỉ cần dùng dấu `.` hoặc `[]` để đinh nghĩa thuộc tính mới.
```
let bike = {
    make: 'YAMAHA',
    model: 'YZF-03'
};

bike.color = 'Blue';
bike["price new"] = 100;

console.log(bike);

Kết quả:
{make: 'YAMAHA' , model: 'YZF-03', color: 'Blue', 'price new': 100}
```
### 8. Xoá thuộc tính của Object
Để xoá thuộc tính của Object ta dùng hàm `delete`
```
let employee {
    name: 'Le Van C',
    age: 36,
    department: 'HR'
};

delete employee.age
console.log(employee);

Kết quả:
{name: 'Le Van C', department: 'HR'}
```
### 9. Hàm Push
Để thêm phần tử vào mảng ta dùng hàm Push
```
const arr = [1,2]
arr.push(3)

console.log(arr)
[1, 2, 3]
