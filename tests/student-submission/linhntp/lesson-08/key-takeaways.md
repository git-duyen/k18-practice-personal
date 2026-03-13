1. Test describe
- test suite: tập hợp testcase 
- giúp nhóm các test lại cho dễ dàng quản lý 
![](./Screenshot%202026-03-13%20at%2010.27.50.png)

2. Test hooks
- Các thời điểm chạy test: Trước khi chạy, TRong khi chạy, và sau khi chạy 
- Các thời điểm chạy suite: Trước khi chạy, TRong khi chạy, và sau khi chạy 
- Playwright: Gọi các thời điểm này là hooks
- Các hooks:
    + beforeAll
    + beforeEach
    + afterEach
    + afterAll
![](./Screenshot%202026-03-13%20at%2010.25.19.png)

3. Assertion
- Định nghĩa: là khẳng định hoặc xác nhận, là một câu lệnh để kiểm tra xem mọt điều gì đó có đúng như mong đợi hay không.
- Không có assertion = không biết test có thành công hay thất bại.
![](./Screenshot%202026-03-13%20at%2010.40.21.png)
![](./Screenshot%202026-03-13%20at%2010.40.39.png)
- Các loại assertion
    + Generic Assertion( từ thư viện expect)
    > expect(giá trị) = (giá trị)
    + Web-first Assertions (auto - waiting)
    > expect (phần tử) có giá trị


![](Screenshot%202026-03-13%20at%2010.48.14.png)
![](Screenshot%202026-03-13%20at%2010.48.34.png)
![](Screenshot%202026-03-13%20at%2010.48.45.png)
![](Screenshot%202026-03-13%20at%2010.48.56.png)

![](./Screenshot%202026-03-13%20at%2010.49.13.png)