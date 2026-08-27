import { Page, Locator, expect } from "@playwright/test";

type RegisterUserInfo = {
  username: string;
  email: string;
  gender: string;
};

type ProductInfo = {
  productName: string;
  amount: number;
};

export class MaterialBasepage {
  page: Page;
  registerPageLocator: Locator;
  productPageLocator: Locator;
  todoPageLocator: Locator;
  personalNotePageLocator: Locator;
  //cssTodoPage: string;
  // personalNote: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerPageLocator = page.getByRole("link", {
      name: /Bài học 1: Register Page/,
    });
    this.productPageLocator = page.getByRole("link", {
      name: /Bài học 2: Product page/,
    });
    this.todoPageLocator = page.getByRole("link", {
      name: /Bài học 3: Todo page/,
    });
    this.personalNotePageLocator = page.getByRole("link", {
      name: /Bài học 4: Personal notes/,
    });
  }

  async openMaterialPage() {
    await this.page.goto("https://material.playwrightvn.com/");
  }

  async gotoPage(pageName: string) {
    await this.page.goto(pageName);
  }
}

export class RegisterPage extends MaterialBasepage {
  usernameLocator: Locator;
  emailLocator: Locator;
  genderMaleLocator: Locator;
  genderFemaleLocator: Locator;
  registerBtnLocator: Locator;
  userTableLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameLocator = page.getByRole("textbox", { name: "Username: " });
    this.emailLocator = page.getByRole("textbox", { name: "Email: " });
    this.genderMaleLocator = page.getByRole("radio", {
      name: "Male",
      exact: true,
    });
    this.genderFemaleLocator = page.getByRole("radio", {
      name: "Female",
      exact: true,
    });
    this.registerBtnLocator = page.getByRole("button", { name: "Register" });
    this.userTableLocator = page.locator("tbody tr");
  }

  async fillUsername(username: string) {
    await this.usernameLocator.fill(username);
  }

  async fillEmail(email: string) {
    await this.emailLocator.fill(email);
  }

  async checkGender(gender: string) {
    if (gender === "male") {
      await this.genderMaleLocator.check();
    } else {
      await this.genderFemaleLocator.check();
    }
  }

  getUserRow(username: string) {
    return this.userTableLocator.filter({ hasText: username });
  }

  async clickRegisterBtn() {
    await this.registerBtnLocator.click();
  }

  async openRegisterPage() {
    await this.openMaterialPage();
    await this.registerPageLocator.click();
  }

  async registerUser(user: RegisterUserInfo) {
    await this.fillUsername(user.username);
    await this.fillEmail(user.email);
    await this.checkGender(user.gender);
    await this.clickRegisterBtn();
  }

  async expectUserRegistered(user: RegisterUserInfo) {
    const userRow = this.getUserRow(user.username);

    await expect(userRow).toContainText(user.username);
    await expect(userRow).toContainText(user.email);
    await expect(userRow).toContainText(`Gender: ${user.gender}`);
  }
}

//Product Page
export class ProductItem {
  productLocator: Locator;
  productNameLocator: Locator;
  productPriceLocator: Locator;
  addToCartBtnLocator: Locator;
  amount: number;

  constructor(productLocator: Locator, amount: number) {
    this.productLocator = productLocator;
    this.amount = amount;

    this.productNameLocator = this.productLocator.locator(".product-name");
    this.productPriceLocator = this.productLocator.locator(".product-price");
    this.addToCartBtnLocator = this.productLocator.locator(".add-to-cart");
  }

  async getProductName() {
    return await this.productNameLocator.textContent();
  }

  async getProductPrice(): Promise<number> {
    const price = await this.productPriceLocator.textContent();

    return Number(price?.replace(/[$,]/g, ""));
  }

  async addToCart() {
    for (let i = 0; i < this.amount; i++)
      await this.addToCartBtnLocator.click();
  }
}

export class ProductPage extends MaterialBasepage {
  productLocator: Locator;
  productTableLocator: Locator;
  totalPriceLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.productLocator = page.locator(".product");
    this.productTableLocator = page.locator("#cart-items tr");
    this.totalPriceLocator = page.locator(".total-price");
  }

  getProductItemByName(name: string, amount: number) {
    const productItem = this.productLocator.filter({ hasText: name });
    return new ProductItem(productItem, amount);
  }

  getProductRow(name: string) {
    return this.productTableLocator.filter({ hasText: name });
  }

  async openProductPage() {
    await this.openMaterialPage();
    await this.productPageLocator.click();
  }

  async addProductsToCart(products: ProductInfo[]) {
    for (const product of products) {
      const productItem = this.getProductItemByName(
        product.productName,
        product.amount,
      );

      await productItem.addToCart();
    }
  }

  async expectProductsInCart(products: ProductInfo[]) {
    let totalPrice = 0;

    for (const product of products) {
      const productItem = this.getProductItemByName(
        product.productName,
        product.amount,
      );
      const price = await productItem.getProductPrice();
      const productRow = this.getProductRow(product.productName);

      totalPrice += price * product.amount;
      await expect(productRow.locator("td").nth(2)).toHaveText(
        product.amount.toString(),
      );
    }

    await expect(this.totalPriceLocator).toHaveText(
      `$${totalPrice.toFixed(2)}`,
    );
  }
}

//Todo Page
export class TodoPage extends MaterialBasepage {
  todoLocator: Locator;
  addTaskBtn: Locator;
  todoItemLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.todoLocator = page.getByRole("textbox", { name: "Enter a new task" });
    this.addTaskBtn = page.getByRole("button", { name: "Add Task" });
    this.todoItemLocator = page.locator("li");
  }

  getTodo(todoText: string) {
    return this.todoItemLocator.filter({
      has: this.page.getByText(todoText, { exact: true }),
    });
  }

  async addATodoTask(number: number) {
    await this.todoLocator.fill(`Todo ${number}`);
    await this.addTaskBtn.click();
  }

  async addMultiTodoTask(number: number) {
    for (let i = 1; i <= number; i++) {
      await this.addATodoTask(i);
    }
  }

  async deleteATodoTask(number: number) {
    const todoItem = this.getTodo(`Todo ${number}`);
    await todoItem.getByRole("button", { name: "Delete" }).click();
  }
  async acceptDialog() {
    this.page.on("dialog", (dialog) => dialog.accept());
  }

  async deleteOddTodoTask(number: number) {
    for (let i = 1; i < number; i += 2) {
      await this.deleteATodoTask(i);
    }
  }

  async expectTodoVisible(number: number) {
    await expect(this.getTodo(`Todo ${number}`)).toBeVisible();
  }

  async expectTodoNotVisible(number: number) {
    await expect(this.getTodo(`Todo ${number}`)).toBeHidden();
  }
}

interface Note {
  title: string;
  content: string;
}

//Personal Note
export class PersonalNotePage extends MaterialBasepage {
  titleLocator: Locator;
  contentLocator: Locator;
  addNoteBtnLocator: Locator;
  searchNoteLocator: Locator;
  noteItemLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = page.getByRole("textbox", { name: "Title:" });
    this.contentLocator = page.getByRole("textbox", { name: "Content:" });
    this.addNoteBtnLocator = page.getByRole("button", { name: "Add Note" });
    this.searchNoteLocator = page.getByRole("textbox", {
      name: "Search Notes:",
    });
    this.noteItemLocator = page.locator("li");
  }

  async openPersonalNotePage() {
    await this.openMaterialPage();
    await this.personalNotePageLocator.click();
  }

  async addANote(title: string, content: string) {
    await this.titleLocator.fill(title);
    await this.contentLocator.fill(content);
    await this.addNoteBtnLocator.click();
  }

  async addMultiNote(notes: Note[]) {
    for (const note of notes) {
      await this.addANote(note.title, note.content);
    }
  }

  async searchNote(key: string) {
    await this.searchNoteLocator.fill(key);
  }

  async expectKeywordSearch() {
    const key = await this.searchNoteLocator.inputValue();
    const notes = this.noteItemLocator;

    const count = await notes.count();

    for (let i = 0; i < count; i++) {
      const noteText = await notes.nth(i).innerText();

      expect(noteText.toLowerCase()).toContain(key.toLowerCase());
    }
  }
}
