1. Git 
1.1 : git merge 
- **Fast forwrad merge** : Merge không tạo ra commit merge , only xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo nhánh feature
nghiax là : chung lịch sử 
- **Three way merge** : khi merge có tạo ra commit merge, xảy ra khhi muốn merge branch vào main mà lịch sử của 2 branch này có sự khác nhau
1.2 : rebase
- cập nhật từ nhánh main vào nhánh feature , dựa theo time merge
git re-base <tên nhánh>
- Cách gom commit ( squash)
git rebase -i HEAD <số commit> 
Số commit : là số commit muốn gom lại
=> Mở ra VIM 
gõ I : để sửa 
commit đầu tiên sẽ là commit gốc
sửa các commit sau thành "s" ở đầu ( nghĩa là squash)
nhấn Enter : hiện ra message commit ( hiện tên commit có thể edit or keep )
# để comment 
1.3 : conflict
- Cùng sửa 1 dòng , sửa cùng 1 file
-Phần nằm giữa  <<< HEAD và === là các nội dung đang ở nhánh của mình
- Phần === và >>> là nội dung của nhánh muốn merge vào 

=> resolve : xóa ký tự đánh dấu  sau đó lại add lại và commit 
1.4 : Force push 
đối với các nhánh đã có commit và được push lên, sau khi bạn rebasse, squash, nhánh này đã bị thay đổi thì sẽ gặp một số lỗi fialed to push .....
=> để giải quyết thì force push ( nghĩa là push bất chấp )
#git push -f <remote name> < branch name>

=> Summary
-Merge là gộp các công việc lại
- khi gộp mà 2 người sửa cunngf 1 vị trí ( cùng file) => **Conflict**
- Khi có nhiều commit nhỏ cùng 1 nhánh ( PR) , muốn gom lại **Squash**
***VIM** : 1 cái mặc định của editor
esc : thoát khỏi chế độ edit
:wq : write and quit 
2. Playwright selector 
- getByRole : tìm element cho role
button
link
textbox
checkbox
radio
heading 
listitem
ví dụ : 
test ('demo test 2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/12-dom-nested.html");
    await page.getByRole("listitem").filter({ hasText: "Ph" }).textContent();
});
test ('demo test 3', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/03-playwright-selectors.html");
    await page.getByRole('button',{name : 'Save Changes'}).click();


-getByText : tìm element theo text hiển thị 

test ('demo getbytext', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/03-playwright-selectors.html");
    await page.getByText('HocTest.Com').click();
    //await page.getByText('HocTest' , { exact: true }).click();

= getByLable
page.getbyLable (text, options)
await page.getByLabel('Email address').fill(test@gmail.com')
 -getByPlaceholder
 -getByTitle
 await expect(page.getByTitle('Title')).toHaveText(title1);

- getByAltText
- getByTestID("direction") : default dùng cho thuộc tính "data-testid"
<button id (data-testid) ="test">test</button>