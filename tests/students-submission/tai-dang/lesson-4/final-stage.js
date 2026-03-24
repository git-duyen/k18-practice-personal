function findAllPairsDivisibleBy17(arr) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 17 === 0) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
const pairs = findAllPairsDivisibleBy17(numbers);

console.log("Các cặp số có tổng chia hết cho 17:");
pairs.forEach(pair => {
    console.log(`(${pair[0]}, ${pair[1]})`);
});
console.log(`\nTổng số cặp: ${pairs.length}`);