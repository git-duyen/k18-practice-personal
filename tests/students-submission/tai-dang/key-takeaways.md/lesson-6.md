I/ Git
a. git clone <url>: clone git source code về
b. git branch <branch_name>: tạo git branch
c. git checkout <branch_name>: Dùng để chuyển sang một branch đã tồn tại
    - Không tạo mới
    - Chỉ “nhảy” sang branch đó
d. git checkout -b <branch_name>: Dùng để tạo branch mới và chuyển sang luôn
    - Tạo branch mới từ branch hiện tại
    - Sau đó tự động checkout sang branch đó
e. git pull origin master: pull source code từ nhánh master về master local của mình

II/ Class
- 1 bản thiết kế (blueprint) để tạo ra các object có cùng đặc điểm và hành vi.
Ex: 
   - Class giống như design pattern 1 chiếc xe hơi
   - Object (đối tượng) là 1 chiếc xe thực tế được sản xuất từ bản vẽ đó
Pros:
- Code ngắn gọn, ko lặp lại
- Dễ bảo trì mở rộng
- Tổ chức code rõ ràng hơn

class Student {
    //Constructor
    constructor(name, grade) {
        // thuộc tính instance (mỗi obj có giá trị riêng)
        this.name = name;  //thuộc tính name
        this.grade = grade;  //thuộc tính grade
    }


    //Method: các func định nghĩa hành vi của object
    getInfo() {
        console.log(`Student info: ${name}, ${grade}`);
    } 
}

// Tạo object mới - constructor tự chạy
let student1 = new Student("Hùng", 8.5);
console.log(student1.name);
console.log(student1.grade);
