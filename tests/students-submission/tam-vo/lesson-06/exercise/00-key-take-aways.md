# Lesson 6: Git, Javascript advanced

## Git

### 1. Git remote (remote repository)

> Là danh sách các repository được lưu trữ ở máy chủ **từ xa** (remote server), cho phép bạn cộng tác với người khác.
> **Mỗi remote** được **định danh** bằng 1 **tên ngắn gọn** và liên kết đến 1 URL (URL sẽ lấy từ tab Code -> SSH trên github trong phần repo setting)

+ Cú pháp:

```text
git remote add origin <URL>
```

---

### 2. Git Clone

> Là hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân

+ Cú pháp: Note format link repo: **<git@github.com>**

```text
git clone <link repo>
```

> Trong trường hợp muốn clone 1 repo có tên giống với thư mục repo đã có sẵn, sử dụng câu lệnh sau để đặt lại tên cho thư mục clone.

```text
git clone <link repo> <tên mới>
```

> Note: Nên clone repo bằng **SSH**, vì nếu sử dụng HTTPS sẽ phải nhập lại mật khẩu mỗi lần push/pull => bất tiện.

---

### 3. Git push

> Là hành động đưa code từ vùng repository ở **local** của **một nhánh cụ** thể lên trên remote.

+ Cú pháp:

```text
git push <remote_name> <brand_name>

Ex: git push origin main
```

---

### 4. Git pull

> Là hành động lấy code từ **một nhánh cụ thể** về nhánh local

+ Cú pháp:

```text
git pull <remote_name> <brand_name>

Ex: git pull origin main
```

+ Note: Nếu pull từ 1 nhánh khác nhánh hiện tạo về nhánh local sẽ xảy ra hiện tượng **merge**.

---

### 5. Git stashing

> Là hành động lưu trữ các thay đổi hiện tại (ở **vùng staging**) vào vùng bộ nhớ tạm.

Ex: Khi đang code ở nhánh hiện tạo nhưng chưa push code và muốn chuyển qua nhánh khác để làm task khác -> sử dụng stashing để lưu trữ tạm thời.

+ Cú pháp:

```tx
git stash save // Lưu tạm thời
git stash pop  //  Lấy lại công việc
```

---

### 6. Git merge request, reviewer

+ Git merge request = gộp code từ 1 nhánh sang nhánh còn lại.
+ Git reviewer = người review code

---

### 7. Brand convention

> Convention là bộ quy tắc được cả team thống nhất nhằm giúp quá trình phát triển phần mềm trở nên nhất quán và dễ quản lý.

**Lợi ích**:

+ Giúp repository gọn gàng, đồng bộ.
+ Dễ hiểu mục đích của branch, commit và Pull Request.
+ Thuận tiện cho việc review và quản lý lịch sử thay đổi.
+ Giảm nhầm lẫn khi làm việc theo nhóm.

**Quy tắc đặt tên branch**:

+ Cấu trúc

```text
<type>/<short-description>
```

+ **Type branch**

| Type | Ý nghĩa |
| ---- | ------- |
| feat | Tính năng mới |
| fix | Sửa lỗi |
| chore | Công việc bảo trì, dọn dẹp, đổi tên file, cập nhật package... |
| config | Thay đổi cấu hình dự án |

+ **short-description**: Mục đích của commit (cột ý nghĩa)

> Note important: </br>
    - Luôn tạo branch mới từ `main` trước khi bắt đầu làm việc.</br>
    - Đặt tên branch theo đúng convention của team.</br>
    - Tên branch nên thể hiện rõ mục đích của công việc.</br>
    - Convention giúp việc review, tìm kiếm và quản lý source code dễ dàng hơn.</br>

---

## Javascript - Classs

> Là 1 "bản thiết kế" (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.

**Mục đích:**

+ Code ngắn gọn, không lặp lại.
+ Dễ bảo trì và mở rộng.
+ Tổ chức code rõ ràng hơn.

### 1. Khai báo class

**Cú pháp**:

```js
class TenClass {
//Nội dung
}
```

### 2. Hàm tạo (Constructor) trong Class

```js
class Student {
 //Constructor - hàm khởi tạo
    constructor(name, grade){
    this.name = name; //thuộc tính name
    this.grade = grade; //thuộc tính grade
}
}

// Tạo objetct mới - constructor tự chạy
let student1 = new Student ("Hung", 8.5);
console.log(student1.name); //Hung
console.log(student1.grade); //8.5
```

### 3. Thuộc tính (Propertise) trong Class

> Thuộc tính là các biến lưu trữ dữ liệu của object

```js
class TetstCase {
    constructor(id, title, priority)    {
        //Thuộc tính instance (mỗi object có giá trị riêng)
        this.idd = id;
        this.title = title;
        this. priority = priority;
        this. status = "Not Run"; // Giá trị mặc định
    }
}

let tc1 = new TestCase(1, "Login test", "High");
let tc2 = new TestCase(1, "Logout test", "Medium");

console.log(tc1.title);
console.log(tc2.title);
console.log(tc1.status);
```

### 4. Phương pháp (methods) trong Class

> Là các hàm định nghĩa hành vi của object

```js
class TetstCase {
    constructor(id, title, priority) {
        //Thuộc tính instance (mỗi object có giá trị riêng)
        this.idd = id;
        this.title = title;
        this. priority = priority;
        this. status = "Not Run"; // Giá trị mặc định
    }
}
// Phương pháp instance
excute() {
    this.status = "Running";
    console.log('Đang chạy test: ${this.title}');
}

pass() {
    this.status = "Passed";
    console.log(' ${this.title} - PASSED');
}

fail(reason) {
    this.status = "Failed";
    console.log('${this.title} - PASSED: ${reason}');
}

fail(reason) {
    this.status = "Failed";
    console.log('${this.title} - PASSED: ${reason}');
}

getInfo() {
    return 'Test ${this.id}: ${this.title} [${this.status}]';
}
//Sử dụng

let test1 = new TestCase(1, "Kiểm tra đăng nhập")
test1.execute(); // Chạy test: Kiếm tra đăng nhập
test1.pass() // Kiểm tra đăng nhập pass
Console.log(test1.getInfo()); 
```

---

## TypeScript(TS)

+ Định nghĩa: là JavaScript cải tiến, thê **kiểu dữ liệu** để code rõ ráng hơn.
+ Giúp phát hiện lỗi ngay khi viết code
+ TS được biên dịch thành JavaScript để chạy.

```ts
//Example
let age: number = 25; //Phải là số
let name: string = 'John'; // Phải là chuỗi
let teams: string[] = ["Team A", "Team B"]; // Mảng chuỗi

//age = "30"; //Lỗi: TS báo không thể gán chuỗi cho số
```

### Interface trong TypeScript

+ Interface định nghĩa **cấu trúc** cho đối tượng
+ Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu.

```ts
// Ex:
interface Player {
    name: string;
    position: string;
    jerseyNumber: number;
}
let player : Player = {name: "John", position: :"Forward" ,
jereyNumber: 10 }; 
```

### Class -Khai báo kiểu dữ liệu cho TS

> Class trong TS giống JS nhưng có thêm **khai báo kiểu dữ liệu** cho thuộc tính và phương thức.

```ts
// Example:
class Team {
    name: string
    players: Player[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player: Player) : void {
        this.players.push(player);
    }
}
```

### Câu lệnh run TS

```ts
npx ts-node <path_file>
npx tsx <path_file>
```
