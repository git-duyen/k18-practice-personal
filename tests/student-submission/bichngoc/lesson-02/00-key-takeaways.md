### 1. Type of Version control system
- Local
- Centralize
- Distributed (phổ biến nhất hiện nay)

### 2. Git & Github
| Git | Github |
| --- | ------ |
| Là 1 phần mềm | Là 1 dịch vụ web |
| Cài trên máy cá nhân | Host trên website |
| Là 1 command line tool | Là công cụ có giao diện |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên |
| Có các tính năng của VCS | Có các tính năng của VCS và các tính năng khác |

### 3. Các câu lệnh đã dùng
- Làm 1 lần duy nhất:
    - Khởi tạo repo local: `git init`

- Làm mỗi khi có thay đổi:
    - Thêm file vào staging: `git add .`
    - Commit file: `git commit -m"msg"`
    - Note: Msg commit theo kiểu: 
        - chore: sửa nhỏ lẻ, chính tả, xóa file k dùng
        - feat: thêm TC mới
        - fix: chỉnh sửa file đã có

- Xem trạng thái file: `git status`

- Kiểm tra danh sách commit: `git log`

### 4. Git - Cấu hình
1. Sử dụng cho toàn bộ repo trên máy:
- `git config --global user.name "tên bạn"`
- `git config --global user.email "email của bạn"`

2. Sử dụng cho từng repo riêng:
- `git config user.name "tên bạn"`
- `git config user.email "email của bạn"`

### 5. JavaScript
- `console.log("nội dung")` hiển thị nội dung
- `// console.log("nội dung")` commment code

- Khai báo biến (biến là các giá trị có thể thay đổi được):
    - `var name = "ABC"` cú pháp cũ, ít sử dụng
    - `let isLoveABC = true` cú pháp mới, an toàn hơn, k cho khai báo lại
        - `console.log("name");` in ra ABC
        - `console.log("isLoveABC");` in ra true

- Khai báo hằng (là các giá trị không thay đổi được):
    - `const slogan = "Học- Học nữa- Học mãi"`

- Các kiểu dữ liệu: number, string, boolean (true/ false)

- Các hàm: 
    - `typeof <variable>`

- Toán tử so sánh: ===, !==, >, <, >=, <=
- Toán tử logic: && (AND), || (OR)
- Toán tử 1 ngôi: x++, ++x, x--, --x
- Toán tử toán học: +, -, *, /
- Câu ĐK: if
- Vòng lặp: for (i) 
- Format code: option + shift + F hoặc chuột phải vào vùng trống, chọn Format



