# Lesson 06: Git & JavaScript Advanced
## I. Git
### 1. Remote
Là **danh sách** các **reporsity** được lưu trữ ở máy chủ **từ xa** (remote sever), cho phép cộng tác với người khác. <br>
- Mỗi remote được định dạng bằng một tên ngắn gọn và liên kết đến một URL
- EX: `git remote add origin git@github.com:bba/k18-practice.git`
    - Tên ngắn gọn: oringin
    - URL: git@github.com:bba/k18-practice.git

### 2. Clone, pull, push
#### a. Clone
**Clone** là hành động lấy code từ 1 repo đã có sẵn về máy tính cá nhân. <br>
`git clone <link repo>` <br>
- EX: `git clone git@github.com:bba/k18-practice.git`

**Có thể đặt lại tên cho tư mục clone** <br>
`git clone <link repo> <tên mới>` <br>
- EX: `git clone git@github.com:bba/k18-practice.git k18-practice-2`

#### b. Push
**Push** là hành động đưa code từ vùng **Repository** ở local của một nhánh cụ thể lên trên remote. <br>
`git push <remote_name> <branch_name>`
- EX: `git push origin main`

#### c. Pull
**Pull** là hành động lấy code từ một nhánh cụ thể về nhánh local. <br>
- EX: `git pull origin main`

Ta có thể pull từ một nhánh khác nhánh hiện tại về nhánh local. Lúc này hiện tượng merge xảy ra (Học ở các bài sau)

### 3. Stashing
**stash** là hình động lưu trữ các thay đổi hiện tại (ở **vùng staging**) vào một vùng nhớ tạm. <br>
`git stash save` <br>
**stash** giúp ta có thể chuyển đổi qua một nhánh khác dễ dàng hơn. <br>
Để lấy công việc lại: `git stash pop`

### 4. Merge request, reviewer
#### a. Merge request
Gộp code từ một nhánh sang nhánh còn lại
#### b. Reviewer
Người review code

## II. Javascript
### 1. Class
**Class** là một **bản thiết kế** (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.
- EX:
    + Class giống như bản vẽ thiết kế xe hơi
    + Object (đối tượng) là chiế xe thực tế được sản xuất từ bản vẻ đó

- Nếu không sử dụng class thì cần khai báo thủ công
    ```
    const thanhPhan = {
         name: "Thanh",
         role: "student"
    };

    const nganLe = {
         name: "Ngan",
         role: "student"
    };

     const chauLe = {
         name: "Chau",
         role: "student"
    };
    ```
- Khi sủa dụng class, sẽ tối ưu hơn:
    ```
    class Student {
        // thuộc tính (property)
        name;
        role;
        // ham khởi tạo (constructor)
        constructor(name, role) {
            this.name = name;
            this.role = role
        }
        // phuong thức (method)
        // không cần khai báo hàm phía trước (const / function)
        studentName() {
            console.log(`Studen name is ${this.name}`);
        }
        // hàm thì có thể thêm tham số (message) ( Cách 1 )
        studentNote(message) {
            console.log(`Chú thích: ${message}`);
        }

        // (Cách 2)
        studentComment (comment) {
            return `Bình Luận: ${comment}`;
        }
    }

    const nganLe = new Student("Ngan", "Studen");
    const thanhPhan = new Student("Thanh", "Student");
    console.log(nganLe, thanhPhan);
    console.log(nganLe.name, nganLe.role);
    thanhPhan.studentName(); // gọi hàm nên phải có ngoặc tròn ở hàm, đã có câu lệnh console.log ở hàm nên k cần gọi lại nếu k thì sẽ undefine
    thanhPhan.studentNote(); // không truyền vào nên in ra sẽ undefine
    thanhPhan.studentNote("Xinh Đẹp");

    const comment = nganLe.studentComment("Dễ Thương") // (In cách 2)
    console.log(comment);
    ```





