# Lesson 13
## Agenda
1. Object Destructuring
2. Fixtures
3. Test generator
4. Video recording
---
## Object destructuring
- **Destruct** = phá hủy, dỡ bỏ. Trong ngữ cảnh lập trình, "destructuring" có nghĩa là "bóc tách" hoặc "trích xuất" giá trị từ cấu trúc dữ liệu (như object hoặc array) mà không làm thay đổi cấu trúc gốc. 
    - Trong context javascript, destruct = lấy các giá trị của các thuộc tính trong object.
    - Giúp code ngắn gọn hơn
- VD khi chưa có destruct
```typescript
const myClass = {
    school: "BBA",
    course: "Full-stack QA"
}
const school = myClass.school;
const course = myClass.course;

console.log(school); //=> "BBA"
console.log(course); //=> "Full-stack QA"
```
- Ví dụ khi có destruct
```typescript
const myClass = {
    school: "BBA",
    course: "Full-stack QA"
}
const {school, course} = myClass;

console.log(school); //=> "BBA"
console.log(course); //=> "Full-stack QA"
```
### Kiến thức bổ sung
- **Multiple property**: dùng trong trường hợp bạn muốn destructuring nhiều thuộc tính của object.
```javascript
const { prop1, prop2, ..., propN } = object;
```
- **Default value**: Dùng trong trường hợp bạn muốn đặt giá trị mặc định cho thuộc tính.
```javascript
const { prop = "Default" } = object;
```
- **Alias**: Dùng trong trường hợp bạn muốn đặt 1 cái tên khác cho thuộc tính.
```javascript
const { prop: myProp } = object;
```
- **Deep property**: Dùng trong trường hợp bạn muốn destructuring các object nằm sâu bên trong 1 object khác.
```javascript
const { prop: { deepProp } } = object;
```
## Fixtures
### Fixture là gì?
- Playwright sử dụng concept fixture (page, request,...)
### Fixture giải quyết bài toán gì?
- Fixture trong playwright là cơ chế để:
    - Tái sử dụng setup / teardown code
    - Chia sẻ objects giữa các test
    - Tạo môi trường test độc lập
    - Mở rộng built-in fixtures (page, context, browser)
    - Nhóm các test theo ngữ nghĩa thay vì common setup
### Các built-in trong fixture

| Fixture | Type | Mô tả |
|---------|------|-------|
| page    | Page | Tạo 1 page riêng biệt cho test |
| context | BrowserContext | Tạo 1 context riêng biệt cho test. Fixture page phía trên cũng cùng context với context này |
| browser | Browser | Browser được dùng chung giữa các test để tối ưu tài nguyên |
| browserName | string | Tên browser đang chạy. Có thể là chromium, firefox hoặc webkit |
| request | APIRequestContext | Một APIRequestContext instance độc lập |

### Custom 1 fixture
- Sử dụng `test.extend()` để mở rộng test object.
- Khai báo và implement

```typescript
import { test as base } from '@playwright/test'
...
const test = base.extend<{ page2: Page2}>({
    page2: async ({}, use ) => {
        const page2 = new Page2();
        page2.sayMyName();
        await use(page2);
        console.log("after page2");
    }
})

export { test };
```
### Nâng cao hơn về fixture
- Overriding fixtures
- Worker-scoped fixtures
- Automatic fixtures
- Fixture timeout
- Fixtures-options
- Execution order
- ...
- https://playwright.dev/docs/test-fixtures

## Test generator
### Test generator là gì?
- Là việc thao tác mà sinh ra code (click sinh ra code)
### Test generator giải quyết bài toán gì?
- Cần code nhanh
- Muốn lười, manual 1 đoạn rồi code tay nốt
### Sử dụng test generator trong playwright
- Record new: tạo file mới và bắt đầu record
- Record at cursor: record và sinh ra code ở vị trí con trỏ chuột
- Assertion: Generate ra so sánh

## Video recording
### Video recording là gì
- Là việc quay video lại toàn bộ quá trình test chạy
### Video recording giải quyết bài toán gì?
- Giúp debug các test 1 cách rõ ràng hơn
- Giúp generate ra evidence 1 cách nhanh chóng
### Sử dụng video recording trong playwright
- Sửa trong file playwright.config.ts, mục `use`
- Các "mode":
    - `off`: tắt, không record
    - `on`: bật, record tất cả các test
    - `retain-on-failure`: record hết nhưng chỉ giữ lại test fail
    - `on-first-retry`: record những test nào fail và retry
### Video recording trong thực tế
- Giúp generate ra evidence nhanh chóng