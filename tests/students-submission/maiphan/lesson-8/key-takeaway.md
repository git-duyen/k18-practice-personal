#**Lesson-08: Playwright tests**

## 1. describe

- Test suite: tập hợp test case theo nhóm cho dễ quản lý
  _example_

```
test.describe('<tên suite>', async () => {
	test('test1', async ({page})) => {
		//code
	});
	test('test1', async ({page})) => {
		//code
	});
});
```

## 2. Hooks

- Playwright gọi những thời điểm: Trước khi chạy, Trong khi chạy, Sau khi chạy - khi đang chạy test và test suite là **hooks**
- Các hooks:
  - beforeAll: Áp dụng cho trước khi chạy test guite
  - beforeEach: Áp dụng cho trước khi chạy test case
  - afterEach: Áp dụng sau khi chạy test case
  - afterAll: Áp dụng sau khi chạy test guite

## 3. Assertion

- Là 1 câu lệnh để kiểm tra actual result có giống expected result hay không
- Việc này sẽ được thông qua bởi hàm `expect`
- Các loại assertion:
  - Generic Assertions: expect(giá trị) = (giá trị)
    _Example_

```
expect(value).toBe(expected);
expect(array).toHaveLength(3);
expect(string).toContain('text');
```

    * Web-first Assertions (auto-waiting): expect(phần tử) = (giá trị)
    => Dùng cho các elements trên web cần chờ cho đến khi điều kiện thỏa mãn
    _Example_

```
await expect(page.locator('button')).toBeVisible();
await expect(page).toHaveTitle('Homepage');
```

- Nếu không dùng web-first assertion => hệ thống tự động chờ luôn cho hết 5s
- Dùng web-first assertion => trong 5s hoặc trong thời gian đã config, đạt điều kiện là out luôn
