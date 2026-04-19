**Lesson 9: Git and CSS Selector, Playwright Selector**
**Git**: Merge, Conflict, 
1. Merge strategy:
1.1. Fast-forward merge:
- Khi merge ko tạo ra commit merge
- Xảy ra khi không có thay đổi nào trên nhánh chính
1.2. Three way merge:
- Khi merge có tạo ra commit merge
- Xảy ra khi bạn muốn merge feature branch vào branch chính, mà lịch sử của 2 branch này đã có sự khác nhau
2. Rebase: lệnh để thay đổi base (gốc) của branch, giúp tạo ra lịch sử commit tuyến tính và sạch sẽ hơn (git rebase <tên nhánh>)
3. Squash: nhiều commit nhỏ lẻ, muốn gom nhóm lại
git rebase -i HEAD~(số lượng commit): git rebase -i HEAD~3

**Selector:** CSS Selector, Playwright Selector
Playwright Selector: hệ thống locator của Playwright để tìm và tương tác với các phần tử trên web
page.getByRole(): tìm element theo ARIA role (vai trò ngữ nghĩa của element)
page.getByText(): tìm element theo text hiển thị trên trang
page.getByLabel(): tìm input element thông qua text của <label> liên kết với nó
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId(): mặc định dùng cho thuộc tính "data-testid"
