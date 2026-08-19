1. Typescript
- Là superset của Javascript
- có nhiều ưu điểm so với Javascript
    Hệ thống kiểu dữ liệu
    Phát hiện lỗi sớm
    Interface & type alias
    OOP feature
    Generic
# Define type
- Trong TS, có thể định nghĩa kiểu dữ liệu thông qua type hoặc interface

## type

type <type_name> = {
    prop1: dataType1;
    prop2: dataType2;
}

type User = {
    name: string;
    age: number;
}

const user1: User = {
    name: "Phong",
    age: 18,
}

## interface

interface User {
    name: string;
    age: number;
}

const user1: User = {
    name: "Phong",
    age: 18
}

# class
- dùng để mô hình hóa một đối tượng: có các thuộc tính (property) và hành vi (methods)

# extends: kế thừa
- cho phép 1 class thừa hưởng các thuộc tính và phương thức từ class khác
- Hàm super() = gọi tới hàm tạo của class cha

2. POM
- là một design pattern - cấu trúc code sạch, dễ bảo trì

POM = class với:
- Properties: các thành phần của trang web
- Methods: các hành động trên trang web