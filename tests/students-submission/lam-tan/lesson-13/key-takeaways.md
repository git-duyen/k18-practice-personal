# Tổng hợp kiến thức đã học

## Buổi 13

### 1. Object destructuring

Destruct = phá huỷ, gỡ bỏ

- Trong context JavaScript, destruct = lấy các giá trị của các thuộc tính, trong object
- Giúp code ngắn gọn hơn

  ```markdown
  const student = {
  name: "Lam Tan",
  address: "Da Nang",
  };
  const { name, address } = student;
  console.log(name);
  console.log(address);
  ```

Nâng cao về Object destructuring

- Multiple property
  - Dùng trong trường hợp muốn destructuring nhiều thuộc tính của object
  - > const { prop1, prop2, ..., propN } = object
- Default value
  - Dùng trong trường hợp bạn muốn đặt giá trị mặc định cho một thuộc tính
  - > const { prop = 'Default' } = object
- Alias
  - Dùng trong trường hợp bạn muốn đặt một cái tên khác cho property
  - > const { prop: myProp } = object
- Deep property
  - Dùng trong trường hợp bạn muốn destructuring các object nằm sâu bên trong một object khác
  - > const { prop: { deepProp } } = object

## 2. Fixture

Playwright sử dụng concept fitxure

- page
- request

Fixture trong Playwright là cơ chế để:

- Tái sử dụng setup/teardown code
- Chia sẻ objects giữa các test
- Tạo môi trường test độc lập
- Mở rộng built-in fixtures (page, context, browser)
- Nhóm test theo ngữ nghĩa thay vì common setup

Các built-in fixture

| Fixture     | Type              | Mô tả                                                                                          |
| ----------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| page        | Page              | Tạo một page riêng biệt cho test.                                                              |
| context     | BrowserContext    | Tạo một context riêng biệt cho test. Fixture page phía trên cũng cùng context với context này. |
| browser     | Browser           | Browser được dùng chung giữa các test để tối ưu tài nguyên.                                    |
| browserName | string            | Tên browser đang chạy. Có thể là chromium, firefox hay webkit.                                 |
| request     | APIRequestContext | Một APIRequestContext instance độc lập.                                                        |

Custom 1 fixture

- Sử dụng test.extend() để mở rộng test object.
- Khai báo và implement!

### 3. Test generator

Là việc mà thao tác sinh ra code (click sinh ra code)

Test generator giải quyết bài toán:

- Cần code nhanh
- Muốn "lười", manual 1 đoạn rồi thao tác tay nốt

Sử dụng test generator trong Playwright

- Record new: tạo file mới và bắt đầu record
- Record at cursor: record và sinh ra code tại vị trí con trỏ chuột
- Assertion: Generate ra so sánh

### 4. Video recording

Là việc "quay video" lại toàn bộ quá trình test chạy

Video recording giải quyết bài toán:

- Giúp debug các test một cách dễ dàng hơn
- Giúp generate ra evidence nhanh chóng

Sử dụng Video recording trong Playwright:

- Sửa trong file playwright.config.ts, mục use
- Các "mode":
  - off: tắt, không record
  - on: bật, record tất cả các test
  - retain-on-failure: record lại hết, nhưng chỉ giữ lại những test fail
  - on-first-retry: record những test nào cần fail và retry

Video recording trong thực tế:

- Giúp generate ra evidence nhanh chóng
