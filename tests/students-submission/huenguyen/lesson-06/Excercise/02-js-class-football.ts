class Team {
    name: string;
    players: string[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    // Thêm cầu thủ
    addPlayer(player: string): void {
        this.players.push(player);
    }

    // Liệt kê tất cả cầu thủ
    listPlayers(): void {
        console.log("Danh sách cầu thủ:");
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. ${player}`);
        });
    }
}

// Tạo đội bóng
const team = new Team("Manchester United");

// Thêm cầu thủ
team.addPlayer("Bruno Fernandes");
team.addPlayer("Rasmus Højlund");
team.addPlayer("Casemiro");

// Hiển thị danh sách cầu thủ
team.listPlayers();