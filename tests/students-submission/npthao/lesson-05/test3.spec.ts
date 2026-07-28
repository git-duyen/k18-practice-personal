import { test } from '@playwright/test';

test('Test 3', async ({ page }) => {
    await test.step("Step 1: Go to Homepage" , async() => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Step 2: Go to Todo page", async() => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("Step 3: Input to-do list", async() => {
        
        const input = page.locator("//input[@id='new-task']");
        const addButton = page.locator("//button[@id='add-task']");

        for (let i = 1 ; i <= 100 ; i++ ){
            await input.fill(`Todo ${i}`);
            await addButton.click();
        }

    });

    //Xoa item so le

    await test.step("Step 4: Xoa item so le", async() => {
        page.on('dialog', async dialog => dialog.accept());

        for (let i = 1; i <= 100 ; i++){
            if(i % 2 === 0){
                continue;
                
            }
            const soLeDeleteButton = page.locator(`//button[@id='todo-${i}-delete']`);
            await soLeDeleteButton.click();
        }

       
    });



})