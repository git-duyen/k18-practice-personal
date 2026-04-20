# 1. Typescript và Javascript
- Typescript là superset của Javascript
- Code Typescript được biên dịch ra Javascript trước khi chạy
- Ưu điểm của Typescript so với Javascript:
    - Có hệ thống kiểu dữ liệu
    - Phát hiện lỗi sớm
    - Interface và type alias
    - OOP features
    - Generic
```javascript
//Biên dịch file ts thành file js
npx tsc <file_path>
//Chạy bằng lệnh
node <file_path>
```

# 2. type và interface
```type``` và ```interface``` dùng để định nghĩa kiểu dữ liệu trong TypeScipt
```
//cú pháp type
type <type_name> = {
    prop1: dataType1;
    prop2: dataType2;
    ...
}

//cú pháp interface
interface <interface_name> {
    prop1: dataType1;
    prop2: dataType2;
    ...
}
```

# 3. class và extends
- class dùng để mô hình hóa một đối tượng: có các thuộc tính (property) và hành vi (method)
- extends: là cơ chế kế thừa cho phép một class thừa hưởng các thuộc tính và phương thức từ class cha
    - Hàm super(): gọi tới constructor của cha

# 4. POM
- POM (Page Oject Model) là một design pattern - một cấu trúc code sạch đẹp dễ bảo trì
- Hiểu đơn giản: POM = class với:
    - properties: các thành phần của trang web
    - methods: các hành động trên trang web (luôn bắt đầu bằng động từ)
    


