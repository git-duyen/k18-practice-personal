import { Page, Locator, expect } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    registerLink: Locator;
    productLink: Locator;
    toDoList: Locator;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']");
        this.productLink = page.locator("//a[text() = 'Bài học 2: Product Page (có đủ các element)']");
        this.toDoList = page.locator("//a[text()='Bài học 3: Todo page']");
        this.personalNote = page.locator("//a[text()='Bài học 4: Personal notes']");
    }

    async openMaterialBasePage() {
        await this.page.goto('https://material.playwrightvn.com/');
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
    xpathUsername: Locator;
    xpathEmail: Locator;
    xpathGenderMale: Locator;
    xpathGenderFemale: Locator;

    constructor(page: Page) {
        super(page);
        this.xpathUsername = page.locator("//input[@id='username']");
        this.xpathEmail = page.locator("//input[@id='email']");
        this.xpathGenderMale = page.locator("//input[@id='male']");
        this.xpathGenderFemale = page.locator("//input[@id='female']");
    }
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

export class RegisterPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly femaleRadio: Locator;
    readonly travelingCheckbox: Locator;
    readonly interestsSelect: Locator;
    readonly countrySelect: Locator;
    readonly dobInput: Locator;
    readonly fileInput: Locator;
    readonly bioTextarea: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("//input[@id='username']");
        this.emailInput = page.locator("//input[@id='email']");
        this.femaleRadio = page.locator("//input[@id='female']");
        this.travelingCheckbox = page.locator("//input[@id='traveling']");
        this.interestsSelect = page.locator("//select[@id='interests']");
        this.countrySelect = page.locator("//select[@id='country']");
        this.dobInput = page.locator("//input[@id='dob']");
        this.fileInput = page.locator("//input[@type='file']");
        this.bioTextarea = page.locator("//textarea[@id='bio']");
        this.submitButton = page.locator("//button[@type='submit']");
    }

    async fillUsernameEmail(username: string, email: string) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
    }

    async verifyUsernameEmail(username: string, email: string) {
        await expect(this.usernameInput).toHaveValue(username);
        await expect(this.emailInput).toHaveValue(email);
    }

    async checkGenderFemale() {
        await this.femaleRadio.check();
    }

    async isFemaleChecked(): Promise<boolean> {
        return await this.femaleRadio.isChecked();
    }

    async verifyFemaleChecked() {
        await expect(this.femaleRadio).toBeChecked();
    }

    async selectHobbyTraveling() {
        await this.travelingCheckbox.check();
    }

    async isTravelingChecked(): Promise<boolean> {
        return await this.travelingCheckbox.isChecked();
    }
    
    async verifyTravelingChecked() {
        await expect(this.travelingCheckbox).toBeChecked();
    }

    async selectInterests(options: string[]) {
        await this.interestsSelect.selectOption(options);
    }

    async verifyInterestsSelected(labels: string[]) {
    const selectedTexts = await this.interestsSelect.locator('option:checked').allTextContents();
    expect(selectedTexts).toEqual(labels);
}

    async selectCountry(country: string) {
        await this.countrySelect.selectOption(country);
    }

    async verifyCountrySelected(country: string) {
        await expect(this.countrySelect).toHaveValue(await this.getOptionValue(this.countrySelect, country));
    }

    private async getOptionValue(select: Locator, label: string): Promise<string> {
    return await select.locator(`option:has-text("${label}")`).getAttribute('value') ?? '';
    }

    async fillDob(dob: string) {
        await this.dobInput.fill(dob);
    }
        
    async verifyDob(dob: string) {
        await expect(this.dobInput).toHaveValue(dob);
    }

    async uploadProfilePic(filePath: string) {
        await this.fileInput.setInputFiles(filePath);
    }

    async verifyFileUploaded(fileName: string) {
        const files = await this.fileInput.evaluate((el: HTMLInputElement) =>
            Array.from(el.files ?? []).map(f => f.name)
        );
        expect(files).toContain(fileName);
    }

    async fillBio(bio: string) {
        await this.bioTextarea.fill(bio);
    }
    
    async verifyBio(bio: string) {
        await expect(this.bioTextarea).toHaveValue(bio);
    }

    async clickRegister() {
        await this.submitButton.click();
    }
}

export class ProductPage {
    readonly page: Page;
    readonly productPageLink: Locator;
    readonly cartItemsRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productPageLink = page.locator("//a[text()='Bài học 2: Product page']");
        this.cartItemsRows = page.locator("//tbody[@id='cart-items']/tr");
    }

    addToCartButton(productId: string): Locator {
        return this.page.locator(`//button[@data-product-id='${productId}']`);
    }

    quantityByProductName(productName: string): Locator {
        return this.page.locator(
            `//tbody[@id='cart-items']//tr[td[1][text()='${productName}']]/td[3]`
        );
    }

    async getCartItemsCount(): Promise<number> {
        return await this.cartItemsRows.count();
    }

    async verifyCartItemsCount(expectedCount: number) {
        await expect(this.cartItemsRows).toHaveCount(expectedCount);
    }

    async getTotalQuantity(): Promise<number> {
        const quantities = await this.cartItemsRows.locator('td:nth-child(3)').allTextContents();
        return quantities.reduce((sum, qty) => sum + Number(qty.trim()), 0);
    }

    async verifyTotalQuantity(expectedTotal: number) {
        const total = await this.getTotalQuantity();
        expect(total).toBe(expectedTotal);
    }
}

export class TodoPage {
    readonly page: Page;
    readonly todoPageLink: Locator;
    readonly newTaskInput: Locator;
    readonly addTaskButton: Locator;
    readonly taskList: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.todoPageLink = page.locator("//a[text()='Bài học 3: Todo page']");
        this.newTaskInput = page.locator("//input[@id='new-task']");
        this.addTaskButton = page.locator("//button[@id='add-task']");
        this.taskList = page.locator("//ul[@id='task-list']");
    
    }

    todoItemByText(text: string): Locator {
        return this.taskList.locator(`li:has(span:text-is("${text}"))`);
    }

    async addTodo(text: string) {
        await this.newTaskInput.fill(text);
        await this.addTaskButton.click();
    }

    async verifyInViewport(text: string) {
        await expect(this.todoItemByText(text)).toBeInViewport();
    }

    async verifyNotInViewport(text: string) {
        await expect(this.todoItemByText(text)).not.toBeInViewport();
    }
}

export class NotesPage {
    readonly page: Page;
    readonly notesPageLink: Locator;
    readonly titleInput: Locator;
    readonly contentInput: Locator;
    readonly addNoteButton: Locator;
    readonly searchInput: Locator;
    readonly notesList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.notesPageLink = page.locator("//a[text()='Bài học 4: Personal notes']");
        this.titleInput = page.locator("//input[@id='note-title']");
        this.contentInput = page.locator("//textarea[@id='note-content']");
        this.addNoteButton = page.locator("//button[@id='add-note']");
        this.searchInput = page.locator("//input[@id='search']");
        this.notesList = page.locator("//ul[@id='notes-list']");
    }

    async addNote(title: string, content: string) {
        await this.titleInput.fill(title);
        await this.contentInput.fill(content);
        await this.addNoteButton.click();
        await this.page.waitForTimeout(1000);
    }

    async search(keyword: string) {
        await this.searchInput.fill(keyword);
    }

    async getVisibleNoteTitles(): Promise<string[]> {
        return await this.notesList.locator('li strong').allTextContents();
    }

    async getVisibleNoteContents(): Promise<string[]> {
        return await this.notesList.locator('li p').allTextContents();
    }

    async verifyAllVisibleNotesContain(keyword: string) {
        const titles = await this.getVisibleNoteTitles();
        const contents = await this.getVisibleNoteContents();
        const lowerKeyword = keyword.toLowerCase();

        for (let i = 0; i < titles.length; i++) {
            const matches =
                titles[i].toLowerCase().includes(lowerKeyword) ||
                contents[i].toLowerCase().includes(lowerKeyword);
            expect(matches).toBeTruthy();
        }
    }
}