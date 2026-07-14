# BÀI 10: Class extends và Page Object Model
## Phần 1: So sánh Typescript và Javascript

### 1.1 Tổng quan
- TypeScript là superset của JavaScript (nghĩa là mở rộng của JavaScript)
- Ưu điểm khi dùng TypeScript:
   - Có hệ thống kiểu dữ liệu
   - Phát hiện lỗi sớm
   - Interface & type alias
   - OOP features
   - Generic ...
- Dùng TypeScript với lệnh: npx tsx <file_path>

### 1.2 Define type trong typescript
- Có thể định nghĩa kiểu dữ liệu thông qua **type** hoặc **interface**. Định  nghĩa kiểu dữ liệu giúp code rõ ràng, dễ đọc hơn.
- Lưu ý: interface không có dấu =
- Có 2 loại chính:
   - **build-in type**: string, number, boolean,.. => kiểu dữ liệu có sẵn
   - **custom type**: mình tự định nghĩa
```
Ví dụ:
type K18User = {
name: string;
age: number;
yearOfExperience: number;
}

interface K18User2 {
name: string;
address: string;
email: string;
}

const student 1: K18User = {
name: “Van”,
age: 31,
yearOfExperience: 5
};

const student2: K18User2 = {
name: “Vân”
address: “Hanoi”,
email: “test12@gmail.com”
};
```

## Phần 2: Typescript: Kế thừa
### 2.1 Nhắc lại về Class
- Class dùng để mô hình hoá 1 đối tượng: có các thuộc tính (**Property**) và hành vi (**methods**)
```
class LoginPage {
   usernameLoc: string;
   passwordLoc: string;
   rememberMeLoc: boolean;
   btnLoginLoc: string;

   constructor(param1:string, param2: string, param3: boolean, param4:string){
      this.usernameLoc = param1;
      this.passwordLoc = param2;
      this.rememberMeLoc = param3;
      this.btnLoginLoc = param4;
   }



   fillUsername(username: string){
      console.log("Filling User Name", username);
   }

   fillPassword(password: string){
      console.log("Filling Password", password);
   }

   ClickingRemember(){
      console.log("Clicking remember me");
   }

   ClickingButtonLogin(){
      console.log("Clicking button Login");
   }
   //ham không cần dấu ; phía sau
}
```
### 2.2 Extends - kế thừa
Cho phép thừa hưởng các thuộc tính và phương thức từ class cha.
```
class LoginPage {
   usernameLoc: string;
   passwordLoc: string;
   rememberMeLoc: boolean;
   btnLoginLoc: string;

   constructor(param1:string, param2: string, param3: boolean, param4:string){
      this.usernameLoc = param1;
      this.passwordLoc = param2;
      this.rememberMeLoc = param3;
      this.btnLoginLoc = param4;
   }



   fillUsername(username: string){
      console.log("Filling User Name", username);
   }

   fillPassword(password: string){
      console.log("Filling Password", password);
   }

   ClickingRemember(){
      console.log("Clicking remember me");
   }

   ClickingButtonLogin(){
      console.log("Clicking button Login");
   }
   //ham không cần dấu ; phía sau
}

class DashboardPage extends LoginPage {
   headingLoc: string;

   constructor(headingLoc: string, param1: string, param2: string, param3: boolean, param4:string){
      super(param1, param2, param3, param4);
      this.headingLoc = headingLoc;
   }

   ClickMenu(){
      console.log("Clicking to menu");
   }
}

const DashboardPageObj = new DashboardPage("1","2","3",true,"5");
DashboardPageObj.fillUsername("Van");
```
## Phần 3: POM - Page Object Model
- POM là 1 **design pattern** một cấu trúc code giúp sạch đẹp, dễ bảo trì.
- POM = Class với 2 thành phần chính:
   - Properties: các thành phần của trang web (danh từ)
   - Methods: các hành động trên trang web (động từ)

Lưu ý: 
- Hàm tạo POM thường có thuộc tính page. Dùng page này để tương tác với trang web. Thuộc tính page này nếu đã xuất hiện trong POM cha rồi thì không cần định nghĩa ở POM con.
- Không có 1 chuẩn chung nào cho POM. Nó dựa trên nhiều yếu tố như: framwork, ngôn ngữ, sở thích, kinh nghiệm,...

POM
```
import {Page} from '@playwright/test';

export class MyLoginPage {
   page: Page;
   logoXpath: string = "//img[@class='logo']";
   usernameXpath: string = "//input[@id='user_login']";
   passwordXpath: string = "//input[@id='user_pass']";
   rememberMeXpath: string = "//input[@id='remeber_me']";
   loginXpath: string = "//input[@id = 'wp-submit']";

   constructor (page: Page) {
      this.page = page;
   }

   async fillUsername(username:string) {
      await this.page.locator(this.usernameXpath).fill(username);
   }

   async fillPassword(password: string)  {
      await this.page.locator(this.passwordXpath).fill(password);
   }

   async ClickLogin(){
      await this.page.locator(this.loginXpath).click();
   }

}
```
Sử dụng trong test
```
import {expect, test} from '@playwright/test';
import { MyLoginPage } from './05-pom';

test ('Login success', async ({page}) => {
   const loginPage = new MyLoginPage(page);

   await test.step('Goto login page', async () => {
      await loginPage.page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
   });

   await test.step('Fill username', async ()=> {
      await loginPage.fillUsername("betterbytes.academy.admin");
   });

   await test.step('Fill password', async ()=> {
      await loginPage.fillPassword("StrongPass@BetterBytesAcademy");
   });

   await test.step('Click login button', async ()=> {
      await loginPage.ClickLogin();   
   });

   await expect(page.getByRole("heading",{ name: "Dashboard"})).toBeVisible();

});
```