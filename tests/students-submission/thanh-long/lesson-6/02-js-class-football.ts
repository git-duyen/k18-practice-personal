interface Player {
    name: string;
    position: string;
    number: number;
}

class Football {
    name: string;
    players: Player[];
    constructor(name: string, players: Player[]) {
        this.name = name;
        this.players = players;
    }

    addPlayer(player: Player) {
        this.players.push(player);
        console.log(`Đã thêm thành công: ${player.name}`);
    }

    listPlayers() {
        console.log(`Tên Cầu thủ: ${this.players.map(player => player.name).join(", ")}`);
        console.log(`Vị trí: ${this.players.map(player => player.position).join(", ")}`);
        console.log(`Số áo: ${this.players.map(player => player.number).join(", ")}`);
    }
}

const football = new Football("Đội bóng", [
    { name: "Ronaldo", position: "Tiền đạo", number: 7 },
    { name: "Messi", position: "Trung vệ", number: 30 },
    { name: "Neymar", position: "Hậu vệ", number: 10 }    
]);

football.addPlayer({ name: "Mbappe", position: "Tiền đạo", number: 9 });
football.listPlayers();
console.log(football.listPlayers());

