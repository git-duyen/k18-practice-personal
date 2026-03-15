# GIT
1. merge
- Làm việc nhóm = Làm việc riêng r gộp công việc vào 
- Trong git, gộp vào gọi là "merge"
- merge strategy
    + Fast-forward merge
        + Khi merge k tạo ra commit merge
        + Xảy ra khi không cs thay đổi nào trên nhánh chính kể từ lúc tạo nhánh feature
    + Three way merge 
        + Khi merge có tạo ra commit merge 
        + Xảy ra khi bạn muốn merge feature branch, vào branch chính mà lịch sử của 2 branch này đã khác nhau   
2. conflict
- Khi gộp có nhiều tình huống xảy ra 
    + Hai người cùng sửa 1 vị trí => trong git gọi là "conflict"
- Quy trình xử lý conflict 
    + Đọc code, xác định conflict
    + Giải quyết các conflict dễ, không cần trao đổi trước
    + Đối với các conflict khó, cần trao đổi vs tác giả trước khi merge, tránh làm mất code của ng khác. 
3. squash
- có nhiều commit nhỏ lẻ, muốn gom nhóm lại 
=> Trong git gọi là "Squash"
> git rebase -i HEAD~số lượng commit. 
- Vào giao diện squash (VIM)
    + Gõ i để vào chế độ insert 
    + Commit đầu tiên luôn phải giữ nguyên pick
    + Commit nào muốn gộp vào, đổi thành "s" hoặc "squash"
    + Gõ phím ESC sau đó ":wq" để hoàn thành các commit rebase. 
    + Sang màn tiếp theo chỉnh sửa commit msg   
    + cmt các msg không cần thiết lại: thêm dấu # ở đầu. 
        + Thường chỉ giữ lại msg đầu tiên 
    + Chỉ chỉnh sửa msg nếu cần thiết 
    + xong việc gõ :wq
    + Hoàn thành việc squash
4. Rebase
- Lệnh để thay đổi base gốc của branch, giúp tạo ra 
lịch sử commit tuyến tính và sạch sẽ. 
> git rebase < tên nhánh>

# PLAYWRIGHT
1. CSS selector
![](./img/Screenshot%202026-03-15%20at%2021.02.25.png)

2. Playwright selector 
- page.getByRole()
    + Đây là selector được ưu tiên nhất. Nó tìm kiếm dựa trên vai trò ARIA (như button, checkbox, link) và tên hiển thị.
    + Ví dụ: Tìm nút "Đăng ký".
    > await page.getByRole('button', { name: 'Đăng ký' }).click();

- page.getByText()
    + Tìm kiếm phần tử dựa trên nội dung văn bản hiển thị trên màn hình.
    + Ví dụ: Kiểm tra xem dòng chữ "Chào mừng bạn" có xuất hiện không.
    > await expect(page.getByText('Chào mừng bạn')).toBeVisible();

- page.getByLabel()
    + Dùng cho các form nhập liệu, tìm kiếm <input> dựa trên văn bản của thẻ <label> đi kèm.
    + Ví dụ: Nhập email vào ô có nhãn "Địa chỉ Email".
    > await page.getByLabel('Địa chỉ Email').fill('user@example.com');

- page.getByPlaceholder()
    + Tìm kiếm ô nhập liệu dựa trên văn bản gợi ý (placeholder) nằm bên trong ô đó.
    + Ví dụ: Tìm ô có chữ "Nhập mật khẩu tại đây".
    > await page.getByPlaceholder('Nhập mật khẩu tại đây').fill('123456');

- page.getByAltText()
    + Thường dùng cho hình ảnh (<img>), tìm kiếm dựa trên thuộc tính alt (văn bản thay thế).
    + Ví dụ: Kiểm tra logo công ty.
    > await expect(page.getByAltText('Logo Công ty')).toBeVisible();

- page.getByTitle()
    + Tìm kiếm phần tử dựa trên thuộc tính title (thường xuất hiện khi bạn di chuột qua phần tử đó).+ Ví dụ: Tìm nút có chú thích "Giỏ hàng".
    > await page.getByTitle('Xem giỏ hàng của bạn').click();

- page.getByTestId()
    + Đây là "phao cứu sinh" cuối cùng khi các thuộc tính trên không ổn định. Nó tìm dựa trên thuộc tính data-testid mà lập trình viên chủ động thêm vào code để phục vụ testing.
    + Ví dụ: Tìm một phần tử cụ thể không có text cố định.
    > await page.getByTestId('submit-order-button').click();


