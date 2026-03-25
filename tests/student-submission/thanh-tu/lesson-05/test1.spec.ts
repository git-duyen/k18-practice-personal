import { test } from "@playwright/test";

test("Fill Info Register Page", async ({ page }) => {
    await test.step("Go to and CLick", async () => {
        // Đi tới trang web
        await page.goto("https://material.playwrightvn.com/");

        //Click Bài học 1
        await page
            .locator("//a[contains(text(), 'Bài học 1: Register Page')]")
            .click();
    });

    await test.step("Fill Info", async () => {
        //Fill Name
        await page.locator("//input[@id='username']").fill("Diep Thanh Tu");

        //Fill email
        await page.locator("//input[@id='email']").fill("dipthanht2@gmail.com");

        //Choose Gender
        await page.locator("//input[@id='male']").check();

        //Choose Hobbies
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();

        //Choose Interests
        await page
            .locator("//select[@id='interests']")
            .selectOption(["technology","science"]);

        //Choose Country
        await page
            .locator("//select[@id='country']")
            .selectOption("canada");

        //Fil DoB
        await page.locator("//input[@id='dob']").fill("2000-12-06");

        //Upload profile picture
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/data-test/ava.jpeg");

        //Fill Biography
        await page.locator("//textarea[@id='bio']").fill("lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh");

        //Change Rate
        await page.locator("//input[@id='rating']").fill("8");

        //Choose Favorite Color
        await page.locator("//input[@id='favcolor']").fill("#e4eb1e");

        //Check Newsletter
        await page.locator("//input[@id='newsletter']").check();

        //Click Feature
        await page.locator("//label[@class='switch']").click();

        //Rating by click star
        await page.locator("//div[@id='starRating']").click({ position: { x: 90, y: 10 } }); 
    });

    await test.step("Click Register", async()=>{
        await page.locator("//button[text()='Register']").click();
    })
});
