import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";

export class MaterialBasePage {
page: Page;
xpathRegisterPage: string;
xpathProductPage: string; 
cssTodoPage: string ;
personalNote: Locator ;

constructor(page:Page){
   this.page = page;
   this.xpathRegisterPage = "//a[@href = '01-xpath-register-page.html']";
   this.xpathProductPage ="//a[text()='Bài học 2: Product page']";
   this.cssTodoPage = "//a[text()='Bài học 3: Todo page']";
   this.personalNote = page.locator("//a[text()='Bài học 4: Personal notes']")  ;
}

async openMaterialPage(){
   await this.page.goto("https://material.playwrightvn.com/")
}

async gotoPage(pageName:string){
   await this.page.getByText(`${pageName}`).click();
}
}

//class Bài 1
export class RegisterPage extends MaterialBasePage {
   xpathUsername: string ;
   xpathEmail: string ;
   xpathGenderMale: string ; 
   xpathGenderFemale: string ;

   constructor(page:Page){
      super(page);
      this.xpathUsername = "//input[@id = 'username']";
      this.xpathEmail = "//input[@id = 'email']";
      this.xpathGenderMale = "//input[@id = 'male']";
      this.xpathGenderFemale = "//input[@id = 'female']";
   }

   async fillUsername(username: string){
      await this.page.locator(this.xpathUsername).fill(username);
   }

   async fillEmail(email: string){
      await this.page.locator(this.xpathEmail).fill(email);
   }

   async checkGender(gender:string){
      if(gender === "Male"){
         await this.page.locator(this.xpathGenderMale).click();
      }             
      if(gender === "Female"){
         await this.page.locator(this.xpathGenderFemale).click();
      }
   }

}

//Class bài 2
export class AddProduct extends MaterialBasePage {
   xpathAddtoCartPrd1: string ;
   xpathAddtoCartPrd2: string ;
   xpathAddtoCartPrd3: string ; 

   constructor(page:Page){
      super(page);
      this.xpathAddtoCartPrd1 = "//button[@data-product-id='1']";
      this.xpathAddtoCartPrd2 = "//button[@data-product-id='2']";
      this.xpathAddtoCartPrd3 = "//button[@data-product-id='3']";
   }

   async addToCart1(){
      await this.page.locator(this.xpathAddtoCartPrd1).click();
   }

   async addToCart2(){
      await this.page.locator(this.xpathAddtoCartPrd2).click();
   }

   async addToCart3(){
      await this.page.locator(this.xpathAddtoCartPrd3).click();
   }
   
}

//Class bài 3

export class AddNewItem extends MaterialBasePage {
   xpathNewitem: string;
   xpathBtnAddTask: string;

   constructor(page: Page){
      super(page);
      this.xpathNewitem = "//input[@id='new-task']";
      this.xpathBtnAddTask = "//button[@id='add-task']";
   }

   async addItem(itemname: string){
      await this.page.locator(this.xpathNewitem).fill(itemname);
      await this.page.locator(this.xpathBtnAddTask).click();
   }

   async deteleItem(){
      for(let a = 0; a <= 100; a++){
         if(a%2!=0){
         await this.page.locator(`//button[@id='todo-${a}-delete']`).click();
      }
      }
   }

}

//Class bài 4

export class AddNote extends MaterialBasePage {
   xpathTitle: string;
   xpathContent: string;
   xpathSearch: string;
   xpathBtnAddNote: string;

   constructor(page: Page){
      super(page);
      this.xpathTitle = "//input[@id = 'note-title']";
      this.xpathContent = "//textarea[@id = 'note-content']";
      this.xpathSearch = "//input[@id = 'search']";
      this.xpathBtnAddNote = "//button[@id = 'add-note']";
   }

   async addNote (title: string, content: string){
      await this.page.locator(this.xpathTitle).fill(title);
      await this.page.locator(this.xpathContent).fill(content);
      await this.page.locator(this.xpathBtnAddNote).click();
   }

   async searchNote(keyword: string){
      await this.page.locator(this.xpathSearch).fill(keyword);
   }
}

