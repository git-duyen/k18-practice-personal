# GIT

## 1.MERGE

- Fast-forward: không tạo ra commit merge; xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo đến khi merge nhánh feature
- Three-way: tạo ra commit merge; xảy ra khi muốn merge feature branch vào nhánh chính, mà lịch sử của 2 nhánh đã có khác biệt

## 2.REBASE

- Tại nhánh nhỏ: git rebase <tên nhánh chính>

## 3.SQUASH

- Có nhiều commit nhỏ lẻ muốn gom lại ~ rebase trên chính nó
- Git rebase -i HEAD~<số commit>
- Giữ commit trên cùng làm gốc, sửa các chữ pick commit khác thành chữ s, gõ :wq
- Muốn giữ commit message nào thì không comment commit message, còn lại comment hết bằng #, gõ :wq

## 4.CONFLICT

- Conflict: xảy ra khi 2 người cùng sửa 1 file sau đó merge với nhau:
- Nằm giữa <<<HEAD và ===: nội dung nhánh hiện tại
- Nằm giữa === và >>><tên branch muốn merge>: nội dung nhánh muốn merge

# CSS SELECTOR

- Cú pháp ngắn gọn, đơn giản
- Không sử dụng được các case phức tạp
- Css selector nhanh hơn Xpath

| Loại Selector  | CSS Selector        | XPath Selector                          |
| :------------- | :------------------ | :-------------------------------------- |
| **Tag**        | `div`               | `//div`                                 |
| **id**         | `#registrationForm` | `//form[@id="registrationForm"]`        |
| **class**      | `.form-group`       | `//div[@class='form-group']`            |
| **child**      | `#parent > input`   | `//div[@id='parent']/input`             |
| **descendant** | `#ancestor div`     | `//div[@id='ancestor']/descendant::div` |
| **combine**    | `div, input`        | `//div \| //input`                      |

# PLAYWRIGHT SELECTOR

- Là hệ thống locator mạnh mẽ và linh hoạt của Playwright để tìm và tương tác với các phần tử trên trang web
- Một số locator thường dùng:

1. page.getByRole()

- Tìm element theo ARIA role
  - button:

  ```
    await page.getByRole('button', { name: 'Submit' }).click();
  ```

  - link:

  ```
    await page.getByRole('link', { name: 'Learn more' }).click();
    await page.getByRole('link', { name: 'Learn more', exact: true }).click();
  ```

  - textbox:

  ```
    await page.getByRole('textbox', { name: 'Search products', exact: true }).fill("hello");
  ```

  - combobox:

  ```
    await page.getByRole('combobox', { name: 'Country selection', exact: true }).selectOption("Viet Nam");
  ```

  - checkbox:

  ```
    await page.getByRole('checkbox', { checked: true }); //tìm checkbox đã được check
    await page.getByRole('checkbox', { name: "Option" }).check();
  ```

  - radio:

  ```
    await page.getByRole('radio', { name: 'Male' }).nth(0).click(); //index = 0, có chứa cụm "male"
    await page.getByRole('radio', { name: 'Male', exact: true }).click(); //chính xác cụm = "male"
  ```

  - heading:

  ```
    await page.getByRole('heading', { name: 'Dashboard', level: 1 }).textContent(); //text = Dashboard, level 1
  ```

  - listitem:

  ```
    await page.getByRole('listitem').filter({ hasText: "Ph"}).textContent();//item chứ "Ph"
  ```

2. page.getByText()

- Luôn normalize trước (ví dụ có string >2 spaces biến thành 1 spaces) và nếu input là button hoặc submit sẽ tìm theo value chứ kh phải text content

  ```
  await page.getByText('Hello World').click(); // tìm chính xác text
  await page.getByText('Hello', { exact: false }); //tìm chứa subtring
  await page.getByText(/hello/i); //regex: case insensitive
  await page.locator('div').getByText('hello'); //kết hợp locator khác
  ```

3. page.getByLabel(text, option)

- Tìm element thông qua text của label liên kết với nó. Ví dụ 1 checkbox có ô checkbox là tag input, liền kề nó là tag label và có attribute for='id input' nên khi click label thì checkbox cũng được checked
  - tìm input thông qua label chính xác

    ```
    await page.getByLabel('Email address').fill('test@gm.co');
    ```

  - for có value bằng id của input => được dùng text của label

  - tìm theo substring

    ```
    await page.getByLabel('Email', { exact: false }).fill('test@gm.co');
    ```

  - thêm vị trí bằng first(), last(), nth(<index>)

    ```
    await page.getByLabel('Password').first().fill("123456");//cho Password
    await page.getByLabel('Password').last().fill("123456");//cho Confirm Password
    await page.getByLabel('Password').nth(0).fill("123456");
    ```

4. page.getByPlaceholder()

   ```
   await page.getByPlaceholder('Input your first name').fill('Thuong');
   ```

5. page.getByAltText()

- Cho hình ảnh (alternative text):

  ```
  await page.getByAltText('Hello World').click();
  ```

6. page.getByTitle()

   ```
   await expect(page.getByTitle('Hello World')).toHaveText('25 issues');
   ```

7. page.getByTestId()

- Mặc định dùng cho attribute "data-testid"

  ```
  await page.setTestIdAttribute('id');
  await page.getByTestId('directions').click();
  ```
