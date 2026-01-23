//
class Customer {
    id;
    name;
    email;
    phone;

    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    sayupdateEmail(textemail) {
        console.log(`updateEmail: ${textemail}`);
    }
    saydisplayInfo() {
        console.log(`Customer Info: ${this.id} - ${this.name} - ${this.email} - ${this.phone}`);
    }

}
const hoangNam = new Customer(1, 'Hoang Nam', 'hoangnam@gmail.com', '092222222');
const hoangAn = new Customer(2, 'Hoang An', 'hoangan@gmail.com', '093333333');
console.log(hoangNam);
console.log(hoangAn);
console.log(hoangNam.sayupdateEmail('hoangnam@gmail.com'));
console.log(hoangAn.sayupdateEmail());
console.log(hoangNam.saydisplayInfo());
console.log(hoangAn.saydisplayInfo());
