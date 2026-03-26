## Buổi 3
### 1. Git Undo Actions
1. Từ Staging Area -> Working Directory

> git restore --staged [tên file]

> git restore --staged .
2. Từ Repository -> Working Directory

> git reset HEAD~2

> git reset HEAD~[so commit]
### 2. Git Branching Model

1. Tạo nhánh

> git branch [tên nhánh]

2. Di chuyển sang nhánh khách

> git checkout [tên nhánh] 

> git checkout -b [tên nhánh] (vừa tạo vừa chuyển nhánh)

3. Xoá nhánh

> git branch -D [tên nhánh]

**Luôn pull code về trước khi tạo nhánh mới**

### 3. Git Ignore

Trong dự án có nhiều file không cần thiết phải đưa vào Git Repository: file tạm thời, thư mục dependencies, file build, file cấu hình cá nhân, file nhạy cảm, file log và database local.

> Gõ tên file trong .gitignore

```
Cú pháp
#Comment - dòng bắt đầu bằng # là ghi chú
#Ignore file cụ thể: secret.txt
#Ignore tất cả các file có extension.log: *.log
#Ignore thư mục: node_modules/, build/
#Ignore file trong mọi thư mục con: **/*.tmp
#Ngoại lệ, không Ignore file này (dùng !): !important.log
#Ignore file chỉ ở thư mục gốc: /TODO
#Ingore tất cả file.txt trong thư mục gốc doc/**/*.txt
```

### 4. Convention
> snake_case: lam_tan (tạm thời không dùng)

> kebab-case: lam-tan (dùng để đặt tên file + folder)

> camelCase: lamTan (*) (dùng để đặt tên biến, hàm)

> PascalCase: LamTan (dùng để đặt tên class)

### 5. Console log  
1. Sử dụng nháy đơn nháy kép
```
console.log('Toi la Tan');
console.log("Nam nay toi 22 tuoi");
```

2. Sử dụng kèm với variable
```
let name = "Tan"
console.log(`Toi là ${name}`);
```

3. Sử dụng cộng chuỗi
```
console.log("Toi ten la " + name + "");
```

### 6. Object
Là một trong những kiểu dữ liệu quan trọng nhất trong JS dùng để lưu trữ dữ liệu dạng key-value.

Cú Pháp:
```
<key>: <value>

Trong đó:
<key>: giống quy tắt đặt tên biến (luôn có kiểu String)
<value>: có kiểu giống biến (có thể String, Number, Boolean, hoặc 1 Object khác )

vd:
const myInfo = {
    name: "Tan",
    age: 22,
    address: "Da Nang",
};
```
Truy xuất giá trị của Object:

- sử dụng dấu chấm nếu key không chứa dấu cách và các ký tự đặt biệt (myInfo.name)
- sử dụng dấu ngoặc vuông nếu key không chứa dấu cách và các ký tự đặt biệt (myInfo["name"])

### 7. Array
1. Khai báo & sử dụng
```
const arr = [1,2,3,4,5];
```

2. Truy xuất mảng
- Độ dài mảng: length
- Lấy phần tử theo index: [0], [1], [2]

### 8. Funtion
Funtion = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện là 1 nhiệm vụ hoặc 1 tính toán cụ thể.

Khai báo: 

```
function <nameFuntion>() {
    //code
    return value;
}
```
### 9. Git Amend
Là lệnh cho phép sửa đổi commit gần nhất - thay đổi message, thêm/bớt file, hoặc cả 2. Thay vì tạo commit mới, nó viết lại commit cuối cùng.
1. Sửa Message

> git commit --amend -m "new Message"

2. Thêm file quên stage

> git add [file_name]

> git commit --amend --no-edit

3. Thêm file sửa mesage

> git add [file_name]

> git commit --amend -m "feat:..."

4. Bỏ file khỏi commit cuối

> git reset HEAD~ -- [file_name]

> git commit --amend --no-edit