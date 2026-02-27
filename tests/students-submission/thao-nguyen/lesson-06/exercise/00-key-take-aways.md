**1. clone**
- git clone  < link repo >

ví dụ : git clone git@github.com:thao.git

- Mở **Terminal / Command Prompt / Git Bash** và chạy:
git clone https://github.com/username/repository.git
- _nếu trùng tên với repo : copy link + <dấu cách> tên mới_

ví dụ : git clone https://github.com/username/repository.git thao

- Private repo : clone bằng link ssh
- có clone bằng https đc không ⇒ đc nhưng mỗi lần push/pull lại yêu cầu password
  **2. push**
  - Đưa code ở repository ở local tới một nhánh cụ thể trên remote
  - _Câu lệnh git push <remote_name> <branch_name>_
  - remote name : origin , personal
  - có thể xem bằng cách chạy : git remote -v
    **3. pull**
    - lấy code 1 nhánh cụ thể về local
    - câu lệnh git _Câu lệnh git pull <remote_name> <branch_name>_
      **4.stashing****
      - **git stash** : dùng đê lưu code vào 1 vùng nhớ tạm, nhưng chỉ lưu ở những file có commit trước đó, nếu muốn lưu cả các file mới (chưa có commit) : ***git stash -u***

      -**git stash pop** : dùng để lấy code ra

      -**git stash list : lấy ra list stash**

⇒ hiện ra thứ tự stash và tên

muốn lấy stash đó ra : gõ **git stash pop stash@{1} : 1 là tên stash**

_git stash save “tên” _

    **5. tạo merge request **
- Vào github : chọn repo → Pull request → New pull request
-PR chỉ tạo được khi branch của bạn khác main và đã push lên GitHub.
- điều kiện để tạo pR : main mới nhất
   ↓
tạo branch
   ↓
code
   ↓
commit
   ↓
push
   ↓
tạo PR
**jAVASCRIPT**
  1. Class
      class TenClass {
             //nội dung class : dùng để quản lý testcase
             //constructor -hàm khởi tạo
             constructor (id, name) {
             this.id=id;
             this.name=name; //thuộc tính (mỗi object sẽ có giá trị riêng)
         }
     }
     //Tạo object mới-constructor sẽ tự chạy
     let student = new Student (1, "Thao");
     console.log(student.name); //Thao
     Note : kiến thức bổ sung
     **Typescript**
     Trong class sẽ có thêm khai báo kiểu dữ liệu cho thuộc tính và phương thức
     Ví dụ :
     class Team {
     //kiểu dữ liệu cho thuộc tính
     name : string;
     players :Player [];
     constructor(name :string
       {
       this.name=name;
       this.player=[];
       }
     addPlayer(player:Player): void {
     this.players.push(player);
       }
     }
     
Note : some problems
- quay lại trước khi pull : chạy git reflog
-quay lại pull trước : git reset --hard HEAD@{1} 
1 là thứ tự, tên HEAD