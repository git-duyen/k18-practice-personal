## Typescript: 
- Mở rộng của Javascript
- Syntax có quy tắc hơn, biến phải có type (không freestyle như javascript) => giảm bớt lỗi lại
- Có interface and type, OOP features, generic,...
- Biên dịch sang typescript: 
npm install -d typescript
npm tsc <file_path>
node <file_path>
## Type and Interface:
type <type_name> = {
    prop1: dataType1;
    prop2: dataType2;
}
interface <interface_name> {
    prop1: dataType1;
    prop2: dataType2;    
}

** Khác nhau giữa Type và Interface:
Giống nhau: dùng định nghĩa cấu trúc dữ liệu
Khác nhau:
## 1. Interface có thể mở rộng (Declaration Merging)
interface Animal {
    name: string;
}
interface Animal {
    age: number;
}

//Kết quả: Animal có cả name và age
const dog : Animal = {
    name: "Buddy".
    age: 3
};

///Type trả lỗi
type Anmial = {name: string};
type Animal = {age: number}; // Lỗi: Duplicate identifier

## 2. Type linh hoạt hơn với Union & Intersection 
// Union Types
type Status = "active" | "inactive" | "pending";
type ID = string | number;

// Intersection
type Person = {name: string};
type Employee = {salary: number};
type Worker = Person & Employee;// {name: string; salary: number}


//Interface phải dùng extends:
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}

## 3. Type có thể đặt tên cho Primitives, Union, Tuple
//Primitives
type Name = string;
type Age = number;

//Tuple
type Point = [number, number];

//Union
type Result = Success | Error;
## 4. Type có thể dùng Mapped Types
type Readonly <T> = {
    readonly [P in keyof T]: T[P];
};

type User = {
    name: string;
    age: number;
};

type ReadonlyUser = Readonly<Users>;
// {readonly name: string; readonly age: number}



## 5. Interface extends nhiều interface dễ đọc hơn
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

//Rõ ràng, dễ đọc
interface ColorfulCircle extends Colorful, Circle {}

//Type cũng làm dc nhưng dùng &
type ColorfulCircle = Colorful & Circle;


## Class:
- Dùng để mô hình hóa một đối tượng
- Thuộc tính: (property) các đặc tính 
- Hành vi: (methods)  các hành động đối tượng có thể có

## Extend:
- Là cơ chế kế thừa, cho phép 1 class thừa hưởng các thuộc tính và phương thức từ class cha.
- Hàm "super()": gọi tới hàm tạo của class cha

## POM:
- POM là 1 design pattern - một cấu trúc code "sạch đẹp, dễ bảo trì".
- POM = class với:
    Properties: các thành phần của trang web
    Methods: các hành động trên trang web (bắt đầu bằng động từ)
- Lưu ý: ko có 1 chuẩn chung nào cho POM
Dựa trên: 
 1. Framework
 2. Ngôn ngữ
 3. Author
 4. Sở thích    
 5. Kinh nghiệm
