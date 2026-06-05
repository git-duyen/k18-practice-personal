## Bài 3: Git & Javascript continue
### Phần 1: Git 
#### 1. Undo trong git
- Từ staging về working directory
   - git restore -staged <file_name>
   - git restore -staged .
- Từ repository về working directory
   - git reset HEAD~ <số commit>
   - git reset HEAD~2

#### 2. Nhánh
Nhánh được tạo ra sẽ copy y nguyên nhánh hiện tại. Những dữ liệu tạo mới ở nhánh mới sẽ không có ở nhánh cũ.
- Tạo nhánh: git branch <ten_nhanh>
- Kiểm tra xem đang có những nhánh nào và đang đứng ở đâu: git branch
- Chuyển sang nhánh khác: git checkout <ten_nhanh>
- Vừa tạo vừa chuyển sang nhánh mới: git checkout -b <ten_nhanh_moi>
- Xoá nhánh: git branch -D <tên_nhánh> (phải đứng ở nhánh khác để xoá nhánh)

*Lưu ý: Luôn pull code mới khi tạo nhánh*

#### 3. Git ignore
File chứa danh sách các file không được quản lý bởi git
### Phần 2: Javascript
#### 1. Convention
- snake_case: do_thi_van
- kebab-case: do-thi-van
- camelCase: doThiVan
- PascalCase: DoThiVan
- UPPER_CASE: DO_THI_VAN
#### 2. Console.log
Là công cụ quan trọng giúp debug và theo dõi code. Sử dụng kèm với variable
- console.log('Tôi là A');
- console.log("Tôi là A");
- console.log(`Tôi là ${name}`);
- console.log("Tôi là" + name+);
#### 3. Object
- Là kiểu dữ liệu quan trọng nhất của javascript
- object = đối tượng, dùng lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc 1 hằng số.
**Cú pháp:**
```
<key>: giống quy tắc đặt tên biến
<value>: có kiểu giống biến hoặc 1 object khác.
```
Ví dụ:
```
let user = {
   name = "van";
   age = 32;
}
```
#### 4. Array - Mảng
Lưu trữ danh sách các phần từ trong cùng 1 biến.
```
let arr = [1,5,6,7]
console.log(arr[3]); // kết quả ra 6
console.log(arr.length); // kết quả ra 4
```
#### 5. Function - Hàm
Là đoạn code được đặt tên để dùng đi dùng lại.
```
function kiemTraChanLe(number){
    if(number%2===0){
        return "chan";
    }
    if(number%2!==0){
        return "le";
    }
}
console.log(kiemTraChanLe(18));
console.log(kiemTraChanLe(19));
```