class Player {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Team {
  name: string;
  players: Player[];

  constructor(name: string, players: Player[]) {
    this.name = name;
    this.players = players;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  listPlayer() {
    return this.players.map((player) => player.name);
  }
}

const player1 = new Player("Thanh", 22);
const player2 = new Player("Phong", 22);
const player3 = new Player("Duy", 23);

const team = new Team("IT", [player1, player2]);

team.addPlayer(player3);

const namePlayer = team.listPlayer();

console.log(namePlayer);
