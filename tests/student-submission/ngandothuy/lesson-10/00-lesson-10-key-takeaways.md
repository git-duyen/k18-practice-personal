## Typescript vs Javascript
- Typescript là superset của Javascript (nghĩa là mở rộng của Javascript)
- Javascript: nhiều lỗi => typescript ra đời để giảm lỗi của JS

```
npm install -d typescript

// biên dịch file ts thành js
npx tsc <file_path>

// chạy file ts được biên dịch bằng 
node <file_path>
```

- Dùng TS có nhiều ưu điểm so với JS
     - Có hệ thống kiểu dữ liệu
     - Phát hiện lỗi sớm
     - Interface vs type alias
     - OOP feature
     - Generic

- Trong TS, có thể định nghĩa kiểu dữ liệu thông qua type hoặc interface
     - **type**
```typescript
type <type_name> = {
     prop1: dataType1;
     prop2: dataType2;
     ...
}

// ví dụ

type User = {
     name: string;
     age: number;
}

const user1 = {
     name: 'Ngan',
     age: 22,
}
```

- Interface:
     - interface không có dấu =

```typescript
interface User {
     name: string;
     age: number;
}

const user1: User = {
     name: 'Ngan',
     age: 22,
}
```
- Sự khác biệt giữa type vs interface
     - Giống nhau:
          - đều được dùng để định nghĩa cấu trúc dữ liệu
     - Khác nhau:
          - interface có thể mở rộng (khai báo lại) # type thì không thể khai báo lại.
          - type thì linh hoạt hơn với Union & Intersection 
          - type có thể đặt tên cho Primitives, Union, Tuple
          - type có thể dùng mapped type

- Dùng interface cho objects ( đặc biệt là public API)
Type cho mọi thứ còn lại (union, tuples...)
 => recommend nên dùng type => chọn 1 convention và giữ nguyên trong toàn bộ codebase


### Class
- Dùng để mô hình hóa 1 object: có các thuộc tính (property) và hành vi (methods)
     - property: các đặc tính
     - methods: các hành động mà đối tượng có thể có

### Extends = kế thừa
- Là cơ chế kế thừa (inheritance) cho phép 1 class "thừa hưởng" các thuộc tính và phương thức từ class
- Hàm tạo (constructor) là hàm sẽ chạy khi bạn khởi tạo 1 object

### Export
-  Từ khóa **export** giúp có thể xuất 1 biến, 1 hằng số ở 1 file và nhập (**import**) dùng ở 1 file khác

## POM
- Là 1 design pattern - một cấu trúc code "sạch đẹp, dễ bảo trì"
- POM = class với:
     - properties: các thành phần của trang web
     - methods: các hành động trên trang web
- Hàm tạo của POM thường có 1 thuộc tính **page**. Ta sẽ dùng page này để tương tác với trang web.
     - Thuộc tính page này nếu đã xuất hiện trong POM cha rồi thì không cần định nghĩa ở POM con nữa.

- Tiêu chuẩn của POM: không có 1 chuẩn chung nào cho POM
Dựa trên:
     - framework
     - ngôn ngữ
     - author...