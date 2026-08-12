class Customer {
    
    //thuộc tính
    id: number;
    name: string;
    email: string;
    phone: string;

    // hàm khởi tạo
    constructor (id: number,name: string,email: string,phone: string) {
        this.id = id;
        this.name = name;
        this.email=email;
        this.phone=phone;
    }
   
    //phương thức
    //Hiển thị thông tin khách hàng
    displayInfor () {
        console.log(`ID:${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Email:${this.email}`);
        console.log(`Số điện thoại:${this.phone}`);
    }
    //Cập nhật email của khách hàng
    updateEmail(newEmail: string) {
        this.email=newEmail;
        console.log(`Email đã được cập nhật:${this.email}`);
    }
}
const customer1 = new Customer(1,"Đào Mai Chi","maichidao99@gmail.com","076526642");
customer1.displayInfor();

customer1.updateEmail("maichiit99@gmail.com");
customer1.displayInfor();