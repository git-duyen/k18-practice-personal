import { Page, Locator } from '@playwright/test';

class MaterialBasePage {
    page: Page;
    xpathRegisterPage!: string;
    xpathProductPage!: string;
    cssToDoPage!: string;
    personalNote!: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialBasePage() {
        
    }

    async goToPage(pageName: string) {

    }

}

class MaterialRegisterPage extends MaterialBasePage {
    xpathUsername!: string;
    xpathEmail!: string;
    xpathGenderMale!: string;
    xpathGenderFemale!: string;

    async fillUserName() {

    }

    async fillEmail() {

    }

    async checkGender(gender: string) {

    }
   
}