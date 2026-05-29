import { Page, expect } from "@playwright/test";
import { MaterialPage } from "../fixture.ts";

export class PersonalNoteTest extends MaterialPage {
    constructor(page: Page) {
        super(page);
    }

    readonly searchNotes = this.page.getByRole('textbox', { name: 'Search Notes:' });
    readonly inputTitle = this.page.getByPlaceholder('Enter note title');
    readonly inputContent = this.page.getByPlaceholder('Enter note content');
    readonly addNoteButton = this.page.getByRole('button', { name: 'Add Note' });
    readonly noteItems = this.page.locator('//ul[@id="notes-list"]/li');
    readonly noteCount = this.page.locator('//div[@id="note-count"]');    
    
    async addNote(title: string, content: string) {
        for (let i = 1; i <= 10; i++) {
            await this.inputTitle.fill(`${title} ${i}`);
            await this.inputContent.fill(`${content} ${i}`);
            await this.addNoteButton.click();
        }
    }

    async searchByKeyword(keyword: string) {
        await this.searchNotes.fill(keyword, { timeout: 3000 });
    }

    async clearSearchNotes() {
        await this.searchNotes.clear();
    }

    async verifySearchResult(keyword: string) {
        await expect(this.noteCount).toBeVisible({ timeout: 5000 });

        const totalText = await this.noteCount.innerText();
        console.log(`Chữ hiển thị thực tế trên web là: ${totalText}`);

        const actualCount = parseInt(totalText.replace('Total Notes: ', '').trim());

        for (let i = 0; i < actualCount; i++) {
            await expect(this.noteItems.nth(i)).toContainText(keyword, { ignoreCase: true });
        }
    }
}