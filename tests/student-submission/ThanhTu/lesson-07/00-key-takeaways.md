# XPath advance

## Typescript
Typescript = Javascript + Utils
* Strong type => Giảm lỗi vặt, phần mềm tin cậy hơn
* Tính năng mới => code ngắn gọn

## XPath: axes

## DOM

### DOM: relation
* **self**: node hiện tại

* **parent**: node cha, là node **phía trên trực tiếp** của node còn lại

* **children**: node con, node phía dưới trực tiếp của node hiện tại

* **ancestor**: tổ tiên

* **descendant**: hậu duệ

* **sibling**: anh em

* **following**: theo sau, toàn bộ những thẻ trong thẻ theo sau

* **preceding**: phía trước, toàn bộ những thẻ ở trên không tính thẻ cha

* **following-sibling**: anh em phía sau

* **preceding-sibling**: anh em phía trước

### XPath: advance methods

* **wildcard**: *, chọn tất cả thẻ

* **chứa thuộc tính**, chọn thẻ theo thuộc tính, vd class, id, name

* **and** và **or**,
    * and: chọn thẻ có thỏa điều kiện and
    * or: chọn thẻ thỏa 1 trong 2 điều kiện or

* **innerText: text()**, `text() = "<nội dung thẻ>"`

* **normalize-space()**, kiểm tra giá trị không tính khoảng trắng `normalize-space() = "nội dung thẻ"`

* **contains**, tìm 1 đoạn trong nội dung thẻ `contains(text(), "nội dung")`

* **starts-with**, tìm thẻ với có nội dung bắt đầu với `starts-with(text(), "nội dung")`

* **not**, phủ định, tìm thẻ không có điều kiện cần tìm `not(starts-with(text(), "nội dung"))` 

### XPath: axes

`//tag/relationship::tagname[@attr="value"]`