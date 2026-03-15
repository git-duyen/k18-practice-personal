## Git
- Làm việc nhóm = làm việc riêng rồi gộp công việc vào.
Trong Git, gộp vào còn gọi là **merge**
- Khi gộp vào có nhiều tình huống xảy ra:
    - hai người cùng sửa 1 vị trí => trong git gọi là **conflict**
    - có nhiều commit nhỏ lẻ, muốn gom nhóm lại => trong git gọi là **squash**

### Merge
- Merge code = gộp code từ nhánh A vào nhánh B
- Merge Strategy
    - Fast-forward merge:
        - Khi merge không tạo ra commit merge
        - Xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo nhánh feature
    - Three way merge
        - Khi merge có tạo ra commit merge
        - Xảy ra khi bạn muốn merge feature branch vào branch chính mà lịch sử của 2 branch này đã có sự khác nhau

- VIM = editor
ESC -> thoát khỏi chế độ edit để back lại bảng điều khiển
:wq -> write and quit
enter

```
// update branch from base branch

git rebase <tên nhánh>

vd: git rebase main
```

```
//squash (gom) commit nhỏ lẻ thành 1

git rebase -i HEAD~<số commit>

// để squash (gom) 3 commit lại
vd: git rebase -i HEAD~3
```

### Conflict
- Là xung đột
- 2 người cùng sửa 1 file và merge vào main
```
Phần nằm giữa <<< HEAD và === là các nội dung đang ở nhánh của mình
Phần nằm giữa === và >>> (<branch_name>) là nội dung của nhành muốn merge vào
Incoming change
Current branch

```

## Playwright  - CSS Selector & Playwright Selector
- CSS Selector
    - Cú pháp đơn giản, ngắn gọn hơn
    - Không sử dụng được cho các case phức tạp: contains text
- CSS Selector nhanh hơn Xpath
    - vd: CSS Selector: div | Xpath: //div

- Playwright Selector
    - Những Playwright Selector thường dùng
        - page.getByRole()
        - page.getByText()
        - page.getByLabel()
        - page.getByPlaceholder()
        - page.getByAltText()
        - page.getByTitle()
        - page.getByTestId()
    