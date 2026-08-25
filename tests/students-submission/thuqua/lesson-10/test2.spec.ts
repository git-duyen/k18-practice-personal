import {test} from '@playwright/test';
import {MateriaBasePage} from "./pom/01-materiapage-pom";
import {ProductPage} from "./pom/03-productpage-pom";


test('Product page', async ({page}) => {
    const materialBasePage = new MateriaBasePage(page);
    const productPage = new ProductPage(page);
    
    await test.step('Navigate to material website', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Click Bai hoc 2: Product page', async () => {
        await materialBasePage.gotoPage(materialBasePage.xpathProductPage);
    });

    await test.step('Add product 1', async () => {
        await productPage.clickProduct1();
    });

    await test.step('Add product 2', async () => {
        await productPage.clickProduct2();
    });

    await test.step('Add product 3', async () => {
        await productPage.clickProduct3();
    });

     await test.step('Verify cart quantity', async () => {
        await productPage.verifyProductQuantity('Product 1', 2);
        await productPage.verifyProductQuantity('Product 2', 3);
        await productPage.verifyProductQuantity('Product 3', 1);
    });

    await test.step('Verify cart total', async () => {
        await productPage.verifyCartTotal('$110.00');
    })
});