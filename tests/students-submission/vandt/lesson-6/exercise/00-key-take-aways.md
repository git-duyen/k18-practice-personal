## Phần 1: Git
Có 2 loại repo: public và private
### Các câu lệnh git
#### 1. Git clone
```
git clone <url> 
```
=>  lấy toàn bộ thư mục trên remote về máy local

```
git clone <url> tên thư mục mới
```
=>  lấy toàn bộ thư mục remote về máy local và đặt tên theo tên mới

#### 2. Git push
```
git push origin <tên nhánh>
```
=> Đẩy code lên origin (định danh kho lưu trữ từ xa - remote repository) với nhánh tương ứng

VD: git push personal ten nhanh

#### 3. Git pull

```
git pull <remote_name> <branch_name>

VD: git pull origin main
```
=> Là hành động lấy code từ một nhanh cụ thể về nhánh local

#### 3. Git stash
Là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm
```
git stash save
```
Stash giúp chuyển đổi qua nhánh khác dễ dàng hơn. Khi muốn lấy lại code đã lưu tạm
```
git stash pop
```

### Git: merge request
Gộp code từ 1 nhánh sang nhánh còn lại

### git convention
Đặt tên nhánh
```
<type>/<short-description>-<name>
```
type:
- feat: tính năng mới
- fix: sửa lỗi
- conf: thay đổi cấu hình (config)
- chore: các thay đổi lặt vặt: xóa file không dùng, đổi tên file...

## Phần 2: Javascript -> Class

- Class là một bản thiết kế để tạo ra các object có cùng đặc điểm và hành vi.
- Class Giúp bạn:
    - tạo nhiều object cùng kiểu dễ dàng
    - Tổ chức code gọn gàng, rõ ràng
    - tái sử dụng code hiệu quả
- Các thành phần chính:
    - Constructor: khởi tạo object
    - thuộc tính: lưu trữ dữ liệu (this.property)
    - Phương thức: định nghĩa hành vi (functions) -> nó có thể làm gì

```
class Student {
   //thuoc tinh/ property
   name;
   role;


   //ham khoi tao/ constructor
   constructor(name, role){
      this.name = name;
      this.role = role;
   }


   // phuong thuc / method
   sayMyName(){
      console.log(`My name is ${this.name}`)
   };


   saySomeThing(message){
      console.log(`Say somthing: ${message}`);
      return `Say somthing: ${message}`;
   };
   
};

const nganNguyen = new Student("Ngan Nguyen", "student");
const hienhoa = new Student("Hien Hoa", "student");
console.log(nganNguyen);
console.log(nganNguyen.name, nganNguyen.role);
nganNguyen.sayMyName();
hienhoa.saySomeThing("K18 Playwright");
const message = hienhoa.saySomeThing("K18 Playwright");
console.log(message);
```

