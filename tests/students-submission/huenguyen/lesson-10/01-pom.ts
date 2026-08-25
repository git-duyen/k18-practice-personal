import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage!: string;
    xpathProductPage!: string;
    cssTodoPage!: string;
    personalNote!: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    openMaterialPage(): void {
    }

    gotoPage(pageName: string): void {
    }
}

export class RegisterPage extends MaterialBasePage {
    xpathUsername!: string;
    xpathEmail!: string;
    xpathGenderMale!: string;
    xpathGenderFemale!: string;

    constructor(page: Page) {
        super(page);
    }

    fillUsername(): void {
    }

    fillEmail(): void {
    }

    checkGender(gender: string): void {
    }
}
