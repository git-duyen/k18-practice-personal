import {Page} from "@playwright/test";
import {Locator} from "@playwright/test";
class MaterialBasePage {
    page : Page;
    url : string = 'https://material.playwrightvn.com/';
    xpathRegisterPage : string = '//a[text()="Bài học 1: Register Page (có đủ các element)"]';
    XpathProductPage : string = '//a[text()="Bài học 2: Product page"]';
    cssTodoPage : string = 'a[text()="Bài học 3: Todo page"]';
    personalNote : Locator ;
    constructor(page: Page) {
        this.page = page;
        this.personalNote = this.page.locator('//a[text()="Bài học 4: Personal notes"]');
        
    }
     async openMaterialPage () {
        await this.page.goto(this.url);
    }
    async gotoPage(pageName: string) {
        await this.page.goto(this.XpathProductPage);
    } 
    async gotoPersonalNotePage() {
        await this.personalNote.click();
    }  
}
export class RegisterPage extends MaterialBasePage {
    xpathUsername : string = '//input[@id="username"]';
    xpathEmail : string = '//input[@id="email"]';
    xpathGenderMale : string = '//input[@id="male"]';
    xpathGenderFemale : string ='//input[@id="female"]';
    xpathReading : string = '//input[@id="reading"]';
    xpathInteresting : string = '//input[@id="interesting"]';
    xpathCountry : string = '//select[@id="country"]';
    xpathDateOfBirth : string = '//input[@id="dob"]';
    xpathProfilePicture : string = '//input[@id="profile"]';
    xpathBiography : string = '//textarea[@id="bio"]';
    xpathRating : string = '//input[@id="rating"]';
    xpathFavoriteColor : string = '//input[@id="favcolor"]';
    xpathNewsletterTooltip : string = '//input[@id="newsletter"]';
    xpathEnableFeature : string = '//input[@id="toggleOption"]';
    xpathStarRating : string = '//input[@id="rating"]';
    xpathCustomDate : string = '//input[@id="customDate"]';
    xpathSubmitButton : string = '//button[@type="submit"]';
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
        if (gender === 'male') {
            await this.page.locator(this.xpathGenderMale).check();
        } else if (gender === 'female') {
            await this.page.locator(this.xpathGenderFemale).check();
        }
    }
}
    export class PersonalNotePage extends MaterialBasePage {
        XpathTitle : string = '//input[@id="note-title"]';
        XpathContent : string = '//textarea[@id="note-content"]';
        XpathAddNoteButton : string = '//button[@id="add-note"]';
        XpathSearch : string = '//input[@id="search"]';
        constructor(page: Page) {
            super(page);
        }
        async addNote(title: string, content: string) {
            await this.page.locator(this.XpathTitle).fill(title);
            await this.page.locator(this.XpathContent).fill(content);
            await this.page.locator(this.XpathAddNoteButton).click();
        }
        async searchNote(notes: string) {
            await this.page.locator(this.XpathSearch).fill(notes);
        }

    }


    


