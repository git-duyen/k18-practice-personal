# OBJECT DESTRUCTURING

- "Destruct" có nghĩa là phá hủy hoặc dỡ bỏ.
- Destructuring là kỹ thuật cho phép bạn "dỡ bỏ" các giá trị từ các thuộc tính (properties) bên trong một object để gán chúng vào các biến riêng biệt một cách nhanh chóng.
- Lợi ích: Giúp code của bạn trở nên ngắn gọn, sạch sẽ và dễ đọc hơn.

  ```
   const user = { name: "An", age: 25 };
  // Cách truyền thống
  const name = user.name;
  const age = user.age;
  // Destructuring
  const { name, age } = user;
  console.log(name); // "An"
  console.log(age);  // 25

  ```

# FIXTURE

- Là cơ chế cung cấp các đối tượng (như page, browser, request) cho các test case. Thay vì bạn phải tự khởi tạo (setup) và dọn dẹp (teardown) các đối tượng này trong mỗi file test, Playwright sẽ tự động thực hiện điều đó dựa trên những gì bạn yêu cầ
- Fixture giải quyết bài toán quản lý môi trường test thông qua các chức năng chính:
  - Tái sử dụng code: Giảm thiểu việc lặp lại mã nguồn khởi tạo môi trường (setup/teardown).
  - Chia sẻ tài nguyên: Dễ dàng dùng chung các đối tượng (như browser hoặc request) giữa nhiều test case
  - Tính độc lập: Mỗi test chạy trong một môi trường cô lập, giúp tránh xung đột dữ liệu.
  - Tổ chức theo ngữ nghĩa: Bạn có thể nhóm các test dựa trên chức năng cần thiết thay vì dựa trên cách khởi tạo kỹ thuật.
- Các Built-in Fixtures

| Fixture        | Kiểu dữ liệu        | Mô tả                                                 |
| :------------- | :------------------ | :-----------------------------------------------------|
| **page**       | Page                | Tạo một trang web riêng biệt, cô lập cho test.        |
| **context**    | BrowserContext      | Tạo một ngữ cảnh trình duyệt riêng biệt               |
| **browser**    | Browser             | Trình duyệt được dùng chung để tối ưu tài nguyên.     |
| **browserName**| string              | Tên trình duyệt đang chạy (chromium, firefox, webkit).|
| **request**    | APIRequestContext    | Tạo một instance để thực hiện các yêu cầu API        |

# TEST GENERATOR

- Đây là một công cụ cho phép bạn tương tác trực tiếp trên trình duyệt (click chuột, nhập văn bản, chọn menu), và Playwright sẽ tự động "ghi lại" (record) các thao tác đó để sinh ra mã nguồn (code) tương ứng. Bạn chỉ cần thao tác bằng tay một lần, công cụ sẽ tạo ra đoạn code hoàn chỉnh cho bạn.
- Công cụ này được thiết kế để giải quyết hai nhu cầu thực tế của tester:
  - Tiết kiệm thời gian: Bạn cần viết các kịch bản test nhanh chóng mà không muốn mất thời gian gõ từng dòng code thủ công.
  - Giảm bớt sự nhàm chán ("lười"): Thay vì phải tự tay viết những thao tác lặp đi lặp lại hoặc các kịch bản dài dòng, bạn chỉ cần thực hiện thao tác đó một lần trên trình duyệt.
- Cách sử dụng các tính năng chính trong Playwright. Khi bạn khởi chạy Test Generator, bạn sẽ có các tùy chọn quan trọng để kiểm soát quá trình tạo code:
  - Record new: Bắt đầu ghi lại các thao tác từ đầu, tạo ra một file test mới.
  - Record at cursor: Cho phép bạn tiếp tục ghi lại các thao tác mới và chèn đoạn code đó vào đúng vị trí con trỏ chuột đang đặt trong file hiện tại.
  - Assertion: Đây là tính năng cho phép bạn tạo ra các câu lệnh kiểm tra (so sánh/đối chiếu). Ví dụ, bạn có thể chọn một phần tử trên trang web để xác nhận rằng nó đang hiển thị đúng nội dung hoặc trạng thái mong muốn.
  
# VIDEO RECORDING

- Là tính năng "quay video" lại toàn bộ màn hình trình duyệt trong quá trình test chạy. Nó cung cấp một bản ghi hình trực quan về những gì đã xảy ra trên trình duyệt từ lúc bắt đầu cho đến khi kết thúc test.
- Tính năng này giải quyết hai bài toán lớn trong kiểm thử tự động:
  - Hỗ trợ gỡ lỗi (Debug) dễ dàng hơn: Khi test thất bại, thay vì chỉ đọc log văn bản khô khan, bạn có thể xem lại video để biết chính xác trình duyệt đã thực hiện thao tác gì, giao diện hiển thị ra sao tại thời điểm lỗi xảy ra.
  - Tạo bằng chứng (Evidence) nhanh chóng: Bạn có thể xuất video làm bằng chứng thực tế cho kết quả kiểm thử, giúp việc báo cáo lỗi cho đội ngũ phát triển hoặc khách hàng trở nên rõ ràng và thuyết phục hơn.
- Cấu hình trong Playwright

| Mode                     | Mô tả                                                                                                        |
| :------------------------| :------------------------------------------------------------------------------------------------------------|
| **off**                  | Tắt hoàn toàn, không thực hiện ghi hình.                                                                     | 
| **on**                   | Bật, ghi hình tất cả các test case (thành công hay thất bại đều lưu).                                        | 
| **retain-on-failure**    | Ghi hình tất cả, nhưng chỉ giữ lại video của những test case bị thất bại (giúp tiết kiệm dung lượng lưu trữ).|
| **on-first-retry**       | Chỉ ghi hình khi test bị thất bại và được chạy lại (retry).                                                  | 
