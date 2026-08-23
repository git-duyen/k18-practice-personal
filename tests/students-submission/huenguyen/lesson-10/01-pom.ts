import { Locator, Page } from "@playwright/test";

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string = "//a[contains(text(), 'Register Page')]";
  xpathProductPage: string = "//a[contains(text(), 'Product page')]";
  cssTodoPage: string = "//a[contains(text(), 'Todo page')]";
  personalNote: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalNote = this.page.locator(
      "//a[contains(text(), 'Personal notes')]",
    );
  }

  async openMaterialPage() {
    await this.page.goto("https://material.playwrightvn.com/");
  }

  async gotoPage(pageName: string) {
    switch (pageName) {
      case "Register Page":
        await this.page.locator(this.xpathRegisterPage).click();
        break;
      case "Product page":
        await this.page.locator(this.xpathProductPage).click();
        break;
      case "Todo page":
        await this.page.locator(this.cssTodoPage).click();
        break;
    }
  }
}

export class RegisterPage extends MaterialBasePage {
  xpathUsername: string = "//input[@id='username']";
  xpathEmail: string = "//input[@id='email']";
  xpathGenderMale: string = "//input[@id='male']";
  xpathGenderFemale: string = "//input[@id='female']";
  xpathRegister: string = "//button[@type='submit']";

  constructor(page: Page) {
    super(page);
  }

  async fillUsername(userName: string) {
    await this.page.locator(this.xpathUsername).fill(userName);
  }

  async fillEmail(email: string) {
    await this.page.locator(this.xpathEmail).fill(email);
  }

  async checkGender(gender: string) {
    if (gender === "female") {
      await this.page.locator(this.xpathGenderFemale).check();
    } else {
      await this.page.locator(this.xpathGenderMale).check();
    }
  }
  async clickBtnRegister() {
    await this.page.locator(this.xpathRegister).click();
  }
}

export class ProductPage extends MaterialBasePage {
  xpathAddProduct = (id: string) => `//button[@data-product-id='${id}']`;

  constructor(page: Page) {
    super(page);
  }

  async addProduct(id: string, count: number) {
    for (let i = 0; i < count; i++) {
      await this.page.locator(this.xpathAddProduct(id)).click();
    }
  }
}

export class ToDoPage extends MaterialBasePage {
  xpathNewTask: string = "//input[@id='new-task']";
  xpathAddTask: string = "//button[@id='add-task']";
  xpathDeleteTask = (i: number) => `//button[@id='todo-${i}-delete']`;

  constructor(page: Page) {
    super(page);
  }

  async addTask(quantity: number) {
    for (let i = 1; i <= quantity; i++) {
      await this.page.locator(this.xpathNewTask).fill(`Todo ${i}`);
      await this.page.locator(this.xpathAddTask).click();
    }
  }

  async deleteTask(quantity: number) {
    this.page.on("dialog", async (dialog) => dialog.accept());
    for (let i = 1; i <= quantity; i += 2) {
      await this.page.locator(this.xpathDeleteTask(i)).click();
    }
  }
}

export class PersonalNote extends MaterialBasePage {
  xpathTitle: string = "//input[@id='note-title']";
  xpathContent: string = "//textarea[@id='note-content']";
  xpathAddNote: string = "//button[@id='add-note']";
  xpathSearchNote: string = "//input[@id='search']";

  constructor(page: Page) {
    super(page);
  }

  async addNotes(notes: any) {
    for (const note of notes) {
      await this.page.locator(this.xpathTitle).fill(note.title);
      await this.page.locator(this.xpathContent).fill(note.content);
      await this.page.locator(this.xpathAddNote).click();
    }
  }

  async searchNote (keyword: string) {
    await this.page.locator(this.xpathSearchNote).fill(keyword);
  }
}
