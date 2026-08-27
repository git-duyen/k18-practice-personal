import { test } from "@playwright/test";
import { MateriaBasePage } from "./pom/01-materiapage-pom";
import {RegisterPage} from "./pom/02-registerpage-pom";

test('Register page', async ({ page }) => {
    const materialBasePage = new MateriaBasePage(page);
    const registerPage = new RegisterPage(page);

    await test.step('Navigate to material website', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Click Bai hoc 1: Register page', async () => {
        await materialBasePage.gotoPage(materialBasePage.xpathRegisterPage);
    });

    await test.step('Input UserName', async () => {
        await registerPage.fillUsername("Thu Qua");
    });

    await test.step('Input Email', async () => {
        await registerPage.fillEmail("test@gmail.com");
    });

    await test.step('Select Gender', async () => {
        await registerPage.checkGender("female");
    });

    await test.step('Select Hobby: Reading', async () => {
        await registerPage.checkHobbies("reading");
    });

    await test.step('Select Hobby: Cooking', async () => {
        await registerPage.checkHobbies("cooking");
    });

    await test.step('Select Interests', async () => {
        await registerPage.selectInterests('Technology');
    });

    await test.step('Select Country', async () => {
        await registerPage.selectCountry('Canada');
    });

    await test.step('Select DoB', async () => {
        await registerPage.selectDateOfBirth('2000-11-11');
    });

    await test.step('Upload Profile Picture', async () => {
        await registerPage.uploadProfilePicture("tests/students-submission/thuqua/data-test/images.jpeg");
    });

    await test.step('Input Bio', async () => {
        await registerPage.fillBio('QA Engineer with a passion for building reliable, user-focused digital experiences.');
    });

    await test.step('Input Rating', async () => {
        await registerPage.fillRating('8');
    });

    await test.step('Input Favorite Color', async () => {
        await registerPage.fillFavoriteColor('#2bff00');
    });

    await test.step('Select Newsletter', async () => {
        await registerPage.checkNewsletter();
    });

    await test.step('Select Enable Feature', async () => {
        await registerPage.checkEnableFeature();
    });

    await test.step('Select Star Rating', async () => {
        await registerPage.selectStarRating(4);
    });

    await test.step('Click Register button', async () => {
        await registerPage.clickRegister();
    });

    //Verify new account registered
    await test.step('Verify Registered Data In Table', async () => {
        await registerPage.verifyRegisteredData('Thu Qua', 'test@gmail.com', {
            'Gender': 'female',
            'Hobbies': 'reading, cooking',
            'Country': 'canada', 
            'Date of Birth': '2000-11-11',
            'Rating': '8',
            'Favorite Color': '#2bff00',
            'Newsletter': 'Yes',
            'Enable Feature': 'Yes',
        });
    });
});