import {test} from '@playwright/test';
import {MateriaBasePage} from "./pom/01-materiapage-pom";
import {PersonalNotes} from "./pom/05-personalnotes-pom";


test('Personal Notes', async ({page}) => {
    const materialBasePage = new MateriaBasePage(page);
    const personalNotes = new PersonalNotes(page);
    
    await test.step('Navigate to material website', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Click Bai hoc 4: Personal notes', async () => {
        await materialBasePage.gotoPage(materialBasePage.personalNote);
    });

    await test.step('Add new 10 notes', async () => {
        await personalNotes.addNewNote();
    });

    await test.step('Search', async () => {
        await personalNotes.searchKeyword("AI");
    });

    await test.step('Verify all notes contain keyword', async () => {
        await personalNotes.verifyAllResultsContainKeyword("AI");
    });
});