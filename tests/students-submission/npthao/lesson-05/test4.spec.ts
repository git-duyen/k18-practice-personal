import { test } from '@playwright/test';

test('Test 4', async({ page })=> {
    await test.step("Step 1 : Go to Homepage", async() =>{
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step("Step 2: Click page Personal Notes", async()=> {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("Step 3: Input Title/Content", async()=> {
        const title = page.locator("//input[@id='note-title']");
        const content = page.locator("//textarea[@id='note-content']");
        const addButton = page.locator("//button[@id='add-note']");

        for (let i = 1 ; i <= 10 ; i++ ){
            await title.fill(`Title ${i}`);
            await content.fill(`Content ${i}`);

            await addButton.click();
        }
    });

    await test.step("Step 4: Search", async() => {
        await page.locator("//input[@id='search']").fill("một hoặc nhiều")
    })


})