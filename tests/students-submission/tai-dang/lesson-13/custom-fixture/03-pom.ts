import { Page, expect, Locator } from '@playwright/test';


export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string = "//a[contains(text(), 'Register Page')]";
    xpathProductPage: string = "//a[contains(text(), 'Product page')]";
    cssTodoPage: string = "a[href='03-xpath-todo-list.html']";
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalNote = this.page.locator("//a[contains(text(), 'Personal notes')]");
    }

    async openMaterialBasePage() {
        await this.page.goto('https://material.playwrightvn.com/');
    }

    async goToPage(pageName: string) {
        switch (pageName) {
            case "Register Page":
                await this.page.locator(this.xpathRegisterPage).click();
                break;
            case "Product Page":
                await this.page.locator(this.xpathProductPage).click();
                break;
            case "Todo Page":
                await this.page.locator(this.cssTodoPage).click();
                break;
            case "Personal Note Page":
                await this.personalNote.click();
                break;
        }
    }
}


export class RegisterPage extends MaterialBasePage {
    xpathUserName: string = "#username";
    xpathEmail: string = "#email";
    xpathGenderMale: string = "//input[@id='male']";
    xpathGenderFemale: string = "//input[@id='female']";
    xpathRegisterButton: string = "//button[@type='submit']";

    constructor(page: Page) {
        super(page);
    }

    async fillUserName(name: string) {
        await this.page.locator(this.xpathUserName).fill(name);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }
    async clickSubmit() {
        await this.page.locator(this.xpathRegisterButton).click();
    }

    async checkGender( gender: string) {
        if (gender === 'Male') {
            await this.page.locator(this.xpathGenderMale).check();
        } else if (gender === 'Female') {
            await this.page.locator(this.xpathGenderFemale).check();
        }
    }

    async verifyTableData(userName: string, email: string, gender: string) {
        // Verify information in table
        await expect(this.page.locator('table')).toBeVisible();

        // Get the table row with username "Nguyen"
        const tableRow = this.page.locator('//td[contains(text(), "Nguyen")]/parent::tr');

        // Extract data dynamically from table cells
        const sttText = await tableRow.locator('//td[1]').textContent();
        const usernameText = await tableRow.locator('//td[2]').textContent();
        const emailText = await tableRow.locator('//td[3]').textContent();
        const informationText = await tableRow.locator('//td[4]').textContent();

        // Log extracted data
        console.log('=== Extracted Table Data ===');
        console.log(`STT: ${sttText}`);
        console.log(`Username: ${usernameText}`);
        console.log(`Email: ${emailText}`);
        console.log(`Information:\n${informationText}`);

        // Verify data is not empty
        expect(usernameText).not.toBe('');
        expect(emailText).not.toBe('');
        expect(informationText).not.toBe('');

        // Verify specific fields exist in the information
        expect(usernameText).toContain(userName);
        expect(emailText).toContain(email);
        expect(informationText).toContain(`Gender: ${gender.toLowerCase()}`);
        expect(informationText).toContain('Rating:');
        expect(informationText).toContain('Favorite Color:');
        expect(informationText).toContain('Star Rating:');
    }
}

export class ProductPage extends MaterialBasePage {
    constructor(page: Page) {
        super(page);
    }

    async addProductToCart(productName: string, times: number) {
        const productLocator = this.page.locator('//div[text()="' + productName + '"]/following-sibling::button[text()="Add to Cart"]');
        for (let i = 0; i < times; i++) {
            await productLocator.click();
        }
    }

    async verifyTableData(productName: string, quantity: string) {
        await expect(this.page.locator('table')).toBeVisible();


        const row = this.page.locator('table tbody tr', { hasText: productName });
        await expect(row).toBeVisible();
        await expect(row.locator('td').nth(0)).toHaveText(productName);
        await expect(row.locator('td').nth(2)).toHaveText(quantity);
    }

    async verifyTotal(productName: string, quantity: string): Promise<number> {
        const row = this.page.locator('table tbody tr', { hasText: productName });
        const priceText = await row.locator('td').nth(1).textContent();
        const price = parseFloat(priceText?.replace('$', '') || '0');
        const expectedTotal = price * parseInt(quantity);
        const totalText = await row.locator('td').nth(3).textContent();
        const total = parseFloat(totalText?.replace('$', '') || '0');
        expect(total).toBeCloseTo(expectedTotal, 2);
        return total;
    }

    async verifyTotalPrice(expectedTotal: number) {
        const totalText = await this.page.locator('//td[@class="total-price"]').textContent();
        const total = parseFloat(totalText?.replace('$', '') || '0');
        expect(total).toBeCloseTo(expectedTotal, 2);
    }
}

export class ToDoPage extends MaterialBasePage {
    constructor(page: Page) {
        super(page);
    }

    async addToDoList() {
        const inputLocator = this.page.locator('#new-task');
        // Add 100 tasks
        for (let i = 1; i <= 100; i++) {
            await inputLocator.fill(`Task ${i}`);
            await this.page.getByRole('button', { name: 'Add Task' }).click();
        }

        // Delete tasks with odd numbers using for j++
        let taskCount = await this.page.locator('//ul[@id="task-list"]/li').count();
        for (let j = 0; j < taskCount; j++) {
            const taskElement = this.page.locator('//ul[@id="task-list"]/li').nth(j);
            const textContent = await taskElement.textContent();

            // Extract task number from text (e.g., "Task 1")
            const taskNumberMatch = textContent?.match(/Task (\d+)/);
            if (taskNumberMatch) {
                const taskNumber = parseInt(taskNumberMatch[1]);
                // If task number is odd, delete it
                if (taskNumber % 2 !== 0) {
                    this.page.once('dialog', async dialog => { await dialog.accept(); });
                    await taskElement.getByRole('button', { name: /Delete/ }).click();
                    j--; // Decrement j to account for the deleted item
                    taskCount = await this.page.locator('//ul[@id="task-list"]/li').count();
                }
            }
        }
    }

    async checkTask90InViewport() {
        const task90 = this.page.locator('//ul[@id="task-list"]/li/span[text()="Task 90"]');
        await expect(task90).toBeInViewport();
    }

    async checkTask21IsHidden() {
        const task21 = this.page.locator('//ul[@id="task-list"]/li/span[text()="Task 21"]');
        await expect(task21).toBeHidden();
    }
}

export class PersonalNotePage extends MaterialBasePage {
    

    constructor(page: Page) {
        super(page);
    }

    // a. Add 10 notes with title and content (approximately 3 lines from VnExpress tech section)
    async addNotes(notesToAdd: { title: string; content: string }[]) {
        const inputTitleLocator = this.page.locator('#note-title');
        const inputContentLocator = this.page.locator('#note-content');

        // Add 10 notes
        for (let note of notesToAdd) {
            await inputTitleLocator.fill(note.title);
            await inputContentLocator.fill(note.content);
            await this.page.getByRole('button', { name: 'Add Note' }).click();
        }

        // Verify that the notes are added successfully
        let noteCount = await this.page.locator('#notes-list li').count();
        let totalNotes = await this.page.locator('#note-count');
        await expect(totalNotes).toContainText(`${noteCount}`);
    }

    // b. Search notes by keyword
    async searchNotesByKeyword(keyword: string) {
        const searchInput = this.page.locator('#search');
        await searchInput.fill(keyword);
    }

    // Verify search results
    async verifySearchResults(expectedTitle: string) {
        await expect(this.page.locator('#notes-list li div strong')).toContainText(expectedTitle);
    }
}

