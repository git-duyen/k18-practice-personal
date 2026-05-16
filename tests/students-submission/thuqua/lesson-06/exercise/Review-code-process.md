# 🔄 Quy trình review code

## 📌 Quy trình gồm các phần

1. Tạo branch
2. Tạo PR, thêm reviewer, gửi review request
3. Thực hiện review code cho người khác
4. Fix comment khi có review

---

### 🌱 Tạo Branch

Khi tạo branch mới, lưu ý:

1. Luôn chuyển về branch `main` và pull code mới nhất
2. Đặt tên branch theo naming convention

###### 📍 Ví dụ

```bash
git checkout main
git pull origin main
git checkout -b feat/login
```


### 🚀 Thực hiện tạo PR & gửi request review

#### 👨‍🏫 Mentors

1. `minhphong306`
2. `minhvu278`


### 📌 Tạo Pull Request (PR)

#### 📝 Khi tạo PR, cần điền các thông tin sau

##### 1. 📍 Title

- Tiêu đề ngắn gọn về pull request

##### 2. 📄 Description

- Mô tả chi tiết pull request làm những gì
- Có thể mô tả:
  - cách suy nghĩ
  - hướng xử lý
  - logic thực hiện

###### 📍 Ví dụ

```text
Tôi muốn tạo trước 1 pull request cho 2 test case đầu.
Sau đó, tôi sẽ bổ sung 1 PR khác.
```

##### 3. 👨‍🏫 Reviewer

- Thêm mentor vào mục này

##### 4. 👤 Assignees

- Chọn tên của bạn

### 📩 Gửi Request Review

- **Sau khi tạo PR:**
  - Chọn reviewer
  - Gửi request review cho mentor hoặc teammate

📌 **Mục đích:**
- Review code
- Kiểm tra logic
- Đảm bảo code đúng convention và quality

### 🔍 Thực hiện Review Code

#### 📌 Review code

- Kiểm tra code của người khác trước khi merge
- Đảm bảo:
  - Code đúng logic
  - Đúng convention
  - Dễ đọc và dễ maintain

#### 📌 Khi review cần chú ý

- Naming convention
- Code format
- Logic xử lý
- Duplicate code
- Hard-code dữ liệu
- Selector có ổn định không
- Có thể optimize không

#### 💬 Comment review

Nếu phát hiện vấn đề:

- Add comment trực tiếp vào dòng code
- Mô tả rõ lỗi hoặc đề xuất cải thiện

##### 📍 Ví dụ comment

```text
Nên đổi tên biến cho dễ hiểu hơn
```

