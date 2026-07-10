# Git

## Undo Ation

### 1. Staging -> Working Directory

Đưa **1 file** từ *Staging Area* về lại *Working Directory*:

```bash
git restore --staged <file_name>
```

Đưa **all files** từ *Staging Area* về lại *Working Directory*:

```bash
git restore --staged .
```

### 2. File repository -> Working Directory (Un-commit)

Reset **1 file** từ *Repo Area* về lại *Working Directory*:

```bash
Git reset HEAD ~1
```

Reset **N file** từ *Repo Area* về lại *Working Directory*:

```bash
Git reset HEAD ~N
```

### 3. View history commit of Repository  

```bash
Git log
```

### 4. View the current state of the repository

```bash
Git status
```

## Git branching model

Sau khi khởi tạo repo (git int), default nhánh (branch) chính được tạo là main

```bash
git config --global init.defaultBranch main
```

### 1. Xem danh sách branch

Sử dụng dấu (*) để biểu thị nhánh đang đứng

```bash
git branch
```

### 2. Pull code

Lấy code từ server về:

```bash
git pull origin <tên nhánh>
```

> *Note: Luôn pull code về trước khi tạo nhánh mới*
>
### 3. Tạo branch mới

Crate new branch, sao chép toàn bộ trạng thái của nhánh hiện tại.
Nếu có thêm action ở nhánh mới, sẽ không ảnh hưởng gì tới nhánh chính.

```bash
git branch <tên_branch>
```

### 4. Chuyển sang new branch

```bash
git checkout <tên_branch>
```

### 5. Vừa tạo, vừa chuyển branch mới

```bash
git checkout -b <tên_branch>
```

### 6. Xoá branch

```bash
git branch -D <tên_branch>
```

> *Note: Đứng ở nhánh khác trước khi xoá*
>
## Ignore file (.gitignore)

### 1. Chỉ định những file và thư mục không được theo dõi bởi Git

+ File tạm thời (.DS_Store, Thumbs.db)
+ Thư mục dêpndencies (node_modules/, vendor/)
+ File build và artifacts (dist/, build/, *.exe)
+ File cấu hình cá nhân (IDE settings, environment variables)
+ File nhạy cảm (API keys, passwords, certificates)
+ File log và database local

### 2. Cú pháp comment : Sử dụng dấu (#)

***

## Javascript - Conventation (Bộ quy tắc)

### 1. snake_case: Skip
>
> Viết thường all, ngăn cách bằng dấu gạch dưới

Ex: `vo_thi_thanh_tam`

### 2. kebab-case: use đặt tên file và folder
>
> Viết thường all, ngăn cách bằng dấu gạch ngang

Ex: `vo-thi-thanh-tam`

### 3. camelCase: use đặt tên biến, tên hàm
>
> Chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên

Ex: `voThiThanhTam`

### 4. PascalCasse: use đặt tên class
>
> Viết hoa tất cả chữ cái đầu tiên

Ex: `VoThiThanhTam`

### 5: UPPER_CASE
>
> Viết hoa tất cả

Ex: VO_THI_THANH_TAM

## Javascript - Console.log

### 1. Sử dụng với nháy đơn, nháy kép

``` js
console.log('Toi là Tam');
console.log("Toi là Tam");
```

### 2. Sử dụng kèm với variable

``` js
let myName = "Tam";
let queQuan = "Gia Lai";
console.log(`Toi la ${myName}, toi den tu ${queQuan}`);
```

### 3. Sử dụng cộng chuỗi

``` js
let myName = "Tam";
let queQuan2 = "Ho Chi Minh"
console.log('Toi la ' + myName + ', toi den tu ' + queQuan);
```

## Javascript - Object

### 1. Là ***kiểu dữ liệu*** dùng để lưu trữ dữ liệu dạng **key:value**

+ **key**: [string] giống quy tắc đặt tên biến (luôn nằm trong ngoặc đơn hoặc kép, với javascript thì không cần)

> Note: Nếu sử dụng dấu cách or ký tự đặc biệt khi đặt tên **key**, sử dụng ngoặc đơn ('') hoặc ngoặc kép ("").

+ **value**: chứa giá trị có thể là [string], [Number], [Boolean] or 1 object khác

```JS
    const/let <variable_name> = {
        key1: value1,
        key2: value2,

    ...
}
```

### 2. Truy xuất giá trị của object: sử dụng dấm chấm (.) or ngoặc vuông ([])

```md
    > Dùng ***dấu chấm*** nếu key không chứa dấu cách, kí tự đặc biệt.
    > Dùng ***dấu ngoặc vuông*** nếu key chứa dấu cách, kí tự đặc biệt.
```

``` JS
const myInfo = {
    name: "Kyla",
    favoriteName: 25,
    address: "Gia Lai",
    isLoveCoding: true,
    codingClass: {
        name: "Playwright"
        level: "Beginner to Junior"
    }
};
console.log(myInfo.name); //lấy ra thuộc tính name
console.log(myInfo["address"]); //lấy ra thuộc tính address
console.log(myInfo.isLoveCoding); //lấy ra thuộc tính isLoveCoding
console.log(myInfo.codingClass.name); //lấy ra thuộc tính ame trong codingClass
console.log(myInfo["codingClass"]["name"]); //lấy ra thuộc tính name trong codingClass
```

### 3. Chỉnh sửa 1 object

+ Không thể khai báo thêm 1 object mới, nhưng có thể thay đổi các thuộc tính của object

```JS
const student = {"name" : "alex" , "age" :20}
      student.name = "Nagi";
```

+ Để thêm 1 thuộc tính mới vào object, dùng dấu . or [] để định nghĩa

```JS
let student = {"name" : "alex" , "age" :20}
      student.gender = "Famale";
      student.["role response"] = "QA";
console.log(student);

```

### 4. Xoá thuộc tính của object, dùng hàm **delete**

```JS
let student = {"name" : "alex" , "age" :20, "gender" : "Female"};

delete student.gender;
console.log(student);

```

## Javascript - Array (Mảng)

### 1. Khai báo mảng

``` JS
const arr =[value1,value2, value3,..value(n)]; //khai báo mảng gồm n phần tử
```

### 2. Truy xuất value trong mảng

``` JS
console.log(arr[index -1]); //truy xuất tới value trong mảng theo index [0], [1], [2]...
console.log(arr.length); //in ra độ dài của mảng
```

Example arr với for:

```JS
arr = [24, 11, 26, 39];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

### 3. Thêm phần tử vào mảng với **push**

```JS
const arr = [1,2] {
arr.push(3);
}
console.log(arr);

```

## Javascript - Function (Hàm)

Là đoạn code được đặt tên và có thể dùng đi dùng lại, thực hiện 1 nhiệm vụ or 1 tính toán cụ thể

``` JS
function <nameFunction>(){
    //code
}
```

Example 1:

``` JS
function tinhDienTich(dai, rong){
    const dienTich = dai * rong;
    console.log(`Dien tich hinh chu nhat (${dai}x${rong}) = ${dienTich}`);
}
tinhDienTich(5, 10);
tinhDienTich(2, 11);
tinhDienTich(10, 10);
```

Example 2:

``` JS
function tinhDienTich(dai, rong){
    const dienTich = dai * rong;
    return dienTich; // trả về value bên phải
}
console.log(tinhDienTich(5, 10));
console.log(tinhDienTich(2, 11));
```

Example 3:

```JS
function xinChaoBaLan(){ // Hàm không có tham số ()
    console.log("Xin chao");
    console.log("Xin chao");
    console.log("Xin chao");
}
xinChaoBaLan();
xinChaoBaLan();

```

Example 4:

```JS
function kiemTraChanLe(number) {
    if (number%2 === 0){
        return "chan";
    }
    if (number%2 !== 0){
        return "le";
    }
}
console.log(kiemTraChanLe(10));
console.log(kiemTraChanLe(11));
console.log(kiemTraChanLe(12));
```
