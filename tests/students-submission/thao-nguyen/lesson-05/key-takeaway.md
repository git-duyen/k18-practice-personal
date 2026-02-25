1. **Function Expression** : định nghĩa function gắn cho nó 1 biến
- Khai báo hàm function name () {

}
- Biểu thức của hàm
- gọi hàm trả kết quả
vid :
1.function name () {
    return "hello"
}
console.log(name());
2. 
//khai báo hàm 
function sum (price,quantity, discount) {
    //biểu thức hàm
    let total = price * quantity - discount;
    return total;
}
console.log(sum(50, 3, 20));
2. **Lambda function** : hay dùng, sử dụng =>
 ví dụ :
    const sum = (price,quantity,discount) => {
    let total = price * quantity- discount;
    return total;
}
console.log (sum (100,2,10));
3. **anonymous function**
Hàm không có tên, được sử dụng khi function chỉ dùng 1 lần hoặc làm callback
- Gán cho biến 

**DOM**
- Một element gồm
<option value ="usa">Us</option>
    *thẻ mở
    *thuộc tính
    *giá trị thuộc tính
    *text
    *thẻ đóng
- Một số thẻ tiêu chuẩn
    *Thẻ cấu trú cơ bản 
        <html> : thẻ gốc
        <head> : tiêu đề web
        <body> 
        <div> 
        <span>
        <header>,<footert>,<nav>,<section>
    *thẻ nội dung
    *thẻ forn
    <form>
    <input>
    <button>
    <select>
    <textarea>
**Selector**
 Xpath
    - Tuyệt đối : đi học theo cây DOM , bắt đầu bởi 1 /
    - Tương đối : tìm dựa vào đặc tính bắt đầu bằng 2 //
    **//teenthe[@thuoctinh ="value"]
    -hàm text để tìm ra phần tử có giá trị tương đương
        //div[text()='this is a text']
    -contain : phần tử bị thừa space, có các giá trị không cố định
        //di[contain(text()),'giá trị']
**Playwright*
    - test : dùng để khai báo
    import {test} from '@playwright/test';
    test('tên', async ({page}) => {

    });
    - step : khai báo step của tc
    - navigate : 
    test('truy cập trang', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
});
    -locate : sử dụng page.locator 
    await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click();
    -click : single click/double click
     **single click** 
     await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click();
     **double click**
    await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').dbclick();
    **click chuột phải**
    await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click({
        button : 'right' })
    **click chuột kèm bấm các phím khác**
    await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click({
        modifiers : ['right'] ,})

    -input 
    await page.locator('//input[@id="email"]').fill('thaotest@gmail.com');
    -radio/checkbox
    -select
    -upload file
    -hover 
    await page.locator("").hover();



