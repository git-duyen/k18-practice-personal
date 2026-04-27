import { Page, Locator, expect } from '@playwright/test';

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string = "//a[contains(text(), 'Bài học 1: Register Page')]";
  xpathProductPage: string = "//a[contains(text(), 'Bài học 2: Product page')]";
  cssToDoPage: string = "a[href='03-xpath-todo-list.html']";
  personalNote: Locator;

  constructor(page: Page) {
    this.page = page;

    this.personalNote = this.page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]");
  }

  async openMaterialPage() {
    await this.page.goto('https://material.playwrightvn.com/');
  }

  async gotoPage(pageName: string) {
    switch (pageName) {
      case 'register':
        await this.page.locator(this.xpathRegisterPage).click();
        break;
      case 'product':
        await this.page.locator(this.xpathProductPage).click();
        break;
      case 'todo':
        await this.page.locator(this.cssToDoPage).click();
        break;
      case 'note':
        await this.personalNote.click();
        break;
      default:
        throw new Error(`Page ${pageName} chưa được define`);
    }
  }
}

export class RegisterPage extends MaterialBasePage {
  xpathUsername = "//input[@id='username']";
  xpathEmail = "//input[@id='email']";
  xpathGenderMale = "//input[@id='male']";
  xpathGenderFemale = "//input[@id='female']";
  xpathHobbieReading = "//input[@id='reading']";
  xpathHobbieTraveling = "//input[@id='traveling']";
  xpathHobbieCooking = "//input[@id='cooking']";
  xpathInterest = "//select[@id='interests']";
  xpathCountry = "//select[@id='country']";
  xpathDoB = "//input[@id='dob']";
  xpathProfilePicture = "//input[@id='profile']";
  xpathBiography = "//textarea[@id='bio']";
  xpathRating = "//input[@id='rating']";
  xpathFavoriteColor = "//input[@id='favcolor']";
  xpathNewsletter = "//input[@id='newsletter']";
  xpathEnableFeature = "//label[@class='switch']";
  xpathStarRating = "//div[@id='starRating']";
  xpathRegister = "//button[text()='Register']";

  async fillUsername(username: string) {
    await this.page.locator(this.xpathUsername).fill(username);
  }

  async fillEmail(email: string) {
    await this.page.locator(this.xpathEmail).fill(email);
  }

  async checkGender(gender: 'male' | 'female') {
    if (gender === 'male') {
      await this.page.locator(this.xpathGenderMale).check();
    } else {
      await this.page.locator(this.xpathGenderFemale).check();
    }
  }

  async checkHobbies(hobbies: string[]) {
    for (const hobby of hobbies) {
      switch (hobby) {
        case 'reading':
          await this.page.locator(this.xpathHobbieReading).check();
          break;
        case 'traveling':
          await this.page.locator(this.xpathHobbieTraveling).check();
          break;
        case 'cooking':
          await this.page.locator(this.xpathHobbieCooking).check();
          break;
      }
    }
  }

  async selectInterest(values: string[]) {
    await this.page.locator(this.xpathInterest).selectOption(values);
  }

  async selectCountry(country: string) {
    await this.page.locator(this.xpathCountry).selectOption(country);
  }

  async fillDOB(dob: string) {
    await this.page.locator(this.xpathDoB).fill(dob);
  }

  async uploadAvatar(filePath: string) {
    await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
  }

  async fillBio(text: string) {
    await this.page.locator(this.xpathBiography).fill(text);
  }

  async fillRating(value: string) {
    await this.page.locator(this.xpathRating).fill(value);
  }

  async pickColor(color: string) {
    await this.page.locator(this.xpathFavoriteColor).fill(color);
  }

  async subscribeNewsletter() {
    await this.page.locator(this.xpathNewsletter).check();
  }

  async toggleFeature() {
    await this.page.locator(this.xpathEnableFeature).click();
  }

  async rateStar(x: number, y: number) {
    await this.page.locator(this.xpathStarRating).click({ position: { x, y } });
  }

  async clickBtnSubmit() {
    await this.page.locator(this.xpathRegister).click();
  }

  async verifyUserInfo(data: {
    name: string;
    email: string;
    gender: string;
    country: string;
    dob: string;
    biography: string;
    rating: string;
    color: string;
    newsletter: boolean;
    enableFeature: boolean;
    starRating: string;
  }) {
    const firstRow = this.page.locator('#userTable tbody tr').first();
    const infoCell = firstRow.locator('td').nth(3);

    // Verify thông tin trong các cột Username và Email
    await expect(firstRow.locator('td').nth(1)).toHaveText(data.name);
    await expect(firstRow.locator('td').nth(2)).toHaveText(data.email);

    // Verify các dòng text trong cột Information
    await expect(infoCell).toContainText(`Gender: ${data.gender.toLowerCase()}`);
    await expect(infoCell).toContainText(`Country: ${data.country.toLowerCase()}`);
    await expect(infoCell).toContainText(`Date of Birth: ${data.dob}`);
    await expect(infoCell).toContainText(`Biography: ${data.biography}`);
    await expect(infoCell).toContainText(`Rating: ${data.rating}`);
    await expect(infoCell).toContainText(`Favorite Color: ${data.color}`);
    const expectedNewsletter = data.newsletter ? 'Yes' : 'No';
    await expect(infoCell).toContainText(`Newsletter: ${expectedNewsletter}`);
    const expectedFeature = data.enableFeature ? 'Yes' : 'No';
    await expect(infoCell).toContainText(`Enable Feature: ${expectedFeature}`);
    await expect(infoCell).toContainText(`Star Rating: ${data.starRating}`);
  }
}

export class ProductPage extends MaterialBasePage {
  async addProduct(id: number, quantity: number) {
    await this.page.locator(`//button[@data-product-id='${id}']`).click({ clickCount: quantity });
  }

  async verifyProductQuantity(productName: string, expectedQty: number) {
    const row = this.page.getByRole('row', { name: productName });
    const quantityText = await row.getByRole('cell').nth(2).textContent();
    await expect(Number(quantityText)).toBe(expectedQty);
  }

  async verifyTotalPrice(expectedTotal: number) {
    const totalText = await this.page.locator('.total-price').textContent();
    const actualTotal = Number(totalText?.replace(/[^0-9.]/g, ''));
    await expect(actualTotal).toBe(expectedTotal);
  }
}

export class TodoPage extends MaterialBasePage {
  xpathInput: string = "//input[@id='new-task']";
  xpathAddBtn: string = "//button[@id='add-task']";

  async addTodos(total: number) {
    for (let i = 1; i <= total; i++) {
      await this.page.locator(this.xpathInput).fill(`Todo ${i}`);
      await this.page.click(this.xpathAddBtn);
    }
  }

  async deleteOdd(total: number) {
    this.page.on('dialog', async (d) => d.accept());

    for (let i = 1; i <= total; i++) {
      if (i % 2 !== 0) {
        await this.page.locator(`//li[.//span[text()='Todo ${i}']]//button[text()='Delete']`).click();
      }
    }
  }

  async verifyVisible(index: number) {
    const visible = this.page.locator(`//span[text()='Todo ${index}']`);
    await expect(visible).toBeVisible();
  }

  async verifyNotExist(index: number) {
    const invisible = this.page.locator(`//span[text()='Todo ${index}']`);
    await expect(invisible).not.toBeVisible();
  }
}

export class PersonalNotePage extends MaterialBasePage {
  xpathTitleInput: string = "//input[@id='note-title']";
  xpathContentInput: string = "//textarea[@id='note-content']";
  xpathAddBtn: string = "//button[@id='add-note']";
  xpathSearchInput: string = "//input[@id='search']";
  xpathNoteItems: string = "//ul[@id='notes-list']/li";

  async addNotes(arrNote: { title: string; description: string }[]) {
    for (const note of arrNote) {
      await this.page.locator(this.xpathTitleInput).fill(note.title);
      await this.page.locator(this.xpathContentInput).fill(note.description);
      await this.page.locator(this.xpathAddBtn).click();
    }
  }

  async search(keyword: string) {
    await this.page.locator(this.xpathSearchInput).fill('');
    await this.page.locator(this.xpathSearchInput).fill(keyword);
  }

  async verifySearchResult(keyword: string) {
    const count = await this.page.locator(this.xpathNoteItems).count();

    for (let i = 0; i < count; i++) {
      const item = this.page.locator(this.xpathNoteItems).nth(i);
      const title = await item.locator('strong').innerText();
      const description = await item.locator('p').innerText();

      const combinedText = `${title} ${description}`.toLowerCase();
      expect(combinedText).toContain(keyword.toLowerCase());
    }
  }
}
