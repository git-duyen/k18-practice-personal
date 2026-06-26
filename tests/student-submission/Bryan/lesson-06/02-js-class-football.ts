class Team {
  name: string;
  players: { name: string; position: string }[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  addPlayer(name: string, position: string): void {
    this.players.push({ name, position });
    console.log(`Added player: ${name}`);
  }

  listPlayers(): void {
    console.log(`Team: ${this.name}`);
    for (let i = 0; i < this.players.length; i++) {
      console.log(`- ${this.players[i].name} (${this.players[i].position})`);
    }
  }
}

// Test
const team = new Team("Manchester United");
team.addPlayer("Ronaldo", "Forward");
team.addPlayer("Rooney", "Midfielder");
team.listPlayers();