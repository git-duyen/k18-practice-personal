import { Locator, Page, expect } from "@playwright/test";

export class MaterialBasePage {
    page: Page;

    xpathRegisterPage: string = "//a[text()='Bài học 1: Register Page (có đủ các element)']";
    xpathProductPage: string = "//a[text()='Bài học 2: Product page']";
    cssTodoPage: string = "a[href='03-xpath-todo-list.html']";
    personalNote: string = "a[href='04-xpath-personal-notes.html']";

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async gotoRegisterPage() {
        await this.page.locator(this.xpathRegisterPage).click();
    }
    async gotoProductPage() {
        await this.page.locator(this.xpathProductPage).click();
    }
    async gotoTodoPage() {
        await this.page.locator(this.cssTodoPage).click();
    }
    async gotoPersonalNotePage() {
        await this.page.locator(this.personalNote).click();
    }
};

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string = "//input[@id='username']";
    xpathEmail: string = "//input[@id='email']";
    xpathGenderMale: string = "//input[@id='male']";
    xpathGenderFemale: string = "//input[@id='female']";
    xpathRegisterButton: string = "//button[@type='submit']";
    getXpathTableRow(username: string): string {
        return "//table//tr[td[text()='" + username + "']]";
    }

    constructor(page: Page) {
        super(page);
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender(gender: "male" | "female") {
        if (gender === "male") {
            await this.page.locator(this.xpathGenderMale).check();
        } else {
            await this.page.locator(this.xpathGenderFemale).check();
        }
    }
    async clickRegisterButton() {
        await this.page.locator(this.xpathRegisterButton).click();
    }
}

export class ProductPage extends MaterialBasePage {
    xpathAddToCartButton(productId: string): string {
        return "//button[@data-product-id='" + productId + "']";
    }
    cssTotalPrice: string = "td.total-price";

    constructor(page: Page) {
        super(page);
    }
    async clickAddToCart(productId: string, clickCount: number = 1) {
        const locator = this.page.locator(this.xpathAddToCartButton(productId));
        if (clickCount === 2) {
            await locator.dblclick();
        } else {
            await locator.click({ clickCount });
        }
    }
    async getTotalPrice() {
        return await this.page.locator(this.cssTotalPrice).textContent();
    }

    async verifyProductRow(
        rowIndex: number,
        expectedPrice: string,
        expectedQuantity: string
    ) {
        const row = this.page.locator("tbody tr").nth(rowIndex);

        await expect(row.locator("td").nth(1))
            .toHaveText(expectedPrice);

        await expect(row.locator("td").nth(2))
            .toHaveText(expectedQuantity);
    }
    async verifyTotalPrice(expectedTotal: string) {
        await expect(this.page.locator("td.total-price")).toHaveText(expectedTotal);
    }
}

export class TodoPage extends MaterialBasePage {
    xpathTodoInput = "//input[@id='new-task']";
    xpathAddTaskButton = "//button[@id='add-task']";

    constructor(page: Page) {
        super(page);
    }

    async addTask(taskName: string) {
        await this.page.locator(this.xpathTodoInput).fill(taskName);
        await this.page.locator(this.xpathAddTaskButton).click();
    }

    async addMultipleTasks(count: number = 100) {
        for (let i = 1; i <= count; i++) {
            await this.addTask("Todo " + i);
        }
    }

    async deleteOddTasks() {
        this.page.on("dialog", async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await this.page.locator(`#todo-${i}-delete`).click();
            }
        }
    }
    async verifyTodoInViewport(todoId: number) {
        await expect(
            this.page.locator(`text=Todo ${todoId}`)
        ).toBeInViewport();
    }

    async verifyTodoNotExist(todoId: number) {
        await expect(
            this.page.locator(`text=Todo ${todoId}`)
        ).toHaveCount(0);
    }
}

export class PersonalNotePage extends MaterialBasePage {
    noteTitleInput = "#note-title";
    noteContentInput = "#note-content";
    addNoteButton = "#add-note";
    searchInput = "#search";

    constructor(page: Page) {
        super(page);
    }

    async addNote(title: string, content: string) {
        await this.page.locator(this.noteTitleInput).fill(title);
        await this.page.locator(this.noteContentInput).fill(content);
        await this.page.locator(this.addNoteButton).click();
    }
    async addMultipleNotes(
        notes: { title: string; content: string }[]
    ) {
        for (const note of notes) {
            await this.addNote(note.title, note.content);
        }
    }
    async search(keyword: string) {
        await this.page.locator(this.searchInput).fill(keyword);
    }

    async verifyAllSearchResultsContain(keyword: string) {
        const noteTitles = await this.page.locator(".note-title").allTextContents();

        for (const title of noteTitles) {
            expect(title.toLowerCase()).toContain(keyword.toLowerCase());
        }
    }
}