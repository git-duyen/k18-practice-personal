class Team {
    name: string;
    location: string;
    players: Player[];
    
    constructor(name: string, location: string, players: Player[]) {
        this.name = name;
        this.location = location;
        this.players = players;
    }
    
    displayInfo() : void {
        console.log("Team Information:");
        console.log(`Team Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Players: ${this.players.map(player => `${player.name} (${player.position})`).join(", ")}`);
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    listPlayers(): void {
        this.players.forEach(player => {
            player.displayInfo();
        });
    }
}

class Player {
    name: string;
    position: string;
    
    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }
    
    displayInfo() : void {
        console.log(`Player: ${this.name}`);
        console.log(`Position: ${this.position}`);
    }
}

const team = new Team("datlt", "HCM", []);
const player1 = new Player("Apple", "Forward");
const player2 = new Player("Banana", "Midfielder");
team.addPlayer(player1);
team.addPlayer(player2);
team.displayInfo();

