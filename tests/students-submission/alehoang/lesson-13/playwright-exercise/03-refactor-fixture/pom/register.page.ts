
import { Page, expect } from '@playwright/test';
import { MaterialBasePage } from './material.page';

interface ExpectRegisteredData {
    expectUsername: string;
    expectEmail: string;
    expectGender: string;
    expectHobby: string;
    expectCountry: string;
    expectDOB: string;
    expectBio: string;
    expectRating: string;
    expectColor: string;
    expectNewsletter: string;
    expectEnableFeature: string;
    expectStarRating: string;
}

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string = "//input[@id='username']";
    xpathEmail: string = "//input[@id='email']";
    xpathGenderMale: string = "//input[@id='male']";
    xpathGenderFemale: string = "//input[@id='female']";
    xpathHobbyTraveling: string = "//input[@id='traveling']";
    xpathHobbyReading: string = "//input[@id='reading']";
    xpathHobbyCooking: string = "//input[@id='cooking']";
    xpathInterest: string = "//option[@value='sports']";
    cssCountry: string = "#country";
    cssDOB: string = "#dob";
    xpathProfile: string = "//input[@type='file']";
    cssBio: string = "#bio";
    cssRating: string = "#rating";
    cssColor: string = "#favcolor";
    xpathTooltip: string = "//div[@class='tooltip']";
    xpathTooltipText: string = "//span[@class='tooltiptext']";
    cssNewsletter: string = "#newsletter";
    cssStarRating: string = "#starRating";
    cssStarRatingValue: string = "#starRatingValue";
    xpathEnableFeature: string = "//span[@class='slider round']";
    xpathRegisterBtn: string = "//button[text() = 'Register']";

    constructor(page: Page) {
        super(page);
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender(gender: string) {
        if (gender.toLowerCase() === 'male') {
            await this.page.locator(this.xpathGenderMale).check();
        } else if (gender.toLowerCase() === 'female') {
            await this.page.locator(this.xpathGenderFemale).check();
        } else {
            throw new Error(`${gender}: invalid gender`);
        }
    }

    async selectHobbies(hobby: string) {
        if (hobby === "Traveling") {
            await this.page.locator(this.xpathHobbyTraveling).check();
        } else if (hobby === "Reading") {
            await this.page.locator(this.xpathHobbyReading).check();
        } else if (hobby === "Cooking") {
            await this.page.locator(this.xpathHobbyCooking).check();
        } else {
            throw new Error(`${hobby}: invalid hobby`);
        }
    }

    async selectInterests() {
        await this.page.locator(this.xpathInterest).click();
    }

    async selectCountry(country: string) {
        await this.page.locator(this.cssCountry).selectOption(country);
    }

    async fillDOB(dob: string) {
        await this.page.locator(this.cssDOB).fill(dob);
    }

    async uploadFile(filePath: string) {
        await this.page.locator(this.xpathProfile).setInputFiles(filePath);
    }

    async fillBiography(bio: string) {
        await this.page.locator(this.cssBio).fill(bio);
    }

    async fillRating(rating: string) {
        await this.page.locator(this.cssRating).fill(rating);
    }

    async fillColor(color: string) {
        await this.page.locator(this.cssColor).fill(color);
    }

    async clickNewsletter() {
        await this.page.locator(this.xpathTooltip).hover();
        await expect(this.page.locator(this.xpathTooltipText)).toBeVisible();
        await this.page.locator(this.cssNewsletter).click();
    }

    async clickStarRating(xcoordinate: number, ycoordinate: number) {
        await this.page.locator(this.cssStarRating).click({ position: { x: xcoordinate, y: ycoordinate } });
    }

    async getStarRatingValue(): Promise<string | null> {
        const starRatingValue = await this.page.locator("#starRatingValue").textContent();
        return starRatingValue;
    }

    async clickEnableFeature() {
        await this.page.locator(this.xpathEnableFeature).click();
    }

    async clickRegisterBtn() {
        await this.page.locator(this.xpathRegisterBtn).click();
    }

    async verifyRegisteredData(expectRegisteredData: ExpectRegisteredData) {
        for (const data of Object.values(expectRegisteredData)) {
            await expect(this.page.getByRole("cell", { name: data })).toBeVisible();
        }

    }
}
