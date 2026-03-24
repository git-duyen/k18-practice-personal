## POM - API
- Tổ chức test API ở dạng POM để dễ quản lý hơn
- Concept tương tự POM UI:
    - Tên class
    - Thuộc tính: **request: APIRequestContext**
- ***Nên verify status code trong POM để xác định request được xử lý thành công***
- Lưu baseURL: để gọi API ngắn gọn hơn
- Thêm thuộc tính token để lưu lại token với các API dùng token

## POM Style
- **Style** đang sử dụng gọi là "kế thừa" vì page sau sẽ kế thừa page trước.
- POM Manager:
    - Quản lý nhiều page object
    - Các page object có thể được tạo và truy cập từ 1 nơi duy nhất
    - Các page object độc lập với nhau
    - Các page chỉ được tạo khi cần thiết
- Return POM from another POM
    - Các method của 1 page object trả về page object khác

## Async, await
- **Async/ await:** là cách viết code JS/TS để xử lý các tác vụ bất đồng bộ (asynchronous) 1 cách dễ đọc hơn.
    - **async**: đặt trước function để biến nó thành async function (trả về Promise)
    - **await**: đặt trước một Promise để "chờ" nó hoàn thành trước khi chạy tiếp
- **Tại sao cần async, await**
    - Cơ chế hoạt động của JS: event loop single thread
    - Các thao tác trong automation network/ IO:
        - Mở trang web
        - Tìm element
- **Dùng async, await đúng cách**
    - Luôn dùng await với:
        - page.goto()
        - page.click()
        - page.fill()
        - expect() assertion
        - Bất kỳ method nào trả về Promise: vd - Promise<number>
    - Không cần await với:
        - page.locator() - chỉ tạo locator, chưa tương tác
        - biến thông thường
        - synchronous operations


