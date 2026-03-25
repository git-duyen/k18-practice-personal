# Git & Javascript Basic (Continue)

## Git

### Undo actions
`git restore --staged <file_name>` đưa file từ vùng staging về vùng working diretory

`git restore --staged .` đưa tất cả file từ vùng staging về vùng working diretory

`git reset HEAD~<so_commit>` trả về số commit tương ứng (theo kiểu stack)

### Branching model
`git branch` xem danh sách nhánh, `*` là nhánh đang dùng

`git branch <ten_branch>` tạo nhánh mới, nhánh mới "copy" giống hệt nhánh hiện tại

`git checkout <ten_branch>` chuyển sang nhánh khác

`git checkout -b <ten_branch>`**vừa tạo, vừa chuyển** sang nhánh mới

`git branch -D <ten_nhanh>` Xóa nhánh, đứng ở **nhánh khác** trước khi xóa

Ps/ **Luôn pull code** về **trước khi tạo nhanh mới**

### Git: ignore file
`.gitignore` là một file cấu hình quan trọng trong Git, chỉ định những file và thư mục nào sẽ **không được theo dõi (untracked)** với Git 

#### Lý do
vì trong dự án thường có một số file không cầnt thiết phải đưa vào Git repository như:
* File tạm thời
* Thư mục dependencies (node_modules/, vendor/)
* File build (build/, *.exe)
* File cấu hình cá nhân (IDE settings)
* File nhạy cảm (API keys, passwords)
* File log và database local

#### Cú pháp file .gitignore
`# comment` - ghi chú
 

## Javascript basic

### Convention - quy tắc
một số convention phổ biến:
*  snake_case: tạm thời không dùng, VD: `diep_thanh_tu`
*  kebab-case: đặt tên file và folder , VD:`diep-thanh-tu`

*  camelCase: đặt tên biến và hàm, VD: `diepThanhTu`

*  PascalCase: đặt tên class, VD: `DiepThanhTu`

### console log
* sử dụng kèm với variable 
```
let myName = "Linh";
console.log(`toi ten la ${myName}`);
```
* sử dụng cộng chuỗi

### Object
là kiểu dữ liệu quan trọng nhất trong Javascript, dùng để lưu dữ liệu dạng key-value

Trong đó:
* `<key>` giống quy tắc đặt tên biến
    * Luôn có kiểu **String**
* `<value>`
    * chứa giá trị
    * có thể là **String, Number, Boolen** hoặc là **một object khác**
* Truy xuất giá trị của object
    * `
console.log(myInfo.codingClass.name);` **dùng dấu chấm** nếu key không có chứa dấu cách, ký tự đặc biệt
    * `console.log(myInfo['codingClass']['name']);` **dùng dấu ngoặc vuông** nếu key có chứa dấu cách, ký tự đặc biệt

### Array
* tạo mảng
    * khai báo `const arr = [];`
    * sử dụng
* truy xuất mảng
    * độ dài mảng: `length`
    * lấy phần tử theo index: `[0],[1],[2]`

### Function
* Khai báo
```
function <nameFunction>(){
    //code
}
```
* Parameter
* Return value