# Page Object Model (POM)
### 1. TypeScript & JavaScript
#### So sánh

Trong Playwright, có thể sử dụng cả **TypeScript** và **JavaScript**.

👉 Nên sử dụng **TypeScript** vì có nhiều ưu điểm hơn JavaScript:

- Có hệ thống kiểu dữ liệu (Type System)
- Phát hiện lỗi sớm
- Hỗ trợ `interface` và `type alias`
- Hỗ trợ OOP
- Hỗ trợ Generic
- Code rõ ràng và dễ maintain

### 2. TypeScript

#### Define Type

Trong TypeScript, có thể định nghĩa **kiểu dữ liệu** thông qua:

- `type`
- `interface`

Việc định nghĩa kiểu dữ liệu giúp code:

- Rõ ràng hơn
- Dễ đọc hơn
- Dễ phát hiện lỗi
- Dễ maintain

#### `type`

##### Cú pháp

```typescript
type TypeName = {
  prop1: dataType1;
  prop2: dataType2;
};
```

##### Ví dụ

```typescript
type User = {
  name: string;
  age: number;
  email: string;
};
```
#### `interface`

##### Cú pháp

```typescript
interface TypeName {
  prop1: dataType1;
  prop2: dataType2;
}
```

> ⚠️ interface không sử dụng dấu =

##### Ví dụ

```typescript
interface User {
  name: string;
  age: number;
  email: string;
};
```

#### 🔄 `type` vs `interface`

| Đặc điểm | `type` | `interface` |
|:--------:|:------:|:-----------:|
| Định nghĩa object | ✅ | ✅ |
| Dùng `=` | ✅ | ❌ |
| Có thể mở rộng | ✅ | ✅ |
| Dùng trong OOP | ✅ | ✅ |

> 💡 Việc sử dụng `type` hay `interface` có thể phụ thuộc vào convention của project.

### 3. TypeScript Class

#### Class là gì?

**Class** dùng để mô hình hóa một đối tượng.

**Một class thường bao gồm:**

- **Properties** → Các đặc tính của đối tượng
- **Methods** → Các hành động mà đối tượng có thể thực hiện

#### Property

Property là các **đặc tính / thuộc tính** của object.

```typescript
class User {
  name: string;
  age: number;
}
```
Trong ví dụ trên:
- name là property
- age là property

#### Method
Method là các **hành động / chức năng** mà object có thể thực hiện.

```TypeScript
class User {
  introduce() {
    return 'Hello';
  }
}
```
> 👉 introduce() là một method.

### 4. Extends
#### Extends là gì?

`extends` là cơ chế kế thừa trong OOP.

- Cho phép một class **thừa hưởng properties và methods** từ class cha.
- Hàm tạo (**constructor**) là hàm sẽ chạy khi bạn khởi tạo một object.

##### Ví dụ
Hàm tạo
```typescript
export class SimpleClass {
constructor () {
console.log("Hello Playwright");
  }
}
```
**Sử dụng:**
```typescript
const instance = new SimpleClass();
```
Khi khởi tạo một đối tượng mới từ class `SimpleClass`, hàm **console.log** sẽ tự được chạy.
- Từ khóa `super ()` dùng để gọi hàm tạo của hàm cha. Khi kế thừa, bạn luôn cần gọi
`super()` trong hàm cha.

### 5. Export
Từ khóa `export` giúp chúng ta có thể xuất 1 biến, 1 hằng số ở 1 file và nhập (**import**) dùng ở file khác.
#### Ví dụ
```typescript
export class LoginPage {
  // Some code
}
```
Tại file `test. spec.ts`
```typescript 
import { LoginPage } from './page/login-page'; 

//Some code
```
- **Cấu trúc thư mục**
```text
├── test.spec.ts
└── page
    └── login-page.ts
```

- **from** `'./page/login-page';` là đường dẫn để đi tới `login-page` cần import.
Do `login-page` này nằm trong thư mục page nên cần định nghĩa vào trong import.

- Ta có thể viết **from** `'./page/login-page.ts';` hoặc bỏ đuôi .ts trong
phần import: **from** `'./page/login-page' ;` vì Javascript sẽ tự động thêm đuôi
.ts khi tìm kiếm

- Để import file nằm ở thư mục bên ngoài, ta dùng .. để đi ra folder cha của folder hiện tại.

VD: `'../../login-page.ts'`

### 5. Page Object Model (POM)
#### POM là gì?
- **POM (Page Object Model)** là một design pattern thường được sử dụng trong automation testing.

- POM mô hình hóa mỗi page hoặc component thành một **class**.

- Một POM thường bao gồm:

```
Properties
    ↓
Các thành phần của trang web

Methods
    ↓
Các hành động trên trang web
```

#### Properties trong POM
- Properties thường dùng để lưu **Locator** của các phần tử trên trang.

##### Ví dụ
```typescript
class LoginPage {
  usernameInput;
  passwordInput;
  loginButton;
}
```

👉 Các properties đại diện cho:

- Username input
- Password input
- Login button

##### 🔹 Methods trong POM
- Methods đại diện cho **các hành động** trên trang.
```typescript
class LoginPage {
  async login(username: string, password: string) {
    // Login action
  }
}
```
👉 login() là method đại diện cho hành động đăng nhập.

### 6. Cấu trúc POM cơ bản
```typescript
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```
### 7. Tiêu chuẩn của POM
> ⚠️ Không có một tiêu chuẩn duy nhất cho POM.

Cách xây dựng POM có thể phụ thuộc vào:

- Framework
- Ngôn ngữ
- Author
- Sở thích
- Kinh nghiệm
- Convention của project

##### Một POM tốt nên:

- Dễ đọc
- Dễ sử dụng
- Dễ maintain
- Có khả năng tái sử dụng
- Tách biệt test logic và page logic

---

## 🎯 Summary

| Khái niệm | Ý nghĩa |
|:---------:|---------|
| **TypeScript** | JavaScript có thêm hệ thống kiểu dữ liệu |
| **type** | Định nghĩa kiểu dữ liệu |
| **interface** | Định nghĩa cấu trúc dữ liệu |
| **Class** | Mô hình hóa một đối tượng |
| **Property** | Đặc tính của object |
| **Method** | Hành động của object |
| **extends** | Kế thừa class |
| **POM** | Mô hình hóa page/component thành class |
| **Locator** | Đại diện cho phần tử trên trang |
| **Method trong POM** | Đại diện cho hành động trên trang |

