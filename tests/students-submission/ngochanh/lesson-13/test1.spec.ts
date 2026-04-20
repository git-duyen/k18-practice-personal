import { expect } from "@playwright/test";
import { test } from "./materialPagefixture";
import { RegisterPage } from "./pom";

test.describe("Register Page Tests", async () => {
    test("Register page", async ({ materialPage }) => {
        const username = "Ngoc Hanh";
        const email = "ngochanh@gmail.com";
        const biography = "Student";
        const gender = "female";
        const country = "Canada";
        const dob = "01-01-2000";
        const profilePicture = "tests/students-submission/ngochanh/lesson-13/img/1.jpg";
        const rating = "3";
        const favColor = "#883535";

        const registerPage = new RegisterPage(materialPage.page);

        await test.step("Go to Register Page", async () => {
            await registerPage.gotoPage("Register Page");
        });

        await test.step('Input to Username', async () => {
            await registerPage.fillUsername(username);
        })

        await test.step('Input to Email', async () => {
            await registerPage.fillEmail(email);
        })

        await test.step('Select Gender', async () => {
            await registerPage.checkGender(gender);
        })

        await test.step('Select Hobbies', async () => {
            await registerPage.checkHobby('reading');
            await registerPage.checkHobby('traveling');
        })

        await test.step('Select Interests', async () => {
            await registerPage.selectInterest('Music');
        })

        await test.step('Select Country', async () => {
            await registerPage.selectCountry(country);
        })

        await test.step('Select DOB', async () => {
            await registerPage.selectDOB(dob);
        })

        await test.step('Select Profile picture', async () => {
            await registerPage.selectProfilePicture(profilePicture);
        })

        await test.step('Input to Biography', async () => {
            await registerPage.fillBiography(biography);
        })

        await test.step('Select Rate', async () => {
            await registerPage.fillRating(rating);
        })

        await test.step('Select Fav color', async () => {
            await registerPage.fillFavColor(favColor);
        })

        await test.step('Select Newsletter', async () => {
            await registerPage.hoverTooltip();
            await registerPage.checkNewsletter();
        })

        await test.step('Enable feature', async () => {
            await registerPage.enableFeature();
        })

        await test.step('Select Star rate', async () => {
            await registerPage.clickStarRating({
                x: 50,
                y: 10
            });
        })

        await test.step('Click Register Button', async () => {
            await registerPage.clickRegister();
        });

        await test.step('Verify Register successfully', async () => {
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(text(), '${username}')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(text(), '${email}')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., '${gender}')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., '${biography}')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., 'canada')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., '2000-01-01')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., 'Rating: ${rating}')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., '${favColor}')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., 'reading')]`)).toBeVisible();
            await expect(registerPage.page.locator(`//table[@id='userTable']//descendant::td[contains(., 'traveling')]`)).toBeVisible();
        })
    })
});