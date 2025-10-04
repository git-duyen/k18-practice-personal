# Git
## Clone
```git clone <url>```: Lệnh này dùng để lấy code từ 1 repo đã có sẵn về máy tính cá nhân.

Có thể đặt lại tên cho thư mục clone:
```git clone <link repo> <tên mới>```

**Note**
1. Nên chọn clone code bằng **SSH** cho các kho lưu trữ riêng tư hoặc khi cần bảo mật cao, vì nó sử dụng xác thực bằng cặp khóa, an toàn hơn so với **HTTPS**, vốn yêu cầu nhập tên người dùng và mật khẩu. 
2. **HTTPS** phù hợp với kho lưu trữ công cộng hoặc khi bạn muốn thiết lập nhanh chóng, nhưng cần lưu ý bảo mật khi làm việc trên các mạng không tin cậy.

## Pull
```git pull origin master```: Lấy code từ nhánh master về máy tính cá nhân. Đảm bảo được đồng bộ và cập nhật với trạng thái mới nhất của nhánh master trên repo.

```git pull <remote_name> <branch_name>```:Lấy code từ nhánh bất kì trên repo về máy tính cá nhân

## Push
```git push <remote_name> <branch_name>```: đưa code từ vùng repository lên server

```git push <remote_name> --delete <branch_name>```: xóa nhánh trên repository

## Stashing
```git stash```: được sử dụng để tạm thời lưu trữ (stash) các thay đổi đang làm dở nhưng chưa muốn commit, giúp cho thư mục làm việc (working directory) của bạn trở nên sạch sẽ để bạn có thể chuyển sang nhánh khác hoặc làm việc khác.

```git stash save "message"```: giống **git stash**, nhưng cho phép thêm một tin nhắn mô tả để dễ nhớ sau này.

```git stash list```: Hiển thị danh sách các stash đã được lưu trữ. Kết quả sẽ hiển thị dạng stash@{0}, stash@{1}, v.v.

```git stash pop```: Áp dụng (apply) các thay đổi từ stash gần nhất (stash@{0}) vào thư mục làm việc hiện tại và xóa stash đó khỏi danh sách.

```git stash pop stash@{n}```: Áp dụng một stash cụ thể theo chỉ số và xóa nó khỏi danh sách.

```git stash drop```: Xóa stash gần nhất (stash@{0}) khỏi danh sách.

```git stash drop stash@{n}```: Xóa một stash cụ thể theo chỉ số.

```git stash clear```: Xóa TẤT CẢ các stash đã lưu trữ. Hãy cẩn thận khi sử dụng lệnh này vì nó sẽ xóa toàn bộ.

## Git convention
```<type>/<short-description>```

**type**:
- **feat**: tính năng mới
- **fix**: sửa lỗi
- **conf**: thay đổi cấu hình (config)
- **chore**: các thay đổi “lặt vặt” như xóa file không dùng, đổi tên file,...

**short-description**: Mục đích của branch được tạo ra

# JavaScript
## Class là gì?
- Class không phải là thứ có thể sử dụng trực tiếp, mà nó định nghĩa cấu trúc cho các Object (Đối tượng).
![Class](https://congnghethongtinaau.com/wp-content/uploads/2025/01/lop-va-doi-tuong-co-chuc-nang-khac-nhau.jpg)
- Một Class luôn chứa hai thành phần chính để mô hình hóa thực thể:
    - Thuộc tính (Attributes / Properties)
    - Phương thức (Methods)
![Class](https://aigents-co.imgix.net/production/1707292729708_image5.png?w=600&auto=format,compress)
## Tại sao cần Class?
- Tái sử dụng code
- Tăng tính linh hoạt

## Method?
Nếu **Class** là bản thiết kế của một thực thể, thì **Method** chính là hành động hoặc chức năng mà thực thể đó có thể thực hiện.
 - Là các hàm được gắn với class
 - Thường để thực hiện các hành động liên quán đến đối tượng (class) đó.

```javascript
 // Định nghĩa một Class (Khuôn mẫu)
class Car {
    // Hàm khởi tạo (Constructor) để thiết lập các thuộc tính
    constructor(brand, model, speed) {
        this.brand = brand;   // Thuộc tính
        this.model = model;   // Thuộc tính
        this.currentSpeed = speed; // Thuộc tính
    }

    // Method 1: Hành động tăng tốc
    accelerate(increase) {
        this.currentSpeed += increase;
        console.log(`${this.brand} ${this.model} đang tăng tốc.`);
    }

    // Method 2: Hành động hiển thị trạng thái
    displaySpeed() {
        console.log(`Tốc độ hiện tại là: ${this.currentSpeed} km/h.`);
    }
}

// --- Tạo Object (Thể hiện cụ thể) và gọi Method ---

const myCar = new Car("Toyota", "Camry", 60);

// Gọi các Method
myCar.displaySpeed(); // Output: Tốc độ hiện tại là: 60 km/h.

myCar.accelerate(20); // Output: Toyota Camry đang tăng tốc.

myCar.displaySpeed(); // Output: Tốc độ hiện tại là: 80 km/h.
 ```
