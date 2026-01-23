class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
        console.log(`Đã thêm cầu thủ: ${player}`);
    }

    listPlayers() {
        console.log(`Danh sách cầu thủ của đội ${this.name}:`);
        for (const player of this.players) {
            console.log(player);
        }
    }
}

const team1 = new Team("Manchester United");
team1.addPlayer("Ronaldo");
team1.addPlayer("Bruno Fernandes");
team1.addPlayer("Rashford");

team1.listPlayers();