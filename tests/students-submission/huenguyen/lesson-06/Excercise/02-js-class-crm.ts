// 1. Tạo class Customer theo yêu cầu
class Customer {
    // Định nghĩa các thuộc tính
    id: string;
    name: string;
    email: string;
    phone: string;

    // Hàm khởi tạo (Constructor)
    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    // 2. Phương thức hiển thị thông tin khách hàng
    displayInfo(): void {
        console.log(`--- Thông Tin Khách Hàng ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Số điện thoại: ${this.phone}`);
        console.log(`----------------------------`);
    }

    // 3. Phương thức cập nhật email nhận vào một tham số duy nhất
    updateEmail(newEmail: string): void {
        this.email = newEmail;
        console.log(`Cập nhật email thành công cho khách hàng ${this.name}!`);
    }
}


