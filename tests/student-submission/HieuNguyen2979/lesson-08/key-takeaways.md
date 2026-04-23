# Lesson 08

## 1.Tổ chức test

Test suite `test.describe("Suite Name", async()=> {...})`
Test case `test("",async({page})=>{...})`
Test step `await test.step("StepName,async()=>{...}")`

## 2. Test hooks

### 2.1. Phân loại

3 thời điểm (hooks)

- Trước khi chạy
- Trong khi chạy
- Sau khi chạy
  02 loại:
- Suite: BeforeAll, AfterAll
- Test case: BeforeEach, AfterEach

### 2.2. Mục đích

Suite Hooks: Xác định action khởi đầu và kết thúc suit
Syntax:
`test.beforeAll(async({page})=> {...})` -->Thường được sử dụng để auto các step Pre-conditions của bộ test (logout tk, xóa danh mục test,..)
`test.afterAll(async({page})=> {...})` --> Thường được sử dụng để auto các step Post-conditions của bộ test (tạo tài khoản, tạo danh sách,..)

Testcase Hooks: Giản lược, tối ưu cho những step lặp lại ở mỗi test case
Syntax:
`test.beforeEach(async({page})=> {...})`
`test.afterEach(async({page})=> {...})`

## 3. Assertion

| STT | Loại                                                                                        | Note                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Generic Assertions<br>`expect(giá trị)=(giá trị)`                                           | `expect().toBe()` <br>`expect().toHaveLength()` <br> `expect().toContain()`                                                    |
| 2   | Web-firt Assertions (auto-waiting)<br>`expect(phần tử) có giá trị sau một khoảng thời gian` | Xử lý trường hợp website sử dụng lazy loading. Gồm các loại sau: <br>- Element State<br>- Text&Content<br>Attribute&Properties |
