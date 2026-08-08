# Lesson 07 - DOM Relation & XPath Advance

## 1. Mục tiêu bài học

Lesson 07 tập trung vào phần **Selector**, đặc biệt là **XPath nâng cao**.

Nội dung chính gồm:

- DOM tree
- Quan hệ giữa các node trong DOM
- XPath axes
- XPath functions
- Wildcard
- Truy cập thuộc tính bằng `@attribute`
- Điều kiện `and`, `or`
- Lấy text bằng `text()`
- Chuẩn hóa khoảng trắng bằng `normalize-space()`
- Kiểm tra chuỗi con bằng `contains()`
- Lọc theo vị trí bằng `position()`
- Cách kết hợp nhiều axes
- Cách viết XPath linh hoạt hơn trong automation test

---

# 2. DOM là gì?

DOM là cách trình duyệt biểu diễn HTML dưới dạng **cây node**.

Mỗi thẻ HTML như:

```html
html
body
div
form
input
button
table
article
footer
```

được xem là một **node** trong cây DOM.

Ví dụ cây DOM đơn giản:

```
html
├── head
│   ├── title
│   ├── link
│   └── meta
└── body
    ├── div
    │   ├── h1
    │   ├── form
    │   │   └── div
    │   └── iframe
```

Khi viết XPath, mình thường chọn một **node hiện tại** làm mốc, sau đó đi lên, đi xuống, hoặc đi sang ngang để tìm node cần thao tác.

---

# 3. Quy ước trong DOM tree

Trong sơ đồ DOM:

- **Node gốc**: node nằm trên cùng của cây.
- **Node hiện tại**: node đang được xét.
- **Node cần chú ý**: các node có quan hệ với node hiện tại.

Ví dụ:

```
node gốc
└── node cha
    └── node hiện tại
        ├── con 1
        ├── con 2
        └── con 3
```

---

# 4. Các quan hệ cơ bản trong DOM

## 4.1. `self` - node hiện tại

`self` là **chính node hiện tại**.

```
self = chính nó
```

Ví dụ:

```
//div/self::div
```

Nghĩa là lấy chính node `div` hiện tại.

---

## 4.2. `parent` - cha trực tiếp

`parent` là **node cha trực tiếp** của node hiện tại.

```
parent = đi lên 1 cấp
```

Ví dụ:

```
//input/parent::div
```

Nghĩa là từ thẻ `input`, đi lên tìm thẻ cha trực tiếp là `div`.

---

## 4.3. `child` / `children` - con trực tiếp

`child` là các **node con trực tiếp** của node hiện tại.

```
child = đi xuống 1 cấp
```

Ví dụ:

```
//div/child::input
```

Nghĩa là từ thẻ `div`, tìm các thẻ `input` là con trực tiếp của nó.

Lưu ý:

```
child chỉ lấy con trực tiếp, không lấy cháu/chắt.
```

---

## 4.4. `ancestor` - tổ tiên

`ancestor` là các node **phía trên node hiện tại**.

Bao gồm:

- Cha
- Ông
- Cụ
- Các cấp phía trên

```
ancestor = đi lên nhiều cấp
```

Ví dụ:

```
//input/ancestor::form
```

Nghĩa là từ thẻ `input`, đi ngược lên trên để tìm thẻ tổ tiên là `form`.

---

## 4.5. `descendant` - hậu duệ / con cháu

`descendant` là các node **phía dưới node hiện tại**.

Bao gồm:

- Con
- Cháu
- Chắt
- Các cấp sâu hơn

```
descendant = đi xuống nhiều cấp
```

Ví dụ:

```
//form/descendant::input
```

Nghĩa là từ thẻ `form`, tìm tất cả thẻ `input` nằm bên trong nó, kể cả không phải con trực tiếp.

---

## 4.6. `sibling` - anh em cùng cấp

`sibling` là các node:

- Cùng cấp với node hiện tại
- Có cùng node cha với node hiện tại

```
sibling = anh em cùng cha
```

Ví dụ:

```
node cha
├── sibling đứng trước
├── node hiện tại
└── sibling đứng sau
```

---

## 4.7. `following` - các node phía sau

`following` là các node xuất hiện **phía sau node hiện tại** trong DOM/document.

```
following = các node phía sau
```

Ví dụ:

```
//div/following::button
```

Nghĩa là từ node `div` hiện tại, tìm các thẻ `button` xuất hiện phía sau nó trong DOM.

Lưu ý:

```
following không lấy node con của node hiện tại.
following không bắt buộc node tìm được phải cùng cha.
```

---

## 4.8. `preceding` - các node phía trước

`preceding` là các node xuất hiện **phía trước node hiện tại** trong DOM/document.

```
preceding = các node phía trước
```

Ví dụ:

```
//button/preceding::input
```

Nghĩa là từ thẻ `button`, tìm các thẻ `input` xuất hiện trước nó trong DOM.

Lưu ý:

```
preceding không lấy các node ancestor/tổ tiên của node hiện tại.
preceding không bắt buộc node tìm được phải cùng cha.
```

---

## 4.9. `following-sibling` - anh em phía sau

`following-sibling` là các node:

- Cùng cha với node hiện tại
- Đứng sau node hiện tại

```
following-sibling = anh em cùng cấp phía sau
```

Ví dụ:

```
//label[text()='Email']/following-sibling::input
```

Nghĩa là từ thẻ `label`, tìm thẻ `input` cùng cấp và đứng phía sau nó.

---

## 4.10. `preceding-sibling` - anh em phía trước

`preceding-sibling` là các node:

- Cùng cha với node hiện tại
- Đứng trước node hiện tại

```
preceding-sibling = anh em cùng cấp phía trước
```

Ví dụ:

```
//input[@id='email']/preceding-sibling::label
```

Nghĩa là từ thẻ `input`, tìm thẻ `label` cùng cấp và đứng phía trước nó.

---

# 5. XPath Axes là gì?

**XPath axes methods** là các phương pháp dùng để điều hướng và chọn node trong cây DOM/XML/HTML dựa trên mối quan hệ giữa các node.

Công dụng:

- Tìm element dựa trên vị trí tương đối.
- Tìm element dựa trên quan hệ cha/con/anh em/tổ tiên.
- Linh hoạt hơn so với dùng XPath tuyệt đối.
- Hữu ích khi element không có `id`, `class`, hoặc text rõ ràng.

Cú pháp chung:

```
//tag/axis::targetTag
```

Hoặc có thêm điều kiện:

```
//tag/axis::targetTag[@attribute='value']
```

Ví dụ:

```
//form[@id='test-form']/descendant::input
```

Nghĩa là:

```
Từ form có id="test-form", tìm tất cả input nằm bên trong form đó.
```

---

# 6. Bảng tổng hợp XPath Axes

| Axis | Cú pháp | Mô tả | Ví dụ | Kết quả |
| --- | --- | --- | --- | --- |
| `child` | `child::node` | Chọn node con trực tiếp | `//div/child::p` | Tất cả `<p>` là con trực tiếp của `<div>` |
| `descendant` | `descendant::node` | Chọn tất cả node con cháu ở mọi cấp | `//div/descendant::span` | Tất cả `<span>` nằm trong `<div>` |
| `parent` | `parent::node` | Chọn node cha trực tiếp | `//p/parent::div` | Thẻ `<div>` là cha của `<p>` |
| `ancestor` | `ancestor::node` | Chọn tất cả node tổ tiên | `//span/ancestor::div` | Tất cả `<div>` là tổ tiên của `<span>` |
| `following-sibling` | `following-sibling::node` | Chọn node anh em phía sau, cùng cấp | `//h2/following-sibling::p` | Tất cả `<p>` đứng sau `<h2>` cùng cấp |
| `preceding-sibling` | `preceding-sibling::node` | Chọn node anh em phía trước, cùng cấp | `//h3/preceding-sibling::h2` | Tất cả `<h2>` đứng trước `<h3>` cùng cấp |
| `following` | `following::node` | Chọn tất cả node phía sau trong document | `//h1/following::p` | Tất cả `<p>` xuất hiện sau `<h1>` |
| `preceding` | `preceding::node` | Chọn tất cả node phía trước trong document | `//footer/preceding::div` | Tất cả `<div>` xuất hiện trước `<footer>` |
| `attribute` | `attribute::name` hoặc `@name` | Chọn thuộc tính của node | `//div/@class` | Thuộc tính `class` của `<div>` |
| `self` | `self::node` | Chọn chính node hiện tại | `//p/self::p` | Chính node `<p>` đó |
| `descendant-or-self` | `descendant-or-self::node` | Chọn node hiện tại và tất cả con cháu | `//div/descendant-or-self::*` | `<div>` và tất cả node bên trong |
| `ancestor-or-self` | `ancestor-or-self::node` | Chọn node hiện tại và tất cả tổ tiên | `//span/ancestor-or-self::div` | `<span>` nếu phù hợp và các `<div>` tổ tiên |
| `namespace` | `namespace::prefix` | Chọn namespace nodes | `//element/namespace::*` | Ít dùng trong HTML automation |

---

# 7. Khi nào dùng axis nào?

| Nhu cầu | XPath nên dùng |
| --- | --- |
| Tìm cha trực tiếp | `parent::` |
| Tìm container/tổ tiên phía trên | `ancestor::` |
| Tìm con trực tiếp | `child::` |
| Tìm mọi element bên trong | `descendant::` |
| Tìm element cùng cấp phía sau | `following-sibling::` |
| Tìm element cùng cấp phía trước | `preceding-sibling::` |
| Tìm element phía sau trong toàn document | `following::` |
| Tìm element phía trước trong toàn document | `preceding::` |
| Lấy chính node hiện tại | `self::` |
| Lấy chính nó và con cháu | `descendant-or-self::` |
| Lấy chính nó và tổ tiên | `ancestor-or-self::` |
| Lấy thuộc tính | `@attribute` |
| Lấy tất cả loại thẻ | `*` |

---

# 8. Wildcard

## 8.1. Ý nghĩa

Wildcard `*` nghĩa là **khớp tất cả các loại thẻ**.

Ví dụ:

```
//div
```

Chỉ khớp thẻ `div`.

```
//*
```

Khớp tất cả các loại thẻ.

## 8.2. Ví dụ

HTML:

```html
<div class="form-group">
  <label for="testType">Testing Type:</label>
  <select id="testType" name="testType">
    <option value="blackbox">Black Box Testing</option>
    <option value="whitebox">White Box Testing</option>
    <option value="integration">Integration Testing</option>
    <option value="regression">Regression Testing</option>
  </select>
</div>
```

XPath:

```
//div/*
```

Nghĩa là:

```
Tìm tất cả node con trực tiếp bên trong div, bất kể là thẻ gì.
```

Kết quả có thể gồm:

```
label
select
```

---

# 9. Truy cập thuộc tính bằng `@attribute`

Trong XPath, ký hiệu `@` dùng để truy cập thuộc tính của element.

Cú pháp:

```
//tagname[@attribute='value']
```

Ví dụ:

```
//input[@id='testName']
```

Nghĩa là:

```
Tìm input có thuộc tính id bằng "testName".
```

Ví dụ khác:

```
//button[@class='btn-submit']
```

```
//form[@id='test-form']
```

```
//label[@for='testName']
```

Có thể lấy trực tiếp giá trị thuộc tính:

```
//div/@class
```

Ví dụ:

```
//span[@class='date']/parent::div/@class
```

Nghĩa là:

```
Từ span có class="date"
→ đi lên div cha
→ lấy thuộc tính class của div cha.
```

---

# 10. Kiểm tra element có thuộc tính hay không

Nếu viết:

```
//a[@href]
```

nghĩa là:

```
Tìm thẻ a có tồn tại thuộc tính href.
```

Không cần biết `href` bằng giá trị gì, chỉ cần element đó **có thuộc tính `href`** là match.

Ví dụ:

```
//nav/child::a[@href]
```

Nghĩa là:

```
Từ nav
→ lấy tất cả thẻ a là con trực tiếp
→ chỉ lấy thẻ a có thuộc tính href.
```

So sánh:

```
//a[@href]
```

Lấy tất cả thẻ `a` có thuộc tính `href`.

```
//a[@href='/about']
```

Chỉ lấy thẻ `a` có `href` đúng bằng `/about`.

---

# 11. AND và OR trong XPath

## 11.1. `and` - tất cả điều kiện phải đúng

Dùng khi element cần thỏa mãn **tất cả điều kiện**.

Cú pháp:

```
//element[@condition1 and @condition2]
```

Ví dụ:

```
//input[@type='text' and @id='testName']
```

Nghĩa là:

```
Tìm input có type="text" và id="testName".
```

Element chỉ được chọn nếu cả hai điều kiện đều đúng.

---

## 11.2. `or` - một trong các điều kiện đúng

Dùng khi element chỉ cần thỏa mãn **một trong các điều kiện**.

Cú pháp:

```
//element[@condition1 or @condition2]
```

Ví dụ:

```
//button[@type='submit' or @type='reset']
```

Nghĩa là:

```
Tìm button có type="submit" hoặc type="reset".
```

---

## 11.3. Kết hợp `and` và `or`

Ví dụ:

```
//input[(@type='text' or @type='email') and @name='username']
```

Nghĩa là:

```
Tìm input có name="username"
và type là "text" hoặc "email".
```

Khi điều kiện phức tạp, nên dùng ngoặc `()` để rõ logic.

---

# 12. Lấy text bằng `text()`

`text()` dùng để lấy text node trực tiếp bên trong element.

Cú pháp:

```
//element[text()='exact text']
```

Ví dụ:

```
//button[text()='Create Test Case']
```

Nghĩa là:

```
Tìm button có text chính xác là "Create Test Case".
```

Ví dụ khác:

```
//h2[text()='Test Cases List']
```

Lưu ý:

```
text() thường yêu cầu text khớp chính xác.
Nếu text có khoảng trắng thừa hoặc xuống dòng, XPath có thể không match.
```

Khi đó nên dùng `normalize-space()`.

---

# 13. `normalize-space()`

## 13.1. Ý nghĩa

`normalize-space()` dùng để chuẩn hóa khoảng trắng trong text.

Nó giúp:

- Xóa khoảng trắng thừa ở đầu text.
- Xóa khoảng trắng thừa ở cuối text.
- Gom nhiều khoảng trắng ở giữa thành một khoảng trắng.

Cú pháp:

```
normalize-space(string)
```

## 13.2. Ví dụ

```
//button[normalize-space()='Create Test Case']
```

Nghĩa là:

```
Tìm button có text là "Create Test Case" sau khi đã loại bỏ khoảng trắng thừa.
```

Nên dùng khi HTML có dạng:

```html
<button>
    Create Test Case
</button>
```

Nếu dùng:

```
//button[text()='Create Test Case']
```

có thể không match do có xuống dòng/khoảng trắng.

Nên dùng:

```
//button[normalize-space()='Create Test Case']
```

Hoặc:

```
//button[normalize-space(text())='Create Test Case']
```

---

# 14. `contains()`

## 14.1. Ý nghĩa

`contains()` dùng để tìm element có chứa một phần text hoặc một phần giá trị thuộc tính.

Không cần khớp chính xác toàn bộ.

Cú pháp:

```
//element[contains(@attribute, 'substring')]
```

Hoặc:

```
//element[contains(text(), 'substring')]
```

---

## 14.2. Dùng `contains()` với thuộc tính

Ví dụ:

```
//span[contains(@class, 'status')]
```

Nghĩa là:

```
Tìm span có class chứa chuỗi "status".
```

Có thể match:

```html
<span class="status-passed"></span>
<span class="status-running"></span>
<span class="status-failed"></span>
<span class="status-pending"></span>
```

---

## 14.3. Dùng `contains()` với text

Ví dụ:

```
//button[contains(text(), 'Create')]
```

Nghĩa là:

```
Tìm button có text chứa chữ "Create".
```

Có thể match:

```html
<button>Create Test Case</button>
```

Ví dụ khác:

```
//h2[contains(text(), 'Test Cases')]
```

---

# 15. `position()` - Lấy element theo vị trí

## 15.1. Ý nghĩa

`position()` dùng để lọc element theo thứ tự xuất hiện trong danh sách kết quả XPath.

Ví dụ:

```
//h2[@id='title1']/following-sibling::p[position() <= 2]
```

Nghĩa là:

```
Từ h2 có id="title1"
→ lấy các p anh em phía sau
→ chỉ lấy 2 p đầu tiên.
```

## 15.2. Ví dụ khác

```
//article[2]
```

Nghĩa là lấy `article` thứ 2 trong danh sách các `article`.

```
//article[position()=2]
```

Cũng có nghĩa tương tự: lấy `article` ở vị trí thứ 2.

```
//article[position()<=3]
```

Lấy 3 article đầu tiên.

## 15.3. Lưu ý

XPath đếm vị trí bắt đầu từ **1**, không phải từ 0.

```
article[1] = article đầu tiên
article[2] = article thứ hai
article[3] = article thứ ba
```

---

# 16. XPath Functions

XPath functions là các hàm hỗ trợ xử lý chuỗi, text và thuộc tính khi viết XPath.

## 16.1. Bảng XPath Functions

| Function | Cú pháp | Mô tả | Ví dụ |
| --- | --- | --- | --- |
| `concat()` | `concat(str1, str2, ...)` | Nối các chuỗi lại với nhau | `concat('Hello', ' ', 'World')` → `Hello World` |
| `starts-with()` | `starts-with(str, prefix)` | Kiểm tra chuỗi bắt đầu bằng prefix | `//input[starts-with(@id, 'user')]` |
| `contains()` | `contains(str, substring)` | Kiểm tra chuỗi chứa substring | `//div[contains(@class, 'active')]` |
| `string-length()` | `string-length(str?)` | Trả về độ dài chuỗi | `string-length('Hello')` → `5` |
| `normalize-space()` | `normalize-space(str?)` | Loại bỏ khoảng trắng thừa | `normalize-space(' Hello World ')` → `Hello World` |
| `translate()` | `translate(str, from, to)` | Thay thế ký tự trong chuỗi | `translate('abc', 'ab', 'AB')` → `ABc` |
| `lower-case()` | `lower-case(string)` | Chuyển thành chữ thường | `lower-case('HELLO')` → `hello` |
| `upper-case()` | `upper-case(string)` | Chuyển thành chữ hoa | `upper-case('hello')` → `HELLO` |
| `replace()` | `replace(str, pattern, replacement)` | Thay thế theo regex/pattern | `replace('hello', 'l', 'L')` → `heLLo` |
| `tokenize()` | `tokenize(str, pattern)` | Tách chuỗi theo pattern | `tokenize('a,b,c', ',')` → `('a','b','c')` |
| `ends-with()` | `ends-with(str, suffix)` | Kiểm tra chuỗi kết thúc bằng suffix | `ends-with('hello.txt', '.txt')` → `true` |

---

# 17. Lưu ý về XPath functions trong Playwright/browser

Một số function như:

```
lower-case()
upper-case()
replace()
tokenize()
ends-with()
```

có thể thuộc XPath version cao hơn và **không phải môi trường nào cũng hỗ trợ**.

Trong automation test với browser/Playwright, nên ưu tiên các function phổ biến hơn:

```
contains()
starts-with()
text()
normalize-space()
translate()
```

Ví dụ hay dùng:

```
//span[contains(@class, 'status')]
```

```
//input[starts-with(@id, 'user')]
```

```
//button[normalize-space()='Create Test Case']
```

Nếu cần so sánh không phân biệt hoa thường trong môi trường XPath 1.0, có thể dùng `translate()`:

```
//*[translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='login']
```

---

# 18. So sánh `text()`, `contains()` và `normalize-space()`

| Cách viết | Ý nghĩa | Khi nào dùng |
| --- | --- | --- |
| `text()='Create Test Case'` | Text phải khớp chính xác | Khi text cố định, rõ ràng |
| `contains(text(), 'Create')` | Text chỉ cần chứa một phần | Khi chỉ cần match một phần text |
| `normalize-space()='Create Test Case'` | Text khớp sau khi bỏ khoảng trắng thừa | Khi HTML có xuống dòng/khoảng trắng |

Ví dụ:

```
//button[text()='Create Test Case']
```

Chỉ match khi text đúng chính xác.

```
//button[contains(text(), 'Create')]
```

Match nếu button có chứa chữ `Create`.

```
//button[normalize-space()='Create Test Case']
```

Match tốt hơn khi text có khoảng trắng thừa.

---

# 19. DOM Tree mẫu để luyện XPath

HTML mẫu:

```html
<body>
  <header id="top">
    <h1>Tiêu đề chính</h1>

    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <h2 id="title1">Bài viết 1</h2>
      <p class="intro">Đoạn giới thiệu</p>
      <p class="content">Nội dung 1</p>

      <div class="comments">
        <span class="author">Tác giả</span>
        <span class="date">01/01/2024</span>
      </div>
    </article>

    <article>
      <h2 id="title2">Bài viết 2</h2>
      <p class="intro">Giới thiệu 2</p>
      <p class="content">Nội dung 2</p>
    </article>
  </main>

  <footer>
    <p>Copyright 2025</p>
  </footer>
</body>
```

---

# 20. Bảng ví dụ thực tế

| XPath Expression | Kết quả | Giải thích |
| --- | --- | --- |
| `//h2[@id='title1']/parent::article` | `<article>` chứa "Bài viết 1" | Chọn cha của `h2` |
| `//article/child::p` | Tất cả `<p>` con trực tiếp của article | Chỉ lấy cấp 1, không lấy `p` trong `div` |
| `//article/descendant::span` | `<span class="author">` và `<span class="date">` | Lấy tất cả span bên trong article |
| `//h2[@id='title1']/following-sibling::p` | `<p class="intro">` và `<p class="content">` của bài 1 | Lấy các p anh em đứng sau h2 |
| `//p[@class='content']/preceding-sibling::p` | `<p class="intro">` | Lấy p anh em đứng trước |
| `//span[@class='author']/ancestor::article` | `<article>` chứa span đó | Tìm article tổ tiên của span |
| `//h2[@id='title1']/following::article` | `<article>` chứa "Bài viết 2" | Article xuất hiện sau h2 trong document |
| `//footer/preceding::h2` | Cả 2 thẻ `<h2>` | Tất cả h2 xuất hiện trước footer |
| `//nav/child::a` | 2 thẻ `<a>` trong nav | Các link trong nav |
| `//nav/child::a[@href]` | 2 thẻ `<a>` có href trong nav | Các link trong nav có thuộc tính href |
| `//span[@class='date']/parent::div/@class` | `"comments"` | Lấy class của div cha |

---

# 21. Ví dụ kết hợp nhiều axes

## 21.1. Tìm article, rồi lấy tất cả p con trực tiếp

```
//article/child::p
```

Nghĩa là:

```
Tìm article, sau đó lấy tất cả p là con trực tiếp của article.
```

---

## 21.2. Tìm span author, lên cha div, rồi lấy tất cả span anh em

```
//span[@class='author']/parent::div/child::span
```

Nghĩa là:

```
Từ span có class author
→ đi lên div cha
→ lấy tất cả span con của div đó.
```

Kết quả:

```
span.author
span.date
```

---

## 21.3. Tìm h2 đầu tiên, lấy 2 p anh em sau nó

```
//h2[@id='title1']/following-sibling::p[position() <= 2]
```

Nghĩa là:

```
Từ h2 có id title1
→ lấy các p cùng cấp phía sau
→ chỉ lấy 2 p đầu tiên.
```

---

## 21.4. Tìm span date, lên article tổ tiên, rồi xuống lấy h2

```
//span[@class='date']/ancestor::article/child::h2
```

Nghĩa là:

```
Từ span date
→ đi lên article tổ tiên
→ đi xuống lấy h2 con trực tiếp của article đó.
```

---

## 21.5. Tìm p intro, lấy tất cả element anh em sau

```
//p[@class='intro']/following-sibling::*
```

Nghĩa là:

```
Từ p có class intro
→ lấy tất cả element cùng cấp đứng sau nó.
```

Dấu `*` nghĩa là lấy mọi loại thẻ.

---

## 21.6. Tìm footer, lấy tất cả div trước nó trong document

```
//footer/preceding::div
```

Nghĩa là:

```
Từ footer
→ lấy tất cả div xuất hiện trước footer trong toàn document.
```

---

## 21.7. Tìm nav, lấy tất cả a con có href

```
//nav/child::a[@href]
```

Nghĩa là:

```
Từ nav
→ lấy tất cả thẻ a là con trực tiếp
→ chỉ lấy thẻ a có thuộc tính href.
```

---

## 21.8. Tìm article thứ 2, lấy article anh em trước nó

```
//article[2]/preceding-sibling::article
```

Nghĩa là:

```
Từ article thứ 2
→ lấy article cùng cấp đứng trước nó.
```

---

# 22. So sánh các axes dễ nhầm

## 22.1. `child` và `descendant`

```
child       = chỉ con trực tiếp, cấp 1
descendant  = tất cả con cháu, mọi cấp
```

Ví dụ:

```
//article/child::p
```

Lấy tất cả `<p>` là con trực tiếp của `article`.

```
//article/descendant::span
```

Lấy tất cả `<span>` nằm bên trong `article`, kể cả nằm sâu trong `div`.

---

## 22.2. `parent` và `ancestor`

```
parent    = cha trực tiếp
ancestor  = tất cả tổ tiên: cha, ông, cụ...
```

Ví dụ:

```
//h2[@id='title1']/parent::article
```

Lấy `article` cha trực tiếp của `h2`.

```
//span[@class='author']/ancestor::article
```

Từ `span.author`, đi ngược lên tìm `article` chứa nó.

---

## 22.3. `following-sibling` và `following`

```
following-sibling = anh em cùng cấp phía sau
following         = tất cả node phía sau trong document, không cần cùng cấp
```

Ví dụ:

```
//h2[@id='title1']/following-sibling::p
```

Lấy các `<p>` đứng sau `h2` và cùng cấp với `h2`.

```
//h2[@id='title1']/following::article
```

Lấy `article` xuất hiện sau `h2` trong toàn document.

---

## 22.4. `preceding-sibling` và `preceding`

```
preceding-sibling = anh em cùng cấp phía trước
preceding         = tất cả node phía trước trong document, không cần cùng cấp
```

Ví dụ:

```
//p[@class='content']/preceding-sibling::p
```

Lấy `<p>` anh em đứng trước `<p class="content">`.

```
//footer/preceding::h2
```

Lấy tất cả `<h2>` xuất hiện trước `footer`.

---

## 22.5. `ancestor` và `ancestor-or-self`

```
ancestor          = chỉ tổ tiên
ancestor-or-self  = chính node hiện tại + tổ tiên
```

Ví dụ:

```
//span/ancestor-or-self::div
```

Nghĩa là từ `span`, lấy chính node nếu phù hợp và các `div` tổ tiên.

---

## 22.6. `descendant` và `descendant-or-self`

```
descendant          = chỉ con cháu
descendant-or-self  = chính node hiện tại + con cháu
```

Ví dụ:

```
//div/descendant-or-self::*
```

Nghĩa là lấy chính `div` và tất cả node bên trong nó.

---

# 23. Bảng so sánh axes tương tự

| Nhóm | Axis | Khác biệt |
| --- | --- | --- |
| Con cháu | `child::` | Chỉ con trực tiếp, cấp 1 |
| Con cháu | `descendant::` | Tất cả con cháu, mọi cấp |
| Con cháu | `descendant-or-self::` | Bao gồm cả chính node hiện tại |
| Tổ tiên | `parent::` | Chỉ cha trực tiếp |
| Tổ tiên | `ancestor::` | Tất cả tổ tiên |
| Tổ tiên | `ancestor-or-self::` | Bao gồm cả chính node hiện tại |
| Anh em | `following-sibling::` | Anh em phía sau, cùng cấp |
| Anh em | `preceding-sibling::` | Anh em phía trước, cùng cấp |
| Toàn document | `following::` | Tất cả node sau, mọi cấp |
| Toàn document | `preceding::` | Tất cả node trước, mọi cấp |

---

# 24. Một số XPath mẫu nên nhớ

## 24.1. Tìm cha của h2

```
//h2[@id='title1']/parent::article
```

## 24.2. Tìm p con trực tiếp của article

```
//article/child::p
```

## 24.3. Tìm span nằm trong article ở mọi cấp

```
//article/descendant::span
```

## 24.4. Tìm p anh em phía sau h2

```
//h2[@id='title1']/following-sibling::p
```

## 24.5. Tìm p anh em phía trước p content

```
//p[@class='content']/preceding-sibling::p
```

## 24.6. Tìm article chứa span author

```
//span[@class='author']/ancestor::article
```

## 24.7. Tìm article xuất hiện sau title1

```
//h2[@id='title1']/following::article
```

## 24.8. Tìm h2 xuất hiện trước footer

```
//footer/preceding::h2
```

## 24.9. Tìm link trong nav

```
//nav/child::a[@href]
```

## 24.10. Lấy class của div cha

```
//span[@class='date']/parent::div/@class
```

---

# 25. Ứng dụng trong Automation Test

XPath axes rất hữu ích khi:

- Element không có `id`.
- Element không có `class` rõ ràng.
- Cần tìm input dựa vào label.
- Cần tìm button trong một form cụ thể.
- Cần tìm table chứa một button cụ thể.
- Cần tìm message lỗi gần một input.
- Cần tìm các cột phía sau hoặc phía trước một cột trong table.

Ví dụ trong Playwright:

```tsx
await page.locator("//label[@for='testName']/following-sibling::input").fill("Login Validation");
```

```tsx
await page.locator("//button[normalize-space()='Create Test Case']").click();
```

```tsx
await page.locator("//form[@id='test-form']/descendant::input").count();
```

```tsx
await page.locator("//button[@class='btn-edit']/ancestor::table").count();
```

---

# 26. Cách chọn XPath axes phù hợp

Khi viết XPath, nên tự hỏi:

## 26.1. Node hiện tại là node nào?

Ví dụ:

```
//label[@for='testName']
```

Node hiện tại là `label`.

## 26.2. Element cần tìm nằm ở đâu so với node hiện tại?

Nếu nằm phía dưới:

```
child / descendant
```

Nếu nằm phía trên:

```
parent / ancestor
```

Nếu cùng cấp phía sau:

```
following-sibling
```

Nếu cùng cấp phía trước:

```
preceding-sibling
```

Nếu phía sau nhưng không chắc cùng cấp:

```
following
```

Nếu phía trước nhưng không chắc cùng cấp:

```
preceding
```

## 26.3. Có cần lấy chính node hiện tại không?

Nếu có, dùng:

```
self
ancestor-or-self
descendant-or-self
```

---

# 27. Công thức tư duy nhanh

```
Muốn tìm con trực tiếp        → child::
Muốn tìm mọi node bên trong   → descendant::
Muốn tìm cha trực tiếp        → parent::
Muốn tìm container phía trên  → ancestor::
Muốn tìm anh em phía sau      → following-sibling::
Muốn tìm anh em phía trước    → preceding-sibling::
Muốn tìm node phía sau DOM    → following::
Muốn tìm node phía trước DOM  → preceding::
Muốn lấy chính node hiện tại  → self::
Muốn lấy chính nó + con cháu  → descendant-or-self::
Muốn lấy chính nó + tổ tiên   → ancestor-or-self::
Muốn lấy thuộc tính           → @attribute
Muốn kiểm tra có thuộc tính   → [@attribute]
Muốn lấy mọi loại thẻ         → *
Muốn lọc theo vị trí          → position()
```

---

# 28. Ghi nhớ nhóm axes

## 28.1. Nhóm đi xuống

```
child                = con trực tiếp
descendant           = tất cả con cháu
descendant-or-self   = chính nó + tất cả con cháu
```

## 28.2. Nhóm đi lên

```
parent               = cha trực tiếp
ancestor             = tất cả tổ tiên
ancestor-or-self     = chính nó + tất cả tổ tiên
```

## 28.3. Nhóm anh em cùng cấp

```
following-sibling    = anh em phía sau
preceding-sibling    = anh em phía trước
```

## 28.4. Nhóm toàn document

```
following            = tất cả node phía sau trong document
preceding            = tất cả node phía trước trong document
```

---

# 29. Ghi nhớ nhóm function

## 29.1. Khi cần tìm theo thuộc tính

```
//tag[@attribute='value']
```

Ví dụ:

```
//input[@id='testName']
```

---

## 29.2. Khi cần kiểm tra element có thuộc tính

```
//tag[@attribute]
```

Ví dụ:

```
//a[@href]
```

---

## 29.3. Khi cần tìm theo một phần thuộc tính

```
//tag[contains(@attribute, 'substring')]
```

Ví dụ:

```
//span[contains(@class, 'status')]
```

---

## 29.4. Khi cần tìm theo text chính xác

```
//tag[text()='exact text']
```

Ví dụ:

```
//button[text()='Create Test Case']
```

---

## 29.5. Khi text có khoảng trắng thừa

```
//tag[normalize-space()='exact text']
```

Ví dụ:

```
//button[normalize-space()='Create Test Case']
```

---

## 29.6. Khi cần tìm theo vị trí

```
//tag[position()=1]
```

Hoặc viết gọn:

```
//tag[1]
```

Ví dụ:

```
//article[2]
```

---

# 30. Các XPath hay dùng nhất trong bài

```
//label[@for='testName']/following-sibling::input
```

```
//form[@id='test-form']/descendant::input
```

```
//button[normalize-space()='Create Test Case']
```

```
//span[contains(@class, 'status')]
```

```
//button[@class='btn-edit']/ancestor::table
```

```
//footer/preceding::div
```

```
//nav/child::a[@href]
```

```
//article[2]/preceding-sibling::article
```

```
//h2[@id='title1']/following-sibling::p[position() <= 2]
```

```
//span[@class='date']/ancestor::article/child::h2
```

---

# 31. Kết luận Lesson 07

Lesson 07 giúp hiểu sâu hơn về cách tìm element bằng XPath nâng cao.

Kiến thức trọng tâm gồm:

```
1. DOM là cây node.
2. Mỗi element trong HTML là một node.
3. XPath axes giúp tìm element dựa trên quan hệ giữa các node.
4. parent/ancestor dùng để đi lên.
5. child/descendant dùng để đi xuống.
6. following-sibling/preceding-sibling dùng để tìm anh em cùng cấp.
7. following/preceding dùng để tìm node phía sau hoặc phía trước trong toàn document.
8. @attribute dùng để truy cập thuộc tính.
9. [@attribute] dùng để kiểm tra element có tồn tại thuộc tính đó.
10. text(), contains(), normalize-space() giúp tìm element theo text.
11. position() giúp lọc element theo thứ tự.
12. Có thể kết hợp nhiều axes để viết selector linh hoạt hơn.
```

Trong automation test, mục tiêu không phải là viết XPath thật dài, mà là viết XPath:

```
Dễ hiểu
Ổn định
Ít phụ thuộc layout
Bám sát quan hệ thực tế trên UI
Dễ maintain khi DOM thay đổi
```

Các axes nên nắm chắc nhất:

```
parent::
ancestor::
child::
descendant::
following-sibling::
preceding-sibling::
following::
preceding::
```

Các function nên nắm chắc nhất:

```
contains()
starts-with()
text()
normalize-space()
translate()
position()
```

Các cú pháp đặc biệt nên nhớ:

```
@attribute     = truy cập thuộc tính
[@attribute]   = kiểm tra có thuộc tính
*              = mọi loại thẻ
[position()]   = lọc theo vị trí
```