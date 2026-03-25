# POM cho API 
1. POM API là gì ?
- Tổ chức test API ở dang POM để dễ quản lý hơn 
- concept tương tự POM UI: 
     + Tên class 
     + Thuộc tính: request: APIRequestContext
     
- Tư duy tương tự POM API 
    + Thuộc tính: Những gì cần thiết cho API: request fixture, baseURL
    + Phương thức: các hàm gọi API 

2. POM API nâng cao 
- Lưu baseURL để khi gọi API ngắn gọn hơn 
- Thêm thuộc tính token để lưu lại token với các API dùng token 

# Một số biến thể của POM 
1. POM styles 
- Styles đang sử dụng goi là "kế thừa", vì page phía sau sẽ kế thừa page phía trước 
- Style 2: POM manager
    + Quản lý nhiều page object 
    + Các page object có thể được tạo và truy cập từ một nơi duy nhất 
    + Các page object độc lập với nhau 
    + Các page chỉ được tạo khi cần thiết 
![](../lesson-12/img/Screenshot%202026-03-24%20at%2016.41.13.png)

- Style 3: POM return 
    + Các method của 1 Page Object trả về page Object khác 
    > Ví dụ: login > add to cart > checkout > confirm 
![](./img/Screenshot%202026-03-24%20at%2016.43.04.png)

# Async, await 
1. Async, await là gì ? 
![](../lesson-12/img/Screenshot%202026-03-24%20at%2016.44.03.png)

2. Tại sao cần async, await 
![](../lesson-12/img/Screenshot%202026-03-24%20at%2016.44.18.png)

3. Dùng async, await đúng cách
![](../lesson-12/img/Screenshot%202026-03-24%20at%2016.44.31.png)
![](../lesson-12/img/Screenshot%202026-03-24%20at%2016.44.47.png)