# Git: Merge, Rebase, Squash & Conflict

## Làm việc nhóm với Git

Trong quá trình phát triển phần mềm, mỗi thành viên sẽ:

- Tạo branch riêng
- Phát triển tính năng trên branch đó
- Sau khi hoàn thành sẽ **gộp code** vào branch chính (`main`, `develop`,...)

👉 Quá trình gộp code trong Git được gọi là **Merge**.


### Một số tình huống thường gặp

#### 🔸 Hai người cùng sửa một vị trí

Ví dụ:

- Dev A sửa dòng 10
- Dev B cũng sửa dòng 10

Khi merge sẽ xảy ra:

> ⚠️ **Merge Conflict**


#### 🔸 Có quá nhiều commit nhỏ

Ví dụ:

```text
fix typo
fix typo again
update button
update css
fix css
```

Muốn gộp thành một commit duy nhất.

👉 Trong Git gọi là:

> 📦 **Squash**


## Git Merge

### Merge là gì?

- Dùng để gộp code từ branch này sang branch khác.
- Merge sẽ giữ lại lịch sử commit của cả hai branch.

#### 💡 Ví dụ

```bash
git checkout main
git merge feature/login
```

👉 Gộp branch `feature/login` vào `main`.

####  Ưu điểm

- Giữ đầy đủ lịch sử commit
- Dễ theo dõi quá trình phát triển

## Git Rebase

### Rebase là gì?

- Rebase là cách đưa các commit của branch hiện tại lên trên commit mới nhất của branch khác.
- Giúp lịch sử commit **thẳng và gọn hơn**.

#### 💡 Ví dụ

```bash
git checkout feature/login
git rebase main
```

👉 Đưa toàn bộ commit của `feature/login` lên sau commit mới nhất của `main`.

#### Ưu điểm

- Lịch sử commit đẹp
- Dễ đọc
- Tránh nhiều Merge Commit

### ⚠️ Lưu ý

Không nên rebase các branch đã được nhiều người cùng sử dụng.

## Git Squash

### Squash là gì?

- Squash dùng để gộp nhiều commit thành một commit.

#### 💡 Ví dụ

Trước khi squash:

```text
Commit 1
Commit 2
Commit 3
Commit 4
```

Sau khi squash:

```text
Commit: Add Login Feature
```
#### Lệnh

```bash
git rebase -i HEAD~4
```

Sau đó đổi:

```text
pick
pick
pick
pick
```

thành:

```text
pick
squash
squash
squash
```

#### Ưu điểm

- Lịch sử commit sạch
- Dễ review Pull Request

## Git Conflict

### Conflict là gì?

- Conflict xảy ra khi Git **không thể tự động merge code**.

**Nguyên nhân thường gặp:**

- Hai người sửa cùng một dòng.
- Một người xoá file, người khác sửa file đó.
- Rebase hoặc merge với thay đổi xung đột.

#### 💡 Ví dụ

Dev A:

```text
Hello World
```

Dev B:

```text
Hello Playwright
```

Khi merge sẽ xuất hiện:

```text
<<<<<<< HEAD
Hello World
=======
Hello Playwright
>>>>>>> feature/login
```

### Cách xử lý Conflict

#### 1. Mở file bị conflict

#### 2. Chỉnh sửa nội dung mong muốn

Ví dụ:

```text
Hello Playwright
```

#### 3. Add lại file

```bash
git add .
```

#### 4. Commit

```bash
git commit -m "resolve merge conflict"
```

---

## 🎯 Summary

| Khái niệm | Mục đích |
|-----------|----------|
| `Merge` | Gộp code từ branch này sang branch khác |
| `Rebase` | Làm lịch sử commit gọn và thẳng hơn |
| `Squash` | Gộp nhiều commit thành một commit |
| `Conflict` | Xung đột khi Git không thể tự merge |

---

# Playwright: Selector

Selector dùng để **xác định và tương tác với các phần tử trên trang web**.

Ví dụ các thao tác:

```typescript
await page.locator('input').fill('admin');
await page.locator('button').click();
```

## Các loại Selector

Trong Playwright thường sử dụng:

1. CSS Selector
2. Playwright Selector

## 1. CSS Selector

CSS Selector dùng cú pháp CSS để tìm phần tử HTML.

#### Ví dụ

```typescript
await page.locator('#username').fill('admin');
```

```typescript
await page.locator('.login-button').click();
```

```typescript
await page.locator('input[name="email"]').fill('test@gmail.com');
```

#### Một số CSS Selector thường dùng

| Selector | Ý nghĩa | Ví dụ |
|----------|---------|-------|
| `#id` | Theo `id` | `#username` |
| `.class` | Theo `class` | `.login-button` |
| `tag` | Theo tên thẻ | `input` |
| `[attribute]` | Theo attribute | `[name="email"]` |

## 2. Playwright Selector

Playwright cung cấp các locator giúp tìm phần tử dựa trên **vai trò, text, label,...**

### `page.getByRole()`

- Tìm phần tử dựa trên **ARIA role**.
- Đây là một trong những cách được khuyến nghị sử dụng trong Playwright.

#### Ví dụ

```typescript
await page.getByRole('button', {
  name: 'Login'
}).click();
```

👉 Tìm button có tên `Login`.

#### Một số role thường gặp

| Role | Ví dụ |
|------|-------|
| `button` | Button |
| `textbox` | Input |
| `checkbox` | Checkbox |
| `radio` | Radio button |
| `link` | Link |
| `heading` | Heading |


### `page.getByText()`

- Tìm phần tử dựa trên **text hiển thị**.

#### Ví dụ

```typescript
await page.getByText('Login').click();
```

👉 Tìm phần tử có text `Login`.

#### Ví dụ khác

```typescript
await page.getByText('Welcome to Playwright').click();
```

### `page.getByLabel()`

- Tìm form element dựa trên **label** liên kết với element đó.

#### Ví dụ HTML

```html
<label for="email">Email</label>
<input id="email">
```

#### Playwright

```typescript
await page.getByLabel('Email').fill('test@gmail.com');
```

👉 Playwright tìm `input` được liên kết với label `Email`.


# 🎯 Summary

| Selector | Dùng để |
|----------|---------|
| `locator()` + CSS | Tìm element bằng CSS Selector |
| `getByRole()` | Tìm element theo ARIA role |
| `getByText()` | Tìm element theo text |
| `getByLabel()` | Tìm form element theo label |

---

### 💡 Best Practice

Ưu tiên các locator có ý nghĩa với người dùng:

```text
getByRole()
getByLabel()
getByText()
```

Sau đó mới cân nhắc:

```text
locator() + CSS
XPath
```

