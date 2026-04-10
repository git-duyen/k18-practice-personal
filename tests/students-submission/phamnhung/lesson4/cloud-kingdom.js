//Bai 2
let powerUp = "mushroom";
let effect = '';
if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    effect = "Mario is Invincible!";
} else if (powerUp === "none") {
    effect = "Mario is normal";
} else {
    effect = "Unknown power-up";
}
console.log(effect);

//Cach 2:
effect = (powerUp === "mushroom") ? "Mario becomes Super!" :
    (powerUp === "flower") ? "Mario can shoot fireballs!" :
        (powerUp === "star") ? "Mario is Invincible!" :
            (powerUp === "none") ? "Mario is normal" :
                "Unknown power-up";
console.log(effect);