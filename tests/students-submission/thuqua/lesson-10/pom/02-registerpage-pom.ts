import { Page, Locator, expect } from "@playwright/test";
import {MateriaBasePage} from './01-materiapage-pom'
export class RegisterPage extends MateriaBasePage {
    xpathUsername: string;
    xpathEmail: string
    xpathGenderMale: string;
    xpathGenderFemale: string;
    xpathHobbiesReading: string;
    xpathHobbiesTraveling: string;
    xpathHobbiesCooking: string;
    xpathInterests: string;
    xpathCountry: string;
    xpathDateOfBirth: string;
    xpathProfilePicture: string;
    xpathBio: string;
    xpathRating: string;
    xpathFavoriteColor: string;
    xpathNewsletter: string;
    xpathEnableFeature: string;
    xpathCheckEnableFeature: string;
    xpathStarRating: string;
    xpathClickRegister: string;
    xpathTableRows: string;

    constructor(page: Page) {
        super(page);
        this.xpathUsername = "//input[@id = 'username']";
        this.xpathEmail = "//input[@id = 'email']";
        this.xpathGenderMale = "//input[@id = 'male']";
        this.xpathGenderFemale = "//input[@id = 'female']";
        this.xpathHobbiesReading = "//input[@id = 'reading']";
        this.xpathHobbiesTraveling = "//input[@id = 'traveling']";
        this.xpathHobbiesCooking = "//input[@id = 'cooking']";
        this.xpathInterests = "//select[@id = 'interests']";
        this.xpathCountry = "//select[@id = 'country']";
        this.xpathDateOfBirth = "//input[@id = 'dob']";
        this.xpathProfilePicture = "//input[@id = 'profile']";
        this.xpathBio = "//textarea[@id = 'bio']";
        this.xpathRating = "//input[@id = 'rating']";
        this.xpathFavoriteColor = "//input[@id = 'favcolor']";
        this.xpathNewsletter = "//input[@id = 'newsletter']";
        this.xpathEnableFeature = "//input[@id = 'toggleOption']";
        this.xpathCheckEnableFeature = "//label[@class = 'switch']";
        this.xpathStarRating = "//div[@id = 'starRating']";
        this.xpathClickRegister = "//button[text() = 'Register']";
        this.xpathTableRows = "//table//tbody/tr";
    }

    // fill username
    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    // fill email
    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    // check gender
    async checkGender(gender: string) {
        let xpathSelected;
        if (gender === 'male') {
            xpathSelected = this.xpathGenderMale;
        } else {
            xpathSelected = this.xpathGenderFemale;
        }
        await this.page.locator(xpathSelected).check();
    }

    // check hobby
    async checkHobbies(hobby: string) {
        let xpathSelected;
        if (hobby === 'reading') {
            xpathSelected = this.xpathHobbiesReading;
        } else if (hobby === 'traveling') {
            xpathSelected = this.xpathHobbiesTraveling;
        } else {
            xpathSelected = this.xpathHobbiesCooking;
        }
        await this.page.locator(xpathSelected).check();
    }

    // select interests
    async selectInterests(interest: string) {
        await this.page.locator(this.xpathInterests).selectOption(interest);
    }

    // select country
    async selectCountry(country: string) {
        await this.page.locator(this.xpathCountry).selectOption(country);
    }

    // select DoB
    async selectDateOfBirth(dob: string) {
        await this.page.locator(this.xpathDateOfBirth).fill(dob);
    }

    // upload profile picture
    async uploadProfilePicture(filePath: string) {
        await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
    }

    // fill bio
    async fillBio(bio: string) {
        await this.page.locator(this.xpathBio).fill(bio);
    }

    // fill rating
    async fillRating(rating: string) {
        await this.page.locator(this.xpathRating).fill(rating);
    }

    // fill favorite color
    async fillFavoriteColor(color: string) {
        await this.page.locator(this.xpathFavoriteColor).fill(color);
    }

    // check newsleter
    async checkNewsletter() {
        await this.page.locator(this.xpathNewsletter).check();
    }

    // check toggle
    async checkEnableFeature() {
        const isCheckedToggle = await this.page.locator(this.xpathEnableFeature).isChecked();
        if (!isCheckedToggle) {
            await this.page.locator(this.xpathCheckEnableFeature).click();
        }
    }

    // select start rating
    async selectStarRating(rating: number) {
        const starRatingLocator = this.page.locator(this.xpathStarRating);
        await expect(starRatingLocator).toBeVisible();

        const box = await starRatingLocator.boundingBox();
        await this.page.mouse.click(
            box!.x + box!.width * 0.90,
            box!.y + box!.height / 2
        )
    }

    // click register
    async clickRegister() {
        await this.page.locator(this.xpathClickRegister).click();
    }

    async getLastRegisteredRowDetails() {
        const lastRow = this.page.locator(this.xpathTableRows).last();
        const cells = lastRow.locator('td');

        const username = await cells.nth(1).innerText();
        const email = await cells.nth(2).innerText();
        const detailsText = await cells.nth(3).innerText();

        return { username, email, detailsText };
    }

    async verifyRegisteredData(expectedUsername: string, expectedEmail: string, expectedDetails: Record<string, string>) {
        const { username, email, detailsText } = await this.getLastRegisteredRowDetails();

        expect(username).toBe(expectedUsername);
        expect(email).toBe(expectedEmail);
        for (const [label, value] of Object.entries(expectedDetails)) {
            expect(detailsText).toContain(`${label}: ${value}`);
        }
    }
}