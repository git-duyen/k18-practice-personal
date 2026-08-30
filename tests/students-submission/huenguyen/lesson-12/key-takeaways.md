# POM API

- Tổ chức test API ở dạng POM để dễ quản lý hơn
- Concept tương tự POM UI:
  - Tên class
  - Thuộc tính: request: APIRequestContext
- Thuộc tính: những gì cần thiết cho API: request fixture, baseURL
- Phương thức: các hàm gọi API
- Lưu baseURL để khi gọi API ngắn gọn hơn
- Thêm thuộc tính token để lưu lại token với các API dùng token

# POM STYLES

- Style đang sử dụng gọi là "kế thừa", vì page phía sau sẽ "kế thừa" page phía trước
- Style 2: POM manager
- Style 3: POM return

## 1.POM manager

- Quản lý nhiều page object.
- Các page objects có thể được tạo và truy cập từ một nơi duy nhất.
- Các page objects độc lập với nhau.
- Các page chỉ được tạo khi cần thiết.

## 2.Return POM from another POM

- Các method của 1 Page Object trả về Page Object khác.

  ```
    login > add to cart > checkout > confirm
    import { Page } from '@playwright/test';
    import { DashboardPage } from './00-pom-dashboard';
    export class LoginReturnPage {
      page: Page;
      constructor(page: Page) {
        this.page = page;
      }
      login() {
        // Thực hiện các action login ở đây (fill, click...)
        return new DashboardPage(this.page);
      }
    }

  ```

# ASYNC/AWAIT
- là cách viết code JavaScript/TypeScript để xử lý các tác vụ bất đồng bộ (asynchronous) một cách dễ đọc hơn.
- async: Đặt trước function để biến nó thành async function (trả về Promise)
- await: Đặt trước một Promise để "chờ" nó hoàn thành trước khi chạy tiếp
- Cơ chế hoạt động JS: Event Loop single thread
- Các thao tác trong automation network/IO:
  - Mở trang web: mất vài giây
  - Tìm element: cần chờ element xuất hiện
  - Click button: phải chờ animation
  - Gọi API: chờ server phản hồi
- LUÔN dùng await với:
  - page.goto()
  - page.click()
  - page.fill()
  - expect() assertions
  - Bất kỳ method nào trả về Promise
