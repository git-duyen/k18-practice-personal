# Lesson 12 POM - API

##
`// depth: null -->  Hiển thị vô hạn các tầng object con bên trong.`
`console.dir(getProductresponseJSON, { depth: null });` 
```
import { APIRequestContext, expect } from "@playwright/test";

export class ApiProductPage{
    request: APIRequestContext;
    baseUrl: string;

    constructor (request: APIRequestContext){
        this.request = request;
        this.baseUrl = 'https://material.playwrightvn.com/api/product-catalog/v1'
    }

    //Lấy danh sách sản phẩm
    async getProduct (){
        const getProductresponse = await this.request.get(`${this.baseUrl}/products.php`)
        const getProductresponseJSON = await getProductresponse.json();
        // console.log(getProductresponseJSON);
        console.dir(getProductresponseJSON, { depth: null }); // depth: null: Hiển thị vô hạn các tầng object con bên trong.
        expect (getProductresponse.status()).toBe(200);
        console.log(`\n---------------------\n`)
        return getProductresponseJSON;
    }
}
```
```
import { test, expect } from '@playwright/test'
import { ApiProductPage } from './api-product.page.js';

test.describe('TS', () => {
    test('Lấy danh sách sản phẩm', async ({ request }) => {
        const apiProductPage = new ApiProductPage(request);
        await test.step('Lấy danh sách sản phẩm', async () => {
            await apiProductPage.getProduct();
        });
    });
})
```

## Tổ chức API ở dạng POM để dễ quản lý hơn
- Concept tương tự POM UI
    - Tên Class : 
    - Thuộc tính: request:APIRequestContext

## POM Style
- `Style 1: Extends` - gọi là kế thừa vì page phía sau sẽ kế thừa page phía trước - `*** Nên dùng cách này ***`
    `ProductPage extends HomePage`: HompePage --> Product Page
- `Style 2: POM manager`
    - POM manager quản lý nhiều Page Objects
    - Các Page Objects có thể được tạo và truy cập từ 1 nơi duy nhất
    - Các Page Objects độc lập với nhau 
    - Các Page chỉ được tạo khi cần thiết
    - Ex: 
    const pomManager = new PomManager();
    const homePage = pomManager.get('home_page')
    const productPage = pomManager.get('product_page')
    
    homePage.navigateTo("product");
    productPage.addToCart("product1");
- `Style 3: POM return`
    const homePage = new HomePage();
    const productPage = homePage.navigate("product_page");
    productPage.addToCart();

## Async, Await
- Async/Await: là cách viết code Javascript/Typescript để xử lý các tác vụ bất đồng bộ (asynchronous) 1 cách dễ đọc hơn
    - Async: Đặt trước function để biến nó thành async function (trả về promise)
    - Await: Đặt trước 1 promise để chờ nó hoàn thành trước khi chạy tiếp
        - page.goto()
        - page.click()
        - page.fill()
        - page.waitForSelector()
        - expect()
        - Bất kì method nào trả về Promise
