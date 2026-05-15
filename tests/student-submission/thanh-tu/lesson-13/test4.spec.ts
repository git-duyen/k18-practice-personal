import { test } from './03-fixture';

test('Add and Search Note', async ({ personalNotePage }) => {
  const arrNote = [
    {
      title: 'Việt Nam đang trở thành "sân chơi lớn" cho startup nông nghiệp',
      description:
        'Mỗi năm Việt Nam tiêu thụ hàng chục triệu tấn phân bón và thức ăn chăn nuôi...',
    },
    {
      title: 'Các hãng Trung Quốc đua bán smartphone trên 40 triệu đồng',
      description:
        'Xiaomi, Oppo, Vivo đều đưa smartphone cao cấp nhất về Việt Nam...',
    },
    {
      title: 'AI phân tích phôi, tăng tỷ lệ thành công khi IVF',
      description:
        'Camera của hệ thống nuôi cấy phôi ở phòng lab ISO 5...',
    },
    {
      title: 'TP HCM lắp trạm số cho người dân giao dịch hành chính ngoài giờ',
      description:
        'TP HCM triển khai Trạm công dân số tại khu dân cư...',
    },
    {
      title: 'Hố đen phun luồng vật chất mạnh gấp 10.000 lần Mặt Trời',
      description:
        'Các chuyên gia lần đầu tiên trực tiếp đo sức mạnh...',
    },
    {
      title: 'DeepSeek ra mô hình V4',
      description:
        'Sau hơn một năm gây chấn động thế giới...',
    },
    {
      title: 'Xiaomi 17 Ultra đọ camera với Galaxy S26 Ultra',
      description:
        'Đều là smartphone có thông số camera tốt hàng đầu...',
    },
    {
      title: 'Vì sao đại học Mỹ tìm kiếm ứng viên có tư duy lãnh đạo?',
      description:
        'Tham gia hội thảo để giải mã tư duy lãnh đạo...',
    },
    {
      title: 'Bốn định hướng Việt Nam - Hàn Quốc hợp tác khoa học công nghệ',
      description:
        'Việt Nam - Hàn Quốc hợp tác khoa học...',
    },
    {
      title: 'Việt Nam được đánh giá cao về sử dụng chỉ số đổi mới sáng tạo',
      description:
        'Việt Nam được WIPO đánh giá cao trong việc sử dụng chỉ số GII...',
    },
  ];

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