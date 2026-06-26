*** Playwright
1. Test group/ suite
- Test suite: tập hợp test cases, nhóm các test để dễ quản lý
test.describe('suite name', async () => {
    test('test 1', async ({page}) => {
        // code ...
    });

    test('test 2', async ({page}) => {
        // code ...
    });
});

2. Hooks
- Chia ra các thời điểm để chạy test: trước khi chạy, trong khi chạy và sau khi chạy
- Các hooks:
+ beforeAll
+ beforeEach
+ afterEach
+ afterAll

3. Assertion
- Là câu lệnh để kiểm tra xem actual result có đúng như expected result không
- Sử dụng assertion thông qua hàm expect của playwright
expect(giá trị) = (giá trị)

- expect(phần tử) có giá trị - Dùng cho các elements trên web, tự động chờ đến khi thỏa màn điều kiện
await expect(page).toHaveTitle("...");
await expect(page).toHaveURL("...");

- Ngoài ra có các lệnh kiểm tra khác: Kiểm tra visible, kiểm tra enable/ disable, kiểm tra checked (checkbox/ radio), kiểm tra focus, kiểm tra có chứa text, kiểm tra text chính xác, kiểm tra khớp regex, kiểm tra nhiều elements, kiểm tra attribute, kiểm tra class, kiểm tra value, kiểm tra count