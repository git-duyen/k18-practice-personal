# Lesson 10

## TypeScript

### 1. **TypeScript & JavaScript**

TypeScript is **superset** of JavaScript (nghĩa là mở rộng của JavaScript).
Code TypeScript cần được biên dịch qua JavaScript trước khi chạy:

>npm install -D typescript
>npx tsc <file_path>
> Chạy test: npx playwright test <file_path>

Dùng TypeScript vì có nhiều ưu điểm so với JavaScript:
- Có hệ thống kiểu dữ liệu
- Phát hiện lỗi sớm
- Interface & type alias
- OOP features
- Generic

### 2. **TypeScript: Define type**

Trong TypeScript, có thể định nghĩa "kiểu dữ liệu" thông qua `type` hoặc `interface`

```typescript
type User = {
    name: string; 
    age: number;
}
const user1: User = {
    name: "Phong",
    age: 18,
}
```
```typescript
interface User {
    name: string; 
    age: number;
}
const user1: User = {
    name: "Phong",
    age: 18,
}
```

#### **2.1. Khác biệt giữa `type` và `interface`:**

- Interface có thể mở rộng (Declaration Merging), khai báo lại. Ví dụ:
```typescript
interface Animal {
    name: string;
}
interface Animal {
    age: number;
}
//Kết quả: Animal có cả name và age
const dog: Animal = {
    name: "Buddy",
    age: 3
}
```
- Type không thể khai báo lại:
```typescript
type Animal = { name: string};
type Animal = { age: number}; //Lỗi Duplicate identifier
```

- Type linh hoạt hơn với Union & Intersection:
```typescript
//Union Types
type Status = "active" | "inactive" | "pending";
const myStatus: Status = "pending";

type ID = string |number
const myId: ID = 100;
const hisId: ID = "100";
const herId: ID = true; //sẽ lỗi
// Intersection
type Person = {name: string};
type Employee = {salary: number};
type Worker = Person & Employee; // dấu & kết hợp các thuộc tính {name: string; salary: number}
```
- Interface muốn kết hợp thì có thể dùng `extends`
- Type có thể đặt tên cho Primitives, Union, Tuple
```typescript
// Primitives
type Name = string;
type Age = number;
const myName: Name = "Nhung";

// Tuple
type Point = [number, number]; //ví dụ là toạ độ

// Union
type Result = Success | Error;
// Interface không làm được điều này
```
- Type có thể dùng Mapped Types
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
type User = {
    name: string;
    age: number;
};
type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number }
```
- Interface extends nhiều interface dễ đọc hơn
```typescript
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
// Rõ ràng, dễ đọc 
interface ColorfulCircle extends Colorful, Circle {}

//Type cũng làm được nhưng dùng &
type ColorfulCircle = Colorful & Circle; // Khuyên dùng
``` 
#### 2.2. Khi nào dùng gì?

Dùng **Interface cho objects** (đặt biệt là public API):
- Định nghĩa object/class structure
- Cần Declaration Merging (thư viện, API)
- Làm việc với OOP (class implements interface)
```typescript
interface Shape {
    area(): number;
}
class Circle implements Shape {
    constructor(private radius: number) {}

    area () {
        return Math.PI * this.radius ** 2;
    }
}
```

Dùng **Type cho mọi thứ còn lại:**
- Cần Union hoặc Intersection types
- Làm việc với primitives, tuples
- Cần Mapped Types, Conditional Types
- Muốn type chính xác, không merge
```typescript
type ApiResponse<T> =
    | { success: true; data: T } 
    | { success: false; error: string };
type UserResponse = ApiResponse<User>;
```
> Lưu ý: Để nhất quán trong dự án, nên chọn 1 convention và giữ nguyên trong toàn bộ code base

### 3. Extends

Extends là cơ chế kế thừa (inheritance) cho phép một class "thừa hưởng" các thuộc tính và phương thức từ class cha

```typescript
//Hàm tạo: 
export class SimpleClass {
    constructor() {
        console.log("Hello Playwright");
    }
}
//Sử dụng:
const instance = new SimpleClass();
```
> Lưu ý: Từ khóa `super ()` dùng để gọi hàm tạo của hàm cha. Khi kế thừa luôn cần gọi `super ()` trong hàm


## Page Object Model (POM)

### 1. POM
POM = class với 2 thành phần chính:
- Properties: các thành phần của trang web
- Methods: các hành động trên trang web; luôn bắt đầu bởi động từ

Hàm tạo của POM thường có thuộc tính page. Ta sẽ dùng page này để tương tác với trang web.
Thuộc tính page này nếu đã xuất hiện trong POM cha rồi thì bạn không cần định nghĩa ở POM con nữa.

### 2. Export
Từ khoá `Export` giúp xuất 1 biến, 1 hằng số ở 1 file và import dùng ở file khác. Cách dùng:

Tại file login-page.ts
>export class LoginPage {}

Tại file test.spec.ts
>import { LoginPage } from './page/login-page';