class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    // Phương thức hiển thị thông tin khách hàng
    displayInfor() {
        console.log(`---CUSTOMER INFORMATION---`);
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`--------------------------`);
    }

    // Phương thức cập nhật email mới cho khách hàng
    updateEmail(newEmail: string) {
        const oldEmail = this.email;
        this.email = newEmail;
        console.log(`The email is updated successfully for customer: ${this.name}`);
        console.log(`Old Email: ${oldEmail}`);
        console.log(`New Email: ${this.email}`);
    }

}
// Kiểm tra hai phương thức hoạt động
const customer = new Customer(10, "Nguyen Van A", "nguyenvana@gmail.com", "0987326722");
customer.displayInfor();
customer.updateEmail("nguyenvana123@gmail.com");
customer.displayInfor();