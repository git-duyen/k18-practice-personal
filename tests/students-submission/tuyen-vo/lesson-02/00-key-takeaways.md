# Lesson 2 - Tóm Tắt Nhanh

---

## 1. Version Control System (VCS)

> Hệ thống **lưu lại lịch sử thay đổi** của file — ai sửa, sửa gì, lúc nào.

| Loại | Đặc điểm |
|------|----------|
| Local | Chỉ lưu trên máy mình |
| Centralized | Lưu trên 1 server chung |
| **Distributed** | Mỗi máy có bản sao đầy đủ ✅ **phổ biến nhất** |

**Git** là Distributed VCS phổ biến nhất thế giới (93.87% thị phần).

---

## 2. Git vs GitHub

| Git | GitHub |
|-----|--------|
| Phần mềm cài trên máy | Website lưu trữ code |
| Dòng lệnh | Giao diện đồ hoạ |

---

## 3. Ba Trạng Thái Git

```
Working Directory  →(git add)→  Staging Area  →(git commit)→  Repository
   [tạo mới/ 
   có thay đổi/ 
   đang sửa]                   [chuẩn bị]                    [đã lưu/ đã commit/ đã tạo phiên bản]
   màu đỏ                       màu xanh
```

---

## 4. Lệnh Git cơ bản

```bash
# Setup (1 lần duy nhất)
git init
git config --global user.name "Tên"
git config --global user.email "email"
git remote add origin <url>

# Mỗi khi có thay đổi
git add .                        # đưa toàn bộ file vào staging
git add <tên file>               # đưa file cụ thể vào staging
git commit -m "feat: nội dung"   # lưu phiên bản
git push origin main             # đẩy lên GitHub

# Kiểm tra
git status    # xem trạng thái file
git log       # xem lịch sử commit
```

> ⚠️ File trong subfolder phải ghi đầy đủ đường dẫn: `git add folder/file.txt`

---

## 5. Commit Convention

```
<type>: <mô tả ngắn>
```

| Type | Dùng khi |
|------|---------|
| `feat` | Thêm tính năng / test case mới |
| `fix` | Sửa lỗi |
| `chore` | Sửa lặt vặt, xoá file thừa |

**Ví dụ:** `feat: add login test`, `fix: sửa lỗi case 2`, `chore: xoá file cũ`

---

## 6. JavaScript — Chạy file

```bash
nvm install v22.16.0 && nvm use v22.16.0  # cài NodeJS
node 01-hello.js              # chạy file
node folder/01-hello.js       # chạy file trong subfolder
```

---

## 7. Hello World & Comment

```javascript
console.log("Hello world!");   // in ra màn hình

// Comment 1 dòng

/*
  Comment
  nhiều dòng
*/
```
> Phím tắt comment: `Ctrl + /` (Win) / `Cmd + /` (Mac)

---

## 8. Biến và Hằng

```javascript
var x = 1;      // ❌ cũ, không dùng
let y = 1;      // ✅ dùng khi cần gán lại
const z = 1;    // ✅ mặc định dùng cái này
```

| | `var` | `let` | `const` |
|--|:---:|:---:|:---:|
| Khai báo lại | ✅ | ❌ | ❌ |
| Gán lại giá trị | ✅ | ✅ | ❌ |
| Block scope | ❌ | ✅ | ✅ |

**Quy tắc:** Mặc định dùng `const` → cần thay đổi thì dùng `let` → không dùng `var`

---

## 9. Kiểu Dữ Liệu

```javascript
const so    = 25;           // Number
const chuoi = "hello";      // String
const dunSai = true;        // Boolean

typeof so      // "number"
typeof chuoi   // "string"
typeof dunSai  // "boolean"
```

---

## 10. Toán Tử So Sánh

```javascript
===   // bằng (cả giá trị lẫn kiểu) ← LUÔN DÙNG CÁI NÀY
!==   // khác

5 === 5       // true
5 === "5"     // false (khác kiểu)
5 == "5"      // true (tự chuyển kiểu) ← TRÁNH DÙNG

>  <  >=  <=  // lớn hơn, nhỏ hơn, ...
```

---

## 11. Toán Tử Logic

```javascript
&&   // AND: cả 2 đúng → đúng
||   // OR:  1 trong 2 đúng → đúng
```

| A | B | A && B | A \|\| B |
|:---:|:---:|:---:|:---:|
| true | true | ✅ | ✅ |
| true | false | ❌ | ✅ |
| false | true | ❌ | ✅ |
| false | false | ❌ | ❌ |

---

## 12. Toán Tử Tăng / Giảm

```javascript
let a = 10;
let b = ++a;   // tăng TRƯỚC → b = 11, a = 11
let c = 10;
let d = c++;   // trả về TRƯỚC → d = 10, c = 11
```

---

## 13. Câu Điều Kiện

```javascript
if (dieu_kien) {
    // chạy nếu đúng
}

// Ví dụ
let hour = 8;
if (hour >= 6 && hour <= 11) {
    console.log("Good morning!");
}
```

---

## 14. Vòng Lặp For

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);   
}

// Tính tổng 1..10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;   // sum = sum + i
}
console.log(sum);  // 55
```

**3 phần của for loop:**
1. `let i = 0` — khởi tạo (chạy 1 lần)
2. `i < 5` — điều kiện (sai thì dừng)
3. `i++` — cập nhật (chạy cuối mỗi vòng)
