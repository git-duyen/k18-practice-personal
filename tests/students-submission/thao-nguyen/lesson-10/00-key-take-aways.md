1. **Define type**
- Trong ts có thể đingh nghĩa kiểu dữ liệu thông qua type or interface
ví dụ
const academy :string = "Playwright Academy";
// built in type : string, number, boolean ,...: kiểu dữ liệu cơ bản
//custom type : kiểu dữ liệu do người dùng định nghĩa
type User = {
    name: string,
    age: number,
    yearOfBirth: number,
};
//kiểu dữ liệu User có 3 thuộc tính : name, age, yearOfBirth
const user1 : User = {
    name: "John",
    age: 30,
    yearOfBirth: 1994,
};
 interface UserInterface {
    name: string,
    address: string,
    yearOfBirth: number
}
// interface và type tương tự nhau, nhưng interface có thể kế thừa từ interface khác, còn type thì không, interface không có dấu = còn type thì có dấu =
const user2 : UserInterface = {
    name: "John",
    address: "123 Main St",
    yearOfBirth: 1994,
};

//định nghĩa kiểu dữ liệu custom 

interface Gold {
    loaiVang: string,
    giaMua: number,
    giaBan: number,
};
//gold tên kiểu dữ liệu, có 3 thuộc tính : loaiVang, giaMua, giaBan
const vang1 : Gold = {
    loaiVang: "Vang 24K",
    giaMua: 5000000,
    giaBan: 5500000,
};
2. **Class**
class LoginPage { //LoginPage là tên class gồm có 4 thuộc tính
    usernameLoc : string;
    passwordLoc : string;
    rememberMeLoc : string;
    btnLoginLoc : string;
    constructor(usernametest : string, password : string) { hàm constructor là hàm khởi tạo , định nghĩa các param truyền vào kiểu dữ liệu gì usernamtest là kiểu string
        this.usernameLoc = usernametest;
        this.passwordLoc = password;
        this.rememberMeLoc = "rememberMeCheckbox";
        this.btnLoginLoc = "loginButton";
       
    };
    //fillUsername, fillPassword, clickRememberMe, clickLogin là các phương thức của class LoginPage hay gọi là hàm
    fillUsername(usernametest : string) {
        console.log("Filling username: " + usernametest);
    }
    fillPassword(password : string) //password là tham số của hàm fillPassword 
    {
        console.log("Filling password: " + password);
    }
    clickRememberMe() {
        console.log("Clicking remember me checkbox");
    }   
    clickLogin() {
        console.log("Clicking login button");
    }
    3.**Extend**
    class LoginPage {
    usernameLoc : string;
    passwordLoc : string;
    rememberMeLoc : string;
    btnLoginLoc : string;
    constructor(usernametest : string, password : string) {
        this.usernameLoc = usernametest;
        this.passwordLoc = password;
        this.rememberMeLoc = "rememberMeCheckbox";
        this.btnLoginLoc = "loginButton";
       
    };
    //fillUsername, fillPassword, clickRememberMe, clickLogin là các phương thức của class LoginPage hay gọi là hàm
    fillUsername(usernametest : string) {
        console.log("Filling username: " + usernametest);
    }
    fillPassword(password : string) //password là tham số của hàm fillPassword 
    {
        console.log("Filling password: " + password);
    }
    clickRememberMe() {
        console.log("Clicking remember me checkbox");
    }   
    clickLogin() {
        console.log("Clicking login button");
    }

}
class DashboardPage extends LoginPage {
    heading : string; //heading là thuộc tính của class DashboardPage
    constructor (headingLoc : string, usernametest : string, password : string) {
        super(usernametest, password); //super là từ khóa để gọi constructor của class cha LoginPage, truyền tham số usernametest và password vào constructor của class cha để khởi tạo các thuộc tính usernameLoc và passwordLoc của class cha
        this.heading = headingLoc;
    }
}
const DashboardPage1 = new DashboardPage("Dashboard", "usernameInput", "passwordInput");
super là hàm gọi tới constructor của cha, truyền đủ tham số của cha

sau đó mới set hàm con
4. **POM**
-Là 1 design pattern , để cấu trúc code sạch đẹp
-POM = Class với các properties : thành phần của trang web : các btn, ô text....
-Method là các hành đồng trên web : click, fill, select


