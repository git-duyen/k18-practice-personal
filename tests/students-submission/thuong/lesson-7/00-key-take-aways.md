# DOM:

- self: node hiện tại.

- parent: là node phía trên trực tiếp của node hiện tại (node cha).

- children: là node phía dưới trực tiếp của node hiện tại (node con).

- ancestor: tổ tiên.

- descendant: hậu duệ là các node con, cháu, chắt,...

- sibling: là các node cùng cấp và cùng cha (node anh em).

- following: là các node ở phía bên tay phải của node hiện tại.

- following-sibling: là các node anh em phía sau.

- preceding: các thẻ bên trái thẻ hiện tại (trừ ancestor và children node hiện tại)

- preceding-sibling: là các node anh em phía trước.

# Xpath:

## 1.Xpath advance:

- Là các phương pháp để điều hướng và chọn các node trong DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.

- Wildcard: Có thể là bất kỳ loại thẻ nào (div/span/form….), bất kỳ attribute nào

  ```
    //* -> toàn bộ element
    //*[@id='username'] -> toàn bộ element có id = username
  ```

- child: con trực tiếp

  ```
    //form[@id='test-form']/child::button -> tìm tất cả các button con trực tiếp của form
  ```

- descendant: tất cả con cháu

  ```
    //form[@id='test-form']/descendant::input -> tìm tất cả các input bên trong của form
  ```

- parent: tìm cha

  ```
    //button[text()='Create Test Case']/parent::form -> tìm form cha của button
  ```

- ancestor: tìm tổ tiên

  ```
    //button[@class='btn-edit']/ancestor::table -> tìm table tổ tiên
  ```

```
Xpath=//div[@class='mobile']/parent::span
//get <span> tag is parents of <div> tag with class = 'mobile'

Xpath=//div[@class='mobile']/child::span
Xpath=//div[@class='mobile']/span
//get all <span> tag are direct children only of <div> tag with class = 'mobile'

Xpath=//div[@class='mobile']/ancestor::div
//get all <div> tags are parents, ancestor of <div> tag with class = 'mobile'

Xpath=//div[@class='mobile']/descendant::span
Xpath=//div[@class='mobile']//span
//get all <span> tags are all nested child of div tag with class = 'mobile'

Xpath=//div[@class='mobile']/preceding::span
//get all <span> tags before<div> tag with class = 'mobile'
//p[@class = "em3"]/preceding-sibling::* -> get all older siblings (same level)
//p[@class = "em3"]/preceding-sibling::p -> get <p> older sibling
//p[@class = "em3"]/preceding-sibling::p[contains(@class, '1')] -> get <p> older sibling with classname contains "1"


Xpath=//div[@class='mobile']/following::span
//get all <span> tag after <div> tag with class = 'mobile'
//p[1]/following-sibling::* -> get all younger siblings (same level)
//p[1]/following-sibling::p -> get <p> younger sibling
//p[1]/following-sibling::p[@class="elm3"] -> get <p> younger sibling with classname = "elm3"

```

## 2.Xpath axes:

- hạn chế dùng index để bền vững
- Chứa thuộc tính: [@attribute = 'value']
  - And và or:

    `//*[@id='username' and @class='classname']`

    `//*[@id='username' or @class='classname']`

  - text(): text nhìn thấy trên màn hình
    `//div[text()='This is a text']`
  - normalize-space(): bỏ space ở đầu và cuối

    `//div[normalize-space() = "login"]`

  - contains(text(), '….'): tìm phần tử chứa cụm:

    `//div[contains(text(), 'Tôi là ')]`

  - starts-with
    `//*[starts-with(text(), 'username')]`

  - not: phủ định
    `//*[not(starts-with(text(), 'username'))]`

  - concat: nối các chuỗi lại với nhau
    `concat('hello',' ','world')`
    
  - tokenize: tách chuỗi theo patten
    `tokenize('a,b,c',',')`