# Git:

## 1.clone:

- Khái niệm: Tải toàn bộ repo có sẵn về máy local

```
git clone <link repo> 
git clone <link repo> <tên mới>
```

## 2.push:

- Khái niệm: đưa code từ **vùng repository** lên server

```
git push <remote_name> <branch_name>
```

## 3.pull:

- Khái niệm: lấy dữ liệu mới của nhánh cụ thể về cập nhật cho local

```
git pull <remote_name> <branch_name>
```

## 4.stashing:

- **Stash**: lưu các công việc đang làm vào 1 vùng nhớ tạm
- **Unstash**: lấy các công việc trong vùng nhớ tạm ra

```bash
git stash
git stash push -m "message" 
git stash save "message"
git stash pop
git stash pop <stash@{n}> 
git stash apply
git stash list
```

## 5.merge request:
1. Tạo branch (note: chuyển nhánh main và pull code trước khi tạo branch mới)
2. Tạo PR, thêm reviewer, gửi review request.
3. Thực hiện review code cho người khác.
4. Thực hiện fix comment khi có comment từ người khác.

# Javascript:

## 1.Class:

- Khái niệm: class là khai báo kiểu dữ liệu để làm khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng thuộc class đó sẽ có
- Method (phương thức): là các hàm gắn với class để thực hiện các hành động liên quan đến class đó

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
```
## Typescript:

- Khái niệm: TS là javascript cải tiến, **thêm kiểu dữ liệu** để code rõ ràng hơn
- Giúp phát hiện lỗi ngay khi vừa gõ
- Cách run:

```
npx ts-node <path_file>
npx tsx <path_file>
```
## 1.Interface trong TS:

- Interface định nghĩa cấu trúc cho đối tượng
- Đảm bảo đối tượng đủ thuộc tính và kiểu dữ liệu

```ts
interface Student {
  name: string;
  age: number;
}
let student: Student = { name: "Name", age: 27 };
```

## 2.class trong TS:

- Khái niệm: class trong ts giống js nhưng có thêm khai báo kiểu dữ liệu cho thuộc tính và phương thức

```ts
interface Player {
  name: string;
}

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
