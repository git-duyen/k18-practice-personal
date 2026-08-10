# Automation — Lesson 6

## 1. Git

### 1.1. Clone — lấy code từ một repo có sẵn về máy

```bash
git clone <link repo>
git clone <link repo> <tên mới>    # đặt lại tên thư mục khi clone
```

Thao tác:
1. Vào trang repo → bấm nút **`<> Code`** (GitHub).
2. Copy link **HTTPS** (repo public) hoặc **SSH** (repo private).
3. Mở terminal tại folder muốn chứa code → chạy lệnh clone.

Sau khi chạy thành công, thư mục mới clone về nằm ngay trong folder đang đứng.

### 1.2. Push — đưa commit từ Local lên Remote Repository

```bash
git push <remote_name> <branch_name>
git push -u <remote_name> <branch_name>    # -u dùng cho lần push đầu tiên của branch
```

Chỉ branch được chỉ định mới được cập nhật.

**Quy trình push lên repo đã tồn tại trên GitHub:**
1. Clone repository về máy.
2. Tạo branch mới để làm việc: `git checkout -b <tên branch>`
3. Sửa code.
4. Đưa file vào Staging Area: `git add .`
5. Tạo commit: `git commit -m "<nội dung commit>"`
6. Push lên GitHub: `git push -u origin <tên branch>`

**Push lên một repository cá nhân mới:**

```bash
git remote add <remote-name> <repository-url>
```

1. Tạo repository trên GitHub.
2. Thêm remote vào Local Repository (remote này trỏ đến repo vừa tạo).
3. Push code: `git push <remote-name> <branch-name>` — nếu branch chưa có trên GitHub thì sẽ được tạo mới.

### 1.3. Pull — lấy code từ một nhánh cụ thể về nhánh local

```bash
git pull <remote_name> <branch_name>
```

Thao tác:
1. Xác định Remote Repository: `git remote -v`
2. Checkout sang branch cần cập nhật.
3. Pull code về.

### 1.4. Stashing — lưu tạm các thay đổi hiện tại vào vùng nhớ tạm

```bash
git stash save <tên stash>   # lưu file đã tồn tại (đã commit trước đó)
git stash -u                 # lưu cả file mới (untracked)
git stash list               # xem danh sách stash
git stash pop                # lấy lại stash gần nhất
git stash pop stash@{0}      # lấy lại theo vị trí trong list
```

Mỗi lần stash tạo ra một vùng nhớ mới khác nhau.

### 1.5. Merge request / Pull request — gộp code từ nhánh này sang nhánh kia

Thao tác: GitHub → tab **Pull request** → **New** → chọn nhánh nguồn và nhánh đích → **Create pull request**.

### 1.6. Quy trình review code

1. **Tạo branch** — luôn chuyển về nhánh `main` và pull code trước, để `main` trên máy giống hệt `main` trên Git.
2. **Tạo PR** và gửi request review — bắt buộc có PR và được review trước khi merge vào `main`.
3. **Review code** — vào tab *Files changed* → để lại comment.
4. **Xử lý comment** → resolve sau khi xử lý xong.

---

## 2. JavaScript — Class

Class dùng để khai báo một kiểu object mới. Class là **khuôn mẫu** định sẵn các object tạo ra từ nó sẽ có những thuộc tính (Property) và phương thức (Method) nào.


### 2.1. Khai báo Class

```js
class TenClass {
  // nội dung class ở đây
};
```

### 2.2. Constructor — hàm khởi tạo

Constructor tự động chạy khi tạo object bằng `new`. Nhiệm vụ chính là nhận dữ liệu ban đầu và gán vào object.

```js
class TenClass {
  constructor(thamSo1, thamSo2) {
    this.property1 = thamSo1;
    this.property2 = thamSo2;
  }
}

const obj = new TenClass(giaTri1, giaTri2);
console.log(obj.property1);
```

- `constructor(...)` — nhận dữ liệu truyền vào lúc `new`.
- `this` — đại diện cho chính object đang được tạo.
- `this.property = thamSo` — lưu dữ liệu vào object.
- `new TenClass(...)` — tạo object và truyền dữ liệu vào constructor.
- `obj.property` — lấy dữ liệu đã lưu trong object.

### 2.3. Property — object **có gì**

Property được gán trong constructor, có thể nhận từ tham số hoặc gán giá trị mặc định.

```js
class TenClass {
  constructor(thamSo) {
    this.property1 = thamSo;        // nhận từ bên ngoài
    this.property2 = "giá trị mặc định";  // gán cứng
  }
}
```

Mỗi object tạo ra từ class giữ bộ dữ liệu riêng, không ảnh hưởng lẫn nhau.

### 2.4. Method — object **làm được gì**

Method là hàm nằm bên trong class, viết không cần từ khóa `function`.

```js
class TenClass {
  constructor(thamSo) {
    this.property = thamSo;
  }

  tenMethod(thamSo) {
    return this.property * thamSo;
  }
}

const obj = new TenClass(giaTri);
obj.tenMethod(giaTri2);
```

- `tenMethod(thamSo) { }` — khai báo method, có thể nhận tham số.
- `this.property` — truy cập property của chính object đó bên trong method.
- `return` — trả kết quả về cho nơi gọi.
- `obj.tenMethod(...)` — gọi method qua dấu chấm.


---

## 3. TypeScript

### 3.1. Khái niệm

**TypeScript (TS) = JavaScript + kiểm tra kiểu dữ liệu.**

```ts
let tenBien: kieuDuLieu = giaTri;
```

Cú pháp khai báo kiểu: viết dấu `:` ngay sau tên biến, rồi đến tên kiểu dữ liệu.

### 3.2. So sánh JavaScript và TypeScript

**JavaScript**
- Không cần khai báo kiểu dữ liệu.
- Lỗi thường chỉ phát hiện khi chạy chương trình.
- Linh hoạt hơn, nhưng dễ sai ở project lớn.

**TypeScript**
- Có khai báo kiểu dữ liệu.
- Lỗi phát hiện ngay khi viết code (gán sai kiểu là báo lỗi liền).
- Chặt chẽ hơn, an toàn hơn với project lớn.

### 3.3. Các kiểu dữ liệu cơ bản

- `string` — chuỗi văn bản.
- `number` — số; không phân biệt số nguyên và số thực.
- `boolean` — chỉ nhận `true` hoặc `false`.
- `null` — giá trị rỗng; khác với `undefined`.
- `undefined` — chưa có giá trị, thường xuất hiện khi chưa gán.
- `any` — mọi kiểu dữ liệu, có thể đổi tùy ý → **hạn chế dùng** vì mất tác dụng kiểm tra kiểu.
- `unknown` — kiểu chưa xác định; an toàn hơn `any`, phải kiểm tra kiểu trước khi dùng.
- `array` — danh sách dữ liệu, khai báo `kieu[]`; các phần tử thường cùng kiểu.
- `object` — đối tượng có nhiều thuộc tính; có thể khai báo chi tiết từng property và kiểu của nó.
- `object[]` — mảng các object.
- `tuple` — mảng có kiểu và thứ tự cố định; sai kiểu hoặc sai thứ tự sẽ báo lỗi.
- `enum` — nhóm các giá trị cố định, dùng khi chỉ có một số lựa chọn giới hạn.
- `void` — hàm không trả về giá trị; chỉ dùng cho kiểu trả về của hàm.
- `never` — hàm không bao giờ trả về (luôn ném lỗi hoặc chạy vô hạn); ít gặp.

### 3.4. Interface — khuôn mẫu quy định cấu trúc của object

Interface kiểm tra 2 thứ: **đủ property chưa** và **đúng kiểu dữ liệu chưa**.

```ts
interface TenInterface {
  property1: kieuDuLieu;
  property2: kieuDuLieu;
}

let obj: TenInterface = {
  property1: giaTri,
  property2: giaTri
};
```

- `interface TenInterface { }` — khai báo khuôn mẫu.
- Bên trong liệt kê tên property và kiểu dữ liệu tương ứng, mỗi dòng kết thúc bằng `;`.
- Interface viết **trước**, sau đó mới dùng để khai báo kiểu cho object, cho tham số của hàm hoặc cho giá trị trả về của hàm.

### 3.5. Class trong TypeScript

**Class TypeScript = Class JavaScript + Type.**

```ts
class TenClass {
  property1: kieuDuLieu;
  property2: TenInterface[];

  constructor(thamSo: kieuDuLieu) {
    this.property1 = thamSo;
    this.property2 = [];
  }

  tenMethod(thamSo: TenInterface): void {
    this.property2.push(thamSo);
  }
}
```

- Khai báo property kèm kiểu ngay trong thân class, trước constructor.
- `thamSo: TenInterface` — tham số truyền vào phải là object đúng cấu trúc của interface đó.
- `: void` sau tên method — khai báo hàm không trả về giá trị.
- `TenInterface[]` — mảng chứa nhiều object theo interface.
- Truy cập lồng nhau bằng dấu chấm và chỉ số: `obj.property2[0].name`.

### 3.6. Chạy file TypeScript (.ts)

File `.ts` không chạy trực tiếp được vì Node.js chỉ hiểu JavaScript (`.js`). Phải **compile** (biên dịch) sang `.js` trước.

```bash
npx tsc app.ts    # bước 1: compile .ts → .js
node app.js       # bước 2: chạy file .js vừa sinh ra
```