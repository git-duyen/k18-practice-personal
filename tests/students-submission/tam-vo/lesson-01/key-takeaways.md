# Lesson 1 - Getting started

## Cấu hình Git

Các cấu hình mặc định cần được thực hiện trước khi làm việc với Git

### 1. Cấu hình Username

Tên người dùng dùng để ghi nhận các commit.

```bash
git config --global user.name "<tên của bạn>"
```

### 2. Cấu hình địa chỉ email

Địa chỉ email dùng để ghi nhận các commit.

```bash
git config --global user.email "<email của bạn>"
```

### 3. Cấu hình nhánh mặc định

Đặt nhánh mặc định khi khởi tạo repository mới.

```bash
git config --global init.defaultBranch main
```

## Cài đặt VScode

### Cài đặt Playwright extension

1. Open VScode -> Truy cập vào tab 'Extensions' -> Search 'Playwright Test for VSCodC' with marked 'Microshoft'
2. Install extentions thành công -> Icon Testing sẽ hiển thị ở thanh menu bar

### Đổi terminal mặc định nếu sử dụng Win

1. Nhấn tổ hợp **Ctrl + Shift + P**
2. Gõ Terminal default trên hộp thoại tìm kiếm
3. Chọn **Terminal: Select Default Profile**
4. Chọn Git Bash

## Kết nối với GitHub

Git (local computer) kết nối với GitHub (remote repository) và được xác thực bằng **SSH Key**

> SSH Keys là cặp khoá: id_rsa và id_rsa.pub

### 1. Tạo ssh key

```bash
ssh-keygen -t rsa -b 4096 -C “your_email@example.com”
```

> Tips: Khi chạy lệnh gen SSH Keys, enter cho tới final step. Nếu đã có key rồi thì dừng lại luôn, không cần gen mới.

### 2. Lấy nội dung ssh key

```bash
cat ~/.ssh/id_rsa.pub
```

### 3. Thêm ssh key vào GitHub

Truy cập vào `https://github.com/settings/ssh/new` -> Add key vưad lấy ở Step2

## Cài đặt Playwright

### 1. Khởi tạo Playwright

> Tạo thư mục mới -> Mở thư mục lên với VS code -> Open Terminal -> Run command bên dưới -> Contnue 'Enter' to successfull run

```bash
npm init playwright@latest
```

### 2. Tạo repo trên GitHub

1. Truy cập `https://github.com/new`
2. Input tên repo name
3. Ở phần 'Configuration', chọn '**Public**' option -> Create repo
4. Sau khi tạo repo thành công, copy `url` ở phần ssh tab để điền vào bước kế tiếp

### 3. Khởi tạo repo local và đưa code lên GitHub

| Bước | Lệnh Git | Mục đích | Note |
| ------ | -------- | -------- | -------- |
| 1 | `git init` | Khởi tạo repository trên máy local | Run 1 lần duy nhất |
| 2 | `git remote add origin <url>` | Liên kết repo local với repo GitHub | Run 1 lần duy nhất |
| 3 | `git add .` | Đưa các thay đổi vào Staging Area | Run mỗi khi có thay đổi |
| 4 | `git commit -m "<message>"` | Lưu snapshot các thay đổi vào Local Repository | Run mỗi khi có thay đổi |
| 5 | `git push origin main` | Đẩy code từ Local Repository lên GitHub | Run mỗi khi muốn cập nhật code lên remote |  

### 4. Invite collaborators

1. Truy cập vào repo setting via link `https://github.com/<username>/<repo_name>/settings/access`
2. Add collaborator

---
