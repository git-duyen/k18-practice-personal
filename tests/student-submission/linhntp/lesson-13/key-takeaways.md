1. Object destructuring
- Destruct = phá huỷ, dỡ bỏ
    + Trong context JavaScript, destruct = Lấy các giá trị của các thuộc tính, trong object 
![](../lesson-13/img/Screenshot%202026-03-26%20at%2009.57.42.png)
![](../lesson-13/img/Screenshot%202026-03-26%20at%2009.57.54.png)

2. Fixtures
- Fixture là gì? 
    + Playwright sử dụng concept fixture
        + page 
        + request
- Fixture giải quyết bài toán gì 
![](../lesson-13/img/Screenshot%202026-03-26%20at%2010.02.19.png)
- Các built-in fixture
![](../lesson-13/img/Screenshot%202026-03-26%20at%2010.01.48.png)
- Custom 1 fixture 
    + Sử dụng test.extend() để mở rộng test object.
    + Khai báo và implement!
![](../lesson-13/img/Screenshot%202026-03-26%20at%2010.04.00.png)
- Nâng cao hơn về fixture
![](../lesson-13/img/Screenshot%202026-03-26%20at%2010.05.29.png)

3. Test generator
- Test generator là gì ? 
    + Là thao tác mà sinh ra code (click sinh ra code)
- Test generator giải quyết bài toán gì 
    + Cần code nhanh
    + Muốn "lười", mànual 1 đoạn rùi thao tác tay nốt 
- Sử dụng test generator trong playwright 
    + Record new: tạo file mới và bắt đầu record 
    + Record at cursor: record và sinh ra code tại vị trí con trỏ chuột 
    + Assertion: Genẻate ra so sánh 

4. Video recording
- Video recording là gì ? 
    + là việc quay video lại toàn bộ quá trình test chaỵ
- Video recording giải quyết bài toán gì? 
    + Giúp debug các test một cách dễ dàng hơn 
    + Giúp generate ra evidence nhanh chóng 
- Sử dụng video recording trong Playwright 
![](../lesson-13/img/Screenshot%202026-03-26%20at%2010.39.28.png)
- Video recording trong thực tế
    + Giúp genẻate ra evidence nhanh chóng 


