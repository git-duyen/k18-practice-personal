//Ex1

function createCharacters() {
  const characters = [
    { name: "Mia", level: 10, health: 200 },
    { name: "Hue", level: 15, health: 400 }
  ];

  const charactersPowerUp = characters.map(char => ({
    name: char.name.toUpperCase(), // đảm bảo có name
    level: char.level * 2,
    health: char.health * 3
  }));

  const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

  console.log("Power Up:", charactersPowerUp);
  console.log("Winners:", possibleWinners);

  return possibleWinners;
}

createCharacters();

//Ex2 
function printLeaderboard(players) {
  const sorted = players.sort((a, b) => b.score - a.score);

  const result = sorted.map((player, index) => {
    let medal = "";

    if (index === 0) medal = "🥇 ";
    else if (index === 1) medal = "🥈 ";
    else if (index === 2) medal = "🥉 ";

    return `${medal}${index + 1}. ${player.name} - ${player.score} pts`;
  });

  result.forEach(line => console.log(line));
}

const players = [
  { name: "Mia", score: 100 },
  { name: "Hue", score: 80 },
  { name: "Linh", score: 90 },
  { name: "Bowser", score: 70 }
];

printLeaderboard(players);


