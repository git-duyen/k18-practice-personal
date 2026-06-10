class Customer {
    //thuoc tinh
    id;
    name;
    email;
    phone;

    //ham khoi tao
    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    //phuong thuc hiển thị thông tin khách hàng
    displayInfo() {
        console.log(`id = ${this.id} , name = ${this.name}, email = ${this.email} , phone = ${this.phone}`);
    };
    // phuong thuc cập nhật email khách hàng
    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email mới là ${this.email}`);
    }

};
const dovan = new Customer(12, "VanDo", "vandt185@gmail.com", "090385954");
dovan.displayInfo();
dovan.updateEmail("vantest12@gmail.com");
dovan.displayInfo();