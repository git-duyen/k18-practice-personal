import { expect } from "@playwright/test";
import { PersonalNotes } from './01-pom';
import { test } from "./00-fixture";

test('Personal Notes page', async ({ materialPage, page }) => {
    const personalNotes = new PersonalNotes(materialPage.page);
    let titles: string[] = [];
    let contents: string[] = [];

    await test.step('Goto Vnexpress Page', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc');
        titles = await page.locator("//h3[@class='title-news']/a").allTextContents();
        contents = await page.locator("//p[@class='description']/a").allTextContents();

    });
    await test.step('Goto Personal notes', async () => {
        await personalNotes.openMaterialPage();
        await personalNotes.gotoPage('Personal notes');
    });
    await test.step('Add 10 notes', async () => {
        for (let i = 0; i < 10; i++) {
            await personalNotes.addNote(titles[i], contents[i]);
        }
    });

    await test.step('Search random keyword and check result', async () => {
        const keyword = 'Người';
        await personalNotes.searchNote(keyword);

        const visibleNotes = personalNotes.getNotesLocator();
        const count = await visibleNotes.count();

        for (let i = 0; i < count; i++) {
            const noteText = await visibleNotes.nth(i).innerText();
            expect(noteText.toLowerCase()).toContain(keyword.toLowerCase());
        }
    });
});