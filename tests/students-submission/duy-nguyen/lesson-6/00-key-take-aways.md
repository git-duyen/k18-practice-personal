# Lesson 06 - Git, Javascript advanced

## Git
### Git Clone
- Lấy code từ 1 repo đã có sẵn về máy
    `git clone <link repository>`
    (e.g. `git clone git@github.com:playwrightvn/awesome-testing-materials.git`)
    `git clone <link repository> <new-name>`
    (e.g. `git clone git@github.com:playwrightvn/awesome-testing-materials.git new-name` )
     --> đặt lại tên cho thư mục clone trong trường hợp <repo name> trùng với tên folder có sẵn trong máy hoặc muốn đổi tên cho repo khi clone về máy.
- Clone nên dùng link repository là `SSH` thay vì `HTTPS` (HTTPS mỗi lần push/pull code phải nhập lại password nên khá bất tiện)
    - `SSH: git@github.com:playwrightvn/awesome-testing-materials.git`
    - `HTTPS: https://github.com/playwrightvn/awesome-testing-materials.git`
- Lấy code từ 1 nhánh cụ thể về máy local
    git pull <remote_name> <branch_name>
    `git pull origin main`
- Lưu trữ các thay đổi hiện tại (ở vùng staging) vào 1 vùng nhớ tạm
    `git stash`
    `git stash save "message"` --> message gì đó để mình nhớ là mình muốn lưu lại việc đang làm là gì, mai mốt pop ra thì biết là cần lấy lại cái nào"`
    `git stash -u` --> dùng `-u` nếu như mình có thay đổi gì đó (ví dụ: tạo file mới) mà chưa có trong git init của project
    `git stash list` --> list history các lần đã stash
- Lấy lại các thay đổi đã lưu vào vùng nhớ tạm hồi nãy, lấy ra dùng tiếp
    `git stash pop`
    `git stash pop stash@{n}` --> pop stash(n) nếu như stash nhiều lần

## Javascript
### Class
<!-- - Class: Là cái khuôn (ví dụ: khuôn làm bánh).
- Object: Là cái bánh thật sự được tạo ra từ khuôn đó.
- Property: Là nguyên liệu của bánh (đường, bột, màu sắc).
- Method: Là khả năng của cái bánh (ví dụ: phát ra mùi thơm). -->

- Class là 1 khuôn mẫu để chúng ta tạo ra các Object có tính năng, hình dáng y hệt nhau
- Gổm 3 thành phần chính:
    1. Constructor (hàm khởi tạo)
    2. Properties (thuộc tính, đặc điểm)
        Ví dụ: màu sắc, tên, số bánh xe
    3. Method (phương thức, hành động)
        Ví dụ: chạy, phanh, bấm còi

//Bước 1: Tạo bản thiết kế Class
class XeOto {
    //1 & 2. Constructor và Properties: Hàm khởi tạo các đặc điểm ban đầu + thuộc tính
    constructor(ten, mau){
        this.ten = ten;   // Properties: 'ten' sẽ truyền vào cho đối tượng
        this.mau = mau;  // Properties: 'mau' sẽ truyền vào cho đối tượng
    }

    //3. Method: các hành động
    bamCoi(){
        console.log(`${this.ten} ${this.mau} đang kêu: bíp bíp!`);
    }
}

//Bước 2: Dùng bản thiết kế để tạo ra các chiếc xe thật (Object)
let xeCuaToi = new XeOto("Vinfast", "Trắng");
let xeCuaBan = new XeOto("Hyundai", "Đen");

//Bước 3: Sử dụng hành động
xeCuaToi.bamCoi(); // --> Vinfast Trắng đang kêu: bíp bíp!
xeCuaBan.bamCoi(); // --> Hyundai Đen đang kêu: bíp bíp!

- Tính tái sử dụng (Reusability)
- Dễ quản lý (Organization)
- Tính kế thừa (Inheritance)

### Typescript
- Typescript (TS) là Javascript cải tiến, thêm kiểu dữ liệu để code rõ ràng hơn.
- Typescript được biên dịch thành Javascript để chạy
- Có 2 cách khai báo kiểu dữ liệu
    - Cách 1: Type Inference (suy luận kiểu dữ liệu)
        `let age = 25;`
    - Cách 2: Explicit type (chú thích kiểu dữ liệu)
        ```
        let age: number;
        age = 25;
        ```
        hoặc
        `let age: number = 25;`
        `let name: string = "Daniel"`
        `let team: string[] = ["Team A", "Team B"];`
    - 1 biến có thể nhận nhiều kiểu dữ liệu
        ```
        let result: number | string;
        result = 100;
        result = "thành công";
        ```

### Interface
- Interface định nghĩa cấu trúc cho đối tượng 
- Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu
    //Nếu không dùng interface thì khai báo 1 Object
    ```
    let player = {
        name: "Daniel",
        position: "Forward",
        jerseyNumber: 9
    };
    ```

    Dùng interface
    ```
    interface Player {
        name: string;
        position: string;
        jerseyNumber: number;
    };

    let player: Player = {
        name: "Daniel",
        position: "Forward",
        jerseyNumber: 9
    };
    ```

### Class
- Class trong Typescript giống Javascript nhưng có thêm
    - Khai báo kiểu dữ liệu cho thuộc tính và phương thức

```
//Class trong Javascript
class XeOtoJS {
    // 1. Khai báo thuộc tính (Class Fields)
    ten; 
    mau;

    // 2. Hàm khởi tạo
    constructor(ten, mau) {
        this.ten = ten;
        this.mau = mau;
    }

    // 3. Phương thức
    bamCoi() {
        console.log(`${this.ten} màu ${this.mau} đang kêu: bíp bíp!`);
    }
}

const myCarJS = new XeOtoJS("VinFast", "Trắng");
myCarJS.bamCoi();  --> VinFast màu Trắng kêu bíp bíp!
```
-----
```
// Class trong Typescript
class XeOtoTS {
    // Phải có kiểu dữ liệu (string, number,...)
    public ten: string;
    public mau: string;

    constructor(ten: string, mau: string) {
        this.ten = ten;
        this.mau = mau;
    }

    public bamCoi(): void {
        console.log(`${this.ten} màu ${this.mau} kêu bíp bíp!`);
    }
}