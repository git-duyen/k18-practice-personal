# JavaScript, TypeScript & POM trong Playwright

## 1. JavaScript vs TypeScript

## 📌 Concept

**TypeScript là superset của JavaScript**.

Hiểu đơn giản:

```jsx
JavaScript + Type System = TypeScript
```

JavaScript khá “dễ dãi”, ví dụ có thể truyền sai kiểu dữ liệu nhưng vẫn chạy đến khi lỗi xảy ra runtime.

TypeScript giúp code “khó tính hơn” bằng cách kiểm tra kiểu dữ liệu sớm, từ đó giảm lỗi trước khi chạy test.

---

## 🔍 Cách hoạt động

```jsx
TypeScript code
     ↓ compile / transpile
JavaScript code
     ↓ run by Node.js / Browser
```

File TypeScript `.ts` không chạy trực tiếp bởi browser. Nó cần được chuyển thành JavaScript.

Trong Playwright, bạn thường không cần tự compile vì Playwright hỗ trợ TypeScript sẵn.

---

## 💻 Ví dụ

### JavaScript

```jsx
function login(username, password) {
  console.log(username.toUpperCase());
}

login(123, "secret");
```

Code trên có thể lỗi khi chạy vì `123` không có method `toUpperCase()`.

### TypeScript

```tsx
function login(username: string, password: string) {
  console.log(username.toUpperCase());
}

login(123, "secret"); // Error ngay khi viết code
```

TypeScript báo lỗi sớm vì `username` phải là `string`.

---

## 📝 Syntax thường dùng

Cài TypeScript cho project:

```tsx
npm install -D typescript
```

Compile file TypeScript:

```tsx
npx tsc path/to/file.ts
```

Chạy test Playwright:

```tsx
npx playwright test
```

Chạy một file test cụ thể:

```tsx
npx playwright test tests/login.spec.ts
```

> Lưu ý: `npm install -d typescript` là sai. Đúng là `-D` hoặc `--save-dev`.
> 

---

## 🎯 Khi nào dùng TypeScript?

Nên dùng TypeScript khi:

- Viết automation test project lớn.
- Làm việc nhóm.
- Cần code dễ maintain.
- Dùng Page Object Model.
- Muốn IDE gợi ý tốt hơn.
- Muốn phát hiện lỗi sớm trước runtime.

Không cần quá lạm dụng type phức tạp nếu project nhỏ hoặc logic đơn giản.

---

## ✅ Best Practice

- Dùng TypeScript cho Playwright project thực tế.
- Khai báo type cho dữ liệu test, API response, Page Object.
- Không dùng `any` nếu không thật sự cần.
- Ưu tiên type rõ ràng cho function parameter và return value.
- Để Playwright xử lý TypeScript khi chạy test, không cần tự compile test file thủ công.

---

## 🧠 Key Takeaways

- TypeScript là JavaScript có thêm type system.
- TypeScript giúp phát hiện lỗi sớm.
- Playwright hỗ trợ TypeScript rất tốt.
- Dùng TypeScript giúp POM rõ ràng và dễ maintain hơn.
- Câu lệnh chạy test phổ biến: `npx playwright test`.

---

# 2. Define Type trong TypeScript

## 📌 Concept

Trong TypeScript, ta có thể định nghĩa kiểu dữ liệu bằng:

- `type`
- `interface`

Mục đích là giúp code rõ ràng hơn, dễ đọc hơn và tránh truyền sai dữ liệu.

---

## 💻 Ví dụ thực tế

Giả sử test login cần dữ liệu user:

```jsx
type LoginUser = {
  username: string;
  password: string;
};
```

Dùng trong test:

```tsx
const user: LoginUser = {
  username: "admin",
  password: "secret123",
};
```

Nếu thiếu field hoặc sai kiểu dữ liệu, TypeScript sẽ báo lỗi.

---

## 📝 Syntax

### `type`

```tsx
type User = {
  username: string;
  password: string;
};
```

### `interface`

```tsx
interface User {
  username: string;
  password: string;
}
```

> Lưu ý: `interface` không có dấu `=`.
> 

---

## 🔄 So sánh `type` và `interface`

## 📌 Concept

Trong TypeScript, cả `type` và `interface` đều có thể dùng để **định nghĩa cấu trúc dữ liệu**.

Ví dụ:

```tsx
type UserType = {
  username: string;
  password: string;
};

interface UserInterface {
  username: string;
  password: string;
}
```

Cả hai đều mô tả một object có `username` và `password`.

---

## ✅ Điểm giống nhau

Cả `type` và `interface` đều có thể dùng để:

- Định nghĩa shape của object.
- Giúp code rõ ràng hơn.
- Giúp TypeScript phát hiện lỗi sớm.
- Dùng cho function parameter.
- Dùng trong Playwright test data hoặc Page Object.

Ví dụ:

```tsx
type LoginUser = {
  username: string;
  password: string;
};

function login(user: LoginUser) {
  console.log(user.username);
}
```

```tsx
interface LoginUser {
  username: string;
  password: string;
}

function login(user: LoginUser) {
  console.log(user.username);
}
```

---

# 1. `interface` có thể declaration merging

## 📌 Concept

`interface` có thể được khai báo nhiều lần cùng tên. TypeScript sẽ tự động gộp các khai báo đó lại.

Đây gọi là **declaration merging**.

`type` thì không thể khai báo lại cùng tên.

---

## 💻 Ví dụ với `interface`

```tsx
interface User {
  username: string;
}

interface User {
  password: string;
}

const user: User = {
  username: "admin",
  password: "secret123",
};
```

TypeScript hiểu `User` cuối cùng là:

```tsx
interface User {
  username: string;
  password: string;
}
```

---

## 💻 Ví dụ với `type`

```tsx
type User = {
  username: string;
};

type User = {
  password: string;
};
```

Code trên sẽ lỗi vì `type` không thể khai báo lại cùng tên.

---

## 🎯 Khi nào dùng?

Dùng `interface` khi:

- Cần mở rộng object qua nhiều nơi.
- Làm việc với thư viện hoặc public API.
- Muốn hỗ trợ declaration merging.

Trong automation project, trường hợp này ít gặp, nhưng hữu ích khi định nghĩa object/class lớn.

---

# 2. `type` linh hoạt hơn với Union và Intersection

## 📌 Concept

`type` mạnh hơn khi cần kết hợp nhiều kiểu dữ liệu.

Đặc biệt là:

- `union type`: giá trị có thể là một trong nhiều kiểu.
- `intersection type`: kết hợp nhiều kiểu lại với nhau.

---

## 💻 Union Type

```tsx
type UserRole = "admin" | "editor" | "viewer";

const role: UserRole = "admin";
```

Ứng dụng trong Playwright:

```tsx
type BrowserName = "chromium" | "firefox" | "webkit";

function runTestOn(browserName: BrowserName) {
  console.log(`Run test on ${browserName}`);
}

runTestOn("chromium");
```

Nếu truyền sai:

```
runTestOn("chrome"); // Error
```

---

## 💻 Intersection Type

```tsx
type User = {
  username: string;
};

type Permission = {
  role: "admin" | "viewer";
};

type AdminUser = User & Permission;

const admin: AdminUser = {
  username: "admin",
  role: "admin",
};
```

---

## 🎯 Khi nào dùng?

Dùng `type` khi:

- Cần union.
- Cần intersection.
- Cần giới hạn giá trị cụ thể.
- Cần type chính xác cho test data.

---

# 3. `type` có thể đặt tên cho Primitive, Union, Tuple

## 📌 Concept

`type` không chỉ dùng cho object. Nó có thể đặt tên cho nhiều loại dữ liệu khác nhau.

`interface` chủ yếu dùng để mô tả object/class.

---

## 💻 Primitive

```tsx
type Username = string;

const username: Username = "admin";
```

---

## 💻 Union

```tsx
type TestStatus = "passed" | "failed" | "skipped";

const status: TestStatus = "passed";
```

Ứng dụng trong QA:

```tsx
function printResult(status: TestStatus) {
  console.log(`Test result: ${status}`);
}

printResult("failed");
```

---

## 💻 Tuple

```tsx
type LoginCredential = [string, string];

const credential: LoginCredential = ["admin", "secret123"];
```

Giải thích:

```
[string, string]
   ↓       ↓
username password
```

---

## 🎯 Khi nào dùng?

Dùng `type` khi cần đặt tên cho:

- `string`
- `number`
- union values
- tuple
- function type
- object kết hợp nhiều kiểu khác nhau

---

# 4. `type` dùng được Mapped Types

## 📌 Concept

**Mapped Type** cho phép tạo type mới bằng cách “map” qua các key của type cũ.

Nó rất hữu ích khi muốn biến toàn bộ field thành optional, readonly, hoặc thay đổi cấu trúc type.

---

## 💻 Ví dụ

```tsx
type User = {
  username: string;
  password: string;
};

type OptionalUser = {
  [Key in keyof User]?: User[Key];
};
```

`OptionalUser` tương đương:

```tsx
type OptionalUser = {
  username?: string;
  password?: string;
};
```

---

## 🧪 Liên hệ với Playwright

Giả sử khi update user, ta không bắt buộc truyền đủ field:

```tsx
type UserData = {
  username: string;
  password: string;
  role: "admin" | "viewer";
};

type UpdateUserData = {
  [Key in keyof UserData]?: UserData[Key];
};

const updateData: UpdateUserData = {
  role: "viewer",
};
```

Hoặc dùng utility type có sẵn:

```tsx
type UpdateUserData = Partial<UserData>;
```

---

## 🎯 Khi nào dùng?

Dùng mapped type khi:

- Muốn tạo type mới dựa trên type cũ.
- Muốn field optional.
- Muốn field readonly.
- Muốn tránh viết lại object type nhiều lần.

---

# 5. `interface extends` dễ đọc, nhưng `type` cũng làm được

## 📌 Concept

`interface` có cú pháp `extends` rất dễ đọc khi cần mở rộng nhiều interface.

`type` cũng làm được bằng intersection `&`.

---

## 💻 Với `interface`

```tsx
interface User {
  username: string;
}

interface Permission {
  role: "admin" | "viewer";
}

interface AdminUser extends User, Permission {
  isActive: boolean;
}

const admin: AdminUser = {
  username: "admin",
  role: "admin",
  isActive: true,
};
```

---

## 💻 Với `type`

```tsx
type User = {
  username: string;
};

type Permission = {
  role: "admin" | "viewer";
};

type AdminUser = User & Permission & {
  isActive: boolean;
};

const admin: AdminUser = {
  username: "admin",
  role: "admin",
  isActive: true,
};
```

Cả hai cách đều đúng.

---

## 🎯 Khi nào dùng?

Dùng `interface extends` khi:

- Đang mô tả object/class.
- Cần mở rộng nhiều object type.
- Muốn code dễ đọc trong OOP.

Dùng `type &` khi:

- Cần kết hợp object với union/intersection.
- Cần type linh hoạt hơn.
- Project convention đang ưu tiên `type`.

---

# Bảng so sánh nhanh

| Tiêu chí | `interface` | `type` |
| --- | --- | --- |
| Định nghĩa object | Có | Có |
| Declaration merging | Có | Không |
| Extend object | Dùng `extends` | Dùng `&` |
| Union type | Không phù hợp | Rất phù hợp |
| Intersection type | Có thể qua `extends` | Rất phù hợp với `&` |
| Primitive alias | Không | Có |
| Tuple | Không phù hợp | Có |
| Mapped type | Không trực tiếp | Có |
| OOP/class contract | Phù hợp | Dùng được nhưng ít tự nhiên hơn |
| Độ linh hoạt | Tốt cho object | Linh hoạt hơn |

---

# Khi nào dùng `interface`?

Dùng `interface` khi:

- Định nghĩa object hoặc class.
- Cần declaration merging.
- Làm việc với OOP.
- Thiết kế public API hoặc contract rõ ràng.
- Muốn dùng `extends` cho nhiều object type.

Ví dụ:

```
interface PageComponent {
  isVisible(): Promise<boolean>;
}

class HeaderComponent implements PageComponent {
  async isVisible(): Promise<boolean> {
    return true;
  }
}
```

---

# Khi nào dùng `type`?

Dùng `type` khi:

- Cần union type.
- Cần intersection type.
- Làm việc với primitive.
- Làm việc với tuple.
- Cần mapped type.
- Cần conditional type.
- Muốn type chính xác và không bị merge ngoài ý muốn.

Ví dụ:

```
type LoginResult = "success" | "invalid_credentials" | "locked_user";

type Credentials = {
  username: string;
  password: string;
};
```

---

# Quy tắc đơn giản

> Dùng `interface` cho object, đặc biệt là public API hoặc class contract.
> 
> 
> Dùng `type` cho mọi thứ còn lại.
> 

Trong Playwright project, có thể áp dụng như sau:

```
interface LoginPageContract {
  login(username: string, password: string): Promise<void>;
}

type LoginUser = {
  username: string;
  password: string;
};

type UserRole = "admin" | "editor" | "viewer";
```

---

## ✅ Best Practice

- Chọn một convention cho project và giữ nhất quán.
- Nếu team đã dùng `type` cho test data, tiếp tục dùng `type`.
- Nếu team dùng `interface` cho Page Object contract, tiếp tục theo pattern đó.
- Không trộn lẫn tùy hứng giữa `type` và `interface`.
- Ưu tiên readability hơn là chứng minh TypeScript “cao cấp”.

---

## ⚠️ Common Mistakes

> ❌ Nghĩ rằng `interface` luôn tốt hơn `type`.
> 

Thực tế: `interface` tốt cho object/class, nhưng `type` linh hoạt hơn nhiều.

---

> ❌ Dùng `interface` cho union.
> 

```
interface Role = "admin" | "viewer"; // Sai
```

✅ Dùng `type`:

```
type Role = "admin" | "viewer";
```

---

> ❌ Khai báo lại `type` cùng tên.
> 

```
type User = {
  username: string;
};

type User = {
  password: string;
};
```

✅ Nếu cần merge, dùng `interface`:

```
interface User {
  username: string;
}

interface User {
  password: string;
}
```

---

## 🧠 Key Takeaways

- `type` và `interface` đều định nghĩa cấu trúc dữ liệu.
- `interface` hỗ trợ declaration merging.
- `type` linh hoạt hơn với union, tuple, primitive, mapped type.
- `interface extends` dễ đọc khi mở rộng object/class.
- `type` dùng `&` để intersection.
- Quy tắc dễ nhớ: `interface` cho object/API, `type` cho mọi thứ còn lại.
- Quan trọng nhất: giữ convention nhất quán trong project.

8:11 PM

| Concept | Dùng để | Ghi chú |
| --- | --- | --- |
| `type` | Định nghĩa kiểu dữ liệu linh hoạt | Dùng được cho object, union, primitive, function type |
| `interface` | Định nghĩa shape của object/class | Có thể extend, phù hợp khi mô tả object lớn |

Ví dụ `type` với union:

```tsx
type UserRole = "admin" | "editor" | "viewer";
```

Ví dụ `interface` với object:

```tsx
interface Product {
  name: string;
  price: number;
}
```

---

## 🧪 Liên hệ với Playwright

Dùng type cho test data:

```tsx
type LoginUser = {
  username: string;
  password: string;
};

async function login(user: LoginUser) {
  console.log(user.username);
  console.log(user.password);
}
```

Hoặc dùng trong Page Object:

```tsx
type LoginCredentials = {
  username: string;
  password: string;
};

class LoginPage {
  async login(credentials: LoginCredentials) {
    // fill username/password here
  }
}
```

---

## 🎯 Khi nào sử dụng?

Nên dùng `type` khi:

- Cần union type.
- Cần định nghĩa test data đơn giản.
- Cần alias cho kiểu dữ liệu.

Nên dùng `interface` khi:

- Mô tả object/class rõ ràng.
- Object có khả năng mở rộng.
- Team convention ưu tiên interface.

Recommended trong automation project:

- Dùng `type` cho test data đơn giản.
- Dùng `interface` cho object model lớn hoặc contract rõ ràng.

---

## ✅ Best Practice

- Không để test data là object “trôi nổi” không có type.
- Đặt tên type/interface rõ nghĩa: `LoginUser`, `ProductData`, `ApiUserResponse`.
- Tránh dùng `any`.
- Type nên phục vụ readability, không làm code phức tạp không cần thiết.

---

## ⚠️ Common Mistakes

> ❌ Dùng `any` cho mọi dữ liệu.
> 

```tsx
const user: any = {
  username: "admin",
  password: 123,
};
```

Vấn đề: TypeScript không còn giúp phát hiện lỗi.

✅ Sửa lại:

```tsx
type LoginUser = {
  username: string;
  password: string;
};

const user: LoginUser = {
  username: "admin",
  password: "secret123",
};
```

---

## 🧠 Key Takeaways

- `type` và `interface` giúp định nghĩa kiểu dữ liệu.
- `interface` không dùng dấu `=`.
- Type giúp test data rõ ràng và ít lỗi hơn.
- Tránh lạm dụng `any`.
- Trong Playwright, type rất hữu ích cho test data và POM.

---

## 3. Class, Constructor, Method và `extends`

## 📌 Concept

`class` dùng để mô hình hóa một đối tượng có:

- **properties**: dữ liệu / thành phần.
- **methods**: hành động.

Trong Playwright, `class` thường dùng để viết **Page Object Model**.

---

## 💻 Ví dụ cơ bản

```tsx
class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  sayHello() {
    console.log(`Hello ${this.username}`);
  }
}

const user = new User("admin");
user.sayHello();
```

Giải thích:

- `class User`: định nghĩa class.
- `username`: property.
- `constructor`: chạy khi tạo object.
- `sayHello()`: method.
- `this.username`: truy cập property trong chính class đó.

---

## 🧪 Liên hệ với Playwright

```tsx
import { Page } from "@playwright/test";

class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
```

Giải thích:

- `class LoginPage` → đại diện cho trang Login.
- `constructor(private page: Page)` → nhận Playwright `page`.
- `login()` → action trên trang.
- `this.page` → dùng page instance để thao tác UI.

---

## 📌 `extends`

`extends` là cơ chế kế thừa.

Class con có thể dùng lại property và method từ class cha.

```
BasePage
   ↓ extends
LoginPage
```

---

## 💻 Ví dụ `extends`

```tsx
class BasePage {
  openUrl(url: string) {
    console.log(`Open URL: ${url}`);
  }
}

class LoginPage extends BasePage {
  login() {
    console.log("Login user");
  }
}

const loginPage = new LoginPage();

loginPage.openUrl("/login");
loginPage.login();
```

`LoginPage` có thể dùng `openUrl()` từ `BasePage`.

---

## 📌 `super()`

`super()` dùng để gọi constructor của class cha.

```tsx
import { Page } from "@playwright/test";

class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }
}

class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
```

Giải thích:

- `BasePage` nhận `page`.
- `LoginPage extends BasePage`.
- `super(page)` truyền `page` lên class cha.
- `protected page` cho phép class con dùng `this.page`.

---

## 🎯 Khi nào sử dụng?

Dùng `class` khi:

- Viết Page Object.
- Gom locator và action của cùng một page.
- Muốn code test gọn và dễ reuse.

Dùng `extends` khi:

- Nhiều page có logic chung.
- Ví dụ: `goto()`, `waitForPageLoad()`, `getToastMessage()`, `clickSave()`.

Không nên dùng `extends` khi:

- Chỉ để “cho giống OOP”.
- Class cha quá lớn và chứa quá nhiều logic không liên quan.
- Có thể giải quyết đơn giản bằng helper function.

---

## ✅ Best Practice

- Mỗi page nên là một class riêng.
- Method nên bắt đầu bằng động từ: `login()`, `submitForm()`, `openProduct()`.
- Chỉ đưa logic dùng chung thật sự vào `BasePage`.
- Không tạo inheritance quá sâu.
- Ưu tiên code dễ đọc hơn là OOP phức tạp.

---

## ⚠️ Common Mistakes

> ❌ Quên gọi `super()` trong class con có constructor.
> 

```tsx
class LoginPage extends BasePage {
  constructor(page: Page) {
    this.page = page; // Error
  }
}
```

✅ Sửa lại:

```tsx
class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
```

---

## 🧠 Key Takeaways

- `class` gồm properties và methods.
- Trong Playwright, class thường dùng cho POM.
- `extends` giúp class con kế thừa class cha.
- `super()` gọi constructor của class cha.
- Không nên lạm dụng inheritance.

---

# 4. Page Object Model trong Playwright

## 📌 Concept

**Page Object Model**, viết tắt là **POM**, là design pattern giúp tổ chức automation code sạch hơn, dễ bảo trì hơn.

Hiểu đơn giản:

```
Page Object = class đại diện cho một page
```

Trong POM:

- **Properties**: locator / element trên trang.
- **Methods**: hành động người dùng thực hiện trên trang.

---

## 🔍 Cách hoạt động

```
Test
 ↓
Page Object
 ↓
Locator
 ↓
Web Element
```

Test không nên chứa quá nhiều chi tiết thao tác UI.

Thay vào đó, test gọi method từ Page Object.

---

## 💻 Ví dụ không dùng POM

```tsx
import { test, expect } from "@playwright/test";

test("login successfully", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("Username").fill("admin");
  await page.getByLabel("Password").fill("secret123");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Dashboard")).toBeVisible();
});
```

Vấn đề:

- Test chứa nhiều locator.
- Nếu UI đổi, phải sửa nhiều nơi.
- Khó reuse login flow.

---

## ✅ Ví dụ dùng POM

### `login.page.ts`

```tsx
import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel("Username");
    this.passwordInput = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

### `login.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import { LoginPage } from "./login.page";

test("login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("admin", "secret123");

  await expect(page.getByText("Dashboard")).toBeVisible();
});
```

Test trở nên ngắn hơn và tập trung vào business flow.

---

## 📝 Syntax thường gặp

```tsx
class PageName {
  constructor(private page: Page) {}

  async actionName() {
    // actions
  }
}
```

Ví dụ ngắn hơn:

```tsx
import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
```

Cách này gọn hơn, phù hợp khi locator không cần reuse nhiều lần.

---

## 🎯 Khi nào sử dụng POM?

Nên dùng POM khi:

- Project có nhiều test cases.
- Một page được dùng lại ở nhiều test.
- Flow có nhiều bước.
- UI thường xuyên thay đổi.
- Team cần code dễ maintain.

Không nhất thiết dùng POM quá sớm nếu:

- Chỉ có vài test đơn giản.
- Locator/action chỉ dùng một lần.
- Việc tách class làm code khó đọc hơn.

Recommended:

> Dùng POM cho các page/flow quan trọng như Login, Checkout, Dashboard, Product Detail, User Management.
> 

---

## ✅ Best Practice

- Mỗi page chính nên có một Page Object.
- Locator nên nằm trong Page Object.
- Action nên được đóng gói thành method.
- Method nên thể hiện hành vi người dùng, ví dụ `login()`, `checkout()`, `createUser()`.
- Không duplicate action trong nhiều test.
- Không đưa assertion quá nhiều vào Page Object, trừ assertion rất đặc thù của page.
- Test file nên đọc giống business scenario.

---

## ⚠️ Common Mistakes

> ❌ Page Object chỉ copy toàn bộ code từ test sang class mà không tổ chức lại.
> 

```tsx
async clickButton1() {}
async clickButton2() {}
async fillInput1() {}
```

Vấn đề: method không thể hiện nghiệp vụ.

✅ Nên viết theo hành động có nghĩa:

```tsx
async login(username: string, password: string) {}
async createNewUser(user: UserData) {}
async searchProduct(productName: string) {}
```

---

> ❌ Viết assertion chung chung trong Page Object.
> 

```tsx
async login(username: string, password: string) {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);
  await this.loginButton.click();
  await expect(this.page.getByText("Dashboard")).toBeVisible();
}
```

Vấn đề: method `login()` vừa action vừa assert, làm test kém linh hoạt.

✅ Nên để assertion ở test:

```
await loginPage.login("admin", "secret123");
await expect(page.getByText("Dashboard")).toBeVisible();
```

---

## 🧠 Key Takeaways

- POM là design pattern giúp automation code dễ maintain.
- Mỗi page thường được biểu diễn bằng một class.
- Locator thường là properties.
- Action thường là methods.
- Test nên gọi Page Object thay vì thao tác trực tiếp quá nhiều với UI.
- Không có một chuẩn POM duy nhất, nhưng code phải rõ ràng và dễ maintain.

---

# 5. Multiple POM với `extends`

## 📌 Concept

Khi project có nhiều Page Object, một số logic sẽ bị lặp lại.

Ví dụ:

- `goto()`
- `waitForLoading()`
- `getToastMessage()`
- `clickSaveButton()`
- `openMenu()`

Ta có thể tạo `BasePage` để chứa logic chung, sau đó các page khác `extends` từ `BasePage`.

---

## 🔍 Flow

```
BasePage
 ├── LoginPage
 ├── DashboardPage
 └── ProductPage
```

---

## 💻 Ví dụ thực tế

### `base.page.ts`

```tsx
import { Page, Locator } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  getToastMessage(): Locator {
    return this.page.getByRole("alert");
  }
}
```

### `login.page.ts`

```tsx
import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/login");
  }

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
```

### `login.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import { LoginPage } from "./login.page";

test("login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login("admin", "secret123");

  await expect(page.getByText("Dashboard")).toBeVisible();
});
```

---

## 🎯 Khi nào sử dụng?

Nên dùng `BasePage` khi:

- Có nhiều Page Object.
- Có logic chung thật sự được dùng lại.
- Muốn tránh duplicate code.
- Muốn chuẩn hóa cách navigate, handle toast, wait loading.

Không nên dùng khi:

- Project còn quá nhỏ.
- BasePage chỉ có 1-2 method không cần thiết.
- BasePage trở thành nơi chứa mọi thứ.

---

## ✅ Best Practice

- `BasePage` chỉ nên chứa logic chung cho nhiều page.
- Không nhồi tất cả locator vào `BasePage`.
- Tránh inheritance nhiều tầng.
- Nếu logic không thuộc về page, cân nhắc dùng helper/service riêng.
- Method trong Page Object nên mô tả hành vi thực tế của user.

---

## ⚠️ Common Mistakes

> ❌ BasePage quá lớn và chứa logic không liên quan.
> 

```tsx
class BasePage {
  login() {}
  checkout() {}
  createProduct() {}
  deleteUser() {}
}
```

Vấn đề: `BasePage` bị biến thành “god class”.

✅ Nên tách theo page:

```tsx
class LoginPage extends BasePage {}
class CheckoutPage extends BasePage {}
class ProductPage extends BasePage {}
```

---

## 🧠 Key Takeaways

- Multiple POM nghĩa là project có nhiều Page Object.
- `extends` giúp tái sử dụng logic chung.
- `BasePage` nên nhỏ và tập trung.
- Mỗi page vẫn nên có responsibility riêng.
- Dùng inheritance vừa đủ, không lạm dụng.

---

# 6. Quick Reference

## Câu lệnh thường dùng

```tsx
npm install -D typescript
```

```tsx
npx tsc path/to/file.ts
```

```
npx playwright test
```

```
npx playwright test tests/login.spec.ts
```

---

## Locator nên ưu tiên trong Playwright

| Locator | Khi nào dùng |
| --- | --- |
| `getByRole()` | Recommended khi element có role rõ ràng như button, link, checkbox |
| `getByLabel()` | Form input có label |
| `getByPlaceholder()` | Input có placeholder rõ ràng |
| `getByText()` | Text hiển thị trên UI |
| `getByTestId()` | Element có test id ổn định |
| `locator()` | Khi các locator semantic không phù hợp |

Ví dụ:

```
await page.getByRole("button", { name: "Login" }).click();
await page.getByLabel("Username").fill("admin");
await page.getByTestId("submit-button").click();
```

---

## POM Structure Recommended

```
tests/
  login.spec.ts

pages/
  base.page.ts
  login.page.ts
  dashboard.page.ts
```

---

## Final Takeaways

- TypeScript giúp Playwright test rõ ràng, ít lỗi hơn.
- `type` và `interface` dùng để định nghĩa dữ liệu.
- `class` là nền tảng để viết Page Object.
- POM giúp tách test logic khỏi UI interaction.
- `extends` hữu ích khi nhiều Page Object có logic chung.
- Best automation code là code dễ đọc, dễ sửa, dễ reuse.