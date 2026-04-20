class TaiFootball {
    constructor(public name: string, public players: { name: string, position: string, goals: number }[]) {
        this.name = name;
        this.players = players;
    }

    addPlayer(name: string, position: string, goals: number) {
        this.players.push({ name, position, goals });
    }

    listPlayers() {        
        return this.players.map(player => `${player.name} - ${player.position} - Goals: ${player.goals}`);
    }
}

// Example usage:
let taiFootballTeam = new TaiFootball('Tai Football Team', []);
taiFootballTeam.addPlayer('John Doe', 'Forward', 10);
taiFootballTeam.addPlayer('Jane Smith', 'Midfielder', 5);
taiFootballTeam.addPlayer('Bob Johnson', 'Defender', 2);

console.log(taiFootballTeam.listPlayers());
