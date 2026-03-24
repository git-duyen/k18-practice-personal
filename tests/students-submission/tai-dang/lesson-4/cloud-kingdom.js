let powerUp = "mushroom";
let effect = "";
if (powerUp === "mushroom") {
  effect = "supper";
}
else if (powerUp === "flower") {
  effect = "fireballs";
}
else if (powerUp === "star") {
  effect = "invincible";
}
else if (powerUp === "none") {
  effect = "normal";
}
else {
  effect = "Unknown power-up!";
}   
console.log("Effect: " + effect);
let playerName = "Mario";
let currentLives = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;

function calculateTotalPoints(level1, level2, level3) {
  return level1 + level2 + level3;
}
console.log("Total points for " + playerName + ":  " + calculateTotalPoints(level1, level2, level3));

function calculateAveragePoints(level1, level2, level3) {
  return calculateTotalPoints(level1, level2, level3) / 3;
}
console.log("Average points for " + playerName + ":  " + calculateAveragePoints(level1, level2, level3));

console.log("Excess coins for " + playerName + ":  " + (calculateTotalPoints(level1, level2, level3) % 3));
