import { Page, Locator } from '@playwright/test'

export class MaterialBasePage {
    readonly page: Page;
    readonly xpathRegisterPage: string;
    readonly xpathProductPage: string;
    readonly cssTodoPage: string;
    readonly personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = '';
        this.xpathProductPage = '';
        this.cssTodoPage = '';
        this.personalNote = page.locator('');
    };

    async openMaterialPage() {

    };
    async gotoPage(pageName: string) {

    };
};

export class RegisterPage extends MaterialBasePage {
    readonly xpathUsername: string;
    readonly xpathEmail: string;
    readonly xpathGenderMale: string;
    readonly xpathGenderFemale: string;

    constructor(page: Page) {
        super(page);
        this.xpathUsername = '';
        this.xpathEmail = '';
        this.xpathGenderMale = '';
        this.xpathGenderFemale = '';
    };

    async fillUsername() {

    };

    async fillEmail() {

    };

    async checkGender(gender: string) {

    };
}