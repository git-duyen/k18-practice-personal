class Team {
    name: string;
    players: string[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    // Thêm cầu thủ vào đội bóng
    addPlayer(playName: string) {
        this.players.push(playName);
    }

    //Liệt kê tất cả cầu thủ
    lisPlayers() {
        console.log("Danh sách cầu thủ của đội " + this.name + ":");
        for (let player of this.players) {
            console.log("- " + player);
        }
    }
}

const myTeam = new Team ("FC ăn kẹo");

myTeam.addPlayer("Đào Mai Chi");
myTeam.addPlayer("Nguyễn Thị Vân Anh");
myTeam.addPlayer("Nguyễn Minh Phương");
myTeam.addPlayer("Đỗ Thị Quỳnh");

myTeam.lisPlayers();