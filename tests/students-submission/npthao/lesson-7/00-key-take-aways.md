# Selector

# DOM
 Quy ước: 
 - node gốc
 - node hiện tại
 - node cần chú ý

 Relation

 self: node hiện tại
 parent: node cha - node phía trên trực tiếp của node hiện tại
 children: node con - node phía dưới trực tiếp của node hiện tại
 ancestor: node tổ tiên 
 descendant: node hậu duệ - node con, cháu, chắt...
 sibling: node anh em - phần tử cùng cấp và cùng cha
 following: node theo sau - node ở bên phải của node hiện tại
 preceding: node phía trước - node ở phía tay trái của node hiện tại, trừ các node ancestor
 following-sibling: node anh em phía sau
 preceding-sibling: node anh em phía trước


# Xpath advance methods

# Xpath axes
- là phương pháp điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau

1. Wildcard: * => khớp tất cả

2. child: con trực tiếp
vd: 
//form[@id ='test-form]/child::button

3. descendant: tất cả con cháu
vd:
//form[@id ='test-form]/descendant::input

4. parent: tìm cha
vd:
//button[text()='Create Test Case']/parent::form

5. ancestor: tìm tổ tiên
vd:
//button[@class='btn-edit']/ancestor::table

6. following-sibling : anh em phía sau
vd:
//label[@for='testName']/following-sibling::input

7. preceding-sibling : anh em đứng trước
vd:
//button[@class='btn-reset']/preceding-sibling::button

8. following : tất cả các node sau trong document

9. ancestor-or-self : tổ tiên hoặc chính nó

10. preceding : Tất cả các node trước trong document

11. descendant-or-self : con cháu hoặc chính nó

12. Chứa thuộc tính @attribute : sử dụng @ để truy cập thuộc tính của element
vd:
//tagname[@attribute = 'value']

# AND và OR operators
1. AND : Tất cả điều kiện phải đúng
//element[@condition1 and @condition2]

2. OR : Một trong các điều kiện đúng
//element[@condition1 or @condition2]

3. Kết hợp AND và OR

# Lấy text bên trong element
- text() lấy text node trực tiếp của element

//element[text()= 'exact text']

- normalize-space() : chuẩn hóa khoảng trắng

normalize-space(string)

- contain() : Kiểm tra chứa chuỗi con

//element[contains(@attribute, 'substring')]
//element[contains(text(), 'substring')]