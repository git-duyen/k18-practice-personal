# Git - Merge, Conflict, Rebase, Squash

## 1. Tổng quan về Git khi làm việc nhóm

Khi làm việc nhóm, mỗi người thường làm việc riêng trên branch của mình.

Sau đó, các phần công việc sẽ được gộp lại vào branch chung.

Trong Git, thao tác gộp code/công việc được gọi là:

```bash
merge
```

Một số tình huống thường gặp khi làm việc với Git:

- Hai người cùng sửa một vị trí trong cùng một file.
- Git không tự biết nên giữ phần code nào.
- Khi đó sẽ xảy ra `conflict`.
- Có nhiều commit nhỏ lẻ, muốn gom lại cho gọn.
- Khi đó có thể dùng `squash`.

---

## 2. Git merge

`git merge` là thao tác gộp thay đổi từ một branch khác vào branch hiện tại.

Cú pháp:

```bash
git merge <branch_name>
```

Ví dụ:

```bash
git merge feature/login
```

Lệnh trên sẽ gộp thay đổi từ branch `feature/login` vào branch hiện tại.

---

## 3. Merge strategy

Git merge thường có 2 chiến lược phổ biến:

- Fast-forward merge
- Three-way merge

---

## 4. Fast-forward merge

Fast-forward merge xảy ra khi branch hiện tại chưa có commit mới nào kể từ lúc branch feature được tách ra.

Khi đó Git chỉ cần di chuyển con trỏ branch hiện tại tới commit mới nhất của branch feature.

Đặc điểm:

- Không tạo thêm merge commit.
- Lịch sử commit thẳng, gọn.
- Dễ đọc lịch sử thay đổi.

Ví dụ:

```
main:      A---B
                \
feature:         C---D
```

Sau khi merge:

```
main:      A---B---C---D
```

---

## 5. Three-way merge

Three-way merge xảy ra khi cả branch chính và branch feature đều có commit mới riêng.

Khi đó Git phải so sánh 3 điểm:

- Commit gốc chung.
- Commit mới nhất của branch hiện tại.
- Commit mới nhất của branch được merge vào.

Đặc điểm:

- Có thể tạo ra merge commit.
- Xảy ra khi lịch sử của 2 branch đã khác nhau.
- Có thể phát sinh conflict nếu 2 branch sửa cùng một vị trí.

Ví dụ:

```
main:      A---B---C
                \
feature:         D---E
```

Sau khi merge có thể tạo merge commit:

```
main:      A---B---C-------M
                \         /
feature:         D---E----
```

Trong đó `M` là merge commit.

---

## 6. Git conflict

Conflict là xung đột xảy ra khi Git không thể tự quyết định nên giữ phần code nào.

Conflict thường xảy ra khi:

- Hai người cùng sửa một file.
- Hai người cùng sửa một dòng.
- Hai branch cùng thay đổi một vị trí trong file.
- Sau đó thực hiện merge hoặc rebase.

---

## 7. Cấu trúc conflict trong file

Khi conflict xảy ra, Git sẽ đánh dấu trong file như sau:

```
<<<<<<< HEAD
Nội dung đang ở branch hiện tại
=======
Nội dung từ branch muốn merge vào
>>>>>>> feature/branch-name
```

Ý nghĩa:

- Phần nằm giữa `<<<<<<< HEAD` và `=======` là nội dung của branch hiện tại.
- Phần nằm giữa `=======` và `>>>>>>> branch_name` là nội dung của branch được merge vào.
- Khi xử lý conflict, cần chọn phần code đúng và xóa toàn bộ phần đánh dấu conflict.

Các marker cần xóa sau khi xử lý:

```
<<<<<<< HEAD
=======
>>>>>>> branch_name
```

---

## 8. Quy trình xử lý conflict

Quy trình xử lý conflict chuyên nghiệp:

1. Đọc code để xác định conflict nằm ở đâu.
2. Hiểu logic của cả 2 phần code đang bị conflict.
3. Với conflict dễ, có thể tự xử lý nếu hiểu rõ nghiệp vụ và logic.
4. Với conflict khó, cần trao đổi với author trước khi merge.
5. Không tự ý xóa code của người khác nếu chưa hiểu rõ.
6. Sau khi xử lý xong, xóa toàn bộ marker conflict.
7. Chạy lại test hoặc kiểm tra lại chức năng liên quan.
8. Add file đã xử lý conflict.
9. Commit lại thay đổi.

Ví dụ sau khi sửa conflict:

```bash
git add <file_name>
git commit
```

---

## 9. Git squash

Squash là thao tác gộp nhiều commit nhỏ thành một commit lớn hơn.

Mục đích:

- Làm lịch sử commit gọn gàng hơn.
- Tránh có quá nhiều commit nhỏ như `fix`, `update`, `fix typo`.
- Giúp Pull Request dễ review hơn.
- Giúp commit history sạch và dễ hiểu.

Ví dụ ban đầu có nhiều commit nhỏ:

```
feat: add login test
fix: update selector
fix: update wait condition
chore: format code
```

Sau khi squash, có thể gom lại thành một commit:

```
feat: add login automation test
```

---

## 10. Lệnh squash commit

Để squash commit, thường dùng interactive rebase.

Cú pháp:

```bash
git rebase -i HEAD~<number_of_commits>
```

Ví dụ muốn squash 3 commit gần nhất:

```bash
git rebase -i HEAD~3
```

---

## 11. Cách squash trong VIM

Sau khi chạy lệnh rebase interactive, Git sẽ mở giao diện VIM.

Ví dụ ban đầu:

```
pick abc1234 feat: add login test
pick def5678 fix: update selector
pick ghi9012 fix: update wait condition
```

Muốn gộp các commit sau vào commit đầu tiên, sửa thành:

```
pick abc1234 feat: add login test
s def5678 fix: update selector
s ghi9012 fix: update wait condition
```

Trong đó:

- `pick`: giữ commit.
- `s` hoặc `squash`: gộp commit này vào commit phía trên.

---

## 12. Thao tác trong VIM khi squash

Các phím cần nhớ:

- Bấm `i` để vào chế độ chỉnh sửa.
- Sửa `pick` thành `s` hoặc `squash` ở các commit muốn gộp.
- Bấm `ESC` để thoát chế độ chỉnh sửa.
- Gõ `:wq`.
- Bấm `Enter` để lưu và thoát.

Ghi nhớ thêm:

- Để vào chế độ **insert**, gõ phím `i` (màn hình hiện `INSERT` ở góc dưới bên trái).
- Để thoát khỏi chế độ **insert**, gõ phím `ESC` (màn hình biến mất `INSERT` ở góc dưới bên trái).
- Để lưu và thoát: gõ `:wq` (lưu ý có dấu `:` ở đầu. `wq` = **w**rite and **q**uit).
- Để thoát mà không lưu thay đổi, gõ `:q!` (`q!` = force quit).

```
i       -> vào chế độ sửa
ESC     -> thoát chế độ sửa
:wq     -> lưu và thoát
:q!     -> thoát không lưu
```

---

## 13. Chỉnh sửa commit message sau khi squash

Sau khi chọn squash xong, Git sẽ mở màn hình chỉnh sửa commit message.

Ở màn hình này có thể:

- Giữ lại commit message chính.
- Xóa các message không cần thiết.
- Comment các message không cần thiết bằng dấu `#`.

Ví dụ:

```
feat: add account automation tests

# fix: update selector
# fix: update wait condition
# chore: format code
```

Khi đó commit message cuối cùng sẽ là:

```
feat: add account automation tests
```

Các dòng bắt đầu bằng `#` sẽ được Git bỏ qua.

---

## 14. Git rebase

Rebase là thao tác thay đổi base của branch hiện tại.

Cú pháp:

```bash
git rebase <branch_name>
```

Ví dụ:

```bash
git rebase main
```

Ý nghĩa:

- Lấy branch `main` làm base mới.
- Đưa các commit của branch hiện tại lên sau commit mới nhất của `main`.
- Giúp lịch sử commit tuyến tính hơn.

---

## 15. Phân biệt merge và rebase

### **1) Rebase dùng để làm gì?**

Khi bạn làm việc trên nhánh feature, trong lúc đó nhánh main có thể đã có commit mới từ người khác.

Nếu bạn muốn nhánh feature của mình **được cập nhật theo main mới nhất** và **lịch sử commit nhìn thẳng, sạch**, bạn dùng rebase.

Rebase giúp:

Lấy các commit mới nhất của main làm nền (base) mới

“Đưa” các commit của feature **chạy lại** trên nền mới đó

Làm lịch sử commit **tuyến tính** (nhìn như 1 đường thẳng, ít merge commit)

### **2) Ví dụ bằng hình (dễ hình dung)**

Giả sử ban đầu như sau:

main có: A---B---C

Bạn tạo feature từ B, rồi làm thêm commit D---E

main:     A---B---C
           \
feature:    D---E

Nếu bạn chạy:

git checkout feature
git rebase main

thì Git sẽ:

Lấy main mới nhất (đang ở C) làm base

“bóc” 2 commit của bạn (D, E) ra

“dán” lại lên sau C (nhưng **commit id sẽ đổi** vì được tạo lại)

Kết quả:

main:     A---B---C
                 \
feature:          D'---E'

D' và E' là “phiên bản mới” của D và E.

### **3) Cú pháp git rebase main nghĩa là gì?**

Bạn đang đứng ở nhánh nào thì nhánh đó bị ảnh hưởng.

Ví dụ bạn đang ở feature:

git rebase main

Nghĩa là:

Lấy main làm base mới

Mang commit của feature đặt lại lên sau main

### **4) Vì sao rebase “nguy hiểm” hơn merge?**

Vì rebase **viết lại lịch sử commit** (rewrite history):

Commit hash đổi (D thành D')

Nếu nhánh đó **đã push lên remote** và người khác đang dùng, bạn có thể làm họ bị rối lịch sử

Vì vậy quy tắc thực tế hay dùng:

Rebase OK cho **nhánh cá nhân/chưa share nhiều**

Hạn chế rebase nhánh đã public/shared (trừ khi team thống nhất)

### **5) Nếu bị conflict khi rebase thì sao?**

Khi rebase, Git đang “chạy lại commit”, nên có thể conflict.

Quy trình thường là:

Sửa conflict trong file

git add <file>

Tiếp tục rebase:

git rebase --continue

Nếu muốn bỏ rebase và quay lại như cũ:

git rebase --abort

### **6) Tại sao sau rebase/squash đôi khi phải force push?**

Vì rebase/squash làm commit hash đổi → remote không còn “khớp” với local nữa.
Khi bạn push sẽ bị non-fast-forward, nên mới có phần **force push** (và --force-with-lease) ở mục 15.1.

| Nội dung | Merge | Rebase |
| --- | --- | --- |
| Mục đích | Gộp code từ branch khác vào branch hiện tại | Đổi base của branch hiện tại |
| Lịch sử commit | Có thể tạo merge commit | Lịch sử tuyến tính hơn |
| Dễ dùng | Dễ hơn | Cần cẩn thận hơn |
| Rủi ro | Ít làm thay đổi lịch sử commit | Có thể rewrite commit history |
| Khi dùng | Khi muốn gộp branch | Khi muốn làm lịch sử commit sạch hơn |

---

## 15.1. Force push (push -f) sau khi rebase / squash

Khi bạn đã `rebase` hoặc `squash` trên một nhánh đã từng push lên remote, lịch sử commit của nhánh sẽ bị “viết lại”.

Lúc này, nếu bạn push bình thường, rất dễ gặp lỗi kiểu:

```
[rejected]        demo-force -> demo-force (non-fast-forward)
error: failed to push some refs to '...'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
```

### 1) Cách xử lý: force push

Force push (push “bất chấp”) sẽ ghi đè lịch sử trên remote theo lịch sử local của bạn:

```bash
git push -f <remote_name> <branch_name>
```

**Ví dụ:**

```bash
git push -f origin demo-force
```

Nếu thành công, bạn có thể thấy thông báo như:

```
+ b4afb16...15aeb5a demo-force -> demo-force (forced update)
```

### 2) Lưu ý quan trọng

- Force push **rất nguy hiểm** vì có thể ghi đè commit của người khác trên remote.
- Trước khi force push, nên kiểm tra kỹ:
    - Bạn đang đứng đúng branch chưa: `git branch`
    - Nhánh remote hiện tại có ai vừa push không: `git fetch` rồi so sánh log

### 3) Gợi ý an toàn hơn: `--force-with-lease`

Thay vì `-f`, bạn có thể ưu tiên:

```bash
git push --force-with-lease origin demo-force
```

**--force-with-lease hoạt động “an toàn hơn” thế nào?**

Nó vẫn là force push, **nhưng có kiểm tra trước**:

- Nếu remote branch **vẫn đang trỏ đúng commit mà bạn đã thấy/lần cuối bạn biết** (tức là không ai push thêm) → **cho phép push**.
- Nếu remote branch **đã thay đổi** so với “trạng thái bạn biết” (có người khác push thêm) → **Git sẽ từ chối**, để bạn không vô tình ghi đè.

**Ví dụ dễ hiểu**

- Bạn và đồng đội cùng làm trên `demo-force`.
- Bạn `fetch` và thấy remote đang ở commit `A`.
- Trong lúc bạn rebase/squash, đồng đội push thêm commit → remote lên commit `B`.
- Bạn dùng `git push -f origin demo-force` → vẫn đẩy lên, có thể **đè mất commit B**.
- Bạn dùng `git push --force-with-lease origin demo-force` → Git thấy remote đã đổi từ `A` sang `B` → **từ chối push** để cảnh báo bạn.

## 16. Ghi nhớ nhanh

- `merge`: gộp branch này vào branch khác.
- `fast-forward merge`: merge nhanh, không tạo merge commit.
- `three-way merge`: merge khi 2 branch đã có lịch sử khác nhau, có thể tạo merge commit.
- `conflict`: xảy ra khi Git không tự quyết định được nên giữ phần code nào.
- `<<<<<<< HEAD`: phần code ở branch hiện tại.
- `=======`: phần ngăn cách giữa 2 thay đổi.
- `>>>>>>> branch_name`: phần code từ branch được merge vào.
- `squash`: gộp nhiều commit nhỏ thành một commit lớn.
- `rebase`: thay đổi base của branch, giúp lịch sử commit gọn hơn.
- Trong VIM:
    - `i`: vào chế độ sửa.
    - `ESC`: thoát chế độ sửa.
    - `:wq`: lưu và thoát.

---

## 17. Một số lệnh Git thường dùng trong bài này

```bash
git merge <branch_name>
```

```bash
git rebase <branch_name>
```

```bash
git rebase -i HEAD~3
```

```bash
git add <file_name>
```

```bash
git commit
```

```bash
git status
```

---

## 18. Kết luận

Trong Git, khi làm việc nhóm sẽ thường xuyên cần gộp code, xử lý conflict và làm sạch lịch sử commit.

Các kiến thức quan trọng cần nắm:

- Hiểu merge là gì.
- Phân biệt fast-forward merge và three-way merge.
- Biết conflict xảy ra khi nào.
- Biết cách đọc marker conflict.
- Biết xử lý conflict cẩn thận, tránh làm mất code người khác.
- Biết dùng squash để gom commit nhỏ.
- Biết thao tác cơ bản với VIM khi squash/rebase.

# Playwright - CSS Selector & Playwright Selector

## 1. Tổng quan về Selector trong Playwright

Selector là cách dùng để tìm element trên trang web, sau đó thực hiện thao tác hoặc kiểm tra với element đó.

Trong Playwright thường dùng 2 nhóm selector chính:

- CSS Selector
- Playwright Selector / Locator

Playwright Selector là hệ thống locator mạnh và linh hoạt của Playwright, giúp tìm và tương tác với các phần tử trên trang web theo cách gần với hành vi người dùng hơn.

Một số Playwright locator thường dùng:

```tsx
page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId()
```

---

## 2. CSS Selector

CSS Selector là cú pháp dùng để chọn element trong HTML DOM.

CSS Selector được dùng rộng rãi trong CSS styling và automation test.

Ưu điểm:

- Cú pháp ngắn gọn.
- Hiệu năng cao hơn XPath trong nhiều trường hợp.
- Dễ dùng với tag, id, class, child, descendant.

Hạn chế:

- Không chọn được element theo text trực tiếp.
- Khó chọn parent element.
- Khó chọn element đứng trước.
- Một số trường hợp phức tạp phải dùng XPath hoặc Playwright locator.

---

## 3. So sánh CSS Selector và XPath Selector

| Mục đích | CSS Selector | XPath Selector |
| --- | --- | --- |
| Chọn theo tag | `div` | `//div` |
| Chọn theo id | `#registrationForm` | `//form[@id="registrationForm"]` |
| Chọn theo class | `.form-group` | `//div[@class="form-group"]` |
| Chọn child trực tiếp | `#parent > input` | `//div[@id="parent"]/input` |
| Chọn descendant | `#ancestor div` | `//div[@id="ancestor"]/descendant::div` |
| Chọn nhiều element | `div, input` | `//div | //input` |

---

## 4. Playwright Locator

Playwright locator là cách Playwright tìm element trên trang để thao tác hoặc verify.

Ví dụ:

```tsx
await page.locator('button').click();
await page.locator('#email').fill('test@example.com');
await page.locator('.form-group').count();
```

Tuy nhiên, khi viết automation test, nên ưu tiên các locator có ý nghĩa với người dùng như:

```tsx
page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId()
```

Các locator này giúp test dễ đọc hơn và ít phụ thuộc vào cấu trúc HTML hơn.

---

## 5. `page.getByRole()`

`page.getByRole()` dùng để tìm element theo ARIA role, tức là vai trò ngữ nghĩa của element.

Cú pháp:

```tsx
page.getByRole(role, options)
```

Một số role phổ biến:

- `button`: nút bấm
- `link`: liên kết
- `textbox`: ô nhập text
- `checkbox`: ô hộp kiểm
- `radio`: nút radio
- `heading`: tiêu đề
- `listitem`: mục trong danh sách

Ví dụ chọn button có text `Submit`:

```tsx
await page.getByRole('button', { name: 'Submit' }).click();
```

Ví dụ chọn link có text `Learn more`:

```tsx
await page.getByRole('link', { name: 'Learn more' }).click();
```

Ví dụ chọn heading level 1:

```tsx
await page.getByRole('heading', { level: 1 }).textContent();
```

Ví dụ chọn checkbox đã được check:

```tsx
await page.getByRole('checkbox', { checked: true });
```

---

## 6. `page.getByText()`

`page.getByText()` dùng để tìm element theo text hiển thị trên trang.

Cú pháp:

```tsx
page.getByText(text, options)
```

Ví dụ tìm chính xác text:

```tsx
await page.getByText('Welcome back').click();
```

Ví dụ tìm text có chứa một phần nội dung:

```tsx
await page.getByText('Welcome', { exact: false });
```

Ví dụ dùng regex, không phân biệt chữ hoa chữ thường:

```tsx
await page.getByText(/welcome/i);
```

Có thể kết hợp với locator khác theo kiểu chaining:

```tsx
await page.locator('div').getByText('Hello');
```

`Chaining locator` nghĩa là tìm element trong phạm vi của một locator khác.

---

## 7. `page.getByLabel()`

`page.getByLabel()` dùng để tìm input element thông qua text của thẻ `<label>` liên kết với nó.

Cú pháp:

```tsx
page.getByLabel(text, options)
```

Ví dụ HTML:

```html
<label>Password <input type="password" /></label>
```

Có thể fill password như sau:

```tsx
await page.getByLabel('Password').fill('secret');
```

Ví dụ label liên kết với input bằng thuộc tính `for`:

```html
<label for="email">Email address</label>
<input id="email" type="email">
```

Tìm input qua label:

```tsx
await page.getByLabel('Email address').fill('test@example.com');
```

Tìm không chính xác tuyệt đối:

```tsx
await page.getByLabel('Email', { exact: false }).fill('test@example.com');
```

---

## 8. `page.getByPlaceholder()`

`page.getByPlaceholder()` dùng để tìm input theo nội dung placeholder.

Cú pháp:

```tsx
page.getByPlaceholder(text, options)
```

Ví dụ HTML:

```html
<input type="email" placeholder="name@example.com" />
```

Cách dùng:

```tsx
await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com');
```

Locator này phù hợp khi input không có label rõ ràng nhưng có placeholder.

---

## 9. `page.getByAltText()`

`page.getByAltText()` thường dùng để tìm ảnh theo thuộc tính `alt`.

Cú pháp:

```tsx
page.getByAltText(text, options)
```

Ví dụ HTML:

```html
<img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />
```

Cách dùng:

```tsx
await page.getByAltText('playwright logo').click();
```

Locator này thường dùng với thẻ ảnh `<img>`.

---

## 10. `page.getByTitle()`

`page.getByTitle()` dùng để tìm element theo thuộc tính `title`.

Cú pháp:

```tsx
page.getByTitle(text, options)
```

Ví dụ HTML:

```html
<span title="Issues count">25 issues</span>
```

Cách dùng:

```tsx
await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
```

---

## 11. `page.getByTestId()`

`page.getByTestId()` dùng để tìm element theo thuộc tính test id.

Mặc định Playwright dùng thuộc tính:

```html
data-testid
```

Ví dụ HTML:

```html
<button data-testid="directions">Itinéraire</button>
```

Cách dùng:

```tsx
await page.getByTestId('directions').click();
```

Theo nội dung bài học, có thể cấu hình test id attribute để dùng thuộc tính khác, ví dụ `id`.

Ví dụ HTML:

```html
<button id="directions">Itinéraire</button>
```

Sau khi cấu hình test id attribute là `id`, có thể dùng:

```tsx
await page.getByTestId('directions').click();
```

---

## 12. Nên ưu tiên selector nào?

Thứ tự ưu tiên khi viết automation test:

1. `getByRole()`
    
    Vì gần với cách người dùng tương tác nhất.
    
2. `getByLabel()`
    
    Phù hợp với input có label rõ ràng.
    
3. `getByPlaceholder()`
    
    Phù hợp với input có placeholder rõ ràng.
    
4. `getByText()`
    
    Phù hợp khi cần tìm element theo text hiển thị.
    
5. `getByAltText()`
    
    Phù hợp với ảnh.
    
6. `getByTitle()`
    
    Phù hợp với element có thuộc tính title.
    
7. `getByTestId()`
    
    Phù hợp khi dự án có gắn test id riêng cho automation.
    
8. CSS Selector / XPath
    
    Dùng khi các locator trên không đáp ứng được.
    

---

## 13. Ví dụ tổng hợp

### Tìm button

```tsx
await page.getByRole('button', { name: 'Submit' }).click();
```

### Tìm link

```tsx
await page.getByRole('link', { name: 'Learn more' }).click();
```

### Tìm input theo label

```tsx
await page.getByLabel('Email address').fill('test@example.com');
```

### Tìm input theo placeholder

```tsx
await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com');
```

### Tìm ảnh theo alt text

```tsx
await page.getByAltText('playwright logo').click();
```

### Tìm element theo title

```tsx
await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
```

### Tìm element theo test id

```tsx
await page.getByTestId('directions').click();
```

---

## 14. Ghi nhớ nhanh

- CSS Selector dùng để chọn element trong DOM, cú pháp ngắn gọn và hiệu năng tốt.
- CSS Selector phù hợp khi chọn theo tag, id, class, child, descendant.
- CSS Selector không mạnh khi cần chọn theo text, parent hoặc element đứng trước.
- Playwright Selector giúp tìm element theo cách gần với người dùng hơn.
- `getByRole()` tìm element theo vai trò như button, link, textbox, checkbox.
- `getByText()` tìm element theo text hiển thị.
- `getByLabel()` tìm input thông qua label.
- `getByPlaceholder()` tìm input theo placeholder.
- `getByAltText()` tìm ảnh theo alt text.
- `getByTitle()` tìm element theo thuộc tính title.
- `getByTestId()` tìm element theo test id, mặc định là `data-testid`.
- Có thể chaining locator để tìm element trong phạm vi hẹp hơn.

---

## 15. Kết luận

Khi viết automation test bằng Playwright, nên ưu tiên các locator rõ nghĩa, gần với hành vi người dùng và dễ đọc.

Nên ưu tiên:

```tsx
page.getByRole()
page.getByLabel()
page.getByText()
```

Chỉ nên dùng CSS Selector hoặc XPath khi không thể tìm element bằng các Playwright locator phù hợp.

## 16. Bổ sung thêm kiến thức về CSS Selector

https://appletree.or.kr/quick_reference_cards/CSS/CSS selectors cheatsheet.pdf

## 17. Bổ sung thêm về Playwright selector-getByRole

## 18. Bổ sung thêm về Playwright selector-getByText

- GetByText sẽ luôn `normalize space` trước khi tìm, nghĩa là nếu có `> 2` khoảng trắng -> sẽ giảm còn `1` khoảng trắng
- Input với `type` là `"button"` hoặc `"submit"` sẽ luôn tìm theo `"value"` chứ không phải text content
    - **VD:**
        - **Selector:** `page.getByText("Login");`
        - **Sẽ match với DOM:** `<input type="button" value="Log in">`

## 19. Bổ sung thêm về getByLabel

## 20. Bổ sung thêm về Playwright selector-getByAltText