# Lesson 06 : Git , JavaScript Advandce

# Git: Clone, Remote, Pull, Push

## 1. Clone là gì?

**Clone** là hành động lấy code từ một repository đã có sẵn trên server về máy cá nhân.

Khi clone, Git sẽ tải toàn bộ project về máy local, bao gồm:

- Source code
- Lịch sử commit
- Branch
- Thông tin remote repository

Câu lệnh clone:

```bash
git clone <link_repo>
```

Ví dụ:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

---

## 2. Lưu ý khi clone repository

Khi chạy lệnh `git clone`, repository sẽ được tải về **ngay bên trong thư mục hiện tại mà terminal đang đứng**.

Ví dụ, nếu terminal đang đứng ở thư mục:

```bash
/Users/milohau/Documents
```

và chạy lệnh:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

thì project sẽ nằm tại:

```bash
/Users/milohau/Documents/k18-practice
```

Nếu muốn clone project vào một vị trí khác, cần `cd` đến đúng thư mục trước rồi mới chạy `git clone`.

Ví dụ:

```bash
cd /Users/milohau/Documents/Playwright_E101
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Khi đó project sẽ nằm trong:

```bash
/Users/milohau/Documents/Playwright_E101/k18-practice
```

Ghi nhớ nhanh:

```
Đang đứng ở thư mục nào thì khi clone, project sẽ được tạo trong thư mục đó.
```

---

## 3. Clone và đặt lại tên thư mục

Mặc định, khi clone, Git sẽ tạo thư mục theo tên repository.

Ví dụ:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Git sẽ tạo thư mục:

```bash
k18-practice
```

Có thể đặt lại tên thư mục khi clone bằng cú pháp:

```bash
git clone <link_repo> <tên_thư_mục_mới>
```

Ví dụ:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git k18-practice-2
```

Khi đó project sẽ được clone vào thư mục:

```bash
k18-practice-2
```

---

## 4. Clone bằng HTTPS được không?

Có thể clone bằng HTTPS.

Ví dụ:

```bash
git clone <https://github.com/username/repository.git>
```

Tuy nhiên, khi dùng HTTPS, mỗi lần `push` hoặc `pull` có thể cần xác thực lại bằng tài khoản/token nếu máy chưa lưu credential.

Vì vậy:

| Cách clone | Đặc điểm |
| --- | --- |
| HTTPS | Dễ dùng ban đầu, nhưng có thể phải xác thực khi push/pull |
| SSH | Cần cấu hình SSH key trước, nhưng dùng lâu dài tiện hơn |

Ví dụ HTTPS:

```bash
git clone <https://github.com/username/repository.git>
```

Ví dụ SSH:

```bash
git clone git@github.com:username/repository.git
```

---

## 5. Remote là gì?

**Remote** hoặc **remote repository** là repository nằm trên server từ xa.

Ví dụ:

- GitHub
- GitLab
- Bitbucket
- Server Git nội bộ của công ty

Remote giúp nhiều người có thể cùng làm việc trên một repository.

Mỗi remote thường gồm:

| Thành phần | Ý nghĩa |
| --- | --- |
| Tên ngắn gọn | Ví dụ: `origin` |
| URL | Đường dẫn tới repository trên server |

Ví dụ thêm remote:

```bash
git remote add origin git@github.com:bba/k18-practice.git
```

Ý nghĩa:

| Thành phần | Ý nghĩa |
| --- | --- |
| `git remote add` | Thêm remote mới |
| `origin` | Tên ngắn gọn của remote |
| `git@github.com:bba/k18-practice.git` | URL của remote repository |

---

## 6. Origin là gì?

`origin` là tên mặc định Git thường đặt cho remote chính khi clone repository.

Ví dụ khi chạy:

```bash
git clone git@github.com:user/repo.git
```

Git thường tự tạo remote tên là:

```bash
origin
```

Sau đó, thay vì phải gõ cả URL dài, ta có thể dùng:

```bash
git push origin main
```

hoặc:

```bash
git pull origin main
```

Hiểu đơn giản:

```
origin = tên ngắn gọn của repository trên server
main = tên branch
```

---

## 7. Các câu lệnh remote thường dùng

| Câu lệnh | Ý nghĩa |
| --- | --- |
| `git remote -v` | Xem danh sách remote và URL |
| `git remote add origin <url>` | Thêm remote tên `origin` |
| `git remote set-url origin <url>` | Đổi URL của remote `origin` |
| `git remote remove origin` | Xóa remote `origin` |

Ví dụ xem remote hiện tại:

```bash
git remote -v
```

Kết quả có thể là:

```bash
origin  git@github.com:bba/k18-practice.git (fetch)
origin  git@github.com:bba/k18-practice.git (push)
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `fetch` | URL dùng để lấy code về |
| `push` | URL dùng để đẩy code lên |

---

## 8. Pull là gì?

**Pull** là hành động lấy code mới nhất từ remote repository về máy local.

Câu lệnh:

```bash
git pull origin main
```

Ý nghĩa:

```
Lấy code mới nhất từ branch main trên remote origin về máy local.
```

Nên `pull` trước khi bắt đầu làm việc hoặc trước khi `push` để tránh conflict.

Ví dụ:

```bash
git pull origin main
```

---

## 9. Push là gì?

**Push** là hành động đẩy commit từ máy local lên remote repository.

Câu lệnh:

```bash
git push origin main
```

Ý nghĩa:

```
Đẩy commit từ branch main ở máy local lên branch main trên remote origin.
```

Nếu đang làm trên branch riêng, ví dụ:

```bash
feat/cloud-kingdom
```

thì push như sau:

```bash
git push origin feat/cloud-kingdom
```

---

## 10. So sánh Clone, Pull, Push

| Lệnh | Mục đích | Dùng khi nào | Chiều dữ liệu |
| --- | --- | --- | --- |
| `git clone <url>` | Tải repository về máy lần đầu | Khi chưa có repo ở máy local | Remote → Local |
| `git pull origin main` | Lấy code mới nhất về | Khi repo đã có ở máy local | Remote → Local |
| `git push origin main` | Đẩy commit lên server | Sau khi đã commit ở local | Local → Remote |

Ghi nhớ nhanh:

```
clone = lấy cả repo về lần đầu
pull = lấy code mới nhất về
push = đẩy code của mình lên
```

---

## 11. Workflow thường dùng khi làm việc với GitHub

### Trường hợp 1: Lần đầu lấy project về máy

```bash
git clone <link_repo>
cd <ten_thu_muc_project>
```

Ví dụ:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
cd k18-practice
```

---

### Trường hợp 2: Làm việc hằng ngày

Bước 1: Lấy code mới nhất về:

```bash
git pull origin main
```

Bước 2: Sửa code.

Bước 3: Kiểm tra trạng thái file:

```bash
git status
```

Bước 4: Đưa file vào Staging Area:

```bash
git add .
```

Bước 5: Commit thay đổi:

```bash
git commit -m "message"
```

Bước 6: Push code lên remote:

```bash
git push origin main
```

---

### Trường hợp 3: Làm trên branch riêng

Bước 1: Pull code mới nhất từ `main`:

```bash
git pull origin main
```

Bước 2: Tạo branch mới và chuyển sang branch đó:

```bash
git checkout -b feat/cloud-kingdom
```

Bước 3: Sửa code.

Bước 4: Add file vào Staging Area:

```bash
git add .
```

Bước 5: Commit:

```bash
git commit -m "feat: add cloud kingdom exercise"
```

Bước 6: Push branch lên remote:

```bash
git push origin feat/cloud-kingdom
```

---

## 12. Bảng tổng hợp câu lệnh

| Nhóm | Câu lệnh | Ý nghĩa |
| --- | --- | --- |
| Clone | `git clone <url>` | Clone repo về máy |
| Clone đổi tên folder | `git clone <url> <folder-name>` | Clone repo và đặt tên thư mục mới |
| Remote | `git remote -v` | Xem remote hiện tại |
| Remote | `git remote add origin <url>` | Thêm remote tên `origin` |
| Remote | `git remote set-url origin <url>` | Đổi URL của remote |
| Pull | `git pull origin main` | Lấy code mới nhất từ remote về |
| Push | `git push origin main` | Đẩy commit local lên remote |
| Push branch | `git push origin <branch-name>` | Đẩy branch lên remote |

---

## 13. Lỗi thường gặp

| Lỗi | Nguyên nhân thường gặp | Cách xử lý |
| --- | --- | --- |
| `Authentication failed` | Dùng HTTPS nhưng xác thực sai hoặc chưa có token | Kiểm tra credential hoặc dùng SSH |
| `Permission denied (publickey)` | Dùng SSH nhưng chưa cấu hình SSH key | Tạo SSH key và add public key lên GitHub |
| `repository not found` | Sai URL hoặc không có quyền truy cập repo | Kiểm tra link repo và quyền truy cập |
| Push bị reject | Remote có code mới mà local chưa có | Chạy `git pull origin <branch>` trước rồi push lại |
| Không biết đang dùng HTTPS hay SSH | Chưa kiểm tra remote URL | Chạy `git remote -v` |

---

## 14. Ghi nhớ nhanh

```
Remote là repo trên server.

origin là tên ngắn gọn thường dùng cho remote chính.

clone dùng khi lấy project về lần đầu.

pull dùng để lấy code mới nhất từ server về.

push dùng để đẩy commit từ máy mình lên server.

Đang đứng ở thư mục nào thì khi clone, project sẽ được tạo trong thư mục đó.

HTTPS clone được, nhưng khi push/pull có thể cần xác thực.

SSH tiện hơn nếu làm việc thường xuyên vì không phải nhập lại token/mật khẩu nhiều lần.
```

---

## 15. Câu nhớ đơn giản

```
git clone = tải project về máy

git pull = kéo code mới nhất về

git push = đẩy code của mình lên

git remote = quản lý đường dẫn tới repository trên server
```

# Git: Clone, Remote, Pull, Push - Giải thích dễ hiểu cho người mới

## 1. Hình dung đơn giản

Anh có thể hiểu Git/GitHub theo cách sau:

```
GitHub / Remote repository = kho code online
Máy tính cá nhân / Local repository = kho code trên máy mình
```

Khi làm việc với Git, mình thường có 2 chiều thao tác chính:

```
GitHub  →  Máy mình     : lấy code về
Máy mình →  GitHub      : đẩy code lên
```

---

## 2. Remote repository là gì?

**Remote repository** là repository nằm trên server từ xa, ví dụ như GitHub.

Hiểu đơn giản:

```
Remote repository = kho code online
```

Ví dụ:

```
GitHub có repo tên là: k18-practice
```

Repo này có thể được nhiều người cùng sử dụng để:

- Lấy code về máy
- Đẩy code lên
- Làm việc nhóm
- Quản lý lịch sử thay đổi của project

---

## 3. Local repository là gì?

**Local repository** là bản repository nằm trên máy cá nhân của mình.

Hiểu đơn giản:

```
Local repository = bản code trên máy mình
```

Sau khi clone project từ GitHub về, máy anh sẽ có một folder, ví dụ:

```
k18-practice
```

Folder này chính là bản local của project.

---

## 4. Clone là gì?

**Clone** là hành động lấy toàn bộ project từ GitHub về máy mình lần đầu tiên.

Câu lệnh:

```bash
git clone <link_repo>
```

Ví dụ:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Sau khi chạy xong, máy anh sẽ có folder:

```
k18-practice
```

Hiểu đơn giản:

```
clone = tải project từ GitHub về máy lần đầu
```

---

## 5. Lưu ý quan trọng khi clone

Khi chạy lệnh `git clone`, project sẽ được tải về **ngay trong thư mục mà Terminal đang đứng**.

Ví dụ Terminal đang đứng ở:

```bash
/Users/milohau/Documents
```

Anh chạy:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Thì project sẽ nằm ở:

```bash
/Users/milohau/Documents/k18-practice
```

Ghi nhớ:

```
Đang đứng ở đâu thì clone về đó.
```

Nếu muốn clone project vào thư mục khác, cần `cd` đến đúng thư mục trước.

Ví dụ:

```bash
cd /Users/milohau/Documents/Playwright_E101
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Khi đó project sẽ nằm tại:

```bash
/Users/milohau/Documents/Playwright_E101/k18-practice
```

---

## 6. Khi nào dùng `git clone`?

`git clone` thường chỉ dùng **một lần đầu tiên**, khi máy mình chưa có project.

| Tình huống | Có dùng `git clone` không? |
| --- | --- |
| Máy chưa có project | Có |
| Máy đã có project rồi | Không cần clone lại |
| Muốn lấy code mới nhất về | Không dùng clone, dùng `git pull` |
| Muốn đẩy code lên GitHub | Không dùng clone, dùng `git push` |

Ghi nhớ:

```
clone = lấy project về lần đầu
```

---

## 7. Origin là gì?

Sau khi clone, Git sẽ tự nhớ project này được lấy từ đâu.

Link GitHub đó thường được Git đặt tên ngắn gọn là:

```
origin
```

Thay vì lúc nào cũng phải viết link dài như:

```bash
git@github.com:better-bytes-academy/k18-practice.git
```

Git cho phép mình gọi ngắn là:

```
origin
```

Hiểu đơn giản:

```
origin = tên gọi ngắn của repo GitHub mà project local đang kết nối tới
```

Ví dụ:

```bash
git pull origin main
```

Nghĩa là:

```
Lấy code từ repo GitHub tên origin, branch main về máy mình.
```

---

## 8. Branch `main` là gì?

`main` là tên một nhánh code.

Hiểu đơn giản:

```
main = nhánh chính của project
```

Ví dụ:

```bash
git pull origin main
```

Nghĩa là:

```
Lấy code từ nhánh main trên GitHub về máy.
```

Ví dụ:

```bash
git push origin main
```

Nghĩa là:

```
Đẩy code từ nhánh main trên máy mình lên nhánh main trên GitHub.
```

---

## 9. Pull là gì?

**Pull** là hành động lấy code mới nhất từ GitHub về máy.

Dùng khi máy anh **đã có project rồi**, nhưng trên GitHub có code mới.

Câu lệnh:

```bash
git pull origin main
```

Hiểu đơn giản:

```
pull = kéo code mới nhất từ GitHub về máy mình
```

Ví dụ:

- Hôm qua anh clone project về máy.
- Hôm nay giảng viên hoặc người khác đã push thêm code mới lên GitHub.
- Máy anh chưa có phần code mới đó.
- Anh chạy:

```bash
git pull origin main
```

Lúc này Git sẽ kéo phần code mới từ GitHub về máy anh.

---

## 10. Push là gì?

**Push** là hành động đẩy commit từ máy mình lên GitHub.

Câu lệnh:

```bash
git push origin main
```

Hiểu đơn giản:

```
push = đẩy code của mình lên GitHub
```

Nhưng cần nhớ:

```
Git không push file vừa sửa ngay lập tức.
Git chỉ push những thay đổi đã được commit.
```

Vì vậy trước khi push thường cần làm đủ 3 bước:

```bash
git add .
git commit -m "message"
git push origin main
```

---

## 11. Vì sao phải `add`, `commit` rồi mới `push`?

Có thể hiểu như gửi hàng:

| Git | Ví dụ đời thường |
| --- | --- |
| Sửa file | Mình đang làm hàng |
| `git add .` | Cho hàng vào thùng |
| `git commit -m "message"` | Đóng gói và dán nhãn thùng hàng |
| `git push` | Gửi thùng hàng lên kho GitHub |

Nếu chỉ sửa file mà chưa commit, thì GitHub chưa nhận được gì cả.

---

## 12. Quy trình lần đầu lấy project về máy

Khi máy chưa có project, chạy:

```bash
git clone <link_repo>
```

Ví dụ:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Sau đó vào folder project:

```bash
cd k18-practice
```

---

## 13. Quy trình làm việc những lần sau

Khi máy đã có project rồi, thường làm theo flow này:

### Bước 1: Lấy code mới nhất về

```bash
git pull origin main
```

### Bước 2: Sửa code / làm bài

Ví dụ tạo file mới, sửa file bài tập, update nội dung...

### Bước 3: Kiểm tra trạng thái file

```bash
git status
```

### Bước 4: Đưa file vào Staging Area

```bash
git add .
```

### Bước 5: Commit thay đổi

```bash
git commit -m "feat: add lesson 04 exercise"
```

### Bước 6: Push code lên GitHub

```bash
git push origin main
```

---

## 14. Ví dụ tình huống thực tế

Giả sử anh học automation và có repo bài tập trên GitHub.

### Ngày đầu tiên

Máy anh chưa có project.

Anh chạy:

```bash
git clone git@github.com:better-bytes-academy/k18-practice.git
```

Máy anh có folder:

```
k18-practice
```

---

### Ngày hôm sau

Giảng viên update bài mới lên GitHub.

Anh muốn lấy bài mới về.

Anh vào folder project:

```bash
cd k18-practice
```

Rồi chạy:

```bash
git pull origin main
```

---

### Sau khi làm bài xong

Anh tạo hoặc sửa file bài tập.

Sau đó chạy:

```bash
git status
git add .
git commit -m "feat: complete lesson 04"
git push origin main
```

Lúc này code của anh đã được đẩy lên GitHub.

---

## 15. Bảng so sánh nhanh

| Lệnh | Hiểu đơn giản | Dùng khi nào |
| --- | --- | --- |
| `git clone` | Tải project về máy lần đầu | Khi máy chưa có project |
| `git pull` | Lấy code mới nhất từ GitHub về | Khi máy đã có project |
| `git push` | Đẩy code của mình lên GitHub | Sau khi đã commit |
| `git remote` | Quản lý link GitHub của project | Khi cần xem/sửa repo đang kết nối |
| `origin` | Tên ngắn của repo GitHub | Dùng trong pull/push |
| `main` | Nhánh chính của project | Nhánh thường dùng để lấy/đẩy code |

---

## 16. Ghi nhớ nhanh

```
GitHub là kho online.
Máy mình là kho local.

clone = tải cả project về lần đầu.
pull = lấy code mới nhất từ GitHub về.
add = chọn file muốn lưu.
commit = lưu thay đổi thành một phiên bản.
push = đẩy phiên bản đó lên GitHub.

origin = tên ngắn của repo GitHub.
main = tên nhánh chính.
```

---

## 17. Câu nhớ đơn giản nhất

```
git clone = tải project về máy

git pull = kéo code mới nhất về

git add = chọn file chuẩn bị lưu

git commit = lưu thành một phiên bản

git push = đẩy phiên bản đó lên GitHub

git remote = quản lý đường dẫn tới repository trên server
```

# Git Convention - Commit Message và Branch Name

## 1. Convention là gì?

**Convention** là bộ quy tắc thống nhất khi làm việc với Git.

Convention giúp:

- Gọn gàng, đồng bộ
- Dễ đọc, dễ hiểu
- Dễ đoán được ý đồ của branch / commit / PR
- Dễ maintain khi làm việc nhóm

Trong Git, convention thường áp dụng cho:

- Đặt tên branch
- Viết commit message

---

## 2. Convention cho commit message

### Cấu trúc khuyến nghị

```
<type>: <short-description>
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `type` | Loại thay đổi |
| `short-description` | Mô tả ngắn gọn mục đích của commit |

---

## 3. Các `type` thường dùng

| Type | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `feat` | Thêm tính năng mới | `feat: add solution for test 1` |
| `fix` | Sửa lỗi | `fix: add missing continue` |
| `conf` | Thay đổi cấu hình | `conf: update global setup conf` |
| `chore` | Các thay đổi lặt vặt như xóa file không dùng, đổi tên file... | `chore: remove unused file` |

---

## 4. Commit message nên và không nên

| Bad | Vì sao chưa tốt? |
| --- | --- |
| `fix code` | Quá chung chung, không biết sửa gì |
| `fix 1` | Không rõ nội dung sửa |
| `abcadfs` | Không có ý nghĩa |
| `feat: add solution and subtract method and add method to test 1` | Quá dài, gom nhiều ý trong một commit |
| `feat:lesson1` | Thiếu khoảng trắng sau dấu `:` |

| Good | Vì sao tốt? |
| --- | --- |
| `feat: add solution for test 1` | Rõ là thêm lời giải cho test 1 |
| `fix: add missing continue` | Rõ là sửa thiếu `continue` |
| `conf: update global setup conf` | Rõ là cập nhật cấu hình global setup |

---

## 5. Convention cho tên branch

### Cấu trúc khuyến nghị

```
<type>/<short-description>-<name>
```

Hoặc đơn giản hơn:

```
<type>/<short-description>
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `type` | Loại công việc của branch |
| `short-description` | Mô tả ngắn gọn mục đích tạo branch |
| `name` | Tên người làm, mã người làm hoặc định danh cá nhân nếu lớp/dự án yêu cầu |

---

## 6. Branch name nên và không nên

| Bad | Vì sao chưa tốt? |
| --- | --- |
| `branch1` | Không biết branch dùng để làm gì |
| `feat` | Chỉ có type, thiếu nội dung cụ thể |
| `feat/lan1` | Chưa rõ mục đích branch |
| `tmp` | Quá chung chung, không có ý nghĩa |

| Good | Vì sao tốt? |
| --- | --- |
| `feat/lesson-5-minhphong306` | Rõ branch dùng để làm lesson 5 và biết người làm |
| `conf/update-timeout` | Rõ branch dùng để cập nhật cấu hình timeout |
| `feat/checkout` | Rõ branch dùng để làm chức năng checkout |
| `fix/fill-info` | Rõ branch dùng để sửa phần fill info |
| `feat/lesson-6-long` | Rõ branch dùng để làm lesson 6 của Long |

---

## 7. Quy tắc viết tên branch dễ nhớ

| Quy tắc | Ví dụ đúng |
| --- | --- |
| Viết thường | `feat/checkout` |
| Dùng dấu `-` để nối từ | `fix/fill-info` |
| Có type ở đầu | `feat/lesson-5` |
| Mô tả ngắn gọn mục đích | `conf/update-timeout` |
| Không đặt tên quá chung chung | Tránh `tmp`, `branch1`, `test` |

---

## 8. Ghi nhớ nhanh

```
Commit message dùng để mô tả một lần lưu thay đổi.

Branch name dùng để mô tả nhánh đang làm việc gì.

Commit tốt:
<type>: <short-description>

Branch tốt:
<type>/<short-description>
hoặc
<type>/<short-description>-<name>
```

Ví dụ nên dùng:

```bash
git commit -m "feat: add solution for test 1"
git commit -m "fix: add missing continue"
git commit -m "conf: update global setup conf"
```

```bash
git checkout -b feat/lesson-5-minhphong306
git checkout -b conf/update-timeout
git checkout -b fix/fill-info
```

# JavaScript - Class

## 1. Class là gì?

**Class** là một **bản thiết kế** (*blueprint*) dùng để tạo ra nhiều object có cùng đặc điểm và hành vi.

Có thể hiểu đơn giản:

- **Class** giống như bản vẽ thiết kế một chiếc xe.
- **Object** là chiếc xe thật được tạo ra từ bản vẽ đó.

Ví dụ:

```jsx
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Xin chào, tôi là " + this.name);
  }
}
```

Từ class `User`, ta có thể tạo nhiều object khác nhau:

```jsx
let user1 = new User("Nam", 25);
let user2 = new User("Lan", 23);

user1.sayHello(); // Xin chào, tôi là Nam
user2.sayHello(); // Xin chào, tôi là Lan
```

---

## 2. Tại sao cần dùng Class?

Trước khi có class, nếu muốn tạo nhiều object giống nhau, ta phải viết lặp lại rất nhiều code.

### Cách cũ - Không dùng class

```jsx
let user1 = {
  name: "Nam",
  age: 25,
  sayHello: function() {
    console.log("Xin chào, tôi là " + this.name);
  }
};

let user2 = {
  name: "Lan",
  age: 23,
  sayHello: function() {
    console.log("Xin chào, tôi là " + this.name);
  }
};
```

Vấn đề:

```
Phải copy-paste code nhiều lần.
Dễ sai.
Khó maintain.
Khó mở rộng khi số lượng object tăng lên.
```

### Cách mới - Dùng class

```jsx
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Xin chào, tôi là " + this.name);
  }
}

let user1 = new User("Nam", 25);
let user2 = new User("Lan", 23);
```

Ưu điểm:

```
Tạo nhiều object dễ dàng hơn.
Code gọn hơn.
Không phải lặp lại logic.
Dễ bảo trì và mở rộng.
```

---

## 3. Lợi ích của Class

Class giúp:

- Tạo nhiều object cùng kiểu dễ dàng.
- Tổ chức code gọn gàng, rõ ràng.
- Tái sử dụng code hiệu quả.
- Code ngắn gọn, không lặp lại.
- Dễ bảo trì và mở rộng.

---

## 4. Cú pháp khai báo Class

Cú pháp cơ bản:

```jsx
class TenClass {
  // Nội dung class ở đây
}
```

Ví dụ:

```jsx
class TestCase {
  // Class để quản lý test case
}

class Product {
  // Class để quản lý sản phẩm
}
```

Thông thường, tên class nên viết theo kiểu **PascalCase**:

```
User
Student
Product
TestCase
OrderItem
```

---

## 5. Constructor trong Class

**Constructor** là hàm khởi tạo của class.

Constructor sẽ **tự động chạy** khi tạo object mới bằng từ khóa `new`.

Ví dụ:

```jsx
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

let student1 = new Student("Hùng", 8.5);

console.log(student1.name);  // "Hùng"
console.log(student1.grade); // 8.5
```

Giải thích:

| Thành phần | Ý nghĩa |
| --- | --- |
| `constructor(name, grade)` | Hàm khởi tạo, nhận dữ liệu đầu vào |
| `this.name = name` | Gán giá trị `name` vào thuộc tính `name` của object |
| `this.grade = grade` | Gán giá trị `grade` vào thuộc tính `grade` của object |
| `new Student("Hùng", 8.5)` | Tạo object mới từ class `Student` |

---

## 6. Thuộc tính trong Class

**Thuộc tính** là các biến dùng để lưu trữ dữ liệu của object.

Ví dụ:

```jsx
class TestCase {
  constructor(id, title, priority) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.status = "Not Run";
  }
}

let tc1 = new TestCase(1, "Login test", "High");
let tc2 = new TestCase(2, "Logout test", "Medium");

console.log(tc1.title);  // "Login test"
console.log(tc2.title);  // "Logout test"
console.log(tc1.status); // "Not Run"
```

Trong ví dụ trên:

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `id` | Mã test case |
| `title` | Tên test case |
| `priority` | Độ ưu tiên |
| `status` | Trạng thái test case |

`status` được gán mặc định là:

```jsx
this.status = "Not Run";
```

---

## 7. Phương thức trong Class

**Phương thức** là các hàm được định nghĩa bên trong class, dùng để mô tả hành vi của object.

Ví dụ:

```jsx
class TestCase {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.status = "Not Run";
  }

  execute() {
    this.status = "Running";
    console.log(`Đang chạy test: ${this.title}`);
  }

  pass() {
    this.status = "Passed";
    console.log(`${this.title} - PASSED`);
  }

  fail(reason) {
    this.status = "Failed";
    console.log(`${this.title} - FAILED: ${reason}`);
  }

  getInfo() {
    return `Test #${this.id}: ${this.title} [${this.status}]`;
  }
}

let test1 = new TestCase(1, "Kiểm tra đăng nhập");

test1.execute();             // Đang chạy test: Kiểm tra đăng nhập
test1.pass();                // Kiểm tra đăng nhập - PASSED
console.log(test1.getInfo()); // Test #1: Kiểm tra đăng nhập [Passed]
```

---

## 8. Các thành phần chính trong Class

| Thành phần | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `class` | Khai báo class | `class User {}` |
| `constructor` | Hàm khởi tạo object | `constructor(name, age)` |
| `this` | Đại diện cho object hiện tại | `this.name = name` |
| Thuộc tính | Lưu dữ liệu của object | `this.status = "Not Run"` |
| Phương thức | Hành vi / function của object | `sayHello() {}` |
| `new` | Tạo object mới từ class | `new User("Nam", 25)` |

---

## 9. Ghi nhớ nhanh

```
Class = bản thiết kế.
Object = đối tượng thật được tạo ra từ bản thiết kế.

Constructor = hàm khởi tạo, tự chạy khi dùng new.
Property = thuộc tính, dùng để lưu dữ liệu.
Method = phương thức, dùng để định nghĩa hành vi.

Dùng class giúp code:
- Gọn hơn
- Ít lặp lại hơn
- Dễ maintain hơn
- Dễ tạo nhiều object cùng kiểu hơn
```

---

## 10. Ví dụ tổng hợp

```jsx
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.status = "Active";
  }

  showInfo() {
    console.log(`${this.name} - Điểm: ${this.grade} - Trạng thái: ${this.status}`);
  }

  updateGrade(newGrade) {
    this.grade = newGrade;
  }
}

let student1 = new Student("Hùng", 8.5);
let student2 = new Student("Lan", 9.0);

student1.showInfo(); // Hùng - Điểm: 8.5 - Trạng thái: Active
student2.showInfo(); // Lan - Điểm: 9 - Trạng thái: Active

student1.updateGrade(9.2);
student1.showInfo(); // Hùng - Điểm: 9.2 - Trạng thái: Active
```

# TypeScript - Kiến thức bổ sung

## 1. TypeScript là gì?

**TypeScript (TS)** là phiên bản mở rộng của JavaScript, có thêm **kiểu dữ liệu** để code rõ ràng và an toàn hơn.

Hiểu đơn giản:

```
JavaScript + Kiểu dữ liệu = TypeScript
```

TypeScript giúp:

- Code dễ đọc hơn.
- Phát hiện lỗi ngay khi viết code.
- Hạn chế gán sai kiểu dữ liệu.
- Dễ maintain khi project lớn.
- Sau cùng, TypeScript sẽ được biên dịch thành JavaScript để chạy.

---

## 2. Ví dụ khai báo kiểu dữ liệu

```tsx
let age: number = 25;
// age phải là số

let name: string = "John";
// name phải là chuỗi

let teams: string[] = ["Team A", "Team B"];
// teams là mảng chuỗi
```

Ví dụ sai:

```tsx
age = "30";
```

Lỗi vì:

```
age được khai báo là number.
"30" là string.
TypeScript không cho gán chuỗi vào biến kiểu số.
```

---

## 3. Chạy file TypeScript

Có thể chạy file `.ts` bằng một trong hai cách:

```bash
npx ts-node <path_file>
```

Hoặc:

```bash
npx tsx <path_file>
```

Ví dụ:

```bash
npx ts-node tests/lesson-04/example.ts
```

Hoặc:

```bash
npx tsx tests/lesson-04/example.ts
```

---

## 4. Interface trong TypeScript

**Interface** dùng để định nghĩa **cấu trúc của object**.

Nó giúp đảm bảo object có đúng:

- Tên thuộc tính
- Kiểu dữ liệu của từng thuộc tính

Ví dụ:

```tsx
interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
}

let player: Player = {
  name: "John",
  position: "Forward",
  jerseyNumber: 10
};
```

Giải thích:

| Thuộc tính | Kiểu dữ liệu | Ý nghĩa |
| --- | --- | --- |
| `name` | `string` | Tên cầu thủ |
| `position` | `string` | Vị trí thi đấu |
| `jerseyNumber` | `number` | Số áo |

Nếu khai báo sai kiểu, TypeScript sẽ báo lỗi.

Ví dụ sai:

```tsx
let player: Player = {
  name: "John",
  position: "Forward",
  jerseyNumber: "10"
};
```

Sai vì:

```
jerseyNumber phải là number nhưng lại truyền vào string.
```

---

## 5. Class trong TypeScript

Class trong TypeScript giống JavaScript, nhưng có thêm phần **khai báo kiểu dữ liệu** cho thuộc tính, tham số và giá trị trả về của phương thức.

Ví dụ:

```tsx
class Team {
  name: string;
  players: Player[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }
}
```

Giải thích:

| Thành phần | Ý nghĩa |
| --- | --- |
| `name: string` | Thuộc tính `name` phải là chuỗi |
| `players: Player[]` | Thuộc tính `players` là mảng các object kiểu `Player` |
| `constructor(name: string)` | Khi tạo Team mới, `name` truyền vào phải là string |
| `addPlayer(player: Player): void` | Hàm nhận vào một `Player` và không trả về giá trị |

---

## 6. Ví dụ tổng hợp

```tsx
interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
}

class Team {
  name: string;
  players: Player[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }
}

let player: Player = {
  name: "John",
  position: "Forward",
  jerseyNumber: 10
};

let team = new Team("Team A");
team.addPlayer(player);

console.log(team);
```

---

## 7. So sánh nhanh JavaScript và TypeScript

| Nội dung | JavaScript | TypeScript |
| --- | --- | --- |
| Kiểu dữ liệu | Không bắt buộc khai báo | Có thể khai báo rõ ràng |
| Phát hiện lỗi kiểu dữ liệu | Thường phát hiện khi chạy | Phát hiện ngay khi viết code |
| Interface | Không có | Có |
| Class | Có | Có, nhưng chặt chẽ hơn nhờ type |
| Khi chạy | Chạy trực tiếp | Biên dịch thành JavaScript rồi chạy |

---

## 8. Ghi nhớ nhanh

```
TypeScript = JavaScript + kiểu dữ liệu.

Interface = định nghĩa cấu trúc object.

Class trong TypeScript = Class JavaScript + khai báo type.

number = số.
string = chuỗi.
string[] = mảng chuỗi.
Player[] = mảng các object kiểu Player.
void = hàm không trả về giá trị.
```

---

## 9. Câu nhớ đơn giản

```
JavaScript cho viết linh hoạt hơn.

TypeScript bắt mình viết rõ ràng hơn.

Nhờ rõ ràng hơn nên dễ phát hiện lỗi sớm hơn.
```

# GitHub - Quy trình Review Code / Pull Request

## 1. Mục tiêu của review code

Review code giúp:

- Phát hiện lỗi sớm trước khi merge code.
- Học thêm cách viết code từ người khác.
- Giữ chất lượng code tốt hơn.
- Giúp team thống nhất cách làm bài / cách viết code.

Khi nhận được request review từ người khác, nên sắp xếp thời gian để review code cho bạn học.

---

## 2. Quy trình tổng quan

Quy trình review code gồm 4 bước chính:

| Bước | Nội dung |
| --- | --- |
| 1 | Tạo branch |
| 2 | Tạo Pull Request, thêm reviewer và gửi request review |
| 3 | Thực hiện review code cho người khác |
| 4 | Fix comment khi có comment từ người khác |

---

## 3. Tạo branch

Khi tạo branch mới, cần lưu ý:

- Luôn chuyển về nhánh `main` trước.
- Pull code mới nhất từ `main`.
- Tên branch cần theo naming convention của lớp.

Ví dụ:

```bash
git checkout main
git pull origin main
git checkout -b feat/lesson-6-yourname
```

Ghi nhớ:

```
Trước khi tạo branch mới:
1. Về main
2. Pull code mới nhất
3. Tạo branch mới theo đúng convention
```

---

## 4. Tạo PR và gửi request review

Sau khi làm bài xong:

```bash
git add .
git commit -m "feat: add solution for lesson 6"
git push origin feat/lesson-6-yourname
```

Sau đó lên GitHub để tạo Pull Request.

Khi tạo PR cần:

- Chọn đúng branch của mình.
- Thêm reviewer.
- Gửi request review.
- Mô tả ngắn gọn nội dung đã làm.

---

## 5. Thực hiện review code

Khi được người khác request review, cần vào PR để kiểm tra code.

Nếu thấy code có vấn đề, có thể comment theo 2 cách:

| Cách comment | Khi nào dùng |
| --- | --- |
| Comment vào một dòng cụ thể | Khi lỗi nằm ở đúng một dòng code |
| Comment vào cả file | Khi muốn góp ý chung cho file đó |

### Comment vào một dòng cụ thể

Cách làm:

```
Hover vào dòng code cần comment.
GitHub sẽ hiển thị popup comment.
Nhập nội dung comment.
Gửi comment.
```

### Comment vào cả file

Cách làm:

```
Click vào biểu tượng comment ở góc phải bên trên của file.
Nhập nội dung comment.
Gửi comment.
```

---

## 6. Khi code có vấn đề

Nếu thấy code có vấn đề, hãy comment rõ ràng, lịch sự và dễ hiểu.

Ví dụ:

```
Chỗ này nên đặt tên biến rõ nghĩa hơn.
```

```
File này đang chưa có nội dung, bạn kiểm tra lại nhé.
```

```
Logic này có thể bị sai khi input là số âm.
```

Sau khi comment xong, có thể reply vào thread review code:

```
@<người request> Please check comment
```

---

## 7. Khi code không có vấn đề

Nếu review xong và thấy code ổn, có thể reply:

```
@<người request> Looks good to me
```

Hoặc ngắn gọn hơn:

```
LGTM
```

`LGTM` là viết tắt của:

```
Looks Good To Me
```

Nghĩa là:

```
Mình thấy ổn rồi.
```

---

## 8. Khi nhận comment từ reviewer

Sau khi người khác review PR của mình, có 2 trường hợp.

### Trường hợp 1: Comment hợp lý

Nếu comment hợp lý, cần:

```
1. Fix code theo comment.
2. Commit thay đổi.
3. Push code lên GitHub.
4. Vào PR và resolve comment.
```

Ví dụ:

```bash
git add .
git commit -m "fix: update code by review comment"
git push origin feat/lesson-6-yourname
```

Sau đó vào PR và bấm:

```
Resolve conversation
```

---

### Trường hợp 2: Comment không hợp lý

Nếu thấy comment chưa hợp lý hoặc mình chưa hiểu, không nên resolve ngay.

Cần comment lại để trao đổi.

Ví dụ:

```
Mình chưa hiểu ý này lắm, bạn giải thích thêm giúp mình nhé.
```

```
Chỗ này mình đang làm theo yêu cầu đề bài, bạn check lại giúp mình nhé.
```

```
Theo mình hiểu thì logic này vẫn đúng vì..., bạn xem lại giúp mình nhé.
```

---

## 9. Ghi nhớ nhanh

```
Review code không phải là bắt lỗi cá nhân.
Review code là cùng nhau làm code tốt hơn.
```

Quy trình dễ nhớ:

```
Tạo branch
→ Làm bài
→ Commit
→ Push
→ Tạo PR
→ Request review
→ Nhận comment
→ Fix comment
→ Push lại
→ Resolve conversation
```

---

## 10. Câu nhớ đơn giản
Có lỗi thì comment.
Code ổn thì Looks good to me.
Comment đúng thì fix và resolve.
Comment chưa hợp lý thì reply lại để trao đổi.