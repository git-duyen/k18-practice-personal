# Lesson 08 - Playwright tests

## Playwright
### Test suite = tập hợp nhiều test cases
### Test describe: 
    1. Dùng để nhóm các test cases theo chung 1 module hay tính năng
    ```
    test.describe('Test suite: Tính năng Đăng Nhập', () => {
        test('Đăng nhập thành công với user hợp lệ', async ({ page }) => {
        // code test...
    });

        test('Hiển thị lỗi khi sai mật khẩu', async ({ page }) => {
            // code test...
        });
    });
    ```

    2. Chia sẻ thiết lập chung (Hooks): Đây là lợi ích cực lớn về mặt kỹ thuật. Bạn có thể dùng test.beforeEach hoặc test.afterEach bên trong một describe. Những thiết lập này sẽ chỉ áp dụng cho các bài test nằm trong nhóm đó.
    - Ví dụ: Nhóm "Quản lý đơn hàng" thì cần đăng nhập trước (beforeEach), nhưng nhóm "Trang chủ" thì không cần.

    3. Tổ chức Báo cáo (Report) rõ ràng: Khi xem báo cáo, các bài test sẽ được phân cấp. Bạn sẽ thấy:
    Feature: Thanh Toán
        Test 1: Thanh toán bằng thẻ Visa
        Test 2: Thanh toán bằng Momo
    Feature: Giỏ Hàng
        Test 1: Thêm sản phẩm
    Nếu không có describe, báo cáo của bạn sẽ là một danh sách dài dằng dặc, rất khó để biết bài test nào thuộc về tính năng nào.

    4. Quản lý cấu hình riêng (Scoped Options): Bạn có thể cấu hình riêng cho một nhóm test ngay trong describe. Ví dụ: tất cả các bài test trong nhóm "Mobile View" sẽ chạy với màn hình nhỏ, còn các nhóm khác chạy màn hình lớn.
### test.step
- await test.step('Step 1: Go to the homepage', async () => {});  --> tên của step sẽ xuất hiện trực tiếp trên report, khi failed thì sẽ thông báo fail ngay step nào, giúp dễ debug, hỗ trợ xem trong trace viewer 

### Test hooks: có 4 hooks
1. test.beforeAll(): [Setup] chỉ run 1 lần duy nhất đầu tiên trước khi run các TC khác
    Flow: beforeAll --> beforeEach --> TC1 --> afterEach
                    --> beforeEach --> TC2 --> afterEach
                    --> beforeEach --> TC3 --> afterEach 

2. test.beforeEach(): Thay vì bài test nào cũng phải viết lại 5 dòng code đăng nhập, bạn viết ở đây 1 lần duy nhất. Nó giúp code của bạn "DRY" (Don't Repeat Yourself). Run TC trong beforeEach này trước mỗi TC khác trong Test Suite.
    Flow: beforeEach --> TC1
        --> beforeEach --> TC2 
        --> beforeEach --> TC3
        ... 

3. test.afterEach(): Đảm bảo môi trường "sạch" sau mỗi lần test. Ví dụ: Nếu bài test 1 thêm hàng vào giỏ mà không xóa, bài test 2 kiểm tra giỏ hàng trống sẽ bị Fail. afterEach giải quyết việc này. Run TC trong afterEach này sau mỗi TC khác trong Test Suite
    Flow: beforeEach --> TC1 --> afterEach
        --> beforeEach --> TC2 --> afterEach 
        --> beforeEach --> TC3 --> afterEach
        ...

4. test.afterAll(): [teardown] chỉ run 1 lần duy nhất sau cùng, khi các TC khác đã chạy xong
    Flow:   beforeAll --> beforeEach --> TC1 --> afterEach
                        --> beforeEach --> TC2 --> afterEach
                        --> beforeEach --> TC3 --> afterEach
        --> afterAll

## Assertion
### 1. Generic Assertion 
- Kiểm tra tức thì (Sync), không hỗ trợ tham số Timeout. Đây là các hàm kiểm tra giá trị tĩnh. Nó kiểm tra ngay lập tức tại thời điểm dòng code đó chạy qua. Ví dụ : toBe(), toEqual(), toBeTruthy(), toContain()
    expect (giá trị) = (giá trị)
    expect (2+3).toBe(5);
    expect (array).toHaveLength(3);
    expect (string).toContain('text');

    const title = await page.title();
    expect(title).toContain("VnExpress - Báo tiếng Việt nhiều người xem nhất");
    
### 2. Web First Assertion 
- Đợi và thử lại (Async), hỗ trợ tham số {Timeout}, giống implicit wait ở Selenium. Nếu tại giây thứ 1, phần tử chưa hiện ra, nó sẽ không báo lỗi ngay mà đợi tiếp. Nó sẽ thử đi thử lại cho đến giây thứ 10. Ví dụ: toBeVisible(), toHaveText(), toBeEnabled()
    await expect(locator).toBeVisible({ timeout: 10_000 });

    const submitButton = page.locator("//button[@id='submitButton']");
    await expect(submitButton).toBeEnabled({timeout: 10_000});

#### Web-first assertion phổ biến
1. Element State
//Kiểm tra visibility
await expect (locator).toBeVisible();
await expect (locator).toBeHidden();

//Kiểm tra enabled/disabled
await expect (locator).toBeEnabled();
await expect (locator).toBeDisabled();

//Kiểm tra checked/unchecked
await expect (locator).toBeChecked();
await expect (locator).toBeUnchecked();

// Kiểm tra selected/unselected
await expect (locator).toBeChecked();
await expect (locator).not.toBeChecked();

// Kiểm tra focused/unfocused
await expect (locator).toBeFocused();
await expect (locator).toBeUnfocused();

2. Text & Content 
// Có chứa text
await expect(locator).toContainText('Hello');

// Text chính xác
await expect(locator).toHaveText('Hello World');

// Text khớp regex
await expect(locator).toHaveText(/Hello/i); // thêm chữ i để không phân biệt chữ hoa, chữ thường 

// Kiểm tra nhiều elements 
await expect(locator).toHaveText(['Hello', 'World']);

3. Attributes & Properties
// Kiểm tra attribute 
await expect(locator).toHaveAttribute('placeholder', 'Nhập email của bạn');
await expect(locator).toHaveAttribute('href', '/about');

// Kiểm tra class
await expect(locator).toHaveClass(/active/);

// Kiểm tra value của input field
await expect(locator).toHaveValue('daniel@gmail.com');

// Kiểm tra count 
await expect(locator).toHaveCount(5);

4. Page assertions
//URL
await expect(page).toHaveURL("https://vnexpress.net/");
await expect(page).toHaveURL(/.*checkout/);

// Title
await expect(page).toHaveTitle("VnExpress - Báo tiếng Việt nhiều người xem nhất");