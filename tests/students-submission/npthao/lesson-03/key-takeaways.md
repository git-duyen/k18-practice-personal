# Git - undo
## Commit message
git commit --amend -m "message" : sửa msg của commit 

## File staging to working directory
git restore --staged <file_name> : restore file cu the
git restore --staged . : restore tat ca file

## File repository to Working directory
git reset HEAD ~1 : reset 1 commit
git reset HEAD ~N : reset n commit

# Git -branching
## Git: pull code
git pull origin main : pull code từ server về

git branch: xem danh sách nhánh
git branch <tên_branch>: tạo nhánh mới
git checkout <tên_branch>: chuyển sang nhánh mới
git checkout -b <tên>: tạo và chuyển sang nhánh mới
git branch -D <tên_branch> : xóa branch - Note: đứng ở nhánh khác trước khi xóa

Note: Luôn pull code về trước khi tạo nhánh mới

# Git - ignore file
- File .gitignore: file cấu hình, chỉ định những file và thư mục nào không được theo dõi bởi Git
- file không cần thiết đưa vào git repository: file tạm thời (.DS_Store, Thumbs.db) ; thư mục dependencies (node_modules/ , vendor/ ) ; File build và artifacts ; File cấu hình cá nhân ; File nhạy cảm ;  File log và DB local
## Cú pháp file:
abcd.txt : ignore file cụ thể
*.log : ignore tất cả file có extension .log
node_modules/ : ignore thư mục
**/*tmp : ignore file trong mọi thư mục con
!abcd.log : không ignore file này
/TODO : ignore file chỉ ở thư mục gốc
doc/**/*.txt : ignore tất cả file txt trong thư mục doc/

# Javascript - convention
- snake_case
- kebab-case
- camelCase
- PascalCase

## console.log with ' and "

# Object : data type, lưu dữ liệu dạng key-value
key: value
- key: giống quy tắc đặt tên biến
- value: có kiểu giống biến hoặc 1 object khác

# Logical operator
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề

# Array : mảng
const diem1 = 3;
const diem2 =7;
const diem3 = 9;

const diem = [diem1, diem2, diem3];

console.log(diem[2]);

const arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
console.log(arr.length);

# Function: hàm
function <nameFunction>(){
    // code
}

    function kiemTraChanLe(number){
    if (number % 2 ===0){
        return "Chan";
    }
    if (number % 2 === 1) {
        return "Le";
    }
}
console.log(kiemTraChanLe(2));
console.log(kiemTraChanLe(3));

