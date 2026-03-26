import { test } from "../fixture/material-page.fixture";
import { RegisterPage } from "../pom/register.page";

test('Register', async ({ materialPage }) => {
    let starRatingValue: string | null;
    const registerData = {
        username: "Hoang Anh",
        email: "email@gmail.com",
        gender: "Male",
        hobby: "Reading",
        country: "usa",
        dob: "2022-06-11",
        filepath: "tests/students-submission/alehoang/lesson-10/img/image-1.png",
        bio: "This is line 1\nThis is line 2",
        rating: "7",
        color: "#572c9c",
        xCoStarRating: 50,
        yCoStarRating: 10,
    }

    const registerPage = new RegisterPage(materialPage.page);

    await test.step("Click Bài học 1", async () => {
        await registerPage.gotoPage("Register Page");
    });

    await test.step("Input data", async () => {
        await registerPage.fillUsername(registerData.username);
        await registerPage.fillEmail(registerData.email);
    });

    await test.step("Select gender", async () => {
        await registerPage.checkGender(registerData.gender);
    });

    await test.step("Select hobbies", async () => {
        await registerPage.selectHobbies(registerData.hobby);
    })

    await test.step("Select interest", async () => {
        await registerPage.selectInterests();
    })

    await test.step("Select country", async () => {
        await registerPage.selectCountry(registerData.country);
    });

    await test.step("Input DOB", async () => {
        await registerPage.fillDOB(registerData.dob);
    });

    await test.step("Upload file", async () => {
        await registerPage.uploadFile(registerData.filepath);
    });

    await test.step("Input Biography", async () => {
        await registerPage.fillBiography(registerData.bio);
    });

    await test.step("Input Rate", async () => {
        await registerPage.fillRating(registerData.rating);
    });

    await test.step("select color", async () => {
        await registerPage.fillColor(registerData.color);
    });

    await test.step("Subcribe Newsletter", async () => {
        await registerPage.clickNewsletter();
    });

    await test.step("Star rating", async () => {
        await registerPage.clickStarRating(registerData.xCoStarRating, registerData.yCoStarRating);
        starRatingValue = await registerPage.getStarRatingValue();
    });


    await test.step("Enable feature", async () => {
        await registerPage.clickEnableFeature();
    });

    await test.step("Click Register", async () => {
        await registerPage.clickRegisterBtn();
    });

    await test.step("Verify registered user data", async () => {
        // Format date from MM-DD-YYYY to YYYY-MM-DD
        const objDate = new Date(registerData.dob);
        const year = objDate.getFullYear();
        const month = (objDate.getMonth() + 1).toString().padStart(2, '0');
        const day = objDate.getDate().toString().padStart(2, '0');
        const formattedDOB = `${year}-${month}-${day}`;

        // Verify data
        const expectRegisteredData = {
            expectUsername: registerData.username,
            expectEmail: registerData.email,
            expectGender: registerData.gender,
            expectHobby: registerData.hobby,
            expectCountry: registerData.country,
            expectDOB: formattedDOB,
            expectBio: registerData.bio,
            expectRating: registerData.rating,
            expectColor: registerData.color,
            expectNewsletter: "Yes",
            expectEnableFeature: "Yes",
            expectStarRating: `${starRatingValue}⭐`,
        }
        await registerPage.verifyRegisteredData(expectRegisteredData);
    });
});
