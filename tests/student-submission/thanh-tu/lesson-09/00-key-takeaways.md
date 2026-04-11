# Lesson 09 - Git & CSS Selector

## Git
* Làm việc riêng rồi gộp công việc vào gọi là "merge"
* Khi gộp, 2 người cùng sửa 1 vị trí => gọi là "conflict"
* Có nhiều commit nhỏ lẻ, muốn gom nhóm lại, gọi là "squash"

### Merge
merge code = gộp code từ nhánh A vào nhánh B

#### Merge Strategy
* Fast-forward merge
    * Khi merge không tạo ra commit merge
    * Xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo ra feature branch
* Three-way merge
    * Khi merge có tạo ra commit merge
    * Xảy ra khi bạn muốn merge feature branch vào branch chính, mà lịch sử của 2 branch đã khác nhau

### Rebase
`git rebase <tên_nhánh>`: di chuyển các commit của nhánh hiện tại vào nhánh `<tên_nhánh>`


### Squash
`git rebase -i HEAD~<số_commit>`, gom `<số_commit>` commit vào làm 1

-i là interactive(tương tác với các commit)

### Conflict
Khái niệm:
* là xung đột
* xảy ra khi 2 người cùng sửa 1 file, sau đó merge lại với nhau

Conflict construct:
```
<<<<<<< HEAD
a simple line
========
A new line
>>>>>>feature/2
```
Phần nằm giữa `<<<HEAD` và `====` là nội dung của nhánh hiện tại
Phần nằm giữa `====` và `>>> feature/2` à nội dung của nhánh được merge vào

* Current change: nội dung ở nhánh hiện tại
* Incoming change: nội dung từ nhánh khác

Sau khi chỉnh sửa xong, add file và commit với message "resolve conflict" trên nhánh hiện tại

## Selector

### CSS Selector
CSS Selector ổn định hơn và ít tốn tài nguyên hơn so với XPath

### Playwright Selector
Những Playwright locator thường dùng:
* page.getByRole() 
* page.getByText()
* page.getByLabel()
* page.getByPlaceholder()
* page.getByAltText()
* page.getByTitle()
* page.getByTestId()

Ưu tiên dùng theo thứ tự:
1. getByRole()
2. getByLabel() / getByText()
3. getByTestId() (khi dev hỗ trợ)
4. CSS selector (fallback)

#### page.getByRole()
Tìm element theo ARIA role (vai trò ngữ nghĩa của element)
* button - nút bấm
* link - liên kết
* textbox - ô nhập text
* checkbox - hộp kiểm
* radio - nút radio
* heading - tiêu đề
* listitem - mục trong danh sách

#### page.getByLabel()
Tìm input element thông qua text của `<label>` liên kết với nó

`page.getByLabel(text, options)`

```
<!-- HTML -->
<label for="email">Email address</label>
<input id="email" type="email">

// Tìm input thông qua label
await page.getByLabel('Email address').fill('test@example.com')

//Tìm không chính xác
await page.getByLabel('Email', {exact: false}).fill('test@example.com')
```