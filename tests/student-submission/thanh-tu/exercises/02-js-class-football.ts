interface Player {
    name: string;
    position: string;
    playerNumber: number;
}

// class Team {
//     name: string;
//     players: Player[];

//     constructor(name: string) {
//         this.name = name;
//         this.players = [];
//     }

//     addPlayer(player: Player): void {
//         this.players.push(player);
//     }

//     listPlayers(): void {
//         console.log(`Team: ${this.name}`);
//         console.log(`List Players:`);
//         this.players.forEach((player, index) => {
//             console.log(
//                 `  ${index + 1}. ${player.name} - ${player.position} (Number: ${player.playerNumber})`,
//             );
//         });
//     }
// }

// const teamA = new Team("Thunder FC");
// teamA.addPlayer({ name: "Nguyen Van A", position: "Tiền đạo", playerNumber: 10});
// // teamA.addPlayer({ name: "Nguyen Van A", position: "Tiền đạo", playerNumber: 10 });
// // teamA.addPlayer({ name: "Tran Van B", position: "Trung vệ", playerNumber: 8 });
// // teamA.addPlayer({ name: "Tran Thanh C", position: "Thủ môn", playerNumber: 0 });
// // teamA.addPlayer({ name: "Le Van D", position: "Hậu vệ", playerNumber: 12 });
// teamA.listPlayers();

class footballTeam {
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
        console.log(`Team name: ${this.name}`);
        console.log("Player List: ");
        this.players.forEach((player, index) => {
            console.log(
                `   ${index + 1}. ${player.name} - ${player.position} (Number: ${player.playerNumber})`,
            );
        });
    }
}

const teamA = new footballTeam("MyDream FC");
teamA.addPlayer({ name: "Nguyen Van A", position: "Tiền đạo", playerNumber: 10 });
teamA.addPlayer({ name: "Tran Van B", position: "Trung vệ", playerNumber: 8 });
teamA.addPlayer({ name: "Le Van D", position: "Hậu vệ", playerNumber: 12 });
teamA.addPlayer({ name: "Tran Thanh C", position: "Thủ môn", playerNumber: 0 });
teamA.listPlayers();