### 1. Git
Undo:
- Commit msg: `git commit --amend -m"msg"`
- Staging -> Working: `git restore --staged <file name>` / `git restore --staged .`
- Repository -> Staging: `git reset HEAD~ <số commit>`

Note: 
- Commit đầu tiên không thể bị reset
- Nếu muốn reset -> xóa thư mục .git đi rồi init lại

### 2. Git- Branching
- Lấy code từ server về: `git pull origin main`
- Xem danh sách nhánh: `git branch`
- Tạo nhánh mới: `git branch <tên nhánh>` (nhánh mới copy giống hệt nhánh hiện tại)
- Chuyển sang nhánh mới: `git checkout <tên_branch>`
- Vừa tạo, vừa chuyển sang nhánh mới: `git checkout -b <tên nhánh>` (hay dùng nhất)
- Xóa branch: `git branch -D <tên nhánh>` (cần đứng ở nhánh khác trước khi xóa)

Note: **Luôn pull code về trước khi tạo nhánh mới**

### 3. Git- Ignore file
Cú pháp file ignore
- Dòng bắt đầu bằng # là ghi chú
- Ignore file cụ thể: `env.txt`
- Ignore tất cả file có extension .log: `*.log`
- Ignore thư mục: `node_modules/`
- **KHÔNG** ignore file này: `!file1.log`

### 4. Javascript- Convention
- snake_case: tạm thời k dùng trong lớp (file_1)
- kebab-case: đặt tên file và folder (file-1)
- camelCase: đặt tên biến, hàm (chieuCao)
- PascalCase: đặt tên class

### 5. Javascript- Dùng console.log nâng cao
```
let myName = "Linh";

console.log(`Toi la ${myName}`);
```

### 6. Javascript- Object
```
const myInfo = {
    name: "Linh",
    age: 20,
    address: "Ha Noi",
    "my address": "Ha Noi",
    job: "Tester",
    isLoveCoding: true,
    codingClass: {
        name: "Playwright",
        level: "Beginer to Junior"
    }
};

console.log(myInfo.name);
console.log(myInfo.codingClass.name);
```

