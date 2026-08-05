# Git
- Merge: Là tập hợp các công việc riêng từ nhiều người trong cùng một dự án
+ Ví dụ: Gộp nhánh A vào nhánh B
- Khi tập nhiều công việc cùng lúc sẽ xảy ra tình huống xung đột - conflict
Phần conflict sẽ hiển thị ở dạng
<<< HEAD
>>>
+ Chứa incoming change và current branch
- Nhiều commits nhỏ lẻ, mỗi commits chứa 1 task thì gom nhóm commits lại là squash giúp history commit gọn gàng dễ đọc hơn
- Fast-forward merge: xảy ra khi không có thay đổi nào trên nhánh chính từ lúc tạo feature
- Three way merge: xảy ra khi merge feature branch vào main branch nhưng lịch sử của 2 branch đã có sự khác nhau
- Git rebase: là lệnh để thay đổi base (gốc) của branch, giúp tạo history commit clean hơn
# Playwright
1. CSS selector
- Là cú pháp dùng để chọn các phần tử HTML DOM, sử dụng trong CSS styling
- Ngắn gọn, hiệu năng cao hơn XPath
- Hạn chế là có những phần tử khó lấy được CSS nên vẫn cần sử dụng XPath
+ id: #id
+ class: .class
+ child: #parent > input
2. Playwright selector
- Là hệ thống locator mạnh mẽ và linh hoạt của Playwright để tìm và tương tác với các phần tử trên web
+ page.getByRole()
+ page.getByText()
+ page.getByLabel()
+ page.getByPlaceHolder()
- Các role phổ biến: button, link, textbox, checkbox, radio, heading, listitem
+ await page.getByRole('button', {name: 'Submit'}).click();
