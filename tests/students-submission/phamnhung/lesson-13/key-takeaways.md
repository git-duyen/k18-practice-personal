# Lesson 13

## 1. Object destructuring

Destruct = phá hủy, dỡ bỏ
Trong context JavaScript, destruct = lấy các giá trị của các thuộc tính, trong object. Giúp code ngắn gọn hơn.

```javascript
const myClass = {
    school: 'BBA',
    course: 'Full-stack QA'
};
// const school = myClass.school; => Mỗi thuộc tính mất 1 dòng code
// const course = myClass.course;

//Tất cả thuộc tính chỉ 1 dòng code
const { school, course } = myClass;
```

- **Multiple property**
    Dùng trong trường hợp bạn muốn destructuring nhiều thuộc tính của object:
```javascript
const { prop1, prop2, ..., propN } = object
```

- **Default value**
    Dùng trong trường hợp bạn muốn đặt giá trị mặc định cho một thuộc tính.
```javascript
const { prop = 'Default' } = object;
```

- **Alias**
Dùng trong trường hợp bạn muốn đặt một cái tên khác cho property
```javascript
const { prop: myProp } = object;
```

- **Deep property**
    Dùng trong trường hợp bạn muốn destructuring các object nằm sâu bên trong một object khác
```javascript
const { prop: { deepProp } } = object;
```

## 2. Fixture

Playwright sử dụng concept fixture: `page` `request`

Fixture trong Playwright là cơ chế mạnh mẽ dùng để:
- Tái sử dụng setup/teardown code
- Chia sẻ objects giữa các test
- Tạo môi trường test độc lập: Mỗi test sử dụng fixture riêng, đảm bảo môi trường không bị ảnh hưởng giữa các test cases
- Mở rộng built-in fixtures (page, context, browser)
- Nhóm test theo ngữ nghĩa thay vì common setup

Các Built-in fixture:

| Fixture | Type | Mô tả |
|-------|-------|-------|
| page | Page | Tạo một page riêng biệt cho test. |
| context | BrowserContext | Tạo một context riêng biệt cho test. Fixture page phía trên cũng cùng context với context này. |
| browser | Browser | Browser được dùng chung giữa các test để tôi ưu tài nguyên. |
| browserName | string | Tên browser đang chạy. Có thể là chromium, firefox hay webkit. |
| request | APIRequestContext | Một APIRequestContext instance độc lập. |

>fixture `context` chưa có trình duyệt nhưng có thể dùng để tạo nhiều tab

```typescript
test("My simple UI test", async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://material.playwrightvn.com");
    
    const page2 = await context.newPage();
    await page2.goto("https://google.com"); 
});
```
>fixture `browser` tạo nhiều trình duyệt

>fixture `browserName` in ra trình duyệt đang dùng
```typescript
test("My simple test with browserName", async ({ browserName }) => {
    test.skip(browserName === "chromium" || browserName === "firefox");
    console.log (browserName);
});
```

> Mở rộng fixture cú pháp: `base.extend()` Đặt lại tên bằng `as`
```typescript
import { test as base } from '@playwright/test';

const test = base.extend<{ page2: Page2 }>({
    page2: async ({ }, use) => {
    const page2 = new Page2();
    page2.sayMyName();
    await use(page2);
    console.log("after page2");
    }
})
export { test };
```
Teardown: adding a `testProject.teardown` property to your setup project

Nâng cao về fixture: https://playwright.dev/docs/test-global-setup-teardown

## 3. Test generator

Còn gọi là **Codegen** giúp tự động tạo mã kiểm thử bằng cách ghi lại các thao tác trực tiếp trên trình duyệt
- Record new: tạo file mới và bắt đầu record
- Record at cursor: record và sinh ra code tại vị trí con trỏ chuột
- Assertion: Generate ra so sánh

## 4. Video recording

Sửa trong file playwright.config.ts, mục `use`.
Các "mode":
- off: tắt, không record 
- on: bật, record tất cả các test
- retain-on-failure: record hết, nhưng chỉ giữ lại test fail
- on-first-retry: record những test nào fail và retry