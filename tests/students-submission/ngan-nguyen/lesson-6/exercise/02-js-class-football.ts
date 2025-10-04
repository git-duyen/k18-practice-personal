interface Player {
    playerName: string;
    age: number;
    id: number;
    country: string;
}

class Team {
    name: string
    players: Player[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    // Thêm cầu thủ vào đội
    addPlayer(player: Player): void {
        const existPlayer = this.players.some(p => p.id === player.id);
        if (existPlayer) {
            console.log(`Player id ${player.id} ("${player.playerName}") already exists.`);
            return;
        } else {
            this.players.push(player);
            console.log(`Player with id ${player.id} ("${player.playerName}") is added successfully`);

        }
    }

    // Liệt kê tất cả cầu thủ trong đội
    listPlayer(): void {
        console.log(`---------------------------------------`);
        console.log(`------Football team: ${this.name}------ `);
        console.log(`---------------------------------------`);
        if (this.players.length === 0) {
            console.log(`No player in this team`);
            return;
        }
        const sortedPlayers = [...this.players].sort((a, b) => a.id - b.id);
        sortedPlayers.forEach(player => {
            console.log(`ID: ${player.id}, Name: ${player.playerName}, Age: ${player.age}, Country: ${player.country}`);
        })
    }

}

// Kiểm tra hoạt động 
const chelsea = new Team("Chelsea");
// Kiểm tra phương thức thêm cầu thủ
chelsea.addPlayer({id: 4, playerName: "A", age: 23, country: "UK"});
chelsea.addPlayer({id: 7, playerName: "B", age: 19, country: "CA"});
chelsea.addPlayer({id: 8, playerName: "C", age: 20, country: "DE"});
chelsea.addPlayer({id: 2, playerName: "D", age: 22, country: "US"});
chelsea.addPlayer({id: 9, playerName: "E", age: 19, country: "FI"});

// Thêm trùng id thì sẽ có thông báo id đã tồn tại
chelsea.addPlayer({id: 9, playerName: "G", age: 20, country: "FI"});

// Kiểm tra phương thức liệt kê danh sách cầu thủ
chelsea.listPlayer()

// Kiểm tra liệt kê danh sách rỗng
const juventus = new Team("Juventus");
juventus.listPlayer();