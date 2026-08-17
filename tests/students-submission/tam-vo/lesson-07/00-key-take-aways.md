# Lesson 07 - Selector Advanced

## A. XPath advance methods

### 1. DOM visualize

>- DOM (Document Object Model) biểu diễn toàn bộ cấu trúc trang web dưới dạng một cây phần tử (DOM Tree). </br>
>- Mỗi phần tử/thẻ HTML (như head, body, div, form, iframe,...) là một Node (Nút) trên cây.

### 2. DOM Relations

| Mối quan hệ | Thuật ngữ DOM | Vị trí tương quan | Số lượng | Mô tả & Cách xác định |
| --- | --- | --- | --- | --- |
| **Bản thân** | `self` | Ngay tại vị trí mốc | Duy nhất 1 | Node hiện tại đang chọn/xét để làm gốc tọa độ tìm các node khác. |
| **Cha** | `parent` | Ngay **phía trên trực tiếp** (1 cấp) | Tối đa 1 | Node chứa trực tiếp node hiện tại. Đi ngược lên đúng 1 cấp. |
| **Con** | `children` | Ngay **phía dưới trực tiếp** (1 cấp) | 0 hoặc nhiều | Các node nằm trực tiếp bên trong node hiện tại. Đi xuống đúng 1 cấp. |
| **Anh/Chị/Em** | `siblings` | Cùng nằm ở **một cấp** | 0 hoặc nhiều | Các node có **cùng chung một node cha** với node hiện tại. *(Mở rộng)* |
| **Đi sau** | `following` | Phía sau node mốc trong cây DOM | 0 hoặc nhiều | **Tất cả các node xuất hiện SAU** node hiện tại trong cấu trúc mã nguồn HTML (không bao gồm descendants). *(Mở rộng)* |
| **Đi trước** | `preceding` | Phía trước node mốc trong cây DOM | 0 hoặc nhiều | **Tất cả các node xuất hiện TRƯỚC** node hiện tại trong cấu trúc mã nguồn HTML (không bao gồm ancestors). *(Mở rộng)* |
| **Tổ tiên** | `ancestors` | Các cấp **phía trên** | 1 hoặc nhiều | Tất cả các node ở cấp trên (Parent, Grandparent,... cho đến Root Node). *(Mở rộng)* |
| **Hậu duệ** | `descendants` | Các cấp **phía dưới** | 0 hoặc nhiều | Tất cả các node ở các cấp bên dưới (Children, Grandchildren,...). *(Mở rộng)* |

---

💡 Quy tắc di chuyển nhanh trong DOM (XPath / CSS Selector / Playwright):</br>
    + **`self` → `parent`**: Đi lên 1 cấp (từ con lên cha).</br>
    + **`self` → `children`**: Đi xuống 1 cấp (từ cha sang danh sách các con).</br>
    + **`self` → `following-sibling`**: Tìm anh/chị/em nằm **ngay phía sau** cùng cấp.</br>
    + **`self` → `preceding-sibling`**: Tìm anh/chị/em nằm **ngay phía trước** cùng cấp.</br>
    + **`self` → `following`**: Đi tới tất cả các node nằm phía sau trong cây DOM.

---

## B. XPath Axes Methods (Phương thức Trục XPath)

```text
- XPath axes methods (phương thức trục XPath) là các phương pháp dùng để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ tương quan giữa các node với nhau (như parent, child, sibling, ancestor,...)

- Tìm kiếm phần tử linh hoạt: Tìm các element dựa vào vị trí tương đối so với một element mốc đã biết (ví dụ: tìm ô Input dựa vào nhãn Label đứng cạnh nó).

- Tối ưu Locator: Linh hoạt hơn rất nhiều so với việc chỉ dùng đường dẫn tuyệt đối (`/`) hoặc tương đối (`//`) thông thường, đặc biệt hiệu quả khi làm việc với giao diện động (Dynamic Web Elements).
```

---

### 1. Wildcard (`*`)

> 📌 Định nghĩa: Wildcard có nghĩa là **khớp tất cả** (match any tag name), đại diện cho bất kỳ thẻ HTML nào tại vị trí đó.

#### 🔍 Example

| Cú pháp XPath | Ý nghĩa | Giải thích |
| :--- | :--- | :--- |
| `//div` | Khớp thẻ `div` | Chỉ tìm và chọn tất cả các thẻ có tên chính xác là `<div>`. |
| `//*` | Khớp **tất cả** các loại thẻ | Bỏ qua tên thẻ, tìm và chọn tất cả các element tồn tại trong cây DOM. |

---

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

### 2.  XPATH AXES METHODS (NÂNG CAO)

>**Cú pháp :** ***`//<node_mốc>/<thông_số_trục>::<thẻ_cần_tìm>`***

| Axis (Trục) | Cú pháp chuẩn | Mô tả & Phạm vi | Ví dụ XPath | Kết quả trả về |
| :--- | :--- | :--- | :--- | :--- |
| **`child`** | `child::node` | Chọn tất cả node con trực tiếp (1 cấp dưới) | `//div/child::p` | Tất cả `<p>` là con trực tiếp của `<div>` |
| **`descendant`** | `descendant::node` | Chọn tất cả node con cháu (mọi cấp dưới) | `//div/descendant::span` | Tất cả `<span>` bên trong `<div>` ở bất kỳ cấp nào |
| **`parent`** | `parent::node` | Chọn node cha trực tiếp (1 cấp trên) | `//p/parent::div` | Thẻ `<div>` là cha trực tiếp của `<p>` |
| **`ancestor`** | `ancestor::node` | Chọn tất cả node tổ tiên (cha, ông, cụ...) | `//span/ancestor::div` | Tất cả `<div>` là tổ tiên của `<span>` |
| **`following-sibling`** | `following-sibling::node` | Chọn các node anh em đứng sau (cùng cấp) | `//h2/following-sibling::p` | Tất cả `<p>` đứng sau `<h2>` (cùng cấp) |
| **`preceding-sibling`** | `preceding-sibling::node` | Chọn các node anh em đứng trước (cùng cấp) | `//h3/preceding-sibling::h2` | Tất cả `<h2>` đứng trước `<h3>` cùng cấp |
| **`following`** | `following::node` | Chọn tất cả node sau trong document | `//h1/following::p` | Tất cả `<p>` xuất hiện sau `<h1>` trong toàn document |
| **`preceding`** | `preceding::node` | Chọn tất cả node trước trong document | `//footer/preceding::div` | Tất cả `<div>` xuất hiện trước `<footer>` |
| **`attribute`** | `attribute::name` hoặc `@name` | Chọn thuộc tính của node | `//div/attribute::class` hoặc `//div/@class` | Thuộc tính `class` của `<div>` |
| **`self`** | `self::node` | Chọn chính node hiện tại | `//p/self::p` | Chính node `<p>` đó |
| **`ancestor-or-self`** | `ancestor-or-self::node` | Chọn node hiện tại + tất cả tổ tiên | `//span/ancestor-or-self::div` | `<span>` và tất cả `<div>` tổ tiên |
| **`descendant-or-self`** | `descendant-or-self::node` | Chọn node hiện tại + tất cả con cháu | `//div/descendant-or-self::*` | `<div>` và tất cả các node bên trong |
| **`namespace`** | `namespace::prefix` | Chọn namespace nodes *(hiếm dùng)* | `//element/namespace::*` | Tất cả namespace của element |

---

#### 💡 Note

1. **Tìm ô Input từ Label:** `//label[text()='...']/following-sibling::input`
2. **Tìm Khung/Bảng chứa nút bấm:** `//button[text()='...']/ancestor::table` (hoặc `ancestor::form`)
3. **Tìm tất cả dữ liệu trong cùng 1 dòng của bảng:** `//td[text()='...']/following-sibling::td`

---

### 3. XPATH ADVANCE: THUỘC TÍNH, TOÁN TỬ LOGIC & HÀM XỬ LÝ TEXT

| Kỹ thuật / Hàm | Loại | Mục đích & Định nghĩa | Cú pháp XPath mẫu | Ví dụ thực tế |
| :--- | :--- | :--- | :--- | :--- |
| **`@attribute`** | **Thuộc tính** | Sử dụng kí tự `@` để truy cập và lọc element theo thuộc tính HTML. | `//tagname[@attribute='value']` | `//input[@id='username']` |
| **`and`** | **Toán tử** | **Tất cả** các điều kiện đều phải đúng đồng thời. | `//element[@cond1 and @cond2]` | `//input[@type='text' and @name='email']` |
| **`or`** | **Toán tử** | **Một trong các** điều kiện đúng là thỏa mãn. | `//element[@cond1 or @cond2]` | `//button[@type='submit' or @type='button']` |
| **`text()`** | **Hàm Text** | Lấy text node trực tiếp bên trong element để so sánh **chính xác 100%**. | `//element[text()='exact text']` | `//button[text()='Submit']` |
| **`normalize-space()`** | **Hàm Text** | **Chuẩn hóa khoảng trắng**: Loại bỏ toàn bộ khoảng trắng dư thừa ở đầu, cuối và giữa chuỗi text. | `//element[normalize-space()='text']` | `//button[normalize-space(text())='Login']` |
| **`contains()`** | **Hàm Text/Attr** | **Kiểm tra chứa chuỗi con**: Tìm element chứa một phần chuỗi (không cần khớp chính xác toàn bộ). | `//element[contains(@attr, 'sub')]`<br>`//element[contains(text(), 'sub')]` | `//button[contains(@class, 'btn-primary')]`<br>`//h1[contains(text(), 'Welcome')]` |

---

#### 💡 XPATH REAL-WORLD

1. **Kết hợp AND/OR:** Dùng khi 1 thuộc tính không đủ để định vị duy nhất element (ví dụ: cần kết hợp cả `type` và `name`).
2. **Text có khoảng trắng/xuống dòng dư thừa:** Nếu dùng `text()='...'` mà không tìm thấy do HTML bị dính tab/enter, hãy thay bằng `normalize-space()`.
3. **Class động (Dynamic Class):** Thường các framework hay sinh class kiểu `btn-primary_1283`, hãy dùng `contains(@class, 'btn-primary')` để locator không bị flaky khi chạy test.

---

### 4. XPATH FUNCTIONS

| Function | Cú pháp | Mô tả | Ví dụ thực tế |
| :--- | :--- | :--- | :--- |
| **`concat()`** | `concat(str1, str2, ...)` | Nối các chuỗi lại với nhau. | `concat('Hello', ' ', 'World')` ➔ `'Hello World'` |
| **`starts-with()`** | `starts-with(str, prefix)` | Kiểm tra chuỗi bắt đầu bằng `prefix`. | `//input[starts-with(@id, 'user')]` |
| **`contains()`** | `contains(str, substring)` | Kiểm tra chuỗi chứa `substring`. | `//div[contains(@class, 'active')]` |
| **`string-length()`** | `string-length(str?)` | Trả về độ dài chuỗi. | `string-length('Hello')` ➔ `5` |
| **`normalize-space()`** | `normalize-space(str?)` | Loại bỏ khoảng trắng thừa ở đầu, cuối và giữa chuỗi. | `normalize-space(' Hello World ')` ➔ `'Hello World'` |
| **`translate()`** | `translate(str, from, to)` | Thay thế ký tự trong chuỗi (chuyển đổi từng ký tự tương ứng). | `translate('abc', 'ab', 'AB')` ➔ `'ABc'` |
| **`lower-case()`** | `lower-case(string)` | Chuyển toàn bộ chuỗi thành chữ thường. | `lower-case('HELLO')` ➔ `'hello'` |
| **`upper-case()`** | `upper-case(string)` | Chuyển toàn bộ chuỗi thành chữ HOA. | `upper-case('hello')` ➔ `'HELLO'` |
| **`replace()`** | `replace(str, pattern, replacement)` | Thay thế chuỗi theo biểu thức chính quy (Regex). | `replace('hello', 'l', 'L')` ➔ `'heLLo'` |
| **`tokenize()`** | `tokenize(str, pattern)` | Tách chuỗi thành mảng/danh sách theo `pattern`. | `tokenize('a,b,c', ',')` ➔ `('a', 'b', 'c')` |
| **`ends-with()`** | `ends-with(str, suffix)` | Kiểm tra chuỗi kết thúc bằng `suffix`. | `ends-with('hello.txt', '.txt')` ➔ `true` |

#### 💡Note

1. **XPath 1.0 vs XPath 2.0+:** 
   * Hầu hết các trình duyệt mặc định (khi dùng với Selenium / Playwright) chạy **XPath 1.0**.
   * Các hàm cực kỳ hay dùng trong XPath 1.0 là: `contains()`, `starts-with()`, `normalize-space()`, `concat()`.
   * Các hàm như `lower-case()`, `upper-case()`, `ends-with()`, `replace()`, `tokenize()` thuộc **XPath 2.0+** (nếu dùng trên Web Driver thuần 1.0 có thể gặp lỗi không hỗ trợ, khi đó tester hay dùng hàm `translate()` để convert case thay cho `lower-case()`).

2. **Mẹo So Sánh Không Phân Biệt Hoa Thường (Case-Insensitive):**
   * Giả sử thuộc tính bị lúc hoa lúc thường, có thể dùng `translate()` để đưa về chữ thường trước khi check `contains()`: `//button[contains(translate(@class, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'active')]`
