## 1. Test group/suite
** Test describe **
- test suite: tập hợp test case

test describe('<tên suite>', async() => {
    test('test1', async ({page}) => 
    {});
})
## 2. Hooks
- beforeAll
- beforeEach
- afterEach
- afterAll
## 3. Assertion & Web first assertion
- Assertion: 1 câu lệnh kiểm tra xem 1 điều gì đó có đúng như mong đợi hay không
Assertion Playwright: expect
- Các loại assertion:
   Generic Assertions: expect (giá trị) = (giá trị)
   Ex: expect(value).toBe(expected);
       expect(array).toHaveLength(3);
       expect(string).toContain('text');
   Web-first Assertions (auto-waiting): expect (phần tử) có giá trị. Dùng cho các elements trên web, tự động chờ đến khi điều kiện được thỏa mãn:
   Ex: await expect(page.locator('button').toBeVisible());
       await await expect(page).toHaveTitle(/Homepage/);