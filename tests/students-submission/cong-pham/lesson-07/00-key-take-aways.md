# Selector

- Học về DOM: visualize
- Học về DOM: relation

* self
* parent: là node ở trên trực tiếp từ node hiện tại
* child: là các node con phía dưới từ node hiện tại
* ancestor: tổ tiên - là các node cha của cha ...
* descendant: hậu duệ - là các node con, node cháu,... từ node hiện tại
* sibling: anh em - là các node cùng cấp và cùng cha
* following: theo sau - là các node ở dưới và node con của node dưới đó
* preceding: đằng trước - là các node ở trên và node con của node trên đó không tính các tổ tiên
* following - sibling: anh em cùng cấp ở dưới
* preceding - sibling: anh em cùng cấp ở trên

# XPath axes

- Wildcard: /\* - Khớp tất cả các thẻ
- /child:: con trực tiếp
- /descendant:: tất cả con cháu
- /parent:: tìm cha
- /ancestor:: Tìm tổ tiên
- /following-sibling:: tìm anh em cùng cấp ở dưới
- /preceding-sibling:: tìm anh em cùng cấp ở trên
- /following:: tìm tất cả node dưới trong dom
- /preceding:: tìm tất cả node trên trong dom

# XPath advance

- @attribute: tìm thuộc tính của element
- And: tất cả điều kiện phải đúng
- Or: 1 trong các điều kiện đúng
- text(): tìm text trực tiếp trong element
- normalize-space(): bỏ space ở đầu và cuối nếu text chứa space
- contains(): tìm element chứa điều kiện cần tìm
