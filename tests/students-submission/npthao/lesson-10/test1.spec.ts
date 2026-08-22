import { test, expect } from '@playwright/test';
import {MaterialBasePage} from './01-pom'
import {RegisterPage} from './01-pom'



test ('Test 1', async({ page }) => {
    const materialBasePage = new MaterialBasePage(page);
    const registerPage = new RegisterPage(page);

    await test.step("Step 1: Access Main Page" , async() => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step ("Step 2: Click Register Page", async() => {
        await materialBasePage.registerLink.click();
    });

    await test.step ("Step 3: Fill Username/Email", async() =>{
        await registerPage.usernameInput.fill("Thanh");
        await registerPage.emailInput.fill("thao@email.com");

        
    });

    await test.step ("Step 4: Check Gender Radio", async() =>{
        expect(await registerPage.isFemaleChecked()).toBeFalsy();
        await registerPage.checkGenderFemale();
        await registerPage.verifyFemaleChecked();
        
    });

    await test.step ("Step 5: Select Hobbies Checkbox", async() =>{
        expect(await registerPage.isTravelingChecked()).toBeFalsy();
        await registerPage.selectHobbyTraveling();
        await registerPage.verifyTravelingChecked();
    });

    await test.step ("Step 6: Select Interests Option", async() =>{
        await registerPage.selectInterests(['Technology']);
        await registerPage.verifyInterestsSelected(['Technology']);

    });

    await test.step ("Step 7: Select Country " , async() => {
        await registerPage.selectCountry("Australia");
        await registerPage.verifyCountrySelected("Australia");
    });

    await test.step ("Step 8: Select DOB", async() => {
        await registerPage.fillDob("2001-09-15");
        await registerPage.verifyDob("2001-09-15");
        
    });

    await test.step("Step 9: Upload Profile pic" , async() => {
        await registerPage.fileInput.setInputFiles("tests/students-submission/npthao/lesson-10/data-test/data-test.txt")
        await registerPage.verifyFileUploaded("data-test.txt");
    });

    await test.step("Step 10: Input Biography", async ()=> {
        await registerPage.bioTextarea.fill("abcd");
        await registerPage.verifyBio("abcd");
    });

    await test.step("Step 11: Click Register", async() => {
        await registerPage.submitButton.click()
    });

})