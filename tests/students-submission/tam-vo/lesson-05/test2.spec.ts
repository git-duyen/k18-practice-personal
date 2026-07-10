import { test } from '@playwright/test';

test('Test 2: Product page', async ({ page }) => {
    await test.step('a. Add product 1 to cart', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(text(),"Bài học 2: Product page")]').click();

        //=========== a. Add Product 1 to cart ============
        const addToCardProduct1 = page.locator('//button[@data-product-id="1"]');  // Click Add to cart 1 lần 1
        await addToCardProduct1.dblclick(); // Click Add to cart 1 lần 2
    });

    //=========== b. Add Product 2 to cart ============
    await test.step('b. Add product 2 to cart', async() => {
        for (let i = 0; i < 3; i++) {
            await page.locator('//button[@data-product-id="2"]').click();
        }
     });
    
     //=========== c. Add Product 3 to cart ============
     await test.step('c. Add product 3 to card', async() => {
        await page.locator('//button[@data-product-id="3"]').click();
    });
});