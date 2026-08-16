# Lesson 8: Playwright Tests
## I. Test group / suite
- **Test suite** là tập hợp các test cases
- **Test suite** giúp nhóm các loại test cases 
- Trong Playwright: 
    ```
    test.describe("Material Site", async () => {
        test("User Registration", async ({ page }) => {
            await test.step("go to material page", async () => {
                await page.goto("https://material.playwrightvn.com/index.html");
            });

            await test.step("Click to user registration", async () => {
                await page.locator('//a[@href="01-xpath-register-page.html"]').click();
            });

            console.log("Material Site");   
        });

        test("Product Page", async ({ page }) => {
            await test.step("go to Product page", async () => {
                await page.goto("https://material.playwrightvn.com/index.html");
            });
            await test.step("Click to product page", async () => {
                await page.locator('//a[@href="02-xpath-product-page.html"]').click();
            });              
            console.log("go to Product page");
        });
    });
    ```
## II. Hooks
### 1. Các thời điểm chạy test
- Trước khi chạy
- Trong khi chạy
- Say khi chạy

### 2. Các thời điểm chạy suite
- Trước khi chạy
- Trong khi chạy
- Sau khi chaỵ

### 3. Hooks
- **Playwright** gọi các thời điểm chạy test và chạy suite là hooks
    ```
    --- Trước khi chạy: beforeAll
    |
    |    --- Test 1
    |    |   
    |    |   ---Trước khi chạy ---------| beforeEach
    |    |   ---Trong khi chaỵ          |
    |    |   ---Sau khi chạy -----------|-------| 
    |    |                              |       |
    |    --- Test 2                     |       |
    |    |                              |       |
    |    |   ---Trước khi chạy ---------|       |
    |    |   ---Trong khi chaỵ                  |
    |    |   ---Sau khi chạy -------------------| afterEach
    |    
    --- Sau khi chạy: AfterAll    
    ```
### 4. Các hooks
- beforeAll
- berforeEach
- afterEach
- afterAll

## III. Assertion
### 1. Định nghĩa
- **Assertion** là một câu lệnh để kiểm tra/xem lại một điều gì đó có đúng như mong đợi hay không
- Nếu không có **Assertion** sẽ không biết được test pass hay false

```
test("Demo expect", async () => {
    expect(1 + 2).toEqual(3);


    // expect array length
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);

    // expect string contain
    const string = "hello world";
    expect(string).toContain("world");
});
```
### 2. Các loại Assertion
- Generic Assertions (từ thư viện expert)
    + expect (giá trị) = (giá trị)
- Web-first Assertions (auto waiting)
    + expect (phần tử) có (giá trị)
    + Dùng các element trên web, tự động chờ đến khi điều kiện thoả mãn
    ```
    test("Material page - web-frist1", async({page}) => {
    await page.goto("https://material.playwrightvn.com/019-enable-form.html");

    const submitButton = page.locator('//button[@id="submitButton"]')
    await expect(submitButton).toBeEnabled(); // web first assertion phải có await ở đầu
    })
    ```
