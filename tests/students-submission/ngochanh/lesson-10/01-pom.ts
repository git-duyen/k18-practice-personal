import { Locator, Page } from "@playwright/test";

class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page){
        this
    }
    openMaterialPage() : void {}
    gotoPage(pageName: string) : void {}
}

class RegisterPage extends MaterialBasePage {
    xpathUsername: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page){
        super(page);
    }
    fillUsername() : void {}
    fillEmail() : void {}
    checkGender(gender: string) : void {}
}
