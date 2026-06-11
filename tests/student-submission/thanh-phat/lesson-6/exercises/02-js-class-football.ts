interface Players {
    playerName: string,
    playerAge: number
}

class Team {
    player: Players[];

    constructor(private name: string) {
        this.name = name;
        this.player = [];
    }

    addPlayer(player: Players) {
        this.player.push(player);
        console.log(`Đã thêm: "${player.playerName}"`)
    }

    listPlayers() {
        console.log(`Danh sách cầu thủ - Đội: ${this.name}`);

        if (this.player.length === 0) {
            console.log("  (Đội chưa có cầu thủ nào)");
        }

        for(let player of this.player){
            console.log(
                `${String(player.playerName)}` +
                `${player.playerAge}`
            );
        }   
    }
}

const teamFootBall = new Team("FC Viet Nam");

teamFootBall.addPlayer({playerName: "Thanh Phat", playerAge: 18})
teamFootBall.addPlayer({playerName: "Thanh Cong", playerAge: 19})

teamFootBall.listPlayers();