 # Playwright test

## Test group/suite

### Test suite 
Test suite = tập hợp test cases, nhóm các test lại cho dễ quản lý

```
test.describe("tên suite", async ({page}) =>{
    test("test1", async ({page}) =>{
        //code ...
    })
    test("test2", async ({page}) =>{
        //code ...
    })
});
```

## Hooks
Hooks là các thời điểm đặc biệt khi chúng ta chạy test

Các hooks:
* beforeAll
* beforeEach
* afterEach
* afterAll

## Assertion & Web assertion

### Playwright Assertion
Playwright assert thông qua **hàm expect**
```
import {test, expect} from '@playwright/test'

test('Demo expect', async()=>{
    expect(1+2).toEqual(4);
});

//expected: 4
//received: 3 => fail
```
### Web assertion

#### Các loại assertion
* Generic Assertion (từ thư viện expect)
    * `expect (giá trị) = giá trị`
* Web-first Assertions (auto-waiting)
    * `expect(phần tử) có giá trị`
    * Dùng cho các elements trên web, tự động chờ đến khi điều kiện được thỏa mãn

#### Web-first assertion phổ biến

**Element State**
```
//Kiểm tra visibility
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();

//Kiểm tra enabled/disenabled
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();

//Kiểm tra checked(checkbox/radio)
await expect(locator).toBeChecked();

//Kiểm tra focus
await expect(locator).toBeFocused();
```

**Text & Content**
```
// có chứa text
await expect(locator).toContainText('Hello');

//Text chính xác
await expect(locator).toHaveText('Welcome');

//Text khớp regex
await expect(locator).toHaveText(/welcome/i);

//Kiểm tra nhiều elements
await expect(locator).toHaveText(['Item 1', 'Item 2']);
```

**Attributes & Properties**
```
//Kiểm tra attribute
await expect(locator).toHaveAttribute('href', '/about');

//Kiểm tra class
await expect(locator).toHaveClass('active');
await expect(locator).toHaveClass(/btn-primary/);

//Kiểm tra value (input fields)
await expect(locator).toHaveValue('john@example.com');

//Kiểm tra count
await expect(locator).toHaveCount(5);
```

**Page Assertions**
```
//URL
await expect(page).toHaveURL('https://example.com/');
await expect(page).toHaveURL(/.*checkout/);

//Title
await expect(page).toHaveTitle('MyApp');
```