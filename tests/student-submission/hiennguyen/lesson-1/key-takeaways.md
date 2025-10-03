# Cài đặt
## 1. Cài đặt nvm (Node Version Manager)
- Mac: `brew install nvm`
- Win: https://github.com/coreybutler/nvm-windows/releases

## 2. Cài đặt Node
```
nvm install v22.9.0
nvm use v22.9.0
```

##  3. Cài đặt VSCode
- Tải vscode: https://code.visualstudio.com/
- Cài extension Playwright:
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright hoặc search trong marketplace của vscode

## 4. Cài đặt Playwright
- Tạo thư mục dự án tại PC: ví dụ `pw-course`
- Mở terminal cho thư mục vừa tạo `pw-course`
- Khởi tạo project: `npm init playwright@latest`
- Chạy thử test: `npx playwright test --headed`

## 5. Cài đặt git & kết nối gitHub
### 5.1. Cài đặt git
- Win: https://git-scm.com/downloads
- Mac: có sẵn git

### 5.2. Cấu hình git
```
git config --global user.name "Hien"
git config --global user.email "hiennguyen@gmail.com"
git config --global init.defaultBranch main
```
**Lưu ý:** --global là cài đặt cho tất cả repo trong máy, nếu chỉ muốn cấu hình repo hiện tại thì bỏ `--global`
### 5.3. Kết nối gitHub
1. Tạo tài khoản gitHub cá nhân: https://github.com/signup
2. Tạo SSH key trên máy: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
3. Lấy nội dung ssh key vừa tạo bằng câu lệnh: `cat ~/.ssh/id_rsa.pub` và bỏ vào github https://github.com/settings/ssh/new
4. Tạo repo mới tại github: https://github.com/new
5. Kết nối project local với GitHub:
```
git init
git remote add origin <ssh_link>  #(ssh_link lấy từ repo trên gitHub đã tạo ở trên)
git add .
git commit -m "init project"
git push origin main
```
6. Khi push code từ lần sau:
```
git add .
git commit -m "comment"
git push origin main
```
### 5.4. Chia sẻ repo cho người khác
    - Lúc tạo repo nhớ set public
    - Truy cập repo setting: `https://github.com/<username>/<repo_name>/settings/access`
    -  Add collaborator là id của người cần share (ex: nguyenttthanhhien)

----------------

# TIP: Hướng dẫn phân chia SSH key cho GitHub (Cá nhân & Công ty) & cách khắc phục khi bị lỗi
## 1. Tạo SSH key riêng cho từng account
- Công ty (ví dụ id_ed25519_Company): 
```
ssh-keygen -t ed25519 -C "email_congty@domain.com" -f ~/.ssh/id_ed25519_company
```
- Cá nhân (ví dụ id_rsa_personal):
```
ssh-keygen -t rsa -b 4096 -C "email_ca_nhan@gmail.com" -f ~/.ssh/id_rsa_personal
```
👉 Sau khi tạo, bạn upload file .pub tương ứng lên GitHub:
- Vào **Settings > SSH and GPG keys**.
- Thêm key công ty vào GitHub công ty.
- Thêm key cá nhân vào GitHub cá nhân.

## 2. Cấu hình `~/.ssh/config`
- Mở (hoặc tạo mới) file cấu hình:
```
open -e ~/.ssh/config
```
- Thêm nội dung sau:
```
# Account công ty (email_company)
Host github-company
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_company
  AddKeysToAgent yes

# Account cá nhân (email_personal)(mặc định)
Host github.com
  User git
  IdentityFile ~/.ssh/id_rsa_personal
  AddKeysToAgent yes
```
👉 Ý nghĩa:
- Khi gõ `git@github.com` → dùng key cá nhân.
- Khi gõ `git@github-company` → dùng key công ty.

## 3. Cập nhật remote cho từng repo
- Repo công ty (dùng trong Sourcetree):
```
git remote set-url origin git@github-company:guide-inc-org/ten-repo.git
```
- Repo cá nhân (dùng trong VSCode):
```
git remote set-url origin git@github.com:nguyentthanhhien/ten-repo.git
```

## 4. Kiểm tra kết nối
- Test account cá nhân:
```
ssh -T git@github.com

# Kết quả
Hi nguyentthanhhien! You've successfully authenticated, but GitHub does not provide shell access.
```
- Test account công ty:
```
ssh -T git@github-company

# Kết quả:
Hi ten-congty! You've successfully authenticated, but GitHub does not provide shell access.
```

## 5. Khắc phục lỗi thường gặp
- Lỗi bị nhận sai account (repo cá nhân nhưng push bằng account công ty)
→ Do remote chưa trỏ đúng.<br>
✅ Fix: `git remote set-url origin git@github.com:... `(cá nhân).
- Lỗi “Permission denied”
→ Do key chưa add vào ssh-agent.<br>
✅ Fix:
```
ssh-add ~/.ssh/id_rsa_personal
ssh-add ~/.ssh/id_ed25519_company
```
(nên bật `AddKeysToAgent yes` trong config để tự động).

## 6. Best practice
- **VSCode / Terminal** → mặc định dùng GitHub cá nhân (Host github.com).
- **Sourcetree** → cấu hình remote với git@github-company:... để luôn dùng key công ty.
- Không để trùng `Host` trong `~/.ssh/config`, luôn đặt alias (`github-company`, `github-personal` nếu muốn tách rõ).<br>
✅ Vậy sau này bạn chỉ cần nhớ:<br>
- **Repo công ty** thì remote phải bắt đầu bằng `git@github-company:...`
- **Repo cá nhân** thì remote phải bắt đầu bằng `git@github.com:...`