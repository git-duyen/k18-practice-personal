// bai 1
function createCharacters(characters) {
    
    let charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3

        };

    });

    let possibleWinners = charactersPowerUp.filter(character=> character.health > 1000);
    return possibleWinners;
    
}
let characters = [
        {
            "name": "Mario",
            "level": 26,
            "health": 400,
        },

        {
            "name": "Yoshi",
            "level": 22,
            "health": 300
        }


    ]
let total = createCharacters(characters);
console.log(total)

// bai 2

function printLeaderboard() {
    const players = [
    {name: "Mario", score: 1000},
    {name: "Luigi", score: 500},
    {name: "Peach", score: 350},
    {name: "Yoshi", score: 100},
    {name: "Phong", score: 900}
];
players.sort((a,b)=> b.score-a.score);

for ( let i = 0; i<players.length; i++) {
    let player = players[i]
    if (i === 0){
            console.log(`🥇 ${i+1}.${player.name}-${player.score} pts`)
        } else if (i === 1){
            console.log(`🥈 ${i+1}.${player.name}-${player.score} pts`)
        } else if (i === 2){
            console.log(`🥉 ${i+1}.${player.name}-${player.score} pts`)
        } else {
            console.log(`   ${i+1}.${player.name}-${player.score} pts`)
        }

}

/*players.forEach(
    function(player, index){
        
        if (index === 0){
            console.log(`🥇 ${index+1}.${player.name}-${player.score} pts`)
        } else if (index === 1){
            console.log(`🥈 ${index+1}.${player.name}-${player.score} pts`)
        } else if (index === 2){
            console.log(`🥉 ${index+1}.${player.name}-${player.score} pts`)
        } else {
            console.log(`   ${index+1}.${player.name}-${player.score} pts`)
        }
    } */
    




}
printLeaderboard();



