interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
}

class TeamTS {
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
    console.log(`Players (${this.players.length}):`);
    if (this.players.length === 0) {
      console.log("  No players in the team.");
    } else {
      this.players.forEach((player, index) => {
        console.log(`  ${index + 1}. ${player.name} - ${player.position} (Jersey: ${player.jerseyNumber})`);
      });
    }
  }
}

const teamTS = new TeamTS("Thunder FC");
teamTS.addPlayer({ name: "Nguyen Van A", position: "Forward", jerseyNumber: 10 });
teamTS.addPlayer({ name: "Tran Van B", position: "Midfielder", jerseyNumber: 8 });
teamTS.listPlayers();
