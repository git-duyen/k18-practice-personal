interface Player {
    name: string;
    position: string;
    number: number;
}

// Class Team
class Team {
    name: string;
    players: Player[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    // Thêm cầu thủ
    addPlayer(player: Player): void {
        this.players.push(player);
    }

    // Hiển thị danh sách cầu thủ
    listPlayers(): void {
        if (this.players.length === 0) {
            console.log("Đội chưa có cầu thủ");
            return;
        }

        console.log(`Danh sách cầu thủ của đội ${this.name}: `);

        for (let player of this.players) {
            console.log(`Tên: ${player.name} - Vị trí: ${player.position} - Số áo: ${player.number}`);
        }

    }
}

// Tạo đội bóng
const team1 = new Team("Đà Nẵng");

// Thêm cầu thủ
team1.addPlayer({
    name: "Quang Hải",
    position: "Tiền Đạo",
    number: 19
});

team1.addPlayer({
    name: "Văn Toàn",
    position: "Tiền Vệ",
    number: 9
});

// Hiển thị danh sách
team1.listPlayers();