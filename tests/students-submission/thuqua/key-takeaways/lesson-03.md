# Git Undo Guide 🛠️


## 1. Từ Staging Area → Working Directory
Dùng khi đã chạy lệnh `git add` nhưng chưa `git commit` và muốn đưa file ra khỏi danh sách chuẩn bị.

* **Restore cụ thể một file:**
    ```bash
    git restore --staged <file_name>
    ```
* **Restore toàn bộ các file:**
```bash
    git restore --staged .
```



## 2. Từ Repository → Working Directory (Un-commit)
Dùng khi đã chạy `git commit` nhưng muốn quay lại để sửa đổi thêm mà không làm mất nội dung đã viết.

* **Cú pháp tổng quát:**
```bash
    git reset HEAD~<số_commit>
```
* **Ví dụ: Hủy 2 commit gần nhất:**
```bash
    git reset HEAD~2
```

## 3. Git Amend

#### 3.1 Sửa đổi commit gần nhất
```bash
git commit --amend
```

##### Note: sửa trong chế độ VIM
- Bấm I để hiện chữ insert -> sửa commit
- Sau khi sửa xong thì bấm esc để thoát
- Tiếp tục gõ lệnh: `:wq`

#### 3.2 Thêm file, Sửa đổi commit gần nhất và thay đổi message

```bash
git add <ten_file>
git commit --amend -m"<Nội dung message>"
```
#### 3.3 Thêm file vào commit cuối cùng
```bash
git add <ten_file>
git commit --amend --no--edit //Giữ nguyên message cũ cuối cùng
```
##### Note: Đưa thêm file từ vùng Staging -> Repository nhưng không muốn sửa nội dung commit

#### 3.4 Bỏ file khỏi commit cuối cùng
```bash
git reset HEAD~file_to_remove
git commit --amend --no--edit
```

###Cách hoạt động bên trong
Khi bạn chạy `git commit --amend`, Git thực chất:
1. Lấy nội dung của commit cuối (parent, tree, author)
2. Kết hợp với staging area hiện tại
3. Tạo một **commit mới với hash khác** thay thế commit cũ
4. Commit cũ vẫn tồn tại trong reflog nhưng không còn trên branch

```bash
Trước amend:                 Sau amend:

A -- B -- C                  A -- B -- C' (C' thay thể C, hash khác) 
```

---

# 🌿 Branching trong Git

## 1. Tạo branch

```bash
    git branch <ten_nhanh>
```

## 2. Di chuyển sang branch

```bash
git checkout <ten_nhanh>
```


#### 🔍 Kiểm tra branch hiện tại

```bash
git branch
```
👉 Branch đang đứng sẽ có dấu *


#### 🚀 Tạo branch + chuyển luôn

 ```bash
git checkout -b <ten_nhanh>
 ```

## 3. Xoá branch
 ```bash
    git branch -D <ten_nhanh> 
 ```
##### ⚠️ Lưu ý:

- Không được đứng ở branch cần xoá
- Nên chuyển sang branch khác (main/develop) trước

```bash
git checkout main
git branch -D <ten_nhanh>
```

--- 

# 🚫 Git Ignore File

## 📌 Các file không cần đưa lên Git Repository


#### Trong dự án có nhiều file không cần thiết phải commit lên Git

```bash
    - File tạm thời của hệ điều hành (.DS_Store, Thumbs.db)
    - Thư mục dependencies (node_modules/, vendor/)
    - File build và artifacts (dist/, build/, .exe)
    - File cấu hình cá nhân (IDE setting, environment)
    - File nhạy cảm (API keys, passwords, certificates)
    - File log và database local
```

#### ⚙️ Cách để Git bỏ qua file

##### 1. Tạo file .gitignore

##### 2. Thêm file/folder cần ignore
```bash
# Ví dụ
node_modules/
dist/
.env
.DS_Store
```

##### 3. Git sẽ tự động bỏ qua

```bash
Các file được khai báo trong .gitignore sẽ không được add vào Git
```


---

# ⚡ JavaScript Basic

## 1. Convention (Quy tắc đặt tên code)

### 1.1 snake_case
- 👉 Các từ viết thường, nối với nhau bằng dấu `_`

**Ví dụ:**
```bash
thu_qua
user_name
```

### 1.2 kebab-case
- 👉 Các từ viết thường, nối với nhau bằng dấu `-`

**Ví dụ:**
```bash
thu-qua
user-name
```

### 1.3 camelCase
- 👉 Viết thường chữ đầu, các từ sau viết hoa chữ cái đầu

**Ví dụ:**
```bash
thuQua
userName
```

### 1.4 PascalCase
- 👉 Mỗi từ đều viết hoa chữ cái đầu

**Ví dụ:**
```bash
ThuQua
UserName
```

### 1.5 SCREAMING_SNAKE_CASE
- 👉 Tất cả chữ viết hoa
- 👉 Các từ nối với nhau bằng dấu `_`

**Ví dụ:**
```bash
THU_QUA
USER_NAME
```

## 🎯 Mục đích sử dụng Conventions

| Convention   | Mục đích sử dụng        |
|-------------|-------------------------|
| snake_case  | Tạm thời không dùng     |
| kebab-case  | Đặt tên file, folder    |
| camelCase   | Đặt tên biến, hàm       |
| PascalCase  | Đặt tên class           |

## 2. Javascript

### 2.1 Console.log

#### Sử dụng nháy đơn, nháy kép
```bash
console.log('Toi la Thu Qua')
console.log("Toi la Thu Qua")
```
#### Sử dụng kèm variable

```bash
let name = "Thu Qua"
console.log(`Toi la ${name}`)
```
#### Sử dụng cộng chuỗi
```
console.log("Toi ten la" + name + " ")
```

### 2.2 Object
#### Cú pháp
```bash
const myInfo = {
    "name": "Thu Qua",
    address: "Da Nang", // nên dùng
    'favoriteNumber': 30,
    "address 2": "Quang Nam"
};
```
#### Truy xuất giá trị bên trong object
- Sử dụng dấu chấm: Nếu key không chứa dấu chấm, ký tự đặc biệt
- Sử dụng dấu ngoặc vuông: Nếu key chứa dấu chấm, ký tự đặc biệt

```bash
console.log(myInfo.name);
console.log(myInfo.["name"]);
```

### 2.3 Array

- Tạo mảng

    - Khai báo
    - Sử dụng

- Truy suất mảng

    - Độ dài mảng: lenght
    - Lấy phần tử theo index: [0], [1]

### 2.4 Function
```bash
Function = Hàm
Đoạn code dùng đi dùng lại
```

#### Ví dụ
```bash
const dai = 5;
const rong = 10;

function tinhDienTich (dai, rong) {
const dienTich = dai * rong;
return dienTich;
}

console.log(tinhDienTich(5,10));
console.log(tinhDienTich(20,5));
```


