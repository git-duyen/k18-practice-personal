## Bài 8: Playwright tests
### 1. Test suite
- Là tập hợp các testcases
- Giúp nhóm các testcases lại cho dễ quản lý
### 2. Test hooks
- Là các thời điểm đặc biệt khi chạy các test hoặc các test suite
- Có các thời điểm:
    - Trước khi chạy
    - Trong khi chạy
    - Sau khi chạy
- Các hooks:
    - beforeAll
    - beforeEach
    - afterEach
    - afterAll
### 3. Assertion
**Là câu lệnh kiểm tra xem 1 điều gì đó có đúng mong đợi hay không.**
### 3.1 Generic assertions: từ thư viện expect
```
expect(giá trị) = giá trị
```
```
VD: expect(value).toBe(expected);
    expect(array).toHaveLength(3);
    expect(string).toContain('text');
```
### 3.2 Web-first assertions (auto-waiting)
Dùng cho các elements trên web, tự động chờ đến khi điều kiện được thỏa mãn.
```
expect(phần tử) có giá trị
```
```
VD: await expect(page.locator('button')).toBeVisible();
await expect(page).toHaveTitle(/Homepage/);
```
- TH không dùng web-first assertion: chờ cứng 5s => thời gian xuất hiện sẽ ngẫu nhiên từ 1-5s
- TH có dùng web-first assertion: chờ tối đa 5s => khi đạt điều kiện sẽ thoát luôn.