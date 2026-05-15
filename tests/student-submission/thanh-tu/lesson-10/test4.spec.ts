import { test } from '@playwright/test';
import { PersonalNotePage } from './01-pom';

test('Add and Search Note', async ({ page }) => {
  const personalNotePage = new PersonalNotePage(page);

  const arrNote = [
    {
      title: 'Việt Nam đang trở thành "sân chơi lớn" cho startup nông nghiệp',
      description:
        'Mỗi năm Việt Nam tiêu thụ hàng chục triệu tấn phân bón và thức ăn chăn nuôi, tạo ra hàng triệu tấn phụ phẩm nông nghiệp, trở thành cơ hội, cả đầu vào và đầu ra, cho các startup nông nghiệp tuần hoàn.',
    },
    {
      title: 'Các hãng Trung Quốc đua bán smartphone trên 40 triệu đồng',
      description:
        'Xiaomi, Oppo, Vivo đều đưa smartphone cao cấp nhất về Việt Nam với giá trên 40 triệu đồng, hơn mức khởi điểm của Galaxy S26 Ultra, iPhone 17 Pro Max.',
    },
    {
      title: 'AI phân tích phôi, tăng tỷ lệ thành công khi IVF',
      description:
        'Camera của hệ thống nuôi cấy phôi ở phòng lab ISO 5 ghi lại hình ảnh phôi mỗi 5 phút rồi dùng AI phân tích, nâng tỷ lệ có thai cộng dồn trung bình tại IVF Tâm Anh TP HCM lên trên 80%. ',
    },
    {
      title: 'TP HCM lắp trạm số cho người dân giao dịch hành chính ngoài giờ',
      description:
        'TP HCM triển khai Trạm công dân số tại khu dân cư, tích hợp 6 nhóm tiện ích từ hành chính, y tế đến tài chính, giúp người dân thực hiện dịch vụ mọi lúc, giảm thời gian đi lại. ',
    },
    {
      title: 'Hố đen phun luồng vật chất mạnh gấp 10.000 lần Mặt Trời',
      description:
        'Các chuyên gia lần đầu tiên trực tiếp đo sức mạnh của luồng vật chất phun từ hố đen, cho thấy mức năng lượng lớn gấp 10.000 lần Mặt Trời. ',
    },
    {
      title: 'DeepSeek ra mô hình V4',
      description:
        'Sau hơn một năm gây chấn động thế giới với mô hình V3, DeepSeek tung ra bản cập nhật lớn V4 với nhiều nâng cấp.',
    },
    {
      title: 'Xiaomi 17 Ultra đọ camera với Galaxy S26 Ultra',
      description:
        'Đều là smartphone có thông số camera tốt hàng đầu, nhưng Xiaomi 17 Ultra có lợi thế với cảm biến lớn hơn, chất ảnh đặc trưng, trong khi ảnh chụp bởi S26 Ultra trung tính hơn',
    },
    {
      title: 'Vì sao đại học Mỹ tìm kiếm ứng viên có tư duy lãnh đạo?',
      description: 'Tham gia hội thảo để giải mã tư duy lãnh đạo, tăng cơ hội trúng tuyển và săn học bổng ĐH Mỹ.',
    },
    {
      title: 'Bốn định hướng Việt Nam - Hàn Quốc hợp tác khoa học công nghệ',
      description:
        'Việt Nam - Hàn Quốc hợp tác khoa học, công nghệ theo hướng thực chất, gắn nhu cầu của doanh nghiệp và giới nghiên cứu, thúc đẩy công nghệ chiến lược và phát triển nguồn nhân lực.',
    },
    {
      title: 'Việt Nam được đánh giá cao về sử dụng chỉ số đổi mới sáng tạo',
      description:
        'Việt Nam được WIPO đánh giá cao trong việc sử dụng chỉ số GII như một công cụ điều hành, cùng nỗ lực dùng đổi mới sáng tạo để phát triển quốc gia.',
    },
  ];

  await test.step('Go to Note Page', async () => {
    await personalNotePage.openMaterialPage();
    await personalNotePage.gotoPage('note');
  });

  await test.step('Add Notes', async () => {
    await personalNotePage.addNotes(arrNote);
  });

  const key = 'Việt Nam';
  await test.step('Search key', async () => {
    await personalNotePage.search(key);
  });

  await test.step('Verify search result', async () => {
    await personalNotePage.verifySearchResult(key);
  });
});
