# Function
| STT | Loại | Example|
|----|-----|----------|
|1|Function expression|```function sum(a,b) {return a+b}```|
|2|Lamda function/Arrow fucntion|```(a,b)=> {return a+b}```<br> ```x=>x+1``` |
|3|Anonymous function: sử dụng khi gán function vào biến hoặc dùng làm callback|```const x = fucntion(a,b) {return a+b}``` 

# DOM
## Khái niệm
- DOM : Document Object Model
- DOM gồm nhiều element có cấu trúc dạng tree (nhiều node, dạng quan hệ parent-child)
- Mỗi element là một thẻ html. Một số elemen hay được sử dụng trong test
	 - ```<form>```
	 - ```<input>```
	 - ```<button>```
	 - ```<select>``` và ```<option>```
	 - ```<textarea>```
## Selector
|STT|Selector|Ưu điểm|Nhược điểm|
|--|--|--|--|
|1| Xpath|Sử dụng trong tất cả mọi trường hợp <br>Có thể tìm được những phần tử khó|Cú pháp dài|
|2|CSS Selector|Ngắn gọn, performance cao|Không linh hoạt<br>Không thể thao tác với một số phần tử khó|
|3|Playwright|Cú pháp ngắn gọn<br>Không phụ thuộc và cấu trúc DOM|Chỉ sử dụng được cho Playwright
## Playwright basic syntax
### Cấu tạo của test playwright
Đơn vị khai báo nhỏ nhất: Test (gồm nhiều step)
Hướng dẫn
B1: Import từ framework theo syntax:
```import {test} from '@playwright/test'```
B2: Tạo đơn vị test
```test('tes_name', async ({page}) => { code here });```
B3: Tạo step test
```await test.step( 'step_name', async() => {code here});```
### Các action chính
|STT|Action|Syntax|Note|
|----|--------|---------|---|
|1|Navigate<br> (Điều hướng page)|```await page.goto('Link')```|
|2|Locate<br> (Chọn element)|```page.locator('Xpath')```|
|3|Click|```await page.locator('Xapth').click()```<br>```await page.locator('Xapth').dbclick()```<br>```await page.locator('Xapth').click({button:'right'})```<br>```await page.locator('Xapth').click({modifiers:['Shift']})```<br>|Click element<br>Double click element<br>Click bằng chuột phải<br>Click kèm một phím khác (VD:shift)|