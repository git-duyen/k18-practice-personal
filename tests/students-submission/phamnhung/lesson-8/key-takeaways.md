# Playwright Test

## Test suite

Test suite = Tập hợp các test
`test.describe`
````typescript
test.describe("Login tests", async())
````
**Lưu ý:** Thêm dòng trống giữa mỗi testcase và đóng `});` trước để tránh quên

## Hook

Các thời điểm chạy test
Các thời điểm chạy suite
Playwright gọi các thời điểm này là hook:
- beforeAll: Trước khi chạy suite
- beforeEach: Trước khi chạy các test
- afterEach: Sau khi chạy các test
- afterAll: Sau khi chạy suite
Luu y: Đưa hook lên đầu

## Assertion
Assertion là một câu lệnh để kiểm tra xem một điều gì đó có đúng như mong đợi hay không.

Playwright assert thông qua hàm **expect**
`import {test, expect} from '@playwright/test';`

Các loại assertion:
1. Generic Assertion (từ thư viện expect)
> expect(giá trị) = (giá trị)

*Ví dụ:*
````typescript
expect(value).toBe(expected);
expect(array).toHaveLength(3);
expect(string).toContain('text');
````

2. Web-first Assertion (auto-waiting)
> expect (phần tử) có giá tri

Khi dùng web-first assertion: Chờ flexible, tối đa 5s
*Ví dụ:*
````typescript
test("Material page - web-first", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/019-enable-form.html");

    const submitButton = page.locator("//button[@id='submitButton']");
    await expect(submitButton).toBeEnabled({ timeout: 10_000 });
});
````

Một số Web-first Assertions phổ biến:

- Element state
    - Kiểm tra Visibility
    ````typescript
    await expect(locator).toBeVisible();
    await expect(locator).toBeHidden();
    ````
    - Kiểm tra Enabled/disabled
    ````typescript
    await expect(locator).toBeEnabled();
    await expect(locator).toBeDisabled();
    ````
    - Kiểm tra checked (checkbox/radio)
    ````typescript
    await expect (locator). toBeChecked();
    ````
    - Kiểm tra focus
    ````typescript
    await expect(locator). toBeFocused();
    ````
- Text & Content
    - Có chứa text
    ````typescript
    await expect(locator).toContainText('Hello');
    ````
    - Text chính xác
    ````typescript
    await expect(locator).toHaveText('Welcome');
    ````
    - Text khớp regex (nâng cao)
    ````typescript
    await expect(locator).toHaveText(/welcome/i);
    ````
    - Kiểm tra nhiều elements
    ````typescript
    await expect(locator).toHaveText(['Item 1', 'Item 2']) ;
    ````
- Attributes & Properties
    - Kiểm tra attribute
    ````typescript
    await expect(locator).toHaveAttribute('href', '/about');
    ````
    - Kiểm tra class
    ````typescript
    await expect(locator).toHaveClass('active');
    await expect(locator).toHaveClass(/btn-primary/);
    ````
    - Kiểm tra value (input fields)
    ````typescript
    await expect(locator).toHaveValue('john@example.com');
    ````
    - Kiểm tra count
    ````typescript
    await expect(locator). toHaveCount(5);
    ````
- Page Assertions
    - URL
    ````typescript
    await expect(page). toHaveURL('https://example.com/');
    await expect(page). toHaveURL (/ .*checkout/);
    ````
    - Title
    ````typescript
    await expect(page). toHaveTitle('My App');
    ````