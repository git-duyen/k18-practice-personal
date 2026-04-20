# Tổng hợp kiến thức dã học

## Buổi 1

### 1. Playwright là gì? Tại sao nên chọn Playwright TypeScript?

1. Playwright là gì ?

- Là một framework, tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.

- Ưu điểm:
  - Cross browser
  - Cross platform
  - Tính năng xịn xò(auto waiting, auto-retry
    assertion) giúp giảm flaky tests (lúc pass, lúc fail)
  - Report đầy đủ thông tin(pass/fail rõ ràng theo trình duyệt, click từng test để hiện chi tiết, thời gian chạy, lỗi ở đâu, dòng nào)
  - Code gen(thao tác để sinh ra code)

2. Tại sao nên học Playwright?

- Dễ cài đặt.

- Cú pháp đơn giản, dễ học Framework trending, nhiều cơ hội việc làm.

3. Cài đặt Playwright

- Tạo thư mục mới (tên tuỳ chọn)

- Mở thư mục trong VS Code

- Mở terminal chạy lệnh:

> npm init playwright@latest

```markdown
test('has title', async ({ page }) => {
await page.goto('https://e-commerce-dev.betterbytesvn.com/'); // đi đến trang e-commerce-dev.betterbytesvn.com

// Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/E-commerce site for automation testing/); // Kiểm tra tiêu đề có chứa chữ "E-commerce site for automation testing" không
});
```

### 2. Git - Đưa code lên github

1. Cấu hình git

- SSH key:
  - Cặp khoá (2 cái): id_rsa và id_rsa.pub
    - id_rsa: cần giữ bí mật
    - id_rsa.pub: có thể gửi cho người khác
  - Giúp xác thực đăng nhập dễ dàng hơn
  - Lưu ở ~/ssh, "~" đại diện thư mục home

- Lệnh tạo SSH key:

  > ssh-keygen -t rsa -b 4096 -C "email"

- Lấy nội dung SSH key:

  > cat ~/.ssh/id_rsa.pub
  - Truy cập [https://github.com/settings/ssh/new] để thêm SSH key

- Username và Email

  ```markdown
  // cấu hình chung username toàn bộ
  git config --global user.name "[name]"

  // cấu hình username cho Repository đang đứng
  git config user.name "[name]"

  //cấu hình chung email toàn bộ
  git config --global user.email "[email]"

  // cấu hình email cho Repository đang đứng
  git config user.email "[email]"
  ```

2. Đưa code lên github

- Khởi tạo repo local (làm 1 lần)

  > git init

- Tạo repo Github và liên kết với repo Local (làm 1 lần)

  > git remote add origin "link_url"

- Thêm file vào staging (làm khi có thay đổi)

  > git add .

- Commit file (làm khi có thay đổi)

  > git commit -m "Message"

- Push code (làm khi có thay đổi)

  > git push origin main

- Tạo repository:
  - Truy cập: [https://github.com/new]
  - Điền tên repository
  - Chọn "Public"

- Khởi tạo:
  - Khởi tạo repo local: git init
  - Liên kết repository vừa tạo với git: git remote add origin [ssh_link]
  - Thêm code: git add .
  - Thêm commit: git commit -m "init project"

- Push code: git push origin main

- Invite collaborators:
  - Truy cập repo setting: ["https://github.com/<user_name>/<repo_name>/<settings>/access"]
  - Điền tên github
  - Add collaborators
