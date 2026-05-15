# Page Object Model (POM)
Là một concept quan trọng trong Playwright
có cấu trúc khoa học hơn, dễ maintain hơn

## TypeScript: so sánh với JavaScript
**TypeScript** là superset (mở rộng) của **JavaScript**
### JavaScript "dễ dãi" quá

=> nhiều lỗi

=> TypeScript ra đời để "khó tính" hơn

=> giảm bớt lỗi
### Ưu điểm của TypeScript so với JavaScript
* có hệ thống kiểu dữ liệu
* phát hiện lỗi sớm
### Key takeaways
Chúng ta sẽ dùng **TypeScript**

Dùng lệnh `npx tsc <file_path>` để biên dịch file ts thành file js

Sau đó chạy bằng lệnh `node <file_path>`
### Define type
Trong TypeScript, có thể định nghĩa "kiểu dữ liệu" thông qua *type* hoặc *interface*

### so sánh Type & Interface

## TypeScript: kế thừa
**extends = kế thừa**, là cơ chế **kế thừa**(inheritance) cho phép một class "thừa hưởng" các thuộc tính và phương thức từ class cha

## Page Object Model

* POM = class với:
    * **Properties**: các thành phần của trang web -> luôn bắt đầu bằng danh từ
    * **Methods**: các hành động trên trang web -> luôn bắt đầu bằng động từ
* POM giúp code tổ chức gọn gàng hơn, dễ bảo trì hơn
### Một số ưu điểm khi sử dụng POM
* Khi không sử dụng POM
    * Locators bị lặp lại nhiều nơi
    * Nếu UI thay đổi, phải sửa ở nhiều test
    * Code dài dòng, khó đọc
    * Khó maintain khi có nhiều tests
    * Không tái sử dụng được code

* Khi sử dụng POM
    * Dễ bảo trì (maintain)
    * Code dễ đọc hơn
    * Tái sử dụng code (Reusability)

### Tiêu chuẩn của POM
* Lưu ý: Không có 1 chuẩn chung nào cho POM
Dựa trên:
* Framework
* Ngôn ngữ
* Author
* Sở thích
* Kinh nghiệm

## Type & Interface trong TypeScript
### Giống nhau
```
//Interface
interface User{
    name: string;
    age: number;
}

//Type
type User = {
    name: string;
    age: number;
};
```
### Khác biệt chính
1. Interface có thể mở rộng
```
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

//Kết quả: Animal có cả name và age
const dog: Animal = {
    name: "Buddy",
    age: 3,
}

//Type không thể khai báo lại
type Animal = {name: string};
type Animal = {age: number} //Lỗi: Duplicate identifier
```

2. Type linh hoạt hơn với Union và Intersection
```
//Union Types
type Status = "active" | "inactive" | "pending";
type ID = string | number;

//Intersection
type Person = { name: string };
type Employee = { salary: number };
type Worker = Person & Employee; //{ name: string, salary: number}
```

3. Type có thể đặt tên cho Primitives, Union, Tuple
```
//Primitives
type Name = string;
type Age = number;

//Tuple
type Point = [number, number];

//Union
type Result = Success | Error;

// Interface không làm được điều này
```

4. Type có thể dùng Mapped Types
```
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type User = {
    name: string;
    age: number;
};

type ReadonlyUser = Readonly<User>;
//{ readonly name: string, readonly age: number }
```

5. Interface extends nhiều interface dễ đọc hơn
```
interface Colorful{
    color: string;
}

interface Circle{
    radius: number;
}

//rõ ràng, dễ đọc
interface ColorfulCircle extends Colorful, Circle {}

// Type cũng làm được nhưng dùng &
type ColorfulCircle = Colorful & Circle;
```

### Khi nào dùng gì?

#### Dùng Interface khi:
* Định nghĩa object/class structure
* Cần Declaration Merging (thư viện, API)
* Làm việc với OOP (class implement interface)
```
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number){}

    area(){
        return Math.PI * this.radius **2;
    }
}
```

#### Dùng Type khi:
* Cần Union hoặc Intersection types
* Làm việc với primitives, tuple
* Cần Mapped Types, Conditional Types
* Muốn type chính xác, không merge