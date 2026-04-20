Remote - remote repository: repo được lưu trữ ở máy chủ từ xa (remote server), cho phép cộng tác với người khác. Mỗi remote được định danh bằng 1 tên ngắn gọn và liên kết với 1 URL
	Git remote add origin git@github.com:bba/practice.git -> liên kết local và remote
	=> tên ngắn gọn: origin, URL: git@github.com:/bba/practice.git
	
Clone: lấy code từ 1 repo có sẵn về máy -> nên dùng SSH
	Git clone <link repo>  <tên repo mới mình muốn đặt> 
	
	=> khi chạy git clone nó làm lần lượt 3 việc:
	- B1: Tạo 1 local repo: tạo thư mục mới + khởi tạo git (git init)
	- B2: git remote add origin <link repo> -> đặt tên repo đó là origin và liên kết với local
	- B3: Tải branch, file về. Branch dưới dạng origin/tên branch để phân biệt file được tải về và file local. Đồng thời tạo 1 local branch (main)
		○ Git checkout -b <branch name>: tạo branch và chuyển sang
		○ Git checkout -b <branch name> origin/<branch>: tạo branch, chuyển sang và tracking
		(kiểm tra tracking: git branch -vv)
	
Push: 
	- Nếu đã có thì update nhánh
	- Nếu chưa có nhánh tên đó thì: 
		+ tạo nhánh <tên nhánh> trên server
		+ Đẩy code, commit ở nhánh <tên nhánh> từ local lên
		
		+ Git push -u origin <tên nhánh>: thiết lập tracking với branch <tên nhánh> ở local
		+ Git push origin <tên nhánh>: không tracking
		
Pull: 
	- Git fetch: tải code trên remote tất cả các nhánh về nhưng không thay i code local: 
	Ví dụ: git fetch: tải commit mới về nhánh origin/*, không đụng tới local
	
	- Git merge: GỘP 1 nhánh (local) vào nhánh mình đang đứng (local)
	Ví dụ: đang ở main -> git merge dev -> lấy code dev gộp vào main
	
	- Git pull: = fetch remote + merge, lấy code về rồi dán
	git pull <renote name> <tên nhánh server muốn copy>
		=> chú ý đang ở nhánh nào
		
Stashing: lưu các thay đổi vùng stagging trước khi chuyển nhánh
	Git stash save "đặt tên"// lưu
	Git stash pop // paste ra trên file đã có
	Git stash push -u //stash những file chưa được tracking
	Git stash pop <id trong list>
	Git stash list //xem các stash
	
Merge/pull request:  request merrge nhánh mình vào nhánh khác
	
Convention: đặt tên branch: feat/lesson-06, fix/fill-info
	- Feat: tính năng mới
	- Fix: sửa lỗi
	- Conf: thay đổi cấu hình
	- Chore: xóa file không dùng, đổi tên file, …

Review code:
    - Cmt vào 1 dòng cụ thể: hover vào dòng đó -> hiển thị popup cmt -> Add single comment
    - Cmt vào cả file: click vào biểu tượng cmt ở góc phải bên trên mỗi file -> hiển thị popup -.> Add single comment
    
Class: khai báo kiểu dữ liệu tự custom cho các object cùn đặc điểm (thuộc tính) và hành vi (phương thức). Tên class dùng PascalCase:
	class Student {
		//thuoc tinh
		name;
		className;
		
		//constructor
		constructor(name, className) {
			this.name = name;
			this.className = className;
		}
		
		//phuong thuc
		sayMyName(){
		console.log(`My name is ${this.name}`);
		}
		
		saySomething(message){
		console.log(message);
		return `Say something: ${message}`;
		}
	}
	
	const ngocHanh = new Student("Ngoc Hanh", "K15");
	ngocHanh.sayMyName();
	ngocHanh.saySomething("hello");
	
Typescript:
	- Là JS + kiểu dữ liệu để code rõ ràng hơn
		let age: number = 25; //phải là số
		let name: string = "Hanh"; //phải là chuỗi
		let teams: string[] = ["team A", "Team B"]; //mảng chuỗi
		//age = "30"; //lỗi: không thể gán chuỗi cho số
	
	- Interface trong TS: đảm báo cấu trúc cho đối tượng có đúng các thuộc tính và kiểu dữ liệu
		interface player {
			name: string;
			position: string;
			jerseyNumber: number;
		}
		let player: player = { name: "Hanh", position: "TD", jerseyNumber: 10 };
	
	- Class TS giống JS nhưng có thêm:
	+ Khai báo kiểu dữ liệu cho thuộc tính VÀ phương thức
		class team {
			name: string;
			players: player[];
			
			constructor(name: string) {
				this.name = name;
				this.players = [];
			}
			
			addPlayer(player: player) : void {
				this.players.push(player);
			}
		}
		
		==> run TS: npx ts-node <path>
				npx tsx <path>
				
	
