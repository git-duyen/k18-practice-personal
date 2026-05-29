import { Page } from "@playwright/test";
import { MaterialPage } from "../fixture.ts";

export class RegisterPage extends MaterialPage {
    readonly xpathUsername = this.page.getByRole("textbox", { name: "Username" });
    readonly xpathEmail = this.page.getByRole("textbox", { name: "Email" });
    readonly xpathGenderMale = this.page.getByRole('radio', { name: 'Male', exact: true });
    readonly xpathHobbies = this.page.getByRole('checkbox', { name: 'Traveling', exact: true });
    readonly xpathInterests = this.page.getByRole('combobox', { name: 'Interests:' });
    readonly xpathCountry = this.page.getByRole('combobox', { name: 'Country:' });
    readonly xpathSubmitButton = this.page.getByRole('button', { name: 'Register' });

    constructor(page: Page) {
        super(page); 
    } 
    
    async fillUsername() {
        await this.xpathUsername.fill("ThanhLong");
    }

    async fillEmail() {
        await this.xpathEmail.fill("thanhlong@gmail.com");
    }

    async checkGender() {
        await this.xpathGenderMale.click();
    }

    async checkHobbies() {
        await this.xpathHobbies.click();
    }

    async selectInterests(interests: string) {
        await this.xpathInterests.selectOption(interests);
    }

    async selectCountry(country: string) {
        await this.xpathCountry.selectOption(country);
    }

    async clickSubmitButton() {
        await this.xpathSubmitButton.click();
    }
}