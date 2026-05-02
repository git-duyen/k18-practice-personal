# Lesson 10 - Page Object Model (POM)

## Javascript & Typescript
- Typescript là superset (mở rộng) của Javascript
- Typescript cần được biên dịch qua Javacript trước khi chạy
    ```
    npm install -d typescript
    npx tsc <file_path>
    node <file_path>
    ``` 
- Typescript có nhiều ưu điểm so với Javascript:
1. Có hệ thống kiểu dữ liệu 
    //Javascript way
    const jsName = 'Duy';
    
    //Typescript way
    const tsName: string = 'Duy';
2. Phát hiện lỗi sớm
3. Interface & type alias
    //type có dấu '='
    type User = {
        name: string;
        age: number;
        class: string;
    }

    //interface không có dấu '='
    interface User1 {
        name: string;
        email: string;
        address: string;
    }

    // sử dụng thì dấu , chứ không phải dấu ; như type hay interface
    const student: User = {
        name: 'Duy',
        age: 18,
        class: "E101",
    }

    const student1: User1 = {
        name: "Duy",
        email: "abc@gmail.com",
        address: "HCMC",
    }

4. OOP feature
5. Generic

## Typescript 
### Class & Extends
1. `Class`: dùng để mô hình hóa 1 đối tượng
    - property: các đặc tính
    - methods: các hành động mà đối tượng có thể có
2. `Extend`: là cơ chế kế thừa (inheritance) cho phép 1 class "thừa hưởng" các thuộc tính và phương thức từ class cha
    - Hàm 'super()' = gọi tới hàm tạo của class cha, khi kế thừa bạn luôn cần gọi hàm super()
3. `constructor()`: là hàm sẽ chạy khi bạn khởi tạo 1 object 
    Hàm tạo:
    export class SimpleClass {
        constructor () {
            console.log ('Hello Playwright');
        }
    }
    
    Sử dụng:
    const instance = new SimpleClass ();
    Khi khởi tạo 1 đối tượng mới từ class SimpleClass, hàm console.log sẽ được tự chạy

4. `Export`: từ khóa export giúp chúng ta có thể xuất 1 biến, 1 hằng số ở 1 file và import dùng ở file khác

## POM (Page Object Model)
- Là 1 design pattern, giúp code cấu trúc gọn gàng, sạch đẹp, dễ bảo trì
POM = class với:
- `Properties`: các thành phần của trang web
- `Methods`: các hành động trên trang web 
    - Không có 1 chuẩn chung nào cho POM, nó còn tùy vào:
    - Framework
    - Ngôn ngữ
    - Author
    - Sở thích
    - Kinh nghiệm
    - Mỗi page là 1 class (có phương thức và thuộc tính riêng)

## So sánh Type và Interface 
### Giống: Cả 2 đều dùng để định nghĩa cấu trúc dữ liệu
```
interface User {
    name: string;
    age: number;
};

type User = {
    name: string;
    age: number;
};
```

### Khác: 
1. Interface có thể mở rộng kiểu dữ liệu cho cùng 1 object, Type thì không thể mở rộng
    ```
        // Interface có thể mở rộng kiểu dữ liệu
        interface Animal {
            name: string;
        }

        interface Animal {
            age: number;
        }

        // Kết quả Animal có cả name và age
        const dog: Animal = {
            name: "Buddy",
            age: 3
        };

        // Type không thể khai báo lại
        type Animal = {name: string};
        type Animal = {age: number}; // X Lỗi: Duplicate identifier 
    ```        

2. Type linh hoạt hơn với Union & Intersection
- Union Types: 
    - Biến Status chỉ nhận 1 trong những giá trị đã khai báo (chỉ nhận giá trị là `active` hoặc, `inactive` hoặc `pending`)
        type Status = "active" | "inactive" | "pending";
        type Environment = 'staging' | 'production' | 'dev';
    - Khai báo 1 biến có thể có nhiều kiểu dữ liệu khác nhau (biến này có thể vừa là `string`, vừa là `number`) 
        type ID = string | number;

    ```
        type ID = number | string;
        const myID: ID = 100;
        const hisID: ID = "abc";
        const herID: ID = true; // X Lỗi: Type 'boolean' is not assignable to type 'ID'
    ```

- Intersection: kết hợp thuộc tính của 2 objects
- Intersection trong `type` thì phải dùng từ khóa `&`
    type Person = {name: string};
    type Employee = {salary: number};
    type MyWorker = Person & Employee; 
    // `MyWorker` sẽ có kiểu dữ liệu của cả 2 object (`Person` `&` `Emplployee`) {name: string, salary: number}

    ```
        type Person = {name: string};
        type Employee = {salary: number};
        type MyWorker = Person & Employee;

        const daniel: MyWorker = {
            name: "Daniel",
            salary: 123,
        }
        console.log(`${daniel.name}`)
        console.log(`${daniel.salary}`)
    ```

- Intersection trong `interface` thì phải dùng từ khóa `extends`
    ```
        interface Person {
            name: string;
        }

        interface Employee extends Person {
            salary: number;
        }
    ```
    // `Employee` sẽ có 2 thuộc tính là {name: string, salary: number}

3. Type có thể đặt tên cho Primitives, Union, Tuple
- `Primitives`
    type Name = string;  --> Gán kiểu dữ liệu string thành 1 cái tên, sau này dễ nhớ, dễ maintain, bảo trì. Giả sử mình có 1 kiểu dữ liệu gì đó khá phức tạp, khó nhớ thì mình đặt cho nó 1 cái tên, và sau này khi mình đặt tên 1 biến có kiểu dữ liệu đó thì mình gọi tên nó cho dễ nhớ (kiểu như là 1 tên phụ, alias cho kiểu dữ liệu đó)
    type Age = number;
    ```
        const myName: Name = "Duy"
    ```
- `Tuple`: là kiểu dữ liệu mà object có nhiều kiểu dữ liệu trong mảng
    type Point = [number, number];
    // Ví dụ 1 điểm Point phải có 2 tham số là tọa độ [x,y]
- `Union`: 
    - Biến chỉ nhận 1 trong những giá trị đã khai báo
    - Khai báo 1 biến có thể có nhiều kiểu dữ liệu khác nhau
4. Type có thể dùng Mapped Types 
5. Interface `extends` nhiều interface dễ đọc hơn
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

// Rõ ràng dễ đọc
interface ColorfulCircle `extends` Colorful, Circle {}

// Type cũng làm được nhưng dùng `&`
Type ColorfulCircle = Colorful `&` Circle;

### Best Practice
- `Interface`: Dùng interface cho mọi thứ là Object (Page Objects, API Response, Test Data, Configuration), giúp dễ dàng extends khi cần
    - Định nghĩa các Page Object Models (POM)
    - Định nghĩa cấu trúc dữ liệu test (JSON data, User profile)
        // Dùng INTERFACE để định nghĩa cấu trúc Object chính
        interface TestConfig {
        browser: BrowserType; // Kết hợp Type vào Interface
        timeout: number;
        baseUrl: string;
        }

    - Định nghĩa các API response 
    - Dễ dàng mở rộng
        // Dùng INTERFACE để dễ dàng mở rộng (Extends)
        interface UserData {
            username: string;
            password: string;
        };

        interface AdminData extends UserData {
            role: 'superadmin' | 'moderator'; // Mix inline type
        };

- `Type`: dùng Type cho logic, các loại trạng thái, danh sách các lựa chọn (Union types) hoặc khi cần mix các kiểu dữ liệu lại với nhau mà interface không là được
    - Tạo các danh sách lựa chọn (Union types)
        // Dùng TYPE để định nghĩa các tập giá trị cố định (Union Types)
        type BrowserType = 'chromium' | 'firefox' | 'webkit';
        type TestStatus = 'passed' | 'failed' | 'skipped';

    - Đặt tên ngắn gọn cho các kiểu dữ liệu phức tạp 
--> Trong Automation thường chúng ta làm việc với các Object rất nhiều (field trong form, các thuộc tính của element) --> Vì thế `interface` thường chiếm (70-80%) codebase của các framework lớn

// 1. Định nghĩa các "nguyên liệu" (Type) - Thường để ở file types.ts
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Priority = 'High' | 'Medium' | 'Low';

// 2. Lồng Type vào trong Interface - Thường để ở các file định nghĩa Model/Page
interface APIRequest {
  url: string;
  method: HttpMethod; // Lồng type vào đây
  payload: object;
}

interface TestCase {
  title: string;
  priority: Priority; // Lồng type vào đây
  steps: string[];
}


