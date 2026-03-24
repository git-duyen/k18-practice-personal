1. // Khởi tạo mảng các character
const characters = [
    { name: "Luna", level: 5, health: 100 },
    { name: "Mario", level: 10, health: 200 },
    { name: "Peach", level: 8, health: 500 }
];

// Hàm createCharacters - sử dụng map để tạo mảng mới với power up
function createCharacters(characters) {
    return characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));
}

// Tạo mảng charactersPowerUp
const charactersPowerUp = createCharacters(characters);
console.log("Characters Power Up:", charactersPowerUp);

// Lọc ra possibleWinners - những nhân vật có health > 1000
const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
console.log("Possible Winners:", possibleWinners);


//2. 
let player = [
    {name: "Luna", score: 1000},
    {name: "Mario", score: 2000},
    {name: "Peach", score: 1500},
    {name: "Bowser", score: 2500}
];
function printLeaderboard(player) {
    // Sắp xếp mảng player theo điểm số cao đến thấp
    const sortedPlayers = player.sort((a, b) => b.score - a.score);
    
    // In ra bảng xếp hạng
    console.log("Leaderboard:");
    sortedPlayers.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name}: ${player.score}`);
    });
}

console.log(printLeaderboard(player));