# Git:

## 1.clone:

- Khái niệm: Tải toàn bộ repo có sẵn về máy local

```
git clone <link repo> // Tải
git clone <link repo> <tên mới> // Tải và đặt lại tên

ex:
git clone git@github.com:better-bytes-academy/k18-practice.git
git clone git@github.com:better-bytes-academy/k18-practice.git
k18-practice-2
```

## 2.push:

- Khái niệm: đưa code từ **vùng repository** lên server

```
git push <remote_name> <branch_name>

ex:
git push origin main
```

## 3.pull:

- Khái niệm: lấy dữ liệu mới của nhánh cụ thể về cập nhật cho local

```
git pull <remote_name><branch_name>

ex:
git pull origin branchA
```

## 4.stashing:

- **Stash**: lưu các công việc đang làm vào 1 vùng nhớ tạm
- **Unstash**: lấy các công việc trong vùng nhớ tạm ra

```ts
git stash // stash
git stash push -m "message" // stash + mô tả của stash để dễ phân biệt sau này
git stash save "message" // stash + mô tả của stash để dễ phân biệt sau này
git stash pop // unstash mới nhất và xóa khỏi danh sách stash
git stash pop <stash@{n}> // unstash {n} đã chọn và xóa khỏi danh sách stash
git stash apply // lấy code từ stash ra apply và không xóa trong danh sách stash
git stash list // xem danh sách stash
```

## 5.merge request:

- Khái niệm: gộp code từ 1 nhánh sang nhánh còn lại
- Hướng dẫn quy trình review code: https://www.youtube.com/watch?v=dVTggka0tvI
  1. Tạo branch (note: chuyển nhánh main và pull code trước khi tạo branch mới)
  2. Tạo PR, thêm reviewer, gửi review request.
  3. Thực hiện review code cho người khác.
  4. Thực hiện fix comment khi có comment từ người khác.

# Javascript:

## 1.Class:

- Khái niệm: class là khai báo kiểu dữ liệu để làm khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng thuộc class đó sẽ có
- Method (phương thức): là cá hàm gắn với class để thực hiện các hành động liên quan đến class đó

```js
class Student {
  // thuộc tính / property
  name;
  role;

  // hàm khởi tạo / constructor
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // các phương thức / method
  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  saySomething(message) {
    console.log(`Say something: ${message}`);
    return `Say something: ${message}`;
  }
}

const hienNguyen = new Student("Hien Nguyen", "Student");
console.log(hienNguyen);
// KQ: Student { name: 'Hien Nguyen', role: 'Student' }

console.log(hienNguyen.name, hienNguyen.role);
// KQ: Hien Nguyen Student

hienNguyen.sayMyName();
// KQ: My name is Hien Nguyen

hienNguyen.saySomething("K18 playwright"); // truyền tham số message = K18 playwright
// KQ: Say something: K18 playwright

const message = hienNguyen.saySomething("K18 playwright");
console.log(message);
// KQ:
// Say something: K18 playwright
// Say something: K18 playwright
```

# Typescript:

- Khái niệm: TS là javascript cải tiến, **thêm kiểu dữ liệu** để code rõ ràng hơn
- Giúp phát hiện lỗi ngay khi vừa gõ
- Cách run:

```
npx ts-node <path_file>
npx tsx <path_file>
```

```ts
let age: number = 25; // phải là số
let name: string = "Hien"; // phải là chuỗi
let teams: string[] = ["Team A", "Team B"]; // mảng chuỗi
age = "30"; // err: ts báo không thể gán chuỗi cho số
```

## 1.Interface trong TS:

- Interface định nghĩa cấu trúc cho đối tượng
- Đảm bảo đối tượng đủ thuộc tính và kiểu dữ liệu

```ts
interface Student {
  name: string;
  age: nummber;
}
let student: Student = { name: "Hien", age: 29 };
```

## 2.class trong TS:

- Khái niệm: class trong ts giống js nhưng có thêm khai báo kiểu dữ liệu cho thuộc tính và phương thức

```ts
class Team {
  name: string;
  players: Player[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player: Player): void {
    // void = không trả về giá trị gì sau khi hàm chạy xong.
    this.players.push(player);
  }
}
```
