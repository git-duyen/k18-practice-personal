class Team {
	name: string;
	players: string[];

	constructor(name: string) {
		this.name = name;
		this.players = [];
	}

	addPlayer(player: string): void {
		this.players.push(player);
	}

	listPlayers(): void {
		console.log(`Team ${this.name} has the following players: ${this.players}`);
	}
}

const team = new Team("Manchester United");
team.addPlayer("Cristiano Ronaldo");
team.addPlayer("Bruno Fernandes");
team.addPlayer("Marcus Rashford");
team.listPlayers();
