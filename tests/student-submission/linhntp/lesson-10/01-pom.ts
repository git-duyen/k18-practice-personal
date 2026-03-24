import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
    protected page: Page;
    xpathRegisterPage: string = "//a[text() = 'Bài học 1: Register Page (có đủ các element)']";
    xpathProductPage: string = "//a[text() = 'Bài học 2: Product page']";
    cssTodoPage: string = 'a:has-text("Bài học 3: Todo page")';
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalNote = this.page.locator('');
    }

    async openMaterialPage() {
        await this.page.goto('https://material.playwrightvn.com/');
    }

    async gotoPage(pageName: 'register' | 'product' | 'todo') {
        console.log(`Đang đi đến trang: ${pageName}`);
    }
}

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string = '//input[@id="username"]';
    xpathEmail: string = '//input[@id="email"]';
    xpathGenderMale: string = '//input[@id="male"]';
    xpathGenderFemale: string = '//input[@id="female"]';

    constructor(page: Page) {
        super(page);
    }

    async fillUsername(username: string) {
        await this.page.fill(this.xpathUsername, username);
    }

    async fillEmail(email: string) {
        await this.page.fill(this.xpathEmail, email);
    }

    async checkGender(gender: string) {
        if (gender === 'male') {
            await this.page.locator(this.xpathGenderMale).check();
        } else {
            await this.page.locator(this.xpathGenderFemale).check();
        }
    }
}