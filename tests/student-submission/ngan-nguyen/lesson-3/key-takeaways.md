# Git
## Undo actions
Mục đích: Hủy/Chỉnh sửa hành động đã làm
### Commit message
**1. Mục đích**: thay đổi nội dung message đã commit sai

**2. Cú pháp**: `git commit --amend -m "message"`
![HÌnh ảnh](https://wizardzines.com/images/uploads/oh-shit-change-message.png)
### File staging -> working directory
**1.Mục đích**: chuyển file từ vùng Staging về vùng Working Directory

**2. Cú pháp**
- `git restore --staged <file_name>`: restore 1 file cụ thể
- `git restore --staged .`: restore toàn bộ files

### File repository -> working directory
**1. Mục đích**: chuyển file từ vùng File repository về vùng Working Directory

**2. Cú pháp**:
- `git reset HEAD~1`: restore 1 commit gần nhất
- `git reset HEAD~n`: restore n commits gần nhất

**3. Note**: 
- Không chọn được cụ thể commit muốn reset
- Commit đầu tiên không thể xóa
- Nếu muốn reset thì xóa thư mục .git rồi init lại

## Branching model
### Git pull code
**1. Mục đích**: Lấy code từ server về

**2. Cú pháp**: `git pull origin main`
### Git branch
**1. Mục đích**: Git sử dụng nhánh (branch) để tạo ra các phiên bản riêng của code tránh ảnh hưởng bản gốc (main). 

 Ví dụ trong 1 dự án nhiều người cùng làm/nhiều version thì nên tạo ra nhiều nhánh code, sau khi được review thì mới merge vào main. 

**2. Khi khởi tạo repo (git init) nhánh mặc định được tạo ra.**

**3. Nhánh mặc định**
Khi khởi tạo, đặt nhánh mặc định là nhánh main/master: 
- `git config --global init.defaultBranch main`
- `git config --global init.defaultBranch master`

**4. Một số câu lệnh với nhánh**:
- **git branch**: xem danh sách nhánh (cần có ít nhất 1 commit thì danh sách nhánh mới hiển thị). Nhánh có dấu * phía trước tên nhánh nghĩa là user đang đứng và làm việc với nhánh đó.
![Hình ảnh](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPT4CeYcjnJ1WttSJpIh7qK4pbjv924n3a0Q&s)
- `git branch <tên_branch>`: tạo nhánh mới (nhánh mới copy giống hệt nhánh hiện tại)
![Hình ảnh](https://i.ytimg.com/vi/t6cN7GHhGBw/maxresdefault.jpg)
- `git checkout <tên_branch>`: chuyển sang nhánh mới ()
- `git checkout -b <tên_branch>`: Vừa tạo, vừa chuyển sang nhánh mới
- `git branch -D <tên_branch>`: Xóa 

### git log
**1. Mục đích**: Hiển thị danh sách các commits

**2. Cú pháp**:

   - `git log`: hiển thị tất cả commits

   - `git log-n`: hiển thị số lượng commit cụ thể

![Hình ảnh](https://media2.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F62dytq64p0yjrb1ednja.png)

### git checkout <revision>
**1. Mục đích**: dùng để kiểm tra code cũ

**2. Cú pháp**: `git checkout <revision>`

## .gitignore file
**1. Mục đích**: dùng để bỏ qua các file không cần gi theo dõi

**2. Cú pháp**:
    - **<file_name>**: ignore file
    - **<folder_name>/**: ignore folder

![Hình ảnh](https://pythonviz.com/wp-content/uploads/2022/06/git-gitignore-projectwide-gitignore-single-file.png)

# JavaScript basic
## Conventions (Quy tắc)
**Mục đích**: code theo 1 format, dễ nhìn => teammates dễ hiểu code
- **snake_case**: chưa dùng
- **kebab-case**: tên file
- **camelCase**: tên biến
- **PascalCase**: tên class
![Hình ảnh](https://media.licdn.com/dms/image/v2/D5622AQGRVjw-Lmlcxw/feedshare-shrink_800/feedshare-shrink_800/0/1709444901414?e=2147483647&v=beta&t=eH9SS6knppnLkYgW0xPYdxEbqT-bpBB9yb_wAmbDbOo)

## console.log
**Mục đích**: In nội dung mong muốn ra màn hình
~~~javascript
 console.log('Tôi là Ngân'); => chuỗi trong dấu ''
 conslole.log("Tôi là Ngân"); => chuỗi trong dấu ""
 let name = "Ngân"; 
    console.log(`${name}`); => Dùng “backtick”
    console.log("Tôi tên là " + name);
    console.log("Tôi tên là " , name);
~~~

## Object
**1. Mục đích**: dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số

**2. Cú pháp**: 
   ~~~javascript
    let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        ...
    }
   ~~~
- `<thuoc_tinh>`: giống quy tắc đặt tên biến =>**camelCase**
- `<gia_tri>`: có thể giống biến, hoặc là 1 object khác
- Ví dụ:
    ~~~javascript
    let student = {
         name: "Ngan",
         class: {
             name: "K18",
             subject: "Fullstack Automation"
    }
    }
    console.log(student.name);
    console.log(student.class.subject);
    console.log(student["name"]);
    console.log(student["class"]["name"]);

    // Output:
    // Ngan
    // Fullstack Automation
    // Ngan
    // K18
    ~~~


### Object vs const
- Nếu bạn thay cả object bằng một object mới=> Lỗi
    ~~~javascript
     const student = {"name": "alex", "age": 20}
     student = {"name": "Nagi", "age": 18} // lỗi
     ~~~
- Nếu chỉ thay đổi **thuộc tính** của object thì hợp lệ
    ~~~javascript
     const student = {"name": "alex", "age": 20}
     student.age = "21"; // Hợp lệ
    ~~~

### Thêm thuộc tính vào Object
- Cách làm: dùng dấu . hoặc ngoặc vuông [] để định nghĩa thuộc tính mới.
- Ví dụ
    ~~~javascript
     let bike = {
         make: 'Honda',
         model: 'YZF-R3'
     };
     bike.color = "Red";
     bike["price new"] = 100;
     console.log(bike);
    // Output:
    // {make: 'Honda', model: 'YZF-R3', color: 'Red', ‘price new’ : 100}
    ~~~


### Xóa thuộc tính của Object
- Cách làm: dùng hàm **delete**
- Ví dụ
    ~~~javascript
     let bike = {
         make: 'Honda',
         model: 'YZF-R3',
         color: 'Red',
     };
     delete bike.model;
     console.log(bike);
     // Output:{make: 'Honda', color: 'Red'}
     ~~~

## Array
1. Tạo mảng
`int array[10] = {35,33,42,10,14,19,27,44,26,31};`

    ![Hình ảnh](https://cdn1.byjus.com/wp-content/uploads/2021/09/word-image4.png)

2. Truy xuất mảng
    ~~~javascript
    console.log("Độ dài của mảng: ", arr.length);
    console.log("Số ở vị trí index 2 là: ", arr[2]);

    // Output:
    // Độ dài của mảng: 10
    // Số ở vị trí index 2 là: 42
    ~~~


3. Hàm push

    **Mục đích**: Thêm phần tử vào mảng
    ~~~javascript
     const arr = [];
     arr.push(1, 2, 3);
     console.log(arr);

    // Output**: [1,2,3]
     ~~~



## Function
Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- **Khai báo**
![Hình ảnh](https://www.scientecheasy.com/wp-content/uploads/2022/02/javascript-function-syntax.png)

- **Ví dụ**
    - ![Hình ảnh](https://www.programiz.com/sites/tutorial2program/files/javascript-create-function.png)

    - ![Hình ảnh](https://scaler.com/topics/images/structure-of-a-javascript-function.webp)