import { expect } from "@playwright/test";
import { test } from "./materialPagefixture";
import { PersonalNotesPage } from "./pom";

test.describe("Personal Notes Tests", async () => {
    test("Personal Notes", async ({ materialPage }) => {
        const personalNotePage = new PersonalNotesPage(materialPage.page);

        await test.step("Goto Personal Notes", async () => {
            await personalNotePage.personalNote.click();
        })

        await test.step("Add notes", async () => {
            await personalNotePage.addNotes();
        })

        await test.step("Search by kw", async () => {
            const keyword = "Việt"
            await personalNotePage.inputToSearchBox(keyword);
            const items = personalNotePage.page.locator('#notes-list li');
            // for (let i = 0; i < await items.count(); i++) {
            //     await expect(items.nth(i)).toContainText(keyword);
            // }
            for (const item of await items.all()) {
                await expect(item).toContainText(keyword);
            }
        })

    })
})