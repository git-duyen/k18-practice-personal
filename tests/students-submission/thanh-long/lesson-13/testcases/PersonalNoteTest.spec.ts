import { PersonalNoteTest } from '../pages/PersonalNotePage.ts';
import { test } from '../fixture.ts';



test('Register Page', async ({ page , materialPage }) => {
    const personalNotePage = new PersonalNoteTest(page);
    await materialPage.gotoPage('Personal Notes');
    await personalNotePage.addNote('Khoa Học', 'Nghiên cứu');
    await personalNotePage.addNote('Vật Lý', 'Lượng Tử');
    await personalNotePage.searchByKeyword('Khoa Học 8');
    await personalNotePage.clearSearchNotes();
    await personalNotePage.searchByKeyword('Học');
    await personalNotePage.verifySearchResult('Khoa Học');
});