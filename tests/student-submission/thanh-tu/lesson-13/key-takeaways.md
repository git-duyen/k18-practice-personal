# Lesson 13 - Fixture & Managing env variable

## Object destructuring
* destruct = phá hủy, dỡ bỏ
    * Trong JavaScript, destruct = lấy các giá trị của các thuộc tính trong object
    * giúp code ngắn gọn hơn
* Khi chưa dùng destructuring
```ts
const myClass = {
    school: 'BBA',
    course: 'Full-stack QA',
};

const school = myClass.school;
const course = myClass.course;

console.log(school); // => 'BBA'
console.log(course); // => 'Full-stack QA'
```

* Khi dùng destructuring
```ts
const myClass = {
    school: 'BBA',
    course: 'Full-stack QA',
};

const { school, course } = myClass;

console.log(school); // => 'BBA'
console.log(course); // => 'Full-stack QA'
```
## Fixture

### Playwright sử dụng concept fixture
* page
* request

### Fixture trong Playwright là cơ chế để:
* Tái sử dụng setup/teardown code
* Chia sẻ object giữa các test
* Tạo môi trường test độc lập
* Mở rộng built-in fixture (page, context, browser)
* Nhóm test theo ngữ nghĩa thay vì common setup

### Các Build-in Fixture
|Fixture|Type|Mô tả|
|-----------|-----------------|-|
|page       |Page             |Tạo một page riêng biệt cho test|
|context    |BrowserContext   |Tạo một context riêng biệt cho test. Fixture page phía trên cũng cùng context với context này|
|browser    |Browser          |Browser được dùng chung giữa các test để tối ưu tài nguyên|
|browserName|string           |Tên browser đang chạy. Có thể là chromium, firefox hoặc webkit|
|request    |APIRequestContext|Một APIRequestContext instance độc lập|

## Test generator

### Test generator là gì?
Là thao tác sinh ra code (click để sinh ra code)

### Sử dụng Test generator trong Playwright
* record new: tạo file mới và bắt đầu record
* record at cursor: record và sinh ra code tại vị trí con trỏ chuột
* assertion: generate ra câu lệnh so sánh

## Video recording
Là việc "quay video" lại toàn bộ quá trình test chạy

### Video recording giải quyết bài toán gì?
* giúp debug test dễ dàng hơn
* giúp generate evidence nhanh chóng

### Sử dụng video recording trong playwright
Sửa trong file `playwright.config.ts`, mục use

các "mode":
* off: tắt, không record
* on: bật, record tất cả các test
* retain-on-failure: record tất cả nhưng chỉ giữ lại test fail
* on-first-retry: record những test fail và được retry