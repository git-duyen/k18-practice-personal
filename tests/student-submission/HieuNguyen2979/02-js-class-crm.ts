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
  displayInfo() {
    console.log(`${this.id}-${this.name}-${this.email}-${this.phone}`);
  }
  updateEmail(newEmail: string) {
    this.email = newEmail;
  }
}

const customer01 = new Customer(
  1,
  "HieuNguyen",
  "email@gmail.com",
  "0943305095",
);

customer01.updateEmail("newemail@gmail.com");
