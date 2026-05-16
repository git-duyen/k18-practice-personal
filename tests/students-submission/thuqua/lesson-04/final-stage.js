function findPairsDivisibleBy17() {
const pairs = [];
for (let i = 1; i <= 100; i++){
    for (let j = i; j <= 100; j++) {
        if ((i + j) % 17 === 0) {
            pairs.push(`(${i},${j})`);
        }
    }
}
return pairs;
}

const result = findPairsDivisibleBy17();
console.log(result.join(", "));
console.log("Total pairs:", result.length);