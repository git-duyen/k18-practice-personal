# Tổng hợp kiến thức đã học

## Buổi 7

### 1. DOM mối quan hệ

Quy ước:

- node gốc (màu xanh dương)
- node hiện tại (màu xanh lá)
- node cần chú ý (màu cam)

DOM: relation

- self: node hiện tại
- parent: cha là node phía trên trực tiếp của node hiện tại
- children: con là node phía dưới trực tiếp của node hiện tại
- ancestor: là các node nằm trên đường thẳng trực hệ và nằm phía trên của cây DOM
- descendant: hậu duệ là các node con, cháu, chắt,... (thẻ con của thẻ con)
- sibling: là node cùng cấp và cùng cha của node hiện tại
- following: theo sau gồm các node ở phía bên tay phải của node hiện tại không lấy thẻ con của node hiện tại
- preceding: phía trước gồm các node ở phía bên tay trái của node hiện tại, **trừ các node ancestor**
- following-sibling: anh em phía sau = following + sibling
- preceding-sibling: anh em phía trước = preceding + sibling

### 2. XPath - Advance methods

XPath axes methods (phương thức trục XPath) là các phương pháp để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.

Công dụng:

- Tìm kiếm element dựa trên vị trí tương đối(parent, child, sibling, ancestor...)

- Linh hoạt hơn việc chỉ dùng đường dẫn tuyệt đối hoặc tương đối

1. Wildcard: \*

   Nghĩa là khớp tất cả

   > //div -> khớp thẻ div

   > //\* -> khớp tất cả các loại thẻ

2. Chứa thuộc tính: @attribute

   Sử dụng @ để truy cập thuộc tính của element.

   > //tagname[@attribute='value']

3. AND và OR operators

   AND - Tất cả điều kiện phải đúng

   > //element[@condition1 and @condition2]

   OR - Một trong 2 điều kiện đúng

   > //element[@condition1 or @condition2]

4. Lấy text bên trong element

   text() lấy text node trực tiếp của element

   > //element[text()='exact text']

5. normalize-space(): Chuẩn hoá khoảng trắng

   Loại bỏ khoảng trắng thừa ở đầu, cuối và giữa text

   > //normalize-space(string)

6. contains(): Kiểm tra chứa chuỗi con

   Tìm element có chứa một phần text, không cần khớp chính xác

   > //element[contains(@attribute,'substring')]
   > //element[contains(text(),'substring')]

7. starts-with

   Tìm element bắt đầu bằng text()

   > //element[starts-with(text(),'User')]

8. not

   Tìm element không bắt đầu bằng text()

   > //element[not(starts-with(text(),'User'))]

### 3. XPath - Axes

1. child - Con trực tiếp

   ```markdown
   # Tìm tất cả các button con trực tiếp của form

   //form[@id='test-form']/child::button

   # Kết quả: button "Create Test Case" và "Reset Form"
   ```

2. descendant - Tất cả con cháu

   ```markdown
   # Tìm tất cả input bên trong form (mọi cấp)

   //form[@id='test-form']/descendant::input

   # Kết quả: input TestName, priority (bên trong div.form-group)
   ```

3. parent - Tìm cha

   ```markdown
   # Tìm form cha của button "Create Test Case"

   //button[text()='Create Test Case']/parent::form

   # Kết quả: form#test-form
   ```

4. ancestor - Tìm tổ tiên

   ```markdown
   # Từ button "Edit" trong table, tìm table tổ tiên

   //button[@class='btn-edit']/ancestor::table

   # Kết quả: table#test-table
   ```

5. following-sibling - Anh em phía sau

   ```markdown
   # Từ label "Test Case Name", tìm input cùng cấp ngay sau nó

   //label[@for='testName']/following-sibling::input

   # Kết quả: input#testName

   # Từ cột "Test Name" có test "Login Validation", lấy các cột tiếp theo

   //td[text()='Login Validation']/following-sibling::td

   # Kết quả: cột Type, Priority, Status, Actions
   ```

6. preceding-sibling - Anh em đứng trước

   ```markdown
   # Từ button "Reset Form", tìm button đứng trước nó

   //button[@class='btn-reset']/preceding-sibling::button

   # Kết quả: button "Create Test Case"
   ```

7. following - Tất cả các node sau trong document

   ```markdown
   # Từ h2 "Test Cases List", tìm tất cả các button "Run Test" phía sau

   //h2[text()='Test Cases List']/following::button[@class='btn-run']

   # Kết quả: Tất cả 5 button "Run Test" trong bảng
   ```

8. ancestor-or-self - Tổ tiên hoặc chính nó

   ```markdown
   # Tìm thẻ <tr> từ một thẻ <td> bên trong nó

   //td[text()='Login Validation']/ancestor-or-self::tr

   # Kết quả: Thẻ <tr> chứa <td> có text "Login Validation"
   ```

9. preceding - Tất cả các node trước trong document

   ```markdown
   # Từ h2 "Test Execution Results", tìm tất cả td có text "High" phía trước

   //h2[text()='Test Execution Results']/preceding::td[@class='priority-high']

   # Kết quả: TC0001 và TC0003 priority cells
   ```

10. descendant-or-self - Con cháu hoặc chính nó

    ```markdown
    # Tìm tất cả span status trong table (bao gồm cả chính nó nếu là span)

    //table[@id='test-table']/descendant-or-self::span[contains(@class,'status')]

    # Kết quả: Tất cả span status-passed, status-running, status-failed, status-pending
    ```

Công thức chung:

> //tag/relationship::tagname[@attr='value']
