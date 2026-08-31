import {test} from '@playwright/test';
import { HomePage} from './01-home.page';

test('Add product to cart', async ({page}) => { // Fixture
    const homePage = new HomePage(page);
    const productPage = await homePage.navigateToProductPage();

    await productPage.addToCart();
})