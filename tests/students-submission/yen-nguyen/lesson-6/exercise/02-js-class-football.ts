type Player = {
    name: string;
    position: string;
    number: number;
};

class Team {
    name: string;
    players: Player[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    listPlayers(): void {
        console.log(`Team: ${this.name}`);

        for (const player of this.players) {
            console.log(`Number: ${player.number}, Name: ${player.name}, Position: ${player.position}`);
        }
    }
}

const team = new Team("Viet Nam");

team.addPlayer({
    name: "Nguyen Van A",
    position: "Forward",
    number: 10
});

team.addPlayer({
    name: "Tran Van B",
    position: "Goalkeeper",
    number: 1
});

team.addPlayer({
    name: "Le Van C",
    position: "Midfielder",
    number: 8
});

team.listPlayers();