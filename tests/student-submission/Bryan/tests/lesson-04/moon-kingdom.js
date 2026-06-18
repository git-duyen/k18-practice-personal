//Bài 1
function createCharacters() {

  const characters = [
    { name: "Mario", level: 10, health: 800 },
    { name: "Luigi", level: 20, health: 200 },
    { name: "Peach", level: 30, health: 100 },
  ];

  const charactersPowerUp = characters.map(character => {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3,
    };
  });

  const possibleWinners = charactersPowerUp.filter(character => {
    return character.health > 1000;
  });
console.log('Possible Winners:', possibleWinners);
}
createCharacters();
// Bài 2


function printLeaderboard() {
let players = 
[
  { name: "Mario", score: 1500 },
    { name: "Luigi", score: 1200 },
    { name: "Peach", score: 1800 },
    { name: "Bowser", score: 900 },
    { name: "Bryan", score: 1100 },
    { name: "Summer", score: 276 },
    { name: "Braxton", score: 890 },
    { name: "MyMy", score: 100 },
    { name: "Andres", score: 520 },
    ];
players.sort((a, b) => b.score - a.score);
console.log("Leaderboard:");

players.forEach((player, index) => {
    if (index === 0) {
       console.log(`🥇 ${index + 1}. ${player.name} - ${player.score} pts`);
    }
    else if (index === 1) {
  console.log(`🥈 ${index + 1}. ${player.name} - ${player.score} pts`); 
}
    else if (index === 2) {
  console.log(`🥉 ${index + 1}. ${player.name} - ${player.score} pts`); 
} else {
  console.log(`${index + 1}. ${player.name} - ${player.score} pts`);
}
});
}
printLeaderboard();

