# Test suite/group

- **Test suite** là tập hợp các test case

- Test suite giúp nhóm các test lại cho dễ quản lý

- Test suite trong playwright
  VD:
  test.describe('<suite_name>', () => {
  test('test1', async ({page}) => {
  //code ...
  });

  test('test2', async ({page}) => {
  // code ...
  });
  });

# Hook

- Các thời điểm chạy test:
  - Trước khi chạy
  - Trong khi chạy
  - Sau khi chạy
- Các thời điểm chạy suite:
  - Trước khi chạy
  - Trong khi chạy
  - Sau khi chạy
- Playwright:
  - Gọi các thời điểm này là **hooks**
- Các hooks:
  - beforeAll : trước khi chạy suite
  - beforeEach : trước khi chạy 1 test
  - afterEach: sau khi chạy 1 test
  - afterAll: sau khi chạy suite

# Assertion & Web first assertion

- **Assertion** trong lập trình nghĩa là "khẳng định" hoặc "xác nhận"
- Assertion là một câu lệnh để kiểm tra xem 1 điều gì đó có đúng như mong đợi hay không
- Nếu không có assertion = không biết test có thành công hay thất bại
- Playwright assert thông qua **hàm expect**
  VD:
  await expect(page.locator('button')).toBeVisible();
- Các loại assertion:
  - **Generic Assertions** (từ thư viện expect)
    - expect(value).toBe(expected);
    - expect(array).toHaveLength(3);
    - expect(string).toContain('text');
  - **Web-first Assertions (auto-waiting)**
    - Dùng cho các elements trên web, tự động chờ đến khi điều kiện được thỏa mãn
    - await expect(page.locator('button')).toBeVisible();
    - await expect(page).toHaveTitle(/Homepage/);
    - Kiểm tra visibility:
      - await expect(locator).toBeVisible();
      - await expect(locator).toBeHidden();
    - Kiểm tra enabled/disabled
      - await expect(locator).toBeEnabled();
      - await expect(locator).toBeDisabled();
    - Kiểm tra checked (checkbox/radio)
      - await expect(locator).toBeChecked();
    - Kiểm tra focus
      - await expect(locator).toBeFocused();
    - Có chứa text
      - await expect(locator).toContainText('Hello');
    - Text chính xác
      - await expect(locator).toHaveText('Welcome');
    - Text khớp regex
      - await expect(locator).toHaveText(/welcome/i);
    - Kiểm tra nhiều elements
      - await expect(locator).toHaveText(['Item1', 'Item2']);
    - Kiểm tra attribute
      - await expect(locator).toHaveAttribute('href', '/about');
    - Kiểm tra class
      - await expect(locator).toHaveClass('active');
      - await expect(locator).toHaveClass(/btn-primary/);
    - Kiểm tra value (input value)
      - await expect(locator).toHaveValue('john@example.com');
    - Kiểm tra count
      - await expect(locator).toHaveCount(5);
    - URL
      - await expect(page).toHaveURL('https://example.com/');
      - await expect(page).toHaveURL(/.\*checkout/);
    - Title
      - await expect(page).toHaveTitle('My App');
