# TEST DESCRIBE:

- Tập hợp test case
- Nhóm các test lại cho dễ quản lý

```
Test group/suite: test.describe: giúp nhóm các test quản lý dễ dàng

test.describe("login tests", async () => {
  test('<tên test>', async ({page}) => {
      //code
  });
  test('<tên test>', async ({page}) => {
      //code
  });
});
```
    
# TEST HOOKS:

- Các thời điểm chạy test:
  - Trước khi chạy
  - Trong khi chạy
  - Sau khi chạy

- Các thời điểm chạy suite:
  - Trước khi chạy
  - Trong khi chạy
  - Sau khi chạy

- Các hooks:
  - beforeAll
  - beforeEach
  - afterEach
  - afterAll

```
BeforeAll: (tạo, mở) 1 lần duy nhất
  - Trước khi chạy suite
  - Trong khi chạy suite:

BeforeEach: (đăng nhập)
  - Trước khi chạy test 1
  - Trong khi chạy test 1
  - Sau khi chạy test 1
AfterEach: (đăng xuất)

BeforeEach
  -  Trước khi chạy test 2
  -  Trong khi chạy test 2
  -  Sau khi chạy test 2
AfterEach
  - Sau khi chạy suite
AfterAll: (xóa, đóng) 1 lần duy nhất
```

# PLAYWRIGHT ASSERTION:

- Là một lệnh để kiểm tra xem một điều gì đó có đúng như mong đợi hay không
- Verify lại các thông tin sau khi input


```
- Import tv PW
  import {test, expect} from '@playwright/test';

- Các loại:
+ Generic Assertions: từ thư viên expect
  expect(giá trị) = (giá trị)

Vd: const isEnabled = await page.locator("//button").isEnabled();
  expect(isEnabled).toEqual(true);
    § expect(value).toBe(expected);
    § expect(array).toHaveLength(3);
    § expect(string).toContain('hanh');
    
+ Web-first Assertions (auto-waiting): tự động chờ đến khi điều kiện được thỏa mãn
  Expect(phần tử) = (giá trị)
==> const submitButton = page.locator("//button");
    await expect(submitButton).toBeEnabled({ timeout: 5_000 });

  STATE
    § Kiểm tra visible
      await expect(locator).toBeVisible();
      await expect(locator).toBeHidden();
        
    § Kiểm tra enabled/disabled
      await expect(locator).toBeEnabled();
      await expect(locator).toBeDisabled();
        
    § Kiểm tra checked (checkbox/radio)
      await expect(locator).toBeChecked();
        
    § Kiểm tra focus
      await expect(locator).toBeFocused();
          
  TEXT
    § Có chứa text
      await expect(locator).toContainText('hanh', { timeout: 2_000 });
      //<div>hanh nguyen</div>
        
    § Text chính xác
      await expect(locator).toHaveText('hanh');
      //<div>hanh</div>
        
    § Text khớp regex
      await expect(locator).toHaveText(/hanh/i);//lấy cả hoa và thường
        
    § Kiểm tra nhiều element: đúng số lượng, đúng thứ tự
      await expect(locator).toHaveText(['hanh', 'nguyen']);
      /* 
      <li>hanh</li>
      <li>nguyen</li>
      */
          
  ATTRIBUTE
    § Kiểm tra attribute
      await expect(locator).toHaveAttribute('href', '/about');
      //<a href="/about">About</a>
        
    § Kiểm tra class
      await expect(locator).toHaveClass('active')
      //<div class="active"></div>
      
      await expect(locator).toHaveClass(/btn-primary/);
      //<button class="btn btn-primary large"></button>
      //giống //*[contains(@class,'btn-primary')]
        
    § Kiểm tra value (input/textarea field)
      await expect(locator).toHaveValue('hanh@gmail.com');
        
    § Kiểm tra count
      await expect(locator).toHaveCount(5);
      /*
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      */
          
  PAGE
    § URL
      await expect(page).toHaveURL('https://abc.com');
      
      //https://abc.com/checkout
      //https://abc.com/order/checkout?id=5
        
    § Title
      await expect(page).toHaveTitle('My App');
 ```