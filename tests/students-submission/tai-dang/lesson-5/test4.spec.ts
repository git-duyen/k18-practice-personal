import { test, expect, Page } from '@playwright/test';




//4.
test('Personal Notes Test', async ({ page }) => {
    await test.step('Go to Personal Notes Page', async () => {
        await goToPersonalNotesPage(page);
    });
    await test.step('Add 10 Notes', async () => {
        await addNotes(page);
    });
    await test.step('Search Notes: một hay nhiều', async () => {
        await searchNotes(page);
    });
});



async function goToPersonalNotesPage(page: Page) {
    await page.goto('https://material.playwrightvn.com/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Bài học 4: Personal Notes' }).click();

    // Expects page to have a heading with the name of Simple E-commerce.
    await expect(page.getByRole('heading', { name: 'Personal Notes' })).toBeVisible({ timeout: 10000 });
}

//a. Add 10 notes with the content "Note 1", "Note 2", ..., "Note 10" and verify that they are added successfully.
async function addNotes(page: Page) {
    const inputTitleLocator = page.locator('#note-title');
    const inputContentLocator = page.locator('#note-content');
    // Add 10 notes
    for (let i = 0; i < 10; i++) {
        await inputTitleLocator.fill(`Note ${i}`);
        await inputContentLocator.fill(`Content for Note ${i}`);
        await page.getByRole('button', { name: 'Add Note' }).click();
    }

    // Verify that the notes are added successfully
    let noteCount = await page.locator('#notes-list li').count();
    let totalNotes = await page.locator('#note-count');
    await expect(totalNotes).toContainText(`${noteCount}`);
}

//b. Search for the notes with the keyword "một hay nhiều" and verify that the search results are correct (should return 0 notes).
async function searchNotes(page: Page) {
    await page.locator('#search').fill('một hay nhiều');
    let totalNotes = await page.locator('#note-count');
    await expect(totalNotes).toHaveText(`Total Notes: 0`);
}
