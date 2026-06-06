let powerUp="mushroom";
let effect = '';

if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    effect = "Mario is invincible!";
} else {
    effect = "No effect found.";
}
console.log(effect);