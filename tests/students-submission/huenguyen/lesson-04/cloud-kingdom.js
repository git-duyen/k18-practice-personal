let playerName = "Mario";
let currentLives = 3;

const level1Coins = 15;
const level2Coins = 20;
const level3Coins = 35;

const totalCoins = level1Coins + level2Coins + level3Coins;
const averageCoins = totalCoins / 3;
const remainder = totalCoins % 3;

// In kết quả
console.log("Tổng số coin:", totalCoins);
console.log("Trung bình mỗi level:", averageCoins);
console.log("Số coin dư khi chia cho 3:", remainder);
