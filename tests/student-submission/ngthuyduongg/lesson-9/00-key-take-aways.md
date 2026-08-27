# Lesson 9

## 1. Git — Merge


**Merge** là hành động gộp nội dung của một nhánh vào nhánh khác.

```
git merge <tên nhánh>
```

Có 2 kiểu merge (merge strategy).

### 1.1. Fast-forward merge

- **Đặc điểm:** khi merge KHÔNG tạo ra commit merge.
- **Xảy ra khi:** không có thay đổi nào trên nhánh chính (main) kể từ lúc tạo nhánh mới.

VD:


```
        new branch
            │
            ▼
main ───── 1. Login ───── 2. Dashboard
                              \
                               3. Create User
                               4. Update User
                               5. Delete User
```

Các bước:

1. main đang có Commit 1 – Login và Commit 2 – Dashboard.
2. Từ main, tạo new branch tại Commit 2 → `git checkout -b new-branch`
3. Làm Create User → Commit 3 → `git add .` → `git commit -m "Create User"`
4. Làm Update User → Commit 4.
5. Làm Delete User → Commit 5.
6. Trong lúc làm new branch, không ai commit vào main → main vẫn ở Commit 2.
7. Làm xong, quay lại main → `git checkout main`
8. Merge new branch vào main → `git merge new-branch`

Kết quả: main đi thẳng từ Commit 2 → Commit 5, không tạo Merge Commit.

```
main
 ↓
1. Login ── 2. Dashboard ── 3. Create User ── 4. Update User ── 5. Delete User
```

→ lịch sử commit thẳng một hàng.

### 1.2. Three-way merge

- **Đặc điểm:** khi merge CÓ tạo ra commit merge (một commit sinh ra chỉ để ghi nhận việc gộp).
- **Xảy ra khi:** muốn merge feature branch vào branch chính mà lịch sử của 2 branch đã có sự khác nhau.

VD:

```
main ───── 1. Login ───── 2. Dashboard ───── 6. Fix Bug
                              \
                               3. Create User ── 4. Update User ── 5. Delete User
                                                      ↑
                                                  new branch
```

Các bước:

1. main đang có Commit 1 và Commit 2.
2. Từ Commit 2, tạo new branch → `git checkout -b new-branch`
3. Trên new branch thực hiện Create User → Update User → Delete User, tạo Commit 3 → 4 → 5.
4. Trong lúc làm new branch, có người commit thêm vào main → Commit 6 – Fix Bug.
5. Quay lại main và merge → `git checkout main` → `git merge new-branch`

Kết quả: main và new branch đều có commit mới → Git phải tạo Merge Commit để kết hợp hai nhánh.

```
main ───── 1 ───── 2 ───── 6. Fix Bug ───── 7. Merge
              \                            /
               3 ───── 4 ───── 5 ─────────
```

→ Git giữ nguyên lịch sử commit của hai nhánh và tạo 1 merge commit mới để nối hai nhánh lại.

---

## 2. Git — Conflict

- **Conflict** = xung đột khi Git không thể tự động gộp code của 2 nhánh.
- **Xảy ra khi:** 2 nhánh cùng sửa một phần code nhưng nội dung thay đổi khác nhau.
- Khi gặp Conflict, Git dừng merge và yêu cầu người dùng tự quyết định giữ code nào.

**Cách xử lý:** Xác định code đúng → sửa conflict → `git add` → `git commit`

Ví dụ: main ghi `Username is required`, new branch ghi `Username is optional`. Khi merge, file có dạng:

```
<<<<<<< HEAD
Username is required
=======
Username is optional
>>>>>>> new-branch
```

Các bước xử lý:

1. Từ `<<<<<<< HEAD` → `=======` là code của nhánh hiện tại (Current Change).
2. Từ `=======` → `>>>>>>> new-branch` là code của nhánh đang merge vào (Incoming Change).
3. Quyết định giữ code của mình, code của nhánh kia, hoặc kết hợp cả hai.
4. Xóa các dấu conflict `<<<<<<<`, `=======`, `>>>>>>>`.
5. Báo cho Git biết đã xử lý xong: `git add .` rồi `git commit`
6. Nếu không muốn tiếp tục merge: `git merge --abort` → hủy merge và quay lại trạng thái trước khi merge.

---

## 3. Git — Squash (gộp commit)

- **Squash** = gộp nhiều commit nhỏ thành 1 commit duy nhất.
- **Mục đích:** làm lịch sử commit gọn, dễ đọc trước khi merge vào main.

```
git rebase -i HEAD~<số commit>
```

Ví dụ: new branch có nhiều commit nhỏ, các commit 3 → 6 đều liên quan đến chức năng User nhưng lịch sử hơi rối.

```
main ───── 1. Login ───── 2. Dashboard
                              \
                               3. Create User
                               4. Fix Create User
                               5. Fix validation
                               6. Update User
```

Các bước:

1. Chuyển sang new branch → `git checkout new-branch`
2. Gộp 4 commit gần nhất → `git rebase -i HEAD~4`

Git mở danh sách:

```
pick 3 Create User
pick 4 Fix Create User
pick 5 Fix validation
pick 6 Update User
```

3. Giữ commit đầu tiên, đổi các commit còn lại thành `squash`:

```
pick   3 Create User
squash 4 Fix Create User
squash 5 Fix validation
squash 6 Update User
```

4. Git yêu cầu đặt lại tên cho commit → đặt thành `Create User`.

Kết quả: 4 commit được gộp thành 1 commit.

```
main ───── 1. Login ───── 2. Dashboard
                              \
                               7. Create User
```

### 3.1. Thao tác trong giao diện VIM

**Bước 1 — Chọn commit**
- Gõ `i` → vào chế độ INSERT (bật chế độ gõ chữ).
- Giữ `pick` ở commit đầu tiên — đây là commit chính.
- Đổi `pick` → `s` ở các commit muốn gộp — gộp các commit này vào commit chính phía trên.

**Bước 2 — Lưu**
- `ESC` → `:wq` → `Enter` — lưu và thoát, chuyển sang màn hình sửa commit message.

**Bước 3 — Sửa commit message**
- Giữ lại message muốn dùng — đây sẽ là message của commit sau khi squash.
- Thêm `#` trước message không cần — Git bỏ qua các dòng bắt đầu bằng `#`.

**Bước 4 — Hoàn tất**
- `ESC` → `:wq` → `Enter`.

**Bước 5 — Kiểm tra**
- `git log` — kiểm tra lịch sử, nhiều commit nhỏ đã thành 1 commit.

---

## 4. Git — Rebase

- **Rebase** = đưa các commit của branch hiện tại lên trên commit mới nhất của branch khác, bằng cách thay đổi "base" (điểm bắt đầu) của branch.
- **Mục đích:** tạo lịch sử commit thẳng, sạch, không tạo Merge Commit.

```
git rebase <tên nhánh>
```

Ví dụ ban đầu new branch được tạo từ Commit 2:

```
main ───── 1. Login ───── 2. Dashboard ───── 6. Fix Bug ───── 7. Add API
                              \
                               3. Create User
                               4. Update User
                               5. Delete User
```

Các bước:

1. new branch được tạo từ Commit 2 và có các commit 3 → 5.
2. Trong lúc làm, main có thêm Commit 6 → 7. Lúc này new branch đang dựa trên Commit 2 cũ, còn main đã ở Commit 7 mới nhất.
3. Chuyển sang new branch → `git checkout new-branch`
4. Rebase new branch lên main → `git rebase main`

Git tạm cất Commit 3 → 5, đưa new branch lên Commit 7, rồi đặt lại Commit 3 → 5 lên trên Commit 7.

```
main:       1 ── 2 ── 6. Fix Bug ── 7. Add API
                                        \
new branch:                              3. Create User
                                         4. Update User
                                         5. Delete User
```

Lịch sử của new branch: `1 ── 2 ── 6 ── 7 ── 3' ── 4' ── 5'`


---

## 5. CSS Selector

### 5.1. Khái niệm

- CSS Selector là cú pháp dùng để chọn (select) các phần tử HTML trong DOM, được sử dụng rộng rãi trong CSS styling.
- Cú pháp ngắn gọn, hiệu năng cao hơn XPath.

**Nguyên tắc:** ưu tiên CSS, chỉ dùng XPath khi CSS không làm được.

### 5.2. Cách lấy CSS (đối chiếu với XPath)

| Kiểu | CSS Selector | Ký hiệu | XPath | Ý nghĩa |
|---|---|---|---|---|
| Tag | `div` | tên thẻ | `//div` | Chọn theo tên thẻ |
| ID | `#registrationForm` | `#` = ID | `//form[@id="registrationForm"]` | Chọn theo id |
| Class | `.form-group` | `.` = Class | `//*[@class="form-group"]` | Chọn theo class |
| Tag + Class | `div.form-group` | `tag.class` | `//div[@class="form-group"]` | Chọn thẻ cụ thể có class |
| Child | `#parent > input` | `>` = con trực tiếp | `//div[@id="parent"]/input` | Chọn element là con trực tiếp |
| Descendant | `#ancestor div` | khoảng trắng | `//div[@id="ancestor"]//div` | Chọn element bên trong ở bất kỳ cấp nào |
| Descendant + ID | `#parent input` | `#id element` | `//*[@id="parent"]//input` | Tìm input bên trong element có ID cụ thể |
| Combine (OR) | `div, input` | `,` = OR | `//div \| //input` | Chọn div hoặc input |
| Attribute | `input[name="username"]` | `[ ]` | `//input[@name="username"]` | Chọn element theo attribute |
| Attribute tồn tại | `input[required]` | `[attribute]` | `//input[@required]` | Chọn element có attribute đó |
| Bắt đầu bằng | `input[id^="user"]` | `^=` | `//input[starts-with(@id,"user")]` | id bắt đầu bằng user |
| Kết thúc bằng | `input[id$="name"]` | `$=` | `//input[substring(...)]` | id kết thúc bằng name |
| Chứa | `input[id*="user"]` | `*=` | `//input[contains(@id,"user")]` | id có chứa user |
| Universal | `*` | `*` = tất cả | `//*` | Chọn tất cả element |
| Universal + Descendant | `div *` | `*` = element bất kỳ | `//div//*` | Chọn mọi element bên trong div |
| Adjacent Sibling | `input + button` | `+` = anh em ngay sau | `//input/following-sibling::*[1][self::button]` | Chọn button ngay sau input |
| General Sibling | `input ~ button` | `~` = anh em phía sau | `//input/following-sibling::button` | Chọn các button đứng sau input cùng cấp |

### 5.3. Hạn chế của CSS Selector

- **Chọn theo text** — `<button>Submit</button>`. CSS chỉ nhìn thẻ + attribute, không chọn theo nội dung text. → Dùng XPath: `//button[text()='Submit']`
- **Chọn theo text một phần** — tìm nút chứa `Sub`. CSS không có cú pháp chọn element dựa trên một phần text. → Dùng XPath: `//button[contains(text(),'Sub')]`
- **Chọn phần tử cha (parent)** — từ `<button>` muốn tìm `<div>` cha. CSS đi từ cha → con, không đi ngược con → cha. → Dùng XPath: `//button/parent::div`
- **Chọn anh em đứng trước** — từ `<button>` muốn tìm `<input>` nằm trước nó. CSS chỉ hỗ trợ chọn sibling đứng sau. → Dùng XPath.
- **Element chỉ khác nhau bởi text** — 3 button Login / Submit / Cancel, không có id/class, text là yếu tố duy nhất để phân biệt. → Dùng XPath hoặc Playwright locator theo text/role.

---

## 6. Playwright Selector

Playwright Selector là hệ thống locator mạnh mẽ và linh hoạt của Playwright để tìm và tương tác với các phần tử trên trang web.

**Công thức chung:**

```
await page.<locator>(...).<action>();
```

→ `page` → tìm element → thực hiện hành động.

Ví dụ:

```
await page.getByRole('button', { name: 'Submit' }).click();
```

→ Mở page → tìm button có tên Submit → click vào nó.

### 6.1. Locator – Role

Tìm element theo vai trò (ARIA role).

```
page.getByRole('<role>', { ...options })
```

Role gồm: button, link, textbox, checkbox, radio, heading, listitem...

**Các option:**

1. `name` — tìm theo accessible name (đến từ aria-label, text hiển thị, `<label>`, aria-labelledby...).
2. `exact` — tìm khớp chính xác.
3. `hasText` — tìm element có chứa text.
4. `has` — tìm element có chứa element khác.
5. `checked` — tìm checkbox/radio đã chọn hoặc chưa chọn.
6. `selected` — tìm option đang được chọn.
7. `disabled` — tìm element đang bị disable hoặc không.
8. `level` — tìm heading theo cấp độ (h1, h2...).
9. `expanded` — tìm element đang mở hoặc đóng.
10. `pressed` — tìm button đang được nhấn/toggle.
11. `includeHidden` — tìm cả element đang bị ẩn.

**Ví dụ theo từng role:**

```
page.getByRole('button', { name: 'Submit' })           // nút bấm
page.getByRole('link', { name: 'Learn more' })         // đường link
page.getByRole('textbox', { name: 'Username' })        // ô nhập text
page.getByRole('checkbox', { name: 'Remember me' })    // ô tick
page.getByRole('radio', { name: 'Male', exact: true }) // chọn 1 trong nhiều
page.getByRole('heading', { level: 1 })                // level: 1 = <h1>
page.getByRole('listitem').filter({ hasText: 'Apple' })// một <li>
page.getByRole('checkbox', { checked: true })          // đang được tick
page.getByRole('list')                                 // danh sách <ul>/<ol>
page.getByRole('combobox', { name: 'Country' })        // ô select
page.getByRole('dialog', { name: 'Confirm' })          // popup/modal
page.getByRole('table', { name: 'User data table' })   // bảng dữ liệu
page.getByRole('row', { name: /John Doe/ })            // một hàng trong bảng
page.getByRole('cell', { name: 'John Doe' })           // một ô trong bảng
```

### 6.2. Locator – Text

Tìm element theo text hiển thị.

```
page.getByText('Welcome back')              // khớp text chính xác
page.getByText('Welcome', { exact: false }) // chỉ cần chứa text đó
page.getByText(/welcome/i)                  // regex, /i = không phân biệt hoa/thường
page.locator('div').getByText('Hello')      // tìm div trước, thu hẹp phạm vi khi text bị trùng
```

**Lưu ý:**
- `getByText()` tự normalize whitespace khi tìm text.
- `input type="button"/"submit"` → nội dung hiển thị lấy từ `value`, không phải text content.

### 6.3. Locator – Label

Tìm input thông qua text của `<label>`.

```
page.getByLabel('Email address')            // <label for="email"> liên kết <input id="email">
page.getByLabel('Password').first()         // input nằm trong label
page.getByLabel('Email', { exact: false })  // label chỉ cần chứa Email
```

### 6.4. Locator – Placeholder

Tìm input theo placeholder.

```
page.getByPlaceholder('name@example.com')
await page.getByPlaceholder('name@example.com').fill('test@example.com');
```

Placeholder là chữ mờ trong ô input, thường biến mất khi nhập. Hữu ích khi input không có label nhưng có placeholder.

### 6.5. Locator – Title

Tìm element theo attribute `title`.

```
page.getByTitle('Issues count')
await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
```

Title thường thể hiện dưới dạng tooltip khi hover. Locator không chỉ để click, còn dùng để verify kết quả.

### 6.6. Locator – AltText

Tìm ảnh theo attribute `alt`.

```
page.getByAltText('playwright logo')
await page.getByAltText('playwright logo').click();
```

Ảnh không có text hiển thị trực tiếp nên không dùng `getByText()` để tìm ảnh.

### 6.7. Locator – TestId

Tìm element theo `data-testid`.

```
page.getByTestId('directions')
await page.getByTestId('directions').click();
await page.setTestIdAttribute('id');   // đổi để getByTestId() dùng id thay vì data-testid
```

`data-testid` giống "cái tem dev dán riêng cho tester".