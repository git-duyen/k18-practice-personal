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
    console.log(
      `Đội bóng ${this.name} - Danh sách các cầu thủ : ${this.players}`,
    );
  }
}

const footballTeam = new Team("PSG");
footballTeam.addPlayer("A7");
footballTeam.addPlayer("M10");
footballTeam.addPlayer("QH19");
footballTeam.listPlayers();
