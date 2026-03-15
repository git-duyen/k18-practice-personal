1. Test describe
- test suite: tập hợp testcase 
- giúp nhóm các test lại cho dễ dàng quản lý 
![](./lesson-08-img/img1.png)

2. Test hooks
- Các thời điểm chạy test: Trước khi chạy, TRong khi chạy, và sau khi chạy 
- Các thời điểm chạy suite: Trước khi chạy, TRong khi chạy, và sau khi chạy 
- Playwright: Gọi các thời điểm này là hooks
- Các hooks:
    + beforeAll
    + beforeEach
    + afterEach
    + afterAll
![](./lesson-08-img/img2.png)

3. Assertion
- Định nghĩa: là khẳng định hoặc xác nhận, là một câu lệnh để kiểm tra xem một điều gì đó có đúng như mong đợi hay không.
- Không có assertion = không biết test có thành công hay thất bại.
![](./lesson-08-img/img3.png)
![](./lesson-08-img/img4.png)
- Các loại assertion
    + Generic Assertion( từ thư viện expect)
    > expect(giá trị) = (giá trị)
    + Web-first Assertions (auto - waiting)
    > expect (phần tử) có giá trị


![](./lesson-08-img/img5.png)
![](./lesson-08-img/img6.png)
![](./lesson-08-img/img7.png)
![](./lesson-08-img/img8.png)

![](./lesson-08-img/img9.png)
