import { Page, Locator, expect } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string = "//a[contains(text(),'Bài học 1: Register Page')]";
    xpathProductPage: string = "//a[text()='Bài học 2: Product page']";
    cssTodoPage: string = "a[href='03-xpath-todo-list.html']";
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalNote = page.locator("text=Bài học 4: Personal notes");
    }
    async openMaterialPage() {
        await this.page.goto('https://material.playwrightvn.com/');
        await expect(this.page).toHaveURL('https://material.playwrightvn.com/')
    };

    async gotoPage(pageName: string) {
        if (pageName === 'Register page') {
            await this.page.locator(this.xpathRegisterPage).click()
        } else if (pageName === 'Product page') {
            await this.page.locator(this.xpathProductPage).click()
        } else if (pageName === 'Todo page') {
            await this.page.locator(this.cssTodoPage).click()
        } else if (pageName === 'Personal notes') {
            await this.personalNote.click()
        }
    }
}
export class RegisterPage extends MaterialBasePage {
    xpathUsername: string = "//input[@id='username']";
    xpathEmail: string = "//input[@id='email']";
    xpathGenderMale: string = "//input[@id='male']";
    xpathGenderFemale: string = "//input[@id='female']";
    xpathSubmitButton: Locator;
    xpathTableRow: Locator;

    constructor(page: Page) {
        super(page);
        this.xpathSubmitButton = page.locator("//button[@type='submit']");
        this.xpathTableRow = page.locator("//table/tbody/tr[last()]");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    };
    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    };
    async checkGender(gender: string) {
        if (gender === 'male') {
            await this.page.locator(this.xpathGenderMale).click();
        } else {
            await this.page.locator(this.xpathGenderFemale).click();
        }
    }
    async clickSubmitButton() {
        await this.xpathSubmitButton.click();
    }
}

export class ProductPage extends MaterialBasePage {
    xpathAddToCartButton1: string = "//button[@data-product-id='1']";
    xpathAddToCartButton2: string = "//button[@data-product-id='2']";
    xpathAddToCartButton3: string = "//button[@data-product-id='3']";
    cssTotalPrice: Locator;

    constructor(page: Page) {
        super(page);
        this.cssTotalPrice = page.locator('td.total-price')
    };

    async addtoCart(productName: string, qty: number) {
        const productSelectors: Record<string, string> = {
            'Product 1': this.xpathAddToCartButton1,
            'Product 2': this.xpathAddToCartButton2,
            'Product 3': this.xpathAddToCartButton3,
        };
        const selector = productSelectors[productName];
        if (selector) {
            await this.page.locator(selector).click({ clickCount: qty });
        }
    };

   getCartQuantity(productName: string) {
        return this.page.locator(`//tbody//tr[td[1][text()='${productName}']]/td[3]`);
    };

    // Cách 2 check total
    // async getTotalPrice() {
    //     return parseFloat(await this.cssTotalPrice.innerText().then(text => text.replace(/[^0-9.]/g, '')));
    // };
}

export class TodoPage extends MaterialBasePage {
    cssInputTask: string = "input#new-task";
    cssAddTask: string = "button#add-task";

    constructor(page: Page) {
        super(page);
    };

    async addTask(newtask: string) {
        await this.page.locator(this.cssInputTask).fill(newtask);
        await this.page.locator(this.cssAddTask).click();
    };

    async deleteTask(tasknumber: number) {
        await this.page.locator(`//button[@id="todo-${tasknumber}-delete"]`).click();
    };
}

export class PersonalNotes extends MaterialBasePage {
    cssTitle: string = "input#note-title";
    cssContent: string = "textarea#note-content";
    cssAddNote: string = "button#add-note";
    cssSearchNotes: string = "input#search";

    constructor(page: Page) {
        super(page);

    };

    async addNote(title: string, content: string) {
        await this.page.locator(this.cssTitle).fill(title);
        await this.page.locator(this.cssContent).fill(content);
        await this.page.locator(this.cssAddNote).click();
    };

    async searchNote(keyword: string) {
        await this.page.locator(this.cssSearchNotes).fill(keyword);
    };

    getNotesLocator() {
        return this.page.locator("//ul//li//div[not(@class)]");
    }
}