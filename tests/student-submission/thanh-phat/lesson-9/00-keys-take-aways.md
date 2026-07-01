### Git

1. Git merge <Tên nhánh>: gộp code từ nhánh A sang nhánh B
 - Có 2 loại merge: fast forward và three way merge
  + Fast forward: xảy ra khi không có commit mới nào được thêm vào nhánh chính kể từ khi tạo nhánh phụ. Khi merge, Git chỉ cần di chuyển con trỏ của nhánh chính đến commit mới nhất của nhánh phụ.
  + Three way merge: khi merge tạo ra merge commit, xảy ra khi bạn muốn merge nhánh phụ vào nhánh chính và lịch sử cả 2 nhánh đã có thay đổi

2. Git conflict: Xảy ra khi 2 hay nhiều người cùng sửa đổi cùng một vị trí (hoặc cùng một dòng) trong một file, sau đó merge các thay đổi lại với nhau
 - Cần trao đổi để giải quyết conflict trước khi muốn thay đổi


3. Git rebase: dùng để thay đổi base của nhánh, giúp tạo ra lịch sử commit sạch sẽ hơn
- Câu lệnh: git rebase <Tên nhánh>

4. Git squash: Gộp các commit lại thành 1 commit duy nhất, giúp lịch sử commit gọn gàng
- Câu lệnh: git rebase -i HEAD~<số_commit_muốn_gộp>

### Playwright
1. CSS Selector: cú pháp để chọn các html trong DOM -> Hiệu quả và ngắn gọn hơn XPath

2. Playwright Selector: là hệ thống chọn Selector mạnh mẽ của Playwright, thân thiện với người dùng
 - Các Playwright Selector như: getByRole, getByText, getByAltText, getByTitle, getByLabel
