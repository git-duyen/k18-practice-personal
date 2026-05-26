# Lesson 7: Git, Selector Advanced

## 1. DOM: Relation

- **self**: Node hiện tại

- **parent (cha)**: Node phía trên trực tiếp của node hiện tại

- **children (con)**: Các node phía dưới trực tiếp của node hiện tại

- **ancestor (tổ tiên)**: Các node cha, cha của cha,...

- **descendant (hậu duệ)**: Các node con, cháu,...

- **sibling (anh em)**: Các phần tử cùng cấp, cùng cha

- **following**: Gồm các node ở phía bên phải của node hiện tại  
  _(Không lấy các node con của node hiện tại)_

- **preceding**: Gồm các node phía bên trái của node hiện tại  
  _(Không lấy các node ancestor)_

- **following-sibling**: Anh em phía sau

- **preceding-sibling**: Anh em phía trước

---

## 2. XPath: Advanced Methods

### XPath Axes Methods

- Là các phương pháp để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.

- Công dụng:
  - Tìm kiếm element dựa trên vị trí tương đối
  - Linh hoạt hơn việc chỉ dùng đường dẫn tuyệt đối hoặc tương đối

### Các axes thường dùng

#### Wildcard

Khớp tất cả element

Ví dụ:

```xpath
//div
//*
```

---

#### child

Con trực tiếp

```xpath
//form[@id='test-form']/child::button
```

---

#### descendant

Tất cả con cháu

```xpath
//form[@id='test-form']/descendant::input
```

---

#### parent

Tìm cha

```xpath
//button[text()='Create Test Case']/parent::form
```

---

#### ancestor

Tìm tổ tiên

```xpath
//button[@class='btn-edit']/ancestor::table
```

---

#### following-sibling

Anh em phía sau

```xpath
//label[@for='testName']/following-sibling::input
```

---

#### preceding-sibling

Anh em phía trước

```xpath
//button[@class='btn-reset']/preceding-sibling::button
```

---

#### following

Tất cả node phía sau trong document

```xpath
//h2[text()='Test Cases List']/following::button[@class='btn-run']
```

---

#### ancestor-or-self

Tổ tiên hoặc chính nó

```xpath
//table[@id='test-table']/ancestor-or-self::span[contains(@class,'status')]
```

---

#### preceding

Tất cả node phía trước trong document

```xpath
//h2[text()='Test Execution Results']/preceding::td[@class='priority-high']
```

---

#### descendant-or-self

Con cháu hoặc chính nó

```xpath
//table[@id='test-table']/descendant-or-self::span[contains(@class,'status')]
```

---

## 3. XPath Advanced

### Truy cập thuộc tính với `@attribute`

Sử dụng `@` để truy cập thuộc tính của element.

Ví dụ:

```xpath
//input[@id='username']
```

---

### AND

Tất cả điều kiện phải đúng

```xpath
//element[@condition1 and @condition2]
```

Ví dụ:

```xpath
//input[@type='text' and @name='email']
```

---

### OR

Một trong các điều kiện đúng

```xpath
//element[@condition1 or @condition2]
```

Ví dụ:

```xpath
//button[@type='submit' or @class='btn-save']
```

---

### text()

Lấy text trực tiếp bên trong element

```xpath
//element[text()='exact text']
```

Ví dụ:

```xpath
//button[text()='Login']
```

---

### normalize-space()

Chuẩn hóa khoảng trắng:
- Xóa khoảng trắng đầu/cuối
- Giảm nhiều khoảng trắng liên tiếp thành 1 khoảng trắng

Cú pháp:

```xpath
normalize-space(string)
```

Ví dụ:

```xpath
//button[normalize-space()='Save']
```

---

### contains()

Kiểm tra chuỗi con

Dùng để tìm element chứa một phần text hoặc attribute.

```xpath
//element[contains(@attribute,'substring')]
```

Ví dụ:

```xpath
//input[contains(@placeholder,'email')]
```

Hoặc:

```xpath
//button[contains(text(),'Save')]
```