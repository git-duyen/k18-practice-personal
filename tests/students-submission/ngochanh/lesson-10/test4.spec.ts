import { expect, test } from "@playwright/test";
import { PersonalNotesPage } from "./pom";

test.describe("Personal Notes Tests", async () => {
    test("Personal Notes", async ({ page }) => {
        const personalNotePage = new PersonalNotesPage(page);

        await test.step("Open Material Page", async () => {
            await personalNotePage.openMaterialPage();
        });

        await test.step("Goto Personal Notes", async () => {
            await personalNotePage.personalNote.click();
        })

        await test.step("Add notes", async () => {
            await personalNotePage.addNotes();
        })

        await test.step("Search by kw", async () => {
            const keyword = "Việt"
            await personalNotePage.inputToSearchBox(keyword);
            const items = page.locator('#notes-list li');
            for (let i = 0; i < await items.count(); i++) {
                await expect(items.nth(i)).toContainText(keyword);
            }
        })

    })
})