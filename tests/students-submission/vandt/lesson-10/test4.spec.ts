import {expect, test} from '@playwright/test';
import { AddNote, MaterialBasePage } from './01-pom';

test ('Bai 4', async ({page}) => {
   const gotoPage1 = new MaterialBasePage(page);
   const addNote = new AddNote(page);

   await test.step('Go to page', async()=> {
      await gotoPage1.openMaterialPage();
   });

   await test.step('Click vào bài học 4', async() => {
      await gotoPage1.gotoPage("Bài học 4: Personal notes");
   });

   await test.step('Thêm mới 10 note', async() => {
     await addNote.addNote("Đường đứt gãy đe dọa dự án thủy điện lớn nhất thế giới", "Các nhà nghiên cứu Trung Quốc cảnh báo dự án xây dựng siêu đập trên sông Nhã Lỗ Tạng Bố có đường đứt gãy đang hoạt động bên dưới.");

      await addNote.addNote("Lý do nhiều cầu thủ đi giày khoét gót khi thi đấu", "Hình ảnh đôi giày khoét gót đang gây chú ý của tiền đạo đội Bồ Đào Nha Pedro Neto tại World Cup có thể là giải pháp để đối phó với hội chứng Haglund khá phổ biến trong thể thao. ");

      await addNote.addNote("Đề xuất hỗ trợ 50% lãi vay để doanh nghiệp đổi mới công nghệ", "Bộ Khoa học và Công nghệ đề xuất doanh nghiệp vay vốn đầu tư đổi mới công nghệ có thể được Nhà nước hỗ trợ một nửa lãi suất, tối đa 6% một năm và kéo dài 5 năm. ");

      await addNote.addNote("Trung Quốc thu hồi thành công tên lửa tái sử dụng", "Trung Quốc thử nghiệm thành công hệ thống thu hồi tên lửa bằng lưới gắn vào giàn nổi trên biển nhằm cạnh tranh với Mỹ trong lĩnh vực tên lửa tái sử dụng");

      await addNote.addNote("Viettel chi 252 tỷ đồng sở hữu đầu số từng gắn với SFone", "Đầu số di động 095, từng gắn với nhà mạng SFone, được Viettel đấu giá ở mức 252,5 tỷ đồng, gấp 100 lần giá khởi điểm");

      await addNote.addNote("OpenAI ra tác nhân mới và GPT-5.6", "OpenAI công bố tác nhân dành cho nhân viên văn phòng ChatGPT Work, vận hành bằng GPT-5.6 - mô hình AI tiên tiến nhất của công ty.");
   });

   await test.step('Thực hiện search note bất kỳ', async() => { 
      await addNote.searchNote("thành công");
   });

  //Kiểm tra các bài báo search được chưa keyword đã chọn
   await expect(page.getByText("Trung Quốc thu hồi thành công tên lửa tái sử dụng")).toBeVisible();
});