# Bài 9: GIT và CSS selector, playwright selector
## Phần 1: GIT
Git: làm việc nhóm = làm việc riêng rồi gộp vào chung (còn gọi là merge)
Khi gộp vào có các tình huống xảy ra:
- 2 người cùng sửa 1 vị trí -> conflict
- Nhiều người commit nhỏ lẻ, muốn gom lại -> squash
### 1. Merge
- Fast forward: xảy ra khi nhánh chính không có gì thay đổi từ khi tạo nhánh khác. Khi merge TH này sẽ không tạo ra commit merge
- Three way merge: Merge vào nhánh chính khi lịch sử của 2 nhánh khác nhau

**Lưu ý:**
- Nhánh main chỉ được tạo ra khi có 1 commit đầu tiên.
- Thường khi merge xong sẽ xóa nhánh đc merge đi.
### 2. Conflict: xung đột
- Xảy ra khi 2 người cùng sửa 1 vị trí sau đó merge vào với nhau
- Xử lý conflict:
    - Đọc code, xác nhận conflict
    - Giải quyết những vấn đề dễ, không cần trao đổi trước.
    - Với những conflict khó, cần trao đổi để tránh làm mất code của người khác.

### 3. Rebase
- Là lệnh thay đổi base (gốc) của branch, giúp tạo lịch sử commit sạch sẽ hơn.
- Câu lệnh: git rebase <ten_nhanh>

Ví dụ: 
```
Từ main đang có code 1, 2
Từ main tạo ra 2 nhánh a và b.
Tại nhánh a tạo ra commit 3, 4
Tại nhánh b tạo ra commit 5.
Merge a vào main
Lúc này main: 1, 2, 3 , 4.
Tại nhánh b chọn git rebase main
=> Sẽ lấy base từ main và áp dụng thêm commit 5
Nhánh b: 1,2,3,4,5
```
### 4. Squash
- Là kỹ thuật gộp nhiều commit thành 1, giúp lịch sử commit gọn gàng và dễ đọc hơn.
- Cú pháp: git rebase -i HEAD~<số lượng commit>
- Giao diện squash
```
Vim = editor => vào giao diện squash
Gõ i để vào chế độ insert
Commit đầu tiên luôn phải giữ nguyên pick
Commit nào muốn gộp vào commit đầu sẽ đổi thành s hoặc squash ở đầu dòng
Gõ ESC => nhập :wq để hoàn thành khai báo commit rebase

Sang màn tiếp theo chỉnh sữa comment message.
Các commit message không cần thiết để dấu # ở đầu, thường chỉ giữ lại message đầu tiên.
Xong việc gõ :wq
=> hoàn thành squash
```

## Phần 2: Playwright
### 1. CSS selector
- Là cú pháp để chọn các phần tử html trong DOM, được sử dụng rộng rãi trong css styling
- Css selector cú pháp ngắn gọn, hiệu năng tốt hơn xpath
- TH những phần tử khó không dùng đc css nên bắt buộc phải dùng xpath

|các loại| CSS selector| Xpath selector
|--- |---|---|
|tag|div|//div
|id|#registrationForm|//from[@id='registrationForm']
|class|.form-group|//div[@class='form-group']
|child|#parent>input| //div[@id='parent']/input
|descendant|#ancestor div|//div[@id='ancestor']/descendant:div
|combine|div, input| //div\|//input

### 2. Playwright selector
- Là hệ thống locator mạnh mẽ và linh hoạt của playwright để tìm kiếm và tương tác với các phần tử trên trang web.
- Một số loại thường dùng:
#### 1. page.getByRole() => các loại: button, link, textbox, checkbox, radio, heading, listitem
ví dụ: Tìm checkbox đã được check 
```
await page.getByRole('checkbox', {checked:true});
```
    
#### 2. page.getByText()
Ví dụ:
Tìm text có chứa substring
```
await page.getByText('Welcome', {exact:false});
```
Kết hợp với các locator khác
```
await page.locator('div').getByText('hello');
```
#### 3. page.getByLable()
VD tìm input thông qua lable
```
await page.getByLable('Email address').fill('test');
```

#### 4. page.getByPlaceholder()
```
<input type="email" placeholder = "name@mail.com"/>
=>
await page.getByPlaceholder('name@mail.com').fill('test@gmail.com');
```
#### 5. page.getByAltText()
```
VD: <img alt ="playwright logo" src = "/img/playwright-logo.svg" width ="100" />
=> 
await page.getByAltText('playwright logo').click();
```
#### 6. page.getByTitle()
```
vd: <span title = 'test' > 25 issues</span>
=>
await expect(page.getByTitle(test)).toHaveText('25 issues');
```
#### 7. page.getByTestId()
    
Mặc định dùng cho thuộc tính data-testid
```
<button data-testid="test" > Itneraire</button>
<button id="test"> Itneraire</button>
=>
await page.setTestIdAttribute('id');
await page.getByTestId('test').click()l
```