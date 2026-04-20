type Player = {
    name: string;
    position: string;
    jerseyNumber: number;
}

class Team {
    name: string;
    players: Player[];

    constructor(name: string, players: Player[]) {
        this.name = name;
        this.players = players;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    listPlayers(): void {
        console.log("Danh sach cau thu: ");
        // for (let i = 0; i < this.players.length; i++) {
        //     console.log(`Tên cầu thủ: ${this.players[i].name} - Vị trí: ${this.players[i].position} - Số áo: ${this.players[i].jerseyNumber}`)
        // }
        this.players.forEach(function(player){
            console.log(`${player.name} - ${player.position} - ${player.jerseyNumber}`)
        })
    }
}

const CTA: Player = {
    name: "Cau thu A",
    position: "Tien ve",
    jerseyNumber: 1
}

const CTB: Player = {
    name: "Cau thu B",
    position: "Hau ve",
    jerseyNumber: 2
}

const teamA = new Team("Team A", []);

teamA.addPlayer(CTA);
teamA.addPlayer(CTB);
teamA.listPlayers();