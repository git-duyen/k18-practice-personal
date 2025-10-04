/* 
Mô tả: Bạn đang phát triển một ứng dụng quản lý đội bóng. 
Hãy tạo một class để lưu trữ thông tin cầu thủ và các phương thức để thao tác với dữ liệu này. 
Yêu cầu: 
- Tạo một class team chứa các thuộc tính: name, players (mảng các cầu thủ). 
- Tạo một phương thức addPlayer để thêm cầu thủ vào đội. 
- Tạo một phương thức listPlayers để liệt kê tất cả các cầu thủ trong đội. 
*/

interface Player {
    name: string;
    role: string;
}
class Team {
    constructor (
    public name: string,
    public players: Player[] = [],
    ) {}

    addPlayer(name: string, role: string): void {
        this.players.push({ name, role });
    }

    listPlayers(){
        console.log(`Danh sách các cầu thủ trong đội bóng: `,this.players);
    };
}

// test
const team = new Team('Việt Nam');
team.addPlayer('Nguyễn Văn A', 'Tiền đạo');
team.addPlayer('Nguyễn Văn B', 'Thủ môn');
team.addPlayer('Nguyễn Văn C', 'Hậu vệ');
team.listPlayers();
