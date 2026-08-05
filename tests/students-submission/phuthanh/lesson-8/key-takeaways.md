# Test Describe, Test Hooks & Assertions

---

# 📑 Mục lục

- Test Describe
  - Test Suite
  - Nested Describe
  - describe.configure()
  - describe.only
  - describe.skip
  - describe.fixme
  - describe.parallel
  - describe.serial
- Test Hooks
  - Lifecycle
  - beforeAll
  - beforeEach
  - afterEach
  - afterAll
  - Precondition / Test Steps / Postcondition

---

# 📌 Test Describe

## Khái niệm

`test.describe()` dùng để **nhóm nhiều test case có liên quan** thành một **Test Suite**.

Một Test Suite giúp:

- Tổ chức code rõ ràng.
- Dễ đọc.
- Dễ bảo trì.
- Dễ chạy theo từng module.
- Có thể dùng chung Hooks và cấu hình.

!image.png

### Ví dụ

```tsx
import { test } from "@playwright/test";

test.describe("Login", () => {
  test("Login successfully", async ({ page }) => {});

  test("Login failed", async ({ page }) => {});
});
```

---

## Test Suite là gì?

Test Suite là tập hợp các test case cùng kiểm thử một chức năng hoặc một module.

Ví dụ

```
Authentication
├── Login Successfully
├── Login Failed
├── Forgot Password
└── Logout
```

### Mục đích

- Dễ tìm kiếm.
- Dễ chạy riêng.
- Report rõ ràng.
- Dùng chung Hook.
- Dễ maintain.

---

## Khi nào sử dụng

### ✅ Nên dùng

- Các test cùng module.
- Các test dùng chung dữ liệu.
- Các test có chung Hook.

Ví dụ

```
Booking
├── Create Booking
├── Edit Booking
└── Cancel Booking
```

### ❌ Không nên

Không gom toàn bộ project vào một describe.

```tsx
test.describe("All Tests", () => {});
```

Điều này khiến file quá lớn và khó bảo trì.

---

# 📌 Nested Describe

Có thể lồng nhiều `describe()` để chia module nhỏ hơn.

### Ví dụ

```tsx
test.describe("Authentication", () => {
  test.describe("Login", () => {
    test("Login successfully", async ({ page }) => {});
  });

  test.describe("Register", () => {
    test("Register successfully", async ({ page }) => {});
  });
});
```

### Khi nào dùng

- Module lớn.
- Có nhiều nhóm chức năng.

Ví dụ

```
Authentication
├── Login
├── Register
├── Forgot Password
└── Logout
```

---

# 📌 describe.configure()

Dùng để cấu hình cho Test Suite.

### Cú pháp

```tsx
test.describe.configure({
  mode: "parallel",
});
```

### Các mode

| Mode     | Ý nghĩa        |
| -------- | -------------- |
| default  | Mặc định       |
| parallel | Chạy song song |
| serial   | Chạy tuần tự   |

---

# 📌 describe.only()

Chỉ chạy Test Suite này.

### Ví dụ

```tsx
test.describe.only("Login", () => {});
```

### Khi nào dùng

- Debug.
- Chạy nhanh một nhóm test.

> ⚠️ Không commit `describe.only()` lên Git.

---

# 📌 describe.skip()

Bỏ qua toàn bộ Test Suite.

### Ví dụ

```tsx
test.describe.skip("Payment", () => {});
```

### Khi nào dùng

- Module chưa hoàn thành.
- Feature bị disable.

---

# 📌 describe.fixme()

Đánh dấu suite đang có bug hoặc chưa thể chạy.

### Ví dụ

```tsx
test.describe.fixme("Search", () => {});
```

### Khác với `skip`

| skip            | fixme                             |
| --------------- | --------------------------------- |
| Chủ động bỏ qua | Biết chắc test chưa thể chạy đúng |

---

# 📌 describe.parallel

Cho phép các test trong suite chạy song song.

### Ví dụ

```tsx
test.describe.configure({
  mode: "parallel",
});
```

### Khi nào dùng

- Test độc lập.
- Không dùng chung dữ liệu.
- Muốn giảm thời gian chạy.

### Không nên dùng

- Test phụ thuộc nhau.
- Có chung dữ liệu.

---

# 📌 describe.serial

Các test chạy lần lượt.

### Ví dụ

```tsx
test.describe.configure({
  mode: "serial",
});
```

### Khi nào dùng

Các test phụ thuộc nhau.

```
Create User
      ↓
Update User
      ↓
Delete User
```

> ⚠️ Trong thực tế nên hạn chế vì nếu một test fail thì các test phía sau sẽ bị skip.

---

# 📊 So sánh Parallel và Serial

| Parallel      | Serial                |
| ------------- | --------------------- |
| Chạy cùng lúc | Chạy tuần tự          |
| Nhanh         | Chậm                  |
| Test độc lập  | Test phụ thuộc        |
| Khuyến nghị   | Chỉ dùng khi bắt buộc |

---

# 📌 Test Hooks

## Khái niệm

Hook là các hàm được Playwright thực thi ở **những thời điểm xác định trong vòng đời của test**.

Mục tiêu:

- Chuẩn bị dữ liệu.
- Thiết lập môi trường.
- Dọn dẹp dữ liệu.
- Giảm code lặp.

!image.png

---

# 🔄 Test Lifecycle

```
beforeAll
      │
      ▼
beforeEach
      │
      ▼
 Test 1
      │
      ▼
afterEach
      │
      ▼
beforeEach
      │
      ▼
 Test 2
      │
      ▼
afterEach
      │
      ▼
beforeEach
      │
      ▼
 Test 3
      │
      ▼
afterEach
      │
      ▼
afterAll
```

---

# 📌 beforeAll()

## Khái niệm

Chạy **một lần duy nhất trước toàn bộ Test Suite**.

### Khi nào dùng

- Login bằng API.
- Tạo dữ liệu dùng chung.
- Kết nối Database.
- Khởi tạo Browser Context.

### Ví dụ

```tsx
test.beforeAll(async () => {
  console.log("Setup Suite");
});
```

---

# 📌 beforeEach()

## Khái niệm

Chạy trước **mỗi Test Case**.

### Timeline

```
beforeEach
Test 1

beforeEach
Test 2

beforeEach
Test 3
```

### Khi nào dùng

- Mở Website.
- Login.
- Reset dữ liệu.
- Chuẩn bị Precondition.

### Ví dụ

```tsx
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
```

---

# 📌 afterEach()

## Khái niệm

Chạy sau mỗi Test Case.

### Khi nào dùng

- Logout.
- Delete dữ liệu test.
- Chụp Screenshot khi fail.
- Thu thập log.

### Ví dụ

```tsx
test.afterEach(async () => {});
```

---

# 📌 afterAll()

## Khái niệm

Chạy một lần sau toàn bộ Test Suite.

### Khi nào dùng

- Đóng Browser.
- Đóng Database.
- Cleanup dữ liệu dùng chung.

### Ví dụ

```tsx
test.afterAll(async () => {});
```

---

# 📌 Precondition - Test Steps - Postcondition

```
Precondition
      │
      ▼
Test Steps
      │
      ▼
Postcondition
```

## Precondition

Điều kiện cần trước khi chạy test.

Ví dụ

- Login.
- Tạo dữ liệu.
- Mở Website.

Thường đặt trong

```
beforeAll
beforeEach
```

---

## Test Steps

Các bước kiểm thử chính.

Ví dụ

- Click Login.
- Nhập Email.
- Nhập Password.
- Click Submit.

---

## Postcondition

Dọn dẹp sau khi test.

Ví dụ

- Logout.
- Delete User.
- Cleanup dữ liệu.

Thường đặt trong

```
afterEach
afterAll
```

---

# 📊 So sánh beforeAll và beforeEach

| beforeAll           | beforeEach            |
| ------------------- | --------------------- |
| Chạy 1 lần          | Chạy trước mỗi test   |
| Setup dùng chung    | Setup riêng từng test |
| Nhanh hơn           | An toàn hơn           |
| Tiết kiệm thời gian | Đảm bảo test độc lập  |

---

# 📊 So sánh afterEach và afterAll

| afterEach                 | afterAll                       |
| ------------------------- | ------------------------------ |
| Cleanup sau mỗi test      | Cleanup sau toàn bộ suite      |
| An toàn                   | Nhanh hơn                      |
| Không ảnh hưởng test khác | Dùng cho tài nguyên dùng chung |

---

# ✅ Best Practices

## Test Describe

- Chia `describe()` theo từng module.
- Không để một Test Suite quá lớn.
- Đặt tên suite theo tên Feature.
- Ưu tiên `parallel`.
- Hạn chế `serial`.
- Không commit `describe.only()`.

## Test Hooks

- Đặt toàn bộ Hook ở đầu file.
- Hook chỉ chứa logic dùng chung.
- Hook càng ngắn càng tốt.
- Không viết Business Logic trong Hook.
- Không để Hook phụ thuộc vào thứ tự chạy của test.

---

# ❌ Common Mistakes

## Test Describe

- Gom toàn bộ project vào một `describe`.
- Lạm dụng `serial`.
- Quên xóa `describe.only()` trước khi commit.

## Test Hooks

- Đặt Hook xen giữa các test.
- Lạm dụng `beforeEach`.
- Cleanup không đầy đủ.
- Test phụ thuộc dữ liệu từ test trước.

---

# 💡 Tips

## Test Describe

- Đặt tên `describe()` giống tên Feature.

✅ Nên

```
Booking
```

❌ Không nên

```
Test 1
```

---

## Test Hooks

- Dùng `beforeEach()` để mở website hoặc login nếu tất cả test đều cần.
- Dùng `beforeAll()` cho các thao tác tốn thời gian nhưng có thể tái sử dụng.
- Nếu chỉ một vài test cần setup đặc biệt, hãy đặt setup trong chính test đó thay vì đưa vào Hook chung.
- Cleanup càng sớm càng tốt để tránh ảnh hưởng đến các test khác.

---

# 🎯 Key Takeaways

## Test Describe

- `describe()` = Test Suite.
- Nhóm test theo Feature hoặc Module.
- Ưu tiên `parallel`.
- Chỉ dùng `serial` khi thực sự cần.
- Không commit `describe.only()`.

## Test Hooks

- `beforeAll()` → Setup một lần.
- `beforeEach()` → Setup cho từng test.
- `afterEach()` → Cleanup từng test.
- `afterAll()` → Cleanup toàn bộ suite.
- Hook giúp giảm code lặp nhưng không nên chứa Business Logic.

> 💡 **Checklist khi áp dụng trong dự án**
>
> - Chia Test Suite theo từng Feature.
> - Đặt Hook ở đầu file.
> - Ưu tiên `parallel`, hạn chế `serial`.
> - Sử dụng Hook cho Setup/Cleanup, không cho Business Logic.
> - Luôn giữ các test độc lập để dễ chạy song song và dễ bảo trì.

# 📌 Assertions

## Khái niệm

Assertion là bước **xác nhận kết quả thực tế có khớp với kết quả mong đợi hay không**.

Trong Playwright, mọi assertion đều sử dụng hàm `expect()`.

Nếu assertion thất bại, test sẽ được đánh dấu là **Failed**.

---

## Tại sao cần Assertion?

Không có assertion thì automation chỉ thực hiện thao tác mà **không kiểm tra kết quả**, vì vậy không thể biết test thành công hay thất bại.

!image.png

!image.png

---

## Phân loại Assertions

Playwright cung cấp hai nhóm assertion chính:

### 1. Generic Assertions

- Là các assertion của thư viện `expect`.
- Làm việc với **giá trị trong bộ nhớ** (string, number, object, array...).
- Không có cơ chế auto-wait.

Ví dụ:

```
expect(value).toBe(expected);expect(array).toHaveLength(3);expect(text).toContain("Playwright");
```

### 2. Web-first Assertions

- Làm việc với **Locator hoặc Page**.
- Có cơ chế **auto-wait**: Playwright sẽ tự động chờ cho đến khi điều kiện đúng hoặc hết timeout.
- Đây là loại assertion nên ưu tiên khi kiểm tra giao diện web.

Ví dụ:

```
awaitexpect(page.getByRole("button", { name:"Login" })).toBeVisible();
```

---

## Generic Assertions

| Assertion         | Ý nghĩa                               | Khi dùng                |
| ----------------- | ------------------------------------- | ----------------------- |
| `toBe()`          | So sánh giá trị nguyên thủy (`===`)   | number, string, boolean |
| `toEqual()`       | So sánh object/array theo giá trị     | object, array           |
| `toStrictEqual()` | So sánh chặt chẽ cả kiểu dữ liệu      | object, array           |
| `toContain()`     | Kiểm tra chuỗi hoặc mảng chứa phần tử | string, array           |
| `toHaveLength()`  | Kiểm tra độ dài                       | string, array           |
| `toBeTruthy()`    | Giá trị được đánh giá là true         | điều kiện tổng quát     |
| `toBeFalsy()`     | Giá trị được đánh giá là false        | điều kiện tổng quát     |
| `toBeNull()`      | Kiểm tra `null`                       | nullable                |
| `toBeUndefined()` | Kiểm tra `undefined`                  | optional                |
| `toThrow()`       | Kiểm tra hàm có ném lỗi               | validate exception      |

---

# 📌 Web-first Assertions

> Web-first Assertions là nhóm assertion được thiết kế dành riêng cho **UI Testing**. Khác với Generic Assertions, Playwright sẽ **tự động chờ (Auto-wait)** cho đến khi điều kiện được thỏa mãn hoặc hết thời gian timeout.

> 💡 **Lưu ý quan trọng**
>
> Không cần sử dụng `waitForTimeout()` trước khi gọi `expect()`. Playwright sẽ tự động polling cho đến khi assertion thành công hoặc hết timeout.

---

# 🟢 Element State Assertions

## 1. `toBeVisible()`

### Khái niệm

Kiểm tra phần tử **đang hiển thị và người dùng có thể nhìn thấy**.

### Khi nào sử dụng

- Kiểm tra popup hiển thị.
- Kiểm tra Toast Message.
- Kiểm tra Button sau khi load.

### Ví dụ

```tsx
const loginButton = page.getByRole("button", { name: "Login" });

await expect(loginButton).toBeVisible();
```

---

## 2. `toBeHidden()`

### Khái niệm

Kiểm tra phần tử **đã bị ẩn hoặc không còn hiển thị**.

### Khi nào sử dụng

- Loading Spinner biến mất.
- Modal đóng.
- Toast tự động ẩn.

### Ví dụ

```tsx
const loading = page.locator(".loading");

await expect(loading).toBeHidden();
```

---

## 3. `toBeEnabled()`

### Khái niệm

Kiểm tra phần tử **có thể tương tác**.

### Khi nào sử dụng

- Submit Button sau khi nhập đủ dữ liệu.
- Save Button sau khi chọn đầy đủ thông tin.

### Ví dụ

```tsx
const submitButton = page.getByRole("button", { name: "Submit" });

await expect(submitButton).toBeEnabled();
```

---

## 4. `toBeDisabled()`

### Khái niệm

Kiểm tra phần tử **không thể tương tác**.

### Khi nào sử dụng

- Chưa nhập đủ dữ liệu.
- Người dùng không có quyền thao tác.

### Ví dụ

```tsx
const saveButton = page.getByRole("button", { name: "Save" });

await expect(saveButton).toBeDisabled();
```

---

## 5. `toBeChecked()`

### Khái niệm

Kiểm tra Checkbox hoặc Radio Button đã được chọn.

### Khi nào sử dụng

- Remember Me.
- Agree Terms.
- Gender.

### Ví dụ

```tsx
const rememberMe = page.getByLabel("Remember me");

await rememberMe.check();

await expect(rememberMe).toBeChecked();
```

---

## 6. `toBeEditable()`

### Khái niệm

Kiểm tra Input hoặc Textarea có thể nhập dữ liệu.

### Khi nào sử dụng

- Form nhập liệu.
- Textarea.

### Ví dụ

```tsx
const email = page.getByLabel("Email");

await expect(email).toBeEditable();
```

---

## 7. `toBeFocused()`

### Khái niệm

Kiểm tra phần tử đang được Focus.

### Khi nào sử dụng

- Accessibility Testing.
- Kiểm tra phím Tab.
- Focus mặc định sau khi mở popup.

### Ví dụ

```tsx
const email = page.getByLabel("Email");

await email.focus();

await expect(email).toBeFocused();
```

---

# 🟡 Text & Content Assertions

## 1. `toContainText()`

### Khái niệm

Kiểm tra phần tử **có chứa một đoạn text**.

### Khi nào sử dụng

Khi chỉ cần kiểm tra một phần nội dung.

### Ví dụ

```tsx
const title = page.locator("h1");

await expect(title).toContainText("Registration");
```

Nếu HTML là

```html
<h1>User Registration Form</h1>
```

➡️ Assertion **PASS** vì có chứa `"Registration"`.

---

## 2. `toHaveText()`

### Khái niệm

Kiểm tra **toàn bộ nội dung text phải khớp chính xác**.

### Khi nào sử dụng

Khi cần verify đúng 100%.

### Ví dụ

```tsx
const title = page.locator("h1");

await expect(title).toHaveText("User Registration Form");
```

Nếu HTML là

```html
<h1>Registration Form</h1>
```

➡️ Assertion **FAIL**.

---

## 3. `toHaveAccessibleName()`

### Khái niệm

Kiểm tra Accessible Name của phần tử.

### Khi nào sử dụng

- Accessibility Testing.
- Verify Screen Reader.

### Ví dụ

```tsx
const button = page.getByRole("button");

await expect(button).toHaveAccessibleName("Login");
```

---

## 4. `toContainClass()`

### Khái niệm

Kiểm tra phần tử **có chứa một CSS Class**.

### Khi nào sử dụng

- Active Menu.
- Selected Item.
- Current Tab.

### Ví dụ

```tsx
const menu = page.locator(".menu-item");

await expect(menu).toContainClass("active");
```

---

# 🔵 Input Assertions

## 1. `toHaveValue()`

### Khái niệm

Kiểm tra giá trị của Input.

### Khi nào sử dụng

- Verify dữ liệu vừa nhập.
- Verify dữ liệu load từ API.

### Ví dụ

```tsx
const email = page.getByLabel("Email");

await email.fill("admin@gmail.com");

await expect(email).toHaveValue("admin@gmail.com");
```

---

## 2. `toHaveValues()`

### Khái niệm

Kiểm tra nhiều giá trị được chọn trong `<select multiple>`.

### Khi nào sử dụng

Dropdown nhiều lựa chọn.

### Ví dụ

```tsx
const languages = page.locator("#languages");

await expect(languages).toHaveValues(["java", "typescript"]);
```

---

# 🟣 Attribute & CSS Assertions

## 1. `toHaveAttribute()`

### Khái niệm

Kiểm tra Attribute của phần tử.

### Khi nào sử dụng

- href
- src
- placeholder
- type

### Ví dụ

```tsx
const email = page.getByLabel("Email");

await expect(email).toHaveAttribute("placeholder", "Enter your email");
```

---

## 2. `toHaveClass()`

### Khái niệm

Kiểm tra **toàn bộ Class** của phần tử.

### Khi nào sử dụng

Khi cần verify chính xác tất cả class.

### Ví dụ

```tsx
const button = page.getByRole("button");

await expect(button).toHaveClass("btn btn-primary");
```

---

## 3. `toHaveCSS()`

### Khái niệm

Kiểm tra giá trị CSS của phần tử.

### Khi nào sử dụng

- Verify màu sắc.
- Verify font-size.
- Verify display.
- Verify UI.

### Ví dụ

```tsx
const title = page.locator("h1");

await expect(title).toHaveCSS("color", "rgb(255, 0, 0)");
```

---

# 🟠 Count Assertions

## `toHaveCount()`

### Khái niệm

Kiểm tra số lượng phần tử.

### Khi nào sử dụng

- Danh sách User.
- Danh sách Product.
- Số dòng trong Table.

### Ví dụ

```tsx
const products = page.locator(".product-item");

await expect(products).toHaveCount(10);
```

---

# 🔴 Page Assertions

## 1. `toHaveURL()`

### Khái niệm

Kiểm tra URL hiện tại.

### Khi nào sử dụng

- Sau Login.
- Sau Redirect.
- Sau Navigation.

### Ví dụ

```tsx
await expect(page).toHaveURL("<https://example.com/dashboard>");
```

Hoặc dùng Regular Expression

```tsx
await expect(page).toHaveURL(/dashboard/);
```

---

## 2. `toHaveTitle()`

### Khái niệm

Kiểm tra tiêu đề của trang.

### Khi nào sử dụng

- Verify đúng trang.
- SEO Testing.
- Navigation Testing.

### Ví dụ

```tsx
await expect(page).toHaveTitle("Dashboard");
```

Hoặc

```tsx
await expect(page).toHaveTitle(/Dashboard/);
```

---

# 📊 Cheat Sheet

| Assertion                | Ý nghĩa                | Thường dùng để kiểm tra |
| ------------------------ | ---------------------- | ----------------------- |
| `toBeVisible()`          | Phần tử hiển thị       | Popup, Button, Toast    |
| `toBeHidden()`           | Phần tử bị ẩn          | Loading, Modal          |
| `toBeEnabled()`          | Có thể thao tác        | Submit Button           |
| `toBeDisabled()`         | Không thể thao tác     | Save Button             |
| `toBeChecked()`          | Checkbox/Radio đã chọn | Remember Me             |
| `toBeEditable()`         | Có thể nhập            | Input, Textarea         |
| `toBeFocused()`          | Đang được Focus        | Accessibility           |
| `toContainText()`        | Chứa một phần text     | Message, Title          |
| `toHaveText()`           | Khớp toàn bộ text      | Tiêu đề                 |
| `toHaveAccessibleName()` | Accessible Name        | Accessibility           |
| `toContainClass()`       | Chứa class             | Active Menu             |
| `toHaveValue()`          | Giá trị Input          | Form                    |
| `toHaveValues()`         | Nhiều giá trị Select   | Multi Select            |
| `toHaveAttribute()`      | Thuộc tính HTML        | href, src, placeholder  |
| `toHaveClass()`          | Toàn bộ class          | CSS Class               |
| `toHaveCSS()`            | Giá trị CSS            | Color, Font             |
| `toHaveCount()`          | Số lượng phần tử       | List, Table             |
| `toHaveURL()`            | URL hiện tại           | Redirect                |
| `toHaveTitle()`          | Tiêu đề trang          | Navigation              |

---

# ✅ Best Practices

- Ưu tiên **Web-first Assertions** khi kiểm tra giao diện vì Playwright hỗ trợ **Auto-wait**.
- Không dùng `waitForTimeout()` trước `expect()`.
- Chọn đúng assertion cho từng mục đích:
  - `toContainText()` khi chỉ cần kiểm tra một phần nội dung.
  - `toHaveText()` khi cần khớp chính xác toàn bộ nội dung.
  - `toContainClass()` khi chỉ cần kiểm tra một class.
  - `toHaveClass()` khi cần kiểm tra toàn bộ class.
- Với `toHaveURL()` và `toHaveTitle()`, nên dùng **Regular Expression** nếu URL hoặc Title có thể thay đổi một phần để giảm tính phụ thuộc vào dữ liệu cố định.

---

# ❌ Common Mistakes

- Sử dụng `waitForTimeout()` trước mọi assertion.
- Dùng `toHaveText()` khi chỉ cần kiểm tra một phần nội dung.
- Dùng `toHaveClass()` khi element có nhiều class động.
- Dùng Generic Assertion (`toBe`, `toEqual`) để kiểm tra UI thay vì Web-first Assertions.
- Assert quá nhiều điều kiện không liên quan trong một test, gây khó debug khi test thất bại.

---

# 💡 Tips

- Luôn tận dụng **Auto-wait** của Playwright thay vì tự thêm các lệnh chờ.
- Đặt assertion ngay sau hành động cần kiểm tra để tăng khả năng đọc và debug.
- Khi kiểm tra UI, hãy ưu tiên sử dụng Locator (`getByRole()`, `getByLabel()`, `getByText()`,...) kết hợp với Web-first Assertions để có test ổn định và dễ bảo trì.
- Đọc kỹ thông báo lỗi của Playwright; error message thường chỉ rõ giá trị mong đợi, giá trị thực tế và locator bị lỗi.

---

# 🎯 Key Takeaways

- Web-first Assertions là lựa chọn **ưu tiên** khi kiểm tra giao diện web.
- Playwright **tự động chờ (Auto-wait)**, vì vậy **không cần** sử dụng `waitForTimeout()` trước `expect()`.
- Chọn đúng assertion sẽ giúp test **ổn định**, **dễ đọc** và **ít flaky** hơn.
- Hãy nhớ nguyên tắc:
  - **State** → `toBeVisible()`, `toBeEnabled()`,...
  - **Text** → `toContainText()`, `toHaveText()`
  - **Input** → `toHaveValue()`
  - **Attribute/CSS** → `toHaveAttribute()`, `toHaveClass()`, `toHaveCSS()`
  - **Page** → `toHaveURL()`, `toHaveTitle()`
