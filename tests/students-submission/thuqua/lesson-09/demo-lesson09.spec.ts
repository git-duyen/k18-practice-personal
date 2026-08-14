import {test} from '@playwright/test';

test('Demo playwright selector', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    const title = await page.locator('//h1[@id="self"]').textContent();
    const title2 = await page.getByRole('heading', {name: 'User Registration'}).textContent();

    await page.getByRole('checkbox', {name: 'Traveling'}).check();
    await page.getByRole('checkbox', {name: 'Cooking'}).check();
    await page.getByRole('radio', {name: 'Male'}).nth(0).click();

    console.log(title);
    console.log(title2);

    await page.getByLabel("Username").fill("thuqua");
});

test('Demo playwright selector 2', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/12-dom-nested.html');
    const text = await page.getByRole('listitem').filter({hasText: 'H'}).count();
    console.log(text);

});