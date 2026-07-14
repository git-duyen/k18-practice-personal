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