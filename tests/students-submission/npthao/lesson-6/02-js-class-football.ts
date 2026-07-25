class Player {
    name: string;
    position: string;
    number: number;

    constructor(name: string, position: string, number: number){
        this.name = name;
        this.position = position;
        this.number = number;
    }
}

class Football {
    name: string;
    players: Player[];

    constructor(name: string, players: Player[]){
        this.name = name;
        this.players = players;
    }

    addPlayer(player: Player){
        this.players.push(player);
        console.log(`Them thanh cong: ${player.name}`);
    }

    listPlayers(){
        console.log(`Name: ${this.players.map(player => player.name).join(", ")}`);
        console.log(`Position: ${this.players.map(player => player.position).join(", ")}`);
        console.log(`Number: ${this.players.map(player => player.number).join(", ")}`);
    }

}

const football = new Football("Đội bóng", [
    { name: "Muller", position: "MF", number: 13 },
    { name: "Musiala", position: "MF", number: 10 },
    { name: "Pavlovic", position: "MF", number: 15 }    
]);

football.addPlayer({ name: "Kloser", position: "FW", number: 11 });
football.listPlayers();
console.log(football.listPlayers());