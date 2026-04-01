class Team {
  name: string;
  players: string[];
  constructor(name: string, players: string[]) {
    this.name = name;
    this.players = players;
  }
  adPlayer(member: string) {
    this.players.push(member);
  }
  listPlayers() {
    this.players.forEach((player) => {
      console.log(player);
    });
  }
}

//test
// const teamNY = new Team("New York", ["M.Jordan", "Andrew", "Michel"]);
// teamNY.listPlayers();
// teamNY.adPlayer("HieuNguyen");
// teamNY.listPlayers();
