
// Lesson 1: Tạo hàm createCharracters

function createCharacters(data) {
    let characters = [
        {
            name: "",
            level: 0,
            health: 0,
        }
    ];

    characters = data;

    const charactersPowerUp = characters.map((characters) => ({
        name: characters.name.toUpperCase(),
        level: characters.level * 2,
        health: characters.health * 3,
    }));

    const possibleWinners = charactersPowerUp.filter(characters => characters.health > 1000);

    console.log(possibleWinners);
}
createCharacters([
    { "name": "kyla", "level": 100, "health": 400 },
    { "name": "alice", "level": 50, "health": 300 },
    { "name": "jason", "level": 80, "health": 600 },
    { "name": "kristan", "level": 30, "health": 200 },
    { "name": "tamvo", "level": 10, "health": 500 }
]);

// Lesson 2: Tạo hàm printLeaderboard:

function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);
    for (let i = 0; i < players.length; i++) {
        if (i === 0) {
            console.log(`🥇 1. ${players[i].name} - ${players[i].score.toLocaleString()} (pts)`);
        } else if (i === 1) {
            console.log(`🥈 2. ${players[i].name} - ${players[i].score.toLocaleString()} (pts)`);
        } else if (i === 2) {
            console.log(`🥉 3. ${players[i].name} - ${players[i].score.toLocaleString()} (pts)`);
        } else {
            console.log(`   ${i + 1}. ${players[i].name} - ${players[i].score.toLocaleString()} (pts)`);
        }
    }
}
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Tamvo", score: 500 }
];
printLeaderboard(players); 