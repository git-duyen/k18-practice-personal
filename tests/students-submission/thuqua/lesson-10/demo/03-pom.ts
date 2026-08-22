import { Page } from "@playwright/test";

export class MyLoginPage {
    page: Page
    logoXpath: string = "//img[@class='logo']";
    usernameXpath: string = "//input[@id='user_login']";
    passwordXpath: string = "//input[@id='user_pass']";
    rememberMeXpath: string = "//input[@id='remember_me']";
    loginXpath: string = "//input[@id='wp-submit']";

    constructor(page: Page) {
        this.page = page;
    }

    async fillUsername(username: string) {
       await this.page.locator(this.usernameXpath).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordXpath).fill(password);
    }

    async clickLogin () {
        await this.page.locator(this.loginXpath).click();
    }
}
