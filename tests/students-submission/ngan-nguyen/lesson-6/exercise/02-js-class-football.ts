interface Player {
    name: string;
    age: number;
    id: number;
    country: string;
}

class Team {
    private players: Player[] = [];
    constructor(public readonly name: string) {
    }

    // Thêm cầu thủ vào đội
    addPlayer(player: Player): void {
        const existPlayer = this.players.some(p => p.id === player.id);
        if (existPlayer) {
            console.log(`Player id ${player.id} ("${player.name}") already exists.`);
            return;
        }
        this.players.push(player);
        console.log(`Player with id ${player.id} ("${player.name}") is added successfully`);
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
            console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, Country: ${player.country}`);
        })
    }

}

// Kiểm tra hoạt động 
const chelsea = new Team("Chelsea");
// Kiểm tra phương thức thêm cầu thủ
chelsea.addPlayer({ id: 4, name: "A", age: 23, country: "UK" });
chelsea.addPlayer({ id: 7, name: "B", age: 19, country: "CA" });
chelsea.addPlayer({ id: 8, name: "C", age: 20, country: "DE" });
chelsea.addPlayer({ id: 2, name: "D", age: 22, country: "US" });
chelsea.addPlayer({ id: 9, name: "E", age: 19, country: "FI" });

// Thêm trùng id thì sẽ có thông báo id đã tồn tại
chelsea.addPlayer({ id: 9, name: "G", age: 20, country: "FI" });

// Kiểm tra phương thức liệt kê danh sách cầu thủ
chelsea.listPlayer()

// Kiểm tra liệt kê danh sách rỗng
const juventus = new Team("Juventus");
juventus.listPlayer();