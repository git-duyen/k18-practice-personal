import { Page, expect } from '@playwright/test';
import { MaterialBasePage } from './material.page';

interface PersonalNote {
    title: string;
    content: string;
}

export class PersonalNotesPage extends MaterialBasePage {
    cssTitle: string = "#note-title";
    cssContent: string = "#note-content";
    cssAddNoteBtn: string = "#add-note";
    cssSearch: string = "#search";
    cssTotalNotes: string = "#note-count"

    constructor(page: Page) {
        super(page);
    }

    async addNotes(personalNotes: PersonalNote[]) {
        for (const note of personalNotes) {
            await this.page.locator(this.cssTitle).fill(note.title);
            await this.page.locator(this.cssContent).fill(note.content);
            await this.page.locator(this.cssAddNoteBtn).click();
        }
    }

    async searchKeyword(keyword: string) {
        await this.page.locator(this.cssSearch).fill(keyword);
    }

    async verifySearchResult(keyword: string) {
        // const totalNotes = await this.page.locator(this.cssTotalNotes).innerText();
        // const notesCount = parseInt(totalNotes.split(":")[1].trim());
        // for (let i = 1; i <= notesCount; i++) {
        //     const contentResult = this.page.locator(`#notes-list li:nth-child(${i})`);
        //     await expect(contentResult).toContainText(keyword);
        // }
        const notes = this.page.locator('#notes-list li');
        const count = await notes.count();
        // Ensure there's at least one result to verify
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
            await expect(notes.nth(i)).toContainText(keyword);
        }
    }
}
