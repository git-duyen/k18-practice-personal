class Customer {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(id: string, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo() {
    console.log(`ID khach hang: ${this.id}`);
    console.log(`Name khach hang: ${this.name}`);
    console.log(`Email khach hang: ${this.email}`);
    console.log(`Phone khach hang: ${this.phone}`);
  }

  updateEmail(newEmail: string) {
    this.email = newEmail;
  }
}

const customer = new Customer(
  "1",
  "Thanh",
  "thanhnguyenphu23@gmail.com",
  "0987654321",
);

customer.displayInfo();
customer.updateEmail("phongvo@gmail.com");
customer.displayInfo();
