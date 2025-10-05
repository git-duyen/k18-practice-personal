/* Mô tả 
Bạn là một lập trình viên xây dựng hệ thống quản lý khách hàng cho một công ty. Hãy tạo một class để lưu trữ thông tin khách hàng và các phương thức để thao tác với dữ liệu này. 
Yêu cầu: 
- Tạo một class Customer chứa các thuộc tính: id, name, email, phone. 
- Tạo một phương thức displayInfo để hiển thị thông tin khách hàng. 
- Tạo một phương thức updateEmail để cập nhật email của khách hàng. 
Phương thức nhận vào một tham số duy nhất là newEmail 
*/

class Customer {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string
  ) {}

  displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
  }

  updateEmail(newEmail: string): void {
    console.log(`old email: ${this.email}`);
    this.email = newEmail;
    console.log(`new email: ${this.email}`);
  }
}

const customer = new Customer(
  "001",
  "Hien Nguyen",
  "hiennguyen0069@gmail.com",
  "079123456"
);

// hiển thị thông tin khách hàng
customer.displayInfo();

console.log("");

// cập nhật email của khách hàng
customer.updateEmail("hien_nguyen@gmail.com");
