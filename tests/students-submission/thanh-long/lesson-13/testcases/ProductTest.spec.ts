import { ProductPage } from '../pages/ProductPage.ts';
import { test, expect } from '../fixture.ts'; 

test('Verify thêm sản phẩm thành công và tính đúng tổng tiền', async ({ page , materialPage }) => {
    const productPage = new ProductPage(page);
    
    await materialPage.gotoPage('Product Page');

    await productPage.addToCartProduct1(2);
    await productPage.addToCartProduct2(3); 
    await productPage.addToCartProduct3(1); 
    
    await productPage.verifyProductQuantity(); 
    await productPage.verifyTotalPrice(); 
});