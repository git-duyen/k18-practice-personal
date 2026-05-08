# POM API, Biến thể của POM

## POM cho API
* tổ chức test API ở dạng POM để dễ quản lý hơn
* Concept tương tự như POM UI:
    * Tên class: `TodoApiPage`
    * Thuộc tính: `request: APIRequestContext`

## POM styles
Style đang sử dụng gọi là "kế thừa", vì page phía sau sẽ "kế thừa" page phía trước
* extends
* POM manager
* return other POM

## async, await
### async, await là gì?
async/await là cách viết code JavaScript/TypeScript để xử lý các tác vụ bất đồng bộ (asynchronous) một cách dễ đọc hơn
* async: Đặt trước function để biến nó thành async function trả về (Promise)
* await: Đặt trước một Promise để "chờ" nó hoàn thành trước khi chạy tiếp

### Tại sao cần async, await
Cơ chế hoạt động JavaScript: Event Loop single thread

Các thao tác automation liên quan đến network/IO:
* Mở trang web: mất vài giây
* Tìm element: cần chờ element xuất hiện
* Click button: phải chờ animation
* Gọi API: chờ server phản hồi

### Dùng async, await đúng cách
* Luôn dùng await với:
    * page.goto() 
    * page.click()
    * page.fill()
    * page.waitForSelector()
    * expect() assertions
    * Bất kỳ hàm(method) nào trả về promise
* Không cần await với:
    * page.locator() - chỉ tạo locator, chưa tương tác
    * Biến thông thường
    * Synchronous operations
