interface Player {
    tenCauThu: string;
    soAo: number;
    tuoi: number;
};

class team {
    //thuộc tính property
    name: string;
    players: Player[];

    //hàm khởi tạo constructor
    constructor(name: string) {
        this.name = name;
        this.players = [];
    };

    //phương thức thêm cầu thủ vào đội
    addPlayer(player: Player): void {
        this.players.push(player);
    };
    //phương thức liệt kê tất cả cầu thủ trong đội
    listPlayers() {
        let danhsach: Player[] = [];
        for (let i = 0; i < this.players.length; i++) {
            danhsach.push(this.players[i]);
        };
        return danhsach;
    }
}
let player1: Player = { tenCauThu: "HoangManh", soAo: 11, tuoi: 23 };
let player2: Player = { tenCauThu: "HoangMinh", soAo: 21, tuoi: 24 };
let player3: Player = { tenCauThu: "HoangAn", soAo: 15, tuoi: 25 };
const team1 = new team("FC Hà Nội");
team1.addPlayer(player1);
team1.addPlayer(player2);
team1.addPlayer(player3);
console.log(team1.listPlayers());