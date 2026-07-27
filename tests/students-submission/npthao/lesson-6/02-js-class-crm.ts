class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;

    }
    //Hiển thị thông tin khách hàng

displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
}

updateEmail(newEmail: string): void{
    this.email = newEmail;
    console.log(`New Email: ${this.email}`);
}
    
}

let customer1 = new Customer (1, "Thao", "thao@gmail.com", "0123456789");
customer1.displayInfo();
customer1.updateEmail("thao-1@gmail.com");
customer1.displayInfo()

