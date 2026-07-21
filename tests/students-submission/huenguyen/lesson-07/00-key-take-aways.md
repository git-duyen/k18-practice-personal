## 1. DOM 
- self: node hiện tại 
- parent: cha 
- children: conlà node phía dưới trực tiếp của node hiện tại
- ancestor: tổ tiên
- descendant: hậu duệ là các node con, cháu, chắt,...
- sibling: anh em Là những phần tử cùng cấp và cùng cha
- following: theo sau
Gồm các node ở phía bên tay phải của node hiện tại.
- preceding: phía trước Gồm các node ở phía bên tay trái của node hiện tại, trừ các node ancestor
- following-sibling: anh em phía sau = following + sibling
- preceding-sibling: anh em phía trước = preceding + sibling

## 2. Xpath 
- XPath axes methods (phương thức trục XPath) là các phương pháp để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.

Công dụng
- Tìm kiếm elements dựa trên vị trí tương đối (parent, child, sibling, ancestor...)
- Linh hoạt hơn việc chỉ dùng đường dẫn tuyệt đối hoặc tương đối

 ## 2.1 Wildcard: 
 - Nghĩa là khớp tất cả
```
   VD:
    //div -> khớp thẻ div

    //* -> khớp tất cả các loại thẻ
```

## 2.2 descendant 
- Tất cả con cháu
```
VD:# Tìm tất cả input bên trong form (mọi cấp)

//form[@id='test-form']/descendant::input# 

Kết quả: input testName, priority (bên trong div.form-group)
```

## 2.3 Parent 
- Tìm cha 
```
VD:# Tìm form cha của button "Create Test Case"

//button[text()='Create Test Case']/parent::form# 

Kết quả:form#test-form
```

## 2.4 ancestor
- Tìm tổ tiên
```
# Từ button "Edit" trong table, tìm table tổ tiên

//button[@class='btn-edit']/ancestor::table# 

Kết quả: table#test-table
```

## 2.5 following-sibling
- Anh em phía sau
```
# Từ label "Test Case Name", tìm input cùng cấp ngay sau nó

//label[@for='testName']/following-sibling::input# 
Kết quả: input#testName----# 

Từ cột "Test Name" có text "Login Validation", lấy các cột tiếp theo

//td[text()='Login Validation']/following-sibling::td# 

Kết quả: cột Type, Priority, Status, Actions
```

## 2.6 preceding-sibling
-  Anh em đứng trước
```
# Từ button "Reset Form", tìm button đứng trước nó
//button[@class='btn-reset']/preceding-sibling::button# 
Kết quả: button "Create Test Case"
```

## 2.7 Following 
- Tất cả node sau trong document
```
# Từ h2 "Test Cases List", tìm tất cả button "Run Test" phía sau
//h2[text()='Test Cases List']/following::button[@class='btn-run']# 
Kết quả: Tất cả 5 button "Run Test" trong bảng
```

## 2.8 ancestor-or-self
- Tổ tiên hoặc chính nó
```
# Tìm tất cả span status trong table (bao gồm cả chính nó nếu là span)
//table[@id='test-table']/ancestor-or-self::span[contains(@class, 'status')]#
Kết quả: Tất cả span status-passed, status-running, status-failed, status-pending
 ```
## 2.9 preceding
- Tất cả node trước trong document
```
Từ h2 "Test Execution Results", tìm tất cả td có text "High" phía trước
//h2[text()='Test Execution 
Results']/preceding::td[@class='priority-high']
Kết quả: TC001 và TC003 priority cells
```
## 2.10 descendant-or-self
- Con cháu hoặc chính nó
```
# Tìm tất cả span status trong table (bao gồm cả chính nó nếu là span)
//table[@id='test-table']/descendant-or-self::span[contains(class, 'status')]# 
Kết quả: Tất cả span status-passed, status-running, status-failed, status-pending
```

## 2.11 Chứa thuộc tính: @attribute
- Sử dụng @ để truy cập thuộc tính của element.
VD://tagname[@attribute='value']

## 2.12 AND và OR operators
- AND - Tất cả điều kiện phải đúng
//element[@condition1 and @condition2]

- OR - Một trong các điều kiện đúng
//element[@condition1 or @condition2]Kết hợp AND và OR

## 2.13 normalize-space()
-  Chuẩn hóa khoảng trắng
Loại bỏ khoảng trắng thừa ở đầu, cuối và giữa 

text.normalize-space(string)

## 2.14 Lấy text bên trong element
text() lấy text node trực tiếp của element.
//element[text()='exact text']

## 2.15 contains(): Kiểm tra chứa chuỗi con
Tìm element có chứa một phần text, không cần khớp chính xác.

//element[contains(@attribute, 'substring')]
//element[contains(text(), 'substring')]
