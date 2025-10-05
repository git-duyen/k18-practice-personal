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